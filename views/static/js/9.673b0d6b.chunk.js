webpackJsonp([9],{

/***/ 1545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var Register=function Register(){var _useState=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])({email:"",password:"",firstName:"",lastName:"",countryCode:"",phoneNumber:"",role:"admin"}),_useState2=_slicedToArray(_useState,2),loginData=_useState2[0],setLoginData=_useState2[1];var _useState3=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),_useState4=_slicedToArray(_useState3,2),error=_useState4[0],setError=_useState4[1];var _useHistory=Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["useHistory"])(),push=_useHistory.push;var onChange=function onChange(e){var id=e.target.id;var value=e.target.value;setLoginData(Object.assign({},loginData,_defineProperty({},id,value)));};var onSubmit=function onSubmit(e){e.preventDefault();return fetch("/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(loginData)}).then(function(res){return res.json();}).then(function(data){console.log(data);if(data.token){localStorage.setItem("user",JSON.stringify(data));localStorage.setItem("token",data.token);push("/");}return data;}).catch(function(err){return setError(err.message);});};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{width:"100%",overflow:"hidden",height:"100vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"row align-items-center justify-content-center",style:{width:"100%",overflow:"hidden",height:"100vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"col-xs-12 col-md-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form",{onSubmit:onSubmit},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card-header"},"Create your account"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card-body"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"firstName"},"First Name"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"firstName","class":"form-control",id:"firstName",placeholder:"First Name",value:loginData.firstName,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"lastName"},"Last Name"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"lastName","class":"form-control",id:"lastName",placeholder:"Last Name",value:loginData.lastName,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"countryCode"},"Country Code"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"countryCode","class":"form-control",id:"countryCode",placeholder:"44",value:loginData.countryCode,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"phoneNumber"},"Phone Number"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"phoneNumber","class":"form-control",id:"phoneNumber",placeholder:"5684440154",value:loginData.phoneNumber,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"email"},"Email address"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"email","class":"form-control",id:"email",placeholder:"Email",value:loginData.email,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"password"},"Password"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"password","class":"form-control",id:"password",placeholder:"Password",value:loginData.password,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"Already have account? ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],{to:"/auth/login"},"Sign In"))),error&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"alert alert-danger",role:"alert"},"Somthing went wrong")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card-footer"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Up")))))));};/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),

/***/ 1546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var Login=function Login(){var _useState=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])({email:"",password:""}),_useState2=_slicedToArray(_useState,2),loginData=_useState2[0],setLoginData=_useState2[1];var _useState3=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),_useState4=_slicedToArray(_useState3,2),error=_useState4[0],setError=_useState4[1];var _useHistory=Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["useHistory"])(),push=_useHistory.push;var onChange=function onChange(e){var id=e.target.id;var value=e.target.value;setLoginData(Object.assign({},loginData,_defineProperty({},id,value)));};var onSubmit=function onSubmit(e){e.preventDefault();return fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(loginData)}).then(function(res){return res.json();}).then(function(data){console.log(data);if(data.token){localStorage.setItem("user",JSON.stringify(data));localStorage.setItem("token",data.token);push("/");}return data;}).catch(function(err){return setError(err.message);});};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{width:"100%",overflow:"hidden",height:"100vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"row align-items-center justify-content-center",style:{width:"100%",overflow:"hidden",height:"100vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"col-xs-12 col-md-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form",{onSubmit:onSubmit},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card-header"},"Welcome Back,"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card-body"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"email"},"Email address"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"email","class":"form-control",id:"email",placeholder:"Email",value:loginData.email,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"form-group"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{"for":"password"},"Password"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"password","class":"form-control",id:"password",placeholder:"Password",value:loginData.password,onChange:onChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"Don't have account? ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],{to:"/auth/register"},"Sign Up"))),error&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"alert alert-danger",role:"alert"},"Somthing went wrong")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card-footer"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign In")))))));};/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Register__ = __webpack_require__(1545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login__ = __webpack_require__(1546);
var Auth=function Auth(_ref){var match=_ref.match;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+"/login",component:__WEBPACK_IMPORTED_MODULE_3__Login__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+"/register",component:__WEBPACK_IMPORTED_MODULE_2__Register__["a" /* default */]}));};/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

});