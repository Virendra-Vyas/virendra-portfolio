# Virendra Vyas — Portfolio

Senior Full Stack Developer & Team Lead portfolio built with React + Vite.

## Tech Stack

- **React 18** + **Vite 5**
- **GSAP 3** + ScrollTrigger — all animations
- **Three.js** — 3D wireframe geometry in hero
- **Fraunces** variable font + DM Sans + DM Mono

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deployment to Netlify (Recommended)

### Option A — Netlify Drop (fastest, no GitHub needed)
1. Run `npm run build`
2. Go to https://netlify.com/drop
3. Drag the `dist/` folder onto the page
4. Done — live in seconds

### Option B — GitHub + Netlify auto-deploy
1. Push this repo to GitHub
2. Go to https://app.netlify.com → "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Build settings are already in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy — every push auto-deploys

### Custom Domain
1. In Netlify: Site settings → Domain management → Add custom domain
2. Enter your domain (e.g. `virendravyas.dev`)
3. Update DNS at your registrar to point to Netlify

## Customisation

### Adding your CV
Place your CV PDF in `/public/cv.pdf` — the download button links to it automatically.

### Updating content
All portfolio data is in `src/data/portfolio.js`:
- `projects` — your projects
- `experience` — work history
- `skills` — technical skills
- `blogPosts` — articles (update URLs when published)
- `techStack` — marquee items

### Colours
All colours are CSS custom properties in `src/index.css`:
```css
--gd: #D4A53A;   /* gold accent — change this to rebrand */
--bg: #09090B;   /* background */
--t:  #EAE6DC;   /* primary text */
```

### Adding a photo
In `src/components/Hero.jsx`, find the `.h-r` div and add:
```jsx
<img src="/photo.jpg" alt="Virendra Vyas"
  style={{ width: '220px', height: '220px', borderRadius: '50%',
    objectFit: 'cover', border: '2px solid rgba(212,165,58,0.3)',
    position: 'absolute', zIndex: 2 }} />
```
Place your photo in `/public/photo.jpg`

### Blog posts
Update `blogPosts` in `src/data/portfolio.js` with real URLs when you publish articles on Medium, Dev.to, or your own blog.

## File Structure

```
src/
├── components/
│   ├── Loader.jsx / .css
│   ├── Cursor.jsx / .css
│   ├── Nav.jsx / .css
│   ├── Hero.jsx / .css        ← Three.js + split letters
│   ├── MarqueeBand.jsx / .css
│   ├── Projects.jsx / .css    ← Horizontal scroll
│   ├── About.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Blog.jsx / .css        ← NEW
│   ├── Contact.jsx / .css
│   └── Footer.jsx / .css
├── data/
│   └── portfolio.js           ← All content lives here
├── App.jsx
├── main.jsx
└── index.css
```
