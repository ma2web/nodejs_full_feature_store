module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/l56":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return socket; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pI2v");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domains_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aFs1");


let socket;
socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(`${_domains_api__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"]}`, {
  auth: {
    token:  false && false
  },
  reconnection: true
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0NfA":
/***/ (function(module) {

module.exports = JSON.parse("{\"panel.dashboard.dashboard\":\"داشبورد\",\"panel.dashboard.search\":\"جستجو\",\"panel.dashboard.dragAndDrop\":\"صفحه مورد نظر را اینجا بکشید\",\"panel.dashboard.seeMoreNotif\":\"مشاهده همه اعلان ها\",\"panel.dashboard.users\":\"کاربران\",\"panel.dashboard.settings\":\"تنظیمات\",\"panel.dashboard.themeCustomize\":\"تنظیمات قالب\",\"panel.dashboard.skin\":\"پوسته\",\"panel.dashboard.light\":\"روشن\",\"panel.dashboard.dark\":\"تاریک\",\"panel.dashboard.semiDark\":\"تاریک ۲\",\"panel.dashboard.fontSelector\":\"انتخاب فونت\",\"panel.dashboard.langSelector\":\"انتخاب زیان\",\"panel.dashboard.currencyType\":\"واحد پولی\",\"panel.dashboard.sayHello\":\"سلام,\",\"panel.dashboard.administrator\":\"مدیر\",\"panel.messanger.messaging\":\"گفتگو\",\"panel.auth.SingInPage.subTitle\":\"اجازه تغییر به دنیا بده!\",\"panel.auth.SingInPage.title\":\"خوش آمدید\",\"panel.auth.SingInPage.email\":\"ایمیل\",\"panel.auth.SingInPage.phone\":\"همراه\",\"panel.auth.SingInPage.emailInput\":\"آدرس ایمیل شما\",\"panel.auth.SingInPage.phoneInput\":\"شماره شما\",\"panel.auth.SingInPage.passInput\":\"رمز عبور\",\"panel.auth.SingInPage.forgetPassLink\":\"فراموشی رمز عبور؟\",\"panel.auth.SingInPage.notHaveAccount\":\"حساب کاربری ندارید؟\",\"panel.auth.SingInPage.signUp\":\" ثبت نام\",\"panel.auth.SingInPage.signIn\":\"ورود\",\"panel.auth.SingInPage.signInWithGoogle\":\"ورود با اکانت گوگل\",\"panel.auth.Auth.signInMessage1\":\"نرم افزار مارکت\",\"panel.auth.Auth.signInMessage2\":\"بستری برای خرید امن\",\"panel.auth.Auth.allready\":\"ثبت نام\",\"panel.auth.SignUpPageM.allready\":\"قبلا ثبت نام کرده اید؟\",\"panel.auth.SignUpPageM.signIn\":\"ورود\",\"panel.auth.SignUpPageM.signUp\":\"ثبت نام\",\"panel.auth.SignUpPageM.title\":\"عضویت\",\"panel.auth.SignUpPageM.subTitle\":\"اجازه تغییر به دنیا بده!\",\"panel.auth.SignUpPageM.phoneWay\":\"عضویت با شماره موبایل\",\"panel.auth.SignUpPageM.emailWay\":\"عضویت با ایمیل\",\"panel.auth.SignUpPageM.phoneInput\":\"شماره موبایل\",\"panel.auth.SignUpPageM.signInWithGoogle\":\"عضویت با اکانت گوگل\",\"panel.auth.SignUpPageM.fullNameInput\":\"نام و نام خانوادگی\",\"panel.auth.SignUpPageM.emailInput\":\"ایمیل\",\"panel.auth.SignUpPageM.signInMessage2\":\"بستری برای خرید امن\",\"panel.notifications.notifications\":\"اعلانات\",\"panel.dashboard.myDesk\":\"میز کار من\",\"panel.desk.products\":\"محصولات\",\"panel.desk.categories\":\"دسته بندی ها\",\"panel.desk.orders\":\"سفارشات\",\"panel.products.products\":\"محصولات\",\"panel.orders.orders\":\"سفارشات\",\"panel.categories.categories\":\"دسته بندی ها\"}");

/***/ }),

/***/ "3BIL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pxToRem; });
/* unused harmony export calculateColumnSize */
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("65B7");


const {
  htmlFontSize
} = _constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
const pxToRem = (px, baseFontSize = htmlFontSize) => `${(px / baseFontSize).toFixed(3)}rem`;
const calculateColumnSize = (width, gutter, margin = gutter) => {
  const containerWidth = width - 2 * margin;
  const colWidth = (containerWidth - 11 * gutter) / 12;
  return colWidth;
};

function makeGolStyles(styles, options) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(styles, options);
}

/* harmony default export */ __webpack_exports__["a"] = (makeGolStyles);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3d3b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const primary = {
  get main() {
    return this[700];
  },

  get contrastText() {
    return accent.main;
  },

  50: "#E2F4FF",
  100: "#BAE2FF",
  200: "#88D0FF",
  300: "#46BDFF",
  400: "#00ADFF",
  500: "#009DFF",
  600: "#008EFF",
  700: "#0066FF",
  800: "#2341E0",
  900: "#242FB8"
};
const secondary = {
  get main() {
    return this[300];
  },

  get contrastText() {
    return accent.main;
  },

  50: "#BFFFEA",
  100: "#99FFE0",
  200: "#4CFFCF",
  300: "#1DE9B6",
  400: "#12B392",
  500: "#16A689",
  600: "#0E8C75",
  700: "#097361",
  800: "#055C50",
  900: "#00403A"
};
const neutral = {
  get main() {
    return this[500];
  },

  get contrastText() {
    return accent.main;
  },

  50: "#FFFFFF",
  100: "#F6F7FA",
  200: "#DDE0F0",
  300: "#A8AFD1",
  400: "#858AA3",
  500: "#4F536A",
  600: "#30354E",
  700: "#252A43",
  800: "#171A2A",
  900: "#101321"
};
const grey = {
  main: "#E0E0E0",
  "1": "#333333",
  "2": "#4F4F4F",
  "3": "#828282",
  "4": "#BDBDBD",
  "5": "#E0E0E0",
  "6": "#F2F2F2"
};
const onPrimary = {
  get main() {
    return "#FFFFFF";
  }

};
const onSecondary = {
  get main() {
    return "#00403A";
  }

};
const btnPrimaryStates = {
  600: "#008EFF",
  625: "#0084FF",
  650: "#007AFF",
  675: "#0070FF",
  700: "#0066FF"
};
const btnSecondaryStates = {
  200: "#4CFFCF",
  225: "#3CF5C8",
  250: "#28F0BE",
  275: "#20EDB9",
  300: "#1DE9B6"
};
const btnOutlineText = {
  5: `${primary[700]}05`,
  10: `${primary[700]}10`,
  15: `${primary[700]}15`,
  20: `${primary[700]}20`,
  30: `${primary[700]}30`,
  50: `${primary[700]}50`
};
const white = {
  5: "#ffffff0D",
  10: "#ffffff1A",
  15: "#ffffff26",
  20: "#ffffff33",
  30: "#ffffff4D",
  50: "#ffffff80",
  100: "#ffffff"
};
const accent = {
  get main() {
    return "#840CF9";
  }

};
const error = {
  get main() {
    return "#ED0063";
  }

};
const warning = {
  get main() {
    return "#FFB84D";
  }

};
const success = {
  get main() {
    return "#16A689";
  }

};
const surface = {
  default: "#fff"
};
const background = {
  default: "#D3DAE5",
  paper: "#fafafa"
};
const onBackground = {
  default: "#333333"
};
const palette = {
  primary,
  onPrimary,
  secondary,
  onSecondary,
  neutral,
  grey,
  accent,
  error,
  success,
  warning,
  btnPrimaryStates,
  btnSecondaryStates,
  btnOutlineText,
  white,
  surface,
  background,
  onBackground
};
/* harmony default export */ __webpack_exports__["a"] = (palette);

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "65B7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ThemeConstants = {
  htmlFontSize: 16,
  fontFamily: 'Roboto, sans-serif',
  fontSize: 14,
  fontWeightExtraLight: 200,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900
};
/* harmony default export */ __webpack_exports__["a"] = (ThemeConstants);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7an5":
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9whr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useChangeDirection; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useChangePalette; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "jss-rtl"
var external_jss_rtl_ = __webpack_require__("7an5");
var external_jss_rtl_default = /*#__PURE__*/__webpack_require__.n(external_jss_rtl_);

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__("q1C7");

// CONCATENATED MODULE: ./src/theme/RtlSupportProvider.tsx





const jss = Object(external_jss_["create"])({
  plugins: [...Object(core_["jssPreset"])().plugins, external_jss_rtl_default()()]
});

const RtlSupportProvider = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["StylesProvider"], {
  jss: jss,
  children: props.children
});

/* harmony default export */ var theme_RtlSupportProvider = (RtlSupportProvider);
// EXTERNAL MODULE: ./src/theme/theme.ts + 7 modules
var theme_theme = __webpack_require__("pHEk");

// CONCATENATED MODULE: ./src/theme/GolThemeProvider.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CHANGE_DIR = "CHANGE_DIR";
const CHANGE_PALETTE = "CHANGE_PALETTE";
const ThemeContext = /*#__PURE__*/external_react_default.a.createContext({});

const GolThemeProvider = ({
  children
}) => {
  const {
    0: {
      direction,
      palette
    },
    1: dispatch
  } = Object(external_react_["useReducer"])((theme, action) => {
    switch (action.type) {
      case CHANGE_DIR:
        return _objectSpread(_objectSpread({}, theme), {}, {
          direction: action.payload || theme.direction
        });

      case CHANGE_PALETTE:
        return _objectSpread(_objectSpread({}, theme), {}, {
          palette: action.payload
        });

      default:
        return theme;
    }
  }, theme_theme["a" /* default */]);
  Object(external_react_["useEffect"])(() => {
    document.body.setAttribute("dir", direction);

    if (direction === "rtl") {
      document.querySelector("html").style.fontFamily = "Peyda";
    } else {
      document.querySelector("html").style.fontFamily = "Roboto";
    }
  }, [direction]);
  const themeNamesDictionary = {
    ltrThemeLight: theme_theme["c" /* ltrThemeLight */],
    rtlThemeDark: theme_theme["d" /* rtlThemeDark */],
    ltrThemeDark: theme_theme["b" /* ltrThemeDark */],
    rtlThemeLight: theme_theme["e" /* rtlThemeLight */]
  };
  let theme = themeNamesDictionary[`${direction}Theme${palette.length ? palette : "Light"}`];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(theme_RtlSupportProvider, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ThemeProvider"], {
      theme: theme,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemeContext.Provider, {
        value: dispatch,
        children: children
      })
    })
  });
};

/* harmony default export */ var theme_GolThemeProvider = __webpack_exports__["a"] = (GolThemeProvider);
const useChangeDirection = () => {
  const dispatch = Object(external_react_["useContext"])(ThemeContext);
  return Object(external_react_["useCallback"])(dir => dispatch({
    type: CHANGE_DIR,
    payload: dir
  }), [dispatch]);
};
const useChangePalette = () => {
  const dispatch = Object(external_react_["useContext"])(ThemeContext);
  return Object(external_react_["useCallback"])(pal => dispatch({
    type: CHANGE_PALETTE,
    payload: pal
  }), [dispatch]);
};

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "DkZ7":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Gj1Z":
/***/ (function(module, exports) {

module.exports = require("react-hotkeys-hook");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "SRXj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _GolButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rDwE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _GolButton__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aFs1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
// export const api = "http://localhost:8989";
const api = "http://185.247.119.178:8989";

/***/ }),

/***/ "aNv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3BIL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pHEk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),

/***/ "apE0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ LanguageSelector_LanguageSelector; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__("aNv/");

// CONCATENATED MODULE: ./src/layout/CI/LanguageSelector/LanguageSelector.styles.ts

/* harmony default export */ var LanguageSelector_styles = (Object(theme["b" /* makeGolStyles */])(({
  spacing,
  palette,
  direction
}) => ({
  root: {}
}), {
  name: "LanguageSelector"
}));
// EXTERNAL MODULE: ./src/theme/GolThemeProvider.tsx + 1 modules
var GolThemeProvider = __webpack_require__("9whr");

// CONCATENATED MODULE: ./src/layout/CI/LanguageSelector/LanguageSelector.tsx






const LanguageSelector = () => {
  const classes = LanguageSelector_styles();
  const {
    locale,
    asPath,
    push
  } = Object(router_["useRouter"])();
  const setDirection = Object(GolThemeProvider["b" /* useChangeDirection */])();
  const setPalette = Object(GolThemeProvider["c" /* useChangePalette */])();
  Object(external_react_["useEffect"])(() => {
    if (locale === "en-US") {
      setDirection("ltr");
    } else {
      setDirection("rtl");
    }
  }, [locale]);

  const handleClick = item => {
    if (item === "fa-IR" || item === "ar-AR") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }

    push(asPath, undefined, {
      locale: item,
      shallow: false
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: () => handleClick("fa-IR"),
      children: "\u0631\u0627\u0633\u062A \u0686\u06CC\u0646"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: () => handleClick("en-US"),
      children: "\u0686\u067E \u0686\u06CC\u0646"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: () => setPalette("Dark"),
      children: "\u062A\u0627\u0631\u06CC\u06A9"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: () => setPalette("Light"),
      children: "\u0631\u0648\u0634\u0646"
    })]
  });
};
LanguageSelector.displayName = "LanguageSelector";
/* harmony default export */ var LanguageSelector_LanguageSelector = (LanguageSelector);
// CONCATENATED MODULE: ./src/layout/CI/LanguageSelector/index.ts


/***/ }),

/***/ "baVd":
/***/ (function(module, exports) {

module.exports = require("cleave.js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./src/theme/GolThemeProvider.tsx + 1 modules
var GolThemeProvider = __webpack_require__("9whr");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__("aNv/");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__("pdi6");

// EXTERNAL MODULE: ./src/assets/styles/style.css
var style = __webpack_require__("DkZ7");

// EXTERNAL MODULE: ./src/layout/CI/Layout/index.ts + 39 modules
var Layout = __webpack_require__("xLjY");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./public/static/locales/fa-IR.json
var fa_IR = __webpack_require__("0NfA");

// EXTERNAL MODULE: ./public/static/locales/ar-AR.json
var ar_AR = __webpack_require__("j3dr");

// EXTERNAL MODULE: ./public/static/locales/en-US.json
var en_US = __webpack_require__("iSgn");

// CONCATENATED MODULE: ./src/providers/LanguageProvider/LanguageProvider.tsx







const LanguageProvider = ({
  children
}) => {
  var _ref;

  const {
    locale,
    defaultLocale
  } = Object(router_["useRouter"])();
  const languages = {
    "fa-IR": fa_IR,
    "ar-AR": ar_AR,
    "en-US": en_US
  };
  const currentLocale = (_ref = locale !== null && locale !== void 0 ? locale : defaultLocale) !== null && _ref !== void 0 ? _ref : "fa-IR";
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["IntlProvider"], {
    locale: currentLocale,
    messages: languages[currentLocale],
    onError: err => {
      if (err.code === external_react_intl_["ReactIntlErrorCode"].MISSING_TRANSLATION) {
        return console.warn(err.message, "🎃 MISSING_TRANSLATION");
      }
    },
    children: children
  });
};

/* harmony default export */ var LanguageProvider_LanguageProvider = (LanguageProvider);
// CONCATENATED MODULE: ./src/providers/LanguageProvider/index.ts

// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const App = ({
  Component,
  pageProps
}) => {
  const router = Object(router_["useRouter"])();
  const {
    locale
  } = Object(router_["useRouter"])();
  console.log(pageProps);
  Object(external_react_["useEffect"])(() => {
    router.events.on("routeChangeStart", () => external_nprogress_default.a.start());
    router.events.on("routeChangeComplete", () => external_nprogress_default.a.done());
    router.events.on("routeChangeError", () => external_nprogress_default.a.done());
    return () => {
      router.events.off("routeChangeStart", () => external_nprogress_default.a.start());
      router.events.off("routeChangeComplete", () => external_nprogress_default.a.done());
      router.events.off("routeChangeError", () => external_nprogress_default.a.done());
    };
  }, [router.events]);
  Object(external_react_["useEffect"])(() => {
    const serverStyles = document.querySelector("#jss-server-side");
    serverStyles === null || serverStyles === void 0 ? void 0 : serverStyles.remove();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "theme-color",
        content: theme["a" /* default */].palette.primary.main
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Market App"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GolThemeProvider["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LanguageProvider_LanguageProvider, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_toastify_["ToastContainer"], {
          position: "bottom-right"
        }), Component.Layout ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout["a" /* default */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
      })
    })]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "iSgn":
/***/ (function(module) {

module.exports = JSON.parse("{\"panel.dashboard.menu.dashboard\":\"Dashboard\",\"panel.dashboard.search\":\"Search\",\"panel.dashboard.dragAndDrop\":\"DRAG AND DROP A PAGE HERE\",\"panel.dashboard.seeMoreNotif\":\"See All Notifications\",\"panel.dashboard.users\":\"Users\",\"panel.dashboard.settings\":\"Settings\",\"panel.dashboard.themeCustomize\":\"Theme Customize\",\"panel.dashboard.skin\":\"Skin\",\"panel.dashboard.light\":\"LIGHT\",\"panel.dashboard.dark\":\"DARK\",\"panel.dashboard.semiDark\":\"SEMIDARK\",\"panel.dashboard.fontSelector\":\"Font Selector\",\"panel.dashboard.langSelector\":\"Language Selector\",\"panel.dashboard.currencyType\":\"Currency Type\",\"panel.dashboard.sayHello\":\"Hey,\",\"panel.dashboard.administrator\":\"administrator\",\"panel.messanger.messaging\":\"Messaging\",\"panel.auth.SingInPage.subTitle\":\"Let the World change\",\"panel.auth.SingInPage.title\":\"Welcome Back\",\"panel.auth.SingInPage.email\":\"EMAIL\",\"panel.auth.SingInPage.phone\":\"PHONE\",\"panel.auth.SingInPage.emailInput\":\"Your Email Address\",\"panel.auth.SingInPage.phoneInput\":\"Your Phone Numbe\",\"panel.auth.SingInPage.passInput\":\"Password\",\"panel.auth.SingInPage.forgetPassLink\":\"Forget Password?\",\"panel.auth.SingInPage.notHaveAccount\":\"I Don’t Have Account.\",\"panel.auth.SingInPage.signUp\":\" Sign Up\",\"panel.auth.SingInPage.signIn\":\"SIGN IN\",\"panel.auth.SingInPage.signInWithGoogle\":\"LOGIN WITH GOOGLE\",\"panel.auth.SingInPage.signInMessage1\":\"Hurry up! they need you\",\"panel.auth.EnterPassword.title\":\"Recover your password\",\"panel.auth.EnterPassword.desc\":\"Enter Your Password\",\"panel.auth.EnterPassword.email\":\"Email\",\"panel.auth.EnterPassword.forgetPassword\":\"NEXT\",\"panel.auth.OtpPage.title\":\"OTP\",\"panel.auth.OtpPage.desc\":\"Please enter 5 digit code sent to your registerd email\",\"panel.auth.OtpPage.notRecieved\":\"Don't Recieved code?\",\"panel.auth.OtpPage.resend\":\"Resend\",\"panel.auth.OtpPage.signUp\":\"Sign Up\",\"panel.auth.SignUpPageM.signInMessage1\":\"Hurry up! they need you\",\"panel.auth.SignUpPageM.allready\":\"Already Have Account?\",\"panel.auth.SignUpPageM.signIn\":\"Sign In\",\"panel.auth.SignUpPageM.signUp\":\"Sign Up\",\"panel.auth.SignUpPageM.title\":\"Sign Up\",\"panel.auth.SignUpPageM.subTitle\":\"Let the World change!\",\"panel.auth.SignUpPageM.phoneWay\":\"Use my phone number insted\",\"panel.auth.SignUpPageM.emailWay\":\"Use my email account insted\",\"panel.auth.SignUpPageM.phoneInput\":\"Phone Number\",\"panel.auth.SignUpPageM.signInWithGoogle\":\"SIGN UP WITH GOOGLE\",\"panel.auth.SignUpPageM.fullNameInput\":\"Full Name\",\"panel.auth.SignUpPageM.emailInput\":\"Email\",\"panel.auth.RecoverPasswordPage.title\":\"Enter Your Password\",\"panel.auth.RecoverPasswordPage.passInput\":\"New Password\",\"panel.auth.RecoverPasswordPage.confirmPassInput\":\"Re-type New Password\",\"panel.auth.RecoverPasswordPage.done\":\"Submit\"}");

/***/ }),

/***/ "j3dr":
/***/ (function(module) {

module.exports = JSON.parse("{\"panel.dashboard.menu.dashboard\":\"Dashboard\",\"panel.dashboard.search\":\"Search\",\"panel.dashboard.dragAndDrop\":\"DRAG AND DROP A PAGE HERE\",\"panel.dashboard.seeMoreNotif\":\"See All Notifications\",\"panel.dashboard.users\":\"Users\",\"panel.dashboard.settings\":\"Settings\",\"panel.dashboard.themeCustomize\":\"Theme Customize\",\"panel.dashboard.skin\":\"Skin\",\"panel.dashboard.light\":\"LIGHT\",\"panel.dashboard.dark\":\"DARK\",\"panel.dashboard.semiDark\":\"SEMIDARK\",\"panel.dashboard.fontSelector\":\"Font Selector\",\"panel.dashboard.langSelector\":\"Language Selector\",\"panel.dashboard.currencyType\":\"Currency Type\",\"panel.dashboard.sayHello\":\"Hey,\",\"panel.dashboard.administrator\":\"administrator\",\"panel.messanger.messaging\":\"Messaging\",\"panel.auth.SingInPage.subTitle\":\"Let the World change\",\"panel.auth.SingInPage.title\":\"Welcome Back\",\"panel.auth.SingInPage.email\":\"EMAIL\",\"panel.auth.SingInPage.phone\":\"PHONE\",\"panel.auth.SingInPage.emailInput\":\"Your Email Address\",\"panel.auth.SingInPage.phoneInput\":\"Your Phone Numbe\",\"panel.auth.SingInPage.passInput\":\"Password\",\"panel.auth.SingInPage.forgetPassLink\":\"Forget Password?\",\"panel.auth.SingInPage.notHaveAccount\":\"I Don’t Have Account.\",\"panel.auth.SingInPage.signUp\":\" Sign Up\",\"panel.auth.SingInPage.signIn\":\"SIGN IN\",\"panel.auth.SingInPage.signInWithGoogle\":\"LOGIN WITH GOOGLE\",\"panel.auth.SingInPage.signInMessage1\":\"Hurry up! they need you\",\"panel.auth.EnterPassword.title\":\"Recover your password\",\"panel.auth.EnterPassword.desc\":\"Enter Your Password\",\"panel.auth.EnterPassword.email\":\"Email\",\"panel.auth.EnterPassword.forgetPassword\":\"NEXT\",\"panel.auth.OtpPage.title\":\"OTP\",\"panel.auth.OtpPage.desc\":\"Please enter 5 digit code sent to your registerd email\",\"panel.auth.OtpPage.notRecieved\":\"Don't Recieved code?\",\"panel.auth.OtpPage.resend\":\"Resend\",\"panel.auth.OtpPage.signUp\":\"Sign Up\",\"panel.auth.SignUpPageM.signInMessage1\":\"Hurry up! they need you\",\"panel.auth.SignUpPageM.allready\":\"Already Have Account?\",\"panel.auth.SignUpPageM.signIn\":\"Sign In\",\"panel.auth.SignUpPageM.signUp\":\"Sign Up\",\"panel.auth.SignUpPageM.title\":\"Sign Up\",\"panel.auth.SignUpPageM.subTitle\":\"Let the World change!\",\"panel.auth.SignUpPageM.phoneWay\":\"Use my phone number insted\",\"panel.auth.SignUpPageM.emailWay\":\"Use my email account insted\",\"panel.auth.SignUpPageM.phoneInput\":\"Phone Number\",\"panel.auth.SignUpPageM.signInWithGoogle\":\"SIGN UP WITH GOOGLE\",\"panel.auth.SignUpPageM.fullNameInput\":\"Full Name\",\"panel.auth.SignUpPageM.emailInput\":\"Email\",\"panel.auth.RecoverPasswordPage.title\":\"Enter Your Password\",\"panel.auth.RecoverPasswordPage.passInput\":\"New Password\",\"panel.auth.RecoverPasswordPage.confirmPassInput\":\"Re-type New Password\",\"panel.auth.RecoverPasswordPage.done\":\"Submit\",\"panel.notifications.notifications\":\"الاعلانات\",\"panel.dashboard.myDesk\":\"المیزالکار\",\"panel.desk.products\":\"المحصولات\",\"panel.desk.categories\":\"دسته بندی ها\",\"panel.desk.orders\":\"السفارشات\"}");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pHEk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ rtlThemeDark; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ rtlThemeLight; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ltrThemeDark; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ ltrThemeLight; });

// UNUSED EXPORTS: getThemeOptions

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/theme/breakpoints.ts
const breakpoints = {
  values: {
    xs: 360,
    sm: 480,
    md: 720,
    lg: 1024,
    xl: 1440
  }
};
/* harmony default export */ var theme_breakpoints = (breakpoints);
// CONCATENATED MODULE: ./src/utils/numbers.ts
const byteConvertor = bytes => {
  const sizes = ['b', 'kb', 'mb', 'gb', 'tb'];

  if (bytes === 0) {
    return 'n/a';
  } //@ts-ignore


  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

  if (i === 0) {
    return `${bytes} ${sizes[i]}`;
  }

  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};
const calcPercentage = (value, max) => {
  const percentValue = Number((value * 100 / max).toFixed(0));
  return value >= max ? 100 : percentValue;
};
const generateRandomNumber = (digit = 2) => {
  return Math.floor(+Math.random().toFixed(digit) * 100);
};
const convertOpacityToAlpha = (hexColor, percent) => {
  const alpha = Math.round(percent * 255);
  const hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  return hexColor + hex;
};
// EXTERNAL MODULE: ./src/theme/palette.ts
var theme_palette = __webpack_require__("3d3b");

// EXTERNAL MODULE: ./src/theme/constants.ts
var constants = __webpack_require__("65B7");

// EXTERNAL MODULE: ./src/theme/helpers.ts
var helpers = __webpack_require__("3BIL");

// CONCATENATED MODULE: ./src/theme/typography.ts
// import {  } from "@material-ui/core/styles/createTypography";


const {
  htmlFontSize,
  fontFamily: typography_fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold
} = constants["a" /* default */];
const typography = {
  htmlFontSize,
  fontFamily: typography_fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  h1: {
    fontWeight: fontWeightBold,
    fontSize: Object(helpers["b" /* pxToRem */])(58),
    lineHeight: '68px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(48),
      lineHeight: '58px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(36),
      lineHeight: '46px'
    }
  },
  h2: {
    fontWeight: fontWeightSemiBold,
    fontSize: Object(helpers["b" /* pxToRem */])(45),
    lineHeight: '52px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(36),
      lineHeight: '72px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(28),
      lineHeight: '36px'
    }
  },
  h3: {
    fontWeight: fontWeightMedium,
    fontSize: Object(helpers["b" /* pxToRem */])(38),
    lineHeight: '44px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(28),
      lineHeight: '56px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(24),
      lineHeight: '31px'
    }
  },
  h4: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(32),
    lineHeight: '42px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(24),
      lineHeight: '36px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(20),
      lineHeight: '26px'
    }
  },
  h5: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(29),
    lineHeight: '36px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(21),
      lineHeight: '24px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(18),
      lineHeight: '23px'
    }
  },
  h6: {
    fontWeight: fontWeightMedium,
    fontSize: Object(helpers["b" /* pxToRem */])(24),
    lineHeight: '31px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(18),
      lineHeight: '24px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(15.94),
      lineHeight: '20px'
    }
  },
  subtitle1: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(17),
    lineHeight: '24px',
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(14.94),
      lineHeight: '24px'
    }
  },
  subtitle2: {
    fontWeight: fontWeightMedium,
    fontSize: Object(helpers["b" /* pxToRem */])(14),
    lineHeight: '24px',
    '@media (max-width:1024px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(16),
      lineHeight: '24px'
    },
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(12),
      lineHeight: '24px'
    }
  },
  body1: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(15),
    lineHeight: '24px',
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(14),
      lineHeight: '24px'
    }
  },
  body2: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(14),
    lineHeight: '20px',
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(13.12),
      lineHeight: '20px'
    }
  },
  button: {
    fontWeight: fontWeightMedium,
    fontSize: Object(helpers["b" /* pxToRem */])(14),
    lineHeight: '16px',
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(15),
      lineHeight: '16px'
    }
  },
  caption: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(13),
    lineHeight: '16px',
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(12),
      lineHeight: '16px'
    }
  },
  overline: {
    fontWeight: fontWeightRegular,
    fontSize: Object(helpers["b" /* pxToRem */])(11),
    lineHeight: '16px',
    '@media (max-width:480px)': {
      fontSize: Object(helpers["b" /* pxToRem */])(10),
      lineHeight: '16px'
    }
  }
};
/* harmony default export */ var theme_typography = (typography);
// CONCATENATED MODULE: ./src/theme/overrides.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const overrides = {
  MuiCssBaseline: {// "@global": {
    //   'color': palette.neutral[600],
    //   // '@font-face': FontFaces,
    //   // '@font-face': FontFaces,
    //   "#__next": {
    //     minWidth: 800,
    //   },
    //   'h1': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 300,
    //     fontSize: "4rem",
    //     lineHeight: 1,
    //     letterSpacing: "-0.01562em",
    //   },
    //   'h2': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 300,
    //     fontSize: "2rem",
    //     lineHeight: 1,
    //     letterSpacing: "-0.00833em",
    //   },
    //   'h3': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 400,
    //     fontSize: "1.75rem",
    //     lineHeight: 1.04,
    //     letterSpacing: "0em",
    //   },
    //   'h4': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 400,
    //     fontSize: "1.5rem",
    //     lineHeight: 1.17,
    //     letterSpacing: "0.00735em",
    //   },
    //   'h5': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 400,
    //     fontSize: "1.25rem",
    //     lineHeight: 1.33,
    //     letterSpacing: "0em",
    //     margin: 0,
    //   },
    //   'h6': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 500,
    //     fontSize: "1rem",
    //     lineHeight: 1.6,
    //     letterSpacing: "0.0075em",
    //   },
    //   'button': {
    //     "&:focus": {
    //       outline: 0,
    //     },
    //   },
    // },
  },
  MuiContainer: {
    root: {}
  },
  MuiFormControl: {
    root: {
      width: "100%"
    }
  },
  MuiOutlinedInput: {
    root: {
      minHeight: 40,
      borderRadius: 8,
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 2,
        borderColor: theme_palette["a" /* default */].grey[5]
      },
      "& .MuiOutlinedInput-input": {
        padding: "16px",
        color: "#52646F",
        display: "flex",
        "&::placeholder": {
          fontSize: "0.875rem",
          color: "#A9BECB"
        },
        "&.Mui-disabled": {
          color: theme_palette["a" /* default */].grey[6]
        }
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme_palette["a" /* default */].primary[500]
      },
      "&.Mui-disabled": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme_palette["a" /* default */].grey[6]
        }
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme_palette["a" /* default */].primary[700]
        }
      }
    },
    notchedOutline: {
      borderColor: "#0066FF"
    },
    adornedEnd: {
      "& .endAdornmentContainer": {
        top: 0,
        right: 0,
        position: "relative",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        color: "#94ADBD",
        "& .endAdornmentElement,& img": {
          margin: "0 2.5px"
        }
      }
    }
  },
  MuiInputLabel: {
    root: {
      color: "#0066FF",
      "&.Mui-error": {
        // color: "#52646F",
        color: theme_palette["a" /* default */].error.main
      },
      "&.Mui-disabled": {
        color: theme_palette["a" /* default */].grey[6]
      }
    },
    outlined: {
      transform: "translate(14px, 12px) scale(1)",
      zIndex: 0
    }
  },
  MuiTextField: {
    root: {
      // padding: '5px 5px 25px 5px',
      padding: "0, 8px" // marginBottom: 25,

    }
  },
  MuiFormHelperText: {
    root: {
      position: "absolute",
      bottom: -23,
      left: 0,
      right: 0,
      color: "#A9BECB",
      display: "flex",
      justifyContent: "space-between",
      "&.Mui-error": {
        color: theme_palette["a" /* default */].error.main
      }
    },
    contained: {
      marginLeft: 17,
      marginRight: 17
    }
  },
  MuiFormLabel: {
    root: {
      "&.Mui-error": {
        color: theme_palette["a" /* default */].error.main
      },
      "&.Mui-focused": {
        color: theme_palette["a" /* default */].primary[400],
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme_palette["a" /* default */].primary[400]
        }
      }
    }
  },
  MuiSwitch: {
    colorPrimary: {
      color: "#fff",
      "&$checked": {
        color: "#0066FF",
        "&$disabled": {
          color: `${theme_palette["a" /* default */].grey[6]}!important`,
          "@global": {
            "+.MuiSwitch-track": {
              backgroundColor: "#e3ede9 !important"
            }
          }
        }
      },
      "&$disabled": {
        color: "#eff4f8 !important",
        "@global": {
          "+.MuiSwitch-track": {
            backgroundColor: "#d9e4ea !important",
            opacity: "unset"
          }
        }
      }
    },
    colorSecondary: {
      color: "#fff",
      "&$checked": {
        color: "#d96846",
        "&$disabled": {
          color: "#f0c7bb !important",
          "@global": {
            "+.MuiSwitch-track": {
              backgroundColor: "#f4e7e6 !important"
            }
          }
        },
        "@global": {
          "+.MuiSwitch-track": {
            backgroundColor: "#e6a38f !important"
          }
        }
      },
      "&$disabled": {
        color: "#eff4f8 !important",
        "@global": {
          "+.MuiSwitch-track": {
            backgroundColor: "#d9e4ea !important",
            opacity: "unset"
          }
        }
      }
    },
    track: {
      opacity: "unset",
      backgroundColor: "#a9becb"
    }
  },
  MuiRadio: {
    colorPrimary: {
      "&$checked": {
        color: "#0066FF"
      }
    },
    root: {
      color: "#0066FF",
      "&$disabled": {
        color: "#c2d1db !important"
      },
      "@global": {
        "+.MuiFormControlLabel-label.Mui-disabled": {
          color: theme_palette["a" /* default */].grey[6]
        }
      }
    }
  },
  MuiFormControlLabel: {
    root: _objectSpread({
      color: theme_palette["a" /* default */].neutral[500]
    }, theme_typography.button)
  },
  MuiCheckbox: {
    colorPrimary: {
      color: theme_palette["a" /* default */].neutral[400],
      borderRadius: 8,
      "&:hover": {
        backgroundColor: `${convertOpacityToAlpha(theme_palette["a" /* default */].neutral[600], 0.05)}`
      },
      "&:active": {
        backgroundColor: `${convertOpacityToAlpha(theme_palette["a" /* default */].primary[700], 0.2)}`,
        borderRadius: 8
      },
      "@global": {
        "+.MuiFormControlLabel-label": {
          color: theme_palette["a" /* default */].neutral[400]
        }
      },
      "&$disabled": {
        color: theme_palette["a" /* default */].neutral[300],
        "@global": {
          "+.MuiFormControlLabel-label": {
            color: theme_palette["a" /* default */].neutral[300]
          }
        }
      },
      "&$checked": {
        color: theme_palette["a" /* default */].primary[700],
        "&:hover": {
          backgroundColor: `${convertOpacityToAlpha(theme_palette["a" /* default */].primary[700], 0.05)}`
        },
        "&:active": {
          backgroundColor: `${convertOpacityToAlpha(theme_palette["a" /* default */].primary[700], 0.15)}`,
          borderRadius: 8
        },
        "&$disabled": {
          color: theme_palette["a" /* default */].primary[100]
        }
      }
    }
  },
  MuiAvatar: {
    root: {
      width: 48,
      height: 48
    }
  },
  MuiTable: {
    root: {
      borderCollapse: "collapse",
      borderRadius: 4,
      overflow: "hidden",
      borderSpacing: "unset",
      position: "relative"
    }
  },
  // MuiTableBody: {
  //   root: {
  //     '& > tr': {
  //     }
  //   },
  // },
  MuiTableCell: {
    root: {
      display: "flex",
      alignItems: "center",
      padding: 0 // border: `0.5px solid ${palette.neutral[200]}`,

    } // head: {
    // },
    // body: {
    //   // '&:last-child': {
    //   //   justifyContent: 'flex-end',
    //   // },
    // },

  },
  MuiTableRow: {
    root: {},
    // head: {
    // },
    footer: {
      "& td": {
        justifyContent: "flex-end"
      }
    }
  },
  MuiChip: {
    root: {
      backgroundColor: theme_palette["a" /* default */].neutral[300],
      color: theme_palette["a" /* default */].neutral[400]
    }
  },
  MuiCardHeader: {
    title: {
      color: theme_palette["a" /* default */].neutral[600]
    },
    subheader: {
      color: theme_palette["a" /* default */].primary[400]
    }
  },
  MuiButtonGroup: {
    groupedOutlinedHorizontal: {
      "&:not(:first-child)": {
        marginLeft: "unset"
      }
    }
  }
};
/* harmony default export */ var theme_overrides = (overrides);
// CONCATENATED MODULE: ./src/theme/darkPalette.ts
const primary = {
  get main() {
    return this[700];
  },

  get contrastText() {
    return accent.main;
  },

  50: "#2A3880",
  100: "#364ECD",
  200: "#266ED9",
  300: "#268AD9",
  400: "#2694D9",
  500: "#1AA4E5",
  600: "#59B8EC",
  700: "#93D4FF",
  800: "#BAE2FF",
  900: "#E9F7FF"
};
const secondary = {
  get main() {
    return this[300];
  },

  get contrastText() {
    return accent.main;
  },

  50: "#BFFFEA",
  100: "#99FFE0",
  200: "#4CFFCF",
  300: "#1DE9B6",
  400: "#12B392",
  500: "#16A689",
  600: "#0E8C75",
  700: "#097361",
  800: "#055C50",
  900: "#00403A"
};
const neutral = {
  get main() {
    return this[500];
  },

  get contrastText() {
    return accent.main;
  },

  50: "#17212A",
  100: "#253543",
  200: "#303F4E",
  300: "#4F596A",
  400: "#6D7686",
  500: "#ADB6C5",
  600: "#BFC9DA",
  700: "#D3DAE5",
  800: "#EDEEF1",
  900: "#FFFFFF"
};
const grey = {
  main: "#E0E0E0",
  "1": "#333333",
  "2": "#4F4F4F",
  "3": "#828282",
  "4": "#BDBDBD",
  "5": "#E0E0E0",
  "6": "#F2F2F2"
};
const onPrimary = {
  get main() {
    return "#141E28";
  }

};
const onSecondary = {
  get main() {
    return "#00403A";
  }

};
const btnPrimaryStates = {
  600: "#59B8EC",
  625: "#0084FF",
  650: "#007AFF",
  675: "#46BDFF",
  700: "#93D4FF"
};
const btnSecondaryStates = {
  200: "#4CFFCF",
  225: "#3CF5C8",
  250: "#28F0BE",
  275: "#20EDB9",
  300: "#1DE9B6"
};
const btnOutlineText = {
  5: `${primary[700]}05`,
  10: `${primary[700]}10`,
  15: `${primary[700]}15`,
  20: `${primary[700]}20`,
  30: `${primary[700]}30`,
  50: `${primary[700]}50`
};
const white = {
  5: "#ffffff0D",
  10: "#ffffff1A",
  15: "#ffffff26",
  20: "#ffffff33",
  30: "#ffffff4D",
  50: "#ffffff80",
  100: "#ffffff"
};
const accent = {
  get main() {
    return "#BD7BFD";
  }

};
const error = {
  get main() {
    return "#FC68A6";
  }

};
const warning = {
  get main() {
    return "#FFD28D";
  }

};
const success = {
  get main() {
    return "#65F0D4";
  }

};
const surface = {
  default: "#12212E"
};
const background = {
  default: "#0D1720",
  paper: "#fafafa"
};
const onBackground = {
  default: "#EDEEF1"
};
const darkPalette_palette = {
  primary,
  onPrimary,
  secondary,
  onSecondary,
  neutral,
  grey,
  accent,
  error,
  success,
  warning,
  btnPrimaryStates,
  btnSecondaryStates,
  btnOutlineText,
  white,
  surface,
  background,
  onBackground
};
/* harmony default export */ var darkPalette = (darkPalette_palette);
// CONCATENATED MODULE: ./src/theme/shadows.ts
const shadowColors = ['rgba(0,0,0,0.25)', //0
'rgba(0,0,0,0.2)', //1
'rgba(0,0,0,0.14)', //2
'rgba(0,0,0,0.12)' //3
];
const shadows = ['none', //shadows[1]
`0px 1px 2px ${shadowColors[2]},
  	0px 2px 3px ${shadowColors[3]},
  	0px 1px 5px ${shadowColors[1]}`, //shadows[2]
`0px 2px 4px ${shadowColors[2]},
  	0px 3px 3px ${shadowColors[3]},
  	0px 1px 8px ${shadowColors[1]}`, //shadows[3]
`0px 3px 6px ${shadowColors[2]},
    0px 3px 7px ${shadowColors[3]},
    0px 1px 10px ${shadowColors[1]}`, //shadows[4]
`0px 4px 7px ${shadowColors[2]},
    0px 1px 13px ${shadowColors[3]},
    0px 2px 8px ${shadowColors[1]}`, //shadows[5]
`0px 6px 14px ${shadowColors[2]},
    0px 1px 22px ${shadowColors[3]},
    0px 3px 8px ${shadowColors[1]}`, //shadows[6]
`0px 8px 14px ${shadowColors[2]},
    0px 3px 18px ${shadowColors[3]},
    0px 5px 9px ${shadowColors[1]}`, //shadows[7]
`0px 9px 16px ${shadowColors[2]},
    0px 3px 20px ${shadowColors[3]},
    0px 5px 10px ${shadowColors[1]}`, //shadows[8]
`0px 12px 20px ${shadowColors[2]},
    0px 5px 25px ${shadowColors[3]},
    0px 7px 10px ${shadowColors[1]}`, //shadows[9]
`0px 16px 27px ${shadowColors[2]},
    0px 6px 35px ${shadowColors[3]},
    0px 8px 15px ${shadowColors[1]}`, //shadows[10]
`0px 24px 42px ${shadowColors[2]},
    0px 9px 52px ${shadowColors[3]},
    0px 11px 20px ${shadowColors[1]}`];
/* harmony default export */ var theme_shadows = (shadows);
// CONCATENATED MODULE: ./src/theme/transitions.ts
const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  }
};
/* harmony default export */ var theme_transitions = (transitions);
// CONCATENATED MODULE: ./src/theme/theme.ts








const getThemeOptions = (direction, palette) => {
  const fontFamily = direction === "rtl" ? '"Peyda", "Helvetica", "Arial", sans-serif' : '"Roboto", "Peyda", "Helvetica", "Arial", sans-serif';
  theme_typography.fontFamily = fontFamily;
  return {
    direction,
    palette,
    shadows: theme_shadows,
    typography: theme_typography,
    spacing: 4,
    transitions: theme_transitions,
    overrides: theme_overrides,
    breakpoints: theme_breakpoints,
    shape: {
      borderRadius: 4
    }
  };
};
const rtlThemeDark = Object(styles_["createMuiTheme"])(getThemeOptions("rtl", darkPalette));
const rtlThemeLight = Object(styles_["createMuiTheme"])(getThemeOptions("rtl", theme_palette["a" /* default */]));
const ltrThemeDark = Object(styles_["createMuiTheme"])(getThemeOptions("ltr", darkPalette));
const ltrThemeLight = Object(styles_["createMuiTheme"])(getThemeOptions("ltr", theme_palette["a" /* default */]));
const baseTheme = Object(styles_["createMuiTheme"])(getThemeOptions("rtl", theme_palette["a" /* default */]));
/* harmony default export */ var theme = __webpack_exports__["a"] = (baseTheme);

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "pdi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "q1C7":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "qAGY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__("aNv/");

// CONCATENATED MODULE: ./src/components/GolModal/useGolModal.styles.ts

/* harmony default export */ var useGolModal_styles = (Object(theme["b" /* makeGolStyles */])(({
  palette,
  spacing
}) => ({
  root: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    zIndex: 9,
    background: "rgba(0,0,0,.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: "90%",
    background: palette.surface.default,
    borderRadius: 12,
    padding: spacing(6) // animationName: "$opacity",
    // animationDuration: "400ms",
    // animationTimingFunction: "linear",
    // animationIterationCount: "forwards",

  },
  "@keyframes opacity": {
    from: {
      opacity: 0,
      filter: "blur(2px)"
    },
    to: {
      opacity: 1,
      filter: "blur(0px)"
    }
  }
})));
// CONCATENATED MODULE: ./src/components/GolModal/GolModal.tsx




const GolModal = props => {
  const classes = useGolModal_styles(props);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.modal,
      children: props.children
    })
  });
};

GolModal.displayName = "GolModal";
/* harmony default export */ var GolModal_GolModal = __webpack_exports__["a"] = (GolModal);

/***/ }),

/***/ "rDwE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__("aNv/");

// CONCATENATED MODULE: ./src/components/GolButton/GolButton.style.ts

/* harmony default export */ var GolButton_style = (Object(theme["b" /* makeGolStyles */])(({
  palette: {
    neutral,
    secondary,
    primary,
    btnPrimaryStates,
    btnSecondaryStates,
    btnOutlineText,
    white
  },
  shape: {
    borderRadius
  },
  transitions: {
    easing: {
      easeInOut
    }
  },
  spacing
}) => ({
  root: {
    color: GolButton_style_variant({
      contained: '#fff'
    }),
    width: 'max-content',
    fontSize: '0.875rem',
    transition: 'all ease 0.2s',
    boxShadow: 'unset',
    border: `1px solid ${primary === null || primary === void 0 ? void 0 : primary[900]}`,
    padding: spacing(2.5, 5),
    backgroundPosition: GolButton_style_ripple({
      animated: 'right bottom'
    }),
    backgroundSize: GolButton_style_ripple({
      animated: '200% 100%'
    }),
    '& .MuiTouchRipple-root .MuiTouchRipple-child': {
      borderRadius
    },
    '& .MuiTouchRipple-root .MuiTouchRipple-ripple': {
      animation: GolButton_style_ripple({
        animated: `MuiTouchRipple-keyframes-enter 550ms ${easeInOut}`,
        simple: 'unset'
      })
    },
    '& svg path': {
      fill: 'currentColor'
    },
    '&:hover': {
      backgroundPosition: GolButton_style_ripple({
        animated: 'left bottom',
        simple: 'unset'
      }),
      boxShadow: 'unset'
    }
  },
  containedNeutral: {
    color: neutral === null || neutral === void 0 ? void 0 : neutral[100],
    backgroundImage: GolButton_style_ripple({
      animated: `linear-gradient( to left, ${neutral === null || neutral === void 0 ? void 0 : neutral[300]} 50%, ${neutral === null || neutral === void 0 ? void 0 : neutral[50]} 50% )`,
      simple: neutral === null || neutral === void 0 ? void 0 : neutral[300]
    }),
    border: GolButton_style_variant({
      outlined: `1px solid ${neutral === null || neutral === void 0 ? void 0 : neutral[300]}`
    }),
    '&:hover': {
      color: neutral === null || neutral === void 0 ? void 0 : neutral[300],
      backgroundColor: GolButton_style_ripple({
        simple: neutral === null || neutral === void 0 ? void 0 : neutral[50]
      })
    },
    '&.Mui-disabled': {
      background: neutral === null || neutral === void 0 ? void 0 : neutral[50],
      color: neutral === null || neutral === void 0 ? void 0 : neutral[200]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: neutral === null || neutral === void 0 ? void 0 : neutral[200],
      color: neutral === null || neutral === void 0 ? void 0 : neutral[50]
    }
  },
  outlinedNeutral: {
    color: neutral === null || neutral === void 0 ? void 0 : neutral[600],
    backgroundImage: GolButton_style_ripple({
      animated: `linear-gradient( to left, transparent 50%, ${neutral === null || neutral === void 0 ? void 0 : neutral[100]} 50% )`,
      simple: 'transparent'
    }),
    border: GolButton_style_variant({
      outlined: `1px solid ${neutral === null || neutral === void 0 ? void 0 : neutral[600]}`
    }),
    '&:hover': {
      background: GolButton_style_ripple({
        simple: neutral === null || neutral === void 0 ? void 0 : neutral[50]
      })
    },
    '&.Mui-disabled': {
      background: 'transparent',
      color: neutral === null || neutral === void 0 ? void 0 : neutral[100],
      borderColor: neutral === null || neutral === void 0 ? void 0 : neutral[100]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: neutral === null || neutral === void 0 ? void 0 : neutral[200],
      color: neutral === null || neutral === void 0 ? void 0 : neutral[50]
    }
  },
  textNeutral: {
    color: neutral === null || neutral === void 0 ? void 0 : neutral[300],
    backgroundImage: GolButton_style_ripple({
      animated: `linear-gradient( to left, transparent 50%, ${neutral === null || neutral === void 0 ? void 0 : neutral[50]} 50% )`,
      simple: 'transparent'
    }),
    '&:hover': {
      background: GolButton_style_ripple({
        simple: neutral === null || neutral === void 0 ? void 0 : neutral[50]
      })
    },
    '&.Mui-disabled': {
      background: 'transparent',
      color: neutral === null || neutral === void 0 ? void 0 : neutral[100]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: neutral === null || neutral === void 0 ? void 0 : neutral[200],
      color: neutral === null || neutral === void 0 ? void 0 : neutral[50]
    }
  },
  containedSecondary: {
    color: GolButton_style_variant({
      contained: secondary[800]
    }),
    borderColor: secondary === null || secondary === void 0 ? void 0 : secondary[500],
    backgroundImage: GolButton_style_ripple({
      animated: `linear-gradient( to left, ${secondary.main} 50%, ${btnSecondaryStates[275]} 50% )`,
      simple: secondary.main
    }),
    '&:hover': {
      backgroundColor: GolButton_style_ripple({
        simple: secondary[500],
        animated: 'unset'
      })
    },
    '&.Mui-disabled': {
      background: secondary[50],
      color: secondary[200]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: secondary[200] // color: variant({ contained: secondary[800] }),

    }
  },
  outlinedSecondary: {
    backgroundImage: GolButton_style_ripple({
      animated: `linear-gradient( to left, transparent 50%, ${secondary[50]} 50% )`,
      simple: 'transparent'
    }),
    border: GolButton_style_variant({
      outlined: `1px solid ${secondary.main}`
    }),
    '&:hover': {
      background: GolButton_style_ripple({
        simple: secondary[50]
      })
    },
    '&.Mui-disabled': {
      background: 'transparent',
      color: secondary[100],
      borderColor: secondary[100]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: secondary[200],
      color: secondary[500]
    }
  },
  textSecondary: {
    border: 'none',
    backgroundImage: GolButton_style_ripple({
      simple: 'transparent',
      animated: `linear-gradient( to left, transparent 50%, ${secondary[50]} 50% )`
    }),
    '&:hover': {
      background: GolButton_style_ripple({
        simple: secondary[50]
      })
    },
    '&.Mui-disabled': {
      background: 'transparent',
      color: secondary[100]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: secondary[200],
      color: secondary[500]
    }
  },
  containedPrimary: {
    backgroundImage: GolButton_style_ripple({
      simple: primary.main,
      animated: `linear-gradient( to left, ${primary.main} 50%, ${btnPrimaryStates[675]} 50% )`
    }),
    border: GolButton_style_variant({
      outlined: `1px solid ${primary.main}`
    }),
    '&:hover': {
      background: GolButton_style_ripple({
        simple: primary[500]
      })
    },
    '&.Mui-disabled': {
      border: 'none',
      background: white[10],
      color: primary[200],
      backgroundImage: 'unset'
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: btnPrimaryStates[650],
      color: GolButton_style_variant({
        contained: '#fff'
      })
    }
  },
  outlinedPrimary: {
    backgroundImage: GolButton_style_ripple({
      simple: 'transparent',
      animated: `linear-gradient( to left, transparent 50%, ${btnOutlineText[5]} 50% )`
    }),
    border: GolButton_style_variant({
      outlined: `1px solid ${primary.main}`
    }),
    '&:hover': {
      backgroundColor: GolButton_style_ripple({
        simple: btnOutlineText[5],
        animated: 'unset'
      })
    },
    '&.Mui-disabled': {
      background: 'transparent',
      color: primary[100]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: btnOutlineText[30],
      color: primary[500]
    }
  },
  textPrimary: {
    border: 'none',
    backgroundImage: GolButton_style_ripple({
      simple: 'transparent',
      animated: `linear-gradient( to left, transparent 50%, ${btnOutlineText[5]} 50% )`
    }),
    '&:hover': {
      backgroundColor: GolButton_style_ripple({
        simple: btnOutlineText[5],
        animated: 'unset'
      })
    },
    '&.Mui-disabled': {
      background: 'transparent',
      color: primary[100]
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: btnOutlineText[10],
      color: primary[500]
    }
  }
})));

const selector = (objMap, key) => {
  if (!key) {
    return undefined;
  }

  return objMap[key];
};

const GolButton_style_ripple = obj => ({
  ripple
}) => selector(obj, ripple);

const GolButton_style_variant = obj => ({
  variant
}) => selector(obj, variant);
// CONCATENATED MODULE: ./src/components/GolButton/GolButton.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const GolButton = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    variant,
    hasNeutral,
    ripple,
    color,
    children,
    className,
    classes
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant", "hasNeutral", "ripple", "color", "children", "className", "classes"]);

  const styles = GolButton_style({
    variant,
    ripple,
    classes
  });
  const isNeutral = !!hasNeutral && !!variant;
  const neutralClassName = styles[`${variant}Neutral`];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], _objectSpread(_objectSpread(_objectSpread({
    ref: ref,
    className: external_classnames_default()(className, {
      [neutralClassName]: isNeutral
    }),
    color: hasNeutral ? undefined : color
  }, {
    classes: {
      root: styles.root,
      containedSecondary: styles.containedSecondary,
      outlinedSecondary: styles.outlinedSecondary,
      textSecondary: styles.textSecondary,
      containedPrimary: styles.containedPrimary,
      outlinedPrimary: styles.outlinedPrimary,
      textPrimary: styles.textPrimary
    },
    variant
  }), props), {}, {
    children: children
  }));
});
GolButton.displayName = "GolButton";
GolButton.defaultProps = {
  variant: "contained",
  color: "primary",
  ripple: "animated"
};
/* harmony default export */ var GolButton_GolButton = __webpack_exports__["a"] = (GolButton);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xLjY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Layout_DashboardLayout; });

// UNUSED EXPORTS: DashboardLayout

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/assets/images/icons/Arrows/small/left.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLeft(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.53 7.47a.75.75 0 010 1.06L11.06 12l3.47 3.47a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 0z",
    fill: "#757F88"
  })));
}

/* harmony default export */ var left = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC41MzAzIDcuNDY5NjdDMTQuODIzMiA3Ljc2MjU2IDE0LjgyMzIgOC4yMzc0NCAxNC41MzAzIDguNTMwMzNMMTEuMDYwNyAxMkwxNC41MzAzIDE1LjQ2OTdDMTQuODIzMiAxNS43NjI2IDE0LjgyMzIgMTYuMjM3NCAxNC41MzAzIDE2LjUzMDNDMTQuMjM3NCAxNi44MjMyIDEzLjc2MjYgMTYuODIzMiAxMy40Njk3IDE2LjUzMDNMOS40Njk2NyAxMi41MzAzQzkuMTc2NzggMTIuMjM3NCA5LjE3Njc4IDExLjc2MjYgOS40Njk2NyAxMS40Njk3TDEzLjQ2OTcgNy40Njk2N0MxMy43NjI2IDcuMTc2NzggMTQuMjM3NCA3LjE3Njc4IDE0LjUzMDMgNy40Njk2N1oiIGZpbGw9IiM3NTdGODgiLz4KPC9zdmc+Cg==");

// CONCATENATED MODULE: ./src/assets/images/icons/Arrows/small/right.svg
var right_path;

function right_extends() { right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return right_extends.apply(this, arguments); }



function SvgRight(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", right_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), right_path || (right_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.47 7.47a.75.75 0 011.06 0l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 010-1.06z",
    fill: "#757F88"
  })));
}

/* harmony default export */ var right = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjQ2OTY3IDcuNDY5NjdDOS43NjI1NiA3LjE3Njc4IDEwLjIzNzQgNy4xNzY3OCAxMC41MzAzIDcuNDY5NjdMMTQuNTMwMyAxMS40Njk3QzE0LjgyMzIgMTEuNzYyNiAxNC44MjMyIDEyLjIzNzQgMTQuNTMwMyAxMi41MzAzTDEwLjUzMDMgMTYuNTMwM0MxMC4yMzc0IDE2LjgyMzIgOS43NjI1NiAxNi44MjMyIDkuNDY5NjcgMTYuNTMwM0M5LjE3Njc4IDE2LjIzNzQgOS4xNzY3OCAxNS43NjI2IDkuNDY5NjcgMTUuNDY5N0wxMi45MzkzIDEyTDkuNDY5NjcgOC41MzAzM0M5LjE3Njc4IDguMjM3NDQgOS4xNzY3OCA3Ljc2MjU2IDkuNDY5NjcgNy40Njk2N1oiIGZpbGw9IiM3NTdGODgiLz4KPC9zdmc+Cg==");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-hotkeys-hook"
var external_react_hotkeys_hook_ = __webpack_require__("Gj1Z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/theme/index.ts
var src_theme = __webpack_require__("aNv/");

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/desk/useDeskStyles.ts

const useDeskStyles = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  spacing
}) => ({
  root: {
    padding: spacing(20, 0, 2)
  },
  tabs: {},
  tab: {
    padding: spacing(2),
    marginBottom: spacing(3),
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      background: palette.neutral[100]
    },
    "& a": {
      color: palette.neutral[600],
      textDecoration: "none"
    }
  }
}), {
  name: "Desk"
});
/* harmony default export */ var desk_useDeskStyles = (useDeskStyles);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/desk/Desk.message.ts

const scope = "panel.desk";
const MyDeskMessages = Object(external_react_intl_["defineMessages"])({
  products: {
    id: `${scope}.products`,
    defaultMessage: "Products"
  },
  categories: {
    id: `${scope}.categories`,
    defaultMessage: "Categories"
  },
  orders: {
    id: `${scope}.orders`,
    defaultMessage: "Orders"
  }
});
/* harmony default export */ var Desk_message = (MyDeskMessages);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/layout/CI/LanguageSelector/index.ts + 2 modules
var LanguageSelector = __webpack_require__("apE0");

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/desk/Desk.tsx








const Desk = () => {
  const classes = useDeskStyles();
  const {
    formatMessage
  } = Object(external_react_intl_["useIntl"])();
  const tabs = [{
    name: `${formatMessage(Desk_message.categories)}`,
    route: "/categories"
  }, {
    name: `${formatMessage(Desk_message.products)}`,
    route: "/products"
  }, {
    name: `${formatMessage(Desk_message.orders)}`,
    route: "/orders"
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.tabs,
      children: tabs === null || tabs === void 0 ? void 0 : tabs.map(tab => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: tab === null || tab === void 0 ? void 0 : tab.route,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.tab,
            children: tab === null || tab === void 0 ? void 0 : tab.name
          })
        });
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LanguageSelector["a" /* default */], {})
    })]
  });
};
/* harmony default export */ var desk_Desk = (Desk);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/desk/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/favarites/useFavoritesStyles.ts

const useFavoritesStyles = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  spacing,
  shadows
}) => ({
  root: {
    width: 226,
    height: "100vh",
    top: 0,
    left: 87,
    position: "fixed",
    boxShadow: shadows[4],
    borderRadius: 12,
    padding: spacing(6),
    background: palette.surface.default,
    zIndex: 99
  }
}), {
  name: "Favorites"
});
/* harmony default export */ var favarites_useFavoritesStyles = (useFavoritesStyles);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/favarites/Favarites.tsx



const Favorites = () => {
  const classes = useFavoritesStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: "\u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062F\u06CC \u0647\u0627"
    })
  });
};
/* harmony default export */ var Favarites = (Favorites);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/favarites/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/notifications/useNotificationsStyles.ts

const useNotificationsStyles = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  spacing,
  shadows
}) => ({
  root: {
    width: 526,
    height: 616,
    top: 86,
    left: 87,
    position: "absolute",
    boxShadow: shadows[4],
    borderRadius: 12,
    padding: spacing(6),
    background: palette.surface.default,
    zIndex: 99
  }
}), {
  name: "Notifications"
});
/* harmony default export */ var notifications_useNotificationsStyles = (useNotificationsStyles);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/notifications/Notifications.message.ts

const Notifications_message_scope = "panel.notifications";
const NotificationsMessages = Object(external_react_intl_["defineMessages"])({
  notifications: {
    id: `${Notifications_message_scope}.notifications`,
    defaultMessage: "Notifications"
  }
});
/* harmony default export */ var Notifications_message = (NotificationsMessages);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/notifications/Notifications.tsx





const Notifications = () => {
  const classes = useNotificationsStyles();
  const {
    formatMessage
  } = Object(external_react_intl_["useIntl"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: formatMessage(Notifications_message.notifications)
    })
  });
};
/* harmony default export */ var notifications_Notifications = (Notifications);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/notifications/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/useSideBarStyles.ts

const useSideBarStyles = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  spacing
}) => ({
  root: {
    display: "flex",
    "& svg": {
      "& path": {
        fill: palette.neutral[100]
      }
    },
    width: "100%"
  },
  mainMenu: {
    backgroundColor: palette.neutral[700],
    width: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: spacing(10, 0),
    height: "100vh"
  },
  menuItems: {},
  menuItem: {
    cursor: "pointer",
    marginBottom: spacing(8)
  },
  logo: {
    marginBottom: spacing(15)
  },
  active: {
    background: `${palette.primary[100]}20`,
    display: "flex",
    padding: spacing(2),
    borderRadius: 4
  },
  deActive: {
    display: "flex",
    padding: spacing(2),
    borderRadius: 4
  }
}), {
  name: "SideBar"
});
/* harmony default export */ var sidebar_useSideBarStyles = (useSideBarStyles);
// CONCATENATED MODULE: ./src/assets/images/icons/Logo/Logo.svg
var Logo_path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, _path11, _path12, _path13, _path14, _path15, _path16, _path17, _path18, _path19, _path20, _g, _g2;

function Logo_extends() { Logo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Logo_extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Logo_extends({
    height: 36,
    viewBox: "0 0 512 512",
    width: 36,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Logo_path || (Logo_path = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M358.483 106.633a97.752 97.752 0 00-9.985 1.987c-.011.002-.021-.001-.031.002-25.333 6.432-39.002 22.083-42.021 49.475 7.738 8.702 15.506 8.79 22.544 6.863 18.704-6.254 33.124-23.352 34.246-54.141.094-2.569-2.21-4.56-4.753-4.186z",
    fill: "#ccf49e",
    fillRule: "evenodd"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M268.221 264.542L24.355 296.461V426.91c0 42.111 34.429 76.541 76.539 76.541h310.214c42.08 0 76.509-34.43 76.509-76.541V296.461zM167.883 116.834c-52.389-63.545-106.734-37.847-90.848 42.957 5.578 28.444 15.536 56.537 31.567 84.163l62.58 14.485 54.287-14.485v-5.286c-10.279-49.908-30.72-89.215-57.586-121.834zM354.017 193.462c-4.818-12.119-13.725-22.194-25.026-28.502-6.775-3.767-14.426-6.162-22.544-6.863a52.09 52.09 0 00-4.789-.204c-9.753 0-18.952 2.482-26.924 6.833l-10.484 88.485 62.901-9.257c14.455-4.527 28.413-19.128 26.866-50.492z",
    fill: "#ffd772",
    fillRule: "evenodd"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M274.733 164.726V33.168c0-13.55-11.097-24.618-24.617-24.618-13.55 0-24.647 11.068-24.647 24.618v210.787l28.326 18.544 20.938-18.544z",
    fill: "#ce9874",
    fillRule: "evenodd"
  })), _path4 || (_path4 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M478.184 112.95l-18.018-17.084-22.69-3.096-19.595 39.482c-25.435 51.339-43.599 35.043-63.865 61.209-3.271 4.234-6.6 9.549-10.016 16.441l-16.85 34.051 42.051 20.588 78.349-20.588c11.418-35.306-15.302-38.314 11.068-91.522z",
    fill: "#95d6a4",
    fillRule: "evenodd"
  })), _path5 || (_path5 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M497.019 86.142l-49.644-24.618c-1.811-.905-4.059-.146-4.964 1.694l-11.097 22.369c-.905 1.811-.146 4.059 1.694 4.964l4.468 2.219 20.354 10.075 20.354 10.104 4.468 2.19c1.811.905 4.059.175 4.964-1.665l11.097-22.369a3.705 3.705 0 00-1.694-4.963z",
    fill: "#365e7d",
    fillRule: "evenodd"
  })), _path6 || (_path6 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M76.831 243.954H14.046C6.308 243.954 0 250.262 0 258v24.384c0 7.739 6.308 14.076 14.046 14.076H76.83l27.625-26.253zM447.551 243.954H392.68l-99.667 25.932-24.793 26.575H497.923c7.739 0 14.075-6.337 14.075-14.076V258c0-7.739-6.337-14.047-14.075-14.047h-50.372z",
    fill: "#ce9874",
    fillRule: "evenodd"
  })), _path7 || (_path7 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M76.831 296.461H24.355v29.728h52.476z",
    fill: "#fdb440",
    fillRule: "evenodd"
  })), _path8 || (_path8 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M497.019 86.142l-17.258-8.586c1.781.934 2.511 3.154 1.606 4.964l-11.068 22.369c-.905 1.84-3.154 2.57-4.964 1.665l12.849 6.395 4.468 2.19c1.811.905 4.059.175 4.964-1.665l11.097-22.369a3.705 3.705 0 00-1.694-4.963z",
    fill: "#2b4d66",
    fillRule: "evenodd"
  })), _path9 || (_path9 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M478.184 112.95l-12.849-6.395-4.468-2.19-19.565 39.482c-26.37 53.208-4.614 64.801-16.032 100.107h22.281c11.418-35.306-15.302-38.314 11.068-91.522z",
    fill: "#78c2a4",
    fillRule: "evenodd"
  })), _path10 || (_path10 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M354.017 193.462c-4.818-12.119-13.725-22.194-25.026-28.502a55.74 55.74 0 00-21.201-6.717c.146.555.321 1.139.467 1.723a126.66 126.66 0 011.694 7.768c1.577 8.41 2.424 17.463 2.424 26.896 0 18.631-3.329 35.773-8.936 49.324h23.712L344 209.903c3.417-6.892 6.746-12.207 10.017-16.441z",
    fill: "#fdb440",
    fillRule: "evenodd"
  })), _path11 || (_path11 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M328.991 164.96c18.704-6.254 33.124-23.352 34.246-54.141.094-2.569-2.21-4.56-4.753-4.185a97.902 97.902 0 00-10.015 1.994c-.584 27.743-11.71 44.68-27.129 52.799 2.657.992 5.198 2.19 7.651 3.533z",
    fill: "#b3e59e",
    fillRule: "evenodd"
  })), _path12 || (_path12 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M274.733 164.726V33.168c0-13.55-11.097-24.618-24.617-24.618-4.41 0-8.527 1.139-12.09 3.183 7.476 4.234 12.528 12.265 12.528 21.435v210.787H274.733z",
    fill: "#c6875e",
    fillRule: "evenodd"
  })), _path13 || (_path13 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M225.469 238.668c-10.279-49.908-30.721-89.215-57.586-121.834-32.414-39.307-65.559-44.447-82.379-23.567 16.587.058 36.97 11.301 57.032 35.657 25.639 31.101 45.438 68.335 56.126 115.03h26.807z",
    fill: "#fdb440",
    fillRule: "evenodd"
  })), _path14 || (_path14 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M512 258c0-7.739-6.337-14.047-14.075-14.047h-40.124c7.739 0 14.075 6.308 14.075 14.047v24.384c0 7.739-6.337 14.076-14.075 14.076H497.924c7.739 0 14.075-6.337 14.075-14.076V258z",
    fill: "#c6875e",
    fillRule: "evenodd"
  })), _path15 || (_path15 = /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M422.671 296.461h-154.45l-70.494 29.729H452.72v100.72c0 42.111-34.429 76.541-76.539 76.541h34.926c42.08 0 76.509-34.43 76.509-76.541V296.461z",
    fill: "#fdb440",
    fillRule: "evenodd"
  })), _path16 || (_path16 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M117.134 175.054a7.726 7.726 0 01-6.99-4.428 7.727 7.727 0 013.684-10.287l33.495-15.828c3.857-1.824 8.464-.173 10.287 3.685s.174 8.464-3.684 10.287l-33.495 15.828a7.688 7.688 0 01-3.297.743zM131.59 220.815a7.727 7.727 0 01-3.308-14.714l45.205-21.376a7.727 7.727 0 016.606 13.97l-45.205 21.376a7.712 7.712 0 01-3.298.744zM268.221 354.679h-28.852a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452zM268.221 404.907h-28.852a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452zM338.277 354.679h-28.822a7.726 7.726 0 110-15.452h28.822a7.726 7.726 0 110 15.452zM338.277 404.907h-28.822a7.726 7.726 0 110-15.452h28.822a7.726 7.726 0 110 15.452zM268.221 455.137h-28.852a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452zM338.277 455.137h-28.822a7.726 7.726 0 110-15.452h28.822a7.726 7.726 0 110 15.452z",
    fill: "#ce9874"
  })), _path17 || (_path17 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M198.136 404.907h-28.823a7.726 7.726 0 110-15.452h28.823a7.726 7.726 0 110 15.452z"
  })), _path18 || (_path18 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M198.136 455.137h-28.823a7.726 7.726 0 110-15.452h28.823a7.726 7.726 0 110 15.452zM408.362 354.679H379.51a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452zM408.362 404.907H379.51a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452zM408.362 455.137H379.51a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452z",
    fill: "#ce9874"
  })), _path19 || (_path19 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M128.08 404.907H99.258a7.726 7.726 0 110-15.452h28.822a7.726 7.726 0 110 15.452z"
  })), _path20 || (_path20 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M128.08 455.137H99.258a7.726 7.726 0 110-15.452h28.822a7.726 7.726 0 110 15.452zM198.165 404.907h-28.852a7.726 7.726 0 110-15.452h28.852a7.726 7.726 0 110 15.452zM128.08 404.907H99.258a7.726 7.726 0 110-15.452h28.822a7.726 7.726 0 110 15.452z",
    fill: "#ce9874"
  })), _g || (_g = /*#__PURE__*/external_react_["createElement"]("g", null, /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M108.603 243.954H76.831v128.623c0 2.211 2.255 3.707 4.292 2.847l187.098-78.964 41.613-17.551 82.846-34.956-284.077.001z",
    fill: "#90d8f9",
    fillRule: "evenodd"
  }))), _g2 || (_g2 = /*#__PURE__*/external_react_["createElement"]("g", null, /*#__PURE__*/external_react_["createElement"]("path", {
    clipRule: "evenodd",
    d: "M76.831 354.837v16.187c0 2.949 3.006 4.943 5.723 3.796 91.628-38.677 183.283-77.354 274.909-116.031l35.218-14.835H339.591a980928.45 980928.45 0 00-262.76 110.883z",
    fill: "#75cef8",
    fillRule: "evenodd"
  }))));
}

/* harmony default export */ var Logo = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48Zz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0zNTguNDgzIDEwNi42MzNjLTMuNTEuNTE3LTYuODQ0IDEuMTgzLTkuOTg1IDEuOTg3LS4wMTEuMDAyLS4wMjEtLjAwMS0uMDMxLjAwMi0yNS4zMzMgNi40MzItMzkuMDAyIDIyLjA4My00Mi4wMjEgNDkuNDc1IDcuNzM4IDguNzAyIDE1LjUwNiA4Ljc5IDIyLjU0NCA2Ljg2MyAxOC43MDQtNi4yNTQgMzMuMTI0LTIzLjM1MiAzNC4yNDYtNTQuMTQxLjA5NC0yLjU2OS0yLjIxLTQuNTYtNC43NTMtNC4xODZ6IiBmaWxsPSIjY2NmNDllIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48Zz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yNjguMjIxIDI2NC41NDItMjQzLjg2NiAzMS45MTl2MTMwLjQ0OWMwIDQyLjExMSAzNC40MjkgNzYuNTQxIDc2LjUzOSA3Ni41NDFoMzEwLjIxNGM0Mi4wOCAwIDc2LjUwOS0zNC40MyA3Ni41MDktNzYuNTQxdi0xMzAuNDQ5eiIgZmlsbD0iI2ZmZDc3MiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTE2Ny44ODMgMTE2LjgzNGMtNTIuMzg5LTYzLjU0NS0xMDYuNzM0LTM3Ljg0Ny05MC44NDggNDIuOTU3IDUuNTc4IDI4LjQ0NCAxNS41MzYgNTYuNTM3IDMxLjU2NyA4NC4xNjNsNjIuNTggMTQuNDg1IDU0LjI4Ny0xNC40ODV2LTUuMjg2Yy0xMC4yNzktNDkuOTA4LTMwLjcyLTg5LjIxNS01Ny41ODYtMTIxLjgzNHoiIGZpbGw9IiNmZmQ3NzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48Zz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0zNTQuMDE3IDE5My40NjJjLTQuODE4LTEyLjExOS0xMy43MjUtMjIuMTk0LTI1LjAyNi0yOC41MDItNi43NzUtMy43NjctMTQuNDI2LTYuMTYyLTIyLjU0NC02Ljg2My0xLjU3Ny0uMTQ2LTMuMTgzLS4yMDQtNC43ODktLjIwNC05Ljc1MyAwLTE4Ljk1MiAyLjQ4Mi0yNi45MjQgNi44MzNsLTEwLjQ4NCA4OC40ODUgNjIuOTAxLTkuMjU3YzE0LjQ1NS00LjUyNyAyOC40MTMtMTkuMTI4IDI2Ljg2Ni01MC40OTJ6IiBmaWxsPSIjZmZkNzcyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjc0LjczMyAxNjQuNzI2di0xMzEuNTU4YzAtMTMuNTUtMTEuMDk3LTI0LjYxOC0yNC42MTctMjQuNjE4LTEzLjU1IDAtMjQuNjQ3IDExLjA2OC0yNC42NDcgMjQuNjE4djIwNS41MDEgNS4yODZsMjguMzI2IDE4LjU0NCAyMC45MzgtMTguNTQ0eiIgZmlsbD0iI2NlOTg3NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTQ3OC4xODQgMTEyLjk1LTE4LjAxOC0xNy4wODQtMjIuNjktMy4wOTYtMTkuNTk1IDM5LjQ4MmMtMjUuNDM1IDUxLjMzOS00My41OTkgMzUuMDQzLTYzLjg2NSA2MS4yMDktMy4yNzEgNC4yMzQtNi42IDkuNTQ5LTEwLjAxNiAxNi40NDFsLTE2Ljg1IDM0LjA1MSA0Mi4wNTEgMjAuNTg4IDc4LjM0OS0yMC41ODhjMTEuNDE4LTM1LjMwNi0xNS4zMDItMzguMzE0IDExLjA2OC05MS41MjJ6IiBmaWxsPSIjOTVkNmE0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtNDk3LjAxOSA4Ni4xNDItNDkuNjQ0LTI0LjYxOGMtMS44MTEtLjkwNS00LjA1OS0uMTQ2LTQuOTY0IDEuNjk0bC0xMS4wOTcgMjIuMzY5Yy0uOTA1IDEuODExLS4xNDYgNC4wNTkgMS42OTQgNC45NjRsNC40NjggMi4yMTkgMjAuMzU0IDEwLjA3NSAyMC4zNTQgMTAuMTA0IDQuNDY4IDIuMTljMS44MTEuOTA1IDQuMDU5LjE3NSA0Ljk2NC0xLjY2NWwxMS4wOTctMjIuMzY5Yy45MDUtMS44MzkuMTQ2LTQuMDU4LTEuNjk0LTQuOTYzeiIgZmlsbD0iIzM2NWU3ZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTc2LjgzMSAyNDMuOTU0aC02Mi43ODVjLTcuNzM4IDAtMTQuMDQ2IDYuMzA4LTE0LjA0NiAxNC4wNDZ2MjQuMzg0YzAgNy43MzkgNi4zMDggMTQuMDc2IDE0LjA0NiAxNC4wNzZoMTAuMzA4IDUyLjQ3NmwyNy42MjUtMjYuMjUzeiIgZmlsbD0iI2NlOTg3NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTQ0Ny41NTEgMjQzLjk1NGgtNTQuODcxbC05OS42NjcgMjUuOTMyLTI0Ljc5MyAyNi41NzVoMzIuOTExIDEyMS41MzkgNjQuOTQ1IDEwLjMwOGM3LjczOSAwIDE0LjA3NS02LjMzNyAxNC4wNzUtMTQuMDc2di0yNC4zODVjMC03LjczOS02LjMzNy0xNC4wNDctMTQuMDc1LTE0LjA0N2gtNTAuMzcyeiIgZmlsbD0iI2NlOTg3NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTc2LjgzMSAyOTYuNDYxaC01Mi40NzZ2MjkuNzI4aDUuMTk4IDQ3LjI3OHoiIGZpbGw9IiNmZGI0NDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48Zz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im00OTcuMDE5IDg2LjE0Mi0xNy4yNTgtOC41ODZjMS43ODEuOTM0IDIuNTExIDMuMTU0IDEuNjA2IDQuOTY0bC0xMS4wNjggMjIuMzY5Yy0uOTA1IDEuODQtMy4xNTQgMi41Ny00Ljk2NCAxLjY2NWwxMi44NDkgNi4zOTUgNC40NjggMi4xOWMxLjgxMS45MDUgNC4wNTkuMTc1IDQuOTY0LTEuNjY1bDExLjA5Ny0yMi4zNjljLjkwNS0xLjgzOS4xNDYtNC4wNTgtMS42OTQtNC45NjN6IiBmaWxsPSIjMmI0ZDY2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtNDc4LjE4NCAxMTIuOTUtMTIuODQ5LTYuMzk1LTQuNDY4LTIuMTktMTkuNTY1IDM5LjQ4MmMtMjYuMzcgNTMuMjA4LTQuNjE0IDY0LjgwMS0xNi4wMzIgMTAwLjEwN2gyMi4yODFjMTEuNDE4LTM1LjMwNi0xNS4zMDItMzguMzE0IDExLjA2OC05MS41MjJ6IiBmaWxsPSIjNzhjMmE0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzU0LjAxNyAxOTMuNDYyYy00LjgxOC0xMi4xMTktMTMuNzI1LTIyLjE5NC0yNS4wMjYtMjguNTAyLTYuMzk1LTMuNTYzLTEzLjU3OS01Ljg5OS0yMS4yMDEtNi43MTcuMTQ2LjU1NS4zMjEgMS4xMzkuNDY3IDEuNzIzLjY0MiAyLjU0MSAxLjE5NyA1LjExMSAxLjY5NCA3Ljc2OCAxLjU3NyA4LjQxIDIuNDI0IDE3LjQ2MyAyLjQyNCAyNi44OTYgMCAxOC42MzEtMy4zMjkgMzUuNzczLTguOTM2IDQ5LjMyNGgyMy43MTJsMTYuODQ5LTM0LjA1MWMzLjQxNy02Ljg5MiA2Ljc0Ni0xMi4yMDcgMTAuMDE3LTE2LjQ0MXoiIGZpbGw9IiNmZGI0NDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48Zz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0zMjguOTkxIDE2NC45NmMxOC43MDQtNi4yNTQgMzMuMTI0LTIzLjM1MiAzNC4yNDYtNTQuMTQxLjA5NC0yLjU2OS0yLjIxLTQuNTYtNC43NTMtNC4xODUtMy41MjEuNTE5LTYuODY2IDEuMTg3LTEwLjAxNSAxLjk5NC0uNTg0IDI3Ljc0My0xMS43MSA0NC42OC0yNy4xMjkgNTIuNzk5IDIuNjU3Ljk5MiA1LjE5OCAyLjE5IDcuNjUxIDMuNTMzeiIgZmlsbD0iI2IzZTU5ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTI3NC43MzMgMTY0LjcyNnYtMTMxLjU1OGMwLTEzLjU1LTExLjA5Ny0yNC42MTgtMjQuNjE3LTI0LjYxOC00LjQxIDAtOC41MjcgMS4xMzktMTIuMDkgMy4xODMgNy40NzYgNC4yMzQgMTIuNTI4IDEyLjI2NSAxMi41MjggMjEuNDM1djEzMS41NTkgMjUuNzI4IDQ3LjUxMyA1Ljk4N2gzLjI0MSAxMS41NjQgOS4zNzR6IiBmaWxsPSIjYzY4NzVlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjI1LjQ2OSAyMzguNjY4Yy0xMC4yNzktNDkuOTA4LTMwLjcyMS04OS4yMTUtNTcuNTg2LTEyMS44MzQtMzIuNDE0LTM5LjMwNy02NS41NTktNDQuNDQ3LTgyLjM3OS0yMy41NjcgMTYuNTg3LjA1OCAzNi45NyAxMS4zMDEgNTcuMDMyIDM1LjY1NyAyNS42MzkgMzEuMTAxIDQ1LjQzOCA2OC4zMzUgNTYuMTI2IDExNS4wM2gyNi44MDd6IiBmaWxsPSIjZmRiNDQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtNTEyIDI1OGMwLTcuNzM5LTYuMzM3LTE0LjA0Ny0xNC4wNzUtMTQuMDQ3aC00MC4xMjRjNy43MzkgMCAxNC4wNzUgNi4zMDggMTQuMDc1IDE0LjA0N3YyNC4zODRjMCA3LjczOS02LjMzNyAxNC4wNzYtMTQuMDc1IDE0LjA3NmgyOS44MTUgMTAuMzA4YzcuNzM5IDAgMTQuMDc1LTYuMzM3IDE0LjA3NS0xNC4wNzZ2LTI0LjM4NHoiIGZpbGw9IiNjNjg3NWUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48Zz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im00MjIuNjcxIDI5Ni40NjFoLTEyMS41MzktMzIuOTExbC03MC40OTQgMjkuNzI5aDI1NC45OTN2MTAwLjcyYzAgNDIuMTExLTM0LjQyOSA3Ni41NDEtNzYuNTM5IDc2LjU0MWgzNC45MjZjNDIuMDggMCA3Ni41MDktMzQuNDMgNzYuNTA5LTc2LjU0MXYtMTMwLjQ0OXoiIGZpbGw9IiNmZGI0NDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48Zz48cGF0aCBkPSJtMTE3LjEzNCAxNzUuMDU0Yy0yLjg5NSAwLTUuNjcyLTEuNjM2LTYuOTktNC40MjgtMS44MjMtMy44NTgtLjE3NC04LjQ2NCAzLjY4NC0xMC4yODdsMzMuNDk1LTE1LjgyOGMzLjg1Ny0xLjgyNCA4LjQ2NC0uMTczIDEwLjI4NyAzLjY4NXMuMTc0IDguNDY0LTMuNjg0IDEwLjI4N2wtMzMuNDk1IDE1LjgyOGMtMS4wNjcuNTA1LTIuMTkxLjc0My0zLjI5Ny43NDN6IiBmaWxsPSIjY2U5ODc0Ii8+PC9nPjxnPjxwYXRoIGQ9Im0xMzEuNTkgMjIwLjgxNWMtMi44OTUgMC01LjY3LTEuNjM1LTYuOTktNC40MjYtMS44MjQtMy44NTctLjE3Ni04LjQ2NCAzLjY4Mi0xMC4yODhsNDUuMjA1LTIxLjM3NmMzLjg1OS0xLjgyMiA4LjQ2My0uMTc1IDEwLjI4OCAzLjY4MiAxLjgyNCAzLjg1Ny4xNzYgOC40NjQtMy42ODIgMTAuMjg4bC00NS4yMDUgMjEuMzc2Yy0xLjA2OC41MDQtMi4xOTIuNzQ0LTMuMjk4Ljc0NHoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTI2OC4yMjEgMzU0LjY3OWgtMjguODUyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4Ljg1MmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTI2OC4yMjEgNDA0LjkwN2gtMjguODUyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4Ljg1MmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTMzOC4yNzcgMzU0LjY3OWgtMjguODIyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4LjgyMmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTMzOC4yNzcgNDA0LjkwN2gtMjguODIyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4LjgyMmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTI2OC4yMjEgNDU1LjEzN2gtMjguODUyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4Ljg1MmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTMzOC4yNzcgNDU1LjEzN2gtMjguODIyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4LjgyMmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTE5OC4xMzYgNDA0LjkwN2gtMjguODIzYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4LjgyM2M0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiLz48L2c+PGc+PHBhdGggZD0ibTE5OC4xMzYgNDU1LjEzN2gtMjguODIzYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4LjgyM2M0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTQwOC4zNjIgMzU0LjY3OWgtMjguODUyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4Ljg1MmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTQwOC4zNjIgNDA0LjkwN2gtMjguODUyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4Ljg1MmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTQwOC4zNjIgNDU1LjEzN2gtMjguODUyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4Ljg1MmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PGc+PHBhdGggZD0ibTEyOC4wOCA0MDQuOTA3aC0yOC44MjJjLTQuMjY3IDAtNy43MjYtMy40NTktNy43MjYtNy43MjZzMy40NTktNy43MjYgNy43MjYtNy43MjZoMjguODIyYzQuMjY3IDAgNy43MjYgMy40NTkgNy43MjYgNy43MjZzLTMuNDU4IDcuNzI2LTcuNzI2IDcuNzI2eiIvPjwvZz48Zz48cGF0aCBkPSJtMTI4LjA4IDQ1NS4xMzdoLTI4LjgyMmMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmgyOC44MjJjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTggNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjY2U5ODc0Ii8+PC9nPjxnPjxwYXRoIGQ9Im0xOTguMTY1IDQwNC45MDdoLTI4Ljg1MmMtNC4yNjcgMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmgyOC44NTJjNC4yNjcgMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTggNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjY2U5ODc0Ii8+PC9nPjxnPjxwYXRoIGQ9Im0xMjguMDggNDA0LjkwN2gtMjguODIyYy00LjI2NyAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI4LjgyMmM0LjI2NyAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OCA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNjZTk4NzQiLz48L2c+PC9nPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTEwOC42MDMgMjQzLjk1NGgtMzEuNzcydjUyLjUwNyA3Ni4xMTZjMCAyLjIxMSAyLjI1NSAzLjcwNyA0LjI5MiAyLjg0N2wxODcuMDk4LTc4Ljk2NCA0MS42MTMtMTcuNTUxIDgyLjg0Ni0zNC45NTZjLTk0LjcwMi4wMDEtMTg5LjM3NS4wMDEtMjg0LjA3Ny4wMDF6IiBmaWxsPSIjOTBkOGY5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGc+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtNzYuODMxIDM1NC44Mzd2MTYuMTg3YzAgMi45NDkgMy4wMDYgNC45NDMgNS43MjMgMy43OTYgOTEuNjI4LTM4LjY3NyAxODMuMjgzLTc3LjM1NCAyNzQuOTA5LTExNi4wMzFsMzUuMjE4LTE0LjgzNWgtNDMuMTktOS45Yy04Ny41NzcgMzYuOTQxLTE3NS4xODMgNzMuOTEyLTI2Mi43NiAxMTAuODgzeiIgZmlsbD0iIzc1Y2VmOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvZz48L3N2Zz4=");

// CONCATENATED MODULE: ./src/assets/images/icons/UI/Cards.svg
var Cards_path;

function Cards_extends() { Cards_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Cards_extends.apply(this, arguments); }



function SvgCards(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Cards_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Cards_path || (Cards_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3.75c-.69 0-1.25.56-1.25 1.25v2.75C3.75 8.44 4.31 9 5 9h2.75C8.44 9 9 8.44 9 7.75V5c0-.69-.56-1.25-1.25-1.25H5zM2.25 5A2.75 2.75 0 015 2.25h2.75A2.75 2.75 0 0110.5 5v2.75a2.75 2.75 0 01-2.75 2.75H5a2.75 2.75 0 01-2.75-2.75V5zM16.25 3.75C15.56 3.75 15 4.31 15 5v2.75c0 .69.56 1.25 1.25 1.25H19c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25h-2.75zM13.5 5a2.75 2.75 0 012.75-2.75H19A2.75 2.75 0 0121.75 5v2.75A2.75 2.75 0 0119 10.5h-2.75a2.75 2.75 0 01-2.75-2.75V5zM5 15c-.69 0-1.25.56-1.25 1.25V19c0 .69.56 1.25 1.25 1.25h2.75C8.44 20.25 9 19.69 9 19v-2.75C9 15.56 8.44 15 7.75 15H5zm-2.75 1.25A2.75 2.75 0 015 13.5h2.75a2.75 2.75 0 012.75 2.75V19a2.75 2.75 0 01-2.75 2.75H5A2.75 2.75 0 012.25 19v-2.75zM16.25 15c-.69 0-1.25.56-1.25 1.25V19c0 .69.56 1.25 1.25 1.25H19c.69 0 1.25-.56 1.25-1.25v-2.75c0-.69-.56-1.25-1.25-1.25h-2.75zm-2.75 1.25a2.75 2.75 0 012.75-2.75H19a2.75 2.75 0 012.75 2.75V19A2.75 2.75 0 0119 21.75h-2.75A2.75 2.75 0 0113.5 19v-2.75z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var Cards = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDMuNzVDNC4zMDkyMSAzLjc1IDMuNzUgNC4zMDkyMSAzLjc1IDVWNy43NUMzLjc1IDguNDQwNzkgNC4zMDkyMSA5IDUgOUg3Ljc1QzguNDQwNzkgOSA5IDguNDQwNzkgOSA3Ljc1VjVDOSA0LjMwOTIxIDguNDQwNzkgMy43NSA3Ljc1IDMuNzVINVpNMi4yNSA1QzIuMjUgMy40ODA3OSAzLjQ4MDc5IDIuMjUgNSAyLjI1SDcuNzVDOS4yNjkyMSAyLjI1IDEwLjUgMy40ODA3OSAxMC41IDVWNy43NUMxMC41IDkuMjY5MjEgOS4yNjkyMSAxMC41IDcuNzUgMTAuNUg1QzMuNDgwNzkgMTAuNSAyLjI1IDkuMjY5MjEgMi4yNSA3Ljc1VjVaIiBmaWxsPSIjNEY0RjRGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMjUgMy43NUMxNS41NTkyIDMuNzUgMTUgNC4zMDkyMSAxNSA1VjcuNzVDMTUgOC40NDA3OSAxNS41NTkyIDkgMTYuMjUgOUgxOUMxOS42OTA4IDkgMjAuMjUgOC40NDA3OSAyMC4yNSA3Ljc1VjVDMjAuMjUgNC4zMDkyMSAxOS42OTA4IDMuNzUgMTkgMy43NUgxNi4yNVpNMTMuNSA1QzEzLjUgMy40ODA3OSAxNC43MzA4IDIuMjUgMTYuMjUgMi4yNUgxOUMyMC41MTkyIDIuMjUgMjEuNzUgMy40ODA3OSAyMS43NSA1VjcuNzVDMjEuNzUgOS4yNjkyMSAyMC41MTkyIDEwLjUgMTkgMTAuNUgxNi4yNUMxNC43MzA4IDEwLjUgMTMuNSA5LjI2OTIxIDEzLjUgNy43NVY1WiIgZmlsbD0iIzRGNEY0RiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMTVDNC4zMDkyMSAxNSAzLjc1IDE1LjU1OTIgMy43NSAxNi4yNVYxOUMzLjc1IDE5LjY5MDggNC4zMDkyMSAyMC4yNSA1IDIwLjI1SDcuNzVDOC40NDA3OSAyMC4yNSA5IDE5LjY5MDggOSAxOVYxNi4yNUM5IDE1LjU1OTIgOC40NDA3OSAxNSA3Ljc1IDE1SDVaTTIuMjUgMTYuMjVDMi4yNSAxNC43MzA4IDMuNDgwNzkgMTMuNSA1IDEzLjVINy43NUM5LjI2OTIxIDEzLjUgMTAuNSAxNC43MzA4IDEwLjUgMTYuMjVWMTlDMTAuNSAyMC41MTkyIDkuMjY5MjEgMjEuNzUgNy43NSAyMS43NUg1QzMuNDgwNzkgMjEuNzUgMi4yNSAyMC41MTkyIDIuMjUgMTlWMTYuMjVaIiBmaWxsPSIjNEY0RjRGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMjUgMTVDMTUuNTU5MiAxNSAxNSAxNS41NTkyIDE1IDE2LjI1VjE5QzE1IDE5LjY5MDggMTUuNTU5MiAyMC4yNSAxNi4yNSAyMC4yNUgxOUMxOS42OTA4IDIwLjI1IDIwLjI1IDE5LjY5MDggMjAuMjUgMTlWMTYuMjVDMjAuMjUgMTUuNTU5MiAxOS42OTA4IDE1IDE5IDE1SDE2LjI1Wk0xMy41IDE2LjI1QzEzLjUgMTQuNzMwOCAxNC43MzA4IDEzLjUgMTYuMjUgMTMuNUgxOUMyMC41MTkyIDEzLjUgMjEuNzUgMTQuNzMwOCAyMS43NSAxNi4yNVYxOUMyMS43NSAyMC41MTkyIDIwLjUxOTIgMjEuNzUgMTkgMjEuNzVIMTYuMjVDMTQuNzMwOCAyMS43NSAxMy41IDIwLjUxOTIgMTMuNSAxOVYxNi4yNVoiIGZpbGw9IiM0RjRGNEYiLz4KPC9zdmc+Cg==");

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/SideBar.tsx






const SideBar = ({
  setOpenSystemMenu,
  openSystemMenu,
  openNotifications,
  setOpenNotifications,
  openDesk,
  setOpenDesk,
  openFavorites,
  setOpenFavorites
}) => {
  const classes = useSideBarStyles();
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (selected !== 3) setOpenSystemMenu(false);
    if (selected !== 1) setOpenNotifications(false);
    if (selected !== 4) setOpenFavorites(false);
  }, [selected]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.mainMenu,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.logo,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgLogo, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.menuItems,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.menuItem,
          onClick: () => setSelected(0),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: selected === 0 ? classes.active : classes.deActive,
            onClick: () => setOpenDesk(!openDesk),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgCards, {})
          })
        })
      })]
    })
  });
};
/* harmony default export */ var sidebar_SideBar = (SideBar);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/index.ts

// EXTERNAL MODULE: ./src/components/GolModal/GolModal.tsx + 1 modules
var GolModal = __webpack_require__("qAGY");

// CONCATENATED MODULE: ./src/components/GolModal/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/menu/useMainMenuStyles.ts

const useMainMenuStyles = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  spacing
}) => ({
  root: {
    width: "100%"
  },
  searchInput: {
    background: palette.neutral[100],
    borderRadius: 8,
    marginBottom: spacing(2),
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiFormLabel-root": {
      color: palette.neutral[600]
    }
  },
  textFieldLabel: {
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: spacing(2.5)
    }
  },
  menuItems: {
    maxWidth: "50%",
    paddingTop: spacing(13)
  }
}), {
  name: "MainMenu"
});
/* harmony default export */ var menu_useMainMenuStyles = (useMainMenuStyles);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/menu/MainMenu.tsx






const MainMenu = () => {
  const classes = useMainMenuStyles();
  Object(external_react_hotkeys_hook_["useHotkeys"])("s", () => {
    alert("hot key tapped");
  });

  const onKeyDown = e => {
    var english = /^[A-Za-z0-9]*$/;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(GolModal["a" /* default */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      container: true,
      id: "x",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "h4",
          children: "Main Menu"
        })
      })
    })
  });
};
/* harmony default export */ var menu_MainMenu = (MainMenu);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/sidebar/components/menu/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/useDashboardStyle.ts

const useDashboardStyle = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  spacing
}) => ({
  root: {
    backgroundColor: palette.surface.default,
    display: "flex"
  },
  content: {
    padding: spacing(24, 12, 12, 12),
    color: palette.neutral[600],
    position: "relative"
  },
  myDesk: {
    backgroundColor: palette.surface.default,
    width: 226,
    borderRadius: "8px 0px 0px 8px",
    position: "relative",
    right: 5,
    color: palette.neutral[600],
    display: "flex"
  },
  right: {
    borderRight: `1px solid ${palette.neutral[200]}`,
    padding: spacing(11, 4),
    transition: "all ease-in-out 150ms"
  },
  deskContentOpen: {
    animationName: "$opacity1",
    animationDuration: "400ms",
    animationTimingFunction: "linear",
    animationIterationCount: "forwards"
  },
  deskContentClose: {
    animationName: "$opacity2",
    animationDuration: "400ms",
    animationTimingFunction: "linear",
    animationIterationCount: "forwards"
  },
  left: {
    "& svg": {
      "& path": {
        fill: palette.neutral[400]
      }
    },
    position: "relative",
    transition: "all ease-in-out 150ms"
  },
  arrowRightContainer: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: `1px solid ${palette.neutral[200]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 41,
    backgroundColor: palette.surface.default,
    cursor: "pointer"
  },
  mainContent: {
    transition: "all ease-in-out 150ms",
    position: "relative",
    paddingTop: spacing(10),
    paddingRight: spacing(12),
    paddingBottom: spacing(12),
    color: palette.neutral[600],
    height: "100vh",
    overflow: "hidden"
  },
  "@keyframes opacity1": {
    from: {
      opacity: 0,
      transform: "translateY(-10px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  "@keyframes opacity2": {
    from: {
      opacity: 1,
      transform: "translateY(0)"
    },
    to: {
      opacity: 0,
      transform: "translateY(-10px)"
    }
  },
  "& table": {
    width: "100%"
  }
}), {
  name: "DashboardLayout"
});
/* harmony default export */ var Layout_useDashboardStyle = (useDashboardStyle);
// CONCATENATED MODULE: ./src/layout/CI/Layout/Dashboard.message.ts

const Dashboard_message_scope = "panel.dashboard";
const DashboardMessages = Object(external_react_intl_["defineMessages"])({
  myDesk: {
    id: `${Dashboard_message_scope}.myDesk`,
    defaultMessage: "My Desk"
  }
});
/* harmony default export */ var Dashboard_message = (DashboardMessages);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/assets/images/icons/Arrows/Big/Down.svg
var Down_path;

function Down_extends() { Down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Down_extends.apply(this, arguments); }



function SvgDown(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Down_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Down_path || (Down_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.47 6.97a.75.75 0 011.06 0L12 15.44l8.47-8.47a.75.75 0 111.06 1.06l-9 9a.75.75 0 01-1.06 0l-9-9a.75.75 0 010-1.06z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var Down = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjQ2OTY3IDYuOTY5NjdDMi43NjI1NiA2LjY3Njc4IDMuMjM3NDQgNi42NzY3OCAzLjUzMDMzIDYuOTY5NjdMMTIgMTUuNDM5M0wyMC40Njk3IDYuOTY5NjdDMjAuNzYyNiA2LjY3Njc4IDIxLjIzNzQgNi42NzY3OCAyMS41MzAzIDYuOTY5NjdDMjEuODIzMiA3LjI2MjU2IDIxLjgyMzIgNy43Mzc0NCAyMS41MzAzIDguMDMwMzNMMTIuNTMwMyAxNy4wMzAzQzEyLjIzNzQgMTcuMzIzMiAxMS43NjI2IDE3LjMyMzIgMTEuNDY5NyAxNy4wMzAzTDIuNDY5NjcgOC4wMzAzM0MyLjE3Njc4IDcuNzM3NDQgMi4xNzY3OCA3LjI2MjU2IDIuNDY5NjcgNi45Njk2N1oiIGZpbGw9IiM0RjRGNEYiLz4KPC9zdmc+Cg==");

// CONCATENATED MODULE: ./src/assets/images/icons/Arrows/Big/up.svg
var up_path;

function up_extends() { up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return up_extends.apply(this, arguments); }



function SvgUp(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", up_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), up_path || (up_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.989 6.75a.75.75 0 01.53.22l9.011 9a.75.75 0 01-1.06 1.06l-8.48-8.47-8.46 8.47a.75.75 0 11-1.06-1.06l8.988-9a.75.75 0 01.53-.22z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var up = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS45ODg1IDYuNzVDMTIuMTg3NSA2Ljc0OTg4IDEyLjM3ODMgNi44Mjg3OCAxMi41MTkgNi45NjkzNUwyMS41MyAxNS45NjkzQzIxLjgyMzEgMTYuMjYyMSAyMS44MjM0IDE2LjczNjkgMjEuNTMwNyAxNy4wM0MyMS4yMzc5IDE3LjMyMzEgMjAuNzYzMSAxNy4zMjM0IDIwLjQ3IDE3LjAzMDdMMTEuOTg5NiA4LjU2MDY2TDMuNTMwNjUgMTcuMDNDMy4yMzc5NCAxNy4zMjMxIDIuNzYzMDcgMTcuMzIzNCAyLjQ2OTk5IDE3LjAzMDdDMi4xNzY5MiAxNi43Mzc5IDIuMTc2NjMgMTYuMjYzMSAyLjQ2OTM1IDE1Ljk3TDExLjQ1ODMgNi45Njk5OUMxMS41OTg5IDYuODI5MjYgMTEuNzg5NiA2Ljc1MDEyIDExLjk4ODUgNi43NVoiIGZpbGw9IiM0RjRGNEYiLz4KPC9zdmc+Cg==");

// CONCATENATED MODULE: ./src/assets/images/icons/Commiunication/Send.svg
var Send_path, Send_path2;

function Send_extends() { Send_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Send_extends.apply(this, arguments); }



function SvgSend(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Send_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Send_path || (Send_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.996 7.451C1.814 6.27 2.65 4.25 4.322 4.25h15.551c1.458 0 2.359 1.59 1.607 2.84L13.23 20.84c-.872 1.454-3.07 1.096-3.438-.558l-1.724-7.756L2.996 7.45zM4.322 5.75a.375.375 0 00-.266.64l5.228 5.229c.101.1.171.228.202.367l1.771 7.97a.375.375 0 00.688.111l8.249-13.749a.375.375 0 00-.321-.568H4.322z",
    fill: "#4F4F4F"
  })), Send_path2 || (Send_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.498 5.201A.75.75 0 0121.2 6.22l-12.09 6.59a.75.75 0 11-.718-1.317l12.09-6.59a.75.75 0 011.017.3z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var Send = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk5NTY4IDcuNDUxMzNDMS44MTQwNyA2LjI2OTcyIDIuNjUxMDIgNC4yNSA0LjMyMjAxIDQuMjVIMTkuODczQzIxLjMzMDkgNC4yNSAyMi4yMzE2IDUuODQwMjMgMjEuNDc5OCA3LjA5MDVMMTMuMjMxMiAyMC44Mzg4VjIwLjgzODhDMTIuMzU5MiAyMi4yOTI1IDEwLjE2MSAyMS45MzQ2IDkuNzkyOTIgMjAuMjgwOUw4LjA2OTI1IDEyLjUyNDlMMi45OTU2OCA3LjQ1MTMzWk00LjMyMjAxIDUuNzVDMy45ODcgNS43NSAzLjgxOTk1IDYuMTU0MjggNC4wNTYzNCA2LjM5MDY3TDkuMjg0MzQgMTEuNjE4N0M5LjM4NTIgMTEuNzE5NSA5LjQ1NTIgMTEuODQ3MSA5LjQ4NjE1IDExLjk4NjNMMTEuMjU3MSAxOS45NTUxQzExLjMzMSAyMC4yODc0IDExLjc3MDggMjAuMzU3NCAxMS45NDQ4IDIwLjA2NzJMMjAuMTkzOSA2LjMxODE0QzIwLjM0NDEgNi4wNjg0MSAyMC4xNjUyIDUuNzUgMTkuODczIDUuNzVINC4zMjIwMVoiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS40OTg1IDUuMjAxMDVDMjEuNjk2OCA1LjU2NDc1IDIxLjU2MjcgNi4wMjAyOCAyMS4xOTkgNi4yMTg1M0w5LjEwODk2IDEyLjgwODVDOC43NDUyNiAxMy4wMDY4IDguMjg5NzIgMTIuODcyNiA4LjA5MTQ4IDEyLjUwODlDNy44OTMyNCAxMi4xNDUzIDguMDI3MzcgMTEuNjg5NyA4LjM5MTA2IDExLjQ5MTVMMjAuNDgxMSA0LjkwMTQ3QzIwLjg0NDggNC43MDMyMyAyMS4zMDAzIDQuODM3MzYgMjEuNDk4NSA1LjIwMTA1WiIgZmlsbD0iIzRGNEY0RiIvPgo8L3N2Zz4K");

// CONCATENATED MODULE: ./src/assets/images/icons/UI/Search.svg
var Search_path;

function Search_extends() { Search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Search_extends.apply(this, arguments); }



function SvgSearch(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Search_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Search_path || (Search_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M15.714 6.838a6.276 6.276 0 11-8.876 8.876 6.276 6.276 0 018.876-8.876M19 19l-3.29-3.29",
    stroke: "#BFC9DA",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ var Search = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjcxMzggNi44MzgyQzE4LjE2NDcgOS4yODkxMyAxOC4xNjQ3IDEzLjI2MjkgMTUuNzEzOCAxNS43MTM4QzEzLjI2MjkgMTguMTY0NyA5LjI4OTEzIDE4LjE2NDcgNi44MzgyIDE1LjcxMzhDNC4zODcyNyAxMy4yNjI5IDQuMzg3MjcgOS4yODkxMyA2LjgzODIgNi44MzgyQzkuMjg5MTMgNC4zODcyNyAxMy4yNjI5IDQuMzg3MjcgMTUuNzEzOCA2LjgzODIiIHN0cm9rZT0iI0JGQzlEQSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkgMTlMMTUuNzEgMTUuNzEiIHN0cm9rZT0iI0JGQzlEQSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");

// EXTERNAL MODULE: ./src/components/GolTextField/index.ts + 9 modules
var GolTextField = __webpack_require__("xrHl");

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/Messanger.message.ts

const Messanger_message_scope = "panel.messanger";
const MessangerMessages = Object(external_react_intl_["defineMessages"])({
  messaging: {
    id: `${Messanger_message_scope}.messaging`,
    defaultMessage: "Messaging"
  },
  send: {
    id: `${Messanger_message_scope}.send`,
    defaultMessage: "send"
  },
  noMessage: {
    id: `${Messanger_message_scope}.noMessage`,
    defaultMessage: "no messages"
  },
  writeMessage: {
    id: `${Messanger_message_scope}.writeMessage`,
    defaultMessage: "write message"
  }
});
/* harmony default export */ var Messanger_message = (MessangerMessages);
// CONCATENATED MODULE: ./src/assets/images/icons/UI/Close.svg
var Close_path, Close_path2;

function Close_extends() { Close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Close_extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Close_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Close_path || (Close_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.47 7.47a.75.75 0 011.06 0l8 8a.75.75 0 11-1.06 1.06l-8-8a.75.75 0 010-1.06z",
    fill: "#4F4F4F"
  })), Close_path2 || (Close_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.53 7.47a.75.75 0 010 1.06l-8 8a.75.75 0 01-1.06-1.06l8-8a.75.75 0 011.06 0z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var Close = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ2OTY3IDcuNDY5NjdDNy43NjI1NiA3LjE3Njc4IDguMjM3NDQgNy4xNzY3OCA4LjUzMDMzIDcuNDY5NjdMMTYuNTMwMyAxNS40Njk3QzE2LjgyMzIgMTUuNzYyNiAxNi44MjMyIDE2LjIzNzQgMTYuNTMwMyAxNi41MzAzQzE2LjIzNzQgMTYuODIzMiAxNS43NjI2IDE2LjgyMzIgMTUuNDY5NyAxNi41MzAzTDcuNDY5NjcgOC41MzAzM0M3LjE3Njc4IDguMjM3NDQgNy4xNzY3OCA3Ljc2MjU2IDcuNDY5NjcgNy40Njk2N1oiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi41MzAzIDcuNDY5NjdDMTYuODIzMiA3Ljc2MjU2IDE2LjgyMzIgOC4yMzc0NCAxNi41MzAzIDguNTMwMzNMOC41MzAzMyAxNi41MzAzQzguMjM3NDQgMTYuODIzMiA3Ljc2MjU2IDE2LjgyMzIgNy40Njk2NyAxNi41MzAzQzcuMTc2NzggMTYuMjM3NCA3LjE3Njc4IDE1Ljc2MjYgNy40Njk2NyAxNS40Njk3TDE1LjQ2OTcgNy40Njk2N0MxNS43NjI2IDcuMTc2NzggMTYuMjM3NCA3LjE3Njc4IDE2LjUzMDMgNy40Njk2N1oiIGZpbGw9IiM0RjRGNEYiLz4KPC9zdmc+Cg==");

// CONCATENATED MODULE: ./src/assets/images/icons/Content/Image.svg
var Image_path, Image_path2, Image_path3;

function Image_extends() { Image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Image_extends.apply(this, arguments); }



function SvgImage(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Image_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Image_path || (Image_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 3.75A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6zM2.25 6A3.75 3.75 0 016 2.25h12A3.75 3.75 0 0121.75 6v12A3.75 3.75 0 0118 21.75H6A3.75 3.75 0 012.25 18V6z",
    fill: "#4F4F4F"
  })), Image_path2 || (Image_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.25 19.625c0-5.73 4.645-10.375 10.375-10.375.515 0 1.01.05 1.48.116a.75.75 0 11-.21 1.486 9.004 9.004 0 00-1.27-.102 8.875 8.875 0 00-8.875 8.875c0 .42.04.84.101 1.27a.75.75 0 11-1.485.21c-.066-.47-.116-.965-.116-1.48z",
    fill: "#4F4F4F"
  })), Image_path3 || (Image_path3 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M8.5 10.98c-.67 0-1.3-.26-1.77-.73-.97-.97-.97-2.56 0-3.54.94-.95 2.59-.95 3.54 0 .97.97.97 2.56 0 3.54-.48.47-1.1.73-1.77.73zm0-3.5a.996.996 0 00-.71 1.7c.38.38 1.04.38 1.41 0a.996.996 0 000-1.41.95.95 0 00-.7-.29z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var Image = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDMuNzVDNC43NTcyMSAzLjc1IDMuNzUgNC43NTcyMSAzLjc1IDZWMThDMy43NSAxOS4yNDI4IDQuNzU3MjEgMjAuMjUgNiAyMC4yNUgxOEMxOS4yNDI4IDIwLjI1IDIwLjI1IDE5LjI0MjggMjAuMjUgMThWNkMyMC4yNSA0Ljc1NzIxIDE5LjI0MjggMy43NSAxOCAzLjc1SDZaTTIuMjUgNkMyLjI1IDMuOTI4NzkgMy45Mjg3OSAyLjI1IDYgMi4yNUgxOEMyMC4wNzEyIDIuMjUgMjEuNzUgMy45Mjg3OSAyMS43NSA2VjE4QzIxLjc1IDIwLjA3MTIgMjAuMDcxMiAyMS43NSAxOCAyMS43NUg2QzMuOTI4NzkgMjEuNzUgMi4yNSAyMC4wNzEyIDIuMjUgMThWNloiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI1IDE5LjYyNUM5LjI1IDEzLjg5NDggMTMuODk0OCA5LjI1IDE5LjYyNSA5LjI1QzIwLjE0MDQgOS4yNSAyMC42MzUgOS4yOTk1NCAyMS4xMDU2IDkuMzY2NDdDMjEuNTE1NyA5LjQyNDggMjEuODAwOSA5LjgwNDUyIDIxLjc0MjUgMTAuMjE0NkMyMS42ODQyIDEwLjYyNDcgMjEuMzA0NSAxMC45MDk5IDIwLjg5NDQgMTAuODUxNUMyMC40NjUgMTAuNzkwNSAyMC4wNDU2IDEwLjc1IDE5LjYyNSAxMC43NUMxNC43MjMyIDEwLjc1IDEwLjc1IDE0LjcyMzIgMTAuNzUgMTkuNjI1QzEwLjc1IDIwLjA0NTYgMTAuNzkwNSAyMC40NjUgMTAuODUxNSAyMC44OTQ0QzEwLjkwOTkgMjEuMzA0NSAxMC42MjQ3IDIxLjY4NDIgMTAuMjE0NiAyMS43NDI1QzkuODA0NTIgMjEuODAwOSA5LjQyNDggMjEuNTE1NyA5LjM2NjQ3IDIxLjEwNTZDOS4yOTk1NCAyMC42MzUgOS4yNSAyMC4xNDA0IDkuMjUgMTkuNjI1WiIgZmlsbD0iIzRGNEY0RiIvPgo8cGF0aCBkPSJNOC41IDEwLjk4QzcuODMgMTAuOTggNy4yIDEwLjcyIDYuNzMgMTAuMjVDNS43NiA5LjI4IDUuNzYgNy42OSA2LjczIDYuNzFDNy42NyA1Ljc2IDkuMzIgNS43NiAxMC4yNyA2LjcxQzExLjI0IDcuNjggMTEuMjQgOS4yNyAxMC4yNyAxMC4yNUM5Ljc5IDEwLjcyIDkuMTcgMTAuOTggOC41IDEwLjk4Wk04LjUgNy40OEM4LjIzIDcuNDggNy45OCA3LjU4IDcuNzkgNy43N0M3LjQgOC4xNiA3LjQgOC43OSA3Ljc5IDkuMThDOC4xNyA5LjU2IDguODMgOS41NiA5LjIgOS4xOEM5LjU5IDguNzkgOS41OSA4LjE2IDkuMiA3Ljc3QzkuMDIgNy41OCA4Ljc3IDcuNDggOC41IDcuNDhaIiBmaWxsPSIjNEY0RjRGIi8+Cjwvc3ZnPgo=");

// CONCATENATED MODULE: ./src/assets/images/icons/Content/Attachment.svg
var Attachment_path;

function Attachment_extends() { Attachment_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Attachment_extends.apply(this, arguments); }



function SvgAttachment(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", Attachment_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Attachment_path || (Attachment_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.6 3.605a4.629 4.629 0 116.547 6.546l-7.232 7.232a2.866 2.866 0 01-4.052-4.052l5.486-5.486a.75.75 0 111.06 1.06l-5.486 5.486a1.366 1.366 0 001.932 1.932l7.232-7.232a3.13 3.13 0 10-4.426-4.426L6.43 11.897a4.892 4.892 0 106.92 6.92l4.389-4.39a.75.75 0 111.06 1.061l-4.389 4.39a6.392 6.392 0 01-9.04 0 6.392 6.392 0 010-9.041L12.6 3.605z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var Attachment = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi42MDA3IDMuNjA0NjdDMTQuNDA4NiAxLjc5Njc4IDE3LjMzOTQgMS43OTY3OCAxOS4xNDczIDMuNjA0NjdDMjAuOTU1MiA1LjQxMjU2IDIwLjk1NTIgOC4zNDM0NCAxOS4xNDczIDEwLjE1MTNMMTEuOTE1MyAxNy4zODMzQzEwLjc5NjQgMTguNTAyMiA4Ljk4MTU2IDE4LjUwMjIgNy44NjI2NyAxNy4zODMzQzYuNzQzNzggMTYuMjY0NCA2Ljc0Mzc4IDE0LjQ0OTYgNy44NjI2NyAxMy4zMzA3TDEzLjM0ODcgNy44NDQ2N0MxMy42NDE2IDcuNTUxNzggMTQuMTE2NCA3LjU1MTc4IDE0LjQwOTMgNy44NDQ2N0MxNC43MDIyIDguMTM3NTYgMTQuNzAyMiA4LjYxMjQ0IDE0LjQwOTMgOC45MDUzM0w4LjkyMzMzIDE0LjM5MTNDOC4zOTAyMyAxNC45MjQ0IDguMzkwMjMgMTUuNzg5NiA4LjkyMzMzIDE2LjMyMjdDOS40NTY0NCAxNi44NTU4IDEwLjMyMTYgMTYuODU1OCAxMC44NTQ3IDE2LjMyMjdMMTguMDg2NyA5LjA5MDY3QzE5LjMwODggNy44Njg1NiAxOS4zMDg4IDUuODg3NDQgMTguMDg2NyA0LjY2NTMzQzE2Ljg2NDYgMy40NDMyMiAxNC44ODM0IDMuNDQzMjIgMTMuNjYxMyA0LjY2NTMzTDYuNDI5MzMgMTEuODk3M0M0LjUxODIzIDEzLjgwODQgNC41MTgyMyAxNi45MDU2IDYuNDI5MzMgMTguODE2N0M4LjM0MDQ0IDIwLjcyNzggMTEuNDM3NiAyMC43Mjc4IDEzLjM0ODcgMTguODE2N0wxNy43Mzc3IDE0LjQyNzdDMTguMDMwNiAxNC4xMzQ4IDE4LjUwNTQgMTQuMTM0OCAxOC43OTgzIDE0LjQyNzdDMTkuMDkxMiAxNC43MjA2IDE5LjA5MTIgMTUuMTk1NCAxOC43OTgzIDE1LjQ4ODNMMTQuNDA5MyAxOS44NzczQzExLjkxMjQgMjIuMzc0MiA3Ljg2NTU3IDIyLjM3NDIgNS4zNjg2NyAxOS44NzczQzIuODcxNzggMTcuMzgwNCAyLjg3MTc4IDEzLjMzMzYgNS4zNjg2NyAxMC44MzY3TDEyLjYwMDcgMy42MDQ2N1oiIGZpbGw9IiM0RjRGNEYiLz4KPC9zdmc+Cg==");

// EXTERNAL MODULE: ./src/components/GolButton/index.ts
var GolButton = __webpack_require__("SRXj");

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/PrivateChat/usePrivateChatStyle.ts

const usePrivateChatStyle = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  shadows,
  direction,
  spacing
}) => ({
  root: {
    backgroundColor: palette.surface.default,
    position: "fixed",
    right: 390,
    width: 332,
    boxShadow: shadows[1],
    borderRadius: "6px 6px 0 0",
    transition: "all ease-in-out 200ms"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: spacing(3, 4, 1, 4),
    fontSize: 17,
    borderBottom: `1px solid ${palette.neutral[200]}`
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sendSvg: {
    cursor: "pointer",
    margin: spacing(0, 5)
  },
  toggle: {
    cursor: "pointer"
  },
  body: {
    padding: spacing(3, 4, 1, 4),
    overflowY: "scroll",
    backgroundColor: palette.surface.default,
    height: 391
  },
  message: {
    position: "relative",
    animationDelay: "1.5s",
    animationName: "message",
    animationDuration: "0.7s",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    backgroundPositionX: "center"
  },
  sendMessage: {
    bottom: 0,
    zIndex: 999,
    width: "100%",
    backgroundColor: palette.surface.default,
    position: "relative"
  },
  top: {},
  avatar: {
    width: 36,
    height: 36,
    background: palette.neutral[200],
    borderRadius: 50
  },
  date: {
    color: palette.neutral[300]
  },
  bottom: {
    fontSize: 15,
    border: `1px solid ${palette.neutral[200]}`,
    padding: spacing(4),
    margin: spacing(3, 0),
    borderRadius: 3,
    position: "relative",
    "&:before": {
      position: "absolute",
      content: "''",
      background: "transparent",
      left: 10,
      top: -14,
      zIndex: 1,
      border: `7px solid ${palette.neutral[200]}`,
      borderTop: "7px solid transparent",
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent",
      boxShadow: "1px solid #000"
    }
  },
  messageMe: {},
  spaceBetweenMe: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse"
  },
  avatarMe: {},
  bottomMe: {
    fontSize: 15,
    textAlign: "right",
    border: `1px solid ${palette.primary[700]}20`,
    background: `${palette.primary[700]}10`,
    padding: spacing(4),
    margin: spacing(3, 0),
    borderRadius: 3,
    position: "relative",
    "&:before": {
      position: "absolute",
      content: "''",
      background: "transparent",
      right: 10,
      top: -14,
      zIndex: 1,
      border: `7px solid ${palette.primary[700]}30`,
      borderTop: "7px solid transparent",
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent",
      boxShadow: "1px solid #000"
    }
  },
  sendMessageInput: {
    padding: spacing(2.5)
  },
  unReadedMessages: {
    position: "absolute",
    top: -50,
    right: 30,
    zIndex: 999,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: shadows[1],
    background: palette.surface.default,
    cursor: "pointer",
    borderRadius: "50%"
  },
  sendMessageTools: {
    padding: spacing(2.5),
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: palette.neutral[100],
    alignItems: "center"
  },
  searchInput: {
    background: palette.neutral[100],
    borderRadius: 8,
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiFormLabel-root": {
      color: palette.neutral[600]
    }
  },
  "@keyframes message": {
    from: {
      transform: "translateY(50px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px)",
      opacity: 1
    }
  },
  attachIcon: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      margin: direction === "rtl" ? spacing(0, 0, 0, 3) : spacing(0, 3, 0, 0)
    },
    cursor: "pointer"
  }
}), {
  name: "SideBar"
});
/* harmony default export */ var PrivateChat_usePrivateChatStyle = (usePrivateChatStyle);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/PrivateChat/PrivateChat.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const PrivateChat = ({
  selectedContact,
  setPrivate,
  messages,
  setMessages,
  socket,
  loading
}) => {
  var _selectedContact$cust2, _selectedContact$cust3, _selectedContact$cust4, _selectedContact$cust5;

  const styles = usePrivateChatStyle();
  const {
    formatMessage
  } = Object(external_react_intl_["useIntl"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(true);
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])("");
  const {
    0: unreadedMessages,
    1: setUnreadedMessages
  } = Object(external_react_["useState"])(0);
  const {
    0: orderId,
    1: setOrderId
  } = Object(external_react_["useState"])(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id);
  const msgRef = Object(external_react_["useRef"])(null);

  const sendMessage = async e => {
    var _localStorage, _selectedContact$cust;

    e.preventDefault();
    const chatMessage = {
      fromUser: (_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.userId,
      toUser: selectedContact === null || selectedContact === void 0 ? void 0 : (_selectedContact$cust = selectedContact.customer) === null || _selectedContact$cust === void 0 ? void 0 : _selectedContact$cust._id,
      body: message,
      order: orderId,
      type: "text"
    };
    socket.emit("sendMessage", chatMessage);
    setMessages(prev => [...prev, _objectSpread(_objectSpread({}, chatMessage), {}, {
      dateTime: new Date()
    })]);
    setMessage("");
  };

  Object(external_react_["useEffect"])(() => {
    var _messages;

    const scroll = msgRef.current.scrollHeight - msgRef.current.clientHeight;

    if (messages && (_messages = messages[messages.length - 1]) !== null && _messages !== void 0 && _messages.fromUser) {
      console.log("scrollHeight: ", msgRef.current.scrollHeight);
      console.log("scrollTop: ", msgRef.current.scrollTop);
      console.log(msgRef.current.scrollHeight - msgRef.current.scrollTop);

      if (msgRef.current.scrollTop && msgRef.current.scrollHeight - msgRef.current.scrollTop > 505) {
        setUnreadedMessages(prev => prev += 1);
      } else {
        msgRef.current.scrollTo(0, scroll);
      }
    } else {
      msgRef.current.scrollTo(0, scroll);
    }
  }, [messages]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: styles.root,
    style: open ? {
      bottom: 0
    } : {
      bottom: -519
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: styles.header,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: `${selectedContact !== null && selectedContact !== void 0 && (_selectedContact$cust2 = selectedContact.customer) !== null && _selectedContact$cust2 !== void 0 && _selectedContact$cust2.firstName ? selectedContact === null || selectedContact === void 0 ? void 0 : (_selectedContact$cust3 = selectedContact.customer) === null || _selectedContact$cust3 === void 0 ? void 0 : _selectedContact$cust3.firstName : "No Name"} ${selectedContact !== null && selectedContact !== void 0 && (_selectedContact$cust4 = selectedContact.customer) !== null && _selectedContact$cust4 !== void 0 && _selectedContact$cust4.lastName ? selectedContact === null || selectedContact === void 0 ? void 0 : (_selectedContact$cust5 = selectedContact.customer) === null || _selectedContact$cust5 === void 0 ? void 0 : _selectedContact$cust5.lastName : ""}`
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: styles.spaceBetween,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: styles.toggle,
          onClick: () => setOpen(!open),
          children: open ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgDown, {
            className: styles.sendSvg
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgUp, {
            className: styles.sendSvg
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            cursor: "pointer"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgClose, {
            onClick: () => setPrivate(false)
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: styles.body,
      ref: msgRef,
      children: selectedContact ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
          children: messages !== null && messages !== void 0 && messages.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
            children: messages === null || messages === void 0 ? void 0 : messages.map(item => {
              var _item$fromUser, _localStorage2, _localStorage3, _item$fromUser2, _localStorage4, _localStorage5;

              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: styles.message,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: (item === null || item === void 0 ? void 0 : (_item$fromUser = item.fromUser) === null || _item$fromUser === void 0 ? void 0 : _item$fromUser._id) === ((_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.userId) || (item === null || item === void 0 ? void 0 : item.fromUser) === ((_localStorage3 = localStorage) === null || _localStorage3 === void 0 ? void 0 : _localStorage3.userId) ? styles.spaceBetweenMe : styles.spaceBetween,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: styles.avatar
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: styles.date,
                    children: new Date(item === null || item === void 0 ? void 0 : item.dateTime).toLocaleTimeString()
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: (item === null || item === void 0 ? void 0 : (_item$fromUser2 = item.fromUser) === null || _item$fromUser2 === void 0 ? void 0 : _item$fromUser2._id) === ((_localStorage4 = localStorage) === null || _localStorage4 === void 0 ? void 0 : _localStorage4.userId) || (item === null || item === void 0 ? void 0 : item.fromUser) === ((_localStorage5 = localStorage) === null || _localStorage5 === void 0 ? void 0 : _localStorage5.userId) ? styles.bottomMe : styles.bottom,
                  children: item === null || item === void 0 ? void 0 : item.body
                })]
              });
            })
          }) : "No Messages"
        }) : "loading..."
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: formatMessage(Messanger_message.noMessage)
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: styles.sendMessage,
      children: [unreadedMessages ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: styles.unReadedMessages,
        onClick: () => {
          const scroll = msgRef.current.scrollHeight - msgRef.current.clientHeight;
          msgRef.current.scrollTo(0, scroll);
          setUnreadedMessages(0);
        },
        children: unreadedMessages
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: sendMessage,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: styles.sendMessageInput,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GolTextField["a" /* default */], {
            value: message,
            onChange: e => setMessage(e.target.value),
            className: styles.searchInput,
            placeholder: formatMessage(Messanger_message.writeMessage)
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: styles.sendMessageTools,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: styles.attachIcon,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgAttachment, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgImage, {})
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GolButton["a" /* default */], {
            type: "submit",
            color: "primary",
            variant: "contained",
            children: formatMessage(Messanger_message.send)
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var PrivateChat_PrivateChat = (PrivateChat);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/PrivateChat/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/useMessangerStyle.ts

const useMessangerStyle = Object(src_theme["b" /* makeGolStyles */])(({
  palette,
  shadows,
  direction,
  spacing
}) => ({
  root: {
    backgroundColor: palette.surface.default,
    position: "fixed",
    right: 80,
    bottom: 0,
    width: 289,
    height: 420,
    boxShadow: shadows[1],
    borderRadius: "6px 6px 0 0",
    transition: "all ease-in-out 200ms"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: spacing(3, 4, 1, 4),
    fontSize: 17,
    borderBottom: `1px solid ${palette.neutral[200]}`
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex"
  },
  sendSvg: {
    cursor: "pointer",
    margin: spacing(0, 5)
  },
  toggle: {
    cursor: "pointer"
  },
  body: {
    width: "100%",
    position: "relative"
  },
  search: {
    padding: spacing(0, 4, 3, 4),
    height: 385,
    overflow: "scroll",
    width: "100%",
    position: "relative"
  },
  messageSearch: {
    position: "fixed",
    backgroundColor: palette.surface.default,
    padding: spacing(2, 0, 0, 0),
    width: 245
  },
  searchInput: {
    background: palette.neutral[100],
    borderRadius: 8,
    marginBottom: spacing(2),
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiFormLabel-root": {
      color: palette.neutral[600]
    }
  },
  textFieldLabel: {
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: spacing(2.5)
    }
  },
  messages: {
    paddingTop: spacing(18)
  },
  message: {
    display: "flex",
    cursor: "pointer",
    borderBottom: `1px solid ${palette.neutral[200]}`,
    justifyContent: "space-between",
    padding: spacing(2, 0)
  },
  avatar: {
    width: 36,
    height: 36,
    background: palette.neutral[200],
    borderRadius: 50,
    marginRight: spacing(2)
  },
  content: {},
  name: {
    fontSize: 13
  },
  text: {
    fontSize: 9
  },
  date: {
    fontSize: 11,
    textTransform: "uppercase",
    fontWeight: 500
  },
  counter: {
    background: palette.error.main,
    alignSelf: "center",
    margin: spacing(2),
    borderRadius: "50%",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: palette.neutral[100]
  }
}), {
  name: "SideBar"
});
/* harmony default export */ var chat_useMessangerStyle = (useMessangerStyle);
// EXTERNAL MODULE: ./src/utils/socket.ts
var utils_socket = __webpack_require__("/l56");

// EXTERNAL MODULE: ./src/domains/api.js
var api = __webpack_require__("aFs1");

// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/Messanger.tsx



function Messanger_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Messanger_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Messanger_ownKeys(Object(source), true).forEach(function (key) { Messanger_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Messanger_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Messanger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const Messanger = ({
  openChat,
  setOpenChat
}) => {
  const styles = useMessangerStyle();
  const {
    formatMessage
  } = Object(external_react_intl_["useIntl"])();
  const {
    0: privateMessage,
    1: setPrivate
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedContact,
    1: setSelectedContact
  } = Object(external_react_["useState"])(null);
  const {
    0: messages,
    1: setMessages
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: orders,
    1: setOrders
  } = Object(external_react_["useState"])([]);
  const {
    0: counter,
    1: setCounter
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    var _localStorage;

    external_axios_default.a.get(`${api["a" /* api */]}/api/order`, {
      headers: {
        "x-auth-token": (_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.token
      }
    }).then(res => setOrders(res === null || res === void 0 ? void 0 : res.data)).catch(err => console.log(err));
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (selectedContact !== null && selectedContact !== void 0 && selectedContact._id) {
      var _localStorage2;

      setLoading(true);
      utils_socket["a" /* socket */].emit("join", {
        order: selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id
      });
      external_axios_default.a.get(`${api["a" /* api */]}/api/messages/${selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id}`, {
        headers: {
          "x-auth-token": (_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.token
        }
      }).then(res => {
        var _res$data;

        setLoading(false);
        setMessages(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.messages);
      }).catch(err => console.log(err));
    }
  }, [selectedContact]);
  Object(external_react_["useEffect"])(() => {
    utils_socket["a" /* socket */].on("receiveMessage", data => {
      console.log("selectedContact, data ~ selectedContact, data", selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id, data === null || data === void 0 ? void 0 : data.order);

      if ((selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id) == (data === null || data === void 0 ? void 0 : data.order)) {
        setMessages(prev => [...prev, data]);
      }
    });
    utils_socket["a" /* socket */].on("newConversation", data => {
      if ((selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id) !== (data === null || data === void 0 ? void 0 : data.order)) {
        setCounter(prev => [...prev, data === null || data === void 0 ? void 0 : data._id]);
      }
    });
  }, [utils_socket["a" /* socket */]]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [privateMessage && /*#__PURE__*/Object(jsx_runtime_["jsx"])(PrivateChat_PrivateChat, Messanger_objectSpread({}, {
      selectedContact,
      setPrivate,
      messages,
      setMessages,
      socket: utils_socket["a" /* socket */],
      loading
    })), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: styles.root,
      style: openChat ? {
        bottom: 0
      } : {
        bottom: -372
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: styles.header,
        onClick: () => setOpenChat(!openChat),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: formatMessage(Messanger_message.messaging)
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: styles.spaceBetween,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgSend, {
              className: styles.sendSvg
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: styles.toggle,
            onClick: () => setOpenChat(!openChat),
            children: openChat ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgDown, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgUp, {})
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: styles.body,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: styles.search,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: styles.messageSearch,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GolTextField["a" /* default */], {
              className: styles.searchInput,
              label: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                className: styles.textFieldLabel,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgSearch, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "Search"
                })]
              })
            })
          }), orders !== null && orders !== void 0 && orders.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: styles.messages,
            children: orders === null || orders === void 0 ? void 0 : orders.map(item => {
              var _item$customer, _item$customer2, _item$customer3, _item$customer4, _item$customer5;

              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: styles.message,
                onClick: () => {
                  setSelectedContact(item);
                  setPrivate(true);
                  let newCounter = counter === null || counter === void 0 ? void 0 : counter.filter(el => el !== (item === null || item === void 0 ? void 0 : item._id));
                  setCounter(newCounter);
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: styles.flex,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: styles.avatar
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: styles.content,
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: styles.name,
                      children: `${item !== null && item !== void 0 && (_item$customer = item.customer) !== null && _item$customer !== void 0 && _item$customer.firstName ? item === null || item === void 0 ? void 0 : (_item$customer2 = item.customer) === null || _item$customer2 === void 0 ? void 0 : _item$customer2.firstName : "No Name"} ${item !== null && item !== void 0 && (_item$customer3 = item.customer) !== null && _item$customer3 !== void 0 && _item$customer3.lastName ? item === null || item === void 0 ? void 0 : (_item$customer4 = item.customer) === null || _item$customer4 === void 0 ? void 0 : _item$customer4.lastName : ""}`
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: styles.text,
                      children: item === null || item === void 0 ? void 0 : (_item$customer5 = item.customer) === null || _item$customer5 === void 0 ? void 0 : _item$customer5.email
                    })]
                  }), (selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact._id) !== (item === null || item === void 0 ? void 0 : item._id) && counter.includes(item === null || item === void 0 ? void 0 : item._id) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: styles.counter,
                    children: counter === null || counter === void 0 ? void 0 : counter.filter(el => el === (item === null || item === void 0 ? void 0 : item._id)).length
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: styles.date,
                  children: new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleDateString()
                })]
              }, item === null || item === void 0 ? void 0 : item._id);
            })
          }) : "No Orders"]
        })
      })]
    })]
  });
};

/* harmony default export */ var chat_Messanger = (Messanger);
// CONCATENATED MODULE: ./src/layout/CI/Layout/components/chat/index.ts

// CONCATENATED MODULE: ./src/layout/CI/Layout/DashboardLayout.tsx




function DashboardLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DashboardLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DashboardLayout_ownKeys(Object(source), true).forEach(function (key) { DashboardLayout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DashboardLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DashboardLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const DashboardLayout = ({
  children
}) => {
  const classes = useDashboardStyle();
  const {
    0: openSystemMenu,
    1: setOpenSystemMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: openNotifications,
    1: setOpenNotifications
  } = Object(external_react_["useState"])(false);
  const {
    0: openFavorites,
    1: setOpenFavorites
  } = Object(external_react_["useState"])(false);
  const {
    0: openChat,
    1: setOpenChat
  } = Object(external_react_["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(false);
  const {
    0: openDesk,
    1: setOpenDesk
  } = Object(external_react_["useState"])(true);
  const theme = Object(core_["useTheme"])();
  const {
    formatMessage
  } = Object(external_react_intl_["useIntl"])();
  const {
    push
  } = Object(router_["useRouter"])();
  external_react_default.a.useEffect(() => {
    external_axios_default.a.get(`${api["a" /* api */]}/api/user/me`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token
      }
    }).then(res => {
      if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
        setUser(true);
      }
    }).catch(err => push("/signIn"));
  }, [api["a" /* api */]]);
  Object(external_react_hotkeys_hook_["useHotkeys"])("shift + .", () => {
    setOpenSystemMenu(false);
    setOpenNotifications(false);
    setOpenFavorites(false);
    setOpenDesk(prev => !prev);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: user && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["CssBaseline"], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sidebar_SideBar, DashboardLayout_objectSpread({}, {
            openSystemMenu,
            setOpenSystemMenu,
            openNotifications,
            setOpenNotifications,
            openDesk,
            setOpenDesk,
            openFavorites,
            setOpenFavorites
          }))
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.myDesk,
          style: openDesk ? {
            width: 226
          } : {
            width: 67
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.right,
            style: openDesk ? {
              width: "80%"
            } : {
              width: "0%"
            },
            children: openDesk && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: openDesk ? classes.deskContentOpen : classes.deskContentClose,
              style: {
                filter: openSystemMenu ? "blur(1px)" : "blur(0)"
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                variant: "h6",
                children: formatMessage(Dashboard_message.myDesk)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(desk_Desk, {})]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.left,
            style: {
              width: "20%"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.arrowRightContainer,
              onClick: () => setOpenDesk(!openDesk),
              style: !openDesk ? theme.direction === "rtl" ? {
                left: -4
              } : {
                right: -4
              } : theme.direction === "rtl" ? {
                left: 28
              } : {
                right: 28
              },
              children: openDesk ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgRight, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgLeft, {})
            })
          })]
        }), openSystemMenu && /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_MainMenu, {}), openNotifications && /*#__PURE__*/Object(jsx_runtime_["jsx"])(notifications_Notifications, {}), openFavorites && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Favarites, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.mainContent,
          style: openDesk ? {
            width: "calc(100vw - 318px)",
            filter: openSystemMenu ? "blur(2px)" : "blur(0)"
          } : {
            width: "calc(100vw - 157px)",
            filter: openSystemMenu ? "blur(2px)" : "blur(0)"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [children, /*#__PURE__*/Object(jsx_runtime_["jsx"])(chat_Messanger, DashboardLayout_objectSpread({}, {
              setOpenChat,
              openChat
            }))]
          })
        })]
      })]
    })
  });
};
DashboardLayout.displayName = "DashboardLayout";
/* harmony default export */ var Layout_DashboardLayout = (DashboardLayout);
// CONCATENATED MODULE: ./src/layout/CI/Layout/index.ts


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xrHl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ GolTextField_GolTextField; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "cleave.js/react"
var react_ = __webpack_require__("baVd");
var react_default = /*#__PURE__*/__webpack_require__.n(react_);

// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__("aNv/");

// CONCATENATED MODULE: ./src/components/GolTextField/GolFormatInputBase/GolFormatInputBase.styles.ts

/* harmony default export */ var GolFormatInputBase_styles = (Object(theme["b" /* makeGolStyles */])(() => ({
  root: {
    width: '100%',
    height: '100%'
  }
})));
// CONCATENATED MODULE: ./src/components/GolTextField/GolFormatInputBase/GolFormatInputBase.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const GolFormatInputBase = (_ref) => {
  let {
    options,
    inputRef: ref
  } = _ref,
      other = _objectWithoutProperties(_ref, ["options", "inputRef"]);

  const {
    root: className
  } = GolFormatInputBase_styles({});

  const {
    type
  } = options,
        rest = _objectWithoutProperties(options, ["type"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_default.a, _objectSpread(_objectSpread({}, _objectSpread({
    className,
    ref
  }, other)), {}, {
    options: _objectSpread({
      [type]: true
    }, rest)
  }));
};

GolFormatInputBase.displayName = 'GolFormatField';
/* harmony default export */ var GolFormatInputBase_GolFormatInputBase = (GolFormatInputBase);
// CONCATENATED MODULE: ./src/components/GolTextField/GolFormatInputBase/index.ts

// CONCATENATED MODULE: ./src/components/GolTextField/GolInputBase/GolInputBase.styles.ts

/* harmony default export */ var GolInputBase_styles = (Object(theme["b" /* makeGolStyles */])(() => ({
  root: {
    width: '100%',
    height: '100%'
  }
})));
// CONCATENATED MODULE: ./src/components/GolTextField/GolInputBase/GolInputBase.tsx


function GolInputBase_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function GolInputBase_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GolInputBase_ownKeys(Object(source), true).forEach(function (key) { GolInputBase_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GolInputBase_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GolInputBase_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GolInputBase_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = GolInputBase_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function GolInputBase_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const GolInputBase = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    value,
    onChange,
    placeholder
  } = _ref,
      other = GolInputBase_objectWithoutProperties(_ref, ["value", "onChange", "placeholder"]);

  const classes = GolInputBase_styles({});
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["InputBase"], GolInputBase_objectSpread({
    disabled: true,
    className: [classes.root, 'GolInputBase'].join(' '),
    "data-testid": `${other.id}-inputBase`
  }, GolInputBase_objectSpread({
    value,
    onChange,
    placeholder,
    ref
  }, other)));
});
GolInputBase.displayName = 'GolInput';
/* harmony default export */ var GolInputBase_GolInputBase = (GolInputBase);
// CONCATENATED MODULE: ./src/components/GolTextField/GolInputBase/index.ts

// CONCATENATED MODULE: ./src/components/GolTextField/GolTextField.style.ts

/* harmony default export */ var GolTextField_style = (Object(theme["b" /* makeGolStyles */])(({
  palette: {
    grey
  }
}) => ({
  root: {
    width: '100%',
    padding: '50px',
    '& .TextFieldContainerStory': {
      display: 'flex',
      width: '100%'
    },
    '& h5': {
      minWidth: 150
    },
    '& .GolTextFieldWithValidation': {
      width: '100%'
    }
  },
  label: {
    color: grey[1],
    // fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14.94
  }
})));
// CONCATENATED MODULE: ./src/assets/images/icons/UI/CloseCircle.svg
var _path, _path2, _path3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCloseCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.36 8.64a.75.75 0 010 1.06L9.7 15.36a.75.75 0 01-1.06-1.06l5.66-5.66a.75.75 0 011.06 0z",
    fill: "#4F4F4F"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.64 8.64a.75.75 0 011.06 0l5.66 5.66a.75.75 0 11-1.06 1.06L8.64 9.7a.75.75 0 010-1.06z",
    fill: "#4F4F4F"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.75A8.25 8.25 0 003.75 12 8.25 8.25 0 0012 20.25 8.25 8.25 0 0020.25 12 8.25 8.25 0 0012 3.75zM2.25 12A9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75 9.75 9.75 0 012.25 12z",
    fill: "#4F4F4F"
  })));
}

/* harmony default export */ var CloseCircle = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4zNjAzIDguNjM5NjdDMTUuNjUzMiA4LjkzMjU2IDE1LjY1MzIgOS40MDc0NCAxNS4zNjAzIDkuNzAwMzNMOS43MDAzMyAxNS4zNjAzQzkuNDA3NDQgMTUuNjUzMiA4LjkzMjU2IDE1LjY1MzIgOC42Mzk2NyAxNS4zNjAzQzguMzQ2NzggMTUuMDY3NCA4LjM0Njc4IDE0LjU5MjYgOC42Mzk2NyAxNC4yOTk3TDE0LjI5OTcgOC42Mzk2N0MxNC41OTI2IDguMzQ2NzggMTUuMDY3NCA4LjM0Njc4IDE1LjM2MDMgOC42Mzk2N1oiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjYzOTY3IDguNjM5NjdDOC45MzI1NiA4LjM0Njc4IDkuNDA3NDQgOC4zNDY3OCA5LjcwMDMzIDguNjM5NjdMMTUuMzYwMyAxNC4yOTk3QzE1LjY1MzIgMTQuNTkyNiAxNS42NTMyIDE1LjA2NzQgMTUuMzYwMyAxNS4zNjAzQzE1LjA2NzQgMTUuNjUzMiAxNC41OTI2IDE1LjY1MzIgMTQuMjk5NyAxNS4zNjAzTDguNjM5NjcgOS43MDAzM0M4LjM0Njc4IDkuNDA3NDQgOC4zNDY3OCA4LjkzMjU2IDguNjM5NjcgOC42Mzk2N1oiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAzLjc1QzcuNDQzMjEgMy43NSAzLjc1IDcuNDQzMjEgMy43NSAxMkMzLjc1IDE2LjU1NjggNy40NDMyMSAyMC4yNSAxMiAyMC4yNUMxNi41NTY4IDIwLjI1IDIwLjI1IDE2LjU1NjggMjAuMjUgMTJDMjAuMjUgNy40NDMyMSAxNi41NTY4IDMuNzUgMTIgMy43NVpNMi4yNSAxMkMyLjI1IDYuNjE0NzkgNi42MTQ3OSAyLjI1IDEyIDIuMjVDMTcuMzg1MiAyLjI1IDIxLjc1IDYuNjE0NzkgMjEuNzUgMTJDMjEuNzUgMTcuMzg1MiAxNy4zODUyIDIxLjc1IDEyIDIxLjc1QzYuNjE0NzkgMjEuNzUgMi4yNSAxNy4zODUyIDIuMjUgMTJaIiBmaWxsPSIjNEY0RjRGIi8+Cjwvc3ZnPgo=");

// CONCATENATED MODULE: ./src/components/GolTextField/GolTextField.tsx




function GolTextField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function GolTextField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GolTextField_ownKeys(Object(source), true).forEach(function (key) { GolTextField_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GolTextField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GolTextField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GolTextField_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = GolTextField_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function GolTextField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const GolTextField = (_ref) => {
  let {
    label,
    helperText: helper,
    error,
    maxLength,
    rightPrefix,
    leftPrefix,
    maskOptions,
    InputProps: InputProperties,
    inputProps: inputProperties,
    className,
    onClear,
    value,
    disabled
  } = _ref,
      other = GolTextField_objectWithoutProperties(_ref, ["label", "helperText", "error", "maxLength", "rightPrefix", "leftPrefix", "maskOptions", "InputProps", "inputProps", "className", "onClear", "value", "disabled"]);

  const styles = GolTextField_style();
  const valueLength = `${value}`.length;
  const helperText = Object(external_react_["useMemo"])(() => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: error ? error : helper
    }), maxLength && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      children: [value ? valueLength : 0, "/", maxLength]
    })]
  }), [error, helper, maxLength, value, valueLength]);

  const InputProps = GolTextField_objectSpread({
    inputComponent: maskOptions ? GolFormatInputBase_GolFormatInputBase : GolInputBase_GolInputBase,
    endAdornment: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "endAdornmentContainer",
      children: [disabled || valueLength === 0 || Object(external_ramda_["isNil"])(onClear) ? null : /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ButtonBase"], {
        className: "endAdornmentElement",
        onClick: onClear,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SvgCloseCircle, {})
      }), rightPrefix]
    }),
    startAdornment: leftPrefix && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "GolTextFieldLeftPrefix",
      children: leftPrefix
    })
  }, InputProperties);

  const inputProps = GolTextField_objectSpread({
    options: maskOptions
  }, inputProperties);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], GolTextField_objectSpread({
    InputLabelProps: {
      className: styles.label
    },
    variant: "outlined"
  }, GolTextField_objectSpread({
    helperText,
    label,
    error: !!error,
    value,
    InputProps,
    inputProps,
    disabled,
    className
  }, other)));
};

GolTextField.displayName = "GolTextField";
/* harmony default export */ var GolTextField_GolTextField = (GolTextField);
// CONCATENATED MODULE: ./src/components/GolTextField/index.ts


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });