/**
 * This is the background script for the extension.
 * It listens for tab changes and checks if the current tab is a Google Slides document.
 */

/**
 * Keeps track of opened tabs to avoid opening the same download URL in multiple tabs
 */
const openedTabs = {};

const getCurrentTab = async () => {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};

const removeTab = async (tabId) => {
    try {
        await chrome.tabs.remove(tabId);
    } catch (e) {
        console.error(e);
    }
};

const checkForBlockedLinks = async (tabId, tabUrl) => {
    const regexPattern =
        /https:\/\/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)\/edit/;

    // Extracting doc ID using regex
    const documentIdMatch = tabUrl.match(regexPattern);

    console.log(documentIdMatch);
    if (documentIdMatch && documentIdMatch[1]) {
        // Create export download link of the same doc.
        const downloadUrl = `https://docs.google.com/uc?export=download&id=${documentIdMatch[1]}`;

        /// Avoid opening the same download URL in multiple tabs.
        if (!openedTabs[downloadUrl]) {
            openedTabs[downloadUrl] = true;

            try {
                await removeTab(tabId);
                chrome.tabs.create({ url: downloadUrl });
            } catch (e) {
                console.error(e);
            }
        }
    }
};

/**
 * Listen for tab changes
 * duplicating/opening a URL in a new tab
 */
chrome.tabs.onActivated.addListener(async () => {
    const { id, url } = await getCurrentTab();
    await checkForBlockedLinks(id, url);
});

/**
 * Listen for tab changes
 * For manually inserting a URL
 */
chrome.tabs.onUpdated.addListener(async (id, _, { url }) => {
    await checkForBlockedLinks(id, url);
});
