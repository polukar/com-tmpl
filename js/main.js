/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/forms/input/input.js":
/*!****************************************************!*\
  !*** ./src/blocks/components/forms/input/input.js ***!
  \****************************************************/
/***/ (function() {

var INPUT_BLOCK = document.querySelectorAll('.input');

if (INPUT_BLOCK) {
  INPUT_BLOCK.forEach(function (elem) {
    var input = elem.querySelector('input');
    var watch = elem.querySelector('.input__watchpassword');
    if (!watch) return;
    watch.addEventListener('click', function () {
      watch.classList.toggle('active');

      if (watch.classList.contains('active')) {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    });
  });
}

/***/ }),

/***/ "./src/blocks/components/forms/select/select.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/forms/select/select.js ***!
  \******************************************************/
/***/ (function() {

var SELECT = document.querySelectorAll('.select');

if (SELECT) {
  SELECT.forEach(function (elem) {
    var selectMain = elem.querySelector('.select__main');
    var selectDrop = elem.querySelector('.select__drop');
    var selectHiddenInput = elem.querySelector('input');
    var selectItems = elem.querySelectorAll('.select__item');

    var ItemsRemoveActive = function ItemsRemoveActive() {
      selectItems.forEach(function (item) {
        item.classList.remove('active');
      });
    };

    selectMain.addEventListener('click', function () {
      selectMain.classList.toggle('active');
    });
    document.addEventListener('click', function (e) {
      if (!e.composedPath().includes(selectMain) && !e.composedPath().includes(selectDrop)) {
        selectMain.classList.remove('active');
      }
    });
    selectItems.forEach(function (activeItem) {
      activeItem.addEventListener('click', function () {
        ItemsRemoveActive();
        var activeItemText = activeItem.innerHTML;
        selectMain.innerHTML = activeItemText;
        selectHiddenInput.value = activeItemText;
        activeItem.classList.add('active');
        selectMain.classList.remove('active');
      });
    });
  });
}

/***/ }),

/***/ "./src/blocks/components/slider/slider.js":
/*!************************************************!*\
  !*** ./src/blocks/components/slider/slider.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  }
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/forms/forms.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/forms/forms.js ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/***/ (function() {

var OPEN_MODALS = document.querySelectorAll('[open-modal]');
var CLOSE_MODALS = document.querySelectorAll('.modal__close');

if (OPEN_MODALS) {
  OPEN_MODALS.forEach(function (elem) {
    elem.addEventListener('click', function () {
      var name = elem.getAttribute('open-modal');
      console.log(name);
      var modal = document.querySelector(".".concat(name));
      modal.classList.add('active');
    });
  });
  CLOSE_MODALS.forEach(function (elem) {
    elem.addEventListener('click', function () {
      var modal = document.querySelectorAll(".modal");
      modal.forEach(function (modalElem) {
        modalElem.classList.remove('active');
      });
    });
  });
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_forms_input_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/forms/input/input */ "./src/blocks/components/forms/input/input.js");
/* harmony import */ var _components_forms_input_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_forms_input_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/forms/select/select */ "./src/blocks/components/forms/select/select.js");
/* harmony import */ var _components_forms_select_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_forms_select_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/slider/slider */ "./src/blocks/components/slider/slider.js");




/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_forms_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/forms/forms */ "./src/blocks/modules/forms/forms.js");
/* harmony import */ var _modules_forms_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_forms_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_modals_modals__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _project_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/scroll */ "./src/js/project/scroll.js");
/* harmony import */ var _project_shedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/shedule */ "./src/js/project/shedule.js");
/* harmony import */ var _project_shedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project_shedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/calendar */ "./src/js/project/calendar.js");
/* harmony import */ var _project_calendar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/calendar-page */ "./src/js/project/calendar-page.js");







/***/ }),

/***/ "./src/js/project/calendar-page.js":
/*!*****************************************!*\
  !*** ./src/js/project/calendar-page.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @event-calendar/core */ "./node_modules/@event-calendar/core/index.js");
/* harmony import */ var _event_calendar_time_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @event-calendar/time-grid */ "./node_modules/@event-calendar/time-grid/index.js");


var WEEK = document.getElementById('week');
var DAY = document.getElementById('day');
var calendarHtml = '<div class="month-list__item month-list__item-full"><div class="month-list__head"><div class="month-list__time ec-event-time">8:00 - 8:45</div><div class="month-list__cabinet">Звонок в ZOO</div></div><div class="month-list__description">Название команды, длинное название события очень длинное назваиние длинное назваиние</div><div class="participants"><div class="participant participant--orange">IR</div><div class="participant participant--blue">ON</div><div class="participant participant--purple">MA</div><div class="participant participant--yellow">N</div><div class="participant participant--green">GO</div></div></div>';

if (WEEK) {
  var ecWeek = new _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__["default"]({
    target: WEEK,
    props: {
      plugins: [_event_calendar_time_grid__WEBPACK_IMPORTED_MODULE_1__["default"]],
      options: {
        view: 'timeGridWeek',
        events: [{
          "title": "".concat(calendarHtml),
          "start": "2022-04-15 1:00",
          "end": "2022-04-15 5:00"
        }],
        eventColor: '#222222',
        eventTextColor: "#222222",
        eventBackgroundColor: "#fff"
      }
    }
  });
}

if (DAY) {
  var ecDay = new _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__["default"]({
    target: DAY,
    props: {
      plugins: [_event_calendar_time_grid__WEBPACK_IMPORTED_MODULE_1__["default"]],
      options: {
        view: 'timeGridDay',
        events: [{
          "title": "".concat(calendarHtml),
          "start": "2022-04-15 1:00",
          "end": "2022-04-15 5:00"
        }],
        eventColor: '#222222',
        eventTextColor: "#222222",
        eventBackgroundColor: "#fff"
      }
    }
  });
}

/***/ }),

/***/ "./src/js/project/calendar.js":
/*!************************************!*\
  !*** ./src/js/project/calendar.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");

var CALENDAR_STATIC = document.querySelectorAll('.calendar-static');

if (CALENDAR_STATIC) {
  CALENDAR_STATIC.forEach(function (elem) {
    new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](elem);
  });
}

/***/ }),

/***/ "./src/js/project/scroll.js":
/*!**********************************!*\
  !*** ./src/js/project/scroll.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");

Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (elem) {
  return new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](elem);
});

/***/ }),

/***/ "./src/js/project/shedule.js":
/*!***********************************!*\
  !*** ./src/js/project/shedule.js ***!
  \***********************************/
/***/ (function() {

var SHEDULES__CONTAINER = document.querySelectorAll('.shedule__list');
var SHEDULES = document.querySelectorAll('.shedule__item');

if (SHEDULES) {
  SHEDULES.forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.classList.toggle('active');
    });
  });
  SHEDULES__CONTAINER.forEach(function (elem) {
    var shedulesItem = elem.querySelector('.shedule__from-to');
    shedulesItem.addEventListener('click', function () {
      if (window.innerWidth < 980) {
        shedulesItem.classList.toggle('active');
      }
    });
  });
}

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprod"] = self["webpackChunkprod"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map