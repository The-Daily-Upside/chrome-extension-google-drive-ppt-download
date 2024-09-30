chrome.webNavigation.onBeforeNavigate.addListener(
    function (details) {
        const url = details.url;
        if (url.includes('https://docs.google.com/presentation/')) {
            // Store the blocked URL in chrome.storage
            chrome.storage.local.set({ blockedUrl: url });
        }
    },
    { url: [{ urlMatches: 'https://docs.google.com/presentation/' }] }
);
