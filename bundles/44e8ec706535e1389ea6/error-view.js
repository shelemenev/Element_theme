(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 1728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _res_css_structures_ErrorView_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(639);
/* harmony import */ var _res_css_structures_ErrorView_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_res_css_structures_ErrorView_scss__WEBPACK_IMPORTED_MODULE_2__);
/*
Copyright 2020 New Vector Ltd

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

 // directly import the style here as this layer does not support rethemedex at this time so no matrix-react-sdk
// scss variables will be accessible.



const ErrorView = _ref => {
  let {
    title,
    messages
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_ErrorView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_ErrorView_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "mx_HomePage_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    height: "42",
    src: "themes/element/img/logos/element-logo.svg",
    alt: "Element"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("Failed to start"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    id: "step1_heading"
  }, title), messages && messages.map(msg => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    key: msg
  }, msg))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_row mx_Center mx_Spacer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "mx_Spacer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "https://element.io",
    target: "_blank",
    className: "mx_FooterLink"
  }, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("Go to element.io"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorView);

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=error-view.js.map