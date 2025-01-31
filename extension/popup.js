document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("blockedAdsCount", (data) => {
        let blockedAds = data.blockedAdsCount || 0;
        document.getElementById("adsBlocked").textContent = blockedAds;

        let solAmount = (blockedAds / 250) * 0.005;
        document.getElementById("solAmount").textContent = solAmount.toFixed(6);
    });
});
