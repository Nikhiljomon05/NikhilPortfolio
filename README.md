# Nikhil Jomon — Developer Portfolio

A dark, cinematic, fully responsive portfolio built with **React 18, Vite, Tailwind CSS, Framer Motion and Lucide icons**.
All content comes from Nikhil's resume and lives in a single file: `src/data/content.js`.

## Run locally

Requires **Node.js 18 or newer** (https://nodejs.org).

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

## Project structure

```
nikhil-portfolio/
├── index.html                  # title, SEO, Open Graph, fonts, structured data
├── package.json
├── vite.config.js
├── tailwind.config.js          # colours (#080808, #B51220), fonts, animations
├── postcss.config.js
├── .env / .env.example         # VITE_SITE_URL, VITE_FORM_ENDPOINT
├── .github/workflows/deploy.yml  # optional GitHub Pages workflow
├── public/
│   ├── favicon.svg
│   └── og-image.png            # 1200x630 social preview
└── src/
    ├── main.jsx · App.jsx · index.css
    ├── assets/nikhil-cutout.webp   # processed portrait (72 KB)
    ├── data/content.js         # <-- edit all text, links, skills, projects here
    ├── hooks/useActiveSection.js
    └── components/
        ├── Navbar · Hero · About · Projects · Skills · Education
        ├── Experience · Process · Interests · Contact · Footer
        ├── ProjectCard · ProjectArt   # reusable project card + illustrations
        ├── ContactForm                # validation + submission
        └── Reveal · SectionHeading · icons
```

## Dependencies

| Package | Purpose |
| --- | --- |
| react, react-dom | UI |
| framer-motion | hero entrance and scroll reveals (disabled for reduced-motion visitors) |
| lucide-react | icons |
| vite, @vitejs/plugin-react | dev server and build |
| tailwindcss, postcss, autoprefixer | styling |

## Customising

- **Text, skills, education, links:** edit `src/data/content.js`.
- **Add a project:** copy the commented template at the bottom of `PROJECTS` in `content.js`. The layout switches from one wide card to a grid automatically once there are two or more.
- **Real project screenshot:** import an image in `content.js` and set `image: yourImage` on the project.
- **StillGood link:** `href` currently points to your GitHub profile. Replace it with the repository or live-demo URL.
- **LinkedIn:** open the URL in `SOCIAL.linkedin` once to confirm it loads your profile.
- **Phone number and home address** are intentionally not shown anywhere on the site.

## Contact form

Without any setup, **Send message** opens the visitor's email app with the message pre-filled (a `mailto:` fallback).
To receive messages directly from the form:

1. Create a free form at https://formspree.io and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. Put it in `.env` as `VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz`
   (or add it as an environment variable in your hosting dashboard).
3. Rebuild. The form now POSTs JSON and shows success or error feedback.

The endpoint is a public URL, not a secret. Never put passwords or private API keys in frontend code.

## Social preview (Open Graph)

Set `VITE_SITE_URL` to your live address (no trailing slash), e.g. `https://nikhil-jomon.vercel.app`, so link previews on
LinkedIn, WhatsApp and X can find `og-image.png`.

## Deploy

### Vercel (easiest)
1. Push the project to a GitHub repository.
2. Import it at https://vercel.com/new. Vercel detects Vite automatically (build `npm run build`, output `dist`).
3. Add `VITE_SITE_URL` (and optionally `VITE_FORM_ENDPOINT`) under *Settings → Environment Variables*, then redeploy.

### Cloudflare Pages
1. *Workers & Pages → Create → Pages → Connect to Git*, choose the repository.
2. Build command `npm run build`, output directory `dist`.
3. Add the environment variables above.

### GitHub Pages
1. Push to a repository whose default branch is `main`.
2. *Settings → Pages → Build and deployment → Source: GitHub Actions*.
3. (Optional) *Settings → Secrets and variables → Actions → Variables*: add `VITE_SITE_URL` and `VITE_FORM_ENDPOINT`.
4. Push to `main`. The included workflow builds and publishes the site.

`vite.config.js` uses `base: './'`, so the same build works on a `/repo-name/` sub-path without changes.

## Accessibility and performance notes

- Semantic landmarks, skip link, visible keyboard focus, labelled form fields, `aria-live` form feedback.
- Small accent text uses a lighter red (`#E5384A`) that passes 4.5:1 contrast on the near-black background; the deeper brand red (`#B51220`) is used for lines, large type and button fills.
- Animations respect `prefers-reduced-motion`.
- The portrait is a 72 KB WebP; fonts load with `display=swap`.
