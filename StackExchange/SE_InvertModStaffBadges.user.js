// ==UserScript==
// @name         Invert Staff & Mod Label Colors
// @namespace    https://github.com/zcoop98
// @description  Inverts the color scheme of the Staff & Moderator labels on Stack Exchange. Reference: <https://meta.stackexchange.com/a/367942>
// @author       zcoop98
// @version      1.1
// @homepage     https://github.com/zcoop98/Userscripts
// @updateURL    https://github.com/zcoop98/Userscripts/raw/master/StackExchange/SE_InvertModStaffBadges.user.js
// @downloadURL  https://github.com/zcoop98/Userscripts/raw/master/StackExchange/SE_InvertModStaffBadges.user.js
// @supportURL   https://github.com/zcoop98/Userscripts/issues
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
//
// @changelog    1.1 Fix diamond icon after SE update to dampen colors, remove excess CSS
// @changelog    1.0 Initial Release
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
.s-badge__moderator:before,
.s-badge__moderator.s-badge__sm:before,
.s-badge__moderator.s-badge__xs:before {
  background-image: none !important;
  background-color: transparent !important;
  mask-size: unset !important;
  -webkit-mask-size: unset !important;
  mask: none !important;
  -webkit-mask: none !important;
  content: "♦" !important;
  width: unset !important;
  height: unset !important;
  margin: 0 2px 0 0 !important;
}
`);
