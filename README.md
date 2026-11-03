# Saurabh & Simran — Wedding Invitation

A static wedding invitation for 2–4 December 2026 in Village Behlaog, Theog, Shimla. No build step or backend is required.

## Files

- `index.html` — invitation text, event dates, venue, Maps links, RSVP form and metadata.
- `assets/styles.css` — layout, mobile styles and entrance animation.
- `assets/app.js` — entrance interaction, countdown, WhatsApp RSVP and sharing.
- `assets/decor/` — decorative SVG artwork.
- `village-photo.svg` — venue image used by the page and social metadata.

## Customize

Edit the invitation content and event details in `index.html`.
The countdown target is in `assets/app.js`: currently **3 December 2026 at 09:00 IST** (`2026-12-03T09:00:00+05:30`). Update its accessible label in `index.html` if the target date changes.

The WhatsApp recipient is configured in `assets/app.js`. Keep it consistent with the visible contact number and telephone link in `index.html`. Use international digits without a plus sign in the `wa.me` URL.

The directions button and embedded map are configured separately in `index.html`. The embed uses a text search; verify that it matches the button's precise destination before sharing.

When changing `assets/app.js` or `assets/styles.css`, bump the corresponding `?v=` value in `index.html`. The two versions do not need to match.

## Preview and publish

Serve the repository root with a static web server, for example:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. Check portrait and landscape layouts, entrance access, countdown, Maps, RSVP and sharing. WhatsApp opens a draft; the guest must send it manually.

For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → / (root)**. Publish the entire repository so the assets retain their relative paths.

## External services

Google Fonts and Maps need internet access. WhatsApp RSVP does not store responses on this website. Native sharing is used when available, with clipboard and manual-copy fallbacks. Public hosting exposes invitation content and contact details.
