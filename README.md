YouTube Shorts Redirect is a lightweight Chrome extension that redirects YouTube Shorts to regular Youtube video.

It automatically redirects YouTube Shorts URLs (`/shorts/`) to regular video URLs (`/watch?v=`), making it easier to access full video features and share proper links.

How It Works:
This extension monitors navigation events and redirects any detected Shorts URL to its equivalent Watch URL. It's optimized to work within YouTube's dynamic (SPA) interface and triggers shortly after clicking on a Shorts video.

## ✅ Example

From: https://www.youtube.com/shorts/abc123XYZ
To: https://www.youtube.com/watch?v=abc123XYZ

## 📦 Installation (Manual via Chrome)

1. Download or clone this repository.
2. Open Chrome and go to: `chrome://extensions/`
3. Enable **Developer Mode** (top-right).
4. Click **"Load unpacked"** and select the project folder.
5. Done! The extension is now active.

## 💡 Notes

- This version runs passively and checks the URL every 100ms.
- It ensures seamless redirection even inside YouTube’s SPA (single page app) structure.
- Redirection only occurs if the user navigates to a `/shorts/` URL.

---

Built with plain JavaScript + Manifest V3
