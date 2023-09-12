chrome.tabs.onUpdated.addListener(onTabUpdated)

function onTabUpdated(id, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url === 'chrome://newtab/') {
        navigate(id);
    }
}

function navigate(id) {
    return chrome.tabs.update(id, { url: 'new-tab/index.html' });
    // return chrome.tabs.update(id, { url: 'chrome://bookmarks/?id=2' });
    // return chrome.tabs.update(id, { url: 'https://www.google.com/' });
    // return chrome.tabs.update(id, { url: 'https://web.tabliss.io/' });
}

chrome.management.getSelf(foo)

function foo(exts) {
    console.log(exts)
}
