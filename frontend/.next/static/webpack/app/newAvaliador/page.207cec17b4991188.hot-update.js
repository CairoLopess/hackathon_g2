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

/***/ "(app-pages-browser)/./src/services/firebase/auth/signUp.ts":
/*!**********************************************!*\
  !*** ./src/services/firebase/auth/signUp.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\nconst signUp = async (email, password)=>{\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();\n    try {\n        // Cria o usuário no Firebase Authentication\n        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(auth, email, password);\n        // Aqui, você tem userCredential.user, mas o login automático não ocorre automaticamente\n        return userCredential;\n    } catch (error) {\n        throw error; // Lidar com erros aqui conforme necessário\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (signUp);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9maXJlYmFzZS9hdXRoL3NpZ25VcC50cyIsIm1hcHBpbmdzIjoiOztBQUE4RjtBQUU5RixNQUFNRSxTQUFTLE9BQU9DLE9BQWVDO0lBQ25DLE1BQU1DLE9BQU9MLHNEQUFPQTtJQUNwQixJQUFJO1FBQ0YsNENBQTRDO1FBQzVDLE1BQU1NLGlCQUFpQixNQUFNTCw2RUFBOEJBLENBQUNJLE1BQU1GLE9BQU9DO1FBRXpFLHdGQUF3RjtRQUV4RixPQUFPRTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU1BLE9BQU8sMkNBQTJDO0lBQzFEO0FBQ0Y7QUFFQSwrREFBZUwsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvZmlyZWJhc2UvYXV0aC9zaWduVXAudHM/NTRmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBdXRoLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIEF1dGgsIFVzZXJDcmVkZW50aWFsIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5jb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8VXNlckNyZWRlbnRpYWw+ID0+IHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDcmlhIG8gdXN1w6FyaW8gbm8gRmlyZWJhc2UgQXV0aGVudGljYXRpb25cclxuICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gICAgLy8gQXF1aSwgdm9jw6ogdGVtIHVzZXJDcmVkZW50aWFsLnVzZXIsIG1hcyBvIGxvZ2luIGF1dG9tw6F0aWNvIG7Do28gb2NvcnJlIGF1dG9tYXRpY2FtZW50ZVxyXG5cclxuICAgIHJldHVybiB1c2VyQ3JlZGVudGlhbDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7IC8vIExpZGFyIGNvbSBlcnJvcyBhcXVpIGNvbmZvcm1lIG5lY2Vzc8OhcmlvXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnblVwO1xyXG4iXSwibmFtZXMiOlsiZ2V0QXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25VcCIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRoIiwidXNlckNyZWRlbnRpYWwiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/firebase/auth/signUp.ts\n"));

/***/ })

});