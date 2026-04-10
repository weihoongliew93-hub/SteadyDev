/**
 * Blog Post Generator
 * Generates static HTML files from blog-posts.json for better SEO
 */

const fs = require('fs');
const path = require('path');

// Read blog posts JSON from parent directory
const blogPosts = JSON.parse(fs.readFileSync('../blog-posts.json', 'utf8'));

console.log(`🚀 Building ${blogPosts.length} blog post(s)...`);

// HTML template
function generateHTML(post) {
  // Render content blocks
  let contentHTML = '';
  
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
  
  <link rel="stylesheet" href="../assets/style.css?v=83">
  <link rel="stylesheet" href="blog-styles.css?v=1">
  
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
  <!-- Mobile Menu Overlay -->
  <div class="nav-overlay" id="navOverlay"></div>
  
  <header>
    <div class="header-content">
      <a href="../index.html" class="logo-link">
        <img src="../images/SteadyDevsLogo.svg" alt="SteadyDevs Logo" class="site-logo">
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="mainNav">
        <a href="../index.html">Home</a>
        <a href="../about.html">About</a>
        <a href="../services.html">Services</a>
        <div class="nav-dropdown">
          <a>Packages</a>
          <div class="dropdown-content">
            <a href="../packages.html">All Packages</a>
            <a href="../pricing-terms.html">Pricing & Terms</a>
          </div>
        </div>
        <a href="../portfolio.html">Portfolio</a>
        <a href="index.html" class="active">Blog</a>
        <a href="../contact.html">Contact</a>
      </nav>
    </div>
  </header>

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
    </main>
  </div>

  <footer>
    <p>&copy; 2026 Steady Devs Solutions (SSM: 202603092285) | <a href="https://www.linkedin.com/company/steadydevs" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">LinkedIn</a></p>
    <p style="margin-top: 8px;">Reliable solutions. Clear guidance. Less stress.</p>
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
    
    // Dropdown toggle
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector(':scope > a');
      dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Close other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });
        dropdown.classList.toggle('open');
      });
    });
    
    // Close menu on actual navigation link clicks (not dropdown toggles)
    const navLinks = mainNav.querySelectorAll('a:not(.nav-dropdown > a)');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
      });
    });
    
    // Close dropdowns when clicking outside on desktop
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('open');
        });
      }
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
</body>
</html>`;
}

// Generate HTML for each post and write to parent directory
blogPosts.forEach(post => {
  const html = generateHTML(post);
  const filename = `../${post.slug}.html`;
  fs.writeFileSync(filename, html);
  console.log(`✅ Generated: ${post.slug}.html`);
});

console.log(`\n🎉 Done! Generated ${blogPosts.length} blog post(s).`);
console.log('\n📝 Next steps:');
console.log('   1. Review the generated HTML files');
console.log('   2. Test them locally');
console.log('   3. Commit and deploy to GitHub Pages');
