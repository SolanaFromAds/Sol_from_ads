let blockedAdsCount = 0;

// Ad block listener
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    blockedAdsCount++;
    chrome.storage.local.set({ blockedAdsCount });
    return { cancel: true };
  },
  { urls: ["*://*/*ads*", "*://*/*.ads.*", "*://*/*advertisement*"] },
  ["blocking"]
);
