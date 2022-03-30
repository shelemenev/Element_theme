(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 1720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DisableEventIndexDialog; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var _components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(108);
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);
/* harmony import */ var _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90);
/* harmony import */ var _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(272);
/* harmony import */ var _dispatcher_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93);
/* harmony import */ var _settings_SettingLevel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(102);


/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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











/*
 * Allows the user to disable the Event Index.
 */
class DisableEventIndexDialog extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onDisable", async () => {
      this.setState({
        disabling: true
      });
      await _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"].setValue('enableEventIndexing', null, _settings_SettingLevel__WEBPACK_IMPORTED_MODULE_10__[/* SettingLevel */ "a"].DEVICE, false);
      await _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].deleteEventIndex();
      this.props.onFinished(true);
      _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].fire(_dispatcher_actions__WEBPACK_IMPORTED_MODULE_9__[/* Action */ "a"].ViewUserSettings);
    });

    this.state = {
      disabling: false
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      onFinished: this.props.onFinished,
      title: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_6__[/* _t */ "a"])("Are you sure?")
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_6__[/* _t */ "a"])("If disabled, messages from encrypted rooms won't appear in search results."), this.state.disabling ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_6__[/* _t */ "a"])('Disable'),
      onPrimaryButtonClick: this.onDisable,
      primaryButtonClass: "danger",
      cancelButtonClass: "warning",
      onCancel: this.props.onFinished,
      disabled: this.state.disabling
    }));
  }

}

/***/ })

}]);
//# sourceMappingURL=30.js.map