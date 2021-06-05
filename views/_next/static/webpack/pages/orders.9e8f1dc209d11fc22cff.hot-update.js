webpackHotUpdate_N_E("pages/orders",{

/***/ "./src/domains/Orders/useOrdersStyles.ts":
/*!***********************************************!*\
  !*** ./src/domains/Orders/useOrdersStyles.ts ***!
  \***********************************************/
/*! exports provided: useOrdersStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useOrdersStyles\", function() { return useOrdersStyles; });\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme */ \"./src/theme/index.ts\");\n\nvar useOrdersStyles = Object(theme__WEBPACK_IMPORTED_MODULE_0__[\"makeGolStyles\"])(function (_ref) {\n  var palette = _ref.palette,\n      spacing = _ref.spacing;\n  return {\n    root: {},\n    data: {\n      padding: spacing(2, 5),\n      \"& span\": {\n        color: function color(_ref2) {\n          var changeStatus = _ref2.changeStatus;\n          return changeStatus ? palette.success.main : palette.error.main;\n        },\n        cursor: \"pointer\"\n      }\n    },\n    items: {\n      borderBottom: \"1px solid \".concat(palette.neutral[200]),\n      display: \"flex\",\n      justifyContent: \"space-between\"\n    },\n    status: {\n      background: palette.neutral[300]\n    }\n  };\n}, {\n  name: \"orders\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useOrdersStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvT3JkZXJzL3VzZU9yZGVyc1N0eWxlcy50cz9kODU0Il0sIm5hbWVzIjpbInVzZU9yZGVyc1N0eWxlcyIsIm1ha2VHb2xTdHlsZXMiLCJwYWxldHRlIiwic3BhY2luZyIsInJvb3QiLCJkYXRhIiwicGFkZGluZyIsImNvbG9yIiwiY2hhbmdlU3RhdHVzIiwic3VjY2VzcyIsIm1haW4iLCJlcnJvciIsImN1cnNvciIsIml0ZW1zIiwiYm9yZGVyQm90dG9tIiwibmV1dHJhbCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0YXR1cyIsImJhY2tncm91bmQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MsMkRBQWEsQ0FDMUM7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxPQUFaLFFBQVlBLE9BQVo7QUFBQSxTQUEyQjtBQUN6QkMsUUFBSSxFQUFFLEVBRG1CO0FBRXpCQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFSCxPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEWjtBQUVKLGdCQUFVO0FBQ1JJLGFBQUssRUFBRTtBQUFBLGNBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLGlCQUNMQSxZQUFZLEdBQUdOLE9BQU8sQ0FBQ08sT0FBUixDQUFnQkMsSUFBbkIsR0FBMEJSLE9BQU8sQ0FBQ1MsS0FBUixDQUFjRCxJQUQvQztBQUFBLFNBREM7QUFHUkUsY0FBTSxFQUFFO0FBSEE7QUFGTixLQUZtQjtBQVV6QkMsU0FBSyxFQUFFO0FBQ0xDLGtCQUFZLHNCQUFlWixPQUFPLENBQUNhLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBZixDQURQO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLG9CQUFjLEVBQUU7QUFIWCxLQVZrQjtBQWV6QkMsVUFBTSxFQUFFO0FBQ05DLGdCQUFVLEVBQUVqQixPQUFPLENBQUNhLE9BQVIsQ0FBZ0IsR0FBaEI7QUFETjtBQWZpQixHQUEzQjtBQUFBLENBRDBDLEVBb0IxQztBQUFFSyxNQUFJLEVBQUU7QUFBUixDQXBCMEMsQ0FBckM7QUF1QlFwQiw4RUFBZiIsImZpbGUiOiIuL3NyYy9kb21haW5zL09yZGVycy91c2VPcmRlcnNTdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlR29sU3R5bGVzIH0gZnJvbSBcInRoZW1lXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VPcmRlcnNTdHlsZXMgPSBtYWtlR29sU3R5bGVzPHsgY2hhbmdlU3RhdHVzOiBib29sZWFuIH0+KFxuICAoeyBwYWxldHRlLCBzcGFjaW5nIH0pID0+ICh7XG4gICAgcm9vdDoge30sXG4gICAgZGF0YToge1xuICAgICAgcGFkZGluZzogc3BhY2luZygyLCA1KSxcbiAgICAgIFwiJiBzcGFuXCI6IHtcbiAgICAgICAgY29sb3I6ICh7IGNoYW5nZVN0YXR1cyB9KSA9PlxuICAgICAgICAgIGNoYW5nZVN0YXR1cyA/IHBhbGV0dGUuc3VjY2Vzcy5tYWluIDogcGFsZXR0ZS5lcnJvci5tYWluLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGl0ZW1zOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtwYWxldHRlLm5ldXRyYWxbMjAwXX1gLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgfSxcbiAgICBzdGF0dXM6IHtcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUubmV1dHJhbFszMDBdLFxuICAgIH0sXG4gIH0pLFxuICB7IG5hbWU6IFwib3JkZXJzXCIgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlT3JkZXJzU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/domains/Orders/useOrdersStyles.ts\n");

/***/ })

})