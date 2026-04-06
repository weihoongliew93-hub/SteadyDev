# Hero Image Setup Instructions

## ⚠️ ACTION REQUIRED: Download Hero Image

The blog post has been configured to use a hero image, but you need to download it first.

### Download Instructions

**Recommended Image:** Black laptop with code on screen

1. **Download the image:**
   - Visit: https://unsplash.com/photos/vpOeXr5wmR4/download?force=true&w=1920
   - Or go to: https://unsplash.com/photos/black-laptop-computer-turned-on-on-table-vpOeXr5wmR4
   - Click the download button

2. **Save the image:**
   - Save as: `legacy-dotnet-warning-signs.jpg`
   - Location: `images/blog/` folder (this folder)
   - Final path should be: `images/blog/legacy-dotnet-warning-signs.jpg`

3. **Optimize the image (optional but recommended):**
   - Use [TinyPNG](https://tinypng.com) to compress
   - Target: Under 200KB for fast loading
   - Resize to: 1200x630px for optimal social sharing

### Alternative Image Options

If you prefer a different image:

**Option 2:** Computer screen with code
- URL: https://unsplash.com/photos/MgtHZ4zlC1U/download?force=true&w=1920

**Option 3:** MacBook with code
- URL: https://unsplash.com/photos/xrVDYZRGdw4/download?force=true&w=1920

If using a different image, just save it with the same filename: `legacy-dotnet-warning-signs.jpg`

### Verify It Works

After downloading:
1. Start a local web server (see GITHUB-PAGES-DEPLOYMENT.md)
2. Visit your blog post
3. You should see the hero image at the top

### Configuration Complete ✅

The blog post JSON has already been updated with:
```json
"heroImage": "images/blog/legacy-dotnet-warning-signs.jpg",
"heroImageAlt": "Code displayed on laptop screen representing legacy .NET systems"
```

Once you download the image, it will automatically appear on your blog post!

---

**License:** All Unsplash images are free to use, no attribution required.
**File can be deleted** after you've downloaded the image.