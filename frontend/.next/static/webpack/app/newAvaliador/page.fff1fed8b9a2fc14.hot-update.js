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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAvaliador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth/signUp */ \"(app-pages-browser)/./src/services/firebase/auth/signUp.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//import axios from \"axios\";\n\n\nfunction NewAvaliador() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formDataAvaliador, setFormDataAvaliador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"sem nome\",\n        login: \"\",\n        senha: \"\"\n    });\n    const makePostRequest = async ()=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/avaliadores\", {\n                ...formDataAvaliador\n            });\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const { userAuth, logout } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext)();\n    const handleForm = async (event)=>{\n        event.preventDefault();\n        const { result, error } = await (0,_services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(email, password);\n        if (error) {\n            return console.log(error);\n        }\n        // else successful\n        console.log(result);\n        setFormDataAvaliador({\n            ...formDataAvaliador,\n            id: result.user.uid\n        });\n        await makePostRequest();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-800 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleForm,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setEmail(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            login: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"email\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"example@mail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setPassword(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            senha: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(NewAvaliador, \"o5hKxFxq0LF0OTHS2fbdcKLJnCQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext\n    ];\n});\n_c = NewAvaliador;\nvar _c;\n$RefreshReg$(_c, \"NewAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDK0I7QUFDeEI7QUFDVztBQUM1Qyw0QkFBNEI7QUFDUztBQUVzQjtBQUc1QyxTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQXFCO1FBQzdFUSxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSTtZQUVGLE1BQU1DLFdBQVcsTUFBTVgscURBQUdBLENBQUNZLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzlDLEdBQUdSLGlCQUFpQjtZQUN0QjtZQUVBUyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLGFBQWFILFNBQVNJLElBQUk7WUFDdENaLE9BQU9hLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkSixRQUFRSSxLQUFLLENBQUMsU0FBU0E7UUFDekI7SUFDRjtJQUVBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHdkIscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QixxREFBYyxDQUFDO0lBQy9DLE1BQU0sRUFBRTBCLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUd0QixvRUFBY0E7SUFFM0MsTUFBTXVCLGFBQWEsT0FBT0M7UUFDeEJBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTSxFQUFFQyxNQUFNLEVBQUVWLEtBQUssRUFBRSxHQUFHLE1BQU1wQiwwRUFBTUEsQ0FBQ3FCLE9BQU9FO1FBRTlDLElBQUlILE9BQU87WUFDVCxPQUFPSixRQUFRQyxHQUFHLENBQUNHO1FBQ3JCO1FBRUEsa0JBQWtCO1FBQ2xCSixRQUFRQyxHQUFHLENBQUNhO1FBRVp0QixxQkFBcUI7WUFBRSxHQUFHRCxpQkFBaUI7WUFBRUUsSUFBSXFCLE9BQU9DLElBQUksQ0FBQ0MsR0FBRztRQUFDO1FBQ2pFLE1BQU1uQjtJQUNSO0lBRUEscUJBQ0UsOERBQUNvQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFRRCxXQUFVOzs4QkFDakIsOERBQUNFO29CQUFHRixXQUFVOzhCQUEwQjs7Ozs7OzhCQUN4Qyw4REFBQ0c7b0JBQUtDLFVBQVVYO29CQUFZTyxXQUFVOztzQ0FDcEMsOERBQUNLOzRCQUFNQyxTQUFROzRCQUFRTixXQUFVOzs4Q0FDL0IsOERBQUNPOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUNDQyxVQUFVLENBQUNDLElBQU90QixDQUFBQSxTQUFTc0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEdBQUd0QyxxQkFBcUI7NENBQUUsR0FBR0QsaUJBQWlCOzRDQUFFSSxPQUFPaUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dDQUFDLEVBQUM7b0NBQ2hIQyxRQUFRO29DQUNSQyxNQUFLO29DQUNMdEMsTUFBSztvQ0FDTEQsSUFBRztvQ0FDSHlCLFdBQVU7b0NBQ1ZlLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNWOzRCQUFNQyxTQUFROzRCQUFXTixXQUFVOzs4Q0FDbEMsOERBQUNPOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUNDQyxVQUFVLENBQUNDLElBQU9wQixDQUFBQSxZQUFZb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEdBQUd0QyxxQkFBcUI7NENBQUUsR0FBR0QsaUJBQWlCOzRDQUFFSyxPQUFPZ0MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dDQUFDLEVBQUM7b0NBQ25IQyxRQUFRO29DQUNSQyxNQUFLO29DQUNMdEMsTUFBSztvQ0FDTEQsSUFBRztvQ0FDSHlCLFdBQVU7b0NBQ1ZlLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNDOzRCQUNDRixNQUFLOzRCQUNMZCxXQUFVO3NDQUVYOzs7Ozs7c0NBR0QsOERBQUNnQjs0QkFDQ0YsTUFBSzs0QkFDTGQsV0FBVTs0QkFDVmlCLFNBQVMsSUFBTzdDLE9BQU9hLElBQUksQ0FBQztzQ0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0EzRndCZDs7UUFDUEgsc0RBQVNBO1FBeUJLRSxnRUFBY0E7OztLQTFCckJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4P2ZjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzaWduVXAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlL2F1dGgvc2lnblVwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuLy9pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBJQXZhbGlhZG9yRm9ybURhdGEgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBdmFsaWFkb3JcIjtcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0F2YWxpYWRvcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZm9ybURhdGFBdmFsaWFkb3IsIHNldEZvcm1EYXRhQXZhbGlhZG9yXSA9IHVzZVN0YXRlPElBdmFsaWFkb3JGb3JtRGF0YT4oe1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBuYW1lOiBcInNlbSBub21lXCIsXHJcbiAgICBsb2dpbjogXCJcIixcclxuICAgIHNlbmhhOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYWtlUG9zdFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9hdmFsaWFkb3Jlc1wiLCB7XHJcbiAgICAgICAgLi4uZm9ybURhdGFBdmFsaWFkb3IsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJEYWRvcyBlbnZpYWRvcyBjb20gc3VjZXNzbyFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9zdGE6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybzpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7IHVzZXJBdXRoLCBsb2dvdXQgfSA9IHVzZUF1dGhDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm0gPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7IHJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsc2Ugc3VjY2Vzc2Z1bFxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBzZXRGb3JtRGF0YUF2YWxpYWRvcih7IC4uLmZvcm1EYXRhQXZhbGlhZG9yLCBpZDogcmVzdWx0LnVzZXIudWlkIH0pO1xyXG4gICAgYXdhaXQgbWFrZVBvc3RSZXF1ZXN0KCk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS04MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93LWxnIHRleHQtYmxhY2tcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5DYWRhc3RyYXIgQXZhbGlhZG9yPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybX0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+TG9naW48L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKSwgc2V0Rm9ybURhdGFBdmFsaWFkb3IoeyAuLi5mb3JtRGF0YUF2YWxpYWRvciwgbG9naW46IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlQG1haWwuY29tXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSwgc2V0Rm9ybURhdGFBdmFsaWFkb3IoeyAuLi5mb3JtRGF0YUF2YWxpYWRvciwgc2VuaGE6IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlnby01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAocm91dGVyLnB1c2goXCIvXCIpKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNpZ25VcCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXBpIiwidXNlQXV0aENvbnRleHQiLCJOZXdBdmFsaWFkb3IiLCJyb3V0ZXIiLCJmb3JtRGF0YUF2YWxpYWRvciIsInNldEZvcm1EYXRhQXZhbGlhZG9yIiwiaWQiLCJuYW1lIiwibG9naW4iLCJzZW5oYSIsIm1ha2VQb3N0UmVxdWVzdCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHVzaCIsImVycm9yIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VyQXV0aCIsImxvZ291dCIsImhhbmRsZUZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0IiwidXNlciIsInVpZCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newAvaliador/page.tsx\n"));

/***/ })

});