# Deploying to Cloudflare Pages

You can deploy this weather application to **Cloudflare Pages** for free. It fully supports static sites like this one.

## Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up).
- (Optional) A GitHub or GitLab account if you want automatic deployments.

---

## Method 1: Git Integration (Recommended)

This method automatically deploys your site whenever you push changes to your repository.

1. **Push your code to GitHub/GitLab**
   - Ensure all your latest changes (including `index.html` and `README.md`) are committed and pushed to your remote repository.
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

2. **Create a Project in Cloudflare**
   - Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select your repository (`stitch_weather_information`).

3. **Configure Build Settings**
   - **Project name**: `weather-app` (or your preferred name).
   - **Production branch**: `main`.
   - **Framework preset**: `None`.
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`.

4. **Deploy**
   - Click **Save and Deploy**.
   - Cloudflare will build your site and provide you with a URL (e.g., `https://weather-app.pages.dev`).

---

## Method 2: Direct Upload (Drag & Drop)

If you don't want to use Git, you can upload the folder directly.

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
3. Name your project (e.g., `weather-app-manual`).
4. Select or Drag & Drop the `stitch_weather_information` folder (or a zip of it).
5. Click **Deploy Site**.

---

## Method 3: Command Line (Wrangler)

For advanced users who prefer the terminal.

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login**
   ```bash
   wrangler login
   ```

3. **Deploy**
   Run this command in your project directory:
   ```bash
   wrangler pages deploy . --project-name weather-app
   ```
