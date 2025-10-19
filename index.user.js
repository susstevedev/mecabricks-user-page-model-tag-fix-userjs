// ==UserScript==
// @name         Mecabricks: user page comments fix for model tags
// @namespace    http://tampermonkey.net/
// @version      2025-10-19
// @description  try to take over the world!
// @author       susstevedev
// @match        *://*.mecabricks.com/en/user/*/comments?p=*
// @match        *://*.mecabricks.com/en/user/*/comments
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mecabricks.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const comments = document.querySelectorAll('.comment .content-container .text');
    console.log(comments);

    comments.forEach(c => {
        console.log(c);

        let html = c.innerHTML;

        html = html.replace(
            /\[mecabricks\]([A-Za-z0-9]+)\[\/mecabricks\]/gi,
            '<iframe src="https://mecabricks.weetpix.com/player/$1" width="400" height="200" frameborder="0"></iframe>'
        );

        console.log(html);

        c.innerHTML = html;
    });
})();
