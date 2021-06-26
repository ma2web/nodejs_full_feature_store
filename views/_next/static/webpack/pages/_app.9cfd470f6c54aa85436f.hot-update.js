webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/layout/CI/Layout/components/desk/Desk.tsx":
/*!*******************************************************!*\
  !*** ./src/layout/CI/Layout/components/desk/Desk.tsx ***!
  \*******************************************************/
/*! exports provided: Desk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desk\", function() { return Desk; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _useDeskStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDeskStyles */ \"./src/layout/CI/Layout/components/desk/useDeskStyles.ts\");\n/* harmony import */ var _Desk_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desk.message */ \"./src/layout/CI/Layout/components/desk/Desk.message.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/layout/CI/Layout/components/desk/Desk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Desk = function Desk() {\n  _s();\n\n  var _user$store, _user$store2;\n\n  var classes = Object(_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      tabs = _useState[0],\n      setTabs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_7__[\"api\"], \"/api/user/me\"), {\n      headers: {\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      var _res$data;\n\n      setUser(res === null || res === void 0 ? void 0 : res.data);\n\n      if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.role) === \"super_admin\") {\n        setTabs([{\n          name: \"افزودن ادمین\",\n          route: \"/register-admin\"\n        }, {\n          name: \"اسلایدر\",\n          route: \"/slider\"\n        }]);\n      } else {\n        setTabs([{\n          name: \"\\u067E\\u06CC\\u0634\\u062E\\u0648\\u0627\\u0646\",\n          route: \"/\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].categories)),\n          route: \"/categories\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].products)),\n          route: \"/products\"\n        }, {\n          name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders)),\n          route: \"/orders\"\n        }]);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.tabs,\n      children: [tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: tab === null || tab === void 0 ? void 0 : tab.route,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.tab,\n            children: tab === null || tab === void 0 ? void 0 : tab.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/signIn\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.tab,\n          onClick: function onClick() {\n            return localStorage.clear();\n          },\n          children: \"\\u062E\\u0631\\u0648\\u062C\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: \"absolute\",\n        bottom: 0\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"\\u0627\\u0637\\u0644\\u0627\\u0639\\u0627\\u062A \\u0641\\u0631\\u0648\\u0634\\u06AF\\u0627\\u0647\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: user === null || user === void 0 ? void 0 : (_user$store = user.store) === null || _user$store === void 0 ? void 0 : _user$store.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: user === null || user === void 0 ? void 0 : (_user$store2 = user.store) === null || _user$store2 === void 0 ? void 0 : _user$store2.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"\".concat(user === null || user === void 0 ? void 0 : user.countryCode).concat(user === null || user === void 0 ? void 0 : user.phoneNumber), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"\".concat(user === null || user === void 0 ? void 0 : user.firstName, \" \").concat(user === null || user === void 0 ? void 0 : user.lastName)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Desk, \"ukIKxcaCcSFzEzH1zhW3dY0RIVw=\", false, function () {\n  return [_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"], react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"]];\n});\n\n_c = Desk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desk);\n\nvar _c;\n\n$RefreshReg$(_c, \"Desk\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9kZXNrL0Rlc2sudHN4PzcxNDMiXSwibmFtZXMiOlsiRGVzayIsImNsYXNzZXMiLCJ1c2VEZXNrU3R5bGVzIiwidXNlSW50bCIsImZvcm1hdE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRhYnMiLCJzZXRUYWJzIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImFwaSIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwicm9sZSIsIm5hbWUiLCJyb3V0ZSIsIkRlc2tNZXNzYWdlcyIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsIm9yZGVycyIsInJvb3QiLCJtYXAiLCJ0YWIiLCJjbGVhciIsInBvc2l0aW9uIiwiYm90dG9tIiwic3RvcmUiLCJhZGRyZXNzIiwiY291bnRyeUNvZGUiLCJwaG9uZU51bWJlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQUR3QixpQkFFRUMsMERBQU8sRUFGVDtBQUFBLE1BRWhCQyxhQUZnQixZQUVoQkEsYUFGZ0I7O0FBQUEsa0JBR0FDLHNEQUFRLENBQUMsSUFBRCxDQUhSO0FBQUEsTUFHakJDLElBSGlCO0FBQUEsTUFHWEMsT0FIVzs7QUFBQSxtQkFJQUYsc0RBQVEsQ0FBQyxJQUFELENBSlI7QUFBQSxNQUlqQkcsSUFKaUI7QUFBQSxNQUlYQyxPQUpXOztBQU14QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdEQUFLLENBQ0ZDLEdBREgsV0FDVUMsK0NBRFYsbUJBQzZCO0FBQ3pCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0JDLFlBQVksQ0FBQ0M7QUFEdEI7QUFEZ0IsS0FEN0IsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUFBOztBQUNiVCxhQUFPLENBQUNTLEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFFQyxJQUFOLENBQVA7O0FBQ0EsVUFBSSxDQUFBRCxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILHlCQUFBQSxHQUFHLENBQUVDLElBQUwsd0RBQVdDLElBQVgsTUFBb0IsYUFBeEIsRUFBdUM7QUFDckNiLGVBQU8sQ0FBQyxDQUNOO0FBQUVjLGNBQUksRUFBRSxjQUFSO0FBQXdCQyxlQUFLLEVBQUU7QUFBL0IsU0FETSxFQUVOO0FBQUVELGNBQUksRUFBRSxTQUFSO0FBQW1CQyxlQUFLLEVBQUU7QUFBMUIsU0FGTSxDQUFELENBQVA7QUFJRCxPQUxELE1BS087QUFDTGYsZUFBTyxDQUFDLENBQ047QUFDRWMsY0FBSSw4Q0FETjtBQUVFQyxlQUFLLEVBQUU7QUFGVCxTQURNLEVBS047QUFDRUQsY0FBSSxZQUFLakIsYUFBYSxDQUFDbUIscURBQVksQ0FBQ0MsVUFBZCxDQUFsQixDQUROO0FBRUVGLGVBQUssRUFBRTtBQUZULFNBTE0sRUFTTjtBQUNFRCxjQUFJLFlBQUtqQixhQUFhLENBQUNtQixxREFBWSxDQUFDRSxRQUFkLENBQWxCLENBRE47QUFFRUgsZUFBSyxFQUFFO0FBRlQsU0FUTSxFQWFOO0FBQ0VELGNBQUksWUFBS2pCLGFBQWEsQ0FBQ21CLHFEQUFZLENBQUNHLE1BQWQsQ0FBbEIsQ0FETjtBQUVFSixlQUFLLEVBQUU7QUFGVCxTQWJNLENBQUQsQ0FBUDtBQWtCRDtBQUNGLEtBakNIO0FBa0NELEdBbkNRLEVBbUNOLEVBbkNNLENBQVQ7QUFxQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVyQixPQUFPLENBQUMwQixJQUF4QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFMUIsT0FBTyxDQUFDSyxJQUF4QjtBQUFBLGlCQUNHQSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRXNCLEdBQU4sQ0FBVSxVQUFDQyxHQUFELEVBQVM7QUFDbEIsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVBLEdBQUYsYUFBRUEsR0FBRix1QkFBRUEsR0FBRyxDQUFFUCxLQUFqQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRXJCLE9BQU8sQ0FBQzRCLEdBQXhCO0FBQUEsc0JBQThCQSxHQUE5QixhQUE4QkEsR0FBOUIsdUJBQThCQSxHQUFHLENBQUVSO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FOQSxDQURILGVBUUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRXBCLE9BQU8sQ0FBQzRCLEdBQXhCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWQsWUFBWSxDQUFDZSxLQUFiLEVBQU47QUFBQSxXQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdCRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFLFVBQVo7QUFBd0JDLGNBQU0sRUFBRTtBQUFoQyxPQUFaO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsa0JBQUl4QixJQUFKLGFBQUlBLElBQUosc0NBQUlBLElBQUksQ0FBRXlCLEtBQVYsZ0RBQUksWUFBYVo7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSxrQkFBSWIsSUFBSixhQUFJQSxJQUFKLHVDQUFJQSxJQUFJLENBQUV5QixLQUFWLGlEQUFJLGFBQWFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQUEsNkJBQU8xQixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRTJCLFdBQWIsU0FBMkIzQixJQUEzQixhQUEyQkEsSUFBM0IsdUJBQTJCQSxJQUFJLENBQUU0QixXQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQUEsNEJBQU81QixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRTZCLFNBQWIsY0FBMEI3QixJQUExQixhQUEwQkEsSUFBMUIsdUJBQTBCQSxJQUFJLENBQUU4QixRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FyRU07O0dBQU10QyxJO1VBQ0tFLDRELEVBQ1VDLGtEOzs7S0FGZkgsSTtBQXVFRUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0NJL0xheW91dC9jb21wb25lbnRzL2Rlc2svRGVzay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUludGwgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IHsgdXNlRGVza1N0eWxlcyB9IGZyb20gXCIuL3VzZURlc2tTdHlsZXNcIjtcbmltcG9ydCBEZXNrTWVzc2FnZXMgZnJvbSBcIi4vRGVzay5tZXNzYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiZG9tYWlucy9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IERlc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VEZXNrU3R5bGVzKCk7XG4gIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdXNlSW50bCgpO1xuICBjb25zdCBbdGFicywgc2V0VGFic10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHthcGl9L2FwaS91c2VyL21lYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjogbG9jYWxTdG9yYWdlLnRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXNlcihyZXM/LmRhdGEpO1xuICAgICAgICBpZiAocmVzPy5kYXRhPy5yb2xlID09PSBcInN1cGVyX2FkbWluXCIpIHtcbiAgICAgICAgICBzZXRUYWJzKFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLYp9mB2LLZiNiv2YYg2KfYr9mF24zZhlwiLCByb3V0ZTogXCIvcmVnaXN0ZXItYWRtaW5cIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcItin2LPZhNin24zYr9ixXCIsIHJvdXRlOiBcIi9zbGlkZXJcIiB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRhYnMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBg2b7bjNi02K7ZiNin2YZgLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBgJHtmb3JtYXRNZXNzYWdlKERlc2tNZXNzYWdlcy5jYXRlZ29yaWVzKX1gLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvY2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7Zm9ybWF0TWVzc2FnZShEZXNrTWVzc2FnZXMucHJvZHVjdHMpfWAsXG4gICAgICAgICAgICAgIHJvdXRlOiBcIi9wcm9kdWN0c1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7Zm9ybWF0TWVzc2FnZShEZXNrTWVzc2FnZXMub3JkZXJzKX1gLFxuICAgICAgICAgICAgICByb3V0ZTogXCIvb3JkZXJzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfT5cbiAgICAgICAge3RhYnM/Lm1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RhYj8ucm91dGV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9Pnt0YWI/Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbkluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFifSBvbkNsaWNrPXsoKSA9PiBsb2NhbFN0b3JhZ2UuY2xlYXIoKX0+XG4gICAgICAgICAgICDYrtix2YjYrFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206IDAgfX0+XG4gICAgICAgIDxoND7Yp9i32YTYp9i52KfYqiDZgdix2YjYtNqv2KfZhzwvaDQ+XG4gICAgICAgIDxwPnt1c2VyPy5zdG9yZT8ubmFtZX08L3A+XG4gICAgICAgIDxwPnt1c2VyPy5zdG9yZT8uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPntgJHt1c2VyPy5jb3VudHJ5Q29kZX0ke3VzZXI/LnBob25lTnVtYmVyfWB9IDwvcD5cbiAgICAgICAgPHA+e2Ake3VzZXI/LmZpcnN0TmFtZX0gJHt1c2VyPy5sYXN0TmFtZX1gfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/components/desk/Desk.tsx\n");

/***/ })

})