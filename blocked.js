
// Retrieve the blocked URL from chrome.storage and display it
chrome.storage.local.get('blockedUrl', function (result) {
    const blockedUrl = result.blockedUrl;
    if (blockedUrl) {
        const regexPattern =
            /https:\/\/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)\/edit/;

        // Extracting doc ID using regex
        const documentIdMatch = blockedUrl.match(regexPattern);

        if (documentIdMatch && documentIdMatch[1]) {
            // Create export download link of the same doc.
            const downloadUrl = `https://docs.google.com/uc?export=download&id=${documentIdMatch[1]}`;
            document.getElementById('url').innerHTML =
                '<a target="_blank" href="' + downloadUrl + '">Download</a>';
        } else {
            document.getElementById('url').innerHTML = 'No blocked URL found';
        }
    } else {
        document.getElementById('url').textContent = 'No blocked URL found';
    }
});
