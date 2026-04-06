# Blog Images Folder

Place your blog post images here.

## Recommended Structure

```
images/blog/
├── hero-images/           # Hero images for blog posts
│   ├── warning-signs.jpg
│   └── another-post.jpg
├── screenshots/           # Code screenshots
│   └── legacy-code.png
└── diagrams/              # Architecture diagrams
    └── system-flow.png
```

## Image Guidelines

### Hero Images (Top of Post)
- **Size:** 1200x630px (optimal for social sharing)
- **Format:** JPG (photos) or PNG (graphics/text)
- **Max file size:** 200KB
- **Naming:** Use descriptive names like `legacy-dotnet-warning-signs.jpg`

### Inline Images
- **Size:** Max width 800px (matches content width)
- **Format:** PNG (screenshots/diagrams), JPG (photos)
- **Max file size:** 100KB per image
- **Optimize:** Use tools like [TinyPNG](https://tinypng.com) to compress

## Free Image Resources

**Stock Photos:**
- [Unsplash](https://unsplash.com) - High quality, free
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

**Illustrations:**
- [Undraw](https://undraw.co) - Customizable illustrations
- [Drawkit](https://drawkit.com) - Free illustrations

**Create Diagrams:**
- [Excalidraw](https://excalidraw.com) - Hand-drawn style
- [Draw.io](https://app.diagrams.net) - Professional diagrams

## Usage in Blog Posts

In `blog-posts.json`:

```json
{
  "heroImage": "images/blog/hero-images/my-post.jpg",
  "heroImageAlt": "Description for screen readers",
  "content": [
    {
      "type": "image",
      "src": "images/blog/screenshots/example.png",
      "alt": "Screenshot description",
      "caption": "Optional caption text"
    }
  ]
}
```

## Tips

- **Compress images** before uploading to reduce page load time
- **Use descriptive file names** for SEO (e.g., `legacy-system-diagram.png` not `img001.png`)
- **Include alt text** for accessibility and SEO
- **Don't overdo it** - Only add images that add value
- **Consistent style** - Use similar color schemes/styles across posts