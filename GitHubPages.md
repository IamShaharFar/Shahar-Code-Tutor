React App Deployment to GitHub Pages - Documentation

This guide will help you quickly deploy your React app to GitHub Pages and remove it from production when needed. Follow these instructions whenever you need to publish or unpublish your project.

Prerequisites

GitHub Account: Make sure you have a GitHub account and a repository ready for your React project.

Domain (Optional): If you have a custom domain, you can also use it with GitHub Pages.

Step 1: Install gh-pages

To deploy the app, first install the gh-pages package.

npm install gh-pages --save-dev

This package helps automate the deployment process to GitHub Pages.

Step 2: Update package.json

Modify your package.json to include the homepage URL and add deployment/removal scripts.

Add the homepage field so that React knows the correct URLs to use. Replace <your-username> and <repository-name>:

"homepage": "https://<your-username>.github.io/<repository-name>"

Add the scripts to the scripts section:

"predeploy": "npm run build",
"deploy": "gh-pages -d build",
"remove": "gh-pages-clean"

predeploy: Automatically builds the app before deployment.

deploy: Publishes the build folder to GitHub Pages.

remove: Removes the published content from GitHub Pages.

Step 3: Deploy Your App

To deploy your React app to GitHub Pages, use the following command:

npm run deploy

This command will:

Build the app (npm run build)

Push the built files to the gh-pages branch of your GitHub repository

Your app will be accessible at: https://<your-username>.github.io/<repository-name>

Step 4: Remove Your App from Production

If you need to unpublish your app from GitHub Pages, run the following command:

npm run remove

This will remove the content of the gh-pages branch, effectively taking your app offline.

Optional Step: Manually Delete the gh-pages Branch

If you need to completely delete the gh-pages branch, follow these steps:

In GitHub:

Go to your GitHub repository.

Click on the Branches dropdown.

Delete the gh-pages branch manually.

Via Terminal:

Run the command:

git push origin --delete gh-pages

Deleting the gh-pages branch will remove all deployed content permanently.

Important Notes

Homepage URL: Ensure you add the correct homepage URL in package.json.

Branch Cleanup: The remove script clears the published files but leaves the gh-pages branch. To fully remove it, delete the branch manually.

Domain Setup: If you have a custom domain, make sure to set up a CNAME file in your repository.

Summary

Deploy App: Run npm run deploy to publish the app.

Remove App: Run npm run remove to unpublish the app from GitHub Pages.

Delete Branch (optional): To fully delete the deployment, remove the gh-pages branch.



This documentation will guide you through deploying and managing your React app on GitHub Pages quickly and efficiently.