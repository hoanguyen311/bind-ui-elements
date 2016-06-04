(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bindUiElements"] = factory();
	else
		root["bindUiElements"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function isNotFalsyAndIsOjbect(obj) {
	    return Boolean(obj) && obj instanceof Object;
	}

	module.exports = function(target) {
	    var uiKey = '';
	    var cfg = target.cfg;

	    if (
	        !isNotFalsyAndIsOjbect(cfg) ||
	        !isNotFalsyAndIsOjbect(cfg.ui) ||
	        !isNotFalsyAndIsOjbect(target.$el)
	    ) {
	        return false;
	    }

	    for (uiKey in cfg.ui) {
	        if (cfg.ui.hasOwnProperty(uiKey)) {
	            target[uiKey] = target.$el.find(cfg.ui[uiKey]);
	        }
	    }

	    return target;
	};


/***/ }
/******/ ])
});
;