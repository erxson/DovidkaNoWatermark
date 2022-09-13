// ==UserScript==
// @name         ClipboardProtect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  dovidka.biz.ua idite nahuy
// @author       ericsson
// @match        https://dovidka.biz.ua/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=biz.ua
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("copy", function(event) {
        event.stopImmediatePropagation();
    }, true);
})();
