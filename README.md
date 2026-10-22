# Himachali Wedding Invitation · हिमाचली विवाह निमंत्रण

A bilingual, mobile-first, static wedding invitation. No build tools, backend, or paid hosting needed.

## Customize

1. Open `config.js` and replace all example names, date, venue, Google Maps URL, event details, and WhatsApp number.
2. Optionally add a licensed `music.mp3` file next to `index.html` (music plays only after a guest taps the music button).
3. To add couple photos, replace the `.photo-placeholder` element in `index.html` with `<img src="couple.jpg" alt="Couple photograph" style="max-width:100%;height:auto">`, and add `couple.jpg` to the folder.
4. Open `index.html` in your browser to preview.

## Free GitHub Pages hosting

1. Create a **public** GitHub repository, e.g. `wedding-invitation`.
2. Upload `index.html`, `style.css`, `script.js`, `config.js` (and optional media) to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/ (root)`, then Save.
5. Once deployed, visit `https://YOUR_USERNAME.github.io/wedding-invitation/`.

**Privacy:** GitHub Pages on the free plan serves public content. Do not publish sensitive contact or guest information. WhatsApp RSVP opens a prefilled message and does not store guest data in the website. No analytics are included.

**Fonts:** Google Fonts are used; internet access is required to load them. The site falls back to local fonts if offline.

**Note:** The initial RSVP phone number is intentionally a non-working placeholder. Replace it in `config.js` before publishing.
