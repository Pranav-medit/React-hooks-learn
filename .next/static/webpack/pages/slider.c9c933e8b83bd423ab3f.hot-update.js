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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function (_ref, childRef) {
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArr),
      imgState = _useState[0],
      imgArrUpdt = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var id = 11; // setTimeout(()=>{
    //     id=id+2;
    //     imgArrUpdt([...imgState,   {
    //         'src':'static/per1.jpg',
    //         id:id,
    //     },
    //     {
    //         'src':'static/per2.jpg',
    //         id:id+1,
    //     }])
    //     console.log(id)
    // },10000)
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Img) + ' imageCont ',
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
          lineNumber: 71,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "TLdesTkvEVpH+2amsN47teVspjY="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var styleImg = {
    width: '50vw',
    height: '200px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1];

  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var pxToScrlRight = 0;
  var pxToScrlLeft = 0;

  var clickHandler = function clickHandler(direction) {
    var left = divRef.current.getBoundingClientRect().left;

    if (direction === 'next') {
      if (divRef.current.offsetWidth - window.innerWidth < -pxToScrlRight) {
        divRef.current.style.cssText = "transform: translateX(".concat(-divRef.current.offsetWidth + window.innerWidth, "px)");
      } else {
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlRight, "px)");
        divRef.current.scrollLeft = slidesToScrollWidth;
        pxToScrlLeft = pxToScrlLeft - slidesToScrollWidth;
        pxToScrlRight = pxToScrlRight - slidesToScrollWidth;
      }
    } else if (direction === 'prev') {
      console.log(pxToScrlLeft);
      var _left = divRef.current.getBoundingClientRect().left;

      if (pxToScrlLeft > 0) {
        divRef.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        pxToScrlRight = -slidesToScrollWidth;
        pxToScrlLeft = slidesToScrollWidth;
      } else if (_left > -slidesToScrollWidth) {
        divRef.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        pxToScrlRight = -slidesToScrollWidth;
        pxToScrlLeft = slidesToScrollWidth;
      } else {
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlLeft, "px)");
        pxToScrlRight = pxToScrlRight + slidesToScrollWidth;
        pxToScrlLeft = pxToScrlLeft + slidesToScrollWidth;
      }
    }
  };

  var initValues = function initValues() {
    var sliderVisibleWidth = slickSliderMainContainer.current.off;
    var eachSlideMargin = window.getComputedStyle(childRef.current).marginLeft.slice(0, -2);
    eachSlideMargin = Number(eachSlideMargin) * 2;
    eachSlideWidth = childRef.current.offsetWidth + eachSlideMargin;
    console.log(eachSlideWidth); // eachSlideWidth =Number(eachSlideWidth)

    slidesToScroll = 1;
    slidesToScrollWidth = eachSlideWidth * slidesToScroll;
    pxToScrlLeft = slidesToScrollWidth;
    pxToScrlRight = -slidesToScrollWidth;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    initValues();
    var nextBtn = document.getElementsByClassName('next')[0];
    var prevBtn = document.getElementsByClassName('prev')[0];
    nextBtn.addEventListener('click', function () {
      return clickHandler('next');
    });
    prevBtn.addEventListener('click', function () {
      return clickHandler('prev');
    });
    window.addEventListener('resize', function () {
      initValues();
      clickHandler('next');
      clickHandler('prev');
    });
    return function () {
      nextBtn.removeEventListener('click', function () {
        return clickHandler('next');
      });
      prevBtn.removeEventListener('click', function () {
        return clickHandler('prev');
      });
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "oFfigRrpLVosfzUdcsPNuRC6s7M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJzcmMiLCJpbmRleCIsInN0eWxlcyIsIndpZHRoIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiU2xpY2tTbGlkZXIiLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2UmVmIiwic2xpY2tTbGlkZXJNYWluQ29udGFpbmVyIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJweFRvU2NybFJpZ2h0IiwicHhUb1NjcmxMZWZ0IiwiY2xpY2tIYW5kbGVyIiwiZGlyZWN0aW9uIiwibGVmdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXRXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzdHlsZSIsImNzc1RleHQiLCJzY3JvbGxMZWZ0IiwiY29uc29sZSIsImxvZyIsImluaXRWYWx1ZXMiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJvZmYiLCJlYWNoU2xpZGVNYXJnaW4iLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luTGVmdCIsInNsaWNlIiwiTnVtYmVyIiwibmV4dEJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLGdCQUFHQyxpREFBVSxTQUFDLGdCQUFZQyxRQUFaLEVBQXdCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUMzQyxNQUFN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LmM5YzkzM2U4YjgzYmQ0MjNhYjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKCh7c3R5bGVJbWd9LGNoaWxkUmVmKSA9PntcclxuICAgIGNvbnN0IGltZ0FyciA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6NCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo1LFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6NyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEwLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIF1cclxuICAgIGNvbnN0IFtpbWdTdGF0ZSxpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FycilcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGlkID0gMTE7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG5cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nU3RhdGUubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWcrJyBpbWFnZUNvbnQgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonNTB2dycsXHJcbiAgICAgICAgaGVpZ2h0OicyMDBweCdcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBjaGlsZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZGl2UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBzbGlja1NsaWRlck1haW5Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIGxldCBlYWNoU2xpZGVXaWR0aCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGwgPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsV2lkdGg9MDtcclxuICAgIGxldCBweFRvU2NybFJpZ2h0ID0gMDsgXHJcbiAgICBsZXQgcHhUb1NjcmxMZWZ0ID0gMDtcclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkaXZSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgaWYgKGRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoLXdpbmRvdy5pbm5lcldpZHRoPCAtcHhUb1NjcmxSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrd2luZG93LmlubmVyV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHhUb1NjcmxSaWdodH1weClgXHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsTGVmdCA9IHB4VG9TY3JsTGVmdC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IHB4VG9TY3JsUmlnaHQtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHB4VG9TY3JsTGVmdClcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGRpdlJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgICAgIGlmKHB4VG9TY3JsTGVmdD4wKXtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgICAgICAgICBweFRvU2NybFJpZ2h0ID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3B4VG9TY3JsTGVmdH1weClgO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9cHhUb1NjcmxSaWdodCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsTGVmdCA9IHB4VG9TY3JsTGVmdCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRWYWx1ZXMgPSgpID0+e1xyXG4gICAgICAgIGxldCBzbGlkZXJWaXNpYmxlV2lkdGggPSBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZcclxuICAgICAgICBsZXQgZWFjaFNsaWRlTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2hpbGRSZWYuY3VycmVudCkubWFyZ2luTGVmdC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgZWFjaFNsaWRlTWFyZ2luPU51bWJlcihlYWNoU2xpZGVNYXJnaW4pKjIgXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK2VhY2hTbGlkZU1hcmdpbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgcHhUb1NjcmxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICBweFRvU2NybFJpZ2h0ID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICBjb25zdCBuZXh0QnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXVxyXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF1cclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmNsaWNrSGFuZGxlcigncHJldicpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ3ByZXYnKSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLkNzbGlja30+XHJcbiAgICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBwcmV2ICd9PlByZXY8L2k+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWNrKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxJbWcgcmVmPXtjaGlsZFJlZn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=