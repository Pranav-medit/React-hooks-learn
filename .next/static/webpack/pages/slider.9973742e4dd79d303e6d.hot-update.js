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



var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function (_ref, childSliderCardRef) {
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
        ref: childSliderCardRef,
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
      du = _useState2[1]; // Each slider card


  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Initialize default values

  var sliderVisibleWidth = 0;
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var nextPxValueToScrlRight = 0;
  var prevPxValueToScrl = 0;
  var divCardsContainerWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false;

  var resetSliderPosition = function resetSliderPosition() {
    nextPxValueToScrlRight = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
  };

  var updateSliderPositionRef = function updateSliderPositionRef(updateref) {
    // translateX(0) -> initial position, starting position
    // translateX(-240px) -> moves slide in -> direction by 240px(each slide width by default)
    if (updateref === 'next') {
      // minus position goes -> direction on translate
      // ex: prevPxValueToScrl=240,nextPxValueToScrlRight=-240  and slidesToScrollWidth=240
      prevPxValueToScrl = prevPxValueToScrl - slidesToScrollWidth; // first-time:prevPxValueToScrl:0
      // second-time:prevPxValueToScrl:-240

      nextPxValueToScrlRight = nextPxValueToScrlRight - slidesToScrollWidth; // first-time:nextPxValueToScrlRight:-480
      // second-time:nextPxValueToScrlRight:-720
    } else {
      // ex: prevPxValueToScrl=-240,nextPxValueToScrlRight=-720  and slidesToScrollWidth=240
      nextPxValueToScrlRight = nextPxValueToScrlRight + slidesToScrollWidth; // first-time:prevPxValueToScrl:480
      // second-time:prevPxValueToScrl:620

      prevPxValueToScrl = prevPxValueToScrl + slidesToScrollWidth; // first-time:nextPxValueToScrlRight:0
      // second-time:nextPxValueToScrlRight:240
    }
  };

  var clickHandler = function clickHandler(direction) {
    console.log('a'); // If next button is clicked

    if (direction === 'next') {
      // If reached end of slide return to first slide
      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerWidth = 2890px;
      } else if (divCardsContainerWidth - sliderVisibleWidth < -nextPxValueToScrlRight) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerWidth + sliderVisibleWidth, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true;
      } else {
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(nextPxValueToScrlRight, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      // End of slide cannot be reached by clicking previous button
      endOfSlide = false;

      if (prevPxValueToScrl > 0) {
        // If slider is over left return to first slide and reset positions of scroll reference
        // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed
        resetSliderPosition();
      } else {
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(prevPxValueToScrl, "px)"); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px
    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlideMargin = window.getComputedStyle(childSliderCardRef.current).marginLeft.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = childSliderCardRef.current.offsetWidth + eachSlideMargin;
    console.log(eachSlideWidth); // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrlRight = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides

    divCardsContainerWidth = divCardsContainer.current.offsetWidth;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    initValues(); // Capture next button by class name

    var nextBtn = document.getElementsByClassName('next')[0]; // Capture previous button by class name

    var prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

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
      // Execute when unmounting
      nextBtn.removeEventListener('click', function () {
        return clickHandler('next');
      });
      prevBtn.removeEventListener('click', function () {
        return clickHandler('prev');
      });
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "visibleDiv",
    ref: slickSliderMainContainer,
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "I9oixn+nxW8luIwBqY9xzCR9NWw=");

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
//     divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//     nextPxValueToScrlRight = -slidesToScrollWidth; 
//     prevPxValueToScrl = slidesToScrollWidth;
// }
// const clickHandler = (direction)=>{ 
//     const left = divCardsContainer.current.getBoundingClientRect().left
//     console.log(nextPxValueToScrlRight,-divCardsContainer.current.offsetWidth+sliderVisibleWidth)
//     if (direction === 'next'){
//         if(nextPxValueToScrlRight,-divCardsContainer.current.offsetWidth+sliderVisibleWidth){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrlRight = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else if (divCardsContainer.current.offsetWidth-sliderVisibleWidth< -nextPxValueToScrlRight) {
//             divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainer.current.offsetWidth+sliderVisibleWidth}px)`
//             nextPxValueToScrlRight = -divCardsContainer.current.offsetWidth+sliderVisibleWidth
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrlRight}px)`
//             divCardsContainer.current.scrollLeft = slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl-slidesToScrollWidth;
//             nextPxValueToScrlRight = nextPxValueToScrlRight-slidesToScrollWidth;
//         }
//     }else if(direction === 'prev'){
//         console.log(prevPxValueToScrl)
//         const left = divCardsContainer.current.getBoundingClientRect().left;
//         if(prevPxValueToScrl>0){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrlRight = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;
//             nextPxValueToScrlRight =nextPxValueToScrlRight +slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl+slidesToScrollWidth;
//         }
//     }
// // }
// const left = divCardsContainer.current.getBoundingClientRect().left;
// divCardsContainer.current.scrollLeft = slidesToScrollWidth;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJpZCIsInVzZVN0YXRlIiwiaW1nU3RhdGUiLCJpbWdBcnJVcGR0IiwidXNlRWZmZWN0IiwibWFwIiwic3JjIiwiaW5kZXgiLCJzdHlsZXMiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlaWdodCIsIlNsaWNrU2xpZGVyIiwiZHVtbXkiLCJkdSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwic2xpY2tTbGlkZXJNYWluQ29udGFpbmVyIiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybFJpZ2h0IiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lcldpZHRoIiwiZW5kT2ZTbGlkZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaW5pdFZhbHVlcyIsIm9mZnNldFdpZHRoIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJzbGljZSIsIk51bWJlciIsIm5leHRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUs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YWNrL3BhZ2VzL3NsaWRlci45OTczNzQyZTRkZDc5ZDMwM2U2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nfSxjaGlsZFNsaWRlckNhcmRSZWYpID0+e1xyXG4gICAgY29uc3QgaW1nQXJyID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDo3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ1N0YXRlLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgaWQgPSAxMTtcclxuIFxyXG5cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nU3RhdGUubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nKycgaW1hZ2VDb250ICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIHN0eWxlPXt7d2lkdGg6J2luaGVyaXQnLG9iamVjdEZpdDonY292ZXInLGhlaWdodDonMTAwJSd9fSBzcmM9e3NyYy5zcmN9ICBrZXk9e3NyYy5pZH0gY2xhc3NOYW1lPXsnaW1hZ2VIb2xkZXInfSAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0pXHJcbmNvbnN0IFNsaWNrU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmxSaWdodCA9IDA7IFxyXG4gICAgbGV0IHByZXZQeFZhbHVlVG9TY3JsID0gMDtcclxuICAgIGxldCBkaXZDYXJkc0NvbnRhaW5lcldpZHRoPTA7XHJcbiAgICAvLyBEZXRlY3QgaWYgd2UgcmVhY2hlZCBlbmQgb2YgdGhlIHNsaWRlc1xyXG4gICAgbGV0IGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgY29uc3QgcmVzZXRTbGlkZXJQb3NpdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYgPSAodXBkYXRlcmVmKSA9PntcclxuICAgICAgICAvLyB0cmFuc2xhdGVYKDApIC0+IGluaXRpYWwgcG9zaXRpb24sIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgtMjQwcHgpIC0+IG1vdmVzIHNsaWRlIGluIC0+IGRpcmVjdGlvbiBieSAyNDBweChlYWNoIHNsaWRlIHdpZHRoIGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgaWYgKHVwZGF0ZXJlZiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgLy8gbWludXMgcG9zaXRpb24gZ29lcyAtPiBkaXJlY3Rpb24gb24gdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0yNDAsbmV4dFB4VmFsdWVUb1NjcmxSaWdodD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmxSaWdodCA9IG5leHRQeFZhbHVlVG9TY3JsUmlnaHQtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybFJpZ2h0Oi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1NjcmxSaWdodDotNzIwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0tMjQwLG5leHRQeFZhbHVlVG9TY3JsUmlnaHQ9LTcyMCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsUmlnaHQgPW5leHRQeFZhbHVlVG9TY3JsUmlnaHQgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjYyMFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1NjcmxSaWdodDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsUmlnaHQ6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EnKVxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyV2lkdGggPSAyODkwcHg7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGgpPCAtbmV4dFB4VmFsdWVUb1NjcmxSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyV2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybFJpZ2h0fXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudCkubWFyZ2luTGVmdC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoU2xpZGVNYXJnaW49TnVtYmVyKGVhY2hTbGlkZU1hcmdpbikqMiBcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmxSaWdodCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzXHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgd2hlbiBtb3VudGluZ1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgcmVxdWlyZWQgdmFsdWVzIGluIHBhcnRpY3VsYXIgZnVuY3Rpb25cclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICAvLyBDYXB0dXJlIG5leHQgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBuZXh0QnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXVxyXG4gICAgICAgIC8vIENhcHR1cmUgcHJldmlvdXMgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldicpWzBdXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmNsaWNrSGFuZGxlcigncHJldicpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIHdoZW4gdW5tb3VudGluZ1xyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ3ByZXYnKSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXtzbGlja1NsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2t9PlxyXG4gICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiByZWY9e2RpdkNhcmRzQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5zbGljaysgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBzdHlsZUltZz17c3R5bGVJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBuZXh0ICd9Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tTbGlkZXI7XHJcbiAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgIC8vICAgICBpZD1pZCsyO1xyXG4gICAgLy8gICAgIGltZ0FyclVwZHQoWy4uLmltZ1N0YXRlLCAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQrMSxcclxuICAgIC8vICAgICB9XSlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBcclxuICAgIC8vIH0sMTAwMDApXHJcbi8vIGVsc2UgaWYobGVmdD4gLXNsaWRlc1RvU2Nyb2xsV2lkdGgpe1xyXG4vLyAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICBuZXh0UHhWYWx1ZVRvU2NybFJpZ2h0ID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cobmV4dFB4VmFsdWVUb1NjcmxSaWdodCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsUmlnaHQsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZSBpZiAoZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGg8IC1uZXh0UHhWYWx1ZVRvU2NybFJpZ2h0KSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybFJpZ2h0ID0gLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoXHJcbi8vICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1NjcmxSaWdodH1weClgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmxSaWdodCA9IG5leHRQeFZhbHVlVG9TY3JsUmlnaHQtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJldlB4VmFsdWVUb1NjcmwpXHJcbi8vICAgICAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsUmlnaHQgPW5leHRQeFZhbHVlVG9TY3JsUmlnaHQgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcbi8vIC8vIH1cclxuLy8gY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsiXSwic291cmNlUm9vdCI6IiJ9