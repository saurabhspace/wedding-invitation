# Saurabh & Simran — A celebration in the hills

An English-led static wedding invitation for **2–4 December 2026**, Village Behlaog, Theog, Shimla. Ivory, forest green and muted gold typography, an illustrated Himalayan village landscape, botanical accents and progressive interactions. No build step, backend or audio download is required.

## Files

- `index.html` — invitation copy, day-by-day disclosures, venue, contact details and RSVP form.
- `assets/styles.css` — responsive layout, entrance animation and reduced-motion support.
- `assets/app.js` — entry, date countdown, WhatsApp RSVP, click-to-load map, sharing and opt-in instrumental ambience.
- `assets/calendar/*.ics` — individual dates and a combined three-day calendar reservation.
- `assets/decor/` — SVG illustrations. Earlier artwork remains available for future use.
- `village-photo.svg` — retained venue artwork from the previous design.

## Update ceremony details

Ceremony names and timings are deliberately marked as pending. Replace the placeholder copy inside each `.day-content` in `index.html` once confirmed. Update the corresponding calendar files at the same time. Do not present an undecided ceremony time as confirmed.

The countdown currently leads to **2 December 2026, 00:00 IST**, the start of the first celebration date, not a ceremony time. Change `CELEBRATIONS_START` in `assets/app.js` and the countdown label and note in `index.html` together if a confirmed ceremony should become the target.

Calendar files reserve whole days. `DTEND` is exclusive: the combined event ends on 5 December to include 2, 3 and 4 December. Keep each `UID` stable when updating an event and update `DTSTAMP` after edits. Calendar-app import behavior varies by device.

## RSVP, directions and sharing

The WhatsApp recipient is `RSVP_NUMBER` in `assets/app.js`. Keep it consistent with the visible contact number and telephone links in `index.html`. RSVPs open a draft; the guest must tap send in WhatsApp. Declines use zero guests. This website stores no responses.

The Maps button preserves the supplied precise-location short link. The optional embed uses a separate village search, clearly labeled as such. No embedded map request is made until the guest taps “Load Google Map”.

Native sharing is used when available, then clipboard copying, then a selectable link in an accessible dialog. Share the deployed page, not a local preview URL.

## Sound

Sound is off by default. The sound button starts a quiet, original synthesized instrumental pattern using Web Audio after a guest taps it. It needs no music file or third-party audio request. It pauses when the page is hidden and remains off until the guest starts it again. Replace it with a licensed recording later if desired; keep the explicit play/mute control and do not autoplay.

## Preview and publish

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. For GitHub Pages, choose **Settings → Pages → Deploy from a branch → main → / (root)**. Publish the entire repository so relative assets and calendar downloads work.

When editing CSS or JS, bump the corresponding `?v=` value in `index.html`. Versions need not match if only one asset changes.

## Checks before sharing

- Test entrance, schedule disclosures and RSVP at narrow portrait and landscape sizes.
- Verify the supplied Google Maps pin and test WhatsApp app handoff on a phone.
- Import the calendar files in the calendar apps your guests use.
- Confirm ceremony names, times and any additional Hindi wording before replacing placeholders.

Google Fonts and Maps require internet access. The invitation falls back to local fonts. The content remains readable without JavaScript; interactive RSVP requires JavaScript, with a telephone contact available as fallback. Public hosting exposes the invitation and contact details.

The graphical edition adds original SVG mountain/village artwork, a decorative monogram seal, botanical flourishes, illustrated date tiles, a scroll progress line and subtle section reveals. The village scene is decorative artwork, not an actual venue view. Reduced-motion preferences disable reveals and entrance animation.
