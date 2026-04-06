# ⚠️ IMPORTANT: Sitemap Update Instructions

## When to Update sitemap.xml

Update `sitemap.xml` **EVERY TIME** you:
- ✅ Add a new page to the site
- ✅ Add a new blog post
- ✅ Make significant changes to existing pages
- ✅ Change page URLs or structure

## How to Update sitemap.xml

### For New Blog Posts

When you add a new blog post, add this entry to `sitemap.xml`:

```xml
<url>
  <loc>https://steadydevs.com/blog/your-post-slug.html</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

**Note:** If using the template system (`blog-template.html?post=slug`), you don't need to add individual template URLs. The static HTML version should be in the sitemap.

### For New Pages

When you add a new main page (like a new service page, portfolio, etc.):

```xml
<url>
  <loc>https://steadydevs.com/your-new-page.html</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Priority Guidelines

Use these priority values:
- **1.0** - Homepage only
- **0.9** - Most important pages (packages, main services)
- **0.8** - Important pages (contact, blog index, services)
- **0.7** - Secondary pages (about)
- **0.6** - Individual blog posts
- **0.5** - Template/utility pages

### Change Frequency Guidelines

- **daily** - Pages that change daily (not applicable for this site)
- **weekly** - Blog index (when you post regularly)
- **monthly** - Most pages (services, packages, about, individual blog posts)
- **yearly** - Rarely changing pages (terms, privacy policy)

## After Updating

1. **Validate your sitemap** at https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. **Submit to Google Search Console** 
   - Go to https://search.google.com/search-console
   - Navigate to Sitemaps
   - Submit: `https://steadydevs.com/sitemap.xml`
3. **Test the sitemap URL** - Make sure it's accessible at https://steadydevs.com/sitemap.xml

## Current Sitemap Structure

As of April 6, 2026:

```
Main Pages:
→ / (homepage)
→ /index.html
→ /packages.html
→ /services.html
→ /contact.html
→ /about.html

Blog:
→ /blog/ (blog index)
→ /blog/index.html
→ /blog/5-warning-signs-your-legacy-dotnet-system-needs-attention.html
→ /blog/blog-template.html
```

## Quick Checklist

When adding a new page:
- [ ] Create the page
- [ ] Add to navigation (if applicable)
- [ ] Update sitemap.xml
- [ ] Update lastmod date to current date
- [ ] Validate sitemap
- [ ] Submit to Google Search Console
- [ ] Test that the URL is accessible

## Common Mistakes to Avoid

❌ Forgetting to update `lastmod` date  
❌ Wrong priority values (homepage should always be 1.0)  
❌ Typos in URLs  
❌ Forgetting to submit to search engines  
❌ Including non-existent pages  
❌ Using wrong date format (should be YYYY-MM-DD)  

## Automated Alternative

Consider using a sitemap generator in the future:
- Online tools like https://www.xml-sitemaps.com/
- Build scripts that auto-generate from your file structure
- WordPress-style plugins (if you migrate to a CMS)