@echo off
echo 🍈 Melons Media - Deployment Script
echo ================================

echo Step 1: Building the project...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo ❌ Build failed! Please check for errors.
    pause
    exit /b 1
)

echo ✅ Build successful!

echo Step 2: Committing changes to git...
git add .
git commit -m "Deploy: Updated melon brand website"

echo Step 3: Deploying to Vercel...
call vercel --prod

if %ERRORLEVEL% neq 0 (
    echo ⚠️  Vercel deployment encountered an issue.
    echo Please run 'vercel login' first if you haven't logged in.
    pause
    exit /b 1
)

echo 🎉 Deployment complete!
echo Your melons website is now live!
pause
