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
    var id = 11;
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
          lineNumber: 59,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
    height: '300px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1];

  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var sliderVisibleWidth = 0;
  var eve = 0;
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var pxToScrlRight = 0;
  var pxToScrlLeft = 0;
  var endOf;

  var clickHandler = function clickHandler(direction) {
    var left = divRef.current.getBoundingClientRect().left; // console.log(eve)

    eve = eve + 1;
    console.log(pxToScrlLeft, pxToScrlRight);

    if (direction === 'next') {
      if (pxToScrlRight === -divRef.current.offsetWidth + sliderVisibleWidth) {
        divRef.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        pxToScrlRight = -slidesToScrollWidth;
        pxToScrlLeft = slidesToScrollWidth;
      } else if (divRef.current.offsetWidth - sliderVisibleWidth < -pxToScrlRight) {
        divRef.current.style.cssText = "transform: translateX(".concat(-divRef.current.offsetWidth + sliderVisibleWidth, "px)");
      } else {
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlRight, "px)");
        divRef.current.scrollLeft = slidesToScrollWidth;
        pxToScrlLeft = pxToScrlLeft - slidesToScrollWidth;
        pxToScrlRight = pxToScrlRight - slidesToScrollWidth;
      }
    } else if (direction === 'prev') {
      var _left = divRef.current.getBoundingClientRect().left;

      if (pxToScrlLeft > 0) {
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
    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth;
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
    ref: slickSliderMainContainer,
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "oFfigRrpLVosfzUdcsPNuRC6s7M=");

_c3 = SlickSlider;
/* harmony default export */ __webpack_exports__["default"] = (SlickSlider); // setTimeout(()=>{
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
// else if(left> -slidesToScrollWidth){
//     divRef.current.style.cssText = `transform: translateX(-${0}px)`;
//     pxToScrlRight = -slidesToScrollWidth; 
//     pxToScrlLeft = slidesToScrollWidth;
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJzcmMiLCJpbmRleCIsInN0eWxlcyIsIndpZHRoIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiU2xpY2tTbGlkZXIiLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2UmVmIiwic2xpY2tTbGlkZXJNYWluQ29udGFpbmVyIiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZXZlIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJweFRvU2NybFJpZ2h0IiwicHhUb1NjcmxMZWZ0IiwiZW5kT2YiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZWZ0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwiY3NzVGV4dCIsInNjcm9sbExlZnQiLCJpbml0VmFsdWVzIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJzbGljZSIsIk51bWJlciIsIm5leHRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBWUMsUUFBWixFQUF3QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDM0MsTUFBTUMsTUFB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LFdBREo7QUFVSCxDQTdGRDs7SUFBTUksVzs7TUFBQUEsVztBQStGTiwrREFBZUEsV0FBZixFLENBQ0c7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuYjhmOGIyZWQ0ZDQwODFiZjRjYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpY2tTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZ30sY2hpbGRSZWYpID0+e1xyXG4gICAgY29uc3QgaW1nQXJyID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDo3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ1N0YXRlLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgaWQgPSAxMTtcclxuIFxyXG5cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nU3RhdGUubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWcrJyBpbWFnZUNvbnQgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMzAwcHgnXHJcbiAgICB9O1xyXG4gICAgbGV0IFtkdW1teSxkdV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgY2hpbGRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGRpdlJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZXZlPSAwO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IHB4VG9TY3JsUmlnaHQgPSAwOyBcclxuICAgIGxldCBweFRvU2NybExlZnQgPSAwO1xyXG4gICAgbGV0IGVuZE9mXHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZGl2UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZSlcclxuICAgICAgICBldmUgPSBldmUrMVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHB4VG9TY3JsTGVmdCxweFRvU2NybFJpZ2h0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihweFRvU2NybFJpZ2h0PT09LWRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoPCAtcHhUb1NjcmxSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3B4VG9TY3JsUmlnaHR9cHgpYFxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBweFRvU2NybExlZnQtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPSBweFRvU2NybFJpZ2h0LXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZGl2UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgaWYocHhUb1NjcmxMZWZ0PjApe1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtweFRvU2NybExlZnR9cHgpYDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPXB4VG9TY3JsUmlnaHQgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBweFRvU2NybExlZnQrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICBzbGlkZXJWaXNpYmxlV2lkdGggPSBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBsZXQgZWFjaFNsaWRlTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2hpbGRSZWYuY3VycmVudCkubWFyZ2luTGVmdC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgZWFjaFNsaWRlTWFyZ2luPU51bWJlcihlYWNoU2xpZGVNYXJnaW4pKjIgXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK2VhY2hTbGlkZU1hcmdpbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgcHhUb1NjcmxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICBweFRvU2NybFJpZ2h0ID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICBjb25zdCBuZXh0QnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXVxyXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF1cclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmNsaWNrSGFuZGxlcigncHJldicpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ3ByZXYnKSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtzbGlja1NsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2t9PlxyXG4gICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiByZWY9e2RpdlJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkUmVmfSBzdHlsZUltZz17c3R5bGVJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBuZXh0ICd9Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tTbGlkZXI7XHJcbiAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgIC8vICAgICBpZD1pZCsyO1xyXG4gICAgLy8gICAgIGltZ0FyclVwZHQoWy4uLmltZ1N0YXRlLCAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQrMSxcclxuICAgIC8vICAgICB9XSlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBcclxuICAgIC8vIH0sMTAwMDApXHJcbi8vIGVsc2UgaWYobGVmdD4gLXNsaWRlc1RvU2Nyb2xsV2lkdGgpe1xyXG4vLyAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgcHhUb1NjcmxSaWdodCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgIHB4VG9TY3JsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9