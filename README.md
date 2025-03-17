# Disallow Opening Google Slides

![Icon](icon.png)

## Overview

**Disallow Opening Google Slides** is a browser extension designed to prevent the opening of Google Slides in the browser and instead download the file. This extension was developed by [The Daily Upside](https://www.thedailyupside.com) to address issues where Google's conversion of Microsoft PowerPoint files might lead to the corruption of some features.

## Features

-   **Prevent Opening in Browser**: Automatically intercepts attempts to open Google Slides in the browser and initiates a download instead.
-   **Maintain File Integrity**: Ensures that Microsoft PowerPoint files are downloaded without any conversion, preserving the original file's features and integrity.

## Installing the Extension on Chrome/Brave

To use the extension on your Chrome or Brave browser, follow these simple steps:

1. Open a new tab and enter `chrome://extensions/` in the address bar.

2. Activate developer mode by toggling the switch in the top-right corner.

3. Click on the "Load unpacked" button.

4. Choose the repository directory where the extension is located.

5. The extension is now loaded and ready for use. You can also pin it for easy access.

## How it Works

The extension uses Chrome's **Declarative Net Request** API to intercept attempts to open Google Slides presentations in the browser. Instead of loading the file in the browser (which could potentially alter its formatting or other features), the extension redirects the user to a custom page that informs them that the file has been blocked from opening.

Additionally, the extension stores the blocked Google Slides URL and displays it on the custom block page, allowing the user to know which file they attempted to open. The extension ensures that any attempt to open a Google Slides presentation is handled securely, preserving the integrity of the original file.

## Local Development Setup

To set up the extension locally for development purposes, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/The-Daily-Upside/chrome-extension-google-drive-ppt-download.git
    ```

2. **Navigate to the extension directory:**

    ```bash
    cd chrome-extension-google-drive-ppt-download
    ```

3. **Install the required dependencies:**

    ```bash
    npm install
    ```

4. **Run the development script:**
    ```bash
    npm start
    ```

This will run Prettier to format relevant files and ESLint for linting, ensuring the codebase adheres to coding standards.

## Publishing to Chrome Web Store

To publish this extension:

1. Zip the following files:
    - `manifest.json`
    - `background.js`
    - `blocked.html`
    - `blocked.js`
    - `rules.json`
    - `icon.png`

2. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).

3. Upload the zip file and fill in the required details, including:
    - Title: Disallow Opening Google Slides
    - Description: Prevent Google Slides from opening in the browser and download them instead. Made by The Daily Upside.
    - Screenshots: Add screenshots of the extension in action.

4. Submit for review.

## Important Note

This extension is specifically tailored for Google Slides and may not be suitable for use with other document types.

Feel free to contribute, report issues, or suggest improvements. Happy coding!

---

**Made by [The Daily Upside](https://www.thedailyupside.com).**
