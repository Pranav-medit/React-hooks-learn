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
  var nextPxValueToScrl = 0;
  var prevPxValueToScrl = 0;
  var divCardsContainerTotalWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false;

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
  };

  var updateSliderPositionRef = function updateSliderPositionRef(updateref) {
    // translateX(0) -> initial position, starting position
    // translateX(-240px) -> moves slide in -> direction by 240px(each slide width by default)
    if (updateref === 'next') {
      // minus position goes -> direction on translate
      // ex: prevPxValueToScrl=240,nextPxValueToScrl=-240  and slidesToScrollWidth=240
      prevPxValueToScrl = prevPxValueToScrl - slidesToScrollWidth; // first-time:prevPxValueToScrl:0
      // second-time:prevPxValueToScrl:-240

      nextPxValueToScrl = nextPxValueToScrl - slidesToScrollWidth; // first-time:nextPxValueToScrl:-480
      // second-time:nextPxValueToScrl:-720
    } else {
      // ex: prevPxValueToScrl=-240,nextPxValueToScrl=-720  and slidesToScrollWidth=240
      nextPxValueToScrl = nextPxValueToScrl + slidesToScrollWidth; // first-time:prevPxValueToScrl:480
      // second-time:prevPxValueToScrl:620

      prevPxValueToScrl = prevPxValueToScrl + slidesToScrollWidth; // first-time:nextPxValueToScrl:0
      // second-time:nextPxValueToScrl:240
    }
  };

  var clickHandler = function clickHandler(direction) {
    console.log('a'); // If next button is clicked

    if (direction === 'next') {
      // If reached end of slide return to first slide
      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth < -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerTotalWidth + sliderVisibleWidth, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true;
      } else {
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(nextPxValueToScrl, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

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

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
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
      lineNumber: 206,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 205,
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
//     nextPxValueToScrl = -slidesToScrollWidth; 
//     prevPxValueToScrl = slidesToScrollWidth;
// }
// const clickHandler = (direction)=>{ 
//     const left = divCardsContainer.current.getBoundingClientRect().left
//     console.log(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth)
//     if (direction === 'next'){
//         if(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else if (divCardsContainer.current.offsetWidth-sliderVisibleWidth< -nextPxValueToScrl) {
//             divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainer.current.offsetWidth+sliderVisibleWidth}px)`
//             nextPxValueToScrl = -divCardsContainer.current.offsetWidth+sliderVisibleWidth
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)`
//             divCardsContainer.current.scrollLeft = slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl-slidesToScrollWidth;
//             nextPxValueToScrl = nextPxValueToScrl-slidesToScrollWidth;
//         }
//     }else if(direction === 'prev'){
//         console.log(prevPxValueToScrl)
//         const left = divCardsContainer.current.getBoundingClientRect().left;
//         if(prevPxValueToScrl>0){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;
//             nextPxValueToScrl =nextPxValueToScrl +slidesToScrollWidth;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJpZCIsInVzZVN0YXRlIiwiaW1nU3RhdGUiLCJpbWdBcnJVcGR0IiwidXNlRWZmZWN0IiwibWFwIiwic3JjIiwiaW5kZXgiLCJzdHlsZXMiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlaWdodCIsIlNsaWNrU2xpZGVyIiwiZHVtbXkiLCJkdSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwic2xpY2tTbGlkZXJNYWluQ29udGFpbmVyIiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybCIsInByZXZQeFZhbHVlVG9TY3JsIiwiZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIiwiZW5kT2ZTbGlkZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaW5pdFZhbHVlcyIsIm9mZnNldFdpZHRoIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJzbGljZSIsIk51bWJlciIsIm5leHRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUs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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci44MzY3ODAyNjY2YjRmODQ4MGJjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nfSxjaGlsZFNsaWRlckNhcmRSZWYpID0+e1xyXG4gICAgY29uc3QgaW1nQXJyID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDo3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ1N0YXRlLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgaWQgPSAxMTtcclxuIFxyXG5cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nU3RhdGUubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nKycgaW1hZ2VDb250ICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIHN0eWxlPXt7d2lkdGg6J2luaGVyaXQnLG9iamVjdEZpdDonY292ZXInLGhlaWdodDonMTAwJSd9fSBzcmM9e3NyYy5zcmN9ICBrZXk9e3NyYy5pZH0gY2xhc3NOYW1lPXsnaW1hZ2VIb2xkZXInfSAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0pXHJcbmNvbnN0IFNsaWNrU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcbiAgICAvLyBEZXRlY3QgaWYgd2UgcmVhY2hlZCBlbmQgb2YgdGhlIHNsaWRlc1xyXG4gICAgbGV0IGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgY29uc3QgcmVzZXRTbGlkZXJQb3NpdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIC8vIGRlZmF1bHQgc2xpZGVzVG9TY3JvbGxXaWR0aDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmID0gKHVwZGF0ZXJlZikgPT57XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgwKSAtPiBpbml0aWFsIHBvc2l0aW9uLCBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoLTI0MHB4KSAtPiBtb3ZlcyBzbGlkZSBpbiAtPiBkaXJlY3Rpb24gYnkgMjQwcHgoZWFjaCBzbGlkZSB3aWR0aCBieSBkZWZhdWx0KVxyXG4gICAgICAgIGlmICh1cGRhdGVyZWYgPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIC8vIG1pbnVzIHBvc2l0aW9uIGdvZXMgLT4gZGlyZWN0aW9uIG9uIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9MjQwLG5leHRQeFZhbHVlVG9TY3JsPS0yNDAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6LTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNzIwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0tMjQwLG5leHRQeFZhbHVlVG9TY3JsPS03MjAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjYyMFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDoyNDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBjb25zb2xlLmxvZygnYScpXHJcbiAgICAgICAgLy8gSWYgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIC8vIElmIHJlYWNoZWQgZW5kIG9mIHNsaWRlIHJldHVybiB0byBmaXJzdCBzbGlkZVxyXG4gICAgICAgICAgICBpZihlbmRPZlNsaWRlKXsgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gMjM2MDsgYW5kIHNsaWRlclZpc2libGVXaWR0aCA9IDEzMzYgYW5kIG5leHRQeFZhbHVlVG9TY3JsID0gLTE0NDAgdGhlblxyXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyVmlzaWJsZVdpZHRoIGlzIHNsaWRlciB3aWR0aCB3aGljaCBpcyB2aXNpYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCBpcyB0b3RhbCB3aWR0aCBvZiBjb250YWluZXIgaG9sZGluZyBjYXJkcyA9ICB2aXNpYmxlIGFyZWEraGlkZGVuIGFyZWFcclxuICAgICAgICAgICAgfWVsc2UgaWYgKChkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoKTwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAvLyBFbmQgb2Ygc2xpZGUgY2Fubm90IGJlIHJlYWNoZWQgYnkgY2xpY2tpbmcgcHJldmlvdXMgYnV0dG9uXHJcbiAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlciBpcyBvdmVyIGxlZnQgcmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBieSBkZWZhdWx0IHJlZmVyZW5jZSBwcmV2UHhWYWx1ZVRvU2NybCBpcyBzZXQgdG8gMjQwcHggaGVuY2UgdGhpcyBpcyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAncHJldicgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ3ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICAvLyBTbGlkZXIgd2lkdGggaXMgYW4gb3V0ZXIgZGl2IHdoaWNoIHNob3dzIGVudGlyZSBzbGlkZXIgaWYgd2Ugc2V0IHNsaWRlciB0byBiZSAyMDBweCB3aWRlLSBcclxuICAgICAgICAvLyAtd2lkdGggaXMgc2V0IG9uIHRoaXMgZGl2ICwgd2UgbmVlZCBpdCB0byBjYWxjdWxhdGUgc2xpZGVyIHZpc2libGUgd2lkdGggaW4gd2hpY2ggc2xpZGVyIGlzIHZpc2libGVcclxuICAgICAgICAvLyBieSBkZWZhdWx0IHNsaWRlciB0YWtlcyBmdWxsIHZpZXdwb3J0IHdpZHRoLmV4IDogMTYwMHB4XHJcbiAgICAgICAgc2xpZGVyVmlzaWJsZVdpZHRoID0gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gSWYgc2xpZGVyIGhhcyBtYXJnaW4gKHNwYWNlIGJldHdlZW4gc2xpZGVyIGNhcmRzIGlmIHNsaWRlcnMgYXJlIHRvdWNoIHRvIGVhY2ggb3RoZXIgdGhlbiBpdCBoYXMgbm8gbWFyZ2luKS0gXHJcbiAgICAgICAgLy8gLWl0IGlzIHJlcXVpcmVkIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBkb2VzIHNsaWRlciBzY3JvbGxzXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZU1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50KS5tYXJnaW5MZWZ0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKSoyIFxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCtlYWNoU2xpZGVNYXJnaW47XHJcbiAgICAgICAgY29uc29sZS5sb2coZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gZWFjaFNsaWRlV2lkdGggPU51bWJlcihlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsIGluIHBpeGVscyBleDogaWYgMjQwcHhcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzXHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgIC8vIENhcHR1cmUgbmV4dCBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5leHRCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBwcmV2aW91cyBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF1cclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ25leHQnKSlcclxuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCdwcmV2JykpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgaW5pdFZhbHVlcygpXHJcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nXHJcbiAgICAgICAgICAgIG5leHRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmNsaWNrSGFuZGxlcigncHJldicpKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2libGVEaXZcIiByZWY9e3NsaWNrU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLkNzbGlja30+XHJcbiAgICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBwcmV2ICd9PlByZXY8L2k+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZGl2Q2FyZHNDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWNrKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxJbWcgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlja1NsaWRlcjtcclxuICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuLy8gZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbi8vICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKVxyXG4vLyAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpZihuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZSBpZiAoZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGg8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGhcclxuLy8gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcmV2UHhWYWx1ZVRvU2NybClcclxuLy8gICAgICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gLy8gfVxyXG4vLyBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyJdLCJzb3VyY2VSb290IjoiIn0=