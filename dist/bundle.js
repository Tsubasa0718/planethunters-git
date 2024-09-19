/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/***/ (() => {



var audio = document.getElementById('js-audio');
var isPlaying = false; // 定数から変数に変更
audio.volume = 0.5; // Volumeを設定

var AudioPlaying = document.getElementById('js-audio-play');
var Switch = document.querySelector('.audio__switch');
var SwitchText = document.querySelector('.audio__switch--text');
AudioPlaying.addEventListener('click', function () {
  if (isPlaying) {
    audio.pause(); // タイポ修正
    Switch.classList.remove('on');
    SwitchText.innerHTML = 'SOUND OFF';
    isPlaying = false; // 状態を更新
  } else {
    audio.play();
    Switch.classList.add('on');
    SwitchText.innerHTML = 'SOUND ON';
    isPlaying = true; // 状態を更新
  }
});

// 音声ON関数
var OnPlaying = function OnPlaying() {
  isPlaying = true;
  audio.play();
};

// 音声OFF関数
var OffPause = function OffPause() {
  isPlaying = false;
  audio.pause();
};

/***/ }),

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/***/ (() => {



var Load = document.getElementById('js-loading');
var mvElement = document.querySelectorAll('.p-mv');
var windowHeight = window.innerHeight;
window.addEventListener('load', function () {
  mvElement.forEach(function (element) {
    element.style.height = windowHeight + "px";
  });
  var hideElement = function hideElement() {
    Load.style.display = "none";
  };
  setTimeout(function () {
    Load.style.transition = "opacity 2s";
    Load.style.opacity = 0;
    setTimeout(hideElement, 2000); // アニメーションの時間と一致させる
  }, 1000);
});

/***/ }),

/***/ "./src/js/sns.js":
/*!***********************!*\
  !*** ./src/js/sns.js ***!
  \***********************/
/***/ (() => {



// facebook
document.addEventListener('DOMContentLoaded', function () {
  var fbButton = document.createElement('div');
  fbButton.className = 'fb-like';
  fbButton.setAttribute('data-href', 'https://yourwebsite.com');
  fbButton.setAttribute('data-width', '');
  fbButton.setAttribute('data-layout', 'standard');
  fbButton.setAttribute('data-action', 'like');
  fbButton.setAttribute('data-size', 'small');
  fbButton.setAttribute('data-share', 'true');
  document.getElementById('facebook-like').appendChild(fbButton);
});

// x
document.addEventListener('DOMContentLoaded', function () {
  var twitterButton = document.createElement('a');
  twitterButton.href = 'https://twitter.com/share';
  twitterButton.className = 'twitter-share-button';
  twitterButton.setAttribute('data-url', 'https://yourwebsite.com');
  twitterButton.setAttribute('data-text', 'Check this out!');
  twitterButton.setAttribute('data-via', 'yourtwitterhandle');
  twitterButton.setAttribute('data-hashtags', 'example,hashtag');
  document.getElementById('x-like').appendChild(twitterButton);
});

// LINE
document.addEventListener('DOMContentLoaded', function () {
  var lineButton = document.createElement('a');
  lineButton.href = 'https://social-plugins.line.me/lineit/share?url=https://yourwebsite.com';
  lineButton.className = 'line-it-button';
  lineButton.setAttribute('data-lang', 'en');
  lineButton.setAttribute('data-type', 'share-a');
  lineButton.setAttribute('data-ver', '3');
  lineButton.setAttribute('data-url', 'https://yourwebsite.com');
  lineButton.setAttribute('data-color', 'default');
  lineButton.setAttribute('data-size', 'small');
  lineButton.setAttribute('data-count', 'false');
  document.getElementById('line-like').appendChild(lineButton);
});

/***/ }),

/***/ "./src/audio/sample-audio.mp3":
/*!************************************!*\
  !*** ./src/audio/sample-audio.mp3 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/sample-audio.a9dbe2bbac4b1ca2c2c1810eeb30bf0c.mp3");

/***/ }),

/***/ "./src/video/bg_movie.mp4":
/*!********************************!*\
  !*** ./src/video/bg_movie.mp4 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "video/bg_movie.bfa843f236a24453df9839928baeb5bd.mp4");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _audio_sample_audio_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/sample-audio.mp3 */ "./src/audio/sample-audio.mp3");
/* harmony import */ var _video_bg_movie_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video/bg_movie.mp4 */ "./src/video/bg_movie.mp4");
/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.js */ "./src/js/loading.js");
/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loading_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio.js */ "./src/js/audio.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_audio_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sns_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sns.js */ "./src/js/sns.js");
/* harmony import */ var _sns_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sns_js__WEBPACK_IMPORTED_MODULE_5__);
// css

// audio

// video

// js



/******/ })()
;
//# sourceMappingURL=bundle.js.map