self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/slickSlider.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/slickSlider.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/icons/left.svg */ "./public/icons/left.svg");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slickSlider_slick__23xUE {\n  margin: 0;\n  display: flex;\n  -webkit-transition: -webkit-transform ease-in-out .5s;\n  transition: -webkit-transform ease-in-out .5s;\n  transition: transform ease-in-out .5s;\n  transition: transform ease-in-out .5s, -webkit-transform ease-in-out .5s; }\n\n.slickSlider_Cslick__P0-Fs {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  display: flex;\n  align-items: center; }\n\n.slickSlider_button__21A5N {\n  z-index: 1;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  background-color: white;\n  color: white;\n  border-radius: 2px;\n  padding: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: cover; }\n\ni.slickSlider_button__21A5N ~ .slickSlider_button__21A5N {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  right: 0;\n  left: auto;\n  left: initial; }\n\n.slickSlider_Img__23dQe {\n  display: block;\n  margin: 0 20px; }\n\n.slickSlider_Img__23dQe img {\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.slickSlider_Img__23dQe:first-child {\n  margin-left: 0; }\n\n.slickSlider_Img__23dQe:last-child {\n  margin-right: 0; }\n", "",{"version":3,"sources":["webpack://slickSlider.module.scss"],"names":[],"mappings":"AAGA;EAEG,SAAS;EACT,aAAY;EAGZ,qDAAqC;EAArC,6CAAqC;EAArC,qCAAqC;EAArC,wEAAqC,EAAA;;AAGxC;EAEI,kBAAiB;EACjB,gBAAe;EACf,SAAS;EACT,aAAY;EACZ,mBAAmB,EAAA;;AAEvB;EACI,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,OAAO;EACP,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,YAAW;EACX,eAAe;EACf,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,yDAAgD;EAChD,4BAA4B;EAC5B,0BAA0B,EAAA;;AAE9B;EACI,yDAAgD;EAChD,QAAQ;EACR,UAAY;EAAZ,aAAY,EAAA;;AAEhB;EACI,cAAa;EACb,cAAc,EAAA;;AAElB;EACI,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB,EAAA;;AAGrB;EACI,cAAc,EAAA;;AAElB;EACI,eAAe,EAAA","sourcesContent":["// :global body{\r\n//     margin:0;\r\n// }\r\n.slick{\r\n   \r\n   margin: 0;\r\n   display:flex;\r\n//    overflow: hidden;\r\n//    gap: 10px;\r\n   transition: transform ease-in-out .5s;\r\n   \r\n}\r\n.Cslick{\r\n    // justify-content: center;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin: 0;\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n.button{\r\n    z-index: 1;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0;\r\n    background-color: white;\r\n    color: white;\r\n    border-radius: 2px;\r\n    padding:4px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    background-image:url('../public/icons/left.svg');\r\n    background-repeat: no-repeat;\r\n    background-position: cover;\r\n}\r\ni.button~.button{\r\n    background-image:url('../public/icons/left.svg');\r\n    right: 0; \r\n    left:initial;\r\n}\r\n.Img{\r\n    display:block;\r\n    margin: 0 20px;\r\n}\r\n.Img img{\r\n    user-select: none;\r\n    \r\n}\r\n.Img:first-child{\r\n    margin-left: 0;\r\n}\r\n.Img:last-child{\r\n    margin-right: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"slick": "slickSlider_slick__23xUE",
	"Cslick": "slickSlider_Cslick__P0-Fs",
	"button": "slickSlider_button__21A5N",
	"Img": "slickSlider_Img__23dQe"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHLHNDQUFzQyxtQkFBTyxDQUFDLHVIQUF5RDtBQUN2RyxvQ0FBb0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGNBQWMsa0JBQWtCLDBEQUEwRCxrREFBa0QsMENBQTBDLDZFQUE2RSxFQUFFLGdDQUFnQyx1QkFBdUIscUJBQXFCLGNBQWMsa0JBQWtCLHdCQUF3QixFQUFFLGdDQUFnQyxlQUFlLDBCQUEwQix1QkFBdUIsWUFBWSw0QkFBNEIsaUJBQWlCLHVCQUF1QixpQkFBaUIsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsOEJBQThCLHNFQUFzRSxpQ0FBaUMsK0JBQStCLEVBQUUsOERBQThELHNFQUFzRSxhQUFhLGVBQWUsa0JBQWtCLEVBQUUsNkJBQTZCLG1CQUFtQixtQkFBbUIsRUFBRSxpQ0FBaUMsOEJBQThCLDhCQUE4Qiw4QkFBOEIsRUFBRSx5Q0FBeUMsbUJBQW1CLEVBQUUsd0NBQXdDLG9CQUFvQixFQUFFLFNBQVMsd0ZBQXdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxtREFBbUQsb0JBQW9CLFFBQVEsV0FBVyx3QkFBd0Isb0JBQW9CLDJCQUEyQixvQkFBb0IsNkNBQTZDLFlBQVksWUFBWSxtQ0FBbUMsMEJBQTBCLHdCQUF3QixrQkFBa0IscUJBQXFCLDRCQUE0QixLQUFLLFlBQVksbUJBQW1CLDhCQUE4QiwyQkFBMkIsZ0JBQWdCLGdDQUFnQyxxQkFBcUIsMkJBQTJCLG9CQUFvQix3QkFBd0IsMEJBQTBCLHlEQUF5RCxxQ0FBcUMsbUNBQW1DLEtBQUsscUJBQXFCLHlEQUF5RCxpQkFBaUIsc0JBQXNCLEtBQUssU0FBUyxzQkFBc0IsdUJBQXVCLEtBQUssYUFBYSwwQkFBMEIsYUFBYSxxQkFBcUIsdUJBQXVCLEtBQUssb0JBQW9CLHdCQUF3QixLQUFLLHVCQUF1QjtBQUM1a0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuNzExZWE3OWVhOTk5OGQ0YzI0ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vcHVibGljL2ljb25zL2xlZnQuc3ZnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlja1NsaWRlcl9zbGlja19fMjN4VUUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgLjVzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgLjVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAuNXMsIC13ZWJraXQtdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41czsgfVxcblxcbi5zbGlja1NsaWRlcl9Dc2xpY2tfX1AwLUZzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5zbGlja1NsaWRlcl9idXR0b25fXzIxQTVOIHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNvdmVyOyB9XFxuXFxuaS5zbGlja1NsaWRlcl9idXR0b25fXzIxQTVOIH4gLnNsaWNrU2xpZGVyX2J1dHRvbl9fMjFBNU4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogYXV0bztcXG4gIGxlZnQ6IGluaXRpYWw7IH1cXG5cXG4uc2xpY2tTbGlkZXJfSW1nX18yM2RRZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCAyMHB4OyB9XFxuXFxuLnNsaWNrU2xpZGVyX0ltZ19fMjNkUWUgaW1nIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbi5zbGlja1NsaWRlcl9JbWdfXzIzZFFlOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLnNsaWNrU2xpZGVyX0ltZ19fMjNkUWU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2xpY2tTbGlkZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFFRyxTQUFTO0VBQ1QsYUFBWTtFQUdaLHFEQUFxQztFQUFyQyw2Q0FBcUM7RUFBckMscUNBQXFDO0VBQXJDLHdFQUFxQyxFQUFBOztBQUd4QztFQUVJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLFNBQVM7RUFDVCxhQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIseURBQWdEO0VBQ2hELDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSx5REFBZ0Q7RUFDaEQsUUFBUTtFQUNSLFVBQVk7RUFBWixhQUFZLEVBQUE7O0FBRWhCO0VBQ0ksY0FBYTtFQUNiLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx5QkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gOmdsb2JhbCBib2R5e1xcclxcbi8vICAgICBtYXJnaW46MDtcXHJcXG4vLyB9XFxyXFxuLnNsaWNre1xcclxcbiAgIFxcclxcbiAgIG1hcmdpbjogMDtcXHJcXG4gICBkaXNwbGF5OmZsZXg7XFxyXFxuLy8gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4vLyAgICBnYXA6IDEwcHg7XFxyXFxuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IC41cztcXHJcXG4gICBcXHJcXG59XFxyXFxuLkNzbGlja3tcXHJcXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYnV0dG9ue1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOjRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL3B1YmxpYy9pY29ucy9sZWZ0LnN2ZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb3ZlcjtcXHJcXG59XFxyXFxuaS5idXR0b25+LmJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL3B1YmxpYy9pY29ucy9sZWZ0LnN2ZycpO1xcclxcbiAgICByaWdodDogMDsgXFxyXFxuICAgIGxlZnQ6aW5pdGlhbDtcXHJcXG59XFxyXFxuLkltZ3tcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxyXFxufVxcclxcbi5JbWcgaW1ne1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5JbWc6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG4uSW1nOmxhc3QtY2hpbGR7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpY2tcIjogXCJzbGlja1NsaWRlcl9zbGlja19fMjN4VUVcIixcblx0XCJDc2xpY2tcIjogXCJzbGlja1NsaWRlcl9Dc2xpY2tfX1AwLUZzXCIsXG5cdFwiYnV0dG9uXCI6IFwic2xpY2tTbGlkZXJfYnV0dG9uX18yMUE1TlwiLFxuXHRcIkltZ1wiOiBcInNsaWNrU2xpZGVyX0ltZ19fMjNkUWVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9