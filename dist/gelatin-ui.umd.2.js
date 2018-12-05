((typeof self !== 'undefined' ? self : this)["webpackJsonpgelatin_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgelatin_ui"] || []).push([[2],{

/***/ "fbea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0f32");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);

var x, y, target;
document.addEventListener('mousemove', lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(onMouseUpdate, 100), false);
document.addEventListener('mouseenter', lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(onMouseUpdate, 100), false);

function onMouseUpdate(e) {
  target = e.target;
  x = e.pageX;
  y = e.pageY;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    x: x,
    y: y,
    target: target
  };
});

/***/ })

}]);
//# sourceMappingURL=gelatin-ui.umd.2.js.map