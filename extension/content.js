const adSelectors = ["iframe[src*='ads']", "div[class*='ad']", "img[src*='ads']"];

function blockAds() {
  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  });
}

// Run on page load
blockAds();
new MutationObserver(blockAds).observe(document.body, { childList: true, subtree: true });
