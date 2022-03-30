(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 1727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApp", function() { return loadApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matrix_react_sdk_src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var matrix_react_sdk_src_PlatformPeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var matrix_react_sdk_src_utils_AutoDiscoveryUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(305);
/* harmony import */ var matrix_js_sdk_src_autodiscovery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(279);
/* harmony import */ var matrix_react_sdk_src_Lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(322);
/* harmony import */ var matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95);
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(126);
/* harmony import */ var matrix_react_sdk_src_utils_SnakedObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1088);
/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd
Copyright 2018, 2019 New Vector Ltd
Copyright 2019 Michael Telatynski <7t3chguy@gmail.com>
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












 // add React and ReactPerf to the global namespace, to make them easier to access via the console
// this incidentally means we can forget our React imports in JSX files without penalty.

window.React = react__WEBPACK_IMPORTED_MODULE_0___default.a;
matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log(`Application is running in ${"production"} mode`);
window.matrixLogger = matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"]; // We use this to work out what URL the SDK should
// pass through when registering to allow the user to
// click back to the client having registered.
// It's up to us to recognise if we're loaded with
// this URL and tell MatrixClient to resume registration.
//
// If we're in electron, we should never pass through a file:// URL otherwise
// the identity server will try to 302 the browser to it, which breaks horribly.
// so in that instance, hardcode to use app.element.io for now instead.

function makeRegistrationUrl(params) {
  let url;

  if (window.location.protocol === "vector:") {
    url = 'https://app.element.io/#/register';
  } else {
    url = window.location.protocol + '//' + window.location.host + window.location.pathname + '#/register';
  }

  const keys = Object.keys(params);

  for (let i = 0; i < keys.length; ++i) {
    if (i === 0) {
      url += '?';
    } else {
      url += '&';
    }

    const k = keys[i];
    url += k + '=' + encodeURIComponent(params[k]);
  }

  return url;
}

function onTokenLoginCompleted() {
  // if we did a token login, we're now left with the token, hs and is
  // url as query params in the url; a little nasty but let's redirect to
  // clear them.
  const url = new URL(window.location.href);
  url.searchParams.delete("loginToken");
  matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log(`Redirecting to ${url.href} to drop loginToken from queryparams`);
  window.history.replaceState(null, "", url.href);
}

async function loadApp(fragParams) {
  var _snakedConfig$get;

  Object(_routing__WEBPACK_IMPORTED_MODULE_12__[/* init */ "b"])();
  const platform = matrix_react_sdk_src_PlatformPeg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get();
  const params = Object(_url_utils__WEBPACK_IMPORTED_MODULE_11__[/* parseQs */ "a"])(window.location);
  const urlWithoutQuery = window.location.protocol + '//' + window.location.host + window.location.pathname;
  matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Vector starting at " + urlWithoutQuery);
  platform.startUpdater(); // Don't bother loading the app until the config is verified

  const config = await verifyServerConfig();
  const snakedConfig = new matrix_react_sdk_src_utils_SnakedObject__WEBPACK_IMPORTED_MODULE_10__[/* SnakedObject */ "a"](config); // Before we continue, let's see if we're supposed to do an SSO redirect

  const [userId] = await matrix_react_sdk_src_Lifecycle__WEBPACK_IMPORTED_MODULE_6__[/* getStoredSessionOwner */ "b"]();
  const hasPossibleToken = !!userId;
  const isReturningFromSso = !!params.loginToken;
  const ssoRedirects = Object(matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_7__[/* parseSsoRedirectOptions */ "c"])(config);
  let autoRedirect = ssoRedirects.immediate === true; // XXX: This path matching is a bit brittle, but better to do it early instead of in the app code.

  const isWelcomeOrLanding = window.location.hash === '#/welcome' || window.location.hash === '#';

  if (!autoRedirect && ssoRedirects.on_welcome_page && isWelcomeOrLanding) {
    autoRedirect = true;
  }

  if (!hasPossibleToken && !isReturningFromSso && autoRedirect) {
    matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Bypassing app load to redirect to SSO");
    const tempCli = Object(matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_9__["createClient"])({
      baseUrl: config.validated_server_config.hsUrl,
      idBaseUrl: config.validated_server_config.isUrl
    });
    matrix_react_sdk_src_PlatformPeg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get().startSingleSignOn(tempCli, "sso", `/${Object(_routing__WEBPACK_IMPORTED_MODULE_12__[/* getScreenFromLocation */ "a"])(window.location).screen}`); // We return here because startSingleSignOn() will asynchronously redirect us. We don't
    // care to wait for it, and don't want to show any UI while we wait (not even half a welcome
    // page). As such, just don't even bother loading the MatrixChat component.

    return;
  }

  const defaultDeviceName = (_snakedConfig$get = snakedConfig.get("default_device_display_name")) !== null && _snakedConfig$get !== void 0 ? _snakedConfig$get : platform.getDefaultDeviceDisplayName();
  const MatrixChat = matrix_react_sdk_src_index__WEBPACK_IMPORTED_MODULE_1__["getComponent"]('structures.MatrixChat');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MatrixChat, {
    onNewScreen: _routing__WEBPACK_IMPORTED_MODULE_12__[/* onNewScreen */ "c"],
    makeRegistrationUrl: makeRegistrationUrl,
    config: config,
    realQueryParams: params,
    startingFragmentQueryParams: fragParams,
    enableGuest: !config.disable_guests,
    onTokenLoginCompleted: onTokenLoginCompleted,
    initialScreenAfterLogin: Object(_routing__WEBPACK_IMPORTED_MODULE_12__[/* getScreenFromLocation */ "a"])(window.location),
    defaultDeviceDisplayName: defaultDeviceName
  });
}

async function verifyServerConfig() {
  let validatedConfig;

  try {
    matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Verifying homeserver configuration"); // Note: the query string may include is_url and hs_url - we only respect these in the
    // context of email validation. Because we don't respect them otherwise, we do not need
    // to parse or consider them here.
    // Note: Although we throw all 3 possible configuration options through a .well-known-style
    // verification, we do not care if the servers are online at this point. We do moderately
    // care if they are syntactically correct though, so we shove them through the .well-known
    // validators for that purpose.

    const config = matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"].get();
    let wkConfig = config['default_server_config']; // overwritten later under some conditions

    const serverName = config['default_server_name'];
    const hsUrl = config['default_hs_url'];
    const isUrl = config['default_is_url'];
    const incompatibleOptions = [wkConfig, serverName, hsUrl].filter(i => !!i);

    if (incompatibleOptions.length > 1) {
      // noinspection ExceptionCaughtLocallyJS
      throw Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_3__[/* newTranslatableError */ "i"])(Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_3__[/* _td */ "c"])("Invalid configuration: can only specify one of default_server_config, default_server_name, " + "or default_hs_url."));
    }

    if (incompatibleOptions.length < 1) {
      // noinspection ExceptionCaughtLocallyJS
      throw Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_3__[/* newTranslatableError */ "i"])(Object(matrix_react_sdk_src_languageHandler__WEBPACK_IMPORTED_MODULE_3__[/* _td */ "c"])("Invalid configuration: no default server specified."));
    }

    if (hsUrl) {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Config uses a default_hs_url - constructing a default_server_config using this information");
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].warn("DEPRECATED CONFIG OPTION: In the future, default_hs_url will not be accepted. Please use " + "default_server_config instead.");
      wkConfig = {
        "m.homeserver": {
          "base_url": hsUrl
        }
      };

      if (isUrl) {
        wkConfig["m.identity_server"] = {
          "base_url": isUrl
        };
      }
    }

    let discoveryResult = null;

    if (wkConfig) {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Config uses a default_server_config - validating object");
      discoveryResult = await matrix_js_sdk_src_autodiscovery__WEBPACK_IMPORTED_MODULE_5__[/* AutoDiscovery */ "a"].fromDiscoveryConfig(wkConfig);
    }

    if (serverName) {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Config uses a default_server_name - doing .well-known lookup");
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].warn("DEPRECATED CONFIG OPTION: In the future, default_server_name will not be accepted. Please " + "use default_server_config instead.");
      discoveryResult = await matrix_js_sdk_src_autodiscovery__WEBPACK_IMPORTED_MODULE_5__[/* AutoDiscovery */ "a"].findClientConfig(serverName);
    }

    validatedConfig = matrix_react_sdk_src_utils_AutoDiscoveryUtils__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].buildValidatedConfigFromDiscovery(serverName, discoveryResult, true);
  } catch (e) {
    const {
      hsUrl,
      isUrl,
      userId
    } = await matrix_react_sdk_src_Lifecycle__WEBPACK_IMPORTED_MODULE_6__[/* getStoredSessionVars */ "c"]();

    if (hsUrl && userId) {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].error(e);
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].warn("A session was found - suppressing config error and using the session's homeserver");
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Using pre-existing hsUrl and isUrl: ", {
        hsUrl,
        isUrl
      });
      validatedConfig = await matrix_react_sdk_src_utils_AutoDiscoveryUtils__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].validateServerConfigWithStaticUrls(hsUrl, isUrl, true);
    } else {
      // the user is not logged in, so scream
      throw e;
    }
  }

  validatedConfig.isDefault = true; // Just in case we ever have to debug this

  matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Using homeserver config:", validatedConfig); // Add the newly built config to the actual config for use by the app

  matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_8__[/* logger */ "a"].log("Updating SdkConfig with validated discovery information");
  matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"].add({
    "validated_server_config": validatedConfig
  });
  return matrix_react_sdk_src_SdkConfig__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"].get();
}

/***/ })

}]);
//# sourceMappingURL=element-web-app.js.map