"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/newAvaliador/page",{

/***/ "(app-pages-browser)/./src/services/firebase/firebaseConfiguration.ts":
/*!********************************************************!*\
  !*** ./src/services/firebase/firebaseConfiguration.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: function() { return /* binding */ app; },\n/* harmony export */   firebase_app: function() { return /* binding */ firebase_app; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"(app-pages-browser)/./node_modules/firebase/analytics/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCl85rTHYss4BsKS0uD6r3aqYRSWv-Fa7g\",\n    authDomain: \"hackathon-g2-c9ab2.firebaseapp.com\",\n    projectId: \"hackathon-g2-c9ab2\",\n    storageBucket: \"hackathon-g2-c9ab2.appspot.com\",\n    messagingSenderId: \"859190410387\",\n    appId: \"1:859190410387:web:1d1a6e57ad4fa0a070a166\",\n    measurementId: \"G-7PJDHH97S4\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\nconst auth = getAuth(app);\nlet firebase_app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9maXJlYmFzZS9maXJlYmFzZUNvbmZpZ3VyYXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHVEQUF1RDtBQUNEO0FBQ0o7QUFHbEQsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1HLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCxvQ0FBNEM7SUFDeERLLFdBQVdMLG9CQUEyQztJQUN0RE8sZUFBZVAsZ0NBQStDO0lBQzlEUyxtQkFBbUJULGNBQW9EO0lBQ3ZFVyxPQUFPWCwyQ0FBdUM7SUFDOUNhLGVBQWViLGNBQStDO0FBQ2hFO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1lLE1BQU1wQiwyREFBYUEsQ0FBQ0c7QUFFMUIsTUFBTWtCLFlBQVluQixnRUFBWUEsQ0FBQ2tCO0FBRS9CLE1BQU1FLE9BQU9DLFFBQVFIO0FBQ3JCLElBQUlJLGVBQ0Z2QixxREFBT0EsR0FBR3dCLE1BQU0sS0FBSyxJQUFJekIsMkRBQWFBLENBQUNHLGtCQUFrQkYscURBQU9BLEVBQUUsQ0FBQyxFQUFFO0FBRTNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9maXJlYmFzZS9maXJlYmFzZUNvbmZpZ3VyYXRpb24udHM/Zjc4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcclxuXHJcblxyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQsXHJcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XHJcblxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5sZXQgZmlyZWJhc2VfYXBwID1cclxuICBnZXRBcHBzKCkubGVuZ3RoID09PSAwID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHBzKClbMF07XHJcblxyXG5leHBvcnQgeyBhcHAsIGZpcmViYXNlX2FwcH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHBzIiwiZ2V0QW5hbHl0aWNzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsImFwcCIsImFuYWx5dGljcyIsImF1dGgiLCJnZXRBdXRoIiwiZmlyZWJhc2VfYXBwIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/firebase/firebaseConfiguration.ts\n"));

/***/ })

});