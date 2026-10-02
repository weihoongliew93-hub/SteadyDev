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

const STYLE_VER = assetVersion('../../assets/f.css');       // shared site stylesheet (design F)
const BLOG_STYLE_VER = assetVersion('../blog-styles.css');  // blog-specific stylesheet

console.log(`🚀 Building ${blogPosts.length} blog post(s)...`);
console.log(`   f.css?v=${STYLE_VER} · blog-styles.css?v=${BLOG_STYLE_VER}`);

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
            <p>${block.text}</p>
            <a href="${block.buttonLink}" class="f-btn f-btn--primary cta-button">${block.buttonText}</a>
          </div>\n`;
        break;
      case 'image':
        contentHTML += `
          <figure class="blog-figure">
            <img src="../${block.src}" alt="${block.alt}">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}
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
  const isoModifiedDate = toISO8601(post.updated || post.date);

  // Search-facing title and description. seoTitle/metaDescription let the
  // <title> and snippet match how people actually search, while the on-page
  // H1 stays as written; both fall back to title/excerpt when absent.
  const seoTitle = post.seoTitle || post.title;
  const metaDescription = post.metaDescription || post.excerpt;

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

  // FAQPage schema from the post's FAQ block(s), so search engines and AI
  // answers can read the Q&A directly. JSON.stringify handles the escaping.
  const faqItems = (post.content || [])
    .filter(block => block.type === 'faq' && Array.isArray(block.items))
    .flatMap(block => block.items);
  const stripTags = str => String(str || '').replace(/<[^>]+>/g, '').trim();
  const faqSchema = faqItems.length > 0 ? `

  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: stripTags(item.question),
      acceptedAnswer: { '@type': 'Answer', text: stripTags(item.answer) }
    }))
  }, null, 2).replace(/\n/g, '\n  ')}
  </script>` : '';

  return `<!DOCTYPE html>
<html lang="en" data-design="f">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${seoTitle} | SteadyDevs</title>
  <meta name="description" content="${metaDescription}">
  
  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="../images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon.svg">
  
  <!-- Open Graph / Social Media Meta Tags -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://steadydevs.com/blog/${post.slug}.html">
  <meta property="og:title" content="${seoTitle}">
  <meta property="og:description" content="${metaDescription}">
  <meta property="og:image" content="https://steadydevs.com/${post.heroImage || 'images/SteadyDevsLogo.svg'}">
  
  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${seoTitle}">
  <meta name="twitter:description" content="${metaDescription}">
  <meta name="twitter:image" content="https://steadydevs.com/${post.heroImage || 'images/SteadyDevsLogo.svg'}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://steadydevs.com/blog/${post.slug}.html">
  
  <script>try{var t=localStorage.getItem("sd-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>
  <meta name="theme-color" content="#0A0B0F">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Chakra+Petch:wght@600;700&display=swap">
  <link rel="stylesheet" href="../assets/f.css?v=${STYLE_VER}">
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
    "description": "${metaDescription.replace(/"/g, '\\"')}",
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
  </script>${howToSchema}${faqSchema}
  
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
  <a class="f-skip" href="#main">Skip to content</a>
  <div id="sd-site-nav"></div>
  <script src="../assets/site-nav.js?v=2"></script>
  <div id="sd-legacy-stubs" hidden><button id="menuToggle" type="button"></button><nav id="mainNav"></nav><div id="navOverlay"></div><div id="stickyCta"></div><button id="backToTop" type="button"></button></div>

  <div class="f-container blog-crumbs">
    <nav class="f-breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a><span aria-hidden="true">/</span><a href="index.html">Blog</a><span aria-hidden="true">/</span><span>${post.title}</span>
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

  <div class="f-container blog-layout">
    <!-- TOC toggle for narrower screens -->
    <button type="button" class="toc-toggle-btn" id="tocToggle" aria-label="Show table of contents" aria-controls="blogToc">On this page</button>
    
    <!-- Table of Contents -->
    <aside class="blog-toc" id="blogToc" style="display: none;">
      <div class="blog-toc-title">On This Page</div>
      <ul class="blog-toc-list" id="tocList"></ul>
    </aside>
    
    <main class="blog-content" id="main">
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

  <section class="f-section--line f-glow-bottom">
    <div class="f-container f-cta">
      <h2 class="f-h2">Running into this in your own system?</h2>
      <p>Tell us what's going on. A senior engineer will reply with a written assessment, at no cost.</p>
      <div class="f-actions">
        <a class="f-btn f-btn--primary f-btn--glow" href="../contact.html">Book a consultation</a>
        <a class="f-btn f-btn--secondary" href="index.html">More articles</a>
      </div>
    </div>
  </section>

  <footer class="ff">
      <div class="f-container">
        <div class="ff__grid">
          <div class="ff__brand">
            <a href="../index.html" class="fh__logo"><svg class="fh__mark" viewBox="1 5 23 30" aria-hidden="true" focusable="false"><rect class="sd-b1" x="2" y="24" width="10" height="10" rx="2"/><rect class="sd-b2" x="13" y="18" width="10" height="16" rx="2"/><rect class="sd-b3" x="2" y="12" width="10" height="10" rx="2"/><rect class="sd-b4" x="13" y="6" width="10" height="10" rx="2"/></svg>SteadyDevs</a>
            <p>Software and engineering for systems Malaysian businesses can't afford to lose.</p>
          </div>
          <div class="ff__col">
            <h2>Offerings</h2>
            <ul>
              <li><a href="../solutions.html">Engineering services</a></li>
              <li><a href="../einvoice.html">EInvoice Platform</a></li>
              <li><a href="../venue-booking.html">Venue Booking</a></li>
            </ul>
          </div>
          <div class="ff__col">
            <h2>Company</h2>
            <ul>
              <li><a href="../about.html">About</a></li>
              <li><a href="../portfolio.html">Case studies</a></li>
              <li><a href="../blog/index.html">Blog</a></li>
              <li><a href="../contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="ff__col">
            <h2>More</h2>
            <ul>
              <li><a href="../pricing-terms.html">Pricing terms</a></li>
              <li><a href="../my-account.html">My account</a></li>
              <li><a href="https://www.linkedin.com/company/steadydevs">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="ff__base">
          <span>&copy; 2026 Steady Devs Solutions · SSM 202603092285</span>
          <span>Malaysia · Singapore</span>
        </div>
      </div>
    </footer>

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
      if (window.innerWidth < 1100) {
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
            if (window.innerWidth < 1100) {
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
        if (window.innerWidth < 1100 && 
            !tocContainer.contains(e.target) && 
            !tocToggleBtn.contains(e.target) &&
            tocContainer.classList.contains('toc-visible')) {
          tocContainer.classList.remove('toc-visible');
        }
      });
      
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1100) {
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
  // Skip drafts - unpublished posts should not have a live page
  if (post.published === false) {
    console.log(`⏭️  Skipped: ${post.slug}.html (draft - published: false)`);
    skippedCount++;
    return;
  }

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
