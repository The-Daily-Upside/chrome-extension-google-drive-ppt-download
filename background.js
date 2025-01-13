chrome.webNavigation.onBeforeNavigate.addListener(
    function (details) {
        const url = details.url;
        if (url.includes('https://docs.google.com/presentation/')) {
            // Store the URL to display on the blocked page
            chrome.storage.local.set({ blockedUrl: url });
        }
    },
    { url: [{ urlMatches: 'https://docs.google.com/presentation/' }] }
);
