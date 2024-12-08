# Feed Blocker with Math Challenge

A Chrome extension that blocks feeds on LinkedIn, Instagram, YouTube, Reddit, and X.com, requiring users to solve a math problem to unblock the feeds. This extension is designed to help users reduce distractions and improve productivity.

## Features

- Blocks the feed sections on LinkedIn, Instagram, YouTube, Reddit, and X.com.
- Displays a math challenge overlay to unblock the feeds.
- Prevents scrolling while the challenge is active.
- Fully customizable for additional platforms.

## Installation

1. Clone this repository or download the ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the folder containing the extension files.

## Files

### 1. `manifest.json`
Defines the extension's metadata, permissions, and content scripts.

### 2. `content.js`
Handles the logic for blocking feeds and displaying the math challenge overlay.

### 3. `background.js`
Placeholder for background tasks or future enhancements.

### 4. `popup.html`
Optional popup UI (currently unused in the main functionality).

### 5. `icons`
Folder containing icons of various sizes for the extension.

## How It Works

1. The extension injects `content.js` into the specified websites.
2. The `blockFeed` function identifies feed containers on LinkedIn, Instagram, YouTube, Reddit, and X.com and hides them using CSS.
3. The `injectMathProblem` function overlays a math challenge box that occupies 75% of the screen, blocking interaction with the feed.
4. Users must solve the math problem correctly to unblock the feed. If the answer is incorrect, the feed remains blocked.

## Supported Platforms

- LinkedIn
- Instagram
- YouTube
- Reddit
- X.com (formerly Twitter)

## Contributing

Contributions are welcome! If you have suggestions for additional features or platforms to block, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
