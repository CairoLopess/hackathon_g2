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

/***/ "(app-pages-browser)/./src/app/newAvaliador/page.tsx":
/*!***************************************!*\
  !*** ./src/app/newAvaliador/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAvaliador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth/signUp */ \"(app-pages-browser)/./src/services/firebase/auth/signUp.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction NewAvaliador() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formDataAvaliador, setFormDataAvaliador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        login: \"\",\n        senha: \"\"\n    });\n    const makePostRequest = async (user)=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/avaliadores\", {\n                ...formDataAvaliador,\n                id: user === null || user === void 0 ? void 0 : user.uid\n            });\n            console.log(userAuth === null || userAuth === void 0 ? void 0 : userAuth.uid);\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { userAuth } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext)();\n    const handleForm = async (event)=>{\n        event.preventDefault();\n        const { result, error } = await (0,_services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(email, password);\n        if (error) {\n            return console.log(error);\n        }\n        const user = result === null || result === void 0 ? void 0 : result.user;\n        console.log(user);\n        await makePostRequest(user);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-800 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleForm,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setEmail(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            login: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"email\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"example@mail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setPassword(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            senha: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(NewAvaliador, \"UkPrnbzmOCr8BMQWdBd2D9xMl74=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext\n    ];\n});\n_c = NewAvaliador;\nvar _c;\n$RefreshReg$(_c, \"NewAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDK0I7QUFDeEI7QUFDVztBQUNQO0FBRXNCO0FBRzVDLFNBQVNNOztJQUN0QixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBcUI7UUFDN0VRLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxrQkFBa0IsT0FBT0M7UUFDN0IsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVgscURBQUdBLENBQUNZLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzlDLEdBQUdSLGlCQUFpQjtnQkFBRUUsRUFBRSxFQUFFSSxpQkFBQUEsMkJBQUFBLEtBQU1HLEdBQUc7WUFDckM7WUFFQUMsUUFBUUMsR0FBRyxDQUFDQyxxQkFBQUEsK0JBQUFBLFNBQVVILEdBQUc7WUFDekJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUMsYUFBYUosU0FBU00sSUFBSTtZQUV0Q2QsT0FBT2UsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RMLFFBQVFLLEtBQUssQ0FBQyxTQUFTQTtRQUN6QjtJQUNGO0lBRUEsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLEVBQUVrQixRQUFRLEVBQUUsR0FBR2Ysb0VBQWNBO0lBRW5DLE1BQU11QixhQUFhLE9BQU9DO1FBQ3hCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU0sRUFBRUMsTUFBTSxFQUFFUixLQUFLLEVBQUUsR0FBRyxNQUFNdEIsMEVBQU1BLENBQUN1QixPQUFPRTtRQUU5QyxJQUFJSCxPQUFPO1lBQ1QsT0FBT0wsUUFBUUMsR0FBRyxDQUFDSTtRQUNyQjtRQUNBLE1BQU1ULE9BQU9pQixtQkFBQUEsNkJBQUFBLE9BQVFqQixJQUFJO1FBRXpCSSxRQUFRQyxHQUFHLENBQUNMO1FBRVosTUFBTUQsZ0JBQWdCQztJQUV4QjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBUUQsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDeEMsOERBQUNHO29CQUFLQyxVQUFVVDtvQkFBWUssV0FBVTs7c0NBQ3BDLDhEQUFDSzs0QkFBTUMsU0FBUTs0QkFBUU4sV0FBVTs7OENBQy9CLDhEQUFDTzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQztvQ0FDQ0MsVUFBVSxDQUFDQyxJQUFPbEIsQ0FBQUEsU0FBU2tCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHcEMscUJBQXFCOzRDQUFFLEdBQUdELGlCQUFpQjs0Q0FBRUcsT0FBT2dDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3Q0FBQyxFQUFDO29DQUNoSEMsUUFBUTtvQ0FDUkMsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTHRDLElBQUc7b0NBQ0h1QixXQUFVO29DQUNWZ0IsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ1g7NEJBQU1DLFNBQVE7NEJBQVdOLFdBQVU7OzhDQUNsQyw4REFBQ087OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0M7b0NBQ0NDLFVBQVUsQ0FBQ0MsSUFBT2hCLENBQUFBLFlBQVlnQixFQUFFQyxNQUFNLENBQUNDLEtBQUssR0FBR3BDLHFCQUFxQjs0Q0FBRSxHQUFHRCxpQkFBaUI7NENBQUVJLE9BQU8rQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0NBQUMsRUFBQztvQ0FDbkhDLFFBQVE7b0NBQ1JDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0x0QyxJQUFHO29DQUNIdUIsV0FBVTtvQ0FDVmdCLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNDOzRCQUNDSCxNQUFLOzRCQUNMZCxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNpQjs0QkFDQ0gsTUFBSzs0QkFDTGQsV0FBVTs0QkFDVmtCLFNBQVMsSUFBTTVDLE9BQU9lLElBQUksQ0FBQztzQ0FDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0ExRndCaEI7O1FBQ1BILHNEQUFTQTtRQXlCSEUsZ0VBQWNBOzs7S0ExQmJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4P2ZjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzaWduVXAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlL2F1dGgvc2lnblVwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IElBdmFsaWFkb3JGb3JtRGF0YSB9IGZyb20gXCJAL2ludGVyZmFjZXMvSUF2YWxpYWRvclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3QXZhbGlhZG9yKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YUF2YWxpYWRvciwgc2V0Rm9ybURhdGFBdmFsaWFkb3JdID0gdXNlU3RhdGU8SUF2YWxpYWRvckZvcm1EYXRhPih7XHJcbiAgICBpZDogXCJcIixcclxuICAgIGxvZ2luOiBcIlwiLFxyXG4gICAgc2VuaGE6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1ha2VQb3N0UmVxdWVzdCA9IGFzeW5jICh1c2VyOiBVc2VyIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL2F2YWxpYWRvcmVzXCIsIHtcclxuICAgICAgICAuLi5mb3JtRGF0YUF2YWxpYWRvciwgaWQ6IHVzZXI/LnVpZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJBdXRoPy51aWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhZG9zIGVudmlhZG9zIGNvbSBzdWNlc3NvIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJSZXNwb3N0YTpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybzpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7IHVzZXJBdXRoIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gYXdhaXQgc2lnblVwKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyID0gcmVzdWx0Py51c2VyO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgXHJcbiAgICBhd2FpdCBtYWtlUG9zdFJlcXVlc3QodXNlcik7XHJcbiAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+Q2FkYXN0cmFyIEF2YWxpYWRvcjwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm19IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxwPkxvZ2luPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IChzZXRFbWFpbChlLnRhcmdldC52YWx1ZSksIHNldEZvcm1EYXRhQXZhbGlhZG9yKHsgLi4uZm9ybURhdGFBdmFsaWFkb3IsIGxvZ2luOiBlLnRhcmdldC52YWx1ZSB9KSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxwPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IChzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSksIHNldEZvcm1EYXRhQXZhbGlhZG9yKHsgLi4uZm9ybURhdGFBdmFsaWFkb3IsIHNlbmhhOiBlLnRhcmdldC52YWx1ZSB9KSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNpZ25VcCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXBpIiwidXNlQXV0aENvbnRleHQiLCJOZXdBdmFsaWFkb3IiLCJyb3V0ZXIiLCJmb3JtRGF0YUF2YWxpYWRvciIsInNldEZvcm1EYXRhQXZhbGlhZG9yIiwiaWQiLCJsb2dpbiIsInNlbmhhIiwibWFrZVBvc3RSZXF1ZXN0IiwidXNlciIsInJlc3BvbnNlIiwicG9zdCIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyQXV0aCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwicCIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newAvaliador/page.tsx\n"));

/***/ })

});