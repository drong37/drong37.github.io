# Academic Portfolio

A minimalist, flat-design academic personal homepage with multi-layer navigation built with React, Vite, and Tailwind CSS.

## Getting Started

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deploying to GitHub Pages

You can easily deploy this Vite + React application to GitHub Pages using GitHub Actions. Follow these steps:

### Step 1: Update `base` URL in `vite.config.ts`

If you are deploying to a repository site like `https://<USERNAME>.github.io/<REPO>/` (without a custom domain), you **must** set the `base` property in your `vite.config.ts` to your repository's name.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  return {
    base: '/<YOUR_REPOSITORY_NAME>/', // <--- Add this line! E.g. '/my-portfolio/'
    // ...other configs
  }
})
```
*Note: If you are using a custom domain, or if this is a User Page (`<USERNAME>.github.io`), you can leave `base` omitted or as `'/'`.*

### Step 2: Create a GitHub Actions Workflow

1. In your project root, create a folder structure `.github/workflows/`.
2. Inside that folder, create a file named `deploy.yml`.
3. Paste the following configuration into `deploy.yml`:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # or master, depending on your default branch

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Repository Settings

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment**, change the **Source** dropdown to **GitHub Actions**.

### Step 4: Push and Deploy

Push your code to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

GitHub Actions will automatically start the build and deployment process. You can monitor the progress in the **Actions** tab of your repository. Once completed, your portfolio will be live!

---

## Modifying the Visitor Map

A placeholder ClustrMaps widget has been added to the navigation bar (`components/Layout.tsx`). 

To use your own:
1. Go to [ClustrMaps](https://clustrmaps.com/) and register your deployed website URL.
2. Get the "Image Widget" HTML code.
3. Replace the `<img>` `src` url inside `components/Layout.tsx` with your own widget tracker URL.
