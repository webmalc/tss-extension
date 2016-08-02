/*global chrome */
chrome.browserAction.onClicked.addListener(function (page) {
    'use strict';
    console.log(page);
    chrome.tabs.create({ url: "index.html?page=" + encodeURIComponent(page.url) });
});