# BurnClock Pro (Web)

A responsive, local-first fitness and nutrition web app. The body photo assessment accepts front/side images through the browser file picker; on supported mobile browsers, `capture=environment` offers the camera. Camera access is controlled by the browser and requires HTTPS (or localhost).

## Run locally
1. Install Node.js 20+.
2. Run `npm run dev`.
3. Open `http://localhost:5173`.
4. In another terminal run `npm run server` to enable AI endpoints.

## AI setup
Copy `.env.example` to `.env` and set `OPENAI_API_KEY`. Keep this key on the server; never put it in frontend JavaScript. The meal scanner estimates meal macros. The body-photo endpoint returns a qualitative visual description only. It deliberately does not estimate body-fat percentage or visceral fat from photos because such values cannot be reliably measured from ordinary images.

## Deploy
Deploy the project to a Node.js host that supports the static app and `server/index.js` API. Use HTTPS. Set `OPENAI_API_KEY` as a server-side environment variable. The frontend dev server proxies `/api/*` to port 8787; production hosting must route `/api/*` to the same backend.

## Privacy
Photos are sent to the configured AI provider only after the user checks the consent box and presses Analyse. The app does not save the photos in local storage. The AI service provider's own retention and processing terms still apply. Food, workout and profile records remain in browser localStorage unless the user exports them.
