# Disallow Opening Google Slides

![Icon](icon.png)

## Overview

**Disallow Opening Google Slides** is a browser extension designed to prevent the opening of Google Slides in the browser and instead download the file. This extension was developed to address issues where Google's conversion of Microsoft PowerPoint files might lead to the corruption of some features.

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

The extension intercepts requests to open Google Slides in the browser by leveraging the background service worker (`background.js`). Instead of opening the file online, it initiates a download, ensuring that the original Microsoft PowerPoint file is preserved.

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

## Important Note

This extension is specifically tailored for Google Slides and may not be suitable for use with other document types.

Feel free to contribute, report issues, or suggest improvements. Happy coding!
