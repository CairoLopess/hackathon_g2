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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAvaliador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth/signUp */ \"(app-pages-browser)/./src/services/firebase/auth/signUp.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//import axios from \"axios\";\n\nfunction NewAvaliador() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formDataAvaliador, setFormDataAvaliador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        login: \"\",\n        senha: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        console.log(e.target.name);\n        console.log(e.target.value);\n        console.log(e.target.type);\n        setFormDataAvaliador((prevFormData)=>({\n                ...prevFormData,\n                [name]: value\n            }));\n    };\n    const makePostRequest = async ()=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/avaliadores\", {\n                ...formDataAvaliador\n            });\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleForm = async (event)=>{\n        event.preventDefault();\n        const { result, error } = await (0,_services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(email, password);\n        if (error) {\n            return console.log(error);\n        }\n        // else successful\n        console.log(result);\n        return router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-800 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleForm,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: formDataAvaliador.name,\n                                    onChange: handleChange,\n                                    required: true,\n                                    type: \"text\",\n                                    name: \"name\",\n                                    id: \"name\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setEmail(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            login: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"email\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"example@mail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setPassword(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            senha: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: makePostRequest,\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: (()=>router.push(\"/\"), setFormDataAvaliador({\n                                ...formDataAvaliador,\n                                id: useAuth\n                            })),\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(NewAvaliador, \"X5aUywNaD6OTAndp9kBaGvz/1TQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewAvaliador;\nvar _c;\n$RefreshReg$(_c, \"NewAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUwQjtBQUMrQjtBQUN4QjtBQUNXO0FBQzVDLDRCQUE0QjtBQUNTO0FBS3RCLFNBQVNLOztJQUN0QixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxtQkFBbUJDLHFCQUFxQixHQUFHTiwrQ0FBUUEsQ0FBcUI7UUFDN0VPLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUVBLE1BQU1DLGVBQWUsQ0FDbkJDO1FBSUEsTUFBTSxFQUFFSixJQUFJLEVBQUVLLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0wsRUFBRUcsTUFBTSxDQUFDUCxJQUFJO1FBQ3pCUSxRQUFRQyxHQUFHLENBQUNMLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSztRQUMxQkcsUUFBUUMsR0FBRyxDQUFDTCxFQUFFRyxNQUFNLENBQUNELElBQUk7UUFFdkJSLHFCQUFxQixDQUFDWSxlQUFrQjtnQkFDdEMsR0FBR0EsWUFBWTtnQkFDZixDQUFDVixLQUFLLEVBQUVLO1lBRVY7SUFDRjtJQUVGLE1BQU1NLGtCQUFrQjtRQUN0QixJQUFJO1lBRUYsTUFBTUMsV0FBVyxNQUFNbEIscURBQUdBLENBQUNtQixJQUFJLENBQUMsZ0JBQWdCO2dCQUM5QyxHQUFHaEIsaUJBQWlCO1lBQ3RCO1lBRUFXLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUMsYUFBYUcsU0FBU0UsSUFBSTtZQUN0Q2xCLE9BQU9tQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZFIsUUFBUVEsS0FBSyxDQUFDLFNBQVNBO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRzVCLHFEQUFjLENBQUM7SUFDekMsTUFBTSxDQUFDNkIsVUFBVUMsWUFBWSxHQUFHOUIscURBQWMsQ0FBQztJQUUvQyxNQUFNK0IsYUFBYSxPQUFPQztRQUN4QkEsTUFBTUMsY0FBYztRQUVwQixNQUFNLEVBQUVDLE1BQU0sRUFBRVIsS0FBSyxFQUFFLEdBQUcsTUFBTXpCLDBFQUFNQSxDQUFDMEIsT0FBT0U7UUFFOUMsSUFBSUgsT0FBTztZQUNULE9BQU9SLFFBQVFDLEdBQUcsQ0FBQ087UUFDckI7UUFFQSxrQkFBa0I7UUFDbEJSLFFBQVFDLEdBQUcsQ0FBQ2U7UUFDWixPQUFPNUIsT0FBT21CLElBQUksQ0FBQztJQUNyQjtJQUdBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFRRCxXQUFVOzs4QkFDakIsOERBQUNFO29CQUFHRixXQUFVOzhCQUEwQjs7Ozs7OzhCQUN4Qyw4REFBQ0c7b0JBQUtDLFVBQVVUO29CQUFZSyxXQUFVOztzQ0FDdEMsOERBQUNLOzRCQUFNQyxTQUFROzRCQUFPTixXQUFVOzs4Q0FDNUIsOERBQUNPOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUNDN0IsT0FBT1Isa0JBQWtCRyxJQUFJO29DQUM3Qm1DLFVBQVVoQztvQ0FDVmlDLFFBQVE7b0NBQ1I5QixNQUFLO29DQUNMTixNQUFLO29DQUNMRCxJQUFHO29DQUNIMkIsV0FBVTtvQ0FDVlcsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ047NEJBQU1DLFNBQVE7NEJBQVFOLFdBQVU7OzhDQUMvQiw4REFBQ087OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0M7b0NBQ0NDLFVBQVUsQ0FBQy9CLElBQU9jLENBQUFBLFNBQVNkLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHUCxxQkFBcUI7NENBQUUsR0FBR0QsaUJBQWlCOzRDQUFFSSxPQUFPRyxFQUFFRyxNQUFNLENBQUNGLEtBQUs7d0NBQUMsRUFBQztvQ0FDaEgrQixRQUFRO29DQUNSOUIsTUFBSztvQ0FDTE4sTUFBSztvQ0FDTEQsSUFBRztvQ0FDSDJCLFdBQVU7b0NBQ1ZXLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNOOzRCQUFNQyxTQUFROzRCQUFXTixXQUFVOzs4Q0FDbEMsOERBQUNPOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUNDQyxVQUFVLENBQUMvQixJQUFPZ0IsQ0FBQUEsWUFBWWhCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHUCxxQkFBcUI7NENBQUUsR0FBR0QsaUJBQWlCOzRDQUFFSyxPQUFPRSxFQUFFRyxNQUFNLENBQUNGLEtBQUs7d0NBQUMsRUFBQztvQ0FDbkgrQixRQUFRO29DQUNSOUIsTUFBSztvQ0FDTE4sTUFBSztvQ0FDTEQsSUFBRztvQ0FDSDJCLFdBQVU7b0NBQ1ZXLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNDOzRCQUNDaEMsTUFBSzs0QkFDTG9CLFdBQVU7NEJBQ1ZhLFNBQVM1QjtzQ0FDVjs7Ozs7O3NDQUdELDhEQUFDMkI7NEJBQ0NoQyxNQUFLOzRCQUNMb0IsV0FBVTs0QkFDVmEsU0FBUyxLQUFPM0MsT0FBT21CLElBQUksQ0FBQyxNQUFPakIscUJBQXFCO2dDQUFFLEdBQUdELGlCQUFpQjtnQ0FBRUUsSUFBSXlDOzRCQUFPLEVBQUM7c0NBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBeEh3QjdDOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL25ld0F2YWxpYWRvci9wYWdlLnRzeD9mY2U4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc2lnblVwIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9maXJlYmFzZS9hdXRoL3NpZ25VcFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbi8vaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgSUF2YWxpYWRvckZvcm1EYXRhIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9JQXZhbGlhZG9yXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdBdmFsaWFkb3IoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhQXZhbGlhZG9yLCBzZXRGb3JtRGF0YUF2YWxpYWRvcl0gPSB1c2VTdGF0ZTxJQXZhbGlhZG9yRm9ybURhdGE+KHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxvZ2luOiBcIlwiLFxyXG4gICAgc2VuaGE6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcclxuICAgIGU6XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cclxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnR5cGUpO1xyXG5cclxuICAgICAgc2V0Rm9ybURhdGFBdmFsaWFkb3IoKHByZXZGb3JtRGF0YSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2Rm9ybURhdGEsIC8vbWFudMOpbSB0b2RvcyBvcyBvdXRyb3MgZGFkb3MgaW50YWN0b3NcclxuICAgICAgICBbbmFtZV06IHZhbHVlLCAvL2FsdGVyYSBvIGRhZG8gcXVlIGVzdMOhIHNlbmRvIG1vZGlmaWNhZG9cclxuICAgICAgICAvLyBwb3IgZXhlbXBsbywgZmljYXJpYSBhc3NpbTogW25hbWVdOiB2YWx1ZSAtLT4gY3BmOiAxMlxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gIGNvbnN0IG1ha2VQb3N0UmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL2F2YWxpYWRvcmVzXCIsIHtcclxuICAgICAgICAuLi5mb3JtRGF0YUF2YWxpYWRvcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhZG9zIGVudmlhZG9zIGNvbSBzdWNlc3NvIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJSZXNwb3N0YTpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyByZXN1bHQsIGVycm9yIH0gPSBhd2FpdCBzaWduVXAoZW1haWwsIHBhc3N3b3JkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbHNlIHN1Y2Nlc3NmdWxcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTgwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPkNhZGFzdHJhciBBdmFsaWFkb3I8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtfSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICA8cD5Ob21lPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGFBdmFsaWFkb3IubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+TG9naW48L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKSwgc2V0Rm9ybURhdGFBdmFsaWFkb3IoeyAuLi5mb3JtRGF0YUF2YWxpYWRvciwgbG9naW46IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlQG1haWwuY29tXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSwgc2V0Rm9ybURhdGFBdmFsaWFkb3IoeyAuLi5mb3JtRGF0YUF2YWxpYWRvciwgc2VuaGE6IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlnby01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgb25DbGljaz17bWFrZVBvc3RSZXF1ZXN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChyb3V0ZXIucHVzaChcIi9cIikpLCBzZXRGb3JtRGF0YUF2YWxpYWRvcih7IC4uLmZvcm1EYXRhQXZhbGlhZG9yLCBpZDogdXNlQXV0aH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNpZ25VcCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXBpIiwiTmV3QXZhbGlhZG9yIiwicm91dGVyIiwiZm9ybURhdGFBdmFsaWFkb3IiLCJzZXRGb3JtRGF0YUF2YWxpYWRvciIsImlkIiwibmFtZSIsImxvZ2luIiwic2VuaGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInByZXZGb3JtRGF0YSIsIm1ha2VQb3N0UmVxdWVzdCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwicCIsImlucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newAvaliador/page.tsx\n"));

/***/ })

});