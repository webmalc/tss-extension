/*global chrome */
chrome.browserAction.onClicked.addListener(function (page) {
    'use strict';
    chrome.tabs.create({
        url: "index.html?url=" + encodeURIComponent(page.url) + '&title=' + encodeURIComponent(page.title)
    });
});