webpackHotUpdate_N_E("pages/index",{

/***/ "./src/layout/CI/Layout/components/desk/Desk.tsx":
/*!*******************************************************!*\
  !*** ./src/layout/CI/Layout/components/desk/Desk.tsx ***!
  \*******************************************************/
/*! exports provided: Desk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desk\", function() { return Desk; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _useDeskStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDeskStyles */ \"./src/layout/CI/Layout/components/desk/useDeskStyles.ts\");\n/* harmony import */ var _Desk_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desk.message */ \"./src/layout/CI/Layout/components/desk/Desk.message.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/layout/CI/Layout/components/desk/Desk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Desk = function Desk() {\n  _s();\n\n  var classes = Object(_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      tabs = _useState[0],\n      setTabs = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_7__[\"api\"], \"/api/user/me\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      var _res$data;\n\n      console.log(res);\n\n      if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.role) === \"super_admin\") {\n        setTabs([{\n          name: \"پیشخوان\",\n          route: \"/\"\n        }, {\n          name: \"اسلایدر\",\n          route: \"/slider\"\n        }]);\n      } else {\n        [{\n          name: \"\\u067E\\u06CC\\u0634\\u062E\\u0648\\u0627\\u0646\",\n          route: \"/\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].categories)),\n          route: \"/categories\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].products)),\n          route: \"/products\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders)),\n          route: \"/orders\"\n        }];\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.tabs,\n      children: [tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: tab === null || tab === void 0 ? void 0 : tab.route,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.tab,\n            children: tab === null || tab === void 0 ? void 0 : tab.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/signIn\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.tab,\n          onClick: function onClick() {\n            return localStorage.clear();\n          },\n          children: \"\\u062E\\u0631\\u0648\\u062C\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Desk, \"vZzSZNYBLlnMz6NR3nsaOzOHs38=\", false, function () {\n  return [_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"], react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"]];\n});\n\n_c = Desk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desk);\n\nvar _c;\n\n$RefreshReg$(_c, \"Desk\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9kZXNrL0Rlc2sudHN4PzcxNDMiXSwibmFtZXMiOlsiRGVzayIsImNsYXNzZXMiLCJ1c2VEZXNrU3R5bGVzIiwidXNlSW50bCIsImZvcm1hdE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRhYnMiLCJzZXRUYWJzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJhcGkiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyb2xlIiwibmFtZSIsInJvdXRlIiwiRGVza01lc3NhZ2VzIiwiY2F0ZWdvcmllcyIsInByb2R1Y3RzIiwib3JkZXJzIiwicm9vdCIsIm1hcCIsInRhYiIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQUR3QixpQkFFRUMsMERBQU8sRUFGVDtBQUFBLE1BRWhCQyxhQUZnQixZQUVoQkEsYUFGZ0I7O0FBQUEsa0JBR0FDLHNEQUFRLENBQUMsSUFBRCxDQUhSO0FBQUEsTUFHakJDLElBSGlCO0FBQUEsTUFHWEMsT0FIVzs7QUFLeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUNGQyxHQURILFdBQ1VDLCtDQURWLG1CQUM2QjtBQUN6QkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCQyxZQUFZLENBQUNDO0FBRHRCO0FBRGdCLEtBRDdCLEVBTUdDLElBTkgsQ0FNUSxVQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDYkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBQ0EsVUFBSSxDQUFBQSxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILHlCQUFBQSxHQUFHLENBQUVHLElBQUwsd0RBQVdDLElBQVgsTUFBb0IsYUFBeEIsRUFBdUM7QUFDckNiLGVBQU8sQ0FBQyxDQUNOO0FBQUVjLGNBQUksRUFBRSxTQUFSO0FBQW1CQyxlQUFLLEVBQUU7QUFBMUIsU0FETSxFQUVOO0FBQUVELGNBQUksRUFBRSxTQUFSO0FBQW1CQyxlQUFLLEVBQUU7QUFBMUIsU0FGTSxDQUFELENBQVA7QUFJRCxPQUxELE1BS087QUFDTCxTQUNFO0FBQ0VELGNBQUksOENBRE47QUFFRUMsZUFBSyxFQUFFO0FBRlQsU0FERixFQUtFO0FBQ0VELGNBQUksWUFBS2pCLGFBQWEsQ0FBQ21CLHFEQUFZLENBQUNDLFVBQWQsQ0FBbEIsQ0FETjtBQUVFRixlQUFLLEVBQUU7QUFGVCxTQUxGLEVBU0U7QUFDRUQsY0FBSSxZQUFLakIsYUFBYSxDQUFDbUIscURBQVksQ0FBQ0UsUUFBZCxDQUFsQixDQUROO0FBRUVILGVBQUssRUFBRTtBQUZULFNBVEYsRUFhRTtBQUNFRCxjQUFJLFlBQUtqQixhQUFhLENBQUNtQixxREFBWSxDQUFDRyxNQUFkLENBQWxCLENBRE47QUFFRUosZUFBSyxFQUFFO0FBRlQsU0FiRjtBQWtCRDtBQUNGLEtBakNIO0FBa0NELEdBbkNRLEVBbUNOLEVBbkNNLENBQVQ7QUFxQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVyQixPQUFPLENBQUMwQixJQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFMUIsT0FBTyxDQUFDSyxJQUF4QjtBQUFBLGlCQUNHQSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRXNCLEdBQU4sQ0FBVSxVQUFDQyxHQUFELEVBQVM7QUFDbEIsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVBLEdBQUYsYUFBRUEsR0FBRix1QkFBRUEsR0FBRyxDQUFFUCxLQUFqQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRXJCLE9BQU8sQ0FBQzRCLEdBQXhCO0FBQUEsc0JBQThCQSxHQUE5QixhQUE4QkEsR0FBOUIsdUJBQThCQSxHQUFHLENBQUVSO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FOQSxDQURILGVBUUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRXBCLE9BQU8sQ0FBQzRCLEdBQXhCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWhCLFlBQVksQ0FBQ2lCLEtBQWIsRUFBTjtBQUFBLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTVETTs7R0FBTTlCLEk7VUFDS0UsNEQsRUFDVUMsa0Q7OztLQUZmSCxJO0FBOERFQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9sYXlvdXQvQ0kvTGF5b3V0L2NvbXBvbmVudHMvZGVzay9EZXNrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgeyB1c2VEZXNrU3R5bGVzIH0gZnJvbSBcIi4vdXNlRGVza1N0eWxlc1wiO1xuaW1wb3J0IERlc2tNZXNzYWdlcyBmcm9tIFwiLi9EZXNrLm1lc3NhZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJkb21haW5zL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgRGVzayA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZURlc2tTdHlsZXMoKTtcbiAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB1c2VJbnRsKCk7XG4gIGNvbnN0IFt0YWJzLCBzZXRUYWJzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYCR7YXBpfS9hcGkvdXNlci9tZWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6IGxvY2FsU3RvcmFnZS50b2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmIChyZXM/LmRhdGE/LnJvbGUgPT09IFwic3VwZXJfYWRtaW5cIikge1xuICAgICAgICAgIHNldFRhYnMoW1xuICAgICAgICAgICAgeyBuYW1lOiBcItm+24zYtNiu2YjYp9mGXCIsIHJvdXRlOiBcIi9cIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcItin2LPZhNin24zYr9ixXCIsIHJvdXRlOiBcIi9zbGlkZXJcIiB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogYNm+24zYtNiu2YjYp9mGYCxcbiAgICAgICAgICAgICAgcm91dGU6IFwiL1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7Zm9ybWF0TWVzc2FnZShEZXNrTWVzc2FnZXMuY2F0ZWdvcmllcyl9YCxcbiAgICAgICAgICAgICAgcm91dGU6IFwiL2NhdGVnb3JpZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IGAke2Zvcm1hdE1lc3NhZ2UoRGVza01lc3NhZ2VzLnByb2R1Y3RzKX1gLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvcHJvZHVjdHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IGAke2Zvcm1hdE1lc3NhZ2UoRGVza01lc3NhZ2VzLm9yZGVycyl9YCxcbiAgICAgICAgICAgICAgcm91dGU6IFwiL29yZGVyc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfT5cbiAgICAgICAge3RhYnM/Lm1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RhYj8ucm91dGV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9Pnt0YWI/Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbkluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFifSBvbkNsaWNrPXsoKSA9PiBsb2NhbFN0b3JhZ2UuY2xlYXIoKX0+XG4gICAgICAgICAgICDYrtix2YjYrFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/components/desk/Desk.tsx\n");

/***/ })

})