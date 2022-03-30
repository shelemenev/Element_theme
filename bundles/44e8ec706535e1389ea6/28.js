(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 1718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImportE2eKeysDialog; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _utils_MegolmExportEncryption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641);
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);


/*
Copyright 2017 Vector Creations Ltd

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






function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = e => {
      resolve(e.target.result);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

var Phase;

(function (Phase) {
  Phase["Edit"] = "edit";
  Phase["Importing"] = "importing";
})(Phase || (Phase = {}));

class ImportE2eKeysDialog extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "unmounted", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "file", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "passphrase", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onFormChange", ev => {
      const files = this.file.current.files || [];
      this.setState({
        enableSubmit: this.passphrase.current.value !== "" && files.length > 0
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onFormSubmit", ev => {
      ev.preventDefault();
      this.startImport(this.file.current.files[0], this.passphrase.current.value);
      return false;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onCancelClick", ev => {
      ev.preventDefault();
      this.props.onFinished(false);
      return false;
    });

    this.state = {
      enableSubmit: false,
      phase: Phase.Edit,
      errStr: null
    };
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  startImport(file, passphrase) {
    this.setState({
      errStr: null,
      phase: Phase.Importing
    });
    return readFileAsArrayBuffer(file).then(arrayBuffer => {
      return _utils_MegolmExportEncryption__WEBPACK_IMPORTED_MODULE_3__[/* decryptMegolmKeyFile */ "a"](arrayBuffer, passphrase);
    }).then(keys => {
      return this.props.matrixClient.importRoomKeys(JSON.parse(keys));
    }).then(() => {
      // TODO: it would probably be nice to give some feedback about what we've imported here.
      this.props.onFinished(true);
    }).catch(e => {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "a"].error("Error importing e2e keys:", e);

      if (this.unmounted) {
        return;
      }

      const msg = e.friendlyText || Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])('Unknown error');

      this.setState({
        errStr: msg,
        phase: Phase.Edit
      });
    });
  }

  render() {
    const disableForm = this.state.phase !== Phase.Edit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      className: "mx_importE2eKeysDialog",
      onFinished: this.props.onFinished,
      title: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])("Import room keys")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onFormSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_Dialog_content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])('This process allows you to import encryption keys ' + 'that you had previously exported from another Matrix ' + 'client. You will then be able to decrypt any ' + 'messages that the other client could decrypt.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])('The export file will be protected with a passphrase. ' + 'You should enter the passphrase here, to decrypt the file.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "error"
    }, this.state.errStr), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "importFile"
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])("File to import"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputCell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.file,
      id: "importFile",
      type: "file",
      autoFocus: true,
      onChange: this.onFormChange,
      disabled: disableForm
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "passphrase"
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])("Enter passphrase"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_E2eKeysDialog_inputCell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.passphrase,
      id: "passphrase",
      size: 64,
      type: "password",
      onChange: this.onFormChange,
      disabled: disableForm
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_Dialog_buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "mx_Dialog_primary",
      type: "submit",
      value: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])('Import'),
      disabled: !this.state.enableSubmit || disableForm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.onCancelClick,
      disabled: disableForm
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_4__[/* _t */ "a"])("Cancel")))));
  }

}

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decryptMegolmKeyFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return encryptMegolmKeyFile; });
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _SdkConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
/*
Copyright 2017 Vector Creations Ltd
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



const subtleCrypto = window.crypto.subtle || window.crypto.webkitSubtle;
/**
 * Make an Error object which has a friendlyText property which is already
 * translated and suitable for showing to the user.
 *
 * @param {string} message message for the exception
 * @param {string} friendlyText
 * @returns {{message: string, friendlyText: string}}
 */

function friendlyError(message, friendlyText) {
  return {
    message,
    friendlyText
  };
}

function cryptoFailMsg() {
  return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])('Your browser does not support the required cryptography extensions');
}
/**
 * Decrypt a megolm key file
 *
 * @param {ArrayBuffer} data file to decrypt
 * @param {String} password
 * @return {Promise<String>} promise for decrypted output
 *
 *
 */


async function decryptMegolmKeyFile(data, password) {
  const body = unpackMegolmKeyFile(data);
  const brand = _SdkConfig__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].get().brand; // check we have a version byte

  if (body.length < 1) {
    throw friendlyError('Invalid file: too short', Object(_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])('Not a valid %(brand)s keyfile', {
      brand
    }));
  }

  const version = body[0];

  if (version !== 1) {
    throw friendlyError('Unsupported version', Object(_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])('Not a valid %(brand)s keyfile', {
      brand
    }));
  }

  const ciphertextLength = body.length - (1 + 16 + 16 + 4 + 32);

  if (ciphertextLength < 0) {
    throw friendlyError('Invalid file: too short', Object(_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])('Not a valid %(brand)s keyfile', {
      brand
    }));
  }

  const salt = body.subarray(1, 1 + 16);
  const iv = body.subarray(17, 17 + 16);
  const iterations = body[33] << 24 | body[34] << 16 | body[35] << 8 | body[36];
  const ciphertext = body.subarray(37, 37 + ciphertextLength);
  const hmac = body.subarray(-32);
  const [aesKey, hmacKey] = await deriveKeys(salt, iterations, password);
  const toVerify = body.subarray(0, -32);
  let isValid;

  try {
    isValid = await subtleCrypto.verify({
      name: 'HMAC'
    }, hmacKey, hmac, toVerify);
  } catch (e) {
    throw friendlyError('subtleCrypto.verify failed: ' + e, cryptoFailMsg());
  }

  if (!isValid) {
    throw friendlyError('hmac mismatch', Object(_languageHandler__WEBPACK_IMPORTED_MODULE_1__[/* _t */ "a"])('Authentication check failed: incorrect password?'));
  }

  let plaintext;

  try {
    plaintext = await subtleCrypto.decrypt({
      name: "AES-CTR",
      counter: iv,
      length: 64
    }, aesKey, ciphertext);
  } catch (e) {
    throw friendlyError('subtleCrypto.decrypt failed: ' + e, cryptoFailMsg());
  }

  return new TextDecoder().decode(new Uint8Array(plaintext));
}
/**
 * Encrypt a megolm key file
 *
 * @param {String} data
 * @param {String} password
 * @param {Object=} options
 * @param {Number=} options.kdf_rounds Number of iterations to perform of the
 *    key-derivation function.
 * @return {Promise<ArrayBuffer>} promise for encrypted output
 */

async function encryptMegolmKeyFile(data, password, options // eslint-disable-line camelcase
) {
  options = options || {};
  const kdfRounds = options.kdf_rounds || 500000;
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);
  const iv = new Uint8Array(16);
  window.crypto.getRandomValues(iv); // clear bit 63 of the IV to stop us hitting the 64-bit counter boundary
  // (which would mean we wouldn't be able to decrypt on Android). The loss
  // of a single bit of iv is a price we have to pay.

  iv[8] &= 0x7f;
  const [aesKey, hmacKey] = await deriveKeys(salt, kdfRounds, password);
  const encodedData = new TextEncoder().encode(data);
  let ciphertext;

  try {
    ciphertext = await subtleCrypto.encrypt({
      name: "AES-CTR",
      counter: iv,
      length: 64
    }, aesKey, encodedData);
  } catch (e) {
    throw friendlyError('subtleCrypto.encrypt failed: ' + e, cryptoFailMsg());
  }

  const cipherArray = new Uint8Array(ciphertext);
  const bodyLength = 1 + salt.length + iv.length + 4 + cipherArray.length + 32;
  const resultBuffer = new Uint8Array(bodyLength);
  let idx = 0;
  resultBuffer[idx++] = 1; // version

  resultBuffer.set(salt, idx);
  idx += salt.length;
  resultBuffer.set(iv, idx);
  idx += iv.length;
  resultBuffer[idx++] = kdfRounds >> 24;
  resultBuffer[idx++] = kdfRounds >> 16 & 0xff;
  resultBuffer[idx++] = kdfRounds >> 8 & 0xff;
  resultBuffer[idx++] = kdfRounds & 0xff;
  resultBuffer.set(cipherArray, idx);
  idx += cipherArray.length;
  const toSign = resultBuffer.subarray(0, idx);
  let hmac;

  try {
    hmac = await subtleCrypto.sign({
      name: 'HMAC'
    }, hmacKey, toSign);
  } catch (e) {
    throw friendlyError('subtleCrypto.sign failed: ' + e, cryptoFailMsg());
  }

  const hmacArray = new Uint8Array(hmac);
  resultBuffer.set(hmacArray, idx);
  return packMegolmKeyFile(resultBuffer);
}
/**
 * Derive the AES and HMAC-SHA-256 keys for the file
 *
 * @param {Unit8Array} salt  salt for pbkdf
 * @param {Number} iterations number of pbkdf iterations
 * @param {String} password  password
 * @return {Promise<[CryptoKey, CryptoKey]>} promise for [aes key, hmac key]
 */

async function deriveKeys(salt, iterations, password) {
  const start = new Date();
  let key;

  try {
    key = await subtleCrypto.importKey('raw', new TextEncoder().encode(password), {
      name: 'PBKDF2'
    }, false, ['deriveBits']);
  } catch (e) {
    throw friendlyError('subtleCrypto.importKey failed: ' + e, cryptoFailMsg());
  }

  let keybits;

  try {
    keybits = await subtleCrypto.deriveBits({
      name: 'PBKDF2',
      salt: salt,
      iterations: iterations,
      hash: 'SHA-512'
    }, key, 512);
  } catch (e) {
    throw friendlyError('subtleCrypto.deriveBits failed: ' + e, cryptoFailMsg());
  }

  const now = new Date();
  matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "a"].log("E2e import/export: deriveKeys took " + (now.getTime() - start.getTime()) + "ms");
  const aesKey = keybits.slice(0, 32);
  const hmacKey = keybits.slice(32);
  const aesProm = subtleCrypto.importKey('raw', aesKey, {
    name: 'AES-CTR'
  }, false, ['encrypt', 'decrypt']).catch(e => {
    throw friendlyError('subtleCrypto.importKey failed for AES key: ' + e, cryptoFailMsg());
  });
  const hmacProm = subtleCrypto.importKey('raw', hmacKey, {
    name: 'HMAC',
    hash: {
      name: 'SHA-256'
    }
  }, false, ['sign', 'verify']).catch(e => {
    throw friendlyError('subtleCrypto.importKey failed for HMAC key: ' + e, cryptoFailMsg());
  });
  return await Promise.all([aesProm, hmacProm]);
}

const HEADER_LINE = '-----BEGIN MEGOLM SESSION DATA-----';
const TRAILER_LINE = '-----END MEGOLM SESSION DATA-----';
/**
 * Unbase64 an ascii-armoured megolm key file
 *
 * Strips the header and trailer lines, and unbase64s the content
 *
 * @param {ArrayBuffer} data  input file
 * @return {Uint8Array} unbase64ed content
 */

function unpackMegolmKeyFile(data) {
  // parse the file as a great big String. This should be safe, because there
  // should be no non-ASCII characters, and it means that we can do string
  // comparisons to find the header and footer, and feed it into window.atob.
  const fileStr = new TextDecoder().decode(new Uint8Array(data)); // look for the start line

  let lineStart = 0; // eslint-disable-next-line no-constant-condition

  while (1) {
    const lineEnd = fileStr.indexOf('\n', lineStart);

    if (lineEnd < 0) {
      throw new Error('Header line not found');
    }

    const line = fileStr.slice(lineStart, lineEnd).trim(); // start the next line after the newline

    lineStart = lineEnd + 1;

    if (line === HEADER_LINE) {
      break;
    }
  }

  const dataStart = lineStart; // look for the end line
  // eslint-disable-next-line no-constant-condition

  while (1) {
    const lineEnd = fileStr.indexOf('\n', lineStart);
    const line = fileStr.slice(lineStart, lineEnd < 0 ? undefined : lineEnd).trim();

    if (line === TRAILER_LINE) {
      break;
    }

    if (lineEnd < 0) {
      throw new Error('Trailer line not found');
    } // start the next line after the newline


    lineStart = lineEnd + 1;
  }

  const dataEnd = lineStart;
  return decodeBase64(fileStr.slice(dataStart, dataEnd));
}
/**
 * ascii-armour a  megolm key file
 *
 * base64s the content, and adds header and trailer lines
 *
 * @param {Uint8Array} data  raw data
 * @return {ArrayBuffer} formatted file
 */


function packMegolmKeyFile(data) {
  // we split into lines before base64ing, because encodeBase64 doesn't deal
  // terribly well with large arrays.
  const LINE_LENGTH = 72 * 4 / 3;
  const nLines = Math.ceil(data.length / LINE_LENGTH);
  const lines = new Array(nLines + 3);
  lines[0] = HEADER_LINE;
  let o = 0;
  let i;

  for (i = 1; i <= nLines; i++) {
    lines[i] = encodeBase64(data.subarray(o, o + LINE_LENGTH));
    o += LINE_LENGTH;
  }

  lines[i++] = TRAILER_LINE;
  lines[i] = '';
  return new TextEncoder().encode(lines.join('\n')).buffer;
}
/**
 * Encode a typed array of uint8 as base64.
 * @param {Uint8Array} uint8Array The data to encode.
 * @return {string} The base64.
 */


function encodeBase64(uint8Array) {
  // Misinterpt the Uint8Array as Latin-1.
  // window.btoa expects a unicode string with codepoints in the range 0-255.
  const latin1String = String.fromCharCode.apply(null, uint8Array); // Use the builtin base64 encoder.

  return window.btoa(latin1String);
}
/**
 * Decode a base64 string to a typed array of uint8.
 * @param {string} base64 The base64 to decode.
 * @return {Uint8Array} The decoded data.
 */


function decodeBase64(base64) {
  // window.atob returns a unicode string with codepoints in the range 0-255.
  const latin1String = window.atob(base64); // Encode the string as a Uint8Array

  const uint8Array = new Uint8Array(latin1String.length);

  for (let i = 0; i < latin1String.length; i++) {
    uint8Array[i] = latin1String.charCodeAt(i);
  }

  return uint8Array;
}

/***/ })

}]);
//# sourceMappingURL=28.js.map