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
  var pxToScrlRight = 0;
  var pxToScrlLeft = 0;
  var divCardsContainerWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false;

  var resetSliderPosition = function resetSliderPosition() {
    pxToScrlRight = -slidesToScrollWidth;
    pxToScrlLeft = slidesToScrollWidth;
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    if (direction === 'next') {
      // If reached end of slide return to first slide
      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false;
      } else if (divCardsContainerWidth - sliderVisibleWidth < -pxToScrlRight) {
        // If about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerWidth + sliderVisibleWidth, "px)");
        pxToScrlLeft = pxToScrlLeft - slidesToScrollWidth;
        pxToScrlRight = pxToScrlRight - slidesToScrollWidth;
        endOfSlide = true;
      } else {
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(pxToScrlRight, "px)");
        divCardsContainer.current.scrollLeft = slidesToScrollWidth;
        pxToScrlLeft = pxToScrlLeft - slidesToScrollWidth;
        pxToScrlRight = pxToScrlRight - slidesToScrollWidth;
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      if (pxToScrlLeft > 0) {
        divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        resetSliderPosition();
        endOfSlide = false;
      } else {
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(pxToScrlLeft, "px)");
        pxToScrlRight = pxToScrlRight + slidesToScrollWidth;
        pxToScrlLeft = pxToScrlLeft + slidesToScrollWidth;
        endOfSlide = false;
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

    slidesToScroll = 1; // Number of slides to scroll in pixels

    slidesToScrollWidth = eachSlideWidth * slidesToScroll; // to calculate and track progress of left and right scroll positions

    pxToScrlLeft = slidesToScrollWidth;
    pxToScrlRight = -slidesToScrollWidth; // Cards container width generally equal to eachsliderwidth*totalnumberofslides

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
      lineNumber: 179,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 178,
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
//     pxToScrlRight = -slidesToScrollWidth; 
//     pxToScrlLeft = slidesToScrollWidth;
// }
// const clickHandler = (direction)=>{ 
//     const left = divCardsContainer.current.getBoundingClientRect().left
//     console.log(pxToScrlRight,-divCardsContainer.current.offsetWidth+sliderVisibleWidth)
//     if (direction === 'next'){
//         if(pxToScrlRight,-divCardsContainer.current.offsetWidth+sliderVisibleWidth){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             pxToScrlRight = -slidesToScrollWidth; 
//             pxToScrlLeft = slidesToScrollWidth;
//         }else if (divCardsContainer.current.offsetWidth-sliderVisibleWidth< -pxToScrlRight) {
//             divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainer.current.offsetWidth+sliderVisibleWidth}px)`
//             pxToScrlRight = -divCardsContainer.current.offsetWidth+sliderVisibleWidth
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${pxToScrlRight}px)`
//             divCardsContainer.current.scrollLeft = slidesToScrollWidth;
//             pxToScrlLeft = pxToScrlLeft-slidesToScrollWidth;
//             pxToScrlRight = pxToScrlRight-slidesToScrollWidth;
//         }
//     }else if(direction === 'prev'){
//         console.log(pxToScrlLeft)
//         const left = divCardsContainer.current.getBoundingClientRect().left;
//         if(pxToScrlLeft>0){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             pxToScrlRight = -slidesToScrollWidth; 
//             pxToScrlLeft = slidesToScrollWidth;
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${pxToScrlLeft}px)`;
//             pxToScrlRight =pxToScrlRight +slidesToScrollWidth;
//             pxToScrlLeft = pxToScrlLeft+slidesToScrollWidth;
//         }
//     }
// // }
// const left = divCardsContainer.current.getBoundingClientRect().left;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJpZCIsInVzZVN0YXRlIiwiaW1nU3RhdGUiLCJpbWdBcnJVcGR0IiwidXNlRWZmZWN0IiwibWFwIiwic3JjIiwiaW5kZXgiLCJzdHlsZXMiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlaWdodCIsIlNsaWNrU2xpZGVyIiwiZHVtbXkiLCJkdSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwic2xpY2tTbGlkZXJNYWluQ29udGFpbmVyIiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJweFRvU2NybFJpZ2h0IiwicHhUb1NjcmxMZWZ0IiwiZGl2Q2FyZHNDb250YWluZXJXaWR0aCIsImVuZE9mU2xpZGUiLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiY2xpY2tIYW5kbGVyIiwiZGlyZWN0aW9uIiwiY3VycmVudCIsInN0eWxlIiwiY3NzVGV4dCIsInNjcm9sbExlZnQiLCJpbml0VmFsdWVzIiwib2Zmc2V0V2lkdGgiLCJlYWNoU2xpZGVNYXJnaW4iLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luTGVmdCIsInNsaWNlIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsIm5leHRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBWUMsa0JBQVosRUFBa0M7QUFBQTs7QUFBQSxNQUFo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Uix1RUFBQSxHQUFjLFdBQXREO0FBQUEsNkJBQ0EsOERBQUMsR0FBRDtBQUFLLFdBQUcsRUFBRVgsa0JBQVY7QUFBOEIsZ0JBQVEsRUFBRUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQU1HO0FBQUksZUFBUyxFQUFFVSx3RUFBQSxHQUFjLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXpIRDs7SUFBTUksVzs7TUFBQUEsVztBQTJITiwrREFBZUEsV0FBZixFLENBQ0c7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmY1Zjc4NzY5OGZkZDExNDJjMGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKCh7c3R5bGVJbWd9LGNoaWxkU2xpZGVyQ2FyZFJlZikgPT57XHJcbiAgICBjb25zdCBpbWdBcnIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nU3RhdGUsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnIpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gXHJcblxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdTdGF0ZS5tYXAoKHNyYyxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NyYy5pZH0gIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWcrJyBpbWFnZUNvbnQgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMzAwcHgnXHJcbiAgICB9O1xyXG4gICAgbGV0IFtkdW1teSxkdV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gRWFjaCBzbGlkZXIgY2FyZFxyXG4gICAgY29uc3QgY2hpbGRTbGlkZXJDYXJkUmVmID0gdXNlUmVmKCk7XHJcbiAgICAvLyBQYXJlbnQgb2Ygc2xpZGVyIGNhcmRzICwgZGl2IGhvbGRpbmcgYWxsIHNsaWRlIGNhcmRzXHJcbiAgICBjb25zdCBkaXZDYXJkc0NvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gU2xpZGVyIGNvbnRhaW5pbmcgY2FyZHMgY29udGFpbmVyIGFuZCBwcmV2LCBuZXh0IGJ1dHRvbnMuXHJcbiAgICBjb25zdCBzbGlja1NsaWRlck1haW5Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcclxuICAgIGxldCBzbGlkZXJWaXNpYmxlV2lkdGg9MDtcclxuICAgIGxldCBlYWNoU2xpZGVXaWR0aCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGwgPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsV2lkdGg9MDtcclxuICAgIGxldCBweFRvU2NybFJpZ2h0ID0gMDsgXHJcbiAgICBsZXQgcHhUb1NjcmxMZWZ0ID0gMDtcclxuICAgIGxldCBkaXZDYXJkc0NvbnRhaW5lcldpZHRoPTA7XHJcbiAgICAvLyBEZXRlY3QgaWYgd2UgcmVhY2hlZCBlbmQgb2YgdGhlIHNsaWRlc1xyXG4gICAgbGV0IGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgY29uc3QgcmVzZXRTbGlkZXJQb3NpdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIHB4VG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHhUb1NjcmxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lcldpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLXB4VG9TY3JsUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFib3V0IHRvIHJlYWNoIGxhc3Qgc2xpZGUgLCBsYXN0IGJ1dCBvbmUgY2xpY2sgb2YgZW5kb2ZzbGlkZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lcldpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBweFRvU2NybExlZnQtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgICAgICBweFRvU2NybFJpZ2h0ID0gcHhUb1NjcmxSaWdodC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHhUb1NjcmxSaWdodH1weClgXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gcHhUb1NjcmxMZWZ0LXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBweFRvU2NybFJpZ2h0ID0gcHhUb1NjcmxSaWdodC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGlmKHB4VG9TY3JsTGVmdD4wKXtcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHhUb1NjcmxMZWZ0fXB4KWA7XHJcbiAgICAgICAgICAgICAgICBweFRvU2NybFJpZ2h0ID1weFRvU2NybFJpZ2h0ICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gcHhUb1NjcmxMZWZ0K3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudCkubWFyZ2luTGVmdC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoU2xpZGVNYXJnaW49TnVtYmVyKGVhY2hTbGlkZU1hcmdpbikqMiBcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHNcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHB4VG9TY3JsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgcHhUb1NjcmxSaWdodCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIC8vIENhcmRzIGNvbnRhaW5lciB3aWR0aCBnZW5lcmFsbHkgZXF1YWwgdG8gZWFjaHNsaWRlcndpZHRoKnRvdGFsbnVtYmVyb2ZzbGlkZXNcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lcldpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgIC8vIENhcHR1cmUgbmV4dCBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5leHRCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBwcmV2aW91cyBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF1cclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ25leHQnKSlcclxuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2xpY2tIYW5kbGVyKCdwcmV2JykpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgaW5pdFZhbHVlcygpXHJcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nXHJcbiAgICAgICAgICAgIG5leHRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jbGlja0hhbmRsZXIoJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmNsaWNrSGFuZGxlcigncHJldicpKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2libGVEaXZcIiByZWY9e3NsaWNrU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLkNzbGlja30+XHJcbiAgICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBwcmV2ICd9PlByZXY8L2k+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZGl2Q2FyZHNDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWNrKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxJbWcgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlja1NsaWRlcjtcclxuICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuLy8gZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbi8vICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgIHB4VG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBweFRvU2NybExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cocHhUb1NjcmxSaWdodCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKHB4VG9TY3JsUmlnaHQsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHB4VG9TY3JsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfWVsc2UgaWYgKGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoPCAtcHhUb1NjcmxSaWdodCkge1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuLy8gICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3B4VG9TY3JsUmlnaHR9cHgpYFxyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBweFRvU2NybExlZnQtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IHB4VG9TY3JsUmlnaHQtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHhUb1NjcmxMZWZ0KVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHhUb1NjcmxMZWZ0PjApe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3B4VG9TY3JsTGVmdH1weClgO1xyXG4vLyAgICAgICAgICAgICBweFRvU2NybFJpZ2h0ID1weFRvU2NybFJpZ2h0ICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBweFRvU2NybExlZnQgPSBweFRvU2NybExlZnQrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcbi8vIC8vIH1cclxuLy8gY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDsiXSwic291cmNlUm9vdCI6IiJ9