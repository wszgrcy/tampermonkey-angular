// ==UserScript==
// @name         tampermonkey-ng
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @grant        GM_xmlhttpRequest
// @require      file:///D:\xxx\tampermonkey-angular\element.js
// ==/UserScript==

(function () {
  'use strict';
  //doc 不需要油猴的一些特定方法的可以在ng中导入
  window.onload = () => {
    let ele = document.createElement('custom-root');
    ele.gmHttp = GM_xmlhttpRequest;
    console.log(ele)
    document.body.appendChild(ele)
  }
})();
