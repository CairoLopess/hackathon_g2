"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createName/[id]/page",{

/***/ "(app-pages-browser)/./src/app/createName/[id]/page.tsx":
/*!******************************************!*\
  !*** ./src/app/createName/[id]/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addName; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function fetchAvaliadores() {\n    const result = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/avaliadores\");\n    return result.data;\n}\nfunction addName() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const [avaliadores, setAvaliadores] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { id } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getDados = async ()=>{\n            const avaliadoresData = await fetchAvaliadores();\n            setAvaliadores(avaliadoresData);\n        };\n        getDados();\n    }, []);\n    const updateName = async ()=>{\n        if (avaliadores.find((avaliador)=>avaliador.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {\n            alert(\"Nome ja existente, tente outro\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/avaliadores/\".concat(id), {\n                name: name\n            });\n            console.log(\"Dados atualizados com sucesso!\");\n            console.log(\"Resposta:\", response.data);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro ao atualizar usu\\xe1rio:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center bg-gray-900 justify-center my-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col gap-3 p-12 items-center w-[50%] bg-gray-700 rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3 items-center justify-center bg-gray-700 w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Insira o nome para o avaliador\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            onChange: (e)=>setName(e.target.value),\n                            value: name,\n                            placeholder: \"Novo nome\",\n                            className: \"border border-green-500 w-[50%] rounded-md px-3 py-2 mb-3 text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row gap-6 items-center justify-center w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: updateName,\n                            className: \"bg-green-500 hover:bg-e-700 text-white font-bold py-2 px-4 rounded\",\n                            children: \"Cadastrar nome\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>router.push(\"/\"),\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\hackathon_g2\\\\frontend\\\\src\\\\app\\\\createName\\\\[id]\\\\page.tsx\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, this);\n}\n_s(addName, \"0pn4M4MLUrWLkoAb+4C4lsv0Irs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlTmFtZS9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXVEO0FBQ3JCO0FBQ0Q7QUFFTztBQUd4QyxlQUFlSztJQUNiLE1BQU1DLFNBQVMsTUFBTUYscURBQUdBLENBQUNHLEdBQUcsQ0FBQztJQUM3QixPQUFPRCxPQUFPRSxJQUFJO0FBQ3BCO0FBS2lCLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTViwwREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU1VLFNBQXNCWiwwREFBU0E7SUFDckMsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFlLEVBQUU7SUFDL0QsTUFBTSxFQUFFYSxFQUFFLEVBQUUsR0FBR0g7SUFFZlgsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxXQUFXO1lBQ2YsTUFBTUMsa0JBQWtCLE1BQU1iO1lBQzlCVSxlQUFlRztRQUNqQjtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLGFBQWE7UUFDakIsSUFBSUwsWUFBWU0sSUFBSSxDQUFDLENBQUNDLFlBQWNBLFVBQVVWLElBQUksQ0FBQ1csaUJBQWlCLE9BQU9YLEtBQUtXLGlCQUFpQixLQUFLO1lBQ3BHQyxNQUFNO1lBQ047UUFDRjtRQUNBLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1wQixxREFBR0EsQ0FBQ3FCLEdBQUcsQ0FBQyxnQkFBbUIsT0FBSFQsS0FBTTtnQkFDbkRMLE1BQU1BO1lBQ1I7WUFFQWUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxhQUFhSCxTQUFTaEIsSUFBSTtZQUN0Q0UsT0FBT2tCLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkSCxRQUFRRyxLQUFLLENBQUMsaUNBQThCQTtRQUM5QztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtELFdBQVU7OzhCQUNkLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMeEIsTUFBSzs0QkFDTHlCLFVBQVUsQ0FBQ0MsSUFBTXpCLFFBQVF5QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQ3ZDQSxPQUFPNUI7NEJBQ1A2QixhQUFZOzRCQUNaVCxXQUFVOzs7Ozs7Ozs7Ozs7OEJBSWQsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1U7NEJBQ0NOLE1BQUs7NEJBQ0xPLFNBQVN2Qjs0QkFDVFksV0FBVTtzQ0FDWDs7Ozs7O3NDQUlELDhEQUFDVTs0QkFDQ04sTUFBSzs0QkFDTE8sU0FBUyxJQUFNaEMsT0FBT2tCLElBQUksQ0FBQzs0QkFDM0JHLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FwRXdCdEI7O1FBQ1BULHNEQUFTQTtRQUVJQyxzREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jcmVhdGVOYW1lL1tpZF0vcGFnZS50c3g/ZjI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBJQXZhbGlhZG9yIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9JQXZhbGlhZG9yXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEF2YWxpYWRvcmVzKCk6IFByb21pc2U8SUF2YWxpYWRvcltdPiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldChcIi9hdmFsaWFkb3Jlc1wiKTtcclxuICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbn1cclxuaW50ZXJmYWNlIElQb3N0UGFyYW1zIGV4dGVuZHMgUGFyYW1zIHtcclxuICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5hbWUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBwYXJhbXM6IElQb3N0UGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXZhbGlhZG9yZXMsIHNldEF2YWxpYWRvcmVzXSA9IHVzZVN0YXRlPElBdmFsaWFkb3JbXT4oW10pO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldERhZG9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF2YWxpYWRvcmVzRGF0YSA9IGF3YWl0IGZldGNoQXZhbGlhZG9yZXMoKTtcclxuICAgICAgICBzZXRBdmFsaWFkb3JlcyhhdmFsaWFkb3Jlc0RhdGEpO1xyXG4gICAgICB9O1xyXG4gICAgICBnZXREYWRvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZU5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChhdmFsaWFkb3Jlcy5maW5kKChhdmFsaWFkb3IpID0+IGF2YWxpYWRvci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBhbGVydChcIk5vbWUgamEgZXhpc3RlbnRlLCB0ZW50ZSBvdXRyb1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wdXQoYC9hdmFsaWFkb3Jlcy8ke2lkfWAsIHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhZG9zIGF0dWFsaXphZG9zIGNvbSBzdWNlc3NvIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3Bvc3RhOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHVzdcOhcmlvOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZ3JheS05MDAganVzdGlmeS1jZW50ZXIgbXktOFwiPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgcC0xMiBpdGVtcy1jZW50ZXIgdy1bNTAlXSBiZy1ncmF5LTcwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNzAwIHctWzk3JV1cIj5cclxuICAgICAgICAgICAgPGxhYmVsPkluc2lyYSBvIG5vbWUgcGFyYSBvIGF2YWxpYWRvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdm8gbm9tZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgdy1bNTAlXSByb3VuZGVkLW1kIHB4LTMgcHktMiBtYi0zIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC02IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs5NyVdXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVOYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBob3ZlcjpiZy1lLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYWRhc3RyYXIgbm9tZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICBcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiZmV0Y2hBdmFsaWFkb3JlcyIsInJlc3VsdCIsImdldCIsImRhdGEiLCJhZGROYW1lIiwicm91dGVyIiwibmFtZSIsInNldE5hbWUiLCJwYXJhbXMiLCJhdmFsaWFkb3JlcyIsInNldEF2YWxpYWRvcmVzIiwiaWQiLCJnZXREYWRvcyIsImF2YWxpYWRvcmVzRGF0YSIsInVwZGF0ZU5hbWUiLCJmaW5kIiwiYXZhbGlhZG9yIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJhbGVydCIsInJlc3BvbnNlIiwicHV0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createName/[id]/page.tsx\n"));

/***/ })

});