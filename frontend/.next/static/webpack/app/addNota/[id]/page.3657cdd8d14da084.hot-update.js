"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addNota/[id]/page",{

/***/ "(app-pages-browser)/./src/app/addNota/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/addNota/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/AuthContext */ \"(app-pages-browser)/./src/context/AuthContext.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function fetchEquipes() {\n    const result = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/equipes\");\n    return result.data;\n}\nasync function fetchAvaliadores() {\n    const result = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/avaliadores\");\n    return result.data;\n}\nfunction Home() {\n    var _equipes_find;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { userAuth } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext)();\n    const [equipes, setEquipes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [avaliadores, setAvaliadores] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [avaliacao, setavAvaliacao] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        avaliador_id: \"\",\n        equipe_id: 0,\n        notas: {},\n        feita: false\n    });\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const { id } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getDados = async ()=>{\n            const equipesData = await fetchEquipes();\n            setEquipes(equipesData);\n            const avaliacaoData = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/avaliacoes/\".concat(id));\n            setavAvaliacao(avaliacaoData.data);\n            const avaliadoresData = await fetchAvaliadores();\n            setAvaliadores(avaliadoresData);\n        };\n        getDados();\n    }, []);\n    if (!(userAuth === null || userAuth === void 0 ? void 0 : userAuth.uid)) {\n        router.push(\"/signIn\");\n    }\n    const makePostRequest = async ()=>{\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/avaliacoes/\".concat(id), {\n                ...avaliacao,\n                feita: true\n            });\n            console.log(\"Dados enviados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n        } catch (error) {\n            console.error(\"Erro:\", error);\n        }\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-900 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex-1 container mx-auto mt-8 px-4 flex flex-col justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-gray-800 p-8 rounded-lg shadow-lg text-white w-full max-w-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-4 text-center text-green-500\",\n                        children: [\n                            \"Avaliar Equipe \",\n                            (_equipes_find = equipes.find((equipe)=>equipe.id === avaliacao.equipe_id)) === null || _equipes_find === void 0 ? void 0 : _equipes_find.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this),\n                    Object.keys(avaliacao.notas).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: key,\n                                    className: \"block font-bold mb-2 text-green-400\",\n                                    children: key\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: key,\n                                    name: key,\n                                    value: avaliacao.notas[key],\n                                    onChange: (e)=>setavAvaliacao({\n                                            ...avaliacao,\n                                            notas: {\n                                                ...avaliacao.notas,\n                                                [key]: e.target.value\n                                            }\n                                        }),\n                                    className: \"w-full border border-gray-400 p-2 rounded bg-gray-700 text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            children: \"Selecione uma nota\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"1\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"2\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"3\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"4\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"5\",\n                                            children: \"5\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"6\",\n                                            children: \"6\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"7\",\n                                            children: \"7\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"8\",\n                                            children: \"8\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"9\",\n                                            children: \"9\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"10\",\n                                            children: \"10\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, key, true, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: makePostRequest,\n                                className: \"w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline\",\n                                children: \"Cadastrar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"w-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline\",\n                                onClick: ()=>router.push(\"/\"),\n                                children: \"Cancelar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\addNota\\\\[id]\\\\page.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"CdF5JRWtq/+KMJ5NEZ1TRJ9qleY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRkTm90YS9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNYO0FBRUo7QUFHc0I7QUFPOUQsZUFBZU07SUFDYixNQUFNQyxTQUFTLE1BQU1ILHFEQUFHQSxDQUFDSSxHQUFHLENBQUM7SUFDN0IsT0FBT0QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGVBQWVDO0lBQ2IsTUFBTUgsU0FBUyxNQUFNSCxxREFBR0EsQ0FBQ0ksR0FBRyxDQUFDO0lBQzdCLE9BQU9ELE9BQU9FLElBQUk7QUFDcEI7QUFFZSxTQUFTRTtRQXFESUM7O0lBcEQxQixNQUFNQyxTQUFTYiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFYyxRQUFRLEVBQUUsR0FBR1Qsb0VBQWNBO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0csV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBZSxFQUFFO0lBQy9ELE1BQU0sQ0FBQ2UsV0FBV0MsZUFBZSxHQUFHaEIsK0NBQVFBLENBQWE7UUFDdkRpQixjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsT0FBTyxDQUFDO1FBQ1JDLE9BQU87SUFDVDtJQUNBLE1BQU1DLFNBQXNCdkIsMERBQVNBO0lBQ3JDLE1BQU0sRUFBRXdCLEVBQUUsRUFBRSxHQUFHRDtJQUVmdEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsV0FBVztZQUNmLE1BQU1DLGNBQWMsTUFBTXJCO1lBQzFCUyxXQUFXWTtZQUVYLE1BQU1DLGdCQUFnQixNQUFNeEIscURBQUdBLENBQUNJLEdBQUcsQ0FBQyxlQUFrQixPQUFIaUI7WUFDbkROLGVBQWVTLGNBQWNuQixJQUFJO1lBRWpDLE1BQU1vQixrQkFBa0IsTUFBTW5CO1lBQzlCTyxlQUFlWTtRQUNqQjtRQUVBSDtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksRUFBQ1oscUJBQUFBLCtCQUFBQSxTQUFVZ0IsR0FBRyxHQUFFO1FBQ2xCakIsT0FBT2tCLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU03QixxREFBR0EsQ0FBQzhCLEdBQUcsQ0FBQyxlQUFrQixPQUFIVCxLQUFNO2dCQUNsRCxHQUFHUCxTQUFTO2dCQUFFSyxPQUFPO1lBQ3ZCO1lBRUFZLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUMsYUFBYUgsU0FBU3hCLElBQUk7UUFDeEMsRUFBRSxPQUFPNEIsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsU0FBU0E7UUFDekI7UUFFQXhCLE9BQU9rQixJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLRCxXQUFVO3NCQUNkLDRFQUFDRTtnQkFBUUYsV0FBVTs7a0NBQ2pCLDhEQUFDRzt3QkFBR0gsV0FBVTs7NEJBQXFEOzZCQUNqRDNCLGdCQUFBQSxRQUFRK0IsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9uQixFQUFFLEtBQUtQLFVBQVVHLFNBQVMsZUFBMURULG9DQUFBQSxjQUE2RGlDLElBQUk7Ozs7Ozs7b0JBRWxGQyxPQUFPQyxJQUFJLENBQUM3QixVQUFVSSxLQUFLLEVBQUUwQixHQUFHLENBQUMsQ0FBQ0Msb0JBQ2pDLDhEQUFDWDs0QkFBY0MsV0FBVTs7OENBQ3ZCLDhEQUFDVztvQ0FBTUMsU0FBU0Y7b0NBQUtWLFdBQVU7OENBQzVCVTs7Ozs7OzhDQUVILDhEQUFDRztvQ0FDQzNCLElBQUl3QjtvQ0FDSkosTUFBTUk7b0NBQ05JLE9BQU9uQyxVQUFVSSxLQUFLLENBQUMyQixJQUFJO29DQUMzQkssVUFBVSxDQUFDQyxJQUFNcEMsZUFBZTs0Q0FBQyxHQUFHRCxTQUFTOzRDQUFFSSxPQUFPO2dEQUFFLEdBQUdKLFVBQVVJLEtBQUs7Z0RBQUUsQ0FBQzJCLElBQUksRUFBRU0sRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRDQUFDO3dDQUFDO29DQUNuR2QsV0FBVTs7c0RBRVYsOERBQUNrQjs0Q0FBT0osT0FBTTtzREFBRzs7Ozs7O3NEQUNqQiw4REFBQ0k7NENBQU9KLE9BQU07c0RBQUk7Ozs7OztzREFDbEIsOERBQUNJOzRDQUFPSixPQUFNO3NEQUFJOzs7Ozs7c0RBQ2xCLDhEQUFDSTs0Q0FBT0osT0FBTTtzREFBSTs7Ozs7O3NEQUNsQiw4REFBQ0k7NENBQU9KLE9BQU07c0RBQUk7Ozs7OztzREFDbEIsOERBQUNJOzRDQUFPSixPQUFNO3NEQUFJOzs7Ozs7c0RBQ2xCLDhEQUFDSTs0Q0FBT0osT0FBTTtzREFBSTs7Ozs7O3NEQUNsQiw4REFBQ0k7NENBQU9KLE9BQU07c0RBQUk7Ozs7OztzREFDbEIsOERBQUNJOzRDQUFPSixPQUFNO3NEQUFJOzs7Ozs7c0RBQ2xCLDhEQUFDSTs0Q0FBT0osT0FBTTtzREFBSTs7Ozs7O3NEQUNsQiw4REFBQ0k7NENBQU9KLE9BQU07c0RBQUs7Ozs7Ozs7Ozs7Ozs7MkJBckJiSjs7Ozs7a0NBeUJaLDhEQUFDWDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNtQjtnQ0FDQ0MsTUFBSztnQ0FDTEMsU0FBUzVCO2dDQUNUTyxXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNtQjtnQ0FDQ0MsTUFBSztnQ0FDTHBCLFdBQVU7Z0NBQ1ZxQixTQUFTLElBQU0vQyxPQUFPa0IsSUFBSSxDQUFDOzBDQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBckd3QnBCOztRQUNQWCxzREFBU0E7UUFDSEssZ0VBQWNBO1FBU1BKLHNEQUFTQTs7O0tBWGZVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRkTm90YS9baWRdL3BhZ2UudHN4P2JlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElFcXVpcGUgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lFcXVpcGVcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IElBdmFsaWFjYW8gfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBdmFsaWFjYW9cIjtcclxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IHsgSUF2YWxpYWRvciB9IGZyb20gXCJAL2ludGVyZmFjZXMvSUF2YWxpYWRvclwiO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0UGFyYW1zIGV4dGVuZHMgUGFyYW1zIHtcclxuICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEVxdWlwZXMoKTogUHJvbWlzZTxJRXF1aXBlW10+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KFwiL2VxdWlwZXNcIik7XHJcbiAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEF2YWxpYWRvcmVzKCk6IFByb21pc2U8SUF2YWxpYWRvcltdPiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldChcIi9hdmFsaWFkb3Jlc1wiKTtcclxuICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyQXV0aCB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuICBjb25zdCBbZXF1aXBlcywgc2V0RXF1aXBlc10gPSB1c2VTdGF0ZTxJRXF1aXBlW10+KFtdKTtcclxuICBjb25zdCBbYXZhbGlhZG9yZXMsIHNldEF2YWxpYWRvcmVzXSA9IHVzZVN0YXRlPElBdmFsaWFkb3JbXT4oW10pO1xyXG4gIGNvbnN0IFthdmFsaWFjYW8sIHNldGF2QXZhbGlhY2FvXSA9IHVzZVN0YXRlPElBdmFsaWFjYW8+KHtcclxuICAgIGF2YWxpYWRvcl9pZDogXCJcIixcclxuICAgIGVxdWlwZV9pZDogMCxcclxuICAgIG5vdGFzOiB7fSxcclxuICAgIGZlaXRhOiBmYWxzZVxyXG4gIH0pO1xyXG4gIGNvbnN0IHBhcmFtczogSVBvc3RQYXJhbXMgPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXREYWRvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZXF1aXBlc0RhdGEgPSBhd2FpdCBmZXRjaEVxdWlwZXMoKTtcclxuICAgICAgc2V0RXF1aXBlcyhlcXVpcGVzRGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBhdmFsaWFjYW9EYXRhID0gYXdhaXQgYXBpLmdldChgL2F2YWxpYWNvZXMvJHtpZH1gKTtcclxuICAgICAgc2V0YXZBdmFsaWFjYW8oYXZhbGlhY2FvRGF0YS5kYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IGF2YWxpYWRvcmVzRGF0YSA9IGF3YWl0IGZldGNoQXZhbGlhZG9yZXMoKTtcclxuICAgICAgc2V0QXZhbGlhZG9yZXMoYXZhbGlhZG9yZXNEYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0RGFkb3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghdXNlckF1dGg/LnVpZCkge1xyXG4gICAgcm91dGVyLnB1c2goXCIvc2lnbkluXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZVBvc3RSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucHV0KGAvYXZhbGlhY29lcy8ke2lkfWAsIHtcclxuICAgICAgICAuLi5hdmFsaWFjYW8sIGZlaXRhOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJEYWRvcyBlbnZpYWRvcyBjb20gc3VjZXNzbyFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9zdGE6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm86XCIsIGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktOTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBjb250YWluZXIgbXgtYXV0byBtdC04IHB4LTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgdGV4dC13aGl0ZSB3LWZ1bGwgbWF4LXctbGdcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlciB0ZXh0LWdyZWVuLTUwMFwiPlxyXG4gICAgICAgICAgICBBdmFsaWFyIEVxdWlwZSB7ZXF1aXBlcy5maW5kKChlcXVpcGUpID0+IGVxdWlwZS5pZCA9PT0gYXZhbGlhY2FvLmVxdWlwZV9pZCk/Lm5hbWV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKGF2YWxpYWNhby5ub3RhcykubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtrZXl9IGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtYm9sZCBtYi0yIHRleHQtZ3JlZW4tNDAwXCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgaWQ9e2tleX1cclxuICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXthdmFsaWFjYW8ubm90YXNba2V5XX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0YXZBdmFsaWFjYW8oey4uLmF2YWxpYWNhbywgbm90YXM6IHsgLi4uYXZhbGlhY2FvLm5vdGFzLCBba2V5XTogZS50YXJnZXQudmFsdWUgfX0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS00MDAgcC0yIHJvdW5kZWQgYmctZ3JheS03MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSB1bWEgbm90YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXttYWtlUG9zdFJlcXVlc3R9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJ1c2VBdXRoQ29udGV4dCIsImZldGNoRXF1aXBlcyIsInJlc3VsdCIsImdldCIsImRhdGEiLCJmZXRjaEF2YWxpYWRvcmVzIiwiSG9tZSIsImVxdWlwZXMiLCJyb3V0ZXIiLCJ1c2VyQXV0aCIsInNldEVxdWlwZXMiLCJhdmFsaWFkb3JlcyIsInNldEF2YWxpYWRvcmVzIiwiYXZhbGlhY2FvIiwic2V0YXZBdmFsaWFjYW8iLCJhdmFsaWFkb3JfaWQiLCJlcXVpcGVfaWQiLCJub3RhcyIsImZlaXRhIiwicGFyYW1zIiwiaWQiLCJnZXREYWRvcyIsImVxdWlwZXNEYXRhIiwiYXZhbGlhY2FvRGF0YSIsImF2YWxpYWRvcmVzRGF0YSIsInVpZCIsInB1c2giLCJtYWtlUG9zdFJlcXVlc3QiLCJyZXNwb25zZSIsInB1dCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzZWN0aW9uIiwiaDEiLCJmaW5kIiwiZXF1aXBlIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/addNota/[id]/page.tsx\n"));

/***/ })

});