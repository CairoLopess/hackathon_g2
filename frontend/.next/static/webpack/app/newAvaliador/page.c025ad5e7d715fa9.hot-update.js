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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAvaliador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth/signUp */ \"(app-pages-browser)/./src/services/firebase/auth/signUp.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction NewAvaliador() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formDataAvaliador, setFormDataAvaliador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"sem nome\",\n        login: \"\",\n        senha: \"\"\n    });\n    const makePostRequest = async (user)=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/avaliadores\", {\n                ...formDataAvaliador,\n                id: user === null || user === void 0 ? void 0 : user.uid\n            });\n            console.log(userAuth === null || userAuth === void 0 ? void 0 : userAuth.uid);\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { userAuth, logout } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext)();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();\n    const handleForm = async (event)=>{\n        event.preventDefault();\n        await auth.setPersistence(auth.Auth.Persistence.NONE);\n        const { result, error } = await (0,_services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(email, password);\n        if (error) {\n            return console.log(error);\n        }\n        // else successful\n        const user = result === null || result === void 0 ? void 0 : result.user;\n        console.log(user);\n        // Envia os dados para a API\n        await makePostRequest(user);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-800 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleForm,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setEmail(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            login: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"email\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"example@mail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setPassword(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            senha: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(NewAvaliador, \"o5hKxFxq0LF0OTHS2fbdcKLJnCQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext\n    ];\n});\n_c = NewAvaliador;\nvar _c;\n$RefreshReg$(_c, \"NewAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQytCO0FBQ3hCO0FBQ1c7QUFDUDtBQUVzQjtBQUNQO0FBSXJDLFNBQVNPOztJQUN0QixNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxtQkFBbUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBcUI7UUFDN0VTLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUVBLE1BQU1DLGtCQUFrQixPQUFPQztRQUM3QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNYixxREFBR0EsQ0FBQ2MsSUFBSSxDQUFDLGdCQUFnQjtnQkFDOUMsR0FBR1QsaUJBQWlCO2dCQUFFRSxFQUFFLEVBQUVLLGlCQUFBQSwyQkFBQUEsS0FBTUcsR0FBRztZQUNyQztZQUVBQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFBQSwrQkFBQUEsU0FBVUgsR0FBRztZQUN6QkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxhQUFhSixTQUFTTSxJQUFJO1lBQ3RDZixPQUFPZ0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RMLFFBQVFLLEtBQUssQ0FBQyxTQUFTQTtRQUN6QjtJQUNGO0lBRUEsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUMwQixVQUFVQyxZQUFZLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLEVBQUVvQixRQUFRLEVBQUVRLE1BQU0sRUFBRSxHQUFHekIsb0VBQWNBO0lBQzNDLE1BQU0wQixPQUFPekIsc0RBQU9BO0lBRXBCLE1BQU0wQixhQUFhLE9BQU9DO1FBQ3hCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1ILEtBQUtJLGNBQWMsQ0FBQ0osS0FBS0ssSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUk7UUFFcEQsTUFBTSxFQUFFQyxNQUFNLEVBQUVkLEtBQUssRUFBRSxHQUFHLE1BQU14QiwwRUFBTUEsQ0FBQ3lCLE9BQU9FO1FBRTlDLElBQUlILE9BQU87WUFDVCxPQUFPTCxRQUFRQyxHQUFHLENBQUNJO1FBQ3JCO1FBRUEsa0JBQWtCO1FBQ2xCLE1BQU1ULE9BQU91QixtQkFBQUEsNkJBQUFBLE9BQVF2QixJQUFJO1FBRXpCSSxRQUFRQyxHQUFHLENBQUNMO1FBRVosNEJBQTRCO1FBQzVCLE1BQU1ELGdCQUFnQkM7SUFFeEI7SUFFQSxxQkFDRSw4REFBQ3dCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQVFELFdBQVU7OzhCQUNqQiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3hDLDhEQUFDRztvQkFBS0MsVUFBVWI7b0JBQVlTLFdBQVU7O3NDQUNwQyw4REFBQ0s7NEJBQU1DLFNBQVE7NEJBQVFOLFdBQVU7OzhDQUMvQiw4REFBQ087OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0M7b0NBQ0NDLFVBQVUsQ0FBQ0MsSUFBT3hCLENBQUFBLFNBQVN3QixFQUFFQyxNQUFNLENBQUNDLEtBQUssR0FBRzNDLHFCQUFxQjs0Q0FBRSxHQUFHRCxpQkFBaUI7NENBQUVJLE9BQU9zQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0NBQUMsRUFBQztvQ0FDaEhDLFFBQVE7b0NBQ1JDLE1BQUs7b0NBQ0wzQyxNQUFLO29DQUNMRCxJQUFHO29DQUNIOEIsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ1Y7NEJBQU1DLFNBQVE7NEJBQVdOLFdBQVU7OzhDQUNsQyw4REFBQ087OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0M7b0NBQ0NDLFVBQVUsQ0FBQ0MsSUFBT3RCLENBQUFBLFlBQVlzQixFQUFFQyxNQUFNLENBQUNDLEtBQUssR0FBRzNDLHFCQUFxQjs0Q0FBRSxHQUFHRCxpQkFBaUI7NENBQUVLLE9BQU9xQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0NBQUMsRUFBQztvQ0FDbkhDLFFBQVE7b0NBQ1JDLE1BQUs7b0NBQ0wzQyxNQUFLO29DQUNMRCxJQUFHO29DQUNIOEIsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0M7NEJBQ0NGLE1BQUs7NEJBQ0xkLFdBQVU7c0NBQ1g7Ozs7OztzQ0FHRCw4REFBQ2dCOzRCQUNDRixNQUFLOzRCQUNMZCxXQUFVOzRCQUNWaUIsU0FBUyxJQUFNbEQsT0FBT2dCLElBQUksQ0FBQztzQ0FDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0EvRndCakI7O1FBQ1BKLHNEQUFTQTtRQXlCS0UsZ0VBQWNBOzs7S0ExQnJCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL25ld0F2YWxpYWRvci9wYWdlLnRzeD9mY2U4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc2lnblVwIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9maXJlYmFzZS9hdXRoL3NpZ25VcFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBJQXZhbGlhZG9yRm9ybURhdGEgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBdmFsaWFkb3JcIjtcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBVc2VyLCBnZXRBdXRoLCBBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3QXZhbGlhZG9yKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YUF2YWxpYWRvciwgc2V0Rm9ybURhdGFBdmFsaWFkb3JdID0gdXNlU3RhdGU8SUF2YWxpYWRvckZvcm1EYXRhPih7XHJcbiAgICBpZDogXCJcIixcclxuICAgIG5hbWU6IFwic2VtIG5vbWVcIixcclxuICAgIGxvZ2luOiBcIlwiLFxyXG4gICAgc2VuaGE6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1ha2VQb3N0UmVxdWVzdCA9IGFzeW5jICh1c2VyOiBVc2VyIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL2F2YWxpYWRvcmVzXCIsIHtcclxuICAgICAgICAuLi5mb3JtRGF0YUF2YWxpYWRvciwgaWQ6IHVzZXI/LnVpZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJBdXRoPy51aWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhZG9zIGVudmlhZG9zIGNvbSBzdWNlc3NvIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJSZXNwb3N0YTpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgdXNlckF1dGgsIGxvZ291dCB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCBhdXRoLnNldFBlcnNpc3RlbmNlKGF1dGguQXV0aC5QZXJzaXN0ZW5jZS5OT05FKTtcclxuXHJcbiAgICBjb25zdCB7IHJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsc2Ugc3VjY2Vzc2Z1bFxyXG4gICAgY29uc3QgdXNlciA9IHJlc3VsdD8udXNlcjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIFxyXG4gICAgLy8gRW52aWEgb3MgZGFkb3MgcGFyYSBhIEFQSVxyXG4gICAgYXdhaXQgbWFrZVBvc3RSZXF1ZXN0KHVzZXIpO1xyXG4gIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPkNhZGFzdHJhciBBdmFsaWFkb3I8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtfSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICA8cD5Mb2dpbjwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAoc2V0RW1haWwoZS50YXJnZXQudmFsdWUpLCBzZXRGb3JtRGF0YUF2YWxpYWRvcih7IC4uLmZvcm1EYXRhQXZhbGlhZG9yLCBsb2dpbjogZS50YXJnZXQudmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGVAbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICA8cD5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAoc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpLCBzZXRGb3JtRGF0YUF2YWxpYWRvcih7IC4uLmZvcm1EYXRhQXZhbGlhZG9yLCBzZW5oYTogZS50YXJnZXQudmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzaWduVXAiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFwaSIsInVzZUF1dGhDb250ZXh0IiwiZ2V0QXV0aCIsIk5ld0F2YWxpYWRvciIsInJvdXRlciIsImZvcm1EYXRhQXZhbGlhZG9yIiwic2V0Rm9ybURhdGFBdmFsaWFkb3IiLCJpZCIsIm5hbWUiLCJsb2dpbiIsInNlbmhhIiwibWFrZVBvc3RSZXF1ZXN0IiwidXNlciIsInJlc3BvbnNlIiwicG9zdCIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyQXV0aCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvZ291dCIsImF1dGgiLCJoYW5kbGVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFBlcnNpc3RlbmNlIiwiQXV0aCIsIlBlcnNpc3RlbmNlIiwiTk9ORSIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newAvaliador/page.tsx\n"));

/***/ })

});