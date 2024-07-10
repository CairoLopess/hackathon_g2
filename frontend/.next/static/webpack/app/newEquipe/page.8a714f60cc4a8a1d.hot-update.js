"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/newEquipe/page",{

/***/ "(app-pages-browser)/./src/app/newEquipe/page.tsx":
/*!************************************!*\
  !*** ./src/app/newEquipe/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewEquipe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction NewEquipe() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const makePostRequest = async ()=>{\n        if (equipes.find((equipe)=>equipe.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {\n            alert(\"Nome ja existente, tente outro\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/equipes\", {\n                name: name\n            });\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-gray-900  my-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col gap-3 p-12 items-center w-[50%] bg-gray-700 rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3 items-center bg-gray-700  text-green-500 justify-center w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Nome da equipe\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Nome\",\n                            className: \"border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row gap-6 items-center justify-center w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: makePostRequest,\n                            className: \"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded\",\n                            children: \"Cadastrar equipe\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>router.push(\"/\"),\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newEquipe\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(NewEquipe, \"7fFVVYJ0Bka3o9BSIRoGrF6nMbo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewEquipe;\nvar _c;\n$RefreshReg$(_c, \"NewEquipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3RXF1aXBlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1c7QUFDUDtBQUl0QixTQUFTRzs7SUFDdEIsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUdqQyxNQUFNTyxrQkFBa0I7UUFDdEIsSUFBSUMsUUFBUUMsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9MLElBQUksQ0FBQ00saUJBQWlCLE9BQU9OLEtBQUtNLGlCQUFpQixLQUFLO1lBQzFGQyxNQUFNO1lBQ047UUFDRjtRQUNBLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1YLHFEQUFHQSxDQUFDWSxJQUFJLENBQUMsWUFBWTtnQkFDMUNULE1BQU1BO1lBQ1I7WUFFQVUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxhQUFhSCxTQUFTSSxJQUFJO1lBQ3RDYixPQUFPYyxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEosUUFBUUksS0FBSyxDQUFDLFNBQVNBO1FBQ3pCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTs7OEJBQ2QsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xwQixNQUFLOzRCQUNMcUIsT0FBT3JCOzRCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsUUFBUXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDdkNJLGFBQVk7NEJBQ1pULFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFJZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDVTs0QkFDQ04sTUFBSzs0QkFDTE8sU0FBU3pCOzRCQUNUYyxXQUFVO3NDQUNYOzs7Ozs7c0NBSUQsOERBQUNVOzRCQUNDTixNQUFLOzRCQUNMTyxTQUFTLElBQU01QixPQUFPYyxJQUFJLENBQUM7NEJBQzNCRyxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBMUR3QmxCOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL25ld0VxdWlwZS9wYWdlLnRzeD8xNzk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgSUVxdWlwZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lFcXVpcGVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdFcXVpcGUoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG1ha2VQb3N0UmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChlcXVpcGVzLmZpbmQoKGVxdWlwZSkgPT4gZXF1aXBlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKSkge1xyXG4gICAgICBhbGVydChcIk5vbWUgamEgZXhpc3RlbnRlLCB0ZW50ZSBvdXRyb1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9lcXVpcGVzXCIsIHtcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGFkb3MgZW52aWFkb3MgY29tIHN1Y2Vzc28hXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3Bvc3RhOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm86XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS05MDAgIG15LThcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBwLTEyIGl0ZW1zLWNlbnRlciB3LVs1MCVdIGJnLWdyYXktNzAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgaXRlbXMtY2VudGVyIGJnLWdyYXktNzAwICB0ZXh0LWdyZWVuLTUwMCBqdXN0aWZ5LWNlbnRlciB3LVs5NyVdXCI+XHJcbiAgICAgICAgICA8bGFiZWw+Tm9tZSBkYSBlcXVpcGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB3LVs1MCVdIHJvdW5kZWQtbWQgcHgtMyBweS0yIG1iLTMgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzk3JV1cIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e21ha2VQb3N0UmVxdWVzdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhZGFzdHJhciBlcXVpcGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXBpIiwiTmV3RXF1aXBlIiwicm91dGVyIiwibmFtZSIsInNldE5hbWUiLCJtYWtlUG9zdFJlcXVlc3QiLCJlcXVpcGVzIiwiZmluZCIsImVxdWlwZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiYWxlcnQiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInB1c2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newEquipe/page.tsx\n"));

/***/ })

});