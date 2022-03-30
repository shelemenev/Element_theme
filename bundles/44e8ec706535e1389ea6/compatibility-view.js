(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 1729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
/* harmony import */ var _res_css_structures_ErrorView_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(639);
/* harmony import */ var _res_css_structures_ErrorView_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_res_css_structures_ErrorView_scss__WEBPACK_IMPORTED_MODULE_3__);
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



const CompatibilityView = _ref => {
  let {
    onAccept
  } = _ref;
  const brand = matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].get("brand");
  const mobileBuilds = matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].get("mobile_builds");
  let ios = null;
  const iosCustomUrl = mobileBuilds === null || mobileBuilds === void 0 ? void 0 : mobileBuilds.ios;

  if (iosCustomUrl !== null) {
    // could be undefined or a string
    ios = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "iOS"), " (iPhone or iPad)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: iosCustomUrl || "https://apps.apple.com/app/vector/id1083446067",
      target: "_blank",
      className: "mx_ClearDecoration"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      height: "48",
      src: "themes/element/img/download/apple.svg",
      alt: "Apple App Store"
    })));
  }

  let android = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "mx_Spacer",
    key: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "Android"))];
  const andCustomUrl = mobileBuilds === null || mobileBuilds === void 0 ? void 0 : mobileBuilds.android;
  const fdroidCustomUrl = mobileBuilds === null || mobileBuilds === void 0 ? void 0 : mobileBuilds.fdroid;

  if (andCustomUrl !== null) {
    // undefined or string
    android.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: andCustomUrl || "https://play.google.com/store/apps/details?id=im.vector.app",
      target: "_blank",
      className: "mx_ClearDecoration",
      key: "android"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      height: "48",
      src: "themes/element/img/download/google.svg",
      alt: "Google Play Store"
    })));
  }

  if (fdroidCustomUrl !== null) {
    // undefined or string
    android.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: fdroidCustomUrl || "https://f-droid.org/repository/browse/?fdid=im.vector.app",
      target: "_blank",
      className: "mx_ClearDecoration",
      key: "fdroid"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      height: "48",
      src: "themes/element/img/download/fdroid.svg",
      alt: "F-Droid"
    })));
  }

  if (android.length === 1) {
    // just a header, meaning no links
    android = [];
  }

  let mobileHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    id: "step2_heading"
  }, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("Use %(brand)s on mobile", {
    brand
  }));

  if (!android.length && !ios) {
    mobileHeader = null;
  }

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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("Unsupported browser"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    id: "step1_heading"
  }, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("Your browser can't run %(brand)s", {
    brand
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("%(brand)s uses advanced browser features which aren't " + "supported by your current browser.", {
    brand
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])('Please install <chromeLink>Chrome</chromeLink>, <firefoxLink>Firefox</firefoxLink>, ' + 'or <safariLink>Safari</safariLink> for the best experience.', {}, {
    'chromeLink': sub => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://www.google.com/chrome"
    }, sub),
    'firefoxLink': sub => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://firefox.com"
    }, sub),
    'safariLink': sub => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://apple.com/safari"
    }, sub)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("You can continue using your current browser, but some or all features may not work " + "and the look and feel of the application may be incorrect.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    onClick: onAccept
  }, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("I understand the risks and wish to continue"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, mobileHeader, ios, android))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mx_HomePage_row mx_Center mx_Spacer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "mx_Spacer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "https://element.io",
    target: "_blank",
    className: "mx_FooterLink"
  }, Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])("Go to element.io"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CompatibilityView);

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=compatibility-view.js.map