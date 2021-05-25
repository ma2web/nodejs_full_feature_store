webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/layout/CI/Layout/DashboardLayout.tsx":
/*!**************************************************!*\
  !*** ./src/layout/CI/Layout/DashboardLayout.tsx ***!
  \**************************************************/
/*! exports provided: DashboardLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DashboardLayout\", function() { return DashboardLayout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mohammad_projects_dorreh_market_multi_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var assets_images_icons_Arrows_small_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/icons/Arrows/small/left.svg */ \"./src/assets/images/icons/Arrows/small/left.svg\");\n/* harmony import */ var assets_images_icons_Arrows_small_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icons/Arrows/small/right.svg */ \"./src/assets/images/icons/Arrows/small/right.svg\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hotkeys-hook */ \"./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js\");\n/* harmony import */ var _LanguageSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LanguageSelector */ \"./src/layout/CI/LanguageSelector/index.ts\");\n/* harmony import */ var _components_desk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/desk */ \"./src/layout/CI/Layout/components/desk/index.ts\");\n/* harmony import */ var _components_sidebar_components_favarites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/components/favarites */ \"./src/layout/CI/Layout/components/sidebar/components/favarites/index.ts\");\n/* harmony import */ var _components_sidebar_components_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidebar/components/notifications */ \"./src/layout/CI/Layout/components/sidebar/components/notifications/index.ts\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidebar */ \"./src/layout/CI/Layout/components/sidebar/index.ts\");\n/* harmony import */ var _components_sidebar_components_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/components/menu */ \"./src/layout/CI/Layout/components/sidebar/components/menu/index.ts\");\n/* harmony import */ var _useDashboardStyle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useDashboardStyle */ \"./src/layout/CI/Layout/useDashboardStyle.ts\");\n/* harmony import */ var _Dashboard_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Dashboard.message */ \"./src/layout/CI/Layout/Dashboard.message.ts\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n\n\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/market multi/client/src/layout/CI/Layout/DashboardLayout.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_mohammad_projects_dorreh_market_multi_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar DashboardLayout = function DashboardLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var classes = Object(_useDashboardStyle__WEBPACK_IMPORTED_MODULE_14__[\"useDashboardStyle\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      openSystemMenu = _useState[0],\n      setOpenSystemMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      openNotifications = _useState2[0],\n      setOpenNotifications = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      openFavorites = _useState3[0],\n      setOpenFavorites = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(true),\n      openDesk = _useState4[0],\n      setOpenDesk = _useState4[1];\n\n  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_16__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])(),\n      push = _useRouter.push;\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_18__[\"api\"], \"/api/user/me\"), {\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"x-auth-token\": localStorage.token\n      }\n    }).then(function (res) {\n      return console.log(res);\n    })[\"catch\"](function (err) {\n      return push(\"/signIn\");\n    });\n  }, [domains_api__WEBPACK_IMPORTED_MODULE_18__[\"api\"]]);\n  Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"])(\"shift + .\", function () {\n    setOpenSystemMenu(false);\n    setOpenNotifications(false);\n    setOpenFavorites(false);\n    setOpenDesk(function (prev) {\n      return !prev;\n    });\n  });\n  Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"])(\"shift + m\", function () {\n    setOpenSystemMenu(function (prev) {\n      return !prev;\n    });\n    setOpenNotifications(false);\n    setOpenFavorites(false);\n    setOpenDesk(false);\n  });\n  Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"])(\"shift + n\", function () {\n    setOpenNotifications(function (prev) {\n      return !prev;\n    });\n    setOpenSystemMenu(false);\n    setOpenFavorites(false);\n    setOpenDesk(false);\n  });\n  Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"])(\"shift + f\", function () {\n    setOpenFavorites(function (prev) {\n      return !prev;\n    });\n    setOpenSystemMenu(false);\n    setOpenNotifications(false);\n    setOpenDesk(false);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CssBaseline\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sidebar__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _objectSpread({}, {\n          openSystemMenu: openSystemMenu,\n          setOpenSystemMenu: setOpenSystemMenu,\n          openNotifications: openNotifications,\n          setOpenNotifications: setOpenNotifications,\n          openDesk: openDesk,\n          setOpenDesk: setOpenDesk,\n          openFavorites: openFavorites,\n          setOpenFavorites: setOpenFavorites\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.myDesk,\n        style: openDesk ? {\n          width: 226\n        } : {\n          width: 67\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.right,\n          style: openDesk ? {\n            width: \"80%\"\n          } : {\n            width: \"0%\"\n          },\n          children: openDesk && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: openDesk ? classes.deskContentOpen : classes.deskContentClose,\n            style: {\n              filter: openSystemMenu ? \"blur(1px)\" : \"blur(0)\"\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n              variant: \"h6\",\n              children: formatMessage(_Dashboard_message__WEBPACK_IMPORTED_MODULE_15__[\"default\"].myDesk)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_desk__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.left,\n          style: {\n            width: \"20%\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.arrowRightContainer,\n            onClick: function onClick() {\n              return setOpenDesk(!openDesk);\n            },\n            style: !openDesk ? theme.direction === \"rtl\" ? {\n              left: -4\n            } : {\n              right: -4\n            } : theme.direction === \"rtl\" ? {\n              left: 28\n            } : {\n              right: 28\n            },\n            children: openDesk ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(assets_images_icons_Arrows_small_right_svg__WEBPACK_IMPORTED_MODULE_4__[\"ReactComponent\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 27\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(assets_images_icons_Arrows_small_left_svg__WEBPACK_IMPORTED_MODULE_3__[\"ReactComponent\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 48\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), openSystemMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sidebar_components_menu__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 28\n      }, _this), openNotifications && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sidebar_components_notifications__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 31\n      }, _this), openFavorites && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sidebar_components_favarites__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 27\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.mainContent,\n        style: openDesk ? {\n          width: \"calc(100vw - 318px)\",\n          filter: openSystemMenu ? \"blur(2px)\" : \"blur(0)\"\n        } : {\n          width: \"calc(100vw - 157px)\",\n          filter: openSystemMenu ? \"blur(2px)\" : \"blur(0)\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LanguageSelector__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(DashboardLayout, \"Cc0C0m5aKAp4NNk8IdTcHGFuD+g=\", false, function () {\n  return [_useDashboardStyle__WEBPACK_IMPORTED_MODULE_14__[\"useDashboardStyle\"], _material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"], react_intl__WEBPACK_IMPORTED_MODULE_16__[\"useIntl\"], next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"], react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"], react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"], react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"], react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_7__[\"useHotkeys\"]];\n});\n\n_c = DashboardLayout;\nDashboardLayout.displayName = \"DashboardLayout\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"DashboardLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvRGFzaGJvYXJkTGF5b3V0LnRzeD9iMzA0Il0sIm5hbWVzIjpbIkRhc2hib2FyZExheW91dCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInVzZURhc2hib2FyZFN0eWxlIiwidXNlU3RhdGUiLCJvcGVuU3lzdGVtTWVudSIsInNldE9wZW5TeXN0ZW1NZW51Iiwib3Blbk5vdGlmaWNhdGlvbnMiLCJzZXRPcGVuTm90aWZpY2F0aW9ucyIsIm9wZW5GYXZvcml0ZXMiLCJzZXRPcGVuRmF2b3JpdGVzIiwib3BlbkRlc2siLCJzZXRPcGVuRGVzayIsInRoZW1lIiwidXNlVGhlbWUiLCJ1c2VJbnRsIiwiZm9ybWF0TWVzc2FnZSIsInVzZVJvdXRlciIsInB1c2giLCJSZWFjdCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ1c2VIb3RrZXlzIiwicHJldiIsInJvb3QiLCJteURlc2siLCJ3aWR0aCIsInJpZ2h0IiwiZGVza0NvbnRlbnRPcGVuIiwiZGVza0NvbnRlbnRDbG9zZSIsImZpbHRlciIsIkRhc2hib2FyZE1lc3NhZ2VzIiwibGVmdCIsImFycm93UmlnaHRDb250YWluZXIiLCJkaXJlY3Rpb24iLCJtYWluQ29udGVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQW1CLEdBQUcsU0FBdEJBLGVBQXNCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25ELE1BQU1DLE9BQU8sR0FBR0Ms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LGNBQWMsR0FBRyxXQUFILEdBQWlCO0FBRnpDLFNBUlI7QUFBQSxnQ0FjRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLGVBZUU7QUFBQSxvQkFBTUo7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBaUZELENBaElNOztHQUFNRCxlO1VBQ0tHLHFFLEVBS0ZXLDBELEVBQ1lDLG1ELEVBRVRFLHFELEVBYWpCZSw2RCxFQU1BQSw2RCxFQU1BQSw2RCxFQU1BQSw2RDs7O0tBeENXaEMsZTtBQWtJYkEsZUFBZSxDQUFDOEMsV0FBaEIsR0FBOEIsaUJBQTlCO0FBQ2U5Qyw4RUFBZiIsImZpbGUiOiIuL3NyYy9sYXlvdXQvQ0kvTGF5b3V0L0Rhc2hib2FyZExheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDc3NCYXNlbGluZSwgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIExlZnRBcnJvd0ljb24gfSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9BcnJvd3Mvc21hbGwvbGVmdC5zdmdcIjtcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFJpZ2h0QXJyb3dJY29uIH0gZnJvbSBcImFzc2V0cy9pbWFnZXMvaWNvbnMvQXJyb3dzL3NtYWxsL3JpZ2h0LnN2Z1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIb3RrZXlzIH0gZnJvbSBcInJlYWN0LWhvdGtleXMtaG9va1wiO1xuaW1wb3J0IExhbmd1YWdlU2VsZWN0b3IgZnJvbSBcIi4uL0xhbmd1YWdlU2VsZWN0b3JcIjtcbmltcG9ydCBEZXNrIGZyb20gXCIuL2NvbXBvbmVudHMvZGVza1wiO1xuaW1wb3J0IEZhdm9yaXRlcyBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXIvY29tcG9uZW50cy9mYXZhcml0ZXNcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnRzL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IE1haW5NZW51IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCB7IHVzZURhc2hib2FyZFN0eWxlIH0gZnJvbSBcIi4vdXNlRGFzaGJvYXJkU3R5bGVcIjtcbmltcG9ydCBEYXNoYm9hcmRNZXNzYWdlcyBmcm9tIFwiLi9EYXNoYm9hcmQubWVzc2FnZVwiO1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiZG9tYWlucy9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZExheW91dDogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VEYXNoYm9hcmRTdHlsZSgpO1xuICBjb25zdCBbb3BlblN5c3RlbU1lbnUsIHNldE9wZW5TeXN0ZW1NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5Ob3RpZmljYXRpb25zLCBzZXRPcGVuTm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuRmF2b3JpdGVzLCBzZXRPcGVuRmF2b3JpdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5EZXNrLCBzZXRPcGVuRGVza10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHVzZUludGwoKTtcblxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAke2FwaX0vYXBpL3VzZXIvbWVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UudG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBwdXNoKFwiL3NpZ25JblwiKSk7XG4gIH0sIFthcGldKTtcblxuICB1c2VIb3RrZXlzKFwic2hpZnQgKyAuXCIsICgpID0+IHtcbiAgICBzZXRPcGVuU3lzdGVtTWVudShmYWxzZSk7XG4gICAgc2V0T3Blbk5vdGlmaWNhdGlvbnMoZmFsc2UpO1xuICAgIHNldE9wZW5GYXZvcml0ZXMoZmFsc2UpO1xuICAgIHNldE9wZW5EZXNrKChwcmV2KSA9PiAhcHJldik7XG4gIH0pO1xuICB1c2VIb3RrZXlzKFwic2hpZnQgKyBtXCIsICgpID0+IHtcbiAgICBzZXRPcGVuU3lzdGVtTWVudSgocHJldikgPT4gIXByZXYpO1xuICAgIHNldE9wZW5Ob3RpZmljYXRpb25zKGZhbHNlKTtcbiAgICBzZXRPcGVuRmF2b3JpdGVzKGZhbHNlKTtcbiAgICBzZXRPcGVuRGVzayhmYWxzZSk7XG4gIH0pO1xuICB1c2VIb3RrZXlzKFwic2hpZnQgKyBuXCIsICgpID0+IHtcbiAgICBzZXRPcGVuTm90aWZpY2F0aW9ucygocHJldikgPT4gIXByZXYpO1xuICAgIHNldE9wZW5TeXN0ZW1NZW51KGZhbHNlKTtcbiAgICBzZXRPcGVuRmF2b3JpdGVzKGZhbHNlKTtcbiAgICBzZXRPcGVuRGVzayhmYWxzZSk7XG4gIH0pO1xuICB1c2VIb3RrZXlzKFwic2hpZnQgKyBmXCIsICgpID0+IHtcbiAgICBzZXRPcGVuRmF2b3JpdGVzKChwcmV2KSA9PiAhcHJldik7XG4gICAgc2V0T3BlblN5c3RlbU1lbnUoZmFsc2UpO1xuICAgIHNldE9wZW5Ob3RpZmljYXRpb25zKGZhbHNlKTtcbiAgICBzZXRPcGVuRGVzayhmYWxzZSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpZGVCYXJcbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIG9wZW5TeXN0ZW1NZW51LFxuICAgICAgICAgICAgICBzZXRPcGVuU3lzdGVtTWVudSxcbiAgICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbnMsXG4gICAgICAgICAgICAgIHNldE9wZW5Ob3RpZmljYXRpb25zLFxuICAgICAgICAgICAgICBvcGVuRGVzayxcbiAgICAgICAgICAgICAgc2V0T3BlbkRlc2ssXG4gICAgICAgICAgICAgIG9wZW5GYXZvcml0ZXMsXG4gICAgICAgICAgICAgIHNldE9wZW5GYXZvcml0ZXMsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm15RGVza31cbiAgICAgICAgICBzdHlsZT17b3BlbkRlc2sgPyB7IHdpZHRoOiAyMjYgfSA6IHsgd2lkdGg6IDY3IH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9XG4gICAgICAgICAgICBzdHlsZT17b3BlbkRlc2sgPyB7IHdpZHRoOiBcIjgwJVwiIH0gOiB7IHdpZHRoOiBcIjAlXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3BlbkRlc2sgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIG9wZW5EZXNrID8gY2xhc3Nlcy5kZXNrQ29udGVudE9wZW4gOiBjbGFzc2VzLmRlc2tDb250ZW50Q2xvc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmlsdGVyOiBvcGVuU3lzdGVtTWVudSA/IFwiYmx1cigxcHgpXCIgOiBcImJsdXIoMClcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0TWVzc2FnZShEYXNoYm9hcmRNZXNzYWdlcy5teURlc2spfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8RGVzayAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0gc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd1JpZ2h0Q29udGFpbmVyfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRGVzayghb3BlbkRlc2spfVxuICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgIW9wZW5EZXNrXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIlxuICAgICAgICAgICAgICAgICAgICA/IHsgbGVmdDogLTQgfVxuICAgICAgICAgICAgICAgICAgICA6IHsgcmlnaHQ6IC00IH1cbiAgICAgICAgICAgICAgICAgIDogdGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiXG4gICAgICAgICAgICAgICAgICA/IHsgbGVmdDogMjggfVxuICAgICAgICAgICAgICAgICAgOiB7IHJpZ2h0OiAyOCB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29wZW5EZXNrID8gPFJpZ2h0QXJyb3dJY29uIC8+IDogPExlZnRBcnJvd0ljb24gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtvcGVuU3lzdGVtTWVudSAmJiA8TWFpbk1lbnUgLz59XG4gICAgICAgIHtvcGVuTm90aWZpY2F0aW9ucyAmJiA8Tm90aWZpY2F0aW9ucyAvPn1cbiAgICAgICAge29wZW5GYXZvcml0ZXMgJiYgPEZhdm9yaXRlcyAvPn1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGVudH1cbiAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICBvcGVuRGVza1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImNhbGMoMTAwdncgLSAzMThweClcIixcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogb3BlblN5c3RlbU1lbnUgPyBcImJsdXIoMnB4KVwiIDogXCJibHVyKDApXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImNhbGMoMTAwdncgLSAxNTdweClcIixcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogb3BlblN5c3RlbU1lbnUgPyBcImJsdXIoMnB4KVwiIDogXCJibHVyKDApXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxMYW5ndWFnZVNlbGVjdG9yIC8+XG4gICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5EYXNoYm9hcmRMYXlvdXQuZGlzcGxheU5hbWUgPSBcIkRhc2hib2FyZExheW91dFwiO1xuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/DashboardLayout.tsx\n");

/***/ })

})