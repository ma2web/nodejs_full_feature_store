webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/domains/Slider/Slider.tsx":
/*!***************************************!*\
  !*** ./src/domains/Slider/Slider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/domains/Slider/Slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      slider = _useState[0],\n      setSlider = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      setSlider(res === null || res === void 0 ? void 0 : res.data);\n    })[\"catch\"](function (err) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(err.message);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: slider === null || slider === void 0 ? void 0 : slider.map(function (el) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          position: \"relative\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          width: 300,\n          src: \"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/uploads/slider/\").concat(el)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: \"absolute\",\n            top: 0,\n            right: 0,\n            background: \"red\",\n            width: 30,\n            height: 30,\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n          },\n          children: \"X\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Dashboard, \"aXozZSE7rEPWs4yUvl+tJiwtwpo=\");\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvU2xpZGVyL1NsaWRlci50c3g/ODMxMiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VTdGF0ZSIsInNsaWRlciIsInNldFNsaWRlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJ0b2FzdCIsImVycm9yIiwibWVzc2FnZSIsIm1hcCIsImVsIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFFdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUNGQyxHQURILFdBQ1VDLCtDQURWLGtCQUM0QjtBQUN4QkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCQyxZQUFZLENBQUNDO0FBRHRCO0FBRGUsS0FENUIsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxlQUFTLENBQUNTLEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFFQyxJQUFOLENBQVQ7QUFDRCxLQVJILFdBU1MsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLG9EQUFLLENBQUNDLEtBQU4sQ0FBWUYsR0FBRyxDQUFDRyxPQUFoQixDQUFUO0FBQUEsS0FUVDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFZQSxzQkFDRTtBQUFBLGNBQ0dmLE1BREgsYUFDR0EsTUFESCx1QkFDR0EsTUFBTSxDQUFFZ0IsR0FBUixDQUFZLFVBQUNDLEVBQUQ7QUFBQSwwQkFDWDtBQUFLLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBWjtBQUFBLGdDQUNFO0FBQUssZUFBSyxFQUFFLEdBQVo7QUFBaUIsYUFBRyxZQUFLYiwrQ0FBTCw2QkFBMkJZLEVBQTNCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUNFLGVBQUssRUFBRTtBQUNMQyxvQkFBUSxFQUFFLFVBREw7QUFFTEMsZUFBRyxFQUFFLENBRkE7QUFHTEMsaUJBQUssRUFBRSxDQUhGO0FBSUxDLHNCQUFVLEVBQUUsS0FKUDtBQUtMQyxpQkFBSyxFQUFFLEVBTEY7QUFNTEMsa0JBQU0sRUFBRSxFQU5IO0FBT0xDLG1CQUFPLEVBQUUsTUFQSjtBQVFMQywwQkFBYyxFQUFFLFFBUlg7QUFTTEMsc0JBQVUsRUFBRTtBQVRQLFdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBdENEOztHQUFNNUIsUzs7S0FBQUEsUztBQXdDU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvZG9tYWlucy9TbGlkZXIvU2xpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJkb21haW5zL2FwaVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW3NsaWRlciwgc2V0U2xpZGVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHthcGl9L2FwaS9zbGlkZXJgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRTbGlkZXIocmVzPy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c2xpZGVyPy5tYXAoKGVsKSA9PiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICA8aW1nIHdpZHRoPXszMDB9IHNyYz17YCR7YXBpfS91cGxvYWRzL3NsaWRlci8ke2VsfWB9IC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFhcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/domains/Slider/Slider.tsx\n");

/***/ })

})