// create window on app load
chrome.app.runtime.onLaunched.addListener(() => {
  chrome.app.window.create("window.html", {
    "id": 'MyWindowID',
    "bounds": {
      width: 800,
      height: 600,
      left: 100,
      top: 100
    },
    minWidth: 800,
    minHeight: 600
  });
});

// onInstalled()
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({name: 'aakash'}, () => {
  });
});
