# 🚀 Deployment Guide for Melons Media Website

## Prerequisites
- Ensure you have a Vercel account (https://vercel.com)
- Install Vercel CLI: `npm install -g vercel`

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Login to Vercel
```bash
vercel login
```

### Step 2: Deploy
```bash
# In your project directory:
cd c:\Users\Aashray\Desktop\melonm\melons-media-genesis-web

# Deploy to production
vercel --prod
```

### Step 3: Follow the prompts
- Set up and deploy: `Y`
- Which scope: Choose your account
- Link to existing project: `N` (if first time) or `Y` (if updating)
- What's your project's name: `melons-media-website`
- In which directory is your code located: `./`

## Option 2: Deploy via GitHub + Vercel Dashboard

### Step 1: Push to GitHub
```bash
# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/melons-media-website.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Option 3: Deploy via Vercel Dashboard (Drag & Drop)

### Step 1: Build locally
```bash
npm run build
```

### Step 2: Upload dist folder
1. Go to https://vercel.com/dashboard
2. Drag and drop the `dist` folder
3. Your site will be deployed instantly

## Build Configuration

The project is already configured with:
- ✅ `vercel.json` - Proper routing configuration
- ✅ `package.json` - Build scripts
- ✅ TypeScript configuration
- ✅ All melon brand components updated

## Environment Variables (if needed)
If your project uses environment variables, add them in Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Domain Configuration
After deployment:
1. Go to your project dashboard on Vercel
2. Click "Domains"
3. Add your custom domain (melonsmedia.social)
4. Follow DNS configuration instructions

## Success! 🎉
Your melon-powered website will be live at the provided Vercel URL!

## Troubleshooting
- If build fails, check the build logs in Vercel dashboard
- Ensure all dependencies are properly installed
- Check for any TypeScript or ESLint errors

## Post-Deployment
- Test all pages and functionality
- Verify the melon brand styling is applied correctly
- Check mobile responsiveness
- Test contact forms and booking functionality
