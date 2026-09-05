# AI Creator Portfolio

## Start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`). Production check: `npm run build`.

Do not open `index.html` directly from Explorer (`file:///...`). Vite applications must be served through `npm run dev` (or a web server for the contents of `dist`); direct opening prevents the browser from loading the React module graph.

## Media folders

Keep videos in `Video/Films`, `Video/Ads`, `Video/Live`, `Video/Creative`, `Video/Characters`, or `Video/Featured`.

Keep photographs in `Images/Photo`, `Images/Characters`, or `Images/Featured`.

The Vite configuration serves these root-level folders during development and copies them into `dist` on production build. They do not need to be duplicated in `public`.

## Add work

After placing a file, add one concise record to `src/data/projects.ts`:

```ts
{ id: 'film-01', title: 'UNTITLED 01', category: 'films', type: 'video', src: '/Video/Films/film-01.mp4', aspectRatio: 'landscape' }
{ id: 'photo-01', title: 'STILL 01', category: 'photo', type: 'photo', src: '/Images/Photo/photo-01.jpg', aspectRatio: 'portrait' }
```

Use `/Video/Featured/...` for the preferred hero video. Optional `thumbnail` values can point to an image in `/Images/...`.
