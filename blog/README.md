# Blog System - How to Add New Posts

Your blog now uses a **template-based CMS system** where all content is stored in `blog-posts.json` and dynamically rendered.

## ✅ How It Works

- **All content** is stored in `blog-posts.json` (single source of truth)
- **Blog listing** (`blog/index.html`) automatically reads from `blog-posts.json` and shows:
  - **Horizontal card layout** with image thumbnails
  - **Category filters** automatically generated from tags
  - **Pagination** with "Load More" button (10 posts at a time)
  - **End of blog** message when all posts are shown
- **Individual post pages** load content dynamically from JSON:
  - Option 1: Clean URLs like `5-warning-signs...html` (recommended for SEO)
  - Option 2: Template URLs like `blog-template.html?post=slug`
- **Styles are centralized** in `blog-styles.css` - update once, applies everywhere

## Blog Listing Features

### Horizontal Card Layout
- Featured image on the left (300px wide)
- Title, tags, excerpt, and meta information on the right
- Hover effect with slide animation
- Mobile responsive (stacks vertically on small screens)

### Category Filtering
- Filters automatically generated from post tags
- Click any category to filter posts
- "All" shows all posts
- Active filter highlighted in blue

### Pagination
- Shows 10 posts initially
- "Load More" button loads 10 more posts
- Button shows remaining post count
- "End of blog" message when all posts displayed
- Smooth scroll to newly loaded content

## Files Structure

```
blog/
├── index.html              # Blog listing page (shows all posts)
├── blog-template.html      # Template for rendering individual posts
├── blog-posts.json         # All blog post content (CMS database)
├── blog-styles.css         # Shared CSS styles for all blog pages
└── 5-warning-signs...html  # Individual post HTML files
```

**Note:** All blog post HTML files share the same `blog-styles.css` stylesheet, so any style updates are automatically applied to all blog posts. No need to duplicate CSS in each file!

## How to Add a New Blog Post

### Option 1: Using the Template System (Recommended)

1. **Edit `blog-posts.json`** and add a new blog post object to the array:

```json
{
  "id": "your-blog-post-slug",
  "title": "Your Blog Post Title",
  "slug": "your-blog-post-slug",
  "excerpt": "A brief summary of your blog post for the listing page.",
  "date": "2026-04-15",
  "dateDisplay": "April 15, 2026",
  "readTime": "10 min read",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "author": "SteadyDevs",
  "heroImage": "images/blog/your-hero-image.jpg",
  "heroImageAlt": "Description of hero image for accessibility",
  "content": [
    {
      "type": "paragraph",
      "text": "Your paragraph text here. Use <strong> for bold and <em> for italic."
    },
    {
      "type": "heading2",
      "text": "Your Section Title"
    },
    {
      "type": "heading3",
      "text": "Your Subsection Title"
    },
    {
      "type": "list",
      "items": [
        "Bullet point 1",
        "Bullet point 2",
        "Bullet point 3"
      ]
    },
    {
      "type": "orderedList",
      "items": [
        "Numbered item 1",
        "Numbered item 2"
      ]
    },
    {
      "type": "warning",
      "text": "<strong>Warning Title:</strong> Your warning message here."
    },
    {
      "type": "tip",
      "text": "<strong>Tip Title:</strong> Your tip message here."
    },
    {
      "type": "cta",
      "title": "Call to Action Title",
      "text": "Your CTA description text",
      "buttonText": "Button Text",
      "buttonLink": "../contact.html"
    },
    {
      "type": "image",
      "src": "images/blog/diagram.png",
      "alt": "Description for accessibility",
      "caption": "Optional caption text (can be omitted)"
    }
  ]
}
```

2. **The blog listing page automatically updates!** 
   - `blog/index.html` now reads directly from `blog-posts.json`
   - No need to manually add entries to any JavaScript arrays
   - Your new post will automatically appear on the listing page
   - Category filters will automatically include your post's tags

3. **Access your post** at:
   - `blog/blog-template.html?post=your-blog-post-slug`

4. **⚠️ UPDATE SITEMAP** - Don't forget to add your new post to `sitemap.xml`! See `SITEMAP-UPDATE-INSTRUCTIONS.md` in the root folder.

5. **Create a clean URL HTML file** (recommended for SEO):
   - Copy `5-warning-signs-your-legacy-dotnet-system-needs-attention.html`
   - Rename it to `your-blog-post-slug.html`
   - Update the `POST_SLUG` constant in the JavaScript section to match your slug
   - That's it! The file will automatically load content from `blog-posts.json`
   - **Styling is handled automatically** via `blog-styles.css` - no need to add any CSS!

### Option 2: Create a Static HTML File (Old Method - Not Recommended)

If you prefer to create individual HTML files (like the original post), you can copy the existing `5-warning-signs-your-legacy-dotnet-system-needs-attention.html` and modify it directly. This is useful if you need custom styling or JavaScript for a specific post.

## Content Block Types

The template system supports these content types:

- **`paragraph`** - Regular text paragraph
- **`heading2`** - Main section heading (h2)
- **`heading3`** - Subsection heading (h3)
- **`list`** - Unordered bullet list
- **`orderedList`** - Numbered list
- **`warning`** - Red warning box with gradient background
- **`tip`** - Green tip box with gradient background
- **`cta`** - Call-to-action box with button
- **`image`** - Inline images with optional captions
- **`faq`** - Expandable FAQ section with Q&A pairs

## FAQ Sections

Add frequently asked questions to provide additional value and improve SEO.

**Structure:**
```json
{
  "type": "faq",
  "title": "Frequently Asked Questions",
  "items": [
    {
      "question": "Your question here?",
      "answer": "Your detailed answer here."
    },
    {
      "question": "Another question?",
      "answer": "Another answer."
    }
  ]
}
```

**Features:**
- Click to expand/collapse each Q&A
- Only one FAQ open at a time for clean UX
- Styled to match your site aesthetic
- Great for SEO (Google favors FAQ content)

**Best practices:**
- 3-7 questions per section (or more as needed)
- Keep questions concise and specific
- Provide thorough, helpful answers
- Address common reader concerns
- Include questions about your services (like retainer packages)

## Hero Images

Hero images appear at the top of blog posts **and as thumbnails on the blog listing page**, improving visual appeal and social sharing.

**To add a hero image:**

1. Place your image in `images/blog/` folder (create if it doesn't exist)
2. Add to your post in `blog-posts.json`:
   ```json
   "heroImage": "images/blog/my-hero-image.jpg",
   "heroImageAlt": "Descriptive alt text for accessibility"
   ```
3. Hero images are **optional** - posts work fine without them

**Recommended hero image specs:**
- Size: 1200x630px (optimal for social sharing)
- Format: JPG or PNG
- Max file size: 200KB (compress for faster loading)

**Free image sources:**
- [Unsplash](https://unsplash.com) - Free stock photos
- [Pexels](https://pexels.com) - Free stock photos
- [Undraw](https://undraw.co) - Free illustrations

## Inline Images

Add images within your blog content:

```json
{
  "type": "image",
  "src": "images/blog/screenshot.png",
  "alt": "Screenshot of legacy code",
  "caption": "Example of tightly-coupled legacy code"
}
```

The `caption` field is optional.
- **`heading3`** - Subsection heading (h3)
- **`list`** - Unordered bullet list
- **`orderedList`** - Numbered list
- **`warning`** - Red warning box with border
- **`tip`** - Green tip box with border
- **`cta`** - Call-to-action box with button

## Benefits of the Template System

✅ **Consistent styling** - All posts look the same
✅ **Easy content updates** - Just edit JSON, no HTML needed
✅ **Fast to add new posts** - No copying/pasting HTML templates
✅ **Centralized content** - All posts in one file for easy management
✅ **SEO-friendly** - Meta tags are automatically generated

## URL Structure

- Blog listing: `blog/index.html`
- Individual posts: `blog/blog-template.html?post=slug-name`
- Legacy posts: `blog/5-warning-signs...html` (direct HTML files)

## Customizing Styles

All blog post styling is centralized in `blog/blog-styles.css`. This file contains:

- **Blog layout** (headers, content width, TOC positioning)
- **Table of Contents** (desktop fixed sidebar, mobile floating button)
- **Typography** (headings, paragraphs, lists)
- **Content boxes** (warning, tip, CTA boxes)
- **FAQ sections** (expandable Q&A styling)
- **Mobile responsiveness** (tablet and phone breakpoints)

**To customize blog styles:**
1. Edit `blog/blog-styles.css`
2. Changes automatically apply to all blog posts (no need to update individual HTML files)
3. Test on desktop, tablet, and mobile views

**CSS is automatically included** in all blog post HTML files via:
```html
<link rel="stylesheet" href="blog-styles.css">
```

## Future Improvements

Consider:
- Moving blog-posts.json to a real CMS (Strapi, Contentful, etc.)
- Adding search functionality
- Adding categories/tags filtering on index page
- RSS feed generation
- Social sharing buttons