!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=function(){return'\n  <div class="content__inner">\n      <h1 class="content__title">Hello !</h1>\n      <div class="content__text">        \n        <p>"On the other hand, we denounce with righteous\n          indignation and dislike men who are so beguiled and demoralized by the charms\n          of pleasure of the moment, so blinded by desire, that they cannot foresee the\n          pain and trouble that are bound to ensue; and equal blame belongs to those who\n          fail in their duty through weakness of will, which is the same as saying through\n          shrinking from toil and pain. These cases are perfectly simple and easy to\n          distinguish. In a free hour, when our power of choice is untrammelled and when\n          nothing prevents our being able to do what we like best, every pleasure is to be\n          welcomed and every pain avoided. But in certain circumstances and owing to the claims\n          of duty or the obligations of business it will frequently occur that pleasures have\n          to be repudiated and annoyances accepted. The wise man therefore always holds in\n          these matters to this principle of selection: he rejects pleasures to secure other\n          greater pleasures, or else he endures pains to avoid worse pains."\n          </p>\n          <p>"On the other hand, we denounce with righteous\n          indignation and dislike men who are so beguiled and demoralized by the charms\n          of pleasure of the moment, so blinded by desire, that they cannot foresee the\n          pain and trouble that are bound to ensue; and equal blame belongs to those who\n          fail in their duty through weakness of will, which is the same as saying through\n          shrinking from toil and pain. These cases are perfectly simple and easy to\n          distinguish. In a free hour, when our power of choice is untrammelled and when\n          nothing prevents our being able to do what we like best, every pleasure is to be\n          welcomed and every pain avoided. But in certain circumstances and owing to the claims\n          of duty or the obligations of business it will frequently occur that pleasures have\n          to be repudiated and annoyances accepted. The wise man therefore always holds in\n          these matters to this principle of selection: he rejects pleasures to secure other\n          greater pleasures, or else he endures pains to avoid worse pains."\n          </p>\n      </div> \n    </div>   \n  '};var a=function(){return'\n  <div class="content__inner">\n      <h1 class="content__title">Menu</h1>\n      <div class="content__text">        \n        <p>"On the other hand, we denounce with righteous\n          indignation and dislike men who are so beguiled and demoralized by the charms\n          of pleasure of the moment, so blinded by desire, that they cannot foresee the\n          pain and trouble that are bound to ensue; and equal blame belongs to those who\n          fail in their duty through weakness of will, which is the same as saying through\n          shrinking from toil and pain. These cases are perfectly simple and easy to\n          distinguish. In a free hour, when our power of choice is untrammelled and when\n          nothing prevents our being able to do what we like best, every pleasure is to be\n          welcomed and every pain avoided. But in certain circumstances and owing to the claims\n          of duty or the obligations of business it will frequently occur that pleasures have\n          to be repudiated and annoyances accepted. The wise man therefore always holds in\n          these matters to this principle of selection: he rejects pleasures to secure other\n          greater pleasures, or else he endures pains to avoid worse pains."\n          </p>\n      </div> \n    </div>   \n  '};var i=function(){return'\n  <div class="content__inner">\n      <h1 class="content__title">contact info</h1>\n      <div class="content__text">        \n        <p>"On the other hand, we denounce with righteous\n          indignation and dislike men who are so beguiled and demoralized by the charms\n          of pleasure of the moment, so blinded by desire, that they cannot foresee the\n          pain and trouble that are bound to ensue; and equal blame belongs to those who\n          fail in their duty through weakness of will, which is the same as saying through\n          shrinking from toil and pain. These cases are perfectly simple and easy to\n          distinguish. In a free hour, when our power of choice is untrammelled and when\n          nothing prevents our being able to do what we like best, every pleasure is to be\n          welcomed and every pain avoided. But in certain circumstances and owing to the claims\n          of duty or the obligations of business it will frequently occur that pleasures have\n          to be repudiated and annoyances accepted. The wise man therefore always holds in\n          these matters to this principle of selection: he rejects pleasures to secure other\n          greater pleasures, or else he endures pains to avoid worse pains."\n          </p>\n      </div> \n    </div>   \n  '};const s=document.getElementById("content"),r=document.getElementById("home-btn"),d=document.getElementById("menu-btn"),l=document.getElementById("contact-btn");function h(){const e=document.getElementsByClassName("nav__button");s.innerHTML="";for(let n of e)n.classList.remove("nav__button--active")}function u(){h(),r.classList.add("nav__button--active"),s.innerHTML=o()}r.addEventListener("click",u,!1),d.addEventListener("click",(function(){h(),d.classList.add("nav__button--active"),s.innerHTML=a()}),!1),l.addEventListener("click",(function(){h(),l.classList.add("nav__button--active"),s.innerHTML=i()}),!1),u()}]);