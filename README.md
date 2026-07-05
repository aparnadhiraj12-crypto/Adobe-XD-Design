# PopX

A React implementation of the PopX mobile app screens: Welcome, Sign in, Create Account, and Account Settings.

Built with React 19 + Vite + React Router. No backend — account data is kept in the browser (localStorage) purely to demo the flow (Create Account -> Account Settings, Login -> Account Settings).

## Screens

- `/` — Welcome screen
- `/login` — Sign in
- `/signup` — Create account
- `/account` — Account settings

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Push to GitHub

```bash
git init
git add .
git commit -m "PopX React app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repo first at https://github.com/new — make it Public.)

### Deploy to Netlify

**Option A — drag & drop (fastest, no account linking needed):**
1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page — you get a live public URL immediately

**Option B — connect the GitHub repo (auto-deploys on every push):**
1. Go to https://app.netlify.com -> "Add new site" -> "Import an existing project"
2. Pick your GitHub repo
3. Build command: `npm run build`, Publish directory: `dist` (already set in netlify.toml)
4. Deploy

Either way, the `_redirects` file / `netlify.toml` included in this project make sure client-side routing (React Router) works correctly on Netlify.
