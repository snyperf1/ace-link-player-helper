# Ace Link Player Helper

Small static web app that converts an Ace Stream content ID into quick-play links:

- `acestream://<id>` protocol link
- `http://127.0.0.1:6878/ace/getstream?id=<id>`
- `http://127.0.0.1:6878/ace/manifest.m3u8?id=<id>`

## Why this exists

If you have Ace Link / Ace Stream engine running locally, this gives you one place to paste an ID and open/copy the right URL quickly.

## Run locally

Open `index.html` directly in your browser.

## Notes

- This does not bypass access restrictions or provide stream IDs.
- You still need a local Ace Stream-compatible setup (e.g., Ace Link/Ace Stream engine on port 6878).
- Use only content you have the right to access.
