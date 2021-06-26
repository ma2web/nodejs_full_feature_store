webpackHotUpdate_N_E("pages/index",{

/***/ "./src/layout/CI/Layout/components/desk/Desk.tsx":
/*!*******************************************************!*\
  !*** ./src/layout/CI/Layout/components/desk/Desk.tsx ***!
  \*******************************************************/
/*! exports provided: Desk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desk\", function() { return Desk; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _useDeskStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDeskStyles */ \"./src/layout/CI/Layout/components/desk/useDeskStyles.ts\");\n/* harmony import */ var _Desk_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desk.message */ \"./src/layout/CI/Layout/components/desk/Desk.message.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/layout/CI/Layout/components/desk/Desk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Desk = function Desk() {\n  _s();\n\n  var _user$store, _user$store2;\n\n  var classes = Object(_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      tabs = _useState[0],\n      setTabs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_7__[\"api\"], \"/api/user/me\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      var _res$data;\n\n      setUser(res === null || res === void 0 ? void 0 : res.data);\n\n      if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.role) === \"super_admin\") {\n        setTabs([{\n          name: \"افزودن ادمین\",\n          route: \"/register-admin\"\n        }, {\n          name: \"اسلایدر\",\n          route: \"/slider\"\n        }]);\n      } else {\n        [{\n          name: \"\\u067E\\u06CC\\u0634\\u062E\\u0648\\u0627\\u0646\",\n          route: \"/\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].categories)),\n          route: \"/categories\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].products)),\n          route: \"/products\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders)),\n          route: \"/orders\"\n        }];\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.tabs,\n      children: [tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: tab === null || tab === void 0 ? void 0 : tab.route,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.tab,\n            children: tab === null || tab === void 0 ? void 0 : tab.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/signIn\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.tab,\n          onClick: function onClick() {\n            return localStorage.clear();\n          },\n          children: \"\\u062E\\u0631\\u0648\\u062C\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"\\u0627\\u0637\\u0644\\u0627\\u0639\\u0627\\u062A \\u0641\\u0631\\u0648\\u0634\\u06AF\\u0627\\u0647\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: user === null || user === void 0 ? void 0 : (_user$store = user.store) === null || _user$store === void 0 ? void 0 : _user$store.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: user === null || user === void 0 ? void 0 : (_user$store2 = user.store) === null || _user$store2 === void 0 ? void 0 : _user$store2.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Desk, \"ukIKxcaCcSFzEzH1zhW3dY0RIVw=\", false, function () {\n  return [_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"], react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"]];\n});\n\n_c = Desk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desk);\n\nvar _c;\n\n$RefreshReg$(_c, \"Desk\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9kZXNrL0Rlc2sudHN4PzcxNDMiXSwibmFtZXMiOlsiRGVzayIsImNsYXNzZXMiLCJ1c2VEZXNrU3R5bGVzIiwidXNlSW50bCIsImZvcm1hdE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRhYnMiLCJzZXRUYWJzIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImFwaSIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwicm9sZSIsIm5hbWUiLCJyb3V0ZSIsIkRlc2tNZXNzYWdlcyIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsIm9yZGVycyIsInJvb3QiLCJtYXAiLCJ0YWIiLCJjbGVhciIsInN0b3JlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQTs7QUFDeEIsTUFBTUMsT0FBTyxHQUFHQyxvRUFBYSxFQUE3Qjs7QUFEd0IsaUJBRUVDLDBEQUFPLEVBRlQ7QUFBQSxNQUVoQkMsYUFGZ0IsWUFFaEJBLGFBRmdCOztBQUFBLGtCQUdBQyxzREFBUSxDQUFDLElBQUQsQ0FIUjtBQUFBLE1BR2pCQyxJQUhpQjtBQUFBLE1BR1hDLE9BSFc7O0FBQUEsbUJBSUFGLHNEQUFRLENBQUMsSUFBRCxDQUpSO0FBQUEsTUFJakJHLElBSmlCO0FBQUEsTUFJWEMsT0FKVzs7QUFNeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUNGQyxHQURILFdBQ1VDLCtDQURWLG1CQUM2QjtBQUN6QkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCQyxZQUFZLENBQUNDO0FBRHRCO0FBRGdCLEtBRDdCLEVBTUdDLElBTkgsQ0FNUSxVQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDYlQsYUFBTyxDQUFDUyxHQUFELGFBQUNBLEdBQUQsdUJBQUNBLEdBQUcsQ0FBRUMsSUFBTixDQUFQOztBQUNBLFVBQUksQ0FBQUQsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCx5QkFBQUEsR0FBRyxDQUFFQyxJQUFMLHdEQUFXQyxJQUFYLE1BQW9CLGFBQXhCLEVBQXVDO0FBQ3JDYixlQUFPLENBQUMsQ0FDTjtBQUFFYyxjQUFJLEVBQUUsY0FBUjtBQUF3QkMsZUFBSyxFQUFFO0FBQS9CLFNBRE0sRUFFTjtBQUFFRCxjQUFJLEVBQUUsU0FBUjtBQUFtQkMsZUFBSyxFQUFFO0FBQTFCLFNBRk0sQ0FBRCxDQUFQO0FBSUQsT0FMRCxNQUtPO0FBQ0wsU0FDRTtBQUNFRCxjQUFJLDhDQUROO0FBRUVDLGVBQUssRUFBRTtBQUZULFNBREYsRUFLRTtBQUNFRCxjQUFJLFlBQUtqQixhQUFhLENBQUNtQixxREFBWSxDQUFDQyxVQUFkLENBQWxCLENBRE47QUFFRUYsZUFBSyxFQUFFO0FBRlQsU0FMRixFQVNFO0FBQ0VELGNBQUksWUFBS2pCLGFBQWEsQ0FBQ21CLHFEQUFZLENBQUNFLFFBQWQsQ0FBbEIsQ0FETjtBQUVFSCxlQUFLLEVBQUU7QUFGVCxTQVRGLEVBYUU7QUFDRUQsY0FBSSxZQUFLakIsYUFBYSxDQUFDbUIscURBQVksQ0FBQ0csTUFBZCxDQUFsQixDQUROO0FBRUVKLGVBQUssRUFBRTtBQUZULFNBYkY7QUFrQkQ7QUFDRixLQWpDSDtBQWtDRCxHQW5DUSxFQW1DTixFQW5DTSxDQUFUO0FBcUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFckIsT0FBTyxDQUFDMEIsSUFBeEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRTFCLE9BQU8sQ0FBQ0ssSUFBeEI7QUFBQSxpQkFDR0EsSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVzQixHQUFOLENBQVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xCLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFQSxHQUFGLGFBQUVBLEdBQUYsdUJBQUVBLEdBQUcsQ0FBRVAsS0FBakI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVyQixPQUFPLENBQUM0QixHQUF4QjtBQUFBLHNCQUE4QkEsR0FBOUIsYUFBOEJBLEdBQTlCLHVCQUE4QkEsR0FBRyxDQUFFUjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELE9BTkEsQ0FESCxlQVFFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVwQixPQUFPLENBQUM0QixHQUF4QjtBQUE2QixpQkFBTyxFQUFFO0FBQUEsbUJBQU1kLFlBQVksQ0FBQ2UsS0FBYixFQUFOO0FBQUEsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFnQkU7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBSXRCLElBQUosYUFBSUEsSUFBSixzQ0FBSUEsSUFBSSxDQUFFdUIsS0FBVixnREFBSSxZQUFhVjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBLGtCQUFJYixJQUFKLGFBQUlBLElBQUosdUNBQUlBLElBQUksQ0FBRXVCLEtBQVYsaURBQUksYUFBYUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQW5FTTs7R0FBTWhDLEk7VUFDS0UsNEQsRUFDVUMsa0Q7OztLQUZmSCxJO0FBcUVFQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9sYXlvdXQvQ0kvTGF5b3V0L2NvbXBvbmVudHMvZGVzay9EZXNrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgeyB1c2VEZXNrU3R5bGVzIH0gZnJvbSBcIi4vdXNlRGVza1N0eWxlc1wiO1xuaW1wb3J0IERlc2tNZXNzYWdlcyBmcm9tIFwiLi9EZXNrLm1lc3NhZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJkb21haW5zL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgRGVzayA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZURlc2tTdHlsZXMoKTtcbiAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB1c2VJbnRsKCk7XG4gIGNvbnN0IFt0YWJzLCBzZXRUYWJzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAke2FwaX0vYXBpL3VzZXIvbWVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRVc2VyKHJlcz8uZGF0YSk7XG4gICAgICAgIGlmIChyZXM/LmRhdGE/LnJvbGUgPT09IFwic3VwZXJfYWRtaW5cIikge1xuICAgICAgICAgIHNldFRhYnMoW1xuICAgICAgICAgICAgeyBuYW1lOiBcItin2YHYstmI2K/ZhiDYp9iv2YXbjNmGXCIsIHJvdXRlOiBcIi9yZWdpc3Rlci1hZG1pblwiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi2KfYs9mE2KfbjNiv2LFcIiwgcm91dGU6IFwiL3NsaWRlclwiIH0sXG4gICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBg2b7bjNi02K7ZiNin2YZgLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBgJHtmb3JtYXRNZXNzYWdlKERlc2tNZXNzYWdlcy5jYXRlZ29yaWVzKX1gLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvY2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7Zm9ybWF0TWVzc2FnZShEZXNrTWVzc2FnZXMucHJvZHVjdHMpfWAsXG4gICAgICAgICAgICAgIHJvdXRlOiBcIi9wcm9kdWN0c1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7Zm9ybWF0TWVzc2FnZShEZXNrTWVzc2FnZXMub3JkZXJzKX1gLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvb3JkZXJzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYnN9PlxuICAgICAgICB7dGFicz8ubWFwKCh0YWIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17dGFiPy5yb3V0ZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0+e3RhYj8ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduSW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9IG9uQ2xpY2s9eygpID0+IGxvY2FsU3RvcmFnZS5jbGVhcigpfT5cbiAgICAgICAgICAgINiu2LHZiNisXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+2KfYt9mE2KfYudin2Kog2YHYsdmI2LTar9in2Yc8L2g0PlxuICAgICAgICA8cD57dXNlcj8uc3RvcmU/Lm5hbWV9PC9wPlxuICAgICAgICA8cD57dXNlcj8uc3RvcmU/LmFkZHJlc3N9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/components/desk/Desk.tsx\n");

/***/ })

})