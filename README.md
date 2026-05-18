# Romantic Apology Website

A cinematic love story website built with React, Vite, and Framer Motion.

## Features

- Emotional dark pink + black aesthetic
- Smooth vertical scroll sections
- Persistent background music
- Floating heart animations
- 6 memory sections for photos and quotes
- Final apology page with glowing CTA
- Mobile responsive design

## Installation

From the project folder:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173/`.

## Project structure

- `src/`
  - `components/` — reusable UI pieces like navbar, music player, and cards
  - `pages/` — homepage, memory sections, and final apology layout
  - `assets/` — placeholder images and the background song file
  - `styles.css` — global styling and animations

## Deployment to Vercel

1. Install the Vercel CLI if needed:

```bash
npm install -g vercel
```

2. Deploy from the project directory:

```bash
vercel
```

3. Follow the prompts to link or create a new project.

4. Use `vercel --prod` to publish the live site.

## Notes

- Replace the placeholder images in `src/assets/` with your own romantic photos.
- Replace the placeholder page music in `src/assets/music/` with your own short song clips.
- The app uses scroll snapping for smooth page transitions.
