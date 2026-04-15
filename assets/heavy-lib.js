(function () {
  function markHeavyLibLoaded() {
    window.__heavyLibLoaded = true;
    console.log("heavy-lib loaded");
  }

  if ("requestIdleCallback" in window) {
    requestIdleCallback(markHeavyLibLoaded);
  } else {
    setTimeout(markHeavyLibLoaded, 0);
  }
})();