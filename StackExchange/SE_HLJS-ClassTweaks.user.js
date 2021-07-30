// ==UserScript==
// @name         Stack Exchange highlight.js Tweaks
// @namespace    https://github.com/zcoop98
// @description  Tweaks the color variable associated with specific tokens in highlight.js on Stack Exchange sites
// @author       zcoop98
// @version      0.2
// @homepage     https://github.com/zcoop98/Userscripts
// @updateURL    https://github.com/zcoop98/Userscripts/raw/master/StackExchange/SE_HLJS-ClassTweaks.user.js
// @downloadURL  https://github.com/zcoop98/Userscripts/raw/master/StackExchange/SE_HLJS-ClassTweaks.user.js
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

/*\
|*| **Current Changes List:**
|*| -------------------------
|*| _.hljs-number_: Moved from --highlight-keyword (Blue) to --highlight-symbol (Purple)
|*| _.hljs-type_: Moved from --highlight-namespace (Orange) to --highlight-keyword (Blue)
|*| R only - _.hljs-operator_: Added to --highlight-variable (Yellowish-Green)
\*/

GM_addStyle(`
/* General Classes */
  /* Near Black/ White */
    code[class*="language-"] .hljs-subst,
    pre.s-code-block>code .hljs-subst {
        color: var(--highlight-color) !important
    }

  /* Grey */
    code[class*="language-"] .hljs-comment,
    pre.s-code-block>code .hljs-comment {
        color: var(--highlight-comment) !important
    }

  /* Magenta */
    code[class*="language-"] .hljs-keyword,
    pre.s-code-block>code .hljs-keyword,
    code[class*="language-"] .hljs-selector-tag,
    pre.s-code-block>code .hljs-selector-tag,
    code[class*="language-"] .hljs-meta-keyword,
    pre.s-code-block>code .hljs-meta-keyword,
    code[class*="language-"] .hljs-doctag,
    pre.s-code-block>code .hljs-doctag,
    code[class*="language-"] .hljs-type,
    pre.s-code-block>code .hljs-type,
    code[class*="language-"] .hljs-section,
    pre.s-code-block>code .hljs-section {
        color: var(--highlight-keyword) !important
    }

  /* Blue */
    code[class*="language-"] .hljs-attr,
    pre.s-code-block>code .hljs-attr {
        color: var(--highlight-attribute) !important
    }

  /* Magenta */
    code[class*="language-"] .hljs-number,
    pre.s-code-block>code .hljs-number,
    code[class*="language-"] .hljs-attribute,
    pre.s-code-block>code .hljs-attribute {
        color: var(--highlight-symbol) !important
    }

  /* Orange */
    code[class*="language-"] .hljs-name,
    pre.s-code-block>code .hljs-name,
    code[class*="language-"] .hljs-selector-id,
    pre.s-code-block>code .hljs-selector-id,
    code[class*="language-"] .hljs-quote,
    pre.s-code-block>code .hljs-quote,
    code[class*="language-"] .hljs-template-tag,
    pre.s-code-block>code .hljs-template-tag {
        color: var(--highlight-namespace) !important
    }

  /* Blue */
    code[class*="language-"] .hljs-selector-class,
    pre.s-code-block>code .hljs-selector-class {
        color: var(--highlight-keyword) !important
    }

  /* Yellow-ish Green */
    code[class*="language-"] .hljs-string,
    pre.s-code-block>code .hljs-string,
    code[class*="language-"] .hljs-regexp,
    pre.s-code-block>code .hljs-regexp,
    code[class*="language-"] .hljs-symbol,
    pre.s-code-block>code .hljs-symbol,
    code[class*="language-"] .hljs-variable,
    pre.s-code-block>code .hljs-variable,
    code[class*="language-"] .hljs-template-variable,
    pre.s-code-block>code .hljs-template-variable,
    code[class*="language-"] .hljs-link,
    pre.s-code-block>code .hljs-link,
    code[class*="language-"] .hljs-selector-attr,
    pre.s-code-block>code .hljs-selector-attr,
    code[class*="language-"] .hljs-meta-string,
    pre.s-code-block>code .hljs-meta-string {
        color: var(--highlight-variable) !important
    }

  /* Blue */
    code[class*="language-"] .hljs-meta,
    pre.s-code-block>code .hljs-meta,
    code[class*="language-"] .hljs-selector-pseudo,
    pre.s-code-block>code .hljs-selector-pseudo {
        color: var(--highlight-keyword) !important
    }

  /* Orange */
    code[class*="language-"] .hljs-built_in,
    pre.s-code-block>code .hljs-built_in,
    code[class*="language-"] .hljs-title,
    pre.s-code-block>code .hljs-title,
    code[class*="language-"] .hljs-literal,
    pre.s-code-block>code .hljs-literal {
        color: var(--highlight-literal) !important
    }

  /* Lighter Grey */
    code[class*="language-"] .hljs-bullet,
    pre.s-code-block>code .hljs-bullet,
    code[class*="language-"] .hljs-code,
    pre.s-code-block>code .hljs-code {
        color: var(--highlight-punctuation) !important
    }

  /* Red */
    code[class*="language-"] .hljs-deletion,
    pre.s-code-block>code .hljs-deletion {
        color: var(--highlight-deletion) !important
    }

  /* Green */
    code[class*="language-"] .hljs-addition,
    pre.s-code-block>code .hljs-addition {
        color: var(--highlight-addition) !important
    }
/* Language-Specific Tweaks/ Classes */
  /* lang-r */
    code.language-r .hljs-operator,
    pre.s-code-block.lang-r>code .hljs-operator {
        color: var(--highlight-variable) !important
    }
`);
