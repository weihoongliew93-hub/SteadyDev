/**
 * Blog Post Generator
 * Generates static HTML files from blog-posts.json for better SEO
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Read blog posts JSON from parent directory
const blogPosts = JSON.parse(fs.readFileSync('../blog-posts.json', 'utf8'));

// Content-hash cache-busting: the ?v= token is derived from the CSS file's
// actual contents, so editing the stylesheet and rebuilding automatically
// produces a fresh token — browsers pick up the new styling with no manual
// version bumping. Paths are relative to this script's dir (blog/_build).
function assetVersion(relPath) {
  try {
    const buf = fs.readFileSync(path.join(__dirname, relPath));
    return crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
  } catch (e) {
    console.warn(`⚠️  Could not hash ${relPath} (${e.message}); falling back to timestamp.`);
    return String(Date.now());
  }
}

const STYLE_VER = assetVersion('../../assets/style.css');   // shared site stylesheet
const BLOG_STYLE_VER = assetVersion('../blog-styles.css');  // blog-specific stylesheet

console.log(`🚀 Building ${blogPosts.length} blog post(s)...`);
console.log(`   style.css?v=${STYLE_VER} · blog-styles.css?v=${BLOG_STYLE_VER}`);

// Helper: Estimate word count from content blocks
function estimateWordCount(content) {
  if (!content || !Array.isArray(content)) return 0;
  
  let text = '';
  content.forEach(block => {
    if (block.text) text += block.text + ' ';
    if (block.items && Array.isArray(block.items)) {
      text += block.items.join(' ') + ' ';
    }
    if (block.type === 'faq' && block.items) {
      block.items.forEach(item => {
        text += (item.question || '') + ' ' + (item.answer || '') + ' ';
      });
    }
  });
  
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

// Helper: Convert date to ISO 8601 format with timezone
function toISO8601(dateString) {
  // Assume dates are in YYYY-MM-DD format, add time and timezone
  return dateString + 'T00:00:00+08:00';
}

// Helper: Determine article section from tags
function getArticleSection(tags) {
  if (!tags || tags.length === 0) return 'Software Development';
  
  const primaryTag = tags[0];
  const sectionMap = {
    'Legacy Systems': 'Legacy Systems Management',
    '.NET': 'Software Development',
    'Automation': 'Business Automation',
    'E-Invoice': 'Compliance & Regulation',
    'POS Systems': 'Business Systems',
    'Business Risk': 'Business Management',
    'Case Study': 'Success Stories'
  };
  
  return sectionMap[primaryTag] || 'Software Development';
}

// Helper: Detect if article is a guide/how-to
function isGuideArticle(title) {
  const guideKeywords = ['guide', 'how to', 'how-to', 'step-by-step', 'tutorial', 'what to do', 'now what'];
  const lowerTitle = title.toLowerCase();
  return guideKeywords.some(keyword => lowerTitle.includes(keyword));
}

// Helper: Extract how-to steps from content
function extractHowToSteps(content) {
  if (!content || !Array.isArray(content)) return [];
  
  const steps = [];
  let stepNumber = 1;
  
  content.forEach(block => {
    // Look for heading2 or heading3 that might be steps
    if ((block.type === 'heading2' || block.type === 'heading3') && block.text) {
      const text = block.text;
      // Check if it looks like a step
      if (text.match(/^(step|phase|week|month|day|first|second|third|\d+\.|\d+\))/i)) {
        steps.push({
          position: stepNumber++,
          name: text.replace(/^(step|phase|week|month|day)\s*\d*:?\s*/i, '').trim(),
          text: text
        });
      }
    }
  });
  
  return steps;
}

// HTML template
function generateHTML(post) {
  // Render content blocks
  let contentHTML = '';
  
  // Skip posts without content (standalone HTML files)
  if (!post.content || !Array.isArray(post.content)) {
    return null;
  }
  
  post.content.forEach(block => {
    switch (block.type) {
      case 'paragraph':
        contentHTML += `<p>${block.text}</p>\n`;
        break;
      case 'heading2':
        contentHTML += `<h2>${block.text}</h2>\n`;
        break;
      case 'heading3':
        contentHTML += `<h3>${block.text}</h3>\n`;
        break;
      case 'list':
        contentHTML += `<ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>\n`;
        break;
      case 'orderedList':
        contentHTML += `<ol>${block.items.map(item => `<li>${item}</li>`).join('')}</ol>\n`;
        break;
      case 'warning':
        contentHTML += `<div class="warning-box"><p>${block.text}</p></div>\n`;
        break;
      case 'tip':
        contentHTML += `<div class="tip-box"><p>${block.text}</p></div>\n`;
        break;
      case 'cta':
        contentHTML += `
          <div class="cta-box">
            <h3>${block.title}</h3>
            <p style="color: #D1D5DB;">${block.text}</p>
            <a href="${block.buttonLink}" class="cta-button">${block.buttonText}</a>
          </div>\n`;
        break;
      case 'image':
        contentHTML += `
          <figure style="margin: 30px 0;">
            <img src="../${block.src}" alt="${block.alt}" style="width: 100%; border-radius: 8px;">
            ${block.caption ? `<figcaption style="text-align: center; color: #9CA3AF; font-size: 0.95em; margin-top: 10px; font-style: italic;">${block.caption}</figcaption>` : ''}
          </figure>\n`;
        break;
      case 'faq':
        contentHTML += `
          <div class="faq-section">
            <h2>${block.title || 'Frequently Asked Questions'}</h2>
            ${block.items.map((item, index) => `
              <div class="faq-item" data-faq-index="${index}">
                <div class="faq-question">
                  <span class="faq-question-text">${item.question}</span>
                  <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                  <p>${item.answer}</p>
                </div>
              </div>
            `).join('')}
          </div>\n`;
        break;
    }
  });

  // Hero image HTML
  const heroImageHTML = post.heroImage 
    ? `<img src="../${post.heroImage}" alt="${post.heroImageAlt || post.title}" class="blog-hero-image">`
    : '';

  // Calculate word count
  const wordCount = estimateWordCount(post.content);
  
  // Format dates
  const isoPublishDate = toISO8601(post.date);
  const isoModifiedDate = toISO8601(post.date); // Use same date unless specified
  
  // Get article section
  const articleSection = getArticleSection(post.tags);
  
  // Prepare tags for metadata
  const tagString = (post.tags || []).join(', ');
  
  // Check if this is a guide article
  const isGuide = isGuideArticle(post.title);
  const howToSteps = isGuide ? extractHowToSteps(post.content) : [];
  
  // Placeholder for dynamically loaded related posts
  const relatedPostsHTML = `
    <div id="relatedArticles" data-current-post="${post.id}" data-current-tags='${JSON.stringify(post.tags || [])}'></div>`;
  
  // Generate HowTo schema if applicable
  const howToSchema = isGuide && howToSteps.length > 0 ? `
  
  <!-- HowTo Schema for Guide Content -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "${post.title.replace(/"/g, '\\"')}",
    "description": "${post.excerpt.replace(/"/g, '\\"')}",
    "image": "https://steadydevs.com/${post.heroImage || 'images/SteadyDevsLogo.svg'}",
    "step": [
      ${howToSteps.map(step => `{
        "@type": "HowToStep",
        "name": "${step.name.replace(/"/g, '\\"')}",
        "text": "${step.text.replace(/"/g, '\\"')}",
        "position": ${step.position}
      }`).join(',\n      ')}
    ]
  }
  </script>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${post.title} | SteadyDevs</title>
  <meta name="description" content="${post.excerpt}">
  
  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="../images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon.svg">
  
  <!-- Open Graph / Social Media Meta Tags -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://steadydevs.com/blog/${post.slug}.html">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt}">
  <meta property="og:image" content="https://steadydevs.com/${post.heroImage || 'images/SteadyDevsLogo.svg'}">
  
  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt}">
  <meta name="twitter:image" content="https://steadydevs.com/${post.heroImage || 'images/SteadyDevsLogo.svg'}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://steadydevs.com/blog/${post.slug}.html">
  
  <link rel="stylesheet" href="../assets/style.css?v=${STYLE_VER}">
  <link rel="stylesheet" href="blog-styles.css?v=${BLOG_STYLE_VER}">
  
  <!-- Enhanced Article Schema (BlogPosting) with AI-friendly fields -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${post.title.replace(/"/g, '\\"')}",
    "alternativeHeadline": "${post.excerpt.replace(/"/g, '\\"').substring(0, 110)}",
    "image": "https://steadydevs.com/${post.heroImage || 'images/SteadyDevsLogo.svg'}",
    "datePublished": "${isoPublishDate}",
    "dateModified": "${isoModifiedDate}",
    "author": {
      "@type": "Person",
      "name": "SteadyDevs",
      "url": "https://steadydevs.com/about.html"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SteadyDevs",
      "url": "https://steadydevs.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://steadydevs.com/images/SteadyDevsLogo.svg"
      }
    },
    "description": "${post.excerpt.replace(/"/g, '\\"')}",
    "articleSection": "${articleSection}",
    "articleBody": "${post.excerpt.replace(/"/g, '\\"')}",
    "wordCount": ${wordCount},
    "inLanguage": "en-MY",
    "about": [
      ${(post.tags || []).slice(0, 3).map(tag => `{
        "@type": "Thing",
        "name": "${tag}"
      }`).join(',\n      ')}
    ],
    "mentions": [
      {
        "@type": "SoftwareApplication",
        "name": ".NET Framework"
      }
    ],
    "keywords": "${tagString.toLowerCase()}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://steadydevs.com/blog/${post.slug}.html"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".blog-header", ".blog-content h2", ".blog-content p"]
    }
  }
  </script>${howToSchema}
  
  <!-- Article Metadata -->
  <meta property="article:published_time" content="${isoPublishDate}">
  <meta property="article:modified_time" content="${isoModifiedDate}">
  <meta property="article:author" content="SteadyDevs">
  <meta property="article:section" content="${articleSection}">
  <meta property="article:tag" content="${tagString}">
  
  <!-- Alternate Language Tags -->
  <link rel="alternate" hreflang="en-my" href="https://steadydevs.com/blog/${post.slug}.html" />
  <link rel="alternate" hreflang="en" href="https://steadydevs.com/blog/${post.slug}.html" />
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5LRWB31H8T"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5LRWB31H8T');
  </script>
</head>
<body>
  <div id="sd-site-nav"></div>
  <script src="../assets/site-nav.js"></script>

  <!-- Breadcrumb Navigation -->
  <div class="container" style="padding-top: 115px; padding-bottom: 0;">
    <nav aria-label="Breadcrumb" style="font-size: 0.95em; color: #D1D5DB; background: rgba(31, 41, 55, 0.5); padding: 10px 15px; border-radius: 6px; margin-bottom: 20px;">
      <a href="../index.html" style="color: #60A5FA; text-decoration: none; font-weight: 500;">Home</a> 
      <span style="color: #6B7280; margin: 0 8px;">/</span>
      <a href="index.html" style="color: #60A5FA; text-decoration: none; font-weight: 500;">Blog</a> 
      <span style="color: #6B7280; margin: 0 8px;">/</span>
      <span style="color: #F3F4F6;">${post.title}</span>
    </nav>
  </div>
  
  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://steadydevs.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://steadydevs.com/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${post.title}",
        "item": "https://steadydevs.com/blog/${post.slug}.html"
      }
    ]
  }
  </script>

  <div class="container">
    <!-- TOC Toggle Button for Mobile/Tablet -->
    <button class="toc-toggle-btn" id="tocToggle" aria-label="Toggle table of contents">
      ☰
    </button>
    
    <!-- Table of Contents -->
    <aside class="blog-toc" id="blogToc" style="display: none;">
      <div class="blog-toc-title">On This Page</div>
      <ul class="blog-toc-list" id="tocList"></ul>
    </aside>
    
    <main class="blog-content">
      <article>
        ${heroImageHTML}
        <div class="blog-header">
          <h1>${post.title}</h1>
          <div class="blog-meta">${post.dateDisplay} | ${post.readTime}</div>
        </div>
        ${contentHTML}
      </article>
      
      ${relatedPostsHTML}
    </main>
  </div>

  <footer>
    <p>&copy; 2026 Steady Devs Solutions (SSM: 202603092285) | <a href="https://www.linkedin.com/company/steadydevs" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">LinkedIn</a></p>
    <p style="margin-top: 8px;">Reliable solutions. Clear guidance. Less stress.</p>
    <p style="margin-top: 12px; font-size: 0.9em;">
      <a href="index.html" style="color: #9CA3AF; margin: 0 8px; text-decoration: underline;">All Articles</a> |
      <a href="topics.html" style="color: #9CA3AF; margin: 0 8px; text-decoration: underline;">Browse Topics</a>
    </p>
  </footer>
  
  <!-- Sticky Mobile CTA -->
  <div class="sticky-cta" id="stickyCta">
    <a href="../contact.html">FREE Consultation →</a>
  </div>
  
  <!-- Back to Top Button -->
  <button id="backToTop" class="back-to-top" aria-label="Back to top" style="z-index: 9999;">↑</button>

  <script>
    // Generate Table of Contents
    function generateTableOfContents() {
      const content = document.querySelector('.blog-content article');
      const headings = content.querySelectorAll('h2, h3');
      const tocList = document.getElementById('tocList');
      const tocContainer = document.getElementById('blogToc');
      
      if (headings.length === 0) {
        return;
      }
      
      // Add IDs to headings
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = \`heading-\${index}\`;
        }
      });
      
      // Build TOC
      let tocHTML = '';
      headings.forEach((heading) => {
        const level = heading.tagName.toLowerCase();
        const text = heading.textContent;
        const id = heading.id;
        
        tocHTML += \`
          <li class="blog-toc-item blog-toc-item-\${level}">
            <a href="#\${id}" class="blog-toc-link" data-target="\${id}">\${text}</a>
          </li>
        \`;
      });
      
      tocList.innerHTML = tocHTML;
      tocContainer.style.display = 'block';
      
      const tocToggleBtn = document.getElementById('tocToggle');
      if (window.innerWidth <= 1400) {
        tocToggleBtn.style.display = 'block';
      }
      
      // Smooth scrolling
      const tocLinks = tocList.querySelectorAll('.blog-toc-link');
      tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.innerWidth <= 1400) {
              tocContainer.classList.remove('toc-visible');
            }
          }
        });
      });
      
      setupScrollTracking(headings);
    }
    
    function setupScrollTracking(headings) {
      const tocLinks = document.querySelectorAll('.blog-toc-link');
      const tocContainer = document.getElementById('blogToc');
      
      function updateActiveLink() {
        const scrollPosition = window.scrollY + 120;
        let currentHeading = null;
        
        headings.forEach((heading) => {
          const headingTop = heading.offsetTop;
          if (scrollPosition >= headingTop) {
            currentHeading = heading;
          }
        });
        
        tocLinks.forEach(link => link.classList.remove('active'));
        
        if (currentHeading) {
          const activeLink = document.querySelector(\`[data-target="\${currentHeading.id}"]\`);
          if (activeLink) {
            activeLink.classList.add('active');
            
            // Auto-scroll TOC to keep active link visible
            const tocRect = tocContainer.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            const tocScrollTop = tocContainer.scrollTop;
            
            // Check if active link is above visible area
            if (linkRect.top < tocRect.top) {
              tocContainer.scrollTop = tocScrollTop - (tocRect.top - linkRect.top) - 20;
            }
            // Check if active link is below visible area
            else if (linkRect.bottom > tocRect.bottom) {
              tocContainer.scrollTop = tocScrollTop + (linkRect.bottom - tocRect.bottom) + 20;
            }
          }
        }
      }
      
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateActiveLink();
            ticking = false;
          });
          ticking = true;
        }
      });
      
      updateActiveLink();
    }
    
    // FAQ Toggle
    function setupFaqToggles() {
      const faqQuestions = document.querySelectorAll('.faq-question');
      
      faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
          const faqItem = question.parentElement;
          const isActive = faqItem.classList.contains('active');
          
          document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
          });
          
          if (!isActive) {
            faqItem.classList.add('active');
          }
        });
      });
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navOverlay = document.getElementById('navOverlay');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      navOverlay.classList.toggle('active');
    });

    navOverlay.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      navOverlay.classList.remove('active');
    });
    
    // Close mobile menu when a nav link is clicked
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
      });
    });
    
    // Back to Top
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // TOC Toggle for Mobile/Tablet
    const tocToggleBtn = document.getElementById('tocToggle');
    const tocContainer = document.getElementById('blogToc');
    
    if (tocToggleBtn) {
      tocToggleBtn.addEventListener('click', () => {
        tocContainer.classList.toggle('toc-visible');
      });
      
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1400 && 
            !tocContainer.contains(e.target) && 
            !tocToggleBtn.contains(e.target) &&
            tocContainer.classList.contains('toc-visible')) {
          tocContainer.classList.remove('toc-visible');
        }
      });
      
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1400) {
          tocToggleBtn.style.display = 'none';
          tocContainer.classList.remove('toc-visible');
        } else if (tocContainer.style.display === 'block') {
          tocToggleBtn.style.display = 'block';
        }
      });
    }
    
    // Initialize
    generateTableOfContents();
    setupFaqToggles();
  </script>
  
  <!-- Dynamic Related Posts -->
  <script src="related-posts.js"></script>
</body>
</html>`;
}

// Generate HTML for each post and write to parent directory
let generatedCount = 0;
let skippedCount = 0;

blogPosts.forEach(post => {
  const html = generateHTML(post);
  
  // Skip posts without content (standalone HTML files)
  if (html === null) {
    console.log(`⏭️  Skipped: ${post.slug}.html (no content array - using standalone HTML)`);
    skippedCount++;
    return;
  }
  
  const filename = `../${post.slug}.html`;
  fs.writeFileSync(filename, html);
  console.log(`✅ Generated: ${post.slug}.html`);
  generatedCount++;
});

console.log(`\n🎉 Done! Generated ${generatedCount} blog post(s), skipped ${skippedCount} standalone post(s).`);
console.log('\n📝 Next steps:');
console.log('   1. Review the generated HTML files');
console.log('   2. Test them locally');
console.log('   3. Commit and deploy to GitHub Pages');
