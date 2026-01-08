# GitHub Pages Deployment Guide for TechCart

## ✅ Cleanup Complete

All Lovable-specific code and references have been removed from your project. Your TechCart website is now a standalone project ready for deployment!

## 🎯 Changes Made

### 1. Removed Lovable Dependencies
- ❌ Removed `lovable-tagger` package from package.json
- ❌ Removed `componentTagger` from vite.config.ts
- ✅ Updated README with standalone project information

### 2. GitHub Pages Configuration
- ✅ Added base path configuration in vite.config.ts (`/TechCart/`)
- ✅ Added basename to BrowserRouter in App.tsx
- ✅ Created GitHub Actions workflow for automatic deployment
- ✅ Updated .gitignore to protect .env file
- ✅ Created .env.example for reference

### 3. Project Structure
- ✅ Kept Supabase integration (optional - can be used or ignored)
- ✅ All UI components remain intact
- ✅ Shopping cart, wishlist, and other features preserved

## 🚀 Deploy to GitHub Pages

### Step 1: Push Your Changes

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Remove Lovable dependencies and configure for GitHub Pages"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/adarshalexbalmuchu/TechCart
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save the changes

### Step 3: Wait for Deployment

- The GitHub Actions workflow will automatically run
- Check the "Actions" tab in your repository to see the deployment progress
- Once complete (green checkmark ✅), your site will be live!

### Step 4: Access Your Site

Your site will be available at:
```
https://adarshalexbalmuchu.github.io/TechCart/
```

## 🔧 Local Development

### Run Development Server
```bash
npm run dev
# or
bun run dev
```

Visit: http://localhost:8080

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Important Notes

### About Supabase (Optional Backend)

Your project still includes Supabase integration, which provides:
- User authentication
- Database functionality
- Real-time features

**Options:**

**Option A: Use Supabase** (Recommended if you want auth features)
1. Keep the existing .env file with your Supabase credentials
2. Authentication and user features will work
3. **Note:** .env is now gitignored and won't be deployed

**Option B: Remove Supabase** (For purely static site)
1. Remove Supabase imports from components
2. Remove auth-related pages
3. Simplify to a static catalog site

### Environment Variables

- ✅ `.env` is now in `.gitignore` (your credentials are safe)
- ✅ `.env.example` shows what variables are needed
- ⚠️ For production with Supabase, set environment variables in GitHub Secrets

## 🔐 Security Considerations

1. **Never commit .env file** - Already configured in .gitignore
2. **For GitHub Pages with Supabase:**
   - Go to Settings > Secrets and variables > Actions
   - Add your Supabase credentials as repository secrets
   - Update the workflow to use these secrets

## 🎨 Customization

### Update Project Name
If you want a different URL path, change:

1. In `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/YourProjectName/' : '/',
```

2. In `src/App.tsx`:
```typescript
<BrowserRouter basename="/YourProjectName">
```

### Branding
- Update logo and company name in `src/components/Header.tsx`
- Modify footer content in `src/components/Footer.tsx`
- Change color scheme in `tailwind.config.ts`

## 🐛 Troubleshooting

### Issue: 404 on Refresh
**Solution**: This is expected with GitHub Pages. Routes work during navigation but not on direct URL access. Consider:
- Using HashRouter instead of BrowserRouter
- Or adding a 404.html that redirects to index.html

### Issue: Assets Not Loading
**Solution**: Verify the base path matches your repository name exactly (case-sensitive)

### Issue: Styles Not Applied
**Solution**: Clear cache and rebuild:
```bash
rm -rf dist node_modules
npm install
npm run build
```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

## ✨ Next Steps

1. Push your changes to GitHub
2. Enable GitHub Pages in repository settings
3. Wait for deployment to complete
4. Share your live site! 🎉

---

**Your site will be live at:** https://adarshalexbalmuchu.github.io/TechCart/

Need help? Check the Actions tab for deployment logs or open an issue in your repository.
