"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/newadress/page",{

/***/ "(app-pages-browser)/./src/app/newadress/page.tsx":
/*!************************************!*\
  !*** ./src/app/newadress/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewAdress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NewAdress() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [formDataAdress, setFormDataAdress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user_id: 0,\n        street: \"\",\n        city: \"\",\n        state: \"\",\n        zip_code: \"\",\n        country: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        console.log(e.target.name);\n        console.log(e.target.value);\n        console.log(e.target.type);\n        if (type === \"checkbox\") {\n            const checked = e.target.checked;\n            setFormDataAdress((prevFormData)=>({\n                    ...prevFormData,\n                    [name]: checked\n                }));\n        } else {\n            setFormData((prevFormData)=>({\n                    ...prevFormData,\n                    [name]: value\n                }));\n        }\n    };\n    const formatBirthDate = (dateString)=>{\n        const [year, month, day] = dateString.split(\"-\");\n        return \"\".concat(day, \"-\").concat(month, \"-\").concat(year);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"oi\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cairo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\AMF\\\\DesenvolvimentoI\\\\aula15\\\\desenvolvimento_sistemas_i_2024_01\\\\frontend\\\\src\\\\app\\\\newadress\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(NewAdress, \"jedjLMD0/8SvrnfTFzZZfUbwWHg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewAdress;\nvar _c;\n$RefreshReg$(_c, \"NewAdress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3YWRyZXNzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUs3QixTQUFTRTs7SUFDcEIsTUFBTUMsU0FBU0YsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQWtCO1FBQ2xFTSxTQUFTO1FBQ1RDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsU0FBUztJQUNiO0lBQ0EsTUFBTUMsZUFBZSxDQUNqQkM7UUFJQSxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0gsRUFBRUksTUFBTTtRQUN0Q0MsUUFBUUMsR0FBRyxDQUFDTixFQUFFSSxNQUFNLENBQUNILElBQUk7UUFDekJJLFFBQVFDLEdBQUcsQ0FBQ04sRUFBRUksTUFBTSxDQUFDRixLQUFLO1FBQzFCRyxRQUFRQyxHQUFHLENBQUNOLEVBQUVJLE1BQU0sQ0FBQ0QsSUFBSTtRQUV6QixJQUFJQSxTQUFTLFlBQVk7WUFDdkIsTUFBTUksVUFBVSxFQUFHSCxNQUFNLENBQXNCRyxPQUFPO1lBQ3REZixrQkFBa0IsQ0FBQ2dCLGVBQWtCO29CQUNuQyxHQUFHQSxZQUFZO29CQUNmLENBQUNQLEtBQUssRUFBRU07Z0JBQ1Y7UUFDRixPQUFPO1lBQ0xFLFlBQVksQ0FBQ0QsZUFBa0I7b0JBQzdCLEdBQUdBLFlBQVk7b0JBQ2YsQ0FBQ1AsS0FBSyxFQUFFQztnQkFFVjtRQUNGO0lBQ0Y7SUFFQSxNQUFNUSxrQkFBa0IsQ0FBQ0M7UUFDdkIsTUFBTSxDQUFDQyxNQUFNQyxPQUFPQyxJQUFJLEdBQUdILFdBQVdJLEtBQUssQ0FBQztRQUM1QyxPQUFPLEdBQVVGLE9BQVBDLEtBQUksS0FBWUYsT0FBVEMsT0FBTSxLQUFRLE9BQUxEO0lBQzVCO0lBRUYscUJBQ0ksOERBQUNJO2tCQUFJOzs7Ozs7QUFHYjtHQTVDd0IzQjs7UUFDTEQsc0RBQVNBOzs7S0FESkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9uZXdhZHJlc3MvcGFnZS50c3g/MmE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuLy9pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBJQWRyZXNzRm9ybURhdGEgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lBZHJlc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0FkcmVzcygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhQWRyZXNzLCBzZXRGb3JtRGF0YUFkcmVzc10gPSB1c2VTdGF0ZTxJQWRyZXNzRm9ybURhdGE+KHtcclxuICAgICAgICB1c2VyX2lkOiAwLFxyXG4gICAgICAgIHN0cmVldDogXCJcIixcclxuICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgIHN0YXRlOiBcIlwiLFxyXG4gICAgICAgIHppcF9jb2RlOiBcIlwiLFxyXG4gICAgICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxyXG4gICAgICAgIGU6XHJcbiAgICAgICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgICAgICAgICB8IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50eXBlKTtcclxuICAgIFxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcclxuICAgICAgICAgIHNldEZvcm1EYXRhQWRyZXNzKChwcmV2Rm9ybURhdGEpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXZGb3JtRGF0YSxcclxuICAgICAgICAgICAgW25hbWVdOiBjaGVja2VkLFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRGb3JtRGF0YSgocHJldkZvcm1EYXRhKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2Rm9ybURhdGEsIC8vbWFudMOpbSB0b2RvcyBvcyBvdXRyb3MgZGFkb3MgaW50YWN0b3NcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSwgLy9hbHRlcmEgbyBkYWRvIHF1ZSBlc3TDoSBzZW5kbyBtb2RpZmljYWRvXHJcbiAgICAgICAgICAgIC8vIHBvciBleGVtcGxvLCBmaWNhcmlhIGFzc2ltOiBbbmFtZV06IHZhbHVlIC0tPiBjcGY6IDEyXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGZvcm1hdEJpcnRoRGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGVTdHJpbmcuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+b2k8L2Rpdj5cclxuICAgIClcclxuICBcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJOZXdBZHJlc3MiLCJyb3V0ZXIiLCJmb3JtRGF0YUFkcmVzcyIsInNldEZvcm1EYXRhQWRyZXNzIiwidXNlcl9pZCIsInN0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcF9jb2RlIiwiY291bnRyeSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNoZWNrZWQiLCJwcmV2Rm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZvcm1hdEJpcnRoRGF0ZSIsImRhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJzcGxpdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newadress/page.tsx\n"));

/***/ })

});