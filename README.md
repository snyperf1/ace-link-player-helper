# Ace Stream Viewer

Small static web app that can load an Ace Stream content ID, try in-browser playback using a local Ace engine, and expose quick-play links:

- `acestream://<id>` protocol link
- `http://127.0.0.1:6878/ace/getstream?id=<id>`
- `http://127.0.0.1:6878/ace/manifest.m3u8?id=<id>`

## Why this exists

If you have Ace Link / Ace Stream engine running locally, this gives you one place to paste an ID, play via HLS, and open/copy the right fallback URL quickly.

## Run locally

Open `index.html` directly in your browser.

You can also prefill and auto-load by query param:

- `?id=<40-char-id>`
- Example: `...?id=b04372b9543d763bd2dbd2a1842d9723fd080076`

## Notes

- This does not provide stream IDs or bypass access restrictions.
- You still need a local Ace Stream-compatible setup (e.g., Ace Link/Ace Stream engine on port 6878).
- Use only content you have the right to access.
