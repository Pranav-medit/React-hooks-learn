self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/autoGapSlider.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/autoGapSlider.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/icons/left.svg */ "./public/icons/left.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../public/icons/right.svg */ "./public/icons/right.svg");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".autoGapSlider_autoGap__1PuLI {\n  margin: 0;\n  display: flex;\n  -webkit-transition: -webkit-transform ease-in-out .5s;\n  transition: -webkit-transform ease-in-out .5s;\n  transition: transform ease-in-out .5s;\n  transition: transform ease-in-out .5s, -webkit-transform ease-in-out .5s; }\n\n.autoGapSlider_CautoGap__153oE {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  display: flex;\n  align-items: center; }\n\n.autoGapSlider_button__1lZdB {\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n  display: inline-block;\n  position: absolute;\n  left: 10px;\n  background-color: white;\n  color: rgba(255, 255, 255, 0);\n  border-radius: 2px;\n  -webkit-box-shadow: 2px 2px 4px black;\n          box-shadow: 2px 2px 4px black;\n  padding: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  -webkit-transition: -webkit-transform .6s;\n  transition: -webkit-transform .6s;\n  transition: transform .6s;\n  transition: transform .6s, -webkit-transform .6s; }\n  .autoGapSlider_button__1lZdB:hover {\n    background-color: #ececec; }\n  .autoGapSlider_button__1lZdB:active {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    -webkit-transform: translateX(-16px);\n            transform: translateX(-16px); }\n  .autoGapSlider_button__1lZdB::before {\n    content: \" \";\n    position: absolute;\n    left: -2px;\n    top: -2px;\n    background-color: transparent;\n    display: inline-block;\n    color: red;\n    -webkit-transform: translate3d(-14px, -5000vw, 0);\n            transform: translate3d(-14px, -5000vw, 0);\n    width: 200%;\n    height: 10000vw;\n    font-weight: bold; }\n\ni.autoGapSlider_button__1lZdB ~ .autoGapSlider_button__1lZdB {\n  -webkit-box-shadow: -2px 2px 4px black;\n          box-shadow: -2px 2px 4px black;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  right: 10px;\n  left: auto;\n  left: initial; }\n  i.autoGapSlider_button__1lZdB ~ .autoGapSlider_button__1lZdB:active {\n    -webkit-transform: translateX(16px);\n            transform: translateX(16px); }\n\n.autoGapSlider_Img__LVIdm {\n  display: block;\n  margin: 0 40px 0 0;\n  border-radius: 8px; }\n\n.autoGapSlider_Img__LVIdm img {\n  border-radius: inherit;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: inherit;\n  -webkit-object-fit: cover;\n          object-fit: cover;\n  height: 100%; }\n\n.autoGapSlider_Img__LVIdm:first-child {\n  margin-left: 0; }\n\n@-webkit-keyframes autoGapSlider_goLeft__cFfPV {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(-40px);\n            transform: translateX(-40px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes autoGapSlider_goLeft__cFfPV {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(-40px);\n            transform: translateX(-40px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n#autoGapSlider_idea__3zcth {\n  color: red;\n  font-display: swap; }\n", "",{"version":3,"sources":["webpack://autoGapSlider.module.scss"],"names":[],"mappings":"AAGA;EAEG,SAAS;EACT,aAAY;EAGZ,qDAAqC;EAArC,6CAAqC;EAArC,qCAAqC;EAArC,wEAAqC,EAAA;;AAGxC;EAEI,kBAAiB;EACjB,gBAAe;EACf,SAAS;EACT,aAAY;EACZ,mBAAmB,EAAA;;AAEvB;EACI,WAAU;EACV,YAAW;EACX,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,UAAS;EACT,uBAAuB;EACvB,6BAA6B;EAC7B,kBAAkB;EAClB,qCAA6B;UAA7B,6BAA6B;EAC7B,YAAW;EACX,eAAe;EACf,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,yDAAgD;EAChD,4BAA4B;EAC5B,2BAA0B;EAC1B,yCAAyB;EAAzB,iCAAyB;EAAzB,yBAAyB;EAAzB,gDAAyB,EAAA;EAjB7B;IAmBQ,yBAAoC,EAAA;EAnB5C;IAsBQ,wBAAe;YAAf,gBAAe;IACf,oCAA4B;YAA5B,4BAA4B,EAAA;EAvBpC;IA4BQ,YAAY;IACZ,kBAAiB;IACjB,UAAS;IACT,SAAS;IACT,6BAA6B;IAE7B,qBAAqB;IACrB,UAAU;IACV,iDAAwC;YAAxC,yCAAwC;IACxC,WAAU;IACV,eAAc;IACd,iBAAiB,EAAA;;AAIzB;EACI,sCAA8B;UAA9B,8BAA8B;EAC9B,yDAAiD;EACjD,WAAW;EACX,UAAY;EAAZ,aAAY,EAAA;EAJhB;IAMQ,mCAA2B;YAA3B,2BAA2B,EAAA;;AAOnC;EAEI,cAAa;EACb,kBAAkB;EAClB,kBAAiB,EAAA;;AAErB;EACI,sBAAsB;EACtB,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,cAAa;EACb,yBAAgB;UAAhB,iBAAgB;EAChB,YAEJ,EAAA;;AACA;EACI,cAAc,EAAA;;AAKlB;EACI;IACE,gCAAwB;YAAxB,wBAAwB,EAAA;EAE1B;IACI,oCAA4B;YAA5B,4BAA4B,EAAA;EAEhC;IACE,gCAAwB;YAAxB,wBAAwB,EAAA,EAAA;;AAR9B;EACI;IACE,gCAAwB;YAAxB,wBAAwB,EAAA;EAE1B;IACI,oCAA4B;YAA5B,4BAA4B,EAAA;EAEhC;IACE,gCAAwB;YAAxB,wBAAwB,EAAA,EAAA;;AAG5B;EACI,UAAS;EACT,kBAAkB,EAAA","sourcesContent":["// :global body{\r\n//     margin:0;\r\n// }\r\n.autoGap{\r\n   \r\n   margin: 0;\r\n   display:flex;\r\n//    overflow: hidden;\r\n//    gap: 10px;\r\n   transition: transform ease-in-out .5s;\r\n   \r\n}\r\n.CautoGap{\r\n    // justify-content: center;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin: 0;\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n.button{\r\n    width:20px;\r\n    height:20px;\r\n    z-index: 1;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left:10px;\r\n    background-color: white;\r\n    color: rgba(255, 255, 255, 0);\r\n    border-radius: 2px;\r\n    box-shadow: 2px 2px 4px black;\r\n    padding:4px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    background-image:url('../public/icons/left.svg');\r\n    background-repeat: no-repeat;\r\n    background-position:center;\r\n    transition: transform .6s;\r\n    &:hover{\r\n        background-color: rgb(236, 236, 236);\r\n    }\r\n    &:active {\r\n        box-shadow:none;\r\n        transform: translateX(-16px);\r\n        // animation: goLeft 1s;\r\n        \r\n    }\r\n    &::before { \r\n        content: \" \";\r\n        position:absolute;\r\n        left:-2px;\r\n        top: -2px;\r\n        background-color: transparent;\r\n        // border: 2px solid red;\r\n        display: inline-block;\r\n        color: red;\r\n        transform: translate3d(-14px,-5000vw,0 );\r\n        width:200%;\r\n        height:10000vw;\r\n        font-weight: bold;\r\n        \r\n    }\r\n}\r\ni.button~.button{\r\n    box-shadow: -2px 2px 4px black;\r\n    background-image:url('../public/icons/right.svg');\r\n    right: 10px; \r\n    left:initial;\r\n    &:active{\r\n        transform: translateX(16px);\r\n    }\r\n    // &:active {\r\n    //     box-shadow:none;\r\n    //     transform: translateX(+44px);\r\n    // }\r\n}\r\n.Img{\r\n    // height: 400px !important;;\r\n    display:block;\r\n    margin: 0 40px 0 0;\r\n    border-radius:8px;\r\n}\r\n.Img img{\r\n    border-radius: inherit;\r\n    user-select: none;\r\n    width:inherit;\r\n    object-fit:cover;\r\n    height:100%\r\n    \r\n}\r\n.Img:first-child{\r\n    margin-left: 0;\r\n}\r\n.Img:last-child{\r\n    // margin-right: 80px!important;\r\n}\r\n@keyframes goLeft{\r\n    0%{\r\n      transform: translateX(0);\r\n    }\r\n    50%{\r\n        transform: translateX(-40px)\r\n    }\r\n    100%{\r\n      transform: translateX(0);\r\n    }\r\n  }\r\n  #idea{\r\n      color:red;\r\n      font-display: swap;\r\n  }\r\n \r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"autoGap": "autoGapSlider_autoGap__1PuLI",
	"CautoGap": "autoGapSlider_CautoGap__153oE",
	"button": "autoGapSlider_button__1lZdB",
	"Img": "autoGapSlider_Img__LVIdm",
	"idea": "autoGapSlider_idea__3zcth",
	"goLeft": "autoGapSlider_goLeft__cFfPV"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEcsc0NBQXNDLG1CQUFPLENBQUMsdUhBQXlEO0FBQ3ZHLG9DQUFvQyxtQkFBTyxDQUFDLHlEQUEwQjtBQUN0RSxvQ0FBb0MsbUJBQU8sQ0FBQywyREFBMkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsY0FBYyxrQkFBa0IsMERBQTBELGtEQUFrRCwwQ0FBMEMsNkVBQTZFLEVBQUUsb0NBQW9DLHVCQUF1QixxQkFBcUIsY0FBYyxrQkFBa0Isd0JBQXdCLEVBQUUsa0NBQWtDLGdCQUFnQixpQkFBaUIsZUFBZSwwQkFBMEIsdUJBQXVCLGVBQWUsNEJBQTRCLGtDQUFrQyx1QkFBdUIsMENBQTBDLDBDQUEwQyxpQkFBaUIsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsOEJBQThCLHNFQUFzRSxpQ0FBaUMsZ0NBQWdDLDhDQUE4QyxzQ0FBc0MsOEJBQThCLHFEQUFxRCxFQUFFLHdDQUF3QyxnQ0FBZ0MsRUFBRSx5Q0FBeUMsK0JBQStCLCtCQUErQiwyQ0FBMkMsMkNBQTJDLEVBQUUsMENBQTBDLHFCQUFxQix5QkFBeUIsaUJBQWlCLGdCQUFnQixvQ0FBb0MsNEJBQTRCLGlCQUFpQix3REFBd0Qsd0RBQXdELGtCQUFrQixzQkFBc0Isd0JBQXdCLEVBQUUsa0VBQWtFLDJDQUEyQywyQ0FBMkMsc0VBQXNFLGdCQUFnQixlQUFlLGtCQUFrQixFQUFFLHlFQUF5RSwwQ0FBMEMsMENBQTBDLEVBQUUsK0JBQStCLG1CQUFtQix1QkFBdUIsdUJBQXVCLEVBQUUsbUNBQW1DLDJCQUEyQiw4QkFBOEIsOEJBQThCLDhCQUE4QixtQkFBbUIsOEJBQThCLDhCQUE4QixpQkFBaUIsRUFBRSwyQ0FBMkMsbUJBQW1CLEVBQUUsb0RBQW9ELFFBQVEsdUNBQXVDLHVDQUF1QyxFQUFFLFNBQVMsMkNBQTJDLDJDQUEyQyxFQUFFLFVBQVUsdUNBQXVDLHVDQUF1QyxFQUFFLEVBQUUsNENBQTRDLFFBQVEsdUNBQXVDLHVDQUF1QyxFQUFFLFNBQVMsMkNBQTJDLDJDQUEyQyxFQUFFLFVBQVUsdUNBQXVDLHVDQUF1QyxFQUFFLEVBQUUsZ0NBQWdDLGVBQWUsdUJBQXVCLEVBQUUsU0FBUywwRkFBMEYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksWUFBWSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsT0FBTyxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGVBQWUsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGlCQUFpQixLQUFLLGdCQUFnQixNQUFNLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFlBQVksd0JBQXdCLE1BQU0sS0FBSyxZQUFZLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSx3QkFBd0IsTUFBTSxVQUFVLHFEQUFxRCxvQkFBb0IsUUFBUSxhQUFhLHdCQUF3QixvQkFBb0IsMkJBQTJCLG9CQUFvQiw2Q0FBNkMsWUFBWSxjQUFjLG1DQUFtQywwQkFBMEIsd0JBQXdCLGtCQUFrQixxQkFBcUIsNEJBQTRCLEtBQUssWUFBWSxtQkFBbUIsb0JBQW9CLG1CQUFtQiw4QkFBOEIsMkJBQTJCLGtCQUFrQixnQ0FBZ0Msc0NBQXNDLDJCQUEyQixzQ0FBc0Msb0JBQW9CLHdCQUF3QiwwQkFBMEIseURBQXlELHFDQUFxQyxtQ0FBbUMsa0NBQWtDLGdCQUFnQixpREFBaUQsU0FBUyxrQkFBa0IsNEJBQTRCLHlDQUF5QyxvQ0FBb0MscUJBQXFCLG1CQUFtQiw0QkFBNEIsOEJBQThCLHNCQUFzQixzQkFBc0IsMENBQTBDLHFDQUFxQyxrQ0FBa0MsdUJBQXVCLHFEQUFxRCx1QkFBdUIsMkJBQTJCLDhCQUE4QixxQkFBcUIsS0FBSyxxQkFBcUIsdUNBQXVDLDBEQUEwRCxvQkFBb0Isc0JBQXNCLGlCQUFpQix3Q0FBd0MsU0FBUyxxQkFBcUIsK0JBQStCLDRDQUE0QyxZQUFZLEtBQUssU0FBUyxxQ0FBcUMsc0JBQXNCLDJCQUEyQiwwQkFBMEIsS0FBSyxhQUFhLCtCQUErQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixnQ0FBZ0MscUJBQXFCLHVCQUF1QixLQUFLLG9CQUFvQix3Q0FBd0MsS0FBSyxzQkFBc0IsV0FBVyxtQ0FBbUMsU0FBUyxZQUFZLGlEQUFpRCxhQUFhLG1DQUFtQyxTQUFTLE9BQU8sWUFBWSxvQkFBb0IsNkJBQTZCLE9BQU8sNEJBQTRCO0FBQ3ZxTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuYjJlNWIzYmQxNjZlMmUyZWFmYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vcHVibGljL2ljb25zL2xlZnQuc3ZnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL3B1YmxpYy9pY29ucy9yaWdodC5zdmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hdXRvR2FwU2xpZGVyX2F1dG9HYXBfXzFQdUxJIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cztcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAuNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgLjVzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAuNXM7IH1cXG5cXG4uYXV0b0dhcFNsaWRlcl9DYXV0b0dhcF9fMTUzb0Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmF1dG9HYXBTbGlkZXJfYnV0dG9uX18xbFpkQiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC42cztcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC42cztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzLCAtd2Via2l0LXRyYW5zZm9ybSAuNnM7IH1cXG4gIC5hdXRvR2FwU2xpZGVyX2J1dHRvbl9fMWxaZEI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjOyB9XFxuICAuYXV0b0dhcFNsaWRlcl9idXR0b25fXzFsWmRCOmFjdGl2ZSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNnB4KTsgfVxcbiAgLmF1dG9HYXBTbGlkZXJfYnV0dG9uX18xbFpkQjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0ycHg7XFxuICAgIHRvcDogLTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNHB4LCAtNTAwMHZ3LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNHB4LCAtNTAwMHZ3LCAwKTtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIGhlaWdodDogMTAwMDB2dztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5pLmF1dG9HYXBTbGlkZXJfYnV0dG9uX18xbFpkQiB+IC5hdXRvR2FwU2xpZGVyX2J1dHRvbl9fMWxaZEIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IDJweCA0cHggYmxhY2s7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDRweCBibGFjaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICByaWdodDogMTBweDtcXG4gIGxlZnQ6IGF1dG87XFxuICBsZWZ0OiBpbml0aWFsOyB9XFxuICBpLmF1dG9HYXBTbGlkZXJfYnV0dG9uX18xbFpkQiB+IC5hdXRvR2FwU2xpZGVyX2J1dHRvbl9fMWxaZEI6YWN0aXZlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpOyB9XFxuXFxuLmF1dG9HYXBTbGlkZXJfSW1nX19MVklkbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCA0MHB4IDAgMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgfVxcblxcbi5hdXRvR2FwU2xpZGVyX0ltZ19fTFZJZG0gaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIC13ZWJraXQtb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmF1dG9HYXBTbGlkZXJfSW1nX19MVklkbTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBhdXRvR2FwU2xpZGVyX2dvTGVmdF9fY0ZmUFYge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGF1dG9HYXBTbGlkZXJfZ29MZWZ0X19jRmZQViB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbiNhdXRvR2FwU2xpZGVyX2lkZWFfXzN6Y3RoIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXV0b0dhcFNsaWRlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUVHLFNBQVM7RUFDVCxhQUFZO0VBR1oscURBQXFDO0VBQXJDLDZDQUFxQztFQUFyQyxxQ0FBcUM7RUFBckMsd0VBQXFDLEVBQUE7O0FBR3hDO0VBRUksa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsU0FBUztFQUNULGFBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFlBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIseURBQWdEO0VBQ2hELDRCQUE0QjtFQUM1QiwyQkFBMEI7RUFDMUIseUNBQXlCO0VBQXpCLGlDQUF5QjtFQUF6Qix5QkFBeUI7RUFBekIsZ0RBQXlCLEVBQUE7RUFqQjdCO0lBbUJRLHlCQUFvQyxFQUFBO0VBbkI1QztJQXNCUSx3QkFBZTtZQUFmLGdCQUFlO0lBQ2Ysb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBdkJwQztJQTRCUSxZQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxTQUFTO0lBQ1QsNkJBQTZCO0lBRTdCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaURBQXdDO1lBQXhDLHlDQUF3QztJQUN4QyxXQUFVO0lBQ1YsZUFBYztJQUNkLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseURBQWlEO0VBQ2pELFdBQVc7RUFDWCxVQUFZO0VBQVosYUFBWSxFQUFBO0VBSmhCO0lBTVEsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBOztBQU9uQztFQUVJLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksc0JBQXNCO0VBQ3RCLHlCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGNBQWE7RUFDYix5QkFBZ0I7VUFBaEIsaUJBQWdCO0VBQ2hCLFlBRUosRUFBQTs7QUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFLbEI7RUFDSTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUUxQjtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUVoQztJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQVI5QjtFQUNJO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBO0VBRTFCO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRWhDO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBRzVCO0VBQ0ksVUFBUztFQUNULGtCQUFrQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIDpnbG9iYWwgYm9keXtcXHJcXG4vLyAgICAgbWFyZ2luOjA7XFxyXFxuLy8gfVxcclxcbi5hdXRvR2Fwe1xcclxcbiAgIFxcclxcbiAgIG1hcmdpbjogMDtcXHJcXG4gICBkaXNwbGF5OmZsZXg7XFxyXFxuLy8gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4vLyAgICBnYXA6IDEwcHg7XFxyXFxuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cztcXHJcXG4gICBcXHJcXG59XFxyXFxuLkNhdXRvR2Fwe1xcclxcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idXR0b257XFxyXFxuICAgIHdpZHRoOjIwcHg7XFxyXFxuICAgIGhlaWdodDoyMHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDoxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6NHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vcHVibGljL2ljb25zL2xlZnQuc3ZnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzO1xcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgICB9XFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6bm9uZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XFxyXFxuICAgICAgICAvLyBhbmltYXRpb246IGdvTGVmdCAxcztcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuICAgICY6OmJlZm9yZSB7IFxcclxcbiAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0Oi0ycHg7XFxyXFxuICAgICAgICB0b3A6IC0ycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNHB4LC01MDAwdncsMCApO1xcclxcbiAgICAgICAgd2lkdGg6MjAwJTtcXHJcXG4gICAgICAgIGhlaWdodDoxMDAwMHZ3O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5pLmJ1dHRvbn4uYnV0dG9ue1xcclxcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCA0cHggYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi9wdWJsaWMvaWNvbnMvcmlnaHQuc3ZnJyk7XFxyXFxuICAgIHJpZ2h0OiAxMHB4OyBcXHJcXG4gICAgbGVmdDppbml0aWFsO1xcclxcbiAgICAmOmFjdGl2ZXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAvLyAmOmFjdGl2ZSB7XFxyXFxuICAgIC8vICAgICBib3gtc2hhZG93Om5vbmU7XFxyXFxuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzQ0cHgpO1xcclxcbiAgICAvLyB9XFxyXFxufVxcclxcbi5JbWd7XFxyXFxuICAgIC8vIGhlaWdodDogNDAwcHggIWltcG9ydGFudDs7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMCA0MHB4IDAgMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxyXFxufVxcclxcbi5JbWcgaW1ne1xcclxcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgd2lkdGg6aW5oZXJpdDtcXHJcXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OjEwMCVcXHJcXG4gICAgXFxyXFxufVxcclxcbi5JbWc6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG4uSW1nOmxhc3QtY2hpbGR7XFxyXFxuICAgIC8vIG1hcmdpbi1yaWdodDogODBweCFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZ29MZWZ0e1xcclxcbiAgICAwJXtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KVxcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAjaWRlYXtcXHJcXG4gICAgICBjb2xvcjpyZWQ7XFxyXFxuICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiBcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJhdXRvR2FwXCI6IFwiYXV0b0dhcFNsaWRlcl9hdXRvR2FwX18xUHVMSVwiLFxuXHRcIkNhdXRvR2FwXCI6IFwiYXV0b0dhcFNsaWRlcl9DYXV0b0dhcF9fMTUzb0VcIixcblx0XCJidXR0b25cIjogXCJhdXRvR2FwU2xpZGVyX2J1dHRvbl9fMWxaZEJcIixcblx0XCJJbWdcIjogXCJhdXRvR2FwU2xpZGVyX0ltZ19fTFZJZG1cIixcblx0XCJpZGVhXCI6IFwiYXV0b0dhcFNsaWRlcl9pZGVhX18zemN0aFwiLFxuXHRcImdvTGVmdFwiOiBcImF1dG9HYXBTbGlkZXJfZ29MZWZ0X19jRmZQVlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=