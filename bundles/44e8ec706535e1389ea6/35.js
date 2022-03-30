(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 1712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorePassword", function() { return scorePassword; });
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1713);
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/*
Copyright 2018 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



const ZXCVBN_USER_INPUTS = ['riot', 'matrix']; // Translations for zxcvbn's suggestion strings

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Use a few words, avoid common phrases");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("No need for symbols, digits, or uppercase letters");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Use a longer keyboard pattern with more turns");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Avoid repeated words and characters");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Avoid sequences");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Avoid recent years");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Avoid years that are associated with you");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Avoid dates and years that are associated with you");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Capitalization doesn't help very much");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("All-uppercase is almost as easy to guess as all-lowercase");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Reversed words aren't much harder to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Predictable substitutions like '@' instead of 'a' don't help very much");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Add another word or two. Uncommon words are better."); // and warnings


Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Repeats like \"aaa\" are easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Repeats like \"abcabcabc\" are only slightly harder to guess than \"abc\"");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Sequences like abc or 6543 are easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Recent years are easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Dates are often easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("This is a top-10 common password");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("This is a top-100 common password");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("This is a very common password");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("This is similar to a commonly used password");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("A word by itself is easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Names and surnames by themselves are easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Common names and surnames are easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Straight rows of keys are easy to guess");

Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _td */ "c"])("Short keyboard patterns are easy to guess");
/**
 * Wrapper around zxcvbn password strength estimation
 * Include this only from async components: it pulls in zxcvbn
 * (obviously) which is large.
 *
 * @param {string} password Password to score
 * @returns {object} Score result with `score` and `feedback` properties
 */


function scorePassword(password) {
  if (password.length === 0) return null;
  const userInputs = ZXCVBN_USER_INPUTS.slice();

  if (_MatrixClientPeg__WEBPACK_IMPORTED_MODULE_1__[/* MatrixClientPeg */ "a"].get()) {
    userInputs.push(_MatrixClientPeg__WEBPACK_IMPORTED_MODULE_1__[/* MatrixClientPeg */ "a"].get().getUserIdLocalpart());
  }

  let zxcvbnResult = zxcvbn__WEBPACK_IMPORTED_MODULE_0___default()(password, userInputs); // Work around https://github.com/dropbox/zxcvbn/issues/216

  if (password.includes(' ')) {
    const resultNoSpaces = zxcvbn__WEBPACK_IMPORTED_MODULE_0___default()(password.replace(/ /g, ''), userInputs);
    if (resultNoSpaces.score < zxcvbnResult.score) zxcvbnResult = resultNoSpaces;
  }

  for (let i = 0; i < zxcvbnResult.feedback.suggestions.length; ++i) {
    // translate suggestions
    zxcvbnResult.feedback.suggestions[i] = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _t */ "a"])(zxcvbnResult.feedback.suggestions[i]);
  } // and warning, if any


  if (zxcvbnResult.feedback.warning) {
    zxcvbnResult.feedback.warning = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_2__[/* _t */ "a"])(zxcvbnResult.feedback.warning);
  }

  return zxcvbnResult;
}

/***/ })

}]);
//# sourceMappingURL=35.js.map