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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAvaliador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth/signUp */ \"(app-pages-browser)/./src/services/firebase/auth/signUp.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//import axios from \"axios\";\n\nfunction NewAvaliador() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formDataAvaliador, setFormDataAvaliador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        login: \"\",\n        senha: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        console.log(e.target.name);\n        console.log(e.target.value);\n        console.log(e.target.type);\n        setFormDataAvaliador((prevFormData)=>({\n                ...prevFormData,\n                [name]: value\n            }));\n    };\n    const makePostRequest = async ()=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/avaliadores\", {\n                ...formDataAvaliador\n            });\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleForm = async (event)=>{\n        event.preventDefault();\n        const { result, error } = await (0,_services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(email, password);\n        if (error) {\n            return console.log(error);\n        }\n        // else successful\n        console.log(result);\n        return router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-800 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleForm,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: formDataAvaliador.name,\n                                    onChange: handleChange,\n                                    required: true,\n                                    type: \"text\",\n                                    name: \"name\",\n                                    id: \"name\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setEmail(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            login: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"email\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"example@mail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setPassword(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            senha: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: makePostRequest,\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: (()=>router.push(\"/\"), setFormDataAvaliador({\n                                ...formDataAvaliador,\n                                id: u\n                            })),\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(NewAvaliador, \"X5aUywNaD6OTAndp9kBaGvz/1TQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewAvaliador;\nvar _c;\n$RefreshReg$(_c, \"NewAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUwQjtBQUMrQjtBQUNiO0FBQ0E7QUFDNUMsNEJBQTRCO0FBQ1M7QUFLdEIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLG1CQUFtQkMscUJBQXFCLEdBQUdOLCtDQUFRQSxDQUFxQjtRQUM3RU8sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBRUEsTUFBTUMsZUFBZSxDQUNuQkM7UUFJQSxNQUFNLEVBQUVKLElBQUksRUFBRUssS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUN0Q0MsUUFBUUMsR0FBRyxDQUFDTCxFQUFFRyxNQUFNLENBQUNQLElBQUk7UUFDekJRLFFBQVFDLEdBQUcsQ0FBQ0wsRUFBRUcsTUFBTSxDQUFDRixLQUFLO1FBQzFCRyxRQUFRQyxHQUFHLENBQUNMLEVBQUVHLE1BQU0sQ0FBQ0QsSUFBSTtRQUV2QlIscUJBQXFCLENBQUNZLGVBQWtCO2dCQUN0QyxHQUFHQSxZQUFZO2dCQUNmLENBQUNWLEtBQUssRUFBRUs7WUFFVjtJQUNGO0lBRUYsTUFBTU0sa0JBQWtCO1FBQ3RCLElBQUk7WUFFRixNQUFNQyxXQUFXLE1BQU1sQixxREFBR0EsQ0FBQ21CLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzlDLEdBQUdoQixpQkFBaUI7WUFDdEI7WUFFQVcsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxhQUFhRyxTQUFTRSxJQUFJO1lBQ3RDbEIsT0FBT21CLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkUixRQUFRUSxLQUFLLENBQUMsU0FBU0E7UUFDekI7SUFDRjtJQUVBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHNUIscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUM2QixVQUFVQyxZQUFZLEdBQUc5QixxREFBYyxDQUFDO0lBRS9DLE1BQU0rQixhQUFhLE9BQU9DO1FBQ3hCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU0sRUFBRUMsTUFBTSxFQUFFUixLQUFLLEVBQUUsR0FBRyxNQUFNekIsMEVBQU1BLENBQUMwQixPQUFPRTtRQUU5QyxJQUFJSCxPQUFPO1lBQ1QsT0FBT1IsUUFBUUMsR0FBRyxDQUFDTztRQUNyQjtRQUVBLGtCQUFrQjtRQUNsQlIsUUFBUUMsR0FBRyxDQUFDZTtRQUNaLE9BQU81QixPQUFPbUIsSUFBSSxDQUFDO0lBQ3JCO0lBR0EscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQVFELFdBQVU7OzhCQUNqQiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3hDLDhEQUFDRztvQkFBS0MsVUFBVVQ7b0JBQVlLLFdBQVU7O3NDQUN0Qyw4REFBQ0s7NEJBQU1DLFNBQVE7NEJBQU9OLFdBQVU7OzhDQUM1Qiw4REFBQ087OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0M7b0NBQ0M3QixPQUFPUixrQkFBa0JHLElBQUk7b0NBQzdCbUMsVUFBVWhDO29DQUNWaUMsUUFBUTtvQ0FDUjlCLE1BQUs7b0NBQ0xOLE1BQUs7b0NBQ0xELElBQUc7b0NBQ0gyQixXQUFVO29DQUNWVyxhQUFZOzs7Ozs7Ozs7Ozs7c0NBSWhCLDhEQUFDTjs0QkFBTUMsU0FBUTs0QkFBUU4sV0FBVTs7OENBQy9CLDhEQUFDTzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQztvQ0FDQ0MsVUFBVSxDQUFDL0IsSUFBT2MsQ0FBQUEsU0FBU2QsRUFBRUcsTUFBTSxDQUFDRixLQUFLLEdBQUdQLHFCQUFxQjs0Q0FBRSxHQUFHRCxpQkFBaUI7NENBQUVJLE9BQU9HLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FBQyxFQUFDO29DQUNoSCtCLFFBQVE7b0NBQ1I5QixNQUFLO29DQUNMTixNQUFLO29DQUNMRCxJQUFHO29DQUNIMkIsV0FBVTtvQ0FDVlcsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ047NEJBQU1DLFNBQVE7NEJBQVdOLFdBQVU7OzhDQUNsQyw4REFBQ087OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0M7b0NBQ0NDLFVBQVUsQ0FBQy9CLElBQU9nQixDQUFBQSxZQUFZaEIsRUFBRUcsTUFBTSxDQUFDRixLQUFLLEdBQUdQLHFCQUFxQjs0Q0FBRSxHQUFHRCxpQkFBaUI7NENBQUVLLE9BQU9FLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FBQyxFQUFDO29DQUNuSCtCLFFBQVE7b0NBQ1I5QixNQUFLO29DQUNMTixNQUFLO29DQUNMRCxJQUFHO29DQUNIMkIsV0FBVTtvQ0FDVlcsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0M7NEJBQ0NoQyxNQUFLOzRCQUNMb0IsV0FBVTs0QkFDVmEsU0FBUzVCO3NDQUNWOzs7Ozs7c0NBR0QsOERBQUMyQjs0QkFDQ2hDLE1BQUs7NEJBQ0xvQixXQUFVOzRCQUNWYSxTQUFTLEtBQU8zQyxPQUFPbUIsSUFBSSxDQUFDLE1BQU9qQixxQkFBcUI7Z0NBQUUsR0FBR0QsaUJBQWlCO2dDQUFFRSxJQUFJeUM7NEJBQUMsRUFBQztzQ0FDdkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0F4SHdCN0M7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4P2ZjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzaWduVXAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlL2F1dGgvc2lnblVwXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG4vL2ltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IElBdmFsaWFkb3JGb3JtRGF0YSB9IGZyb20gXCJAL2ludGVyZmFjZXMvSUF2YWxpYWRvclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3QXZhbGlhZG9yKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YUF2YWxpYWRvciwgc2V0Rm9ybURhdGFBdmFsaWFkb3JdID0gdXNlU3RhdGU8SUF2YWxpYWRvckZvcm1EYXRhPih7XHJcbiAgICBpZDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBsb2dpbjogXCJcIixcclxuICAgIHNlbmhhOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXHJcbiAgICBlOlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgICAgIHwgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50eXBlKTtcclxuXHJcbiAgICAgIHNldEZvcm1EYXRhQXZhbGlhZG9yKChwcmV2Rm9ybURhdGEpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldkZvcm1EYXRhLCAvL21hbnTDqW0gdG9kb3Mgb3Mgb3V0cm9zIGRhZG9zIGludGFjdG9zXHJcbiAgICAgICAgW25hbWVdOiB2YWx1ZSwgLy9hbHRlcmEgbyBkYWRvIHF1ZSBlc3TDoSBzZW5kbyBtb2RpZmljYWRvXHJcbiAgICAgICAgLy8gcG9yIGV4ZW1wbG8sIGZpY2FyaWEgYXNzaW06IFtuYW1lXTogdmFsdWUgLS0+IGNwZjogMTJcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICBjb25zdCBtYWtlUG9zdFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9hdmFsaWFkb3Jlc1wiLCB7XHJcbiAgICAgICAgLi4uZm9ybURhdGFBdmFsaWFkb3IsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJEYWRvcyBlbnZpYWRvcyBjb20gc3VjZXNzbyFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9zdGE6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybzpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybSA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gYXdhaXQgc2lnblVwKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxzZSBzdWNjZXNzZnVsXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS04MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93LWxnIHRleHQtYmxhY2tcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5DYWRhc3RyYXIgQXZhbGlhZG9yPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybX0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+Tm9tZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhQXZhbGlhZG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxwPkxvZ2luPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IChzZXRFbWFpbChlLnRhcmdldC52YWx1ZSksIHNldEZvcm1EYXRhQXZhbGlhZG9yKHsgLi4uZm9ybURhdGFBdmFsaWFkb3IsIGxvZ2luOiBlLnRhcmdldC52YWx1ZSB9KSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxwPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IChzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSksIHNldEZvcm1EYXRhQXZhbGlhZG9yKHsgLi4uZm9ybURhdGFBdmFsaWFkb3IsIHNlbmhhOiBlLnRhcmdldC52YWx1ZSB9KSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e21ha2VQb3N0UmVxdWVzdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAocm91dGVyLnB1c2goXCIvXCIpKSwgc2V0Rm9ybURhdGFBdmFsaWFkb3IoeyAuLi5mb3JtRGF0YUF2YWxpYWRvciwgaWQ6IHV9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzaWduVXAiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFwaSIsIk5ld0F2YWxpYWRvciIsInJvdXRlciIsImZvcm1EYXRhQXZhbGlhZG9yIiwic2V0Rm9ybURhdGFBdmFsaWFkb3IiLCJpZCIsIm5hbWUiLCJsb2dpbiIsInNlbmhhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2Rm9ybURhdGEiLCJtYWtlUG9zdFJlcXVlc3QiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwicHVzaCIsImVycm9yIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newAvaliador/page.tsx\n"));

/***/ })

});