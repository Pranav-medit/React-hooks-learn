self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/autoGapSlider.js":
/*!*************************************!*\
  !*** ./components/autoGapSlider.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSlider.js",
    _this = undefined,
    _s = $RefreshSig$();




var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function _c(_ref, childSliderCardRef) {
  var styleImg = _ref.styleImg,
      imgArr = _ref.imgArr;
  // let imageSlide = useRef(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' div div__sliderCard div__sliderCard--slideCalulate ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {},
          src: src.src,
          className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
});
_c2 = Img;

var AutoGapSlider = function AutoGapSlider() {
  _s();

  var imgArrData = [{
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
  }, {
    'src': 'https://picsum.photos/200/300',
    id: 11
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 12
  }, {
    'src': 'static/s1.jpg',
    id: 13
  }, {
    'src': 'static/s2.jpg',
    id: 14
  }, {
    'src': 'static/s3.jpg',
    id: 15
  }, {
    'src': 'static/s4.jpg',
    id: 16
  }, {
    'src': 'static/s5.jpg',
    id: 17
  }, {
    'src': 'static/s6.jpg',
    id: 18
  }, {
    'src': 'static/s7.jpg',
    id: 19
  }, {
    'src': 'static/s8.jpg',
    id: 20
  }, {
    'src': 'static/s9.jpg',
    id: 21
  }, {
    'src': 'static/s10.jpg',
    id: 22
  }, {
    'src': 'https://picsum.photos/200/300',
    id: 23
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 24
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 25
  }]; // Each slider card

  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var autoGapSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing next button

  var nextButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing prev button

  var prevButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData),
      imgArr = _useState[0],
      imgArrUpdt = _useState[1];

  var imageUpdateArr = imgArr;
  var id = 12;
  var timerId;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      slideMargin = _useState2[0],
      updateSlideMargin = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      translateValue = _useState3[0],
      updateTranslateValue = _useState3[1];

  var styleImg = {
    width: '200px',
    height: '300px',
    margin: "0 ".concat(slideMargin / 2, "px 0 ").concat(slideMargin / 2, "px")
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState4[0],
      du = _useState4[1]; // Initialize default values


  var sliderVisibleWidth = 0;
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var nextPxValueToScrl = 0;
  var prevPxValueToScrl = 0;
  var divCardsContainerTotalWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false; // Loadash throttler to throttle resize and if user clicks button many times 

  var throttle = lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle(function (func) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    func.apply(void 0, args);
  }, 600);

  var debounce = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    func.apply(void 0, args); // console.log('deibounc')
  }, 800);

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  var displayArrow = function displayArrow() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prev';
    var toDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (direction === 'prev') {
      if (!toDisplay) showLeftArrow(false);else showLeftArrow(true);
    } else {
      if (!toDisplay) showRightArrow(false);else showRightArrow(true);
    }
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

  var updateSliderArray = function updateSliderArray() {
    var newElement = [{
      'src': 'static/per1.jpg',
      id: id
    }, {
      'src': 'static/per2.jpg',
      id: id + 1
    }]; // imgArr.push(...newElement)

    imageUpdateArr = imageUpdateArr.concat(newElement);
    imgArrUpdt(imageUpdateArr);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    id = id + 2; // // console.log(imgArrData)
    // clickHandler('next')
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    // divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth
    if (direction === 'next') {
      displayArrow('prev', true); // If reached end of slide return to first slide

      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth - slideMargin - 10 <= -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerTotalWidth + sliderVisibleWidth, "px)");
        updateTranslateValue(); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true; // updateSliderArray()
      } else {
        // If everything is right translate to next px value
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(nextPxValueToScrl, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      // End of slide cannot be reached by clicking previous button
      endOfSlide = false;

      if (prevPxValueToScrl > 0) {
        displayArrow('prev', false); // If slider is over left return to first slide and reset positions of scroll reference
        // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed

        resetSliderPosition();
      } else {
        displayArrow('prev', true); // If everything is right translate to prev px value

        divCardsContainer.current.style.cssText = "transform: translateX(".concat(prevPxValueToScrl, "px)"); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px

    sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlide = childSliderCardRef.current;
    var eachSlideMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = eachSlide.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll;
    slidesToScrollWidth = sliderVisibleWidth; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    displayArrow('prev', false);
    console.log("values inited");
  };

  var autoSliderMove = function autoSliderMove(timeout, autoplay) {
    // console.log("mouseleave")
    if (autoplay) {
      timerId = setInterval(function () {
        throttle(clickHandler, 'next');
      }, 100000000000000);
    }
  };

  var clearAutoSliderMove = function clearAutoSliderMove(timerId) {
    // console.log("mouseenter")
    if (timerId) {
      clearTimeout(timerId);
    }
  }; // useEffect for number of slides to show per div


  function setStyle(className, styleValue) {
    updateSlideMargin(styleValue);
  }

  function calculateMargin() {
    var minGapBetweenSlides = 10;
    var sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth;
    var eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    var slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    var marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    var marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    var marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setStyle('div__sliderCard--slideCalulate', marginPerSlide);
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    calculateMargin();
    initValues(); // displayContent(initvalues)

    autoSliderMove(2000, true); // sliderStyle.transform('400px')
    // Handle click event for both buttons

    nextButton.current.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevButton.current.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    autoGapSliderMainContainer.current.addEventListener('mouseenter', function () {
      return clearAutoSliderMove(timerId);
    });
    autoGapSliderMainContainer.current.addEventListener('mouseleave', function () {
      return autoSliderMove(1000, true);
    });
    window.addEventListener('resize', function () {
      debounce(function () {
        calculateMargin();
        initValues();
        resetSliderPosition();
      });
    });
    return function () {
      // Execute when unmounting (cleanup)
      nextButton.current.removeEventListener('click', function () {
        return throttle(clickHandler, 'next');
      });
      prevButton.current.removeEventListener('click', function () {
        return throttle(clickHandler, 'prev');
      });
      autoGapSliderMainContainer.current.removeEventListener('mouseenter', function () {
        return clearAutoSliderMove(timerId);
      });
      autoGapSliderMainContainer.current.removeEventListener('mouseleave', function () {
        return autoSliderMove(1000, true);
      });
      window.addEventListener('resize', function () {
        debounce(function () {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
      });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // console.log('Margin updated'+slideMargin);
    setTimeout(function () {
      return divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    }, 100);
  }, [slideMargin]);
  var touchStartPos = 0;

  var touchStartHandler = function touchStartHandler(e) {
    touchStartPos = e.changedTouches[0].clientX; // console.log(e.changedTouches[0].clientX)   
  };

  var touchEndHandler = function touchEndHandler(e) {
    var touchEndPos = e.changedTouches[0].clientX;
    if (touchEndPos === touchStartPos) return;
    if (touchEndPos - touchStartPos > 0) clickHandler('prev');else clickHandler('next');
  };

  var dragHandler = function dragHandler(e) {
    e.preventDefault();
  };

  var onImageLoad = function onImageLoad(image, isImgReady) {
    if (isImgReady) {
      image.classList.remove('loading');
    } else {
      image.classList.add('loading');
    }
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(function (image) {
      onImageLoad(image, false);
      image.addEventListener('dragstart', function (e) {
        return dragHandler(e);
      });
      image.addEventListener('load', function (e) {
        return onImageLoad(image, true);
      });
    });
    autoGapSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    }, {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    }, {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchmove', function (e) {
      console.log(e);
    }, {
      passive: true
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // autoGapSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      autoGapSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      autoGapSliderMainContainer.current.removeEventListener('touchend', function (e) {
        return touchEndHandler(e);
      }, {
        passive: true
      });
      images.forEach(function (image) {
        image.removeEventListener('dragstart', function (e) {
          return dragHandler(e);
        });
        image.removeEventListener('load', function (e) {
          return onImageLoad(e);
        });
      }); // autoGapSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
      // throttle(touchStartHandler,2000,e) 
    };
  }, []);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      leftArrowDisplay = _useState5[0],
      showLeftArrow = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      rightArrowDisplay = _useState6[0],
      showRightArrow = _useState6[1];

  var leftStyle = {
    display: leftArrowDisplay ? "inline-block" : "none"
  };
  var rightStyle = {
    display: rightArrowDisplay ? "inline-btranslateX(translateValue)lock" : "none"
  };
  var sliderStyle = {
    transform: "translateX(".concat(translateValue + 'px', ")") || 0
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "visibleDiv",
      ref: autoGapSliderMainContainer,
      className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CautoGap) + ' autoGapMainContainerDiv ',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: prevButton,
        style: leftStyle,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: divCardsContainer,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().autoGap) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: styleImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: nextButton,
        style: rightStyle,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(AutoGapSlider, "Cm8KxQeGA9/jPn5EVauQXynjimo=");

_c3 = AutoGapSlider;
/* harmony default export */ __webpack_exports__["default"] = (AutoGapSlider); // setTimeout(()=>{
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
// let items = document.getElementsByClassName(className);
// for (var i=0; i < items.length; i++) {
//   if (i+1===(items.length))items[i].style.marginRight = 'auto'
// }
// initValues()
// async function  setStyle(className, styleValue) {
//     await updateSlideMargin(styleValue);
//     initValues()
// }

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$forwardRef");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "AutoGapSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLmpzIl0sIm5hbWVzIjpbIkltZyIsImZvcndhcmRSZWYiLCJjaGlsZFNsaWRlckNhcmRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwiaWQiLCJBdXRvR2FwU2xpZGVyIiwiaW1nQXJyRGF0YSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwiYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsInVzZVN0YXRlIiwiaW1nQXJyVXBkdCIsImltYWdlVXBkYXRlQXJyIiwidGltZXJJZCIsInNsaWRlTWFyZ2luIiwidXBkYXRlU2xpZGVNYXJnaW4iLCJ0cmFuc2xhdGVWYWx1ZSIsInVwZGF0ZVRyYW5zbGF0ZVZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkdW1teSIsImR1Iiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybCIsInByZXZQeFZhbHVlVG9TY3JsIiwiZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIiwiZW5kT2ZTbGlkZSIsInRocm90dGxlIiwiXyIsImZ1bmMiLCJhcmdzIiwiZGVib3VuY2UiLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiY3VycmVudCIsInN0eWxlIiwiY3NzVGV4dCIsImRpc3BsYXlBcnJvdyIsIm9mZnNldFdpZHRoIiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5Iiwic2hvd0xlZnRBcnJvdyIsInNob3dSaWdodEFycm93IiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJ1cGRhdGVTbGlkZXJBcnJheSIsIm5ld0VsZW1lbnQiLCJjb25jYXQiLCJjbGlja0hhbmRsZXIiLCJpbml0VmFsdWVzIiwiZWFjaFNsaWRlIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2xpY2UiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYXV0b1NsaWRlck1vdmUiLCJ0aW1lb3V0IiwiYXV0b3BsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFyQXV0b1NsaWRlck1vdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRTdHlsZSIsImNsYXNzTmFtZSIsInN0eWxlVmFsdWUiLCJjYWxjdWxhdGVNYXJnaW4iLCJtaW5HYXBCZXR3ZWVuU2xpZGVzIiwic2xpZGVzUGVyVmlzaWJsZVdpZHRoIiwibWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJtYXJnaW5Ub1NldEluUHgiLCJtYXJnaW5QZXJTbGlkZSIsImNlaWwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwib25JbWFnZUxvYWQiLCJpbWFnZSIsImlzSW1nUmVhZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwicGFzc2l2ZSIsImxlZnRBcnJvd0Rpc3BsYXkiLCJyaWdodEFycm93RGlzcGxheSIsImxlZnRTdHlsZSIsImRpc3BsYXkiLCJyaWdodFN0eWxlIiwic2xpZGVyU3R5bGUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsTUFBQyxr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QUE4QyxrQkFBUSxFQUFFRDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBTUc7QUFBRyxXQUFHLEVBQUVZLFVBQVI7QUFBb0IsYUFBSyxFQUFFc0csVUFBM0I7QUFBdUMsaUJBQVMsRUFBRTdHLDBFQUFBLEdBQWMsUUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQVNBO0FBQUksUUFBRSxFQUFFQSx3RUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRBO0FBQUEsa0JBREo7QUFhSCxDQXpaRDs7R0FBTUUsYTs7TUFBQUEsYTtBQTJaTiwrREFBZUEsYUFBZixFLENBQ0c7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuYzhkNDBiZTNlZjI3MDgyNDM5ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXV0b0dhcFNsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKCh7c3R5bGVJbWcsaW1nQXJyfSxjaGlsZFNsaWRlckNhcmRSZWYpID0+e1xyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdBcnIubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nKycgZGl2IGRpdl9fc2xpZGVyQ2FyZCBkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtzcmMuaWR9IGxvYWRpbmc9J2xhenknIHN0eWxlPXt7fX0gc3JjPXtzcmMuc3JjfSAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBBdXRvR2FwU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nQXJyRGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6NCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo1LFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6NyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnLFxyXG4gICAgICAgICAgICBpZDoxMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8xMjAwLzIzMDAnLFxyXG4gICAgICAgICAgICBpZDoxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxNixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxNyxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxOSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcsXHJcbiAgICAgICAgICAgIGlkOjIzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEyMDAvMjMwMCcsXHJcbiAgICAgICAgICAgIGlkOjI0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEyMDAvMjMwMCcsXHJcbiAgICAgICAgICAgIGlkOjI1LFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIF1cclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTsgICBcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3QgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIEdyYWJiaW5nIG5leHQgYnV0dG9uXHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgICAvLyBHcmFiYmluZyBwcmV2IGJ1dHRvblxyXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW2ltZ0FycixpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FyckRhdGEpXHJcbiAgICBsZXQgaW1hZ2VVcGRhdGVBcnI9aW1nQXJyO1xyXG4gICAgbGV0IGlkID0gMTI7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IFtzbGlkZU1hcmdpbix1cGRhdGVTbGlkZU1hcmdpbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0cmFuc2xhdGVWYWx1ZSx1cGRhdGVUcmFuc2xhdGVWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCcsXHJcbiAgICAgICAgbWFyZ2luOmAwICR7c2xpZGVNYXJnaW4vMn1weCAwICR7c2xpZGVNYXJnaW4vMn1weGBcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcbiAgICAvLyBEZXRlY3QgaWYgd2UgcmVhY2hlZCBlbmQgb2YgdGhlIHNsaWRlc1xyXG4gICAgbGV0IGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgLy8gTG9hZGFzaCB0aHJvdHRsZXIgdG8gdGhyb3R0bGUgcmVzaXplIGFuZCBpZiB1c2VyIGNsaWNrcyBidXR0b24gbWFueSB0aW1lcyBcclxuICAgIGxldCB0aHJvdHRsZSA9IF8udGhyb3R0bGUoKGZ1bmMsLi4uYXJncyk9PiB7XHJcbiAgICAgICAgZnVuYyguLi5hcmdzKVxyXG4gICAgfSwgNjAwKTtcclxuICAgIGxldCBkZWJvdW5jZSA9IF8uZGVib3VuY2UoKGZ1bmMsLi4uYXJncyk9PiB7XHJcbiAgICAgICAgZnVuYyguLi5hcmdzKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZWlib3VuYycpXHJcbiAgICB9LCA4MDApO1xyXG4gICAgY29uc3QgcmVzZXRTbGlkZXJQb3NpdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIC8vIGRlZmF1bHQgc2xpZGVzVG9TY3JvbGxXaWR0aDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlBcnJvdz0oZGlyZWN0aW9uPSdwcmV2Jyx0b0Rpc3BsYXk9dHJ1ZSk9PntcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPT09J3ByZXYnKXtcclxuICAgICAgICAgICAgaWYgICghdG9EaXNwbGF5KXNob3dMZWZ0QXJyb3coZmFsc2UpXHJcbiAgICAgICAgICAgIGVsc2Ugc2hvd0xlZnRBcnJvdyh0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAgKCF0b0Rpc3BsYXkpc2hvd1JpZ2h0QXJyb3coZmFsc2UpXHJcbiAgICAgICAgICAgIGVsc2Ugc2hvd1JpZ2h0QXJyb3codHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyQXJyYXkgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkKzFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICAvLyBpbWdBcnIucHVzaCguLi5uZXdFbGVtZW50KVxyXG4gICAgICAgIGltYWdlVXBkYXRlQXJyID0gIGltYWdlVXBkYXRlQXJyLmNvbmNhdChuZXdFbGVtZW50KVxyXG4gICAgICAgIGltZ0FyclVwZHQoaW1hZ2VVcGRhdGVBcnIgKTtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWQgPSBpZCsyO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGltZ0FyckRhdGEpXHJcbiAgICAgICAgLy8gY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgcmVhY2hlZCBlbmQgb2Ygc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgICAgIGlmKGVuZE9mU2xpZGUpeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSAyMzYwOyBhbmQgc2xpZGVyVmlzaWJsZVdpZHRoID0gMTMzNiBhbmQgbmV4dFB4VmFsdWVUb1NjcmwgPSAtMTQ0MCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJWaXNpYmxlV2lkdGggaXMgc2xpZGVyIHdpZHRoIHdoaWNoIGlzIHZpc2libGUgdG8gdXNlclxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIGlzIHRvdGFsIHdpZHRoIG9mIGNvbnRhaW5lciBob2xkaW5nIGNhcmRzID0gIHZpc2libGUgYXJlYStoaWRkZW4gYXJlYVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoKGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGgtc2xpZGVNYXJnaW4tMTApPD0gLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUcmFuc2xhdGVWYWx1ZSgpXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVNsaWRlckFycmF5KClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBuZXh0IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAvLyBFbmQgb2Ygc2xpZGUgY2Fubm90IGJlIHJlYWNoZWQgYnkgY2xpY2tpbmcgcHJldmlvdXMgYnV0dG9uXHJcbiAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIHByZXYgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gSWYgc2xpZGVyIGhhcyBtYXJnaW4gKHNwYWNlIGJldHdlZW4gc2xpZGVyIGNhcmRzIGlmIHNsaWRlcnMgYXJlIHRvdWNoIHRvIGVhY2ggb3RoZXIgdGhlbiBpdCBoYXMgbm8gbWFyZ2luKS0gXHJcbiAgICAgICAgLy8gLWl0IGlzIHJlcXVpcmVkIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBkb2VzIHNsaWRlciBzY3JvbGxzXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZSA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50XHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZU1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVhY2hTbGlkZSkubWFyZ2luUmlnaHQuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIGFuZCBtdWx0aXBseSBpdCBieSB0d28gYmVjYXVzZSBtYXJnaW4gaXMgYXBwbGllZCBvbiBib3RoIHNpZGVzXHJcbiAgICAgICAgZWFjaFNsaWRlTWFyZ2luPU51bWJlcihlYWNoU2xpZGVNYXJnaW4pKjJcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gZWFjaFNsaWRlLm9mZnNldFdpZHRoK2VhY2hTbGlkZU1hcmdpbjtcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGwgPSAxXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGwgaW4gcGl4ZWxzIGV4OiBpZiAyNDBweFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlcyBpbmNsdWRpbmcgbWFyZ2luIGV4OiBzYXkgMjA5MHB4XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZXMgaW5pdGVkXCIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMDAwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJBdXRvU2xpZGVyTW92ZT0odGltZXJJZCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXJcIilcclxuICAgICAgICBpZih0aW1lcklkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciBudW1iZXIgb2Ygc2xpZGVzIHRvIHNob3cgcGVyIGRpdlxyXG4gICAgZnVuY3Rpb24gIHNldFN0eWxlKGNsYXNzTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4gICAgICAgIHVwZGF0ZVNsaWRlTWFyZ2luKHN0eWxlVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlTWFyZ2luKCl7XHJcbiAgICAgICAgY29uc3QgbWluR2FwQmV0d2VlblNsaWRlcyA9IDEwXHJcbiAgICAgICAgY29uc3Qgc2xpZGVyVmlzaWJsZVdpZHRoID0gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCBlYWNoU2xpZGVXaWR0aCA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBjb25zdCBzbGlkZXNQZXJWaXNpYmxlV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGgvKGVhY2hTbGlkZVdpZHRoKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUGVyY2VudGFnZSA9IHNsaWRlc1BlclZpc2libGVXaWR0aCAtIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlzaWJsZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QeCA9ICgobWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UpKmVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblBlclNsaWRlID0gKG1hcmdpblRvU2V0SW5QeC8oTWF0aC5jZWlsKHNsaWRlc1BlclZpc2libGVXaWR0aCktMSkpK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBzZXRTdHlsZSgnZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlJyxtYXJnaW5QZXJTbGlkZSlcclxuICAgIH1cclxuICAgIC8vIFVzZWVmZmVjdCBmb3Igc2xpZGVyIG5leHQgYW5kIHByZXYgYnV0dG9uXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgY2FsY3VsYXRlTWFyZ2luKClcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICAvLyBkaXNwbGF5Q29udGVudChpbml0dmFsdWVzKVxyXG4gICAgICAgIGF1dG9TbGlkZXJNb3ZlKDIwMDAsdHJ1ZSlcclxuICAgICAgICAvLyBzbGlkZXJTdHlsZS50cmFuc2Zvcm0oJzQwMHB4JylcclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdXR0b24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgIHByZXZCdXR0b24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIHVubW91bnRpbmcgKGNsZWFudXApXHJcbiAgICAgICAgICAgIG5leHRCdXR0b24uY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgICAgICBwcmV2QnV0dG9uLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSkgICAgICAgXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFyZ2luIHVwZGF0ZWQnK3NsaWRlTWFyZ2luKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLDEwMClcclxuICAgIH0sW3NsaWRlTWFyZ2luXSlcclxuICAgIGxldCB0b3VjaFN0YXJ0UG9zID0wO1xyXG4gICAgY29uc3QgdG91Y2hTdGFydEhhbmRsZXIgPSAoZSk9PntcclxuICAgICAgICB0b3VjaFN0YXJ0UG9zPWUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkltYWdlTG9hZCA9IChpbWFnZSxpc0ltZ1JlYWR5KSA9PntcclxuICAgICAgICBpZiAoaXNJbWdSZWFkeSl7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e1xyXG4gICAgICAgICAgICBvbkltYWdlTG9hZChpbWFnZSxmYWxzZSlcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChpbWFnZSx0cnVlKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSApXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+e2NvbnNvbGUubG9nKGUpfSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICAvLyBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgIC8vIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIC8vIHRocm90dGxlKHRvdWNoU3RhcnRIYW5kbGVyLDIwMDAsZSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IFtsZWZ0QXJyb3dEaXNwbGF5LHNob3dMZWZ0QXJyb3ddPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtyaWdodEFycm93RGlzcGxheSxzaG93UmlnaHRBcnJvd109IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgbGVmdFN0eWxlID0ge2Rpc3BsYXk6bGVmdEFycm93RGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwifVxyXG4gICAgY29uc3QgcmlnaHRTdHlsZSA9IHtkaXNwbGF5OnJpZ2h0QXJyb3dEaXNwbGF5P1wiaW5saW5lLWJ0cmFuc2xhdGVYKHRyYW5zbGF0ZVZhbHVlKWxvY2tcIjpcIm5vbmVcIn1cclxuICAgIGNvbnN0IHNsaWRlclN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVWYWx1ZSsncHgnfSlgIHx8ICcwJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGlkPVwidmlzaWJsZURpdlwiIHJlZj17YXV0b0dhcFNsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5DYXV0b0dhcCArICcgYXV0b0dhcE1haW5Db250YWluZXJEaXYgJ30+XHJcbiAgICAgICAgICAgIDxpIHJlZj17cHJldkJ1dHRvbn0gc3R5bGU9e2xlZnRTdHlsZX0gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgIHJlZj17ZGl2Q2FyZHNDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF1dG9HYXArICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gaW1nQXJyPXtpbWdBcnJ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgcmVmPXtuZXh0QnV0dG9ufSBzdHlsZT17cmlnaHRTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwICBpZD17c3R5bGVzWydpZGVhJ119ID5oZXk8L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b0dhcFNsaWRlcjtcclxuICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuLy8gZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbi8vICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKVxyXG4vLyAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpZihuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZSBpZiAoZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGg8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGhcclxuLy8gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcmV2UHhWYWx1ZVRvU2NybClcclxuLy8gICAgICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gLy8gfVxyXG4vLyBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG5cclxuLy8gbGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4vLyBmb3IgKHZhciBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgIGlmIChpKzE9PT0oaXRlbXMubGVuZ3RoKSlpdGVtc1tpXS5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJ1xyXG4vLyB9XHJcblxyXG4vLyBpbml0VmFsdWVzKClcclxuLy8gYXN5bmMgZnVuY3Rpb24gIHNldFN0eWxlKGNsYXNzTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4vLyAgICAgYXdhaXQgdXBkYXRlU2xpZGVNYXJnaW4oc3R5bGVWYWx1ZSk7XHJcblxyXG4vLyAgICAgaW5pdFZhbHVlcygpXHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9