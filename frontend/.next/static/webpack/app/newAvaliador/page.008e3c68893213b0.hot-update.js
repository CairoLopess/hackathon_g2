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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAvaliador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/auth/signUp */ \"(app-pages-browser)/./src/services/firebase/auth/signUp.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//import axios from \"axios\";\n\n\nfunction NewAvaliador() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formDataAvaliador, setFormDataAvaliador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        login: \"\",\n        senha: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        console.log(e.target.name);\n        console.log(e.target.value);\n        console.log(e.target.type);\n        setFormDataAvaliador((prevFormData)=>({\n                ...prevFormData,\n                [name]: value\n            }));\n    };\n    const makePostRequest = async ()=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/avaliadores\", {\n                ...formDataAvaliador\n            });\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n    };\n    const attId = ()=>{\n        setFormDataAvaliador({\n            ...formDataAvaliador,\n            id: userAuth === null || userAuth === void 0 ? void 0 : userAuth.uid\n        });\n    };\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const { userAuth, logout } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext)();\n    const handleForm = async (event)=>{\n        event.preventDefault();\n        const { result, error } = await (0,_services_firebase_auth_signUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(email, password);\n        if (error) {\n            return console.log(error);\n        }\n        // else successful\n        console.log(result);\n        return router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-800 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleForm,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: formDataAvaliador.name,\n                                    onChange: handleChange,\n                                    required: true,\n                                    type: \"text\",\n                                    name: \"name\",\n                                    id: \"name\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setEmail(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            login: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"email\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"example@mail.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>(setPassword(e.target.value), setFormDataAvaliador({\n                                            ...formDataAvaliador,\n                                            senha: e.target.value\n                                        })),\n                                    required: true,\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500\",\n                                    placeholder: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: makePostRequest,\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            onClick: ()=>(router.push(\"/\"), attId()),\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\newAvaliador\\\\page.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(NewAvaliador, \"vaEbnUSjXx2VqhJ5KbC/rFQjQXM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext\n    ];\n});\n_c = NewAvaliador;\nvar _c;\n$RefreshReg$(_c, \"NewAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDK0I7QUFDeEI7QUFDVztBQUM1Qyw0QkFBNEI7QUFDUztBQUVzQjtBQUc1QyxTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQXFCO1FBQzdFUSxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQ25CQztRQUlBLE1BQU0sRUFBRUosSUFBSSxFQUFFSyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ3RDQyxRQUFRQyxHQUFHLENBQUNMLEVBQUVHLE1BQU0sQ0FBQ1AsSUFBSTtRQUN6QlEsUUFBUUMsR0FBRyxDQUFDTCxFQUFFRyxNQUFNLENBQUNGLEtBQUs7UUFDMUJHLFFBQVFDLEdBQUcsQ0FBQ0wsRUFBRUcsTUFBTSxDQUFDRCxJQUFJO1FBRXZCUixxQkFBcUIsQ0FBQ1ksZUFBa0I7Z0JBQ3RDLEdBQUdBLFlBQVk7Z0JBQ2YsQ0FBQ1YsS0FBSyxFQUFFSztZQUVWO0lBQ0Y7SUFFRixNQUFNTSxrQkFBa0I7UUFDdEIsSUFBSTtZQUVGLE1BQU1DLFdBQVcsTUFBTW5CLHFEQUFHQSxDQUFDb0IsSUFBSSxDQUFDLGdCQUFnQjtnQkFDOUMsR0FBR2hCLGlCQUFpQjtZQUN0QjtZQUVBVyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLGFBQWFHLFNBQVNFLElBQUk7WUFDdENsQixPQUFPbUIsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RSLFFBQVFRLEtBQUssQ0FBQyxTQUFTQTtRQUN6QjtJQUNGO0lBRUEsTUFBTUMsUUFBUTtRQUFRbkIscUJBQXFCO1lBQUUsR0FBR0QsaUJBQWlCO1lBQUVFLEVBQUUsRUFBRW1CLHFCQUFBQSwrQkFBQUEsU0FBVUMsR0FBRztRQUFDO0lBQUk7SUFFekYsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdoQyxxREFBYyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2lDLFVBQVVDLFlBQVksR0FBR2xDLHFEQUFjLENBQUM7SUFDL0MsTUFBTSxFQUFFNkIsUUFBUSxFQUFFTSxNQUFNLEVBQUUsR0FBRzlCLG9FQUFjQTtJQUUzQyxNQUFNK0IsYUFBYSxPQUFPQztRQUN4QkEsTUFBTUMsY0FBYztRQUVwQixNQUFNLEVBQUVDLE1BQU0sRUFBRVosS0FBSyxFQUFFLEdBQUcsTUFBTTFCLDBFQUFNQSxDQUFDOEIsT0FBT0U7UUFFOUMsSUFBSU4sT0FBTztZQUNULE9BQU9SLFFBQVFDLEdBQUcsQ0FBQ087UUFDckI7UUFFQSxrQkFBa0I7UUFDbEJSLFFBQVFDLEdBQUcsQ0FBQ21CO1FBQ1osT0FBT2hDLE9BQU9tQixJQUFJLENBQUM7SUFDckI7SUFJQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBUUQsV0FBVTs7OEJBQ2pCLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDeEMsOERBQUNHO29CQUFLQyxVQUFVVDtvQkFBWUssV0FBVTs7c0NBQ3RDLDhEQUFDSzs0QkFBTUMsU0FBUTs0QkFBT04sV0FBVTs7OENBQzVCLDhEQUFDTzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQztvQ0FDQ2pDLE9BQU9SLGtCQUFrQkcsSUFBSTtvQ0FDN0J1QyxVQUFVcEM7b0NBQ1ZxQyxRQUFRO29DQUNSbEMsTUFBSztvQ0FDTE4sTUFBSztvQ0FDTEQsSUFBRztvQ0FDSCtCLFdBQVU7b0NBQ1ZXLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNOOzRCQUFNQyxTQUFROzRCQUFRTixXQUFVOzs4Q0FDL0IsOERBQUNPOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUNDQyxVQUFVLENBQUNuQyxJQUFPaUIsQ0FBQUEsU0FBU2pCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHUCxxQkFBcUI7NENBQUUsR0FBR0QsaUJBQWlCOzRDQUFFSSxPQUFPRyxFQUFFRyxNQUFNLENBQUNGLEtBQUs7d0NBQUMsRUFBQztvQ0FDaEhtQyxRQUFRO29DQUNSbEMsTUFBSztvQ0FDTE4sTUFBSztvQ0FDTEQsSUFBRztvQ0FDSCtCLFdBQVU7b0NBQ1ZXLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNOOzRCQUFNQyxTQUFROzRCQUFXTixXQUFVOzs4Q0FDbEMsOERBQUNPOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUNDQyxVQUFVLENBQUNuQyxJQUFPbUIsQ0FBQUEsWUFBWW5CLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHUCxxQkFBcUI7NENBQUUsR0FBR0QsaUJBQWlCOzRDQUFFSyxPQUFPRSxFQUFFRyxNQUFNLENBQUNGLEtBQUs7d0NBQUMsRUFBQztvQ0FDbkhtQyxRQUFRO29DQUNSbEMsTUFBSztvQ0FDTE4sTUFBSztvQ0FDTEQsSUFBRztvQ0FDSCtCLFdBQVU7b0NBQ1ZXLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNDOzRCQUNDcEMsTUFBSzs0QkFDTHdCLFdBQVU7NEJBQ1ZhLFNBQVNoQztzQ0FDVjs7Ozs7O3NDQUdELDhEQUFDK0I7NEJBQ0NwQyxNQUFLOzRCQUNMd0IsV0FBVTs0QkFDVmEsU0FBUyxJQUFPL0MsQ0FBQUEsT0FBT21CLElBQUksQ0FBQyxNQUFNRSxPQUFNO3NDQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTVId0J0Qjs7UUFDUEgsc0RBQVNBO1FBNENLRSxnRUFBY0E7OztLQTdDckJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbmV3QXZhbGlhZG9yL3BhZ2UudHN4P2ZjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzaWduVXAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlL2F1dGgvc2lnblVwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuLy9pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBJQXZhbGlhZG9yRm9ybURhdGEgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBdmFsaWFkb3JcIjtcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0F2YWxpYWRvcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZm9ybURhdGFBdmFsaWFkb3IsIHNldEZvcm1EYXRhQXZhbGlhZG9yXSA9IHVzZVN0YXRlPElBdmFsaWFkb3JGb3JtRGF0YT4oe1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgbG9naW46IFwiXCIsXHJcbiAgICBzZW5oYTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxyXG4gICAgZTpcclxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG4gICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudHlwZSk7XHJcblxyXG4gICAgICBzZXRGb3JtRGF0YUF2YWxpYWRvcigocHJldkZvcm1EYXRhKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZGb3JtRGF0YSwgLy9tYW50w6ltIHRvZG9zIG9zIG91dHJvcyBkYWRvcyBpbnRhY3Rvc1xyXG4gICAgICAgIFtuYW1lXTogdmFsdWUsIC8vYWx0ZXJhIG8gZGFkbyBxdWUgZXN0w6Egc2VuZG8gbW9kaWZpY2Fkb1xyXG4gICAgICAgIC8vIHBvciBleGVtcGxvLCBmaWNhcmlhIGFzc2ltOiBbbmFtZV06IHZhbHVlIC0tPiBjcGY6IDEyXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgY29uc3QgbWFrZVBvc3RSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvYXZhbGlhZG9yZXNcIiwge1xyXG4gICAgICAgIC4uLmZvcm1EYXRhQXZhbGlhZG9yLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGFkb3MgZW52aWFkb3MgY29tIHN1Y2Vzc28hXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3Bvc3RhOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm86XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhdHRJZCA9ICgpID0+IHsgc2V0Rm9ybURhdGFBdmFsaWFkb3IoeyAuLi5mb3JtRGF0YUF2YWxpYWRvciwgaWQ6IHVzZXJBdXRoPy51aWQgfSk7IH07XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7IHVzZXJBdXRoLCBsb2dvdXQgfSA9IHVzZUF1dGhDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm0gPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7IHJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsc2Ugc3VjY2Vzc2Z1bFxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+Q2FkYXN0cmFyIEF2YWxpYWRvcjwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm19IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxwPk5vbWU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YUF2YWxpYWRvci5uYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICA8cD5Mb2dpbjwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAoc2V0RW1haWwoZS50YXJnZXQudmFsdWUpLCBzZXRGb3JtRGF0YUF2YWxpYWRvcih7IC4uLmZvcm1EYXRhQXZhbGlhZG9yLCBsb2dpbjogZS50YXJnZXQudmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGVAbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICA8cD5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAoc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpLCBzZXRGb3JtRGF0YUF2YWxpYWRvcih7IC4uLmZvcm1EYXRhQXZhbGlhZG9yLCBzZW5oYTogZS50YXJnZXQudmFsdWUgfSkpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXttYWtlUG9zdFJlcXVlc3R9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHJvdXRlci5wdXNoKFwiL1wiKSwgYXR0SWQoKSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzaWduVXAiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFwaSIsInVzZUF1dGhDb250ZXh0IiwiTmV3QXZhbGlhZG9yIiwicm91dGVyIiwiZm9ybURhdGFBdmFsaWFkb3IiLCJzZXRGb3JtRGF0YUF2YWxpYWRvciIsImlkIiwibmFtZSIsImxvZ2luIiwic2VuaGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInByZXZGb3JtRGF0YSIsIm1ha2VQb3N0UmVxdWVzdCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJhdHRJZCIsInVzZXJBdXRoIiwidWlkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJoYW5kbGVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newAvaliador/page.tsx\n"));

/***/ })

});