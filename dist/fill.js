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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var _dataInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataInput */ \"./src/app/dataInput.js\");\n/* harmony import */ var _service_contentService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contentService */ \"./src/service/contentService.js\");\n\r\n\r\n\r\nconst isWorkers = data.workers !== undefined || !!data.workers.length;\r\nconst numberWorkers = isWorkers ? data.workers.length : 0;\r\nlet btnOpenModal = null;\r\nlet btnAddWorker = null;\r\nlet btnCancelWorker = null;\r\nlet currentContainerModal = null;\r\nlet isOpenModal = false;\r\nlet currentStep = 0;\r\n\r\n\r\nconst addWorker = () => {\r\n    if(!btnOpenModal){\r\n        btnOpenModal = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_1__[\"getBtnAdd\"])(document);\r\n    }\r\n    btnOpenModal.click();\r\n    isOpenModal = true;\r\n\r\n    currentContainerModal = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_1__[\"containerModal\"])();\r\n    let checkOpenModalTimer = setInterval(() => {\r\n        let modalContent = currentContainerModal.querySelector('.MuiDialogContent-root');\r\n        if (!!modalContent){\r\n            clearInterval(checkOpenModalTimer);\r\n            addField(modalContent, data.workers[currentStep - 1]);\r\n        }\r\n    }, 100);\r\n}\r\n\r\n\r\nconst addField = (selector, data) => {\r\n    currentStep++;\r\n    const containers = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_1__[\"getContainers\"])(selector);\r\n\r\n    containers.forEach((container) => {\r\n        Object(_dataInput__WEBPACK_IMPORTED_MODULE_0__[\"dataInput\"])(container, data, selector);\r\n    });\r\n\r\n    if (isOpenModal) {\r\n        btnAddWorker = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_1__[\"getBtnAdd\"])(currentContainerModal);\r\n        btnCancelWorker = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_1__[\"getBtnCancel\"])(currentContainerModal);\r\n        btnAddWorker.addEventListener('click', checkAddModal, false);\r\n        btnCancelWorker.addEventListener('click', checkCancelModal, false);\r\n        btnAddWorker.click();\r\n    } else {\r\n        app();\r\n    }\r\n}\r\n\r\nconst checkAddModal = () => {\r\n    setTimeout(()=>{\r\n        isOpenModal = false;\r\n        let isEmptyInput = currentContainerModal.querySelectorAll('.Mui-error');\r\n        if(!isEmptyInput.length){\r\n            let checkClosedModalTimer = setInterval(() => {\r\n                let currentContainerModal = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_1__[\"containerModal\"])();\r\n                if (!currentContainerModal){\r\n                    btnAddWorker.removeEventListener('click', checkAddModal);\r\n                    clearInterval(checkClosedModalTimer);\r\n                    app();\r\n                }\r\n            }, 100);\r\n        }\r\n    },40);\r\n}\r\n\r\nconst checkCancelModal = () => {\r\n    setTimeout(()=>{\r\n        isOpenModal = false;\r\n        btnCancelWorker.removeEventListener('click', checkCancelModal);\r\n        app();\r\n    },40)\r\n}\r\n\r\n\r\nconst app = () => {\r\n    if (currentStep === 0) {\r\n        return addField(document, data);\r\n    }\r\n    if (isWorkers && currentStep > 0 && currentStep <= numberWorkers) {\r\n        return addWorker()\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/dataInput.js":
/*!******************************!*\
  !*** ./src/app/dataInput.js ***!
  \******************************/
/*! exports provided: dataInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataInput\", function() { return dataInput; });\n/* harmony import */ var _setTextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTextInput */ \"./src/app/setTextInput.js\");\n/* harmony import */ var _setRadioInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRadioInput */ \"./src/app/setRadioInput.js\");\n/* harmony import */ var _setSelectInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setSelectInput */ \"./src/app/setSelectInput.js\");\n/* harmony import */ var _service_contentService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/contentService */ \"./src/service/contentService.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst dataInput = (container, data, selector) => {\r\n    const inputs = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_3__[\"getCurrentInput\"])(container);\r\n    const label = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_3__[\"getCurrentLabel\"])(container);\r\n    const select = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_3__[\"getCurrentSelect\"])(container);\r\n\r\n    if (!inputs || !label) {\r\n        return false;\r\n    }\r\n\r\n    const checkWorkField = () => {\r\n        setTimeout(()=>{\r\n            const currentContainer = Object(_service_contentService__WEBPACK_IMPORTED_MODULE_3__[\"getWorkField\"])(selector);\r\n            if (currentContainer){\r\n                dataInput(currentContainer, data);\r\n            }\r\n        },40);\r\n    }\r\n\r\n    if (label === 'dob') {\r\n        inputs[0].addEventListener('blur', checkWorkField);\r\n    }\r\n\r\n    if (inputs.length > 1) {\r\n        return Object(_setRadioInput__WEBPACK_IMPORTED_MODULE_1__[\"setRadioInput\"])(container, label, data);\r\n    } else if (inputs.length === 1 && !!select) {\r\n        return Object(_setSelectInput__WEBPACK_IMPORTED_MODULE_2__[\"setSelectInput\"])(container, label, data);\r\n    } else if (inputs.length === 1) {\r\n        return Object(_setTextInput__WEBPACK_IMPORTED_MODULE_0__[\"setTextInput\"])(inputs[0], label, data);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app/dataInput.js?");

/***/ }),

/***/ "./src/app/setRadioInput.js":
/*!**********************************!*\
  !*** ./src/app/setRadioInput.js ***!
  \**********************************/
/*! exports provided: setRadioInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRadioInput\", function() { return setRadioInput; });\nconst setRadioInput = (container, label, data) => {\r\n    if (data[label] === \"undefined\" || !data[label]) {\r\n        return false;\r\n    }\r\n\r\n    const labels = container.querySelectorAll('label');\r\n    labels.forEach((elem) => {\r\n        const labelText = elem.innerText.toLowerCase();\r\n        const labelInput = elem.querySelector('input');\r\n        if( labelText === data[label] ){\r\n            labelInput.click();\r\n        }\r\n    })\r\n\r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app/setRadioInput.js?");

/***/ }),

/***/ "./src/app/setSelectInput.js":
/*!***********************************!*\
  !*** ./src/app/setSelectInput.js ***!
  \***********************************/
/*! exports provided: setSelectInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSelectInput\", function() { return setSelectInput; });\nconst setSelectInput = (container, label, data) => {\r\n    if (data[label] === \"undefined\" || !data[label]) {\r\n        return false;\r\n    }\r\n\r\n    // Say the truth, here should be function of Select field filling,\r\n    // but it's a real magic.\r\n    // So, please put info manually.\r\n\r\n\r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app/setSelectInput.js?");

/***/ }),

/***/ "./src/app/setTextInput.js":
/*!*********************************!*\
  !*** ./src/app/setTextInput.js ***!
  \*********************************/
/*! exports provided: setTextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTextInput\", function() { return setTextInput; });\n/* harmony import */ var _service_valueService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/valueService */ \"./src/service/valueService.js\");\n/* harmony import */ var _service_validInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/validInput */ \"./src/service/validInput.js\");\n\r\n\r\n\r\nconst setTextInput = (input, label, data) => {\r\n    let currentValue = '';\r\n    if (data[label] === \"undefined\" || !data[label] || !Object(_service_validInput__WEBPACK_IMPORTED_MODULE_1__[\"checkEmptyInput\"])(input)) {\r\n        return false;\r\n    }\r\n    if (input.hasAttribute('maxlength')) {\r\n        currentValue = Object(_service_valueService__WEBPACK_IMPORTED_MODULE_0__[\"valueService\"])(label, data, input.getAttribute('maxlength'));\r\n    } else {\r\n        currentValue = Object(_service_valueService__WEBPACK_IMPORTED_MODULE_0__[\"valueService\"])(label, data);\r\n    }\r\n\r\n    const valueSetter = Object.getOwnPropertyDescriptor(input, 'value').set;\r\n    const prototype = Object.getPrototypeOf(input);\r\n    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;\r\n\r\n    input.focus();\r\n    if (valueSetter && valueSetter !== prototypeValueSetter) {\r\n        prototypeValueSetter.call(input, currentValue);\r\n    } else {\r\n        valueSetter.call(input, currentValue);\r\n    }\r\n    input.dispatchEvent(new Event('input', { bubbles: true }));\r\n    input.blur();\r\n\r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app/setTextInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"load\", function(event) {\r\n    console.log(data);\r\n\r\n    const fillBtn = document.getElementById('btnFill');\r\n    const listener = () => {\r\n        fillBtn.removeEventListener('click', listener, true);\r\n        Object(_app_app__WEBPACK_IMPORTED_MODULE_0__[\"app\"])();\r\n    }\r\n    fillBtn.addEventListener('click', listener, true);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service/contentService.js":
/*!***************************************!*\
  !*** ./src/service/contentService.js ***!
  \***************************************/
/*! exports provided: getContainers, getCurrentLabel, getCurrentInput, getCurrentSelect, getBtnAdd, getBtnCancel, containerModal, getWorkField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainers\", function() { return getContainers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentLabel\", function() { return getCurrentLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentInput\", function() { return getCurrentInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentSelect\", function() { return getCurrentSelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBtnAdd\", function() { return getBtnAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBtnCancel\", function() { return getBtnCancel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containerModal\", function() { return containerModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWorkField\", function() { return getWorkField; });\n/* harmony import */ var _labelService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelService */ \"./src/service/labelService.js\");\n\r\n\r\n// get containers with fields\r\nconst getContainers = (selector) => {\r\n    return selector.querySelectorAll('.MuiFormControl-root');\r\n}\r\n\r\n// get label inside container\r\nconst getCurrentLabel = (container) => {\r\n    const newLabel = container.querySelector('.MuiFormLabel-root').innerText.toLowerCase();\r\n    if (!newLabel) {\r\n        return false;\r\n    }\r\n\r\n    return Object(_labelService__WEBPACK_IMPORTED_MODULE_0__[\"labelService\"])(newLabel);\r\n}\r\n\r\n// get input inside container\r\nconst getCurrentInput = (container) => {\r\n    const newInputs = container.querySelectorAll('input');\r\n\r\n    if (!newInputs) {\r\n        return false;\r\n    }\r\n\r\n    return newInputs;\r\n}\r\n\r\n// get select inside container\r\nconst getCurrentSelect = (container) => {\r\n    const newSelect = container.querySelector('.MuiSelect-select');\r\n\r\n    if (!newSelect) {\r\n        return false;\r\n    }\r\n\r\n    return newSelect;\r\n}\r\n\r\n// get button with text add\r\nconst getBtnAdd = (selector) => {\r\n    const btnArray = selector.querySelectorAll('button.MuiButton-root');\r\n    let currentBtn = null;\r\n    btnArray.forEach((btn) => {\r\n        if(btn.innerText.toLowerCase() === 'add'){\r\n            currentBtn = btn;\r\n        }\r\n    });\r\n    return currentBtn;\r\n}\r\n\r\n// get button with text cancel\r\nconst getBtnCancel = (selector) => {\r\n    const btnArray = selector.querySelectorAll('button.MuiButton-root');\r\n    let currentBtn = null;\r\n    btnArray.forEach((btn) => {\r\n        if(btn.innerText.toLowerCase() === 'cancel'){\r\n            currentBtn = btn;\r\n        }\r\n    });\r\n    return currentBtn;\r\n}\r\n\r\n// check open modal\r\nconst containerModal = () => {\r\n    return document.querySelector('.MuiDialog-root');\r\n}\r\n\r\n// get work field\r\nconst getWorkField = (selector) => {\r\n    const containers = getContainers(selector);\r\n    let currentContainer = null;\r\n    containers.forEach((container) => {\r\n        const label = getCurrentLabel(container);\r\n        if(label === 'experience'){\r\n            currentContainer = container;\r\n        }\r\n    });\r\n    return currentContainer;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/service/contentService.js?");

/***/ }),

/***/ "./src/service/labelService.js":
/*!*************************************!*\
  !*** ./src/service/labelService.js ***!
  \*************************************/
/*! exports provided: labelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"labelService\", function() { return labelService; });\nclass LabelService {\r\n    constructor(str) {\r\n        this.str = str;\r\n    }\r\n\r\n    // change the label for convenience\r\n    changeLabel() {\r\n        const labelArray = this.str.split(' ');\r\n        const newLabelArray = labelArray.map((item, index) => {\r\n            if ( index === 0 ) {\r\n                return item.charAt(0).toLowerCase() + item.slice(1);\r\n            }\r\n            return item.charAt(0).toUpperCase() + item.slice(1);\r\n        });\r\n        this.str = newLabelArray.join('');\r\n\r\n        return this;\r\n    }\r\n\r\n    // check the label for compliance\r\n    checkLabel() {\r\n        switch (this.str) {\r\n            case \"primaryPhone\":\r\n                this.str =  'firstPhone';\r\n                break;\r\n            case \"businessDescription\":\r\n                this.str =  'desc';\r\n                break;\r\n            case \"jobPosition\":\r\n                this.str =  'job';\r\n                break;\r\n            case \"birthday\":\r\n                this.str =  'dob';\r\n                break;\r\n            case \"workExperience(years)\":\r\n                this.str =  'experience';\r\n                break;\r\n        }\r\n\r\n        return this;\r\n    }\r\n\r\n    // return string\r\n    stringLabel() {\r\n        return this.str;\r\n    }\r\n}\r\n\r\nconst labelService = (str) => {\r\n    const newLabel = new LabelService(str);\r\n    return  newLabel.changeLabel().checkLabel().stringLabel();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/service/labelService.js?");

/***/ }),

/***/ "./src/service/validInput.js":
/*!***********************************!*\
  !*** ./src/service/validInput.js ***!
  \***********************************/
/*! exports provided: checkEmptyInput, formatDate, isNumber, isEmail, sliceValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkEmptyInput\", function() { return checkEmptyInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return isEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliceValue\", function() { return sliceValue; });\n// checking a field for text\r\nconst checkEmptyInput = (input) => {\r\n    const regEmpty = /^\\s+|\\s+$/g;\r\n\r\n    if ( input.value.replace(regEmpty, '') ) {\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\n// converting date to another format\r\nconst formatDate = (value) => {\r\n    if (!value) {\r\n        return null;\r\n    }\r\n\r\n    const birthday = new Date(value);\r\n    const day = birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate();\r\n    const month = (birthday.getMonth() + 1) < 10 ? `0${birthday.getMonth() + 1}` : birthday.getMonth() + 1;\r\n\r\n    return `${month}/${day}/${1900 + birthday.getYear()}`;\r\n}\r\n\r\n// slice value\r\nconst sliceValue = (value, max) => {\r\n    if (!value) {\r\n        return null;\r\n    }\r\n    return value.slice(0, max);\r\n}\r\n\r\n// data validation number\r\nconst isNumber = (value) => {\r\n    if (!value) {\r\n        return null;\r\n    }\r\n\r\n    const newValue = value.split(' ').join('');\r\n    if ( !isNaN(newValue) ) {\r\n        return newValue;\r\n    }\r\n\r\n    return null;\r\n}\r\n\r\n// data validation email\r\nconst isEmail = (value) => {\r\n    if (!value) {\r\n        return null;\r\n    }\r\n\r\n    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\r\n    if(regEmail.test(value) !== false) {\r\n        return value;\r\n    }\r\n\r\n    return null;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/service/validInput.js?");

/***/ }),

/***/ "./src/service/valueService.js":
/*!*************************************!*\
  !*** ./src/service/valueService.js ***!
  \*************************************/
/*! exports provided: valueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"valueService\", function() { return valueService; });\n/* harmony import */ var _validInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validInput */ \"./src/service/validInput.js\");\n\r\n\r\n// data validation\r\nconst valueService = (key, object, max) => {\r\n    if (object[key] === undefined && !object[key]) {\r\n        return false;\r\n    }\r\n\r\n    switch (key) {\r\n        case \"dob\":\r\n            return Object(_validInput__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(object[key]);\r\n        case \"desc\":\r\n            return Object(_validInput__WEBPACK_IMPORTED_MODULE_0__[\"sliceValue\"])(object[key], max);\r\n        case 'firstPhone':\r\n        case 'secondaryPhone':\r\n        case 'experience':\r\n            return Object(_validInput__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"])(object[key]);\r\n        case 'email':\r\n            return Object(_validInput__WEBPACK_IMPORTED_MODULE_0__[\"isEmail\"])(object[key]);\r\n        default:\r\n            return object[key];\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/service/valueService.js?");

/***/ })

/******/ });