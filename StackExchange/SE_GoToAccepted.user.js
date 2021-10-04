// ==UserScript==
// @name         Go To Accepted
// @namespace    https://github.com/zcoop98
// @version      1.0
// @description  Adds a link to the accepted answer next to the sort buttons on QA pages on Stack Exchange network sites.
// @author       zcoop98
// @grant        none
//
// All Main and Meta Stack Exchange Sites:
// @match        https://stackoverflow.com/questions/*
// @match        https://meta.stackoverflow.com/questions/*
// @match        https://superuser.com/questions/*
// @match        https://meta.superuser.com/questions/*
// @match        https://serverfault.com/questions/*
// @match        https://meta.serverfault.com/questions/*
// @match        https://askubuntu.com/questions/*
// @match        https://meta.askubuntu.com/questions/*
// @match        https://mathoverflow.net/questions/*
// @match        https://meta.mathoverflow.net/questions/*
// @match        https://stackapps.com/questions/*
// @match        https://*.stackexchange.com/questions/*
// ==/UserScript==

let accepted = document.getElementsByClassName('accepted-answer')[0];

if (accepted) {
    let el = document.createElement('a');
    el.setAttribute('class', 'flex--item mr24');
    el.setAttribute('href', `#${accepted.dataset.answerid}`);
    // el.setAttribute('href', 'javascript:document.getElementsByClassName("accepted-answer")[0].scrollIntoView({ behavior: "smooth" })');
    el.innerText = 'Go to accepted answer';
    document.getElementsByClassName('answers-subheader')[0].insertBefore(el, document.getElementsByClassName('answers-subheader')[0].lastElementChild)
}