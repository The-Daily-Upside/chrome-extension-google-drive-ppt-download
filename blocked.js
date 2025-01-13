// Retrieve the blocked URL and display options
chrome.storage.local.get('blockedUrl', function (result) {
    const blockedUrl = result.blockedUrl;
    if (blockedUrl) {
        const regexPattern =
            /https:\/\/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)\/edit/;

        const documentIdMatch = blockedUrl.match(regexPattern);

        // Add download link if the document ID is found
        if (documentIdMatch && documentIdMatch[1]) {
            const downloadUrl = `https://docs.google.com/uc?export=download&id=${documentIdMatch[1]}`;
            document.getElementById(
                'url'
            ).innerHTML = `<a target="_blank" href="${downloadUrl}">Download</a>`;
        } else {
            document.getElementById('url').innerHTML =
                'No valid document ID found for download.';
        }

        // Create "Exclude URL" button
        const excludeButton = document.createElement('button');
        excludeButton.textContent = 'Allow Opening';
        excludeButton.onclick = function () {
            // Define new rules array with the blocked URL
            const newRules = [
                {
                    id: 1,
                    priority: 1,
                    action: { type: 'block' },
                    condition: {
                        urlFilter: blockedUrl,
                        resourceTypes: ['main_frame']
                    }
                }
            ];

            // Add the allow rule for exclusion
            newRules.push({
                id: 2,
                priority: 1,
                action: { type: 'allow' },
                condition: {
                    urlFilter: blockedUrl,
                    resourceTypes: ['main_frame']
                }
            });

            // Get the previous dynamic rules
            chrome.declarativeNetRequest.getDynamicRules((previousRules) => {
                const previousRuleIds = previousRules.map((rule) => rule.id);

                chrome.declarativeNetRequest.updateDynamicRules(
                    {
                        removeRuleIds: previousRuleIds,
                        addRules: newRules
                    },
                    function () {
                        chrome.storage.local.remove('blockedUrl', function () {
                            window.location.href = blockedUrl;
                        });
                    }
                );
            });
        };

        document.getElementById('url').appendChild(excludeButton);
    } else {
        document.getElementById('url').textContent = 'No blocked URL found.';
    }
});
