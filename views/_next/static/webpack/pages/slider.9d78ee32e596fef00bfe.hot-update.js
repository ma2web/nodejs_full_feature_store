webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/domains/Slider/Slider.tsx":
/*!***************************************!*\
  !*** ./src/domains/Slider/Slider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/domains/Slider/Slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      slider = _useState[0],\n      setSlider = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      setSlider(res === null || res === void 0 ? void 0 : res.data);\n    })[\"catch\"](function (err) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(err.message);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"Upload File\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: \"flex\"\n      },\n      children: slider === null || slider === void 0 ? void 0 : slider.map(function (el) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: \"relative\",\n            padding: 10\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            width: 300,\n            src: \"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/uploads/slider/\").concat(el)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              position: \"absolute\",\n              top: 0,\n              right: 0,\n              background: \"red\",\n              width: 30,\n              height: 30,\n              display: \"flex\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              borderRadius: \"50%\",\n              cursor: \"pointer\",\n              color: \"#fff\"\n            },\n            children: \"X\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Dashboard, \"aXozZSE7rEPWs4yUvl+tJiwtwpo=\");\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvU2xpZGVyL1NsaWRlci50c3g/ODMxMiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VTdGF0ZSIsInNsaWRlciIsInNldFNsaWRlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJ0b2FzdCIsImVycm9yIiwibWVzc2FnZSIsImRpc3BsYXkiLCJtYXAiLCJlbCIsInBvc2l0aW9uIiwicGFkZGluZyIsInRvcCIsInJpZ2h0IiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFFdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUNGQyxHQURILFdBQ1VDLCtDQURWLGtCQUM0QjtBQUN4QkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCQyxZQUFZLENBQUNDO0FBRHRCO0FBRGUsS0FENUIsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxlQUFTLENBQUNTLEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFFQyxJQUFOLENBQVQ7QUFDRCxLQVJILFdBU1MsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLG9EQUFLLENBQUNDLEtBQU4sQ0FBWUYsR0FBRyxDQUFDRyxPQUFoQixDQUFUO0FBQUEsS0FUVDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFZQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUEsZ0JBQ0doQixNQURILGFBQ0dBLE1BREgsdUJBQ0dBLE1BQU0sQ0FBRWlCLEdBQVIsQ0FBWSxVQUFDQyxFQUFEO0FBQUEsNEJBQ1g7QUFBSyxlQUFLLEVBQUU7QUFBRUMsb0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxtQkFBTyxFQUFFO0FBQWpDLFdBQVo7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUUsR0FBWjtBQUFpQixlQUFHLFlBQUtmLCtDQUFMLDZCQUEyQmEsRUFBM0I7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsaUJBQUssRUFBRTtBQUNMQyxzQkFBUSxFQUFFLFVBREw7QUFFTEUsaUJBQUcsRUFBRSxDQUZBO0FBR0xDLG1CQUFLLEVBQUUsQ0FIRjtBQUlMQyx3QkFBVSxFQUFFLEtBSlA7QUFLTEMsbUJBQUssRUFBRSxFQUxGO0FBTUxDLG9CQUFNLEVBQUUsRUFOSDtBQU9MVCxxQkFBTyxFQUFFLE1BUEo7QUFRTFUsNEJBQWMsRUFBRSxRQVJYO0FBU0xDLHdCQUFVLEVBQUUsUUFUUDtBQVVMQywwQkFBWSxFQUFFLEtBVlQ7QUFXTEMsb0JBQU0sRUFBRSxTQVhIO0FBWUxDLG1CQUFLLEVBQUU7QUFaRixhQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0E5Q0Q7O0dBQU1oQyxTOztLQUFBQSxTO0FBZ0RTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9kb21haW5zL1NsaWRlci9TbGlkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcImRvbWFpbnMvYXBpXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBbc2xpZGVyLCBzZXRTbGlkZXJdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAke2FwaX0vYXBpL3NsaWRlcmAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6IGxvY2FsU3RvcmFnZS50b2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFNsaWRlcihyZXM/LmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSkpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24+VXBsb2FkIEZpbGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAge3NsaWRlcj8ubWFwKChlbCkgPT4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgcGFkZGluZzogMTAgfX0+XG4gICAgICAgICAgICA8aW1nIHdpZHRoPXszMDB9IHNyYz17YCR7YXBpfS91cGxvYWRzL3NsaWRlci8ke2VsfWB9IC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/domains/Slider/Slider.tsx\n");

/***/ })

})