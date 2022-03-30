/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./matrix-react-sdk/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./matrix-react-sdk/src/audio/consts.ts
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

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
const WORKLET_NAME = "mx-voice-worklet";
let PayloadEvent;

(function (PayloadEvent) {
  PayloadEvent["Timekeep"] = "timekeep";
  PayloadEvent["AmplitudeMark"] = "amplitude_mark";
})(PayloadEvent || (PayloadEvent = {}));
// CONCATENATED MODULE: ./matrix-react-sdk/src/utils/numbers.ts
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

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

/**
 * Returns the default number if the given value, i, is not a number. Otherwise
 * returns the given value.
 * @param {*} i The value to check.
 * @param {number} def The default value.
 * @returns {number} Either the value or the default value, whichever is a number.
 */
function defaultNumber(i, def) {
  return Number.isFinite(i) ? Number(i) : def;
}
function clamp(i, min, max) {
  return Math.min(Math.max(i, min), max);
}
function sum() {
  for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
    i[_key] = arguments[_key];
  }

  return [...i].reduce((p, c) => c + p, 0);
}
function percentageWithin(pct, min, max) {
  return pct * (max - min) + min;
}
function percentageOf(val, min, max) {
  return (val - min) / (max - min);
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./matrix-react-sdk/src/audio/RecorderWorklet.ts


/*
Copyright 2021 The Matrix.org Foundation C.I.C.

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

 // from AudioWorkletGlobalScope: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope

// declare const currentFrame: number;
// declare const sampleRate: number;
// We rate limit here to avoid overloading downstream consumers with amplitude information.
// The two major consumers are the voice message waveform thumbnail (resampled down to an
// appropriate length) and the live waveform shown to the user. Effectively, this controls
// the refresh rate of that live waveform and the number of samples the thumbnail has to
// work with.
const TARGET_AMPLITUDE_FREQUENCY = 16; // Hz

function roundTimeToTargetFreq(seconds) {
  // Epsilon helps avoid floating point rounding issues (1 + 1 = 1.999999, etc)
  return Math.round((seconds + Number.EPSILON) * TARGET_AMPLITUDE_FREQUENCY) / TARGET_AMPLITUDE_FREQUENCY;
}

function nextTimeForTargetFreq(roundedSeconds) {
  // The extra round is just to make sure we cut off any floating point issues
  return roundTimeToTargetFreq(roundedSeconds + 1 / TARGET_AMPLITUDE_FREQUENCY);
}

class RecorderWorklet_MxVoiceWorklet extends AudioWorkletProcessor {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "nextAmplitudeSecond", 0);

    defineProperty_default()(this, "amplitudeIndex", 0);
  }

  process(inputs, outputs, parameters) {
    const currentSecond = roundTimeToTargetFreq(currentTime); // We special case the first ping because there's a fairly good chance that we'll miss the zeroth
    // update. Firefox for instance takes 0.06 seconds (roughly) to call this function for the first
    // time. Edge and Chrome occasionally lag behind too, but for the most part are on time.
    //
    // When this doesn't work properly we end up producing a waveform of nulls and no live preview
    // of the recorded message.

    if (currentSecond === this.nextAmplitudeSecond || this.nextAmplitudeSecond === 0) {
      // We're expecting exactly one mono input source, so just grab the very first frame of
      // samples for the analysis.
      const monoChan = inputs[0][0]; // The amplitude of the frame's samples is effectively the loudness of the frame. This
      // translates into a bar which can be rendered as part of the whole recording clip's
      // waveform.
      //
      // We translate the amplitude down to 0-1 for sanity's sake.

      const minVal = Math.min(...monoChan);
      const maxVal = Math.max(...monoChan);
      const amplitude = percentageOf(maxVal, -1, 1) - percentageOf(minVal, -1, 1);
      this.port.postMessage({
        ev: PayloadEvent.AmplitudeMark,
        amplitude: amplitude,
        forIndex: this.amplitudeIndex++
      });
      this.nextAmplitudeSecond = nextTimeForTargetFreq(currentSecond);
    } // We mostly use this worklet to fire regular clock updates through to components


    this.port.postMessage({
      ev: PayloadEvent.Timekeep,
      timeSeconds: currentTime
    }); // We're supposed to return false when we're "done" with the audio clip, but seeing as
    // we are acting as a passive processor we are never truly "done". The browser will clean
    // us up when it is done with us.

    return true;
  }

}

registerProcessor(WORKLET_NAME, RecorderWorklet_MxVoiceWorklet);
/* harmony default export */ var RecorderWorklet = __webpack_exports__["default"] = (null); // to appease module loaders (we never use the export)

/***/ })
/******/ ]);
//# sourceMappingURL=recorder-worklet.297c81c.js.map