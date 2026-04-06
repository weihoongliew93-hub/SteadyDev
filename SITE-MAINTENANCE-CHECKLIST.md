# Site Maintenance Checklist

Quick reference for maintaining the SteadyDevs website.

## 📝 Adding a New Blog Post

- [ ] Add content to `blog/blog-posts.json`
- [ ] Add hero image to `images/blog/` (optional but recommended)
- [ ] Update post listing in `blog/index.html` (blogPosts array)
- [ ] Update `sitemap.xml` with new post URL
- [ ] Update `lastmod` date in sitemap.xml to current date
- [ ] Test the post loads correctly
- [ ] Submit updated sitemap to Google Search Console

**See:** `blog/README.md` for detailed blog instructions  
**See:** `SITEMAP-UPDATE-INSTRUCTIONS.md` for sitemap help

## 🆕 Adding a New Page

- [ ] Create the HTML page
- [ ] Add navigation link to all pages (if needed):
  - index.html
  - about.html
  - services.html
  - packages.html
  - contact.html
  - blog/index.html
  - blog/blog-template.html
- [ ] Add to `sitemap.xml`
- [ ] Update `lastmod` dates in sitemap.xml
- [ ] Test all navigation links work
- [ ] Submit updated sitemap to Google Search Console

## 🔧 Updating Navigation

When you add/remove/change navigation items, update these files:
- index.html
- about.html  
- services.html
- packages.html
- contact.html
- blog/index.html
- blog/blog-template.html
- Any other HTML pages in the site

**Pro tip:** Use multi-replace or find-replace-all to update navigation across all files at once.

## 📊 SEO Updates

After significant changes:
- [ ] Update meta descriptions if needed
- [ ] Check title tags are accurate
- [ ] Update Open Graph tags
- [ ] Update sitemap.xml
- [ ] Submit sitemap to Google Search Console
- [ ] Check Google Analytics is tracking properly

## 🎨 Style Updates

When changing `assets/style.css`:
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check navigation menu on mobile
- [ ] Verify responsive breakpoints work
- [ ] Consider updating version number in CSS link (e.g., `style.css?v=84`)

## 📁 File Organization

Current structure:
```
SteadyDev/
├── index.html                  # Homepage
├── about.html                  # About page
├── services.html               # Services page
├── packages.html               # Packages page
├── contact.html                # Contact page
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Search engine rules
├── assets/
│   └── style.css              # Main stylesheet
├── images/
│   ├── favicon.svg            # Site icon
│   └── SteadyDevsLogo.svg     # Logo
├── blog/
│   ├── index.html             # Blog listing page
│   ├── blog-template.html     # Template for rendering posts
│   ├── blog-posts.json        # Blog content database
│   ├── README.md              # Blog instructions
│   └── *.html                 # Individual blog posts
└── Documentation/
    ├── SITEMAP-UPDATE-INSTRUCTIONS.md
    └── SITE-MAINTENANCE-CHECKLIST.md (this file)
```

## 🚀 Deployment Checklist

Before publishing changes:
- [ ] Test all pages load correctly
- [ ] Test all navigation links work
- [ ] Test on mobile and desktop
- [ ] Check for broken links
- [ ] Verify images load properly
- [ ] Test contact form (if applicable)
- [ ] Validate HTML at https://validator.w3.org/
- [ ] Validate sitemap at https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Check Google Analytics tracking code is present
- [ ] Review for typos and grammar
- [ ] Test page load speed

## 🔍 Regular Maintenance Tasks

### Weekly
- [ ] Check for new contact form submissions
- [ ] Review Google Analytics data
- [ ] Check for any broken links

### Monthly  
- [ ] Review and update content if needed
- [ ] Check sitemap is accurate
- [ ] Review blog post ideas
- [ ] Check site performance

### Quarterly
- [ ] Update packages/pricing if needed
- [ ] Review services offered
- [ ] Update testimonials/case studies
- [ ] Check competitor websites for ideas

## 📞 Support Resources

- **HTML Validator:** https://validator.w3.org/
- **Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com/
- **PageSpeed Insights:** https://pagespeed.web.dev/

## 💡 Future Improvements to Consider

- Add more blog posts regularly
- Implement blog categories/tags filtering
- Add customer testimonials section
- Create case studies page
- Add FAQ section
- Implement newsletter signup
- Add live chat widget
- Create a portfolio page
- Add schema markup for better SEO
- Consider migrating to a static site generator or CMS