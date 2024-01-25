chrome.tabs.onUpdated.addListener((tabId, tab) => { 
    if (tab.url && tab.url.includes("eCheqsAccept")) { 
        chrome.tabs.sendMessage(tabId, {
            "type": "NEW"
        })
    }
})