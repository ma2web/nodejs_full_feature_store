webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/domains/Slider/Slider.tsx":
/*!***************************************!*\
  !*** ./src/domains/Slider/Slider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/domains/Slider/Slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      slider = _useState[0],\n      setSlider = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      setSlider(res === null || res === void 0 ? void 0 : res.data);\n    })[\"catch\"](function (err) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(err.message);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginBottom: 20\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        onChange: function onChange(e) {\n          var imageFileName = e.target.files[0];\n          var formdata = new FormData();\n          formdata === null || formdata === void 0 ? void 0 : formdata.append(\"slider\", imageFileName);\n          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider/upload\"), formdata, {\n            headers: {\n              \"x-auth-token\": localStorage.token\n            }\n          }).then(function () {\n            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider\"), {\n              headers: {\n                \"x-auth-token\": localStorage.token\n              }\n            }).then(function (res) {\n              setSlider(res === null || res === void 0 ? void 0 : res.data);\n            });\n          })[\"catch\"](function (err) {\n            return react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(err.message);\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: \"flex\",\n        flexWrap: \"wrap\"\n      },\n      children: slider === null || slider === void 0 ? void 0 : slider.map(function (el) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            position: \"relative\",\n            padding: 10,\n            width: 250\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/uploads/slider/\").concat(el)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              position: \"absolute\",\n              top: 0,\n              right: 0,\n              background: \"red\",\n              width: 30,\n              height: 30,\n              display: \"flex\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              borderRadius: \"50%\",\n              cursor: \"pointer\",\n              color: \"#fff\"\n            },\n            onClick: function onClick(e) {\n              axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"], \"/api/slider\"), {\n                headers: {\n                  \"x-auth-token\": localStorage.token\n                }\n              }).then(function (res) {\n                setSlider(res === null || res === void 0 ? void 0 : res.data);\n              })[\"catch\"](function (err) {\n                return react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(err.message);\n              });\n            },\n            children: \"X\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Dashboard, \"aXozZSE7rEPWs4yUvl+tJiwtwpo=\");\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvU2xpZGVyL1NsaWRlci50c3g/ODMxMiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VTdGF0ZSIsInNsaWRlciIsInNldFNsaWRlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJ0b2FzdCIsImVycm9yIiwibWVzc2FnZSIsIm1hcmdpbkJvdHRvbSIsImUiLCJpbWFnZUZpbGVOYW1lIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImVsIiwicG9zaXRpb24iLCJwYWRkaW5nIiwid2lkdGgiLCJ0b3AiLCJyaWdodCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUV0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdEQUFLLENBQ0ZDLEdBREgsV0FDVUMsK0NBRFYsa0JBQzRCO0FBQ3hCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0JDLFlBQVksQ0FBQ0M7QUFEdEI7QUFEZSxLQUQ1QixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JULGVBQVMsQ0FBQ1MsR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUVDLElBQU4sQ0FBVDtBQUNELEtBUkgsV0FTUyxVQUFDQyxHQUFEO0FB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WUYsR0FBRyxDQUFDRyxPQUFoQixDQUFUO0FBQUEsZUFUVDtBQVVELGFBMUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUVELENBbkZEOztHQUFNakIsUzs7S0FBQUEsUztBQXFGU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvZG9tYWlucy9TbGlkZXIvU2xpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJkb21haW5zL2FwaVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW3NsaWRlciwgc2V0U2xpZGVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHthcGl9L2FwaS9zbGlkZXJgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRTbGlkZXIocmVzPy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGxldCBpbWFnZUZpbGVOYW1lID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1kYXRhPy5hcHBlbmQoXCJzbGlkZXJcIiwgaW1hZ2VGaWxlTmFtZSk7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAucG9zdChgJHthcGl9L2FwaS9zbGlkZXIvdXBsb2FkYCwgZm9ybWRhdGEsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAuZ2V0KGAke2FwaX0vYXBpL3NsaWRlcmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6IGxvY2FsU3RvcmFnZS50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNsaWRlcihyZXM/LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSkpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAge3NsaWRlcj8ubWFwKChlbCkgPT4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgcGFkZGluZzogMTAsIHdpZHRoOiAyNTAgfX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7YXBpfS91cGxvYWRzL3NsaWRlci8ke2VsfWB9IC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgLmdldChgJHthcGl9L2FwaS9zbGlkZXJgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTbGlkZXIocmVzPy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/domains/Slider/Slider.tsx\n");

/***/ })

})