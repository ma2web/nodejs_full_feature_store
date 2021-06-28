webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/domains/Slider/Slider.tsx":
/*!***************************************!*\
  !*** ./src/domains/Slider/Slider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/domains/Slider/Slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      slider = _useState[0],\n      setSlider = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      setSlider(res === null || res === void 0 ? void 0 : res.data);\n    })[\"catch\"](function (err) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(err.message);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginBottom: 10\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        onChange: function onChange(e) {\n          console.log(e);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: \"flex\"\n      },\n      children: slider === null || slider === void 0 ? void 0 : slider.map(function (el) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: \"relative\",\n            padding: 10\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            width: 300,\n            src: \"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/uploads/slider/\").concat(el)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              position: \"absolute\",\n              top: 0,\n              right: 0,\n              background: \"red\",\n              width: 30,\n              height: 30,\n              display: \"flex\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              borderRadius: \"50%\",\n              cursor: \"pointer\",\n              color: \"#fff\"\n            },\n            children: \"X\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Dashboard, \"aXozZSE7rEPWs4yUvl+tJiwtwpo=\");\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvU2xpZGVyL1NsaWRlci50c3g/ODMxMiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VTdGF0ZSIsInNsaWRlciIsInNldFNsaWRlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJ0b2FzdCIsImVycm9yIiwibWVzc2FnZSIsIm1hcmdpbkJvdHRvbSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsIm1hcCIsImVsIiwicG9zaXRpb24iLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUV0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdEQUFLLENBQ0ZDLEdBREgsV0FDVUMsK0NBRFYsa0JBQzRCO0FBQ3hCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0JDLFlBQVksQ0FBQ0M7QUFEdEI7QUFEZSxLQUQ1QixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JULGVBQVMsQ0FBQ1MsR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUVDLElBQU4sQ0FBVDtBQUNELEtBUkgsV0FTUyxVQUFDQyxHQUFEO0FBQUEsYUFBU0Msb0RBQUssQ0FBQ0MsS0FBTixDQUFZRixHQUFHLENBQUNHLE9BQWhCLENBQVQ7QUFBQSxLQVRUO0FBVUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQixPQUFaO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRTtBQUFLLFdBQUssRUFBRTtBQUFFRyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUEsZ0JBQ0dwQixNQURILGFBQ0dBLE1BREgsdUJBQ0dBLE1BQU0sQ0FBRXFCLEdBQVIsQ0FBWSxVQUFDQyxFQUFEO0FBQUEsNEJBQ1g7QUFBSyxlQUFLLEVBQUU7QUFBRUMsb0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxtQkFBTyxFQUFFO0FBQWpDLFdBQVo7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUUsR0FBWjtBQUFpQixlQUFHLFlBQUtuQiwrQ0FBTCw2QkFBMkJpQixFQUEzQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxpQkFBSyxFQUFFO0FBQ0xDLHNCQUFRLEVBQUUsVUFETDtBQUVMRSxpQkFBRyxFQUFFLENBRkE7QUFHTEMsbUJBQUssRUFBRSxDQUhGO0FBSUxDLHdCQUFVLEVBQUUsS0FKUDtBQUtMQyxtQkFBSyxFQUFFLEVBTEY7QUFNTEMsb0JBQU0sRUFBRSxFQU5IO0FBT0xULHFCQUFPLEVBQUUsTUFQSjtBQVFMVSw0QkFBYyxFQUFFLFFBUlg7QUFTTEMsd0JBQVUsRUFBRSxRQVRQO0FBVUxDLDBCQUFZLEVBQUUsS0FWVDtBQVdMQyxvQkFBTSxFQUFFLFNBWEg7QUFZTEMsbUJBQUssRUFBRTtBQVpGLGFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQW5ERDs7R0FBTXBDLFM7O0tBQUFBLFM7QUFxRFNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2RvbWFpbnMvU2xpZGVyL1NsaWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiZG9tYWlucy9hcGlcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzbGlkZXIsIHNldFNsaWRlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYCR7YXBpfS9hcGkvc2xpZGVyYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjogbG9jYWxTdG9yYWdlLnRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0U2xpZGVyKHJlcz8uZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICB7c2xpZGVyPy5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9ezMwMH0gc3JjPXtgJHthcGl9L3VwbG9hZHMvc2xpZGVyLyR7ZWx9YH0gLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBYXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/domains/Slider/Slider.tsx\n");

/***/ })

})