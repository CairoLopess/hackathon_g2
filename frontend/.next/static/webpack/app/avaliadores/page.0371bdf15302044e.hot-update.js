"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/avaliadores/page",{

/***/ "(app-pages-browser)/./src/app/avaliadores/page.tsx":
/*!**************************************!*\
  !*** ./src/app/avaliadores/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function fetchAvaliadores() {\n    const result = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/avaliadores\");\n    return result.data;\n}\nfunction Home() {\n    _s();\n    const [avaliadores, setAvaliadores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [filteredAvaliadores, setFilteredAvaliadores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getAvaliadores = async ()=>{\n            const avaliadoresData = await fetchAvaliadores();\n            setAvaliadores(avaliadoresData);\n            setFilteredAvaliadores(avaliadoresData);\n            setLoading(false);\n        };\n        getAvaliadores();\n    }, []);\n    const handleDelete = async (avaliadorId)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/avaliadores/\".concat(avaliadorId));\n            setAvaliadores(avaliadores.filter((avaliador)=>avaliador.id !== avaliadorId));\n            setFilteredAvaliadores(filteredAvaliadores.filter((avaliador)=>avaliador.id !== avaliadorId));\n        } catch (error) {\n            console.error(\"Erro ao excluir avaliador\", error);\n        }\n    };\n    const handleSearch = ()=>{\n        const filtered = avaliadores.filter((avaliador)=>avaliador.name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredAvaliadores(filtered);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \" bg-gray-900 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-8 text-center text-white\",\n                children: \"Carregando...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-900 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex-1 container mx-auto mt-8 px-4 flex flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-8 text-center text-green\",\n                    children: \"Avaliadores\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mb-8 mt-8 justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Filtrar por nome\",\n                            value: searchTerm,\n                            onChange: (e)=>setSearchTerm(e.target.value),\n                            className: \"border border-gray-300  text-black rounded-md px-3 py-2 mr-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSearch,\n                            className: \"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded\",\n                            children: \"Filtrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 pt-4 pb-4 flex items-center justify-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>router.push(\"/newAvaliador\"),\n                        className: \"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2\",\n                        children: \"Adicionar novo avaliador\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                    children: filteredAvaliadores.length > 0 ? filteredAvaliadores.map((avaliador)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white rounded-lg overflow-hidden shadow-lg flex flex-col mb-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-6 py-4 flex-grow flex flex-col justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"font-bold text-xl text-black text-center uppercase mb-2 h-auto overflow-hidden\",\n                                        children: avaliador.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-6 pt-4 pb-4 flex items-center justify-center text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleDelete(avaliador.id),\n                                            className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2\",\n                                            children: \"Excluir\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/createName/\".concat(avaliador.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2\",\n                                                children: \"Alterar Nome\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, avaliador.id, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-center\",\n                        children: \"Nenhum avaliador encontrado!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\avaliadores\\\\page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"SA5zL134/2HHsmz0GQLiasJnjt4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXZhbGlhZG9yZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3RCO0FBQ1E7QUFFTztBQUU1QyxlQUFlTTtJQUNiLE1BQU1DLFNBQVMsTUFBTUgscURBQUdBLENBQUNJLEdBQUcsQ0FBQztJQUM3QixPQUFPRCxPQUFPRSxJQUFJO0FBQ3BCO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBZSxFQUFFO0lBQy9ELE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNjLHFCQUFxQkMsdUJBQXVCLEdBQUdmLCtDQUFRQSxDQUFlLEVBQUU7SUFDL0UsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQVM7SUFDckQsTUFBTWtCLFNBQVNkLDBEQUFTQTtJQUV4QkgsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsaUJBQWlCO1lBQ3JCLE1BQU1DLGtCQUFrQixNQUFNZjtZQUM5Qk0sZUFBZVM7WUFDZkwsdUJBQXVCSztZQUN2QlAsV0FBVztRQUNiO1FBQ0FNO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxPQUFPQztRQUMxQixJQUFJO1lBQ0YsTUFBTW5CLHFEQUFHQSxDQUFDb0IsTUFBTSxDQUFDLGdCQUE0QixPQUFaRDtZQUVqQ1gsZUFBZUQsWUFBWWMsTUFBTSxDQUFDLENBQUNDLFlBQWNBLFVBQVVDLEVBQUUsS0FBS0o7WUFDbEVQLHVCQUF1QkQsb0JBQW9CVSxNQUFNLENBQUMsQ0FBQ0MsWUFBY0EsVUFBVUMsRUFBRSxLQUFLSjtRQUVwRixFQUFFLE9BQU9LLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDN0M7SUFDRjtJQUVBLE1BQU1FLGVBQWU7UUFDbkIsTUFBTUMsV0FBV3BCLFlBQVljLE1BQU0sQ0FBQyxDQUFDQyxZQUNuQ0EsVUFBVU0sSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2pCLFdBQVdnQixXQUFXO1FBRTlEakIsdUJBQXVCZTtJQUN6QjtJQUVBLElBQUlsQixTQUFTO1FBQ1gscUJBQ0UsOERBQUNzQjtZQUFLQyxXQUFVO3NCQUNkLDRFQUFDQztnQkFBR0QsV0FBVTswQkFBaUQ7Ozs7Ozs7Ozs7O0lBR3JFO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlGLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUtDLFdBQVU7OzhCQUNoQiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQWlEOzs7Ozs7OEJBQy9ELDhEQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxPQUFPekI7NEJBQ1AwQixVQUFVLENBQUNDLElBQU0xQixjQUFjMEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUM3Q04sV0FBVTs7Ozs7O3NDQUVaLDhEQUFDVTs0QkFDQ0MsU0FBU2pCOzRCQUNUTSxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNFO29CQUFJRixXQUFVOzhCQUNYLDRFQUFDVTt3QkFDR0MsU0FBUyxJQUFNNUIsT0FBTzZCLElBQUksQ0FBQzt3QkFDM0JaLFdBQVU7a0NBQ2I7Ozs7Ozs7Ozs7OzhCQUtMLDhEQUFDYTtvQkFBUWIsV0FBVTs4QkFDaEJyQixvQkFBb0JtQyxNQUFNLEdBQUcsSUFDNUJuQyxvQkFBb0JvQyxHQUFHLENBQUMsQ0FBQ3pCO3dCQUN2QixxQkFDRSw4REFBQ1k7NEJBRUNGLFdBQVU7OzhDQUVWLDhEQUFDRTtvQ0FBSUYsV0FBVTs4Q0FDYiw0RUFBQ2dCO3dDQUFHaEIsV0FBVTtrREFDWFYsVUFBVU0sSUFBSTs7Ozs7Ozs7Ozs7OENBR25CLDhEQUFDTTtvQ0FBSUYsV0FBVTs7c0RBQ2IsOERBQUNVOzRDQUNDQyxTQUFTLElBQU16QixhQUFhSSxVQUFVQyxFQUFFOzRDQUN4Q1MsV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDakMsaURBQUlBOzRDQUFDa0QsTUFBTSxlQUE0QixPQUFiM0IsVUFBVUMsRUFBRTtzREFDckMsNEVBQUNtQjtnREFBT1YsV0FBVTswREFBNEU7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFoQjdGVixVQUFVQyxFQUFFOzs7OztvQkF1QnZCLG1CQUVBLDhEQUFDVTt3QkFBR0QsV0FBVTtrQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQ7R0E1R3dCMUI7O1FBS1BMLHNEQUFTQTs7O0tBTEZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXZhbGlhZG9yZXMvcGFnZS50c3g/OGU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IElBdmFsaWFkb3IgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBdmFsaWFkb3JcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdmFsaWFkb3JlcygpOiBQcm9taXNlPElBdmFsaWFkb3JbXT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQoXCIvYXZhbGlhZG9yZXNcIik7XHJcbiAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFthdmFsaWFkb3Jlcywgc2V0QXZhbGlhZG9yZXNdID0gdXNlU3RhdGU8SUF2YWxpYWRvcltdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkQXZhbGlhZG9yZXMsIHNldEZpbHRlcmVkQXZhbGlhZG9yZXNdID0gdXNlU3RhdGU8SUF2YWxpYWRvcltdPihbXSk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEF2YWxpYWRvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhdmFsaWFkb3Jlc0RhdGEgPSBhd2FpdCBmZXRjaEF2YWxpYWRvcmVzKCk7XHJcbiAgICAgIHNldEF2YWxpYWRvcmVzKGF2YWxpYWRvcmVzRGF0YSk7XHJcbiAgICAgIHNldEZpbHRlcmVkQXZhbGlhZG9yZXMoYXZhbGlhZG9yZXNEYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0QXZhbGlhZG9yZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChhdmFsaWFkb3JJZDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkuZGVsZXRlKGAvYXZhbGlhZG9yZXMvJHthdmFsaWFkb3JJZH1gKTtcclxuICAgICAgXHJcbiAgICAgIHNldEF2YWxpYWRvcmVzKGF2YWxpYWRvcmVzLmZpbHRlcigoYXZhbGlhZG9yKSA9PiBhdmFsaWFkb3IuaWQgIT09IGF2YWxpYWRvcklkKSk7XHJcbiAgICAgIHNldEZpbHRlcmVkQXZhbGlhZG9yZXMoZmlsdGVyZWRBdmFsaWFkb3Jlcy5maWx0ZXIoKGF2YWxpYWRvcikgPT4gYXZhbGlhZG9yLmlkICE9PSBhdmFsaWFkb3JJZCkpO1xyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGV4Y2x1aXIgYXZhbGlhZG9yXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGF2YWxpYWRvcmVzLmZpbHRlcigoYXZhbGlhZG9yKSA9PlxyXG4gICAgICBhdmFsaWFkb3IubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICk7XHJcbiAgICBzZXRGaWx0ZXJlZEF2YWxpYWRvcmVzKGZpbHRlcmVkKTtcclxuICB9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiIGJnLWdyYXktOTAwIFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+Q2FycmVnYW5kby4uLjwvaDE+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS05MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIGNvbnRhaW5lciBteC1hdXRvIG10LTggcHgtNCBmbGV4IGZsZXgtY29sIFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTggdGV4dC1jZW50ZXIgdGV4dC1ncmVlblwiPkF2YWxpYWRvcmVzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTggbXQtOCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdHJhciBwb3Igbm9tZVwiXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwICB0ZXh0LWJsYWNrIHJvdW5kZWQtbWQgcHgtMyBweS0yIG1yLTJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRmlsdHJhclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB0LTQgcGItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL25ld0F2YWxpYWRvclwiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG1yLTJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkaWNpb25hciBub3ZvIGF2YWxpYWRvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZEF2YWxpYWRvcmVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBmaWx0ZXJlZEF2YWxpYWRvcmVzLm1hcCgoYXZhbGlhZG9yOiBJQXZhbGlhZG9yKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXthdmFsaWFkb3IuaWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBtYi0xMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgZmxleC1ncm93IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIHVwcGVyY2FzZSBtYi0yIGgtYXV0byBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXZhbGlhZG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBwdC00IHBiLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShhdmFsaWFkb3IuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEV4Y2x1aXJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY3JlYXRlTmFtZS8ke2F2YWxpYWRvci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEFsdGVyYXIgTm9tZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+TmVuaHVtIGF2YWxpYWRvciBlbmNvbnRyYWRvITwvaDE+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImFwaSIsInVzZVJvdXRlciIsImZldGNoQXZhbGlhZG9yZXMiLCJyZXN1bHQiLCJnZXQiLCJkYXRhIiwiSG9tZSIsImF2YWxpYWRvcmVzIiwic2V0QXZhbGlhZG9yZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZpbHRlcmVkQXZhbGlhZG9yZXMiLCJzZXRGaWx0ZXJlZEF2YWxpYWRvcmVzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJyb3V0ZXIiLCJnZXRBdmFsaWFkb3JlcyIsImF2YWxpYWRvcmVzRGF0YSIsImhhbmRsZURlbGV0ZSIsImF2YWxpYWRvcklkIiwiZGVsZXRlIiwiZmlsdGVyIiwiYXZhbGlhZG9yIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTZWFyY2giLCJmaWx0ZXJlZCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwic2VjdGlvbiIsImxlbmd0aCIsIm1hcCIsImgyIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/avaliadores/page.tsx\n"));

/***/ })

});