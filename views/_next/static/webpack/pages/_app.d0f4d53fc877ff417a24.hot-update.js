webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/layout/CI/Layout/components/desk/Desk.tsx":
/*!*******************************************************!*\
  !*** ./src/layout/CI/Layout/components/desk/Desk.tsx ***!
  \*******************************************************/
/*! exports provided: Desk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desk\", function() { return Desk; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _useDeskStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDeskStyles */ \"./src/layout/CI/Layout/components/desk/useDeskStyles.ts\");\n/* harmony import */ var _Desk_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desk.message */ \"./src/layout/CI/Layout/components/desk/Desk.message.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/layout/CI/Layout/components/desk/Desk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Desk = function Desk() {\n  _s();\n\n  var classes = Object(_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage; // const [tabs, setTabs] = useState(null);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_7__[\"api\"], \"/api/user/me\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      console.log(res);\n    });\n  }, []);\n  var tabs = [{\n    name: \"\\u067E\\u06CC\\u0634\\u062E\\u0648\\u0627\\u0646\",\n    route: \"/\"\n  }, {\n    name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].categories)),\n    route: \"/categories\"\n  }, {\n    name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].products)),\n    route: \"/products\"\n  }, {\n    name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders)),\n    route: \"/orders\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.tabs,\n      children: [tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: tab === null || tab === void 0 ? void 0 : tab.route,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.tab,\n            children: tab === null || tab === void 0 ? void 0 : tab.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/signIn\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.tab,\n          onClick: function onClick() {\n            return localStorage.clear();\n          },\n          children: \"\\u062E\\u0631\\u0648\\u062C\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Desk, \"MME5fVX078/+PvTu3/3hiFpjTIo=\", false, function () {\n  return [_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"], react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"]];\n});\n\n_c = Desk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desk);\n\nvar _c;\n\n$RefreshReg$(_c, \"Desk\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9kZXNrL0Rlc2sudHN4PzcxNDMiXSwibmFtZXMiOlsiRGVzayIsImNsYXNzZXMiLCJ1c2VEZXNrU3R5bGVzIiwidXNlSW50bCIsImZvcm1hdE1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImFwaSIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidGFicyIsIm5hbWUiLCJyb3V0ZSIsIkRlc2tNZXNzYWdlcyIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsIm9yZGVycyIsInJvb3QiLCJtYXAiLCJ0YWIiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsT0FBTyxHQUFHQyxvRUFBYSxFQUE3Qjs7QUFEd0IsaUJBRUVDLDBEQUFPLEVBRlQ7QUFBQSxNQUVoQkMsYUFGZ0IsWUFFaEJBLGFBRmdCLEVBR3hCOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdEQUFLLENBQ0ZDLEdBREgsV0FDVUMsK0NBRFYsbUJBQzZCO0FBQ3pCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0JDLFlBQVksQ0FBQ0M7QUFEdEI7QUFEZ0IsS0FEN0IsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBUkg7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsTUFBTUcsSUFBSSxHQUFHLENBQ1g7QUFDRUMsUUFBSSw4Q0FETjtBQUVFQyxTQUFLLEVBQUU7QUFGVCxHQURXLEVBS1g7QUFDRUQsUUFBSSxZQUFLYixhQUFhLENBQUNlLHFEQUFZLENBQUNDLFVBQWQsQ0FBbEIsQ0FETjtBQUVFRixTQUFLLEVBQUU7QUFGVCxHQUxXLEVBU1g7QUFDRUQsUUFBSSxZQUFLYixhQUFhLENBQUNlLHFEQUFZLENBQUNFLFFBQWQsQ0FBbEIsQ0FETjtBQUVFSCxTQUFLLEVBQUU7QUFGVCxHQVRXLEVBYVg7QUFDRUQsUUFBSSxZQUFLYixhQUFhLENBQUNlLHFEQUFZLENBQUNHLE1BQWQsQ0FBbEIsQ0FETjtBQUVFSixTQUFLLEVBQUU7QUFGVCxHQWJXLENBQWI7QUFtQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVqQixPQUFPLENBQUNzQixJQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFdEIsT0FBTyxDQUFDZSxJQUF4QjtBQUFBLGlCQUNHQSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRVEsR0FBTixDQUFVLFVBQUNDLEdBQUQsRUFBUztBQUNsQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUEsR0FBRixhQUFFQSxHQUFGLHVCQUFFQSxHQUFHLENBQUVQLEtBQWpCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFakIsT0FBTyxDQUFDd0IsR0FBeEI7QUFBQSxzQkFBOEJBLEdBQTlCLGFBQThCQSxHQUE5Qix1QkFBOEJBLEdBQUcsQ0FBRVI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRCxPQU5BLENBREgsZUFRRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFaEIsT0FBTyxDQUFDd0IsR0FBeEI7QUFBNkIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNZixZQUFZLENBQUNnQixLQUFiLEVBQU47QUFBQSxXQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F0RE07O0dBQU0xQixJO1VBQ0tFLDRELEVBQ1VDLGtEOzs7S0FGZkgsSTtBQXdERUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0NJL0xheW91dC9jb21wb25lbnRzL2Rlc2svRGVzay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUludGwgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IHsgdXNlRGVza1N0eWxlcyB9IGZyb20gXCIuL3VzZURlc2tTdHlsZXNcIjtcbmltcG9ydCBEZXNrTWVzc2FnZXMgZnJvbSBcIi4vRGVzay5tZXNzYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiZG9tYWlucy9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IERlc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VEZXNrU3R5bGVzKCk7XG4gIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdXNlSW50bCgpO1xuICAvLyBjb25zdCBbdGFicywgc2V0VGFic10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAke2FwaX0vYXBpL3VzZXIvbWVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0YWJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IGDZvtuM2LTYrtmI2KfZhmAsXG4gICAgICByb3V0ZTogXCIvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgJHtmb3JtYXRNZXNzYWdlKERlc2tNZXNzYWdlcy5jYXRlZ29yaWVzKX1gLFxuICAgICAgcm91dGU6IFwiL2NhdGVnb3JpZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGAke2Zvcm1hdE1lc3NhZ2UoRGVza01lc3NhZ2VzLnByb2R1Y3RzKX1gLFxuICAgICAgcm91dGU6IFwiL3Byb2R1Y3RzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgJHtmb3JtYXRNZXNzYWdlKERlc2tNZXNzYWdlcy5vcmRlcnMpfWAsXG4gICAgICByb3V0ZTogXCIvb3JkZXJzXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFic30+XG4gICAgICAgIHt0YWJzPy5tYXAoKHRhYikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXt0YWI/LnJvdXRlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFifT57dGFiPy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ25JblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gb25DbGljaz17KCkgPT4gbG9jYWxTdG9yYWdlLmNsZWFyKCl9PlxuICAgICAgICAgICAg2K7YsdmI2KxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/components/desk/Desk.tsx\n");

/***/ })

})