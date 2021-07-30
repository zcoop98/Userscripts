// ==UserScript==
// @name         Invert Staff & Mod Label Colors
// @namespace    https://github.com/zcoop98
// @description  Inverts the color scheme of the Staff & Moderator labels on Stack Exchange. Reference: <https://meta.stackexchange.com/a/367942>
// @author       zcoop98
// @version      1.0
// @homepage     https://github.com/zcoop98/Userscripts
// @updateURL    https://github.com/zcoop98/Userscripts/raw/master/StackExchange/SE_InvertModStaffBadges.user.js
// @downloadURL  https://github.com/zcoop98/Userscripts/raw/master/StackExchange/SE_InvertModStaffBadges.user.js
// @supportURL   https://github.com/zcoop98/Userscripts
//
// @grant        GM_addStyle
// @run-at       document-start
//
// @include      https://*stackoverflow.com/*
// @include      https://*serverfault.com/*
// @include      https://*superuser.com/*
// @include      https://*askubuntu.com/*
// @include      https://*mathoverflow.net/*
// @include      https://stackapps.com/*
// @include      https://*.stackexchange.com/*
//
// @exclude      https://data.stackexchange.com/*
// @exclude      https://contests.stackoverflow.com/*
// ==/UserScript==

GM_addStyle(`
.s-badge__staff {
  border-color: var(--orange-400) !important;
  background-color: transparent !important;
  color: var(--orange-400) !important;
}
.s-badge__moderator {
  border-color: var(--theme-secondary-color) !important;
  background-color: transparent !important;
  color: var(--theme-secondary-color) !important;
}
.s-badge__moderator.s-badge__xs:before {
  background-image: none !important;
  content: "♦" !important;
  width: unset !important;
  height: unset !important;
  margin-right: 2px !important;
}
.s-badge__moderator:before {
  background-image: none !important;
  content: "♦" !important;
  width: unset !important;
  height: unset !important;
  margin: 0 2px 0 0 !important;
}
`);
