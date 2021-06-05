webpackHotUpdate_N_E("pages/orders",{

/***/ "./src/domains/Orders/useOrdersStyles.ts":
/*!***********************************************!*\
  !*** ./src/domains/Orders/useOrdersStyles.ts ***!
  \***********************************************/
/*! exports provided: useOrdersStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useOrdersStyles\", function() { return useOrdersStyles; });\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme */ \"./src/theme/index.ts\");\n\nvar useOrdersStyles = Object(theme__WEBPACK_IMPORTED_MODULE_0__[\"makeGolStyles\"])(function (_ref) {\n  var palette = _ref.palette,\n      spacing = _ref.spacing;\n  return {\n    root: {},\n    data: {\n      padding: spacing(2, 5),\n      \"& span\": {\n        color: function color(_ref2) {\n          var changeStatus = _ref2.changeStatus;\n          return changeStatus ? palette.success.main : palette.error.main;\n        },\n        cursor: \"pointer\"\n      }\n    },\n    items: {\n      borderBottom: \"1px solid \".concat(palette.neutral[200]),\n      display: \"flex\",\n      justifyContent: \"space-between\"\n    },\n    status: {\n      padding: spacing(0, 2),\n      borderRadius: 30\n    },\n    pending: {\n      background: \"yellow\"\n    },\n    proccessing: {\n      background: palette.warning.main\n    },\n    shipped: {\n      background: palette.info.main\n    },\n    delivered: {\n      background: palette.success.main,\n      color: palette.neutral[200]\n    }\n  };\n}, {\n  name: \"orders\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useOrdersStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvT3JkZXJzL3VzZU9yZGVyc1N0eWxlcy50cz9kODU0Il0sIm5hbWVzIjpbInVzZU9yZGVyc1N0eWxlcyIsIm1ha2VHb2xTdHlsZXMiLCJwYWxldHRlIiwic3BhY2luZyIsInJvb3QiLCJkYXRhIiwicGFkZGluZyIsImNvbG9yIiwiY2hhbmdlU3RhdHVzIiwic3VjY2VzcyIsIm1haW4iLCJlcnJvciIsImN1cnNvciIsIml0ZW1zIiwiYm9yZGVyQm90dG9tIiwibmV1dHJhbCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0YXR1cyIsImJvcmRlclJhZGl1cyIsInBlbmRpbmciLCJiYWNrZ3JvdW5kIiwicHJvY2Nlc3NpbmciLCJ3YXJuaW5nIiwic2hpcHBlZCIsImluZm8iLCJkZWxpdmVyZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MsMkRBQWEsQ0FDMUM7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxPQUFaLFFBQVlBLE9BQVo7QUFBQSxTQUEyQjtBQUN6QkMsUUFBSSxFQUFFLEVBRG1CO0FBRXpCQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFSCxPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEWjtBQUVKLGdCQUFVO0FBQ1JJLGFBQUssRUFBRTtBQUFBLGNBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLGlCQUNMQSxZQUFZLEdBQUdOLE9BQU8sQ0FBQ08sT0FBUixDQUFnQkMsSUFBbkIsR0FBMEJSLE9BQU8sQ0FBQ1MsS0FBUixDQUFjRCxJQUQvQztBQUFBLFNBREM7QUFHUkUsY0FBTSxFQUFFO0FBSEE7QUFGTixLQUZtQjtBQVV6QkMsU0FBSyxFQUFFO0FBQ0xDLGtCQUFZLHNCQUFlWixPQUFPLENBQUNhLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBZixDQURQO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLG9CQUFjLEVBQUU7QUFIWCxLQVZrQjtBQWV6QkMsVUFBTSxFQUFFO0FBQ05aLGFBQU8sRUFBRUgsT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRFY7QUFFTmdCLGtCQUFZLEVBQUU7QUFGUixLQWZpQjtBQW1CekJDLFdBQU8sRUFBRTtBQUNQQyxnQkFBVSxFQUFFO0FBREwsS0FuQmdCO0FBc0J6QkMsZUFBVyxFQUFFO0FBQ1hELGdCQUFVLEVBQUVuQixPQUFPLENBQUNxQixPQUFSLENBQWdCYjtBQURqQixLQXRCWTtBQXlCekJjLFdBQU8sRUFBRTtBQUNQSCxnQkFBVSxFQUFFbkIsT0FBTyxDQUFDdUIsSUFBUixDQUFhZjtBQURsQixLQXpCZ0I7QUE0QnpCZ0IsYUFBUyxFQUFFO0FBQ1RMLGdCQUFVLEVBQUVuQixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLElBRG5CO0FBRVRILFdBQUssRUFBRUwsT0FBTyxDQUFDYSxPQUFSLENBQWdCLEdBQWhCO0FBRkU7QUE1QmMsR0FBM0I7QUFBQSxDQUQwQyxFQWtDMUM7QUFBRVksTUFBSSxFQUFFO0FBQVIsQ0FsQzBDLENBQXJDO0FBcUNRM0IsOEVBQWYiLCJmaWxlIjoiLi9zcmMvZG9tYWlucy9PcmRlcnMvdXNlT3JkZXJzU3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUdvbFN0eWxlcyB9IGZyb20gXCJ0aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlT3JkZXJzU3R5bGVzID0gbWFrZUdvbFN0eWxlczx7IGNoYW5nZVN0YXR1czogYm9vbGVhbiB9PihcbiAgKHsgcGFsZXR0ZSwgc3BhY2luZyB9KSA9PiAoe1xuICAgIHJvb3Q6IHt9LFxuICAgIGRhdGE6IHtcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcoMiwgNSksXG4gICAgICBcIiYgc3BhblwiOiB7XG4gICAgICAgIGNvbG9yOiAoeyBjaGFuZ2VTdGF0dXMgfSkgPT5cbiAgICAgICAgICBjaGFuZ2VTdGF0dXMgPyBwYWxldHRlLnN1Y2Nlc3MubWFpbiA6IHBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7cGFsZXR0ZS5uZXV0cmFsWzIwMF19YCxcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIH0sXG4gICAgc3RhdHVzOiB7XG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKDAsIDIpLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICB9LFxuICAgIHBlbmRpbmc6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwieWVsbG93XCIsXG4gICAgfSxcbiAgICBwcm9jY2Vzc2luZzoge1xuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS53YXJuaW5nLm1haW4sXG4gICAgfSxcbiAgICBzaGlwcGVkOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLmluZm8ubWFpbixcbiAgICB9LFxuICAgIGRlbGl2ZXJlZDoge1xuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS5zdWNjZXNzLm1haW4sXG4gICAgICBjb2xvcjogcGFsZXR0ZS5uZXV0cmFsWzIwMF0sXG4gICAgfSxcbiAgfSksXG4gIHsgbmFtZTogXCJvcmRlcnNcIiB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VPcmRlcnNTdHlsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/domains/Orders/useOrdersStyles.ts\n");

/***/ })

})