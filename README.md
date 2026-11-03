# Saurabh & Simran — Wedding Invitation

A static invitation for **2–4 December 2026** at our home in Village Behlaog, Theog, Shimla. The theme uses a charcoal textured background, gold calligraphy, ornate frames and jewel-like floral dividers. There is no palace image or substitute photograph of the home.

## Page and assets

- `index.html` — invitation, supplied couple portrait, dates, timeline, home placeholder, directions, family welcome, music and per-day RSVP.
- `assets/styles.css` — responsive English/Hindi typography, dark texture, lamp flame and reduced-motion styles.
- `assets/app.js` — lamp entrance, scratch/tap date reveal, English/Hindi toggle, countdown, guest steppers, WhatsApp drafts, optional map, sharing and opt-in instrumental ambience.
- `assets/images/couple.webp` — optimized copy of the supplied portrait; the source upload is unchanged.
- `assets/images/brass-diya.webp` and `gold-divider.webp` — original generated decorative assets optimized for the page.
- `assets/decor/ornate-frame.svg`, `midnight-texture.svg` and `home-placeholder.svg` — original page graphics. Earlier artwork remains available in the repository.
- `assets/calendar/*.ics` — individual all-day dates and a combined three-day reservation.

## Add the home photograph later

Upload the actual home photograph to `assets/images/home.webp`, then change `#homePhoto` in `index.html` from `assets/decor/home-placeholder.svg` to that file. Set accurate width, height and descriptive alt text. Replace the placeholder caption and update the Hindi `homePhoto` translation in `assets/app.js`. No JavaScript or CSS layout change is required.

## Confirm details before changing them

Ceremony names and timings are still undecided. The timeline deliberately shows day numbers and “Details to follow”. Update its copy and the Hindi translations after confirmation. Do not copy ceremony names, dates, relatives, travel times or venue details from the design reference.

The countdown leads to **2 December 2026 at 00:00 IST**, the start of the first celebration date, not a confirmed ceremony time. Change `CELEBRATIONS_START`, its accessible label, the countdown note and translations together if a ceremony becomes the target.

Calendar entries reserve whole days. The combined event uses `DTSTART:20261202` and exclusive `DTEND:20261205` to include 2–4 December. Keep UIDs stable and update DTSTAMP when editing calendar events. Device import behavior varies.

## RSVP and external links

`RSVP_NUMBER` in `assets/app.js` is the WhatsApp recipient. Keep it consistent with visible telephone links. The form collects 0–30 guests on each day; counts include the person replying. All-zero counts mean a decline. The message opens as a draft, and is sent only when the guest presses send in WhatsApp. Nothing is stored by the website.

The supplied Google Maps short link remains the precise-location button. The optional embed uses a separately labeled village search and makes no request until “Show the map” is pressed. Verify the exact map pin on a phone before sharing.

Sharing uses the device share sheet when supported, otherwise clipboard copying or a selectable-link dialog. Share the deployed URL, not a preview URL.

## Interactions and accessibility

The entrance is enabled only by JavaScript; without JavaScript the invitation is readable. Date cards support scratching, tapping and keyboard activation. Native number fields remain editable as an alternative to guest +/- controls. English is the default language. Sound is off by default and the play/mute buttons start an original local Web Audio pattern; no song file, third-party player or autoplay is used. Sound stops when the page is hidden. Reduced-motion preferences suppress animated transitions, flicker and section reveals.

## Preview and hosting

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. For GitHub Pages choose **Settings → Pages → Deploy from a branch → main → / (root)**. No build step or backend is needed. Publish all referenced files. Bump the corresponding CSS/JS `?v=` versions in `index.html` when changing either asset.

Google Fonts and optional Maps require internet access; local font fallbacks are provided. Public hosting exposes invitation content, portrait and contact details.
