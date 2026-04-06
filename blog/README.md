# Blog System - How to Add New Posts

Your blog now uses a **template-based CMS system** where all content is stored in `blog-posts.json` and dynamically rendered.

## ✅ How It Works

- **All content** is stored in `blog-posts.json` (single source of truth)
- **Blog listing** (`blog/index.html`) shows all posts and links to individual posts
- **Individual post pages** load content dynamically from JSON:
  - Option 1: Clean URLs like `5-warning-signs...html` (recommended for SEO)
  - Option 2: Template URLs like `blog-template.html?post=slug`

Both options render the same content from `blog-posts.json`.

## Files Structure

```
blog/
├── index.html              # Blog listing page (shows all posts)
├── blog-template.html      # Template for rendering individual posts
├── blog-posts.json         # All blog post content (CMS database)
└── 5-warning-signs...html  # Legacy static HTML (kept for SEO/bookmarks)
```

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
    }
  ]
}
```

2. **Update `blog/index.html`** - Add the new post to the `blogPosts` array in the JavaScript section (around line 138):

```javascript
const blogPosts = [
  {
    title: "Your New Blog Post Title",
    slug: "your-blog-post-slug",
    excerpt: "Brief summary of your post",
    date: "April 15, 2026",
    readTime: "10 min read",
    tags: ["Tag1", "Tag2", "Tag3"]
  },
  {
    title: "5 Warning Signs Your Legacy .NET System Needs Professional Attention",
    slug: "5-warning-signs-your-legacy-dotnet-system-needs-attention",
    excerpt: "Is your legacy .NET system showing signs of trouble?...",
    date: "April 6, 2026",
    readTime: "8 min read",
    tags: ["Legacy Systems", ".NET", "Maintenance"]
  }
];
```

3. **Access your post** at:
   - `blog/blog-template.html?post=your-blog-post-slug`

4. **⚠️ UPDATE SITEMAP** - Don't forget to add your new post to `sitemap.xml`! See `SITEMAP-UPDATE-INSTRUCTIONS.md` in the root folder.

5. **Create a clean URL HTML file** (recommended for SEO):
   - Copy `5-warning-signs-your-legacy-dotnet-system-needs-attention.html`
   - Rename it to `your-blog-post-slug.html`
   - Update the `POST_SLUG` constant in the JavaScript section to match your slug
   - That's it! The file will automatically load content from `blog-posts.json`

### Option 2: Create a Static HTML File (Old Method - Not Recommended)

If you prefer to create individual HTML files (like the original post), you can copy the existing `5-warning-signs-your-legacy-dotnet-system-needs-attention.html` and modify it directly. This is useful if you need custom styling or JavaScript for a specific post.

## Content Block Types

The template system supports these content types:

- **`paragraph`** - Regular text paragraph
- **`heading2`** - Main section heading (h2)
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

## Future Improvements

Consider:
- Moving blog-posts.json to a real CMS (Strapi, Contentful, etc.)
- Adding search functionality
- Adding categories/tags filtering on index page
- RSS feed generation
- Social sharing buttons