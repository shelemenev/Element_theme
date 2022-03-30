(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateKeyBackupDialog; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(432);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var _SecurityManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(194);
/* harmony import */ var _components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(155);
/* harmony import */ var _components_views_auth_PassphraseField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(303);
/* harmony import */ var _components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97);
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99);
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(108);


/*
Copyright 2018, 2019 New Vector Ltd
Copyright 2019, 2020 The Matrix.org Foundation C.I.C.

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












var Phase;

(function (Phase) {
  Phase["Passphrase"] = "passphrase";
  Phase["PassphraseConfirm"] = "passphrase_confirm";
  Phase["ShowKey"] = "show_key";
  Phase["KeepItSafe"] = "keep_it_safe";
  Phase["BackingUp"] = "backing_up";
  Phase["Done"] = "done";
  Phase["OptOutConfirm"] = "opt_out_confirm";
})(Phase || (Phase = {}));

const PASSWORD_MIN_SCORE = 4; // So secure, many characters, much complex, wow, etc, etc.

/*
 * Walks the user through the process of creating an e2e key backup
 * on the server.
 */
class CreateKeyBackupDialog extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "keyBackupInfo", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "recoveryKeyNode", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "passphraseField", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onCopyClick", () => {
      const successful = Object(_utils_strings__WEBPACK_IMPORTED_MODULE_8__[/* copyNode */ "b"])(this.recoveryKeyNode.current);

      if (successful) {
        this.setState({
          copied: true,
          phase: Phase.KeepItSafe
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onDownloadClick", () => {
      const blob = new Blob([this.keyBackupInfo.recovery_key], {
        type: 'text/plain;charset=us-ascii'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_2___default.a.saveAs(blob, 'security-key.txt');
      this.setState({
        downloaded: true,
        phase: Phase.KeepItSafe
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "createBackup", async () => {
      const {
        secureSecretStorage
      } = this.state;
      this.setState({
        phase: Phase.BackingUp,
        error: null
      });
      let info;

      try {
        if (secureSecretStorage) {
          await Object(_SecurityManager__WEBPACK_IMPORTED_MODULE_6__[/* accessSecretStorage */ "b"])(async () => {
            info = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().prepareKeyBackupVersion(null
            /* random key */
            , {
              secureSecretStorage: true
            });
            info = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().createKeyBackupVersion(info);
          });
        } else {
          info = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().createKeyBackupVersion(this.keyBackupInfo);
        }

        await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().scheduleAllGroupSessionsForBackup();
        this.setState({
          phase: Phase.Done
        });
      } catch (e) {
        matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "a"].error("Error creating key backup", e); // TODO: If creating a version succeeds, but backup fails, should we
        // delete the version, disable backup, or do nothing?  If we just
        // disable without deleting, we'll enable on next app reload since
        // it is trusted.

        if (info) {
          _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().deleteKeyBackupVersion(info.version);
        }

        this.setState({
          error: e
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onCancel", () => {
      this.props.onFinished(false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onDone", () => {
      this.props.onFinished(true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onSetUpClick", () => {
      this.setState({
        phase: Phase.Passphrase
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onSkipPassPhraseClick", async () => {
      this.keyBackupInfo = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().prepareKeyBackupVersion();
      this.setState({
        copied: false,
        downloaded: false,
        phase: Phase.ShowKey
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onPassPhraseNextClick", async e => {
      e.preventDefault();
      if (!this.passphraseField.current) return; // unmounting

      await this.passphraseField.current.validate({
        allowEmpty: false
      });

      if (!this.passphraseField.current.state.valid) {
        this.passphraseField.current.focus();
        this.passphraseField.current.validate({
          allowEmpty: false,
          focused: true
        });
        return;
      }

      this.setState({
        phase: Phase.PassphraseConfirm
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onPassPhraseConfirmNextClick", async e => {
      e.preventDefault();
      if (this.state.passPhrase !== this.state.passPhraseConfirm) return;
      this.keyBackupInfo = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get().prepareKeyBackupVersion(this.state.passPhrase);
      this.setState({
        copied: false,
        downloaded: false,
        phase: Phase.ShowKey
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onSetAgainClick", () => {
      this.setState({
        passPhrase: '',
        passPhraseValid: false,
        passPhraseConfirm: '',
        phase: Phase.Passphrase
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onKeepItSafeBackClick", () => {
      this.setState({
        phase: Phase.ShowKey
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onPassPhraseValidate", result => {
      this.setState({
        passPhraseValid: result.valid
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onPassPhraseChange", e => {
      this.setState({
        passPhrase: e.target.value
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "onPassPhraseConfirmChange", e => {
      this.setState({
        passPhraseConfirm: e.target.value
      });
    });

    this.state = {
      secureSecretStorage: null,
      phase: Phase.Passphrase,
      passPhrase: '',
      passPhraseValid: false,
      passPhraseConfirm: '',
      copied: false,
      downloaded: false
    };
  }

  async componentDidMount() {
    const cli = _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_4__[/* MatrixClientPeg */ "a"].get();
    const secureSecretStorage = await cli.doesServerSupportUnstableFeature("org.matrix.e2e_cross_signing");
    this.setState({
      secureSecretStorage
    }); // If we're using secret storage, skip ahead to the backing up step, as
    // `accessSecretStorage` will handle passphrases as needed.

    if (secureSecretStorage) {
      this.setState({
        phase: Phase.BackingUp
      });
      this.createBackup();
    }
  }

  renderPhasePassPhrase() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onPassPhraseNextClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("<b>Warning</b>: You should only set up key backup from a trusted computer.", {}, {
      b: sub => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, sub)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("We'll store an encrypted copy of your keys on our server. " + "Secure your backup with a Security Phrase.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("For maximum security, this should be different from your account password.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_primaryContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_passPhraseContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_auth_PassphraseField__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      className: "mx_CreateKeyBackupDialog_passPhraseInput",
      onChange: this.onPassPhraseChange,
      minScore: PASSWORD_MIN_SCORE,
      value: this.state.passPhrase,
      onValidate: this.onPassPhraseValidate,
      fieldRef: this.passphraseField,
      autoFocus: true,
      label: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _td */ "c"])("Enter a Security Phrase"),
      labelEnterPassword: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _td */ "c"])("Enter a Security Phrase"),
      labelStrongPassword: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _td */ "c"])("Great! This Security Phrase looks strong enough."),
      labelAllowedButUnsafe: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _td */ "c"])("Great! This Security Phrase looks strong enough.")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Next'),
      onPrimaryButtonClick: this.onPassPhraseNextClick,
      hasCancel: false,
      disabled: !this.state.passPhraseValid
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Advanced")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      kind: "primary",
      onClick: this.onSkipPassPhraseClick
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Set up with a Security Key"))));
  }

  renderPhasePassPhraseConfirm() {
    let matchText;
    let changeText;

    if (this.state.passPhraseConfirm === this.state.passPhrase) {
      matchText = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("That matches!");
      changeText = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Use a different passphrase?");
    } else if (!this.state.passPhrase.startsWith(this.state.passPhraseConfirm)) {
      // only tell them they're wrong if they've actually gone wrong.
      // Security concious readers will note that if you left element-web unattended
      // on this screen, this would make it easy for a malicious person to guess
      // your passphrase one letter at a time, but they could get this faster by
      // just opening the browser's developer tools and reading it.
      // Note that not having typed anything at all will not hit this clause and
      // fall through so empty box === no hint.
      matchText = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("That doesn't match.");
      changeText = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Go back to set it again.");
    }

    let passPhraseMatch = null;

    if (matchText) {
      passPhraseMatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mx_CreateKeyBackupDialog_passPhraseMatch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, matchText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        element: "span",
        className: "mx_linkButton",
        onClick: this.onSetAgainClick
      }, changeText)));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onPassPhraseConfirmNextClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Enter your Security Phrase a second time to confirm it.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_primaryContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_passPhraseContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "password",
      onChange: this.onPassPhraseConfirmChange,
      value: this.state.passPhraseConfirm,
      className: "mx_CreateKeyBackupDialog_passPhraseInput",
      placeholder: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Repeat your Security Phrase..."),
      autoFocus: true
    })), passPhraseMatch)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Next'),
      onPrimaryButtonClick: this.onPassPhraseConfirmNextClick,
      hasCancel: false,
      disabled: this.state.passPhrase !== this.state.passPhraseConfirm
    }));
  }

  renderPhaseShowKey() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Your Security Key is a safety net - you can use it to restore " + "access to your encrypted messages if you forget your Security Phrase.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Keep a copy of it somewhere secure, like a password manager or even a safe.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_primaryContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_recoveryKeyHeader"
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Your Security Key")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_recoveryKeyContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_recoveryKey"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", {
      ref: this.recoveryKeyNode
    }, this.keyBackupInfo.recovery_key)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mx_CreateKeyBackupDialog_recoveryKeyButtons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "mx_Dialog_primary",
      onClick: this.onCopyClick
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Copy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "mx_Dialog_primary",
      onClick: this.onDownloadClick
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Download"))))));
  }

  renderPhaseKeepItSafe() {
    let introText;

    if (this.state.copied) {
      introText = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Your Security Key has been <b>copied to your clipboard</b>, paste it to:", {}, {
        b: s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, s)
      });
    } else if (this.state.downloaded) {
      introText = Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Your Security Key is in your <b>Downloads</b> folder.", {}, {
        b: s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, s)
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, introText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("<b>Print it</b> and store it somewhere safe", {}, {
      b: s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, s)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("<b>Save it</b> on a USB key or backup drive", {}, {
      b: s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, s)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("<b>Copy it</b> to your personal cloud storage", {}, {
      b: s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, s)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Continue"),
      onPrimaryButtonClick: this.createBackup,
      hasCancel: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.onKeepItSafeBackClick
    }, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Back"))));
  }

  renderBusyPhase() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null));
  }

  renderPhaseDone() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Your keys are being backed up (the first backup could take a few minutes).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('OK'),
      onPrimaryButtonClick: this.onDone,
      hasCancel: false
    }));
  }

  renderPhaseOptOutConfirm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Without setting up Secure Message Recovery, you won't be able to restore your " + "encrypted message history if you log out or use another session."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Set up Secure Message Recovery'),
      onPrimaryButtonClick: this.onSetUpClick,
      hasCancel: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.onCancel
    }, "I understand, continue without")));
  }

  titleForPhase(phase) {
    switch (phase) {
      case Phase.Passphrase:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Secure your backup with a Security Phrase');

      case Phase.PassphraseConfirm:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Confirm your Security Phrase');

      case Phase.OptOutConfirm:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Warning!');

      case Phase.ShowKey:
      case Phase.KeepItSafe:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Make a copy of your Security Key');

      case Phase.BackingUp:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Starting backup...');

      case Phase.Done:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Success!');

      default:
        return Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Create key backup");
    }
  }

  render() {
    let content;

    if (this.state.error) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])("Unable to create key backup")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mx_Dialog_buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        primaryButton: Object(_languageHandler__WEBPACK_IMPORTED_MODULE_5__[/* _t */ "a"])('Retry'),
        onPrimaryButtonClick: this.createBackup,
        hasCancel: true,
        onCancel: this.onCancel
      })));
    } else {
      switch (this.state.phase) {
        case Phase.Passphrase:
          content = this.renderPhasePassPhrase();
          break;

        case Phase.PassphraseConfirm:
          content = this.renderPhasePassPhraseConfirm();
          break;

        case Phase.ShowKey:
          content = this.renderPhaseShowKey();
          break;

        case Phase.KeepItSafe:
          content = this.renderPhaseKeepItSafe();
          break;

        case Phase.BackingUp:
          content = this.renderBusyPhase();
          break;

        case Phase.Done:
          content = this.renderPhaseDone();
          break;

        case Phase.OptOutConfirm:
          content = this.renderPhaseOptOutConfirm();
          break;
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      className: "mx_CreateKeyBackupDialog",
      onFinished: this.props.onFinished,
      title: this.titleForPhase(this.state.phase),
      hasCancel: [Phase.Passphrase, Phase.Done].includes(this.state.phase)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, content));
  }

}

/***/ })

}]);
//# sourceMappingURL=6.js.map