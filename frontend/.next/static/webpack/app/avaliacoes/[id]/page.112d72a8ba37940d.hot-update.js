"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/avaliacoes/[id]/page",{

/***/ "(app-pages-browser)/./src/app/avaliacoes/[id]/page.tsx":
/*!******************************************!*\
  !*** ./src/app/avaliacoes/[id]/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function fetchEquipes() {\n    const result = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/equipes\");\n    return result.data;\n}\nasync function fetchAvaliadores() {\n    const result = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/avaliadores\");\n    return result.data;\n}\nfunction Home() {\n    var _equipes_find, _avaliadores_find;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { userAuth } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext)();\n    const [equipes, setEquipes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [avaliadores, setAvaliadores] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [avaliacao, setavAvaliacao] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        avaliador_id: \"\",\n        equipe_id: 0,\n        notas: {},\n        feita: false\n    });\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const { id } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getDados = async ()=>{\n            const equipesData = await fetchEquipes();\n            setEquipes(equipesData);\n            const avaliacaoData = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/avaliacoes/\".concat(id));\n            setavAvaliacao(avaliacaoData.data);\n            const avaliadoresData = await fetchAvaliadores();\n            setAvaliadores(avaliadoresData);\n        };\n        getDados();\n    }, []);\n    //   if (!userAuth || userAuth.uid !== avaliacao?.avaliador_id || avaliacao.feita) {\n    //     router.push(\"/signIn\");\n    //   }\n    console.log(avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.notas);\n    console.log(avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.avaliador_id);\n    console.log(userAuth === null || userAuth === void 0 ? void 0 : userAuth.uid);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-t to-black from-gray-700 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-gray-800 p-8 rounded-lg shadow-lg text-white-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4 text-green-500\",\n                    children: [\n                        \"Notas equipe \",\n                        (_equipes_find = equipes.find((equipe)=>equipe.id === (avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.equipe_id))) === null || _equipes_find === void 0 ? void 0 : _equipes_find.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl text-green-500 font-bold mb-4\",\n                    children: [\n                        \"Avaliador(a): \",\n                        (_avaliadores_find = avaliadores.find((avaliador)=>avaliador.id === (avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.avaliador_id))) === null || _avaliadores_find === void 0 ? void 0 : _avaliadores_find.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                Object.keys(avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.notas).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: key,\n                            className: \"block font-bold mb-2 text-green-500\",\n                            children: [\n                                key,\n                                \": Nota \",\n                                avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.notas[key]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                (userAuth === null || userAuth === void 0 ? void 0 : userAuth.uid) === (avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.avaliador_id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline\",\n                    onClick: ()=>router.push(\"/addNota/\".concat(avaliacao === null || avaliacao === void 0 ? void 0 : avaliacao.id)),\n                    children: \"Editar Nota\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline\",\n                    onClick: ()=>router.back(),\n                    children: \"Voltar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliacoes\\\\[id]\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"918LKOitaYU3ljwTyF9ps+Z1sn0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXZhbGlhY29lcy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNYO0FBRUo7QUFHc0I7QUFPOUQsZUFBZU07SUFDYixNQUFNQyxTQUFTLE1BQU1ILHFEQUFHQSxDQUFDSSxHQUFHLENBQUM7SUFDN0IsT0FBT0QsT0FBT0UsSUFBSTtBQUNwQjtBQUNBLGVBQWVDO0lBQ2IsTUFBTUgsU0FBUyxNQUFNSCxxREFBR0EsQ0FBQ0ksR0FBRyxDQUFDO0lBQzdCLE9BQU9ELE9BQU9FLElBQUk7QUFDcEI7QUFFZSxTQUFTRTtRQXdDQUMsZUFHQ0M7O0lBMUN2QixNQUFNQyxTQUFTZCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFZSxRQUFRLEVBQUUsR0FBR1Ysb0VBQWNBO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0ksV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ1UsYUFBYUksZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBZSxFQUFFO0lBQy9ELE1BQU0sQ0FBQ2UsV0FBV0MsZUFBZSxHQUFHaEIsK0NBQVFBLENBQWE7UUFDdkRpQixjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsT0FBTyxDQUFDO1FBQ1JDLE9BQU87SUFBSztJQUNkLE1BQU1DLFNBQXNCdkIsMERBQVNBO0lBQ3JDLE1BQU0sRUFBRXdCLEVBQUUsRUFBRSxHQUFHRDtJQUVmdEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsV0FBVztZQUNmLE1BQU1DLGNBQWMsTUFBTXJCO1lBQzFCVSxXQUFXVztZQUVYLE1BQU1DLGdCQUFnQixNQUFNeEIscURBQUdBLENBQUNJLEdBQUcsQ0FBQyxlQUFrQixPQUFIaUI7WUFDbkROLGVBQWVTLGNBQWNuQixJQUFJO1lBRWpDLE1BQU1vQixrQkFBa0IsTUFBTW5CO1lBQzlCTyxlQUFlWTtRQUNqQjtRQUVBSDtJQUNGLEdBQUcsRUFBRTtJQUVQLG9GQUFvRjtJQUNwRiw4QkFBOEI7SUFDOUIsTUFBTTtJQUVKSSxRQUFRQyxHQUFHLENBQUNiLHNCQUFBQSxnQ0FBQUEsVUFBV0ksS0FBSztJQUM1QlEsUUFBUUMsR0FBRyxDQUFDYixzQkFBQUEsZ0NBQUFBLFVBQVdFLFlBQVk7SUFDbkNVLFFBQVFDLEdBQUcsQ0FBQ2hCLHFCQUFBQSwrQkFBQUEsU0FBVWlCLEdBQUc7SUFFekIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQVFELFdBQVU7OzhCQUNqQiw4REFBQ0U7b0JBQUdGLFdBQVU7O3dCQUF5Qzt5QkFDdkN0QixnQkFBQUEsUUFBUXlCLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPYixFQUFFLE1BQUtQLHNCQUFBQSxnQ0FBQUEsVUFBV0csU0FBUyxnQkFBM0RULG9DQUFBQSxjQUE4RDJCLElBQUk7Ozs7Ozs7OEJBRWxGLDhEQUFDSDtvQkFBR0YsV0FBVTs7d0JBQXlDO3lCQUN0Q3JCLG9CQUFBQSxZQUFZd0IsSUFBSSxDQUFDLENBQUNHLFlBQWNBLFVBQVVmLEVBQUUsTUFBS1Asc0JBQUFBLGdDQUFBQSxVQUFXRSxZQUFZLGdCQUF4RVAsd0NBQUFBLGtCQUEyRTBCLElBQUk7Ozs7Ozs7Z0JBRy9GRSxPQUFPQyxJQUFJLENBQUN4QixzQkFBQUEsZ0NBQUFBLFVBQVdJLEtBQUssRUFBRXFCLEdBQUcsQ0FBQyxDQUFDQyxvQkFDbEMsOERBQUNYO3dCQUFjQyxXQUFVO2tDQUN2Qiw0RUFBQ1c7NEJBQU1DLFNBQVNGOzRCQUFLVixXQUFVOztnQ0FDNUJVO2dDQUFJO2dDQUFRMUIsc0JBQUFBLGdDQUFBQSxVQUFXSSxLQUFLLENBQUNzQixJQUFJOzs7Ozs7O3VCQUY1QkE7Ozs7OzhCQVFaLDhEQUFDRzs7Ozs7OEJBQ0QsOERBQUNBOzs7OztnQkFDQ2hDLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVWlCLEdBQUcsT0FBS2Qsc0JBQUFBLGdDQUFBQSxVQUFXRSxZQUFZLGtCQUMzQyw4REFBQzRCO29CQUNDQyxNQUFLO29CQUNMZixXQUFVO29CQUNWZ0IsU0FBUyxJQUFNcEMsT0FBT3FDLElBQUksQ0FBQyxZQUEwQixPQUFkakMsc0JBQUFBLGdDQUFBQSxVQUFXTyxFQUFFOzhCQUNyRDs7Ozs7MkJBR0Q7OEJBQ0EsOERBQUN1QjtvQkFDQ0MsTUFBSztvQkFDTGYsV0FBVTtvQkFDVmdCLFNBQVMsSUFBTXBDLE9BQU9zQyxJQUFJOzhCQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQTVFd0J6Qzs7UUFDUFgsc0RBQVNBO1FBQ0hLLGdFQUFjQTtRQVFQSixzREFBU0E7OztLQVZmVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F2YWxpYWNvZXMvW2lkXS9wYWdlLnRzeD84NzE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJRXF1aXBlIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9JRXF1aXBlXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBJQXZhbGlhY2FvIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9JQXZhbGlhY2FvXCI7XHJcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IElBdmFsaWFkb3IgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBdmFsaWFkb3JcIjtcdFxyXG5cclxuaW50ZXJmYWNlIElQb3N0UGFyYW1zIGV4dGVuZHMgUGFyYW1zIHtcclxuICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEVxdWlwZXMoKTogUHJvbWlzZTxJRXF1aXBlW10+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KFwiL2VxdWlwZXNcIik7XHJcbiAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQXZhbGlhZG9yZXMoKTogUHJvbWlzZTxJQXZhbGlhZG9yW10+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KFwiL2F2YWxpYWRvcmVzXCIpO1xyXG4gIHJldHVybiByZXN1bHQuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXJBdXRoIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtlcXVpcGVzLCBzZXRFcXVpcGVzXSA9IHVzZVN0YXRlPElFcXVpcGVbXT4oW10pO1xyXG4gIGNvbnN0IFthdmFsaWFkb3Jlcywgc2V0QXZhbGlhZG9yZXNdID0gdXNlU3RhdGU8SUF2YWxpYWRvcltdPihbXSk7XHJcbiAgY29uc3QgW2F2YWxpYWNhbywgc2V0YXZBdmFsaWFjYW9dID0gdXNlU3RhdGU8SUF2YWxpYWNhbz4oe1xyXG4gICAgYXZhbGlhZG9yX2lkOiBcIlwiLFxyXG4gICAgZXF1aXBlX2lkOiAwLFxyXG4gICAgbm90YXM6IHt9LFxyXG4gICAgZmVpdGE6IGZhbHNlfSk7XHJcbiAgY29uc3QgcGFyYW1zOiBJUG9zdFBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldERhZG9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBlcXVpcGVzRGF0YSA9IGF3YWl0IGZldGNoRXF1aXBlcygpO1xyXG4gICAgICBzZXRFcXVpcGVzKGVxdWlwZXNEYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGF2YWxpYWNhb0RhdGEgPSBhd2FpdCBhcGkuZ2V0KGAvYXZhbGlhY29lcy8ke2lkfWApO1xyXG4gICAgICBzZXRhdkF2YWxpYWNhbyhhdmFsaWFjYW9EYXRhLmRhdGEpO1xyXG5cclxuICAgICAgY29uc3QgYXZhbGlhZG9yZXNEYXRhID0gYXdhaXQgZmV0Y2hBdmFsaWFkb3JlcygpO1xyXG4gICAgICBzZXRBdmFsaWFkb3JlcyhhdmFsaWFkb3Jlc0RhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXREYWRvcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbi8vICAgaWYgKCF1c2VyQXV0aCB8fCB1c2VyQXV0aC51aWQgIT09IGF2YWxpYWNhbz8uYXZhbGlhZG9yX2lkIHx8IGF2YWxpYWNhby5mZWl0YSkge1xyXG4vLyAgICAgcm91dGVyLnB1c2goXCIvc2lnbkluXCIpO1xyXG4vLyAgIH1cclxuXHJcbiAgY29uc29sZS5sb2coYXZhbGlhY2FvPy5ub3Rhcyk7XHJcbiAgY29uc29sZS5sb2coYXZhbGlhY2FvPy5hdmFsaWFkb3JfaWQpO1xyXG4gIGNvbnNvbGUubG9nKHVzZXJBdXRoPy51aWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tdCB0by1ibGFjayBmcm9tLWdyYXktNzAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LXdoaXRlLTEwMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNCB0ZXh0LWdyZWVuLTUwMFwiPlxyXG4gICAgICAgICAgTm90YXMgZXF1aXBlIHtlcXVpcGVzLmZpbmQoKGVxdWlwZSkgPT4gZXF1aXBlLmlkID09PSBhdmFsaWFjYW8/LmVxdWlwZV9pZCk/Lm5hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ncmVlbi01MDAgZm9udC1ib2xkIG1iLTRcIj5cclxuICAgICAgICAgIEF2YWxpYWRvcihhKToge2F2YWxpYWRvcmVzLmZpbmQoKGF2YWxpYWRvcikgPT4gYXZhbGlhZG9yLmlkID09PSBhdmFsaWFjYW8/LmF2YWxpYWRvcl9pZCk/Lm5hbWV9IFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAge09iamVjdC5rZXlzKGF2YWxpYWNhbz8ubm90YXMpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtrZXl9IGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtYm9sZCBtYi0yIHRleHQtZ3JlZW4tNTAwXCI+XHJcbiAgICAgICAgICAgICAge2tleX06IE5vdGEge2F2YWxpYWNhbz8ubm90YXNba2V5XX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfSBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7KHVzZXJBdXRoPy51aWQgPT09IGF2YWxpYWNhbz8uYXZhbGlhZG9yX2lkKT9cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmVlbi02MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2FkZE5vdGEvJHthdmFsaWFjYW8/LmlkfWApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVkaXRhciBOb3RhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDogbnVsbH1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBWb2x0YXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJ1c2VBdXRoQ29udGV4dCIsImZldGNoRXF1aXBlcyIsInJlc3VsdCIsImdldCIsImRhdGEiLCJmZXRjaEF2YWxpYWRvcmVzIiwiSG9tZSIsImVxdWlwZXMiLCJhdmFsaWFkb3JlcyIsInJvdXRlciIsInVzZXJBdXRoIiwic2V0RXF1aXBlcyIsInNldEF2YWxpYWRvcmVzIiwiYXZhbGlhY2FvIiwic2V0YXZBdmFsaWFjYW8iLCJhdmFsaWFkb3JfaWQiLCJlcXVpcGVfaWQiLCJub3RhcyIsImZlaXRhIiwicGFyYW1zIiwiaWQiLCJnZXREYWRvcyIsImVxdWlwZXNEYXRhIiwiYXZhbGlhY2FvRGF0YSIsImF2YWxpYWRvcmVzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1aWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDEiLCJmaW5kIiwiZXF1aXBlIiwibmFtZSIsImF2YWxpYWRvciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJsYWJlbCIsImh0bWxGb3IiLCJiciIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwicHVzaCIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/avaliacoes/[id]/page.tsx\n"));

/***/ })

});