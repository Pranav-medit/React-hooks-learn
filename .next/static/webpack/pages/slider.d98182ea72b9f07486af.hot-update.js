self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/slickSlider.js":
/*!***********************************!*\
  !*** ./components/slickSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_prana_Documents_VSCode_React_react_hooks_hook1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(_c = _s(function (_ref, childRef) {
  _s();

  var styleImg = _ref.styleImg;
  var imgArr = [{
    'src': 'static/s1.jpg',
    id: 1
  }, {
    'src': 'static/s2.jpg',
    id: 2
  }, {
    'src': 'static/s3.jpg',
    id: 3
  }, {
    'src': 'static/s4.jpg',
    id: 4
  }, {
    'src': 'static/s5.jpg',
    id: 5
  }, {
    'src': 'static/s6.jpg',
    id: 6
  }, {
    'src': 'static/s7.jpg',
    id: 7
  }, {
    'src': 'static/s8.jpg',
    id: 8
  }, {
    'src': 'static/s9.jpg',
    id: 9
  }, {
    'src': 'static/s10.jpg',
    id: 10
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(imgArr),
      imgState = _useState[0],
      imgArrUpdt = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var id = 11;
    setTimeout(function () {
      id = id + 2;
      imgArrUpdt([].concat((0,C_Users_prana_Documents_VSCode_React_react_hooks_hook1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(imgState), [{
        'src': 'static/per1.jpg',
        id: id
      }, {
        'src': 'static/per2.jpg',
        id: id + 1
      }]));
      console.log(id);
    }, 10000);
  }, []);
  console.log('jow'); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {
            width: 'inherit',
            objectFit: 'cover',
            height: '100%'
          },
          src: src.src,
          className: 'imageHolder',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "TLdesTkvEVpH+2amsN47teVspjY="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var styleImg = {
    width: '200px',
    height: '200px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1];

  var pxToScrlRight = -210;
  var pxToScrlLeft = 210;
  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var eachSlideWidth = divRef.current.offsetWidth;

  var clickHandler = function clickHandler(direction) {
    var left = divRef.current.getBoundingClientRect().left;

    if (direction === 'next') {
      console.log(pxToScrlRight);

      if (divRef.current.offsetWidth - window.innerWidth < -pxToScrlRight) {
        divRef.current.style.cssText = "transform: translateX(".concat(-divRef.current.offsetWidth + window.innerWidth, "px)");
      } else {
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlRight, "px)");
        divRef.current.scrollLeft = 210;
        pxToScrlLeft = pxToScrlLeft - 210;
        pxToScrlRight = pxToScrlRight - 210;
      }
    } else if (direction === 'prev') {
      var _left = divRef.current.getBoundingClientRect().left;
      console.log(_left, pxToScrlLeft, pxToScrlRight);
      console.log('lft btn', _left);

      if (_left > -210) {
        divRef.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        pxToScrlRight = -210;
        pxToScrlLeft = 210;
      } else {
        console.log('Leftinent', _left);
        console.log("probelakfja");
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlLeft, "px)");
        pxToScrlRight = pxToScrlRight + 210;
        pxToScrlLeft = pxToScrlLeft + 210;
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var slide = document.getElementsByClassName('imgComp')[0];
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('prev');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('next');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "LbEgPodzyzMs6AQ90AvsS21ASDA=");

_c3 = SlickSlider;
/* harmony default export */ __webpack_exports__["default"] = (SlickSlider);

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$forwardRef");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "SlickSlider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsImR1bW15IiwiZHUiLCJweFRvU2NybFJpZ2h0IiwicHhUb1NjcmxMZWZ0IiwidXNlUmVmIiwiZGl2UmVmIiwiZWFjaFNsaWRlV2lkdGgiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlIiwiY3NzVGV4dCIsInNjcm9sbExlZnQiLCJzbGlkZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLEdBQUcsZ0JBQUdDLGlEQUFVLFNBQUMsZ0JBQVlDLFFBQVosRUFBd0I7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQzNDLE1BQU1DLE1BQU0sR0FBRyxDQUNYO0FBQ0ksV0FBTSxlQURWO0FBRUlDLE1BQUUsRUFBQztBQUZQLEdBRFcsRUFLWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQUxXLEVBU1g7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FUVyxFQWFYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBYlcsRUFpQlg7QUFDSSxXQUFN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QUFhLEdBQUUsR0FBOUI7QUFDQUMsb0JBQVksR0FBR0EsWUFBWSxHQUFDLEdBQTVCO0FBQ0g7QUFFSjtBQUNKLEdBL0JEOztBQWdDQWYsa0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBTThCLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEyQyxDQUEzQyxDQUFkO0FBRUgsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUlBLHNCQUNJO0FBQU0sYUFBUyxFQUFFekIsd0VBQWpCO0FBQUEsNEJBQ0k7QUFBRyxhQUFPLEVBQUU7QUFBQSxlQUFJYyxZQUFZLENBQUMsTUFBRCxDQUFoQjtBQUFBLE9BQVo7QUFBc0MsZUFBUyxFQUFFZCx3RUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssU0FBRyxFQUFFVSxNQUFWO0FBQWtCLGVBQVMsRUFBRVYsdUVBQUEsR0FBYyxXQUEzQztBQUFBLDZCQUNBLDhEQUFDLEdBQUQ7QUFBSyxXQUFHLEVBQUVkLFFBQVY7QUFBb0IsZ0JBQVEsRUFBRUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUtHO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSTJCLFlBQVksQ0FBQyxNQUFELENBQWhCO0FBQUEsT0FBWjtBQUFzQyxlQUFTLEVBQUVkLHdFQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0F4REQ7O0lBQU1JLFc7O01BQUFBLFc7QUEwRE4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmQ5ODE4MmVhNzJiOWYwNzQ4NmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKCh7c3R5bGVJbWd9LGNoaWxkUmVmKSA9PntcclxuICAgIGNvbnN0IGltZ0FyciA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6NCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo1LFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6NyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEwLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIF1cclxuICAgIGNvbnN0IFtpbWdTdGF0ZSxpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FycilcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGlkID0gMTE7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWQ9aWQrMjtcclxuICAgICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDppZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAgICAgfV0pXHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICB9LDEwMDAwKVxyXG5cclxuICAgIH0sW10pXHJcbiAgICBjb25zb2xlLmxvZygnam93JylcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdTdGF0ZS5tYXAoKHNyYyxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NyYy5pZH0gIHJlZj17Y2hpbGRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMjAwcHgnXHJcbiAgICB9O1xyXG4gICAgbGV0IFtkdW1teSxkdV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgbGV0IHB4VG9TY3JsUmlnaHQgPSAtMjEwOyBcclxuICAgIGxldCBweFRvU2NybExlZnQgPSAyMTA7XHJcbiAgICBjb25zdCBjaGlsZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZGl2UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBlYWNoU2xpZGVXaWR0aCA9IGRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkaXZSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHhUb1NjcmxSaWdodClcclxuICAgICAgICAgICAgaWYgKGRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoLXdpbmRvdy5pbm5lcldpZHRoPCAtcHhUb1NjcmxSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrd2luZG93LmlubmVyV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHhUb1NjcmxSaWdodH1weClgXHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID0gMjEwXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBweFRvU2NybExlZnQtMjEwO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IHB4VG9TY3JsUmlnaHQtMjEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGRpdlJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGVmdCxweFRvU2NybExlZnQscHhUb1NjcmxSaWdodClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xmdCBidG4nLGxlZnQpXHJcbiAgICAgICAgICAgIGlmKGxlZnQ+IC0yMTApe1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybFJpZ2h0ID0gLTIxMDsgXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSAyMTA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnRpbmVudCcsbGVmdClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvYmVsYWtmamFcIilcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHhUb1NjcmxMZWZ0fXB4KWBcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPXB4VG9TY3JsUmlnaHQgKzIxMFxyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gcHhUb1NjcmxMZWZ0KzIxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ0NvbXAnKVswXVxyXG4gICAgXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2t9PlxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXsoKT0+Y2xpY2tIYW5kbGVyKCdwcmV2Jyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+UHJldjwvaT5cclxuICAgICAgICAgICAgPGRpdiByZWY9e2RpdlJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkUmVmfSBzdHlsZUltZz17c3R5bGVJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpIG9uQ2xpY2s9eygpPT5jbGlja0hhbmRsZXIoJ25leHQnKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=