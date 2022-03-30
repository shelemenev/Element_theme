(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 1730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "components", function() { return /* binding */ components; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(271);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./matrix-react-sdk/src/components/structures/EmbeddedPage.tsx
var EmbeddedPage = __webpack_require__(694);

// EXTERNAL MODULE: ./node_modules/sanitize-html/index.js
var sanitize_html = __webpack_require__(380);
var sanitize_html_default = /*#__PURE__*/__webpack_require__.n(sanitize_html);

// EXTERNAL MODULE: ./matrix-react-sdk/src/languageHandler.tsx + 1 modules
var languageHandler = __webpack_require__(85);

// CONCATENATED MODULE: ./src/components/structures/VectorEmbeddedPage.tsx


/*
Copyright 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd
Copyright 2019 New Vector Ltd

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



class VectorEmbeddedPage_VectorEmbeddedPage extends EmbeddedPage["a" /* default */] {
  // we're overriding the base component here, for Element-specific tweaks
  translate(s) {
    s = sanitize_html_default()(Object(languageHandler["a" /* _t */])(s)); // ugly fix for https://github.com/vector-im/element-web/issues/4243
    // eslint-disable-next-line max-len

    s = s.replace(/\[matrix\]/, '<a href="https://matrix.org" target="_blank" rel="noreferrer noopener"><img width="79" height="34" alt="Matrix" style="padding-left: 1px;vertical-align: middle" src="welcome/images/matrix.svg"/></a>');
    return s;
  }

}

defineProperty_default()(VectorEmbeddedPage_VectorEmbeddedPage, "replaces", 'EmbeddedPage');
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(83);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./matrix-react-sdk/src/SdkConfig.ts
var SdkConfig = __webpack_require__(95);

// CONCATENATED MODULE: ./src/components/views/auth/VectorAuthFooter.tsx
/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019 New Vector Ltd

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




const VectorAuthFooter = () => {
  var _brandingConfig$get;

  const brandingConfig = SdkConfig["b" /* default */].getObject("branding");
  const links = (_brandingConfig$get = brandingConfig === null || brandingConfig === void 0 ? void 0 : brandingConfig.get("auth_footer_links")) !== null && _brandingConfig$get !== void 0 ? _brandingConfig$get : [{
    "text": "Blog",
    "url": "https://element.io/blog"
  }, {
    "text": "Twitter",
    "url": "https://twitter.com/element_hq"
  }, {
    "text": "GitHub",
    "url": "https://github.com/vector-im/element-web"
  }];
  const authFooterLinks = [];

  for (const linkEntry of links) {
    authFooterLinks.push( /*#__PURE__*/react_default.a.createElement("a", {
      href: linkEntry.url,
      key: linkEntry.text,
      target: "_blank",
      rel: "noreferrer noopener"
    }, linkEntry.text));
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "mx_AuthFooter"
  }, authFooterLinks, /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://matrix.org",
    target: "_blank",
    rel: "noreferrer noopener"
  }, Object(languageHandler["a" /* _t */])('Powered by Matrix')));
};

VectorAuthFooter.replaces = 'AuthFooter';
/* harmony default export */ var auth_VectorAuthFooter = (VectorAuthFooter);
// CONCATENATED MODULE: ./src/components/views/auth/VectorAuthHeaderLogo.tsx


/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019 New Vector Ltd

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


class VectorAuthHeaderLogo_VectorAuthHeaderLogo extends react_default.a.PureComponent {
  render() {
    var _brandingConfig$get;

    const brandingConfig = SdkConfig["b" /* default */].getObject("branding");
    const logoUrl = (_brandingConfig$get = brandingConfig === null || brandingConfig === void 0 ? void 0 : brandingConfig.get("auth_header_logo_url")) !== null && _brandingConfig$get !== void 0 ? _brandingConfig$get : "themes/element/img/logos/element-logo.svg";
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "mx_AuthHeaderLogo"
    }, /*#__PURE__*/react_default.a.createElement("img", {
      src: logoUrl,
      alt: "Element"
    }));
  }

}

defineProperty_default()(VectorAuthHeaderLogo_VectorAuthHeaderLogo, "replaces", 'AuthHeaderLogo');
// EXTERNAL MODULE: ./matrix-react-sdk/src/index.ts + 1 modules
var src = __webpack_require__(131);

// CONCATENATED MODULE: ./src/components/views/auth/VectorAuthPage.tsx


/*
Copyright 2019, 2020 New Vector Ltd

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



class VectorAuthPage_VectorAuthPage extends react_default.a.PureComponent {
  // cache the url as a static to prevent it changing without refreshing
  static getWelcomeBackgroundUrl() {
    if (VectorAuthPage_VectorAuthPage.welcomeBackgroundUrl) return VectorAuthPage_VectorAuthPage.welcomeBackgroundUrl;
    const brandingConfig = SdkConfig["b" /* default */].getObject("branding");
    VectorAuthPage_VectorAuthPage.welcomeBackgroundUrl = "themes/element/img/backgrounds/lake.jpg";
    const configuredUrl = brandingConfig === null || brandingConfig === void 0 ? void 0 : brandingConfig.get("welcome_background_url");

    if (configuredUrl) {
      if (Array.isArray(configuredUrl)) {
        const index = Math.floor(Math.random() * configuredUrl.length);
        VectorAuthPage_VectorAuthPage.welcomeBackgroundUrl = configuredUrl[index];
      } else {
        VectorAuthPage_VectorAuthPage.welcomeBackgroundUrl = configuredUrl;
      }
    }

    return VectorAuthPage_VectorAuthPage.welcomeBackgroundUrl;
  }

  render() {
    const AuthFooter = src["getComponent"]('auth.AuthFooter');
    const pageStyle = {
      background: `center/cover fixed url(${VectorAuthPage_VectorAuthPage.getWelcomeBackgroundUrl()})`
    };
    const modalStyle = {
      position: 'relative',
      background: 'initial'
    };
    const blurStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      filter: 'blur(40px)',
      background: pageStyle.background
    };
    const modalContentStyle = {
      display: 'flex',
      zIndex: 1,
      background: 'rgba(255, 255, 255, 0.59)',
      borderRadius: '8px'
    };
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "mx_AuthPage",
      style: pageStyle
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "mx_AuthPage_modal",
      style: modalStyle
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "mx_AuthPage_modalBlur",
      style: blurStyle
    }), /*#__PURE__*/react_default.a.createElement("div", {
      className: "mx_AuthPage_modalContent",
      style: modalContentStyle
    }, this.props.children)), /*#__PURE__*/react_default.a.createElement(AuthFooter, null));
  }

}

defineProperty_default()(VectorAuthPage_VectorAuthPage, "replaces", 'AuthPage');

defineProperty_default()(VectorAuthPage_VectorAuthPage, "welcomeBackgroundUrl", void 0);
// CONCATENATED MODULE: ./src/component-index.js
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

/*
 * THIS FILE IS AUTO-GENERATED
 * You can edit it you like, but your changes will be overwritten,
 * so you'd just be trying to swim upstream like a salmon.
 * You are not a salmon.
 */
let components = {};

VectorEmbeddedPage_VectorEmbeddedPage && (components['structures.VectorEmbeddedPage'] = VectorEmbeddedPage_VectorEmbeddedPage);

auth_VectorAuthFooter && (components['views.auth.VectorAuthFooter'] = auth_VectorAuthFooter);

VectorAuthHeaderLogo_VectorAuthHeaderLogo && (components['views.auth.VectorAuthHeaderLogo'] = VectorAuthHeaderLogo_VectorAuthHeaderLogo);

VectorAuthPage_VectorAuthPage && (components['views.auth.VectorAuthPage'] = VectorAuthPage_VectorAuthPage);


/***/ })

}]);
//# sourceMappingURL=element-web-component-index.js.map