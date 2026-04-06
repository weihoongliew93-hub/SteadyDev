# GitHub Pages Deployment Guide

## Quick Deploy

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit - SteadyDevs website"

# 4. Add your GitHub repo as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

## After Pushing to GitHub

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Branch `main`, folder `/ (root)`
   - Click Save

2. **Custom Domain Setup (steadydevs.com):**
   - In GitHub Pages settings, add custom domain: `steadydevs.com`
   - Enable "Enforce HTTPS"

3. **DNS Configuration:**
   
   Add these records at your domain provider:
   
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```

4. **Wait for DNS propagation** (can take 24-48 hours)

## Future Updates

After initial setup, to update your site:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild and deploy!

## Testing Locally Before Deploying

To test the site locally (so blog posts load correctly):

### Option 1: Using Python
```bash
cd c:\Users\Sean Liew\Desktop\Side\Personal\SteadyDev
python -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Using Node.js (if installed)
```bash
npx http-server
```

### Option 3: Using VS Code Extension
Install "Live Server" extension, then right-click `index.html` → "Open with Live Server"

## Troubleshooting

**Blog posts showing "Error loading blog post":**
- This happens when opening HTML files directly (file://)
- Solution: Use a local web server (see above) or deploy to GitHub Pages

**Custom domain not working:**
- Check DNS records are correct
- Wait 24-48 hours for DNS propagation
- Verify CNAME file contains only `steadydevs.com` (no http://)

**HTTPS not working:**
- Wait a few minutes after enabling
- GitHub Pages needs to provision SSL certificate
- Can take up to 1 hour

## Current Deployment Status

Once deployed, your site will be accessible at:
- Primary: https://steadydevs.com
- Fallback: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME

Check deployment status at:
https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/deployments
