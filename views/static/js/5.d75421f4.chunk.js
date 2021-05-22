webpackJsonp([5],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Examples_Basic__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Examples_CardTabs__ = __webpack_require__(1015);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
var tabsContent=[{title:'Advanced',content:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Examples_CardTabs__["a" /* default */],null)},{title:'Basic',content:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Examples_Basic__["a" /* default */],null)}];function getTabs(){return tabsContent.map(function(tab,index){return{title:tab.title,getContent:function getContent(){return tab.content;},key:index};});}var TabExample=function(_React$Component){_inherits(TabExample,_React$Component);function TabExample(){_classCallCheck(this,TabExample);return _possibleConstructorReturn(this,(TabExample.__proto__||Object.getPrototypeOf(TabExample)).apply(this,arguments));}_createClass(TabExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Tabs',subheading:'Tabs are used to split content between multiple sections. Wide variety available.',icon:'pe-7s-drawer icon-gradient bg-happy-itmeo'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs___default.a,{tabsWrapperClass:'body-tabs body-tabs-layout',transform:false,showInkBar:true,items:getTabs()}));}}]);return TabExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (TabExample);

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TabsExample=function(_React$Component){_inherits(TabsExample,_React$Component);function TabsExample(props){_classCallCheck(this,TabsExample);var _this=_possibleConstructorReturn(this,(TabsExample.__proto__||Object.getPrototypeOf(TabsExample)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={activeTab:'1'};return _this;}_createClass(TabsExample,[{key:'toggle',value:function toggle(tab){if(this.state.activeTab!==tab){this.setState({activeTab:tab});}}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Basic'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],{tabs:'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Justified Alignment'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],{tabs:'true',justified:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Tabs Variations'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'mb-3',tabs:'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["ButtonGroup"],{size:'sm'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{caret:'true',color:'warning',className:"btn-pill pl-3 "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'warning',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'warning',className:"btn-pill pr-3 "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Pills'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],{pills:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Pill 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Pill 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Pill 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Pills'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],{pills:true,fill:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Pill 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Pill 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Pill 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Button Group Tabs'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'mb-3 text-center'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["ButtonGroup"],{size:'sm'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{caret:'true',color:'primary',className:"btn-shadow "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'primary',className:"btn-shadow "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'primary',className:"btn-shadow "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))))))));}}]);return TabsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (TabsExample);

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CardTabsExample=function(_React$Component){_inherits(CardTabsExample,_React$Component);function CardTabsExample(props){_classCallCheck(this,CardTabsExample);var _this=_possibleConstructorReturn(this,(CardTabsExample.__proto__||Object.getPrototypeOf(CardTabsExample)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={activeTab:'1'};return _this;}_createClass(CardTabsExample,[{key:'toggle',value:function toggle(tab){if(this.state.activeTab!==tab){this.setState({activeTab:tab});}}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-license icon-gradient bg-plum-plate'},' '),'Header with Tabs',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'btn-actions-pane-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["ButtonGroup"],{size:'sm'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'primary',className:"btn-shadow "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'primary',className:"btn-shadow "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'primary',className:"btn-shadow "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardFooter"],{className:'d-block text-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide',color:'success'},'Save'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-license icon-gradient bg-plum-plate'},' '),'Header Tabs Buttons',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'btn-actions-pane-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{size:'sm',outline:true,color:'alternate',className:"btn-pill btn-wide "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{size:'sm',outline:true,color:'alternate',className:"btn-pill btn-wide mr-1 ml-1 "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{size:'sm',outline:true,color:'alternate',className:"btn-pill btn-wide "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardFooter"],{className:'d-block text-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide',color:'success'},'Save'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-gift icon-gradient bg-mixed-hopes'},' '),'Alternate Tabs',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'btn-actions-pane-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["ButtonGroup"],{size:'sm'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'focus',className:"btn-pill pl-3 "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'focus',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{color:'focus',className:"btn-pill pr-3 "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-gift icon-gradient bg-grow-early'},' '),'Header Tabs Standard Buttons',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'btn-actions-pane-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{outline:true,className:"border-0 btn-pill btn-wide btn-transition "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),color:'danger',onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{outline:true,className:"mr-1 ml-1 btn-pill btn-wide border-0 btn-transition "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),color:'danger',onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{outline:true,className:"border-0 btn-pill btn-wide btn-transition "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),color:'danger',onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardFooter"],{className:'d-block text-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide',color:'success'},'Save')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{tabs:'true',className:'mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],{className:'card-header-tab'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'card-header-title'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-bicycle icon-gradient bg-love-kiss'},' '),'Header Alternate Tabs'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardFooter"],{className:'d-block text-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide btn-shadow',color:'danger'},'Delete'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-gift icon-gradient bg-grow-early'},' '),'Header Tabs Standard Buttons',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'btn-actions-pane-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{outline:true,className:"border-0 btn-transition "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),color:'primary',onClick:function onClick(){_this2.toggle('1');}},'Tab 1'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{outline:true,className:"mr-1 ml-1 border-0 btn-transition "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),color:'primary',onClick:function onClick(){_this2.toggle('2');}},'Tab 2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{outline:true,className:"border-0 btn-transition "+__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),color:'primary',onClick:function onClick(){_this2.toggle('3');}},'Tab 3'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardFooter"],{className:'d-block text-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide',color:'success'},'Save'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{tabs:'true',className:'mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],{justified:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{tabs:'true',className:'mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardHeader"],{className:'card-header-tab card-header-tab-animation'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'card-header-title font-size-lg text-capitalize font-weight-normal'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'header-icon lnr-gift icon-gradient bg-love-kiss'},' '),'Tabs Alternate Animation'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='1'}),onClick:function onClick(){_this2.toggle('1');}},'Tab 1')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='2'}),onClick:function onClick(){_this2.toggle('2');}},'Tab 2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"],{href:'javascript:void(0);',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:this.state.activeTab==='3'}),onClick:function onClick(){_this2.toggle('3');}},'Tab 3')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabContent"],{activeTab:this.state.activeTab},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Like Aldus PageMaker including versions of Lorem. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["TabPane"],{tabId:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardFooter"],{className:'d-block text-center'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide',color:'link'},'Link Button'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],{className:'btn-wide btn-shadow',color:'danger'},'Delete'))))))));}}]);return CardTabsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (CardTabsExample);

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Examples_ToastifyAlerts__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Examples_BasicAlerts__ = __webpack_require__(1018);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
var NotificationsExamples=function(_React$Component){_inherits(NotificationsExamples,_React$Component);function NotificationsExamples(){_classCallCheck(this,NotificationsExamples);return _possibleConstructorReturn(this,(NotificationsExamples.__proto__||Object.getPrototypeOf(NotificationsExamples)).apply(this,arguments));}_createClass(NotificationsExamples,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Notifications',subheading:'Notifications represent one of the best ways to give feedback for various users actions.',icon:'pe-7s-glasses icon-gradient bg-love-kiss'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'card-header-title fsize-2 text-capitalize font-weight-normal'},'Toastify')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Examples_ToastifyAlerts__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'card-header-title fsize-2 text-capitalize font-weight-normal'},'Basic Bootstrap 4 Alerts')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Examples_BasicAlerts__["a" /* default */],null));}}]);return NotificationsExamples;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (NotificationsExamples);

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toastify__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toastify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toastify__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var flags=[{id:'disableAutoClose',label:'Disable auto-close'},{id:'hideProgressBar',label:'Hide progress bar(less fanciness!)'},{id:'newestOnTop',label:'Newest on top*'},{id:'closeOnClick',label:'Close on click'},{id:'pauseOnHover',label:'Pause delay on hover'},{id:'pauseOnFocusLoss',label:'Pause toast when the window loses focus'},{id:'rtl',label:'Right to left layout*'},{id:'draggable',label:'Allow to drag and close the toast'}];var transitions={bounce:__WEBPACK_IMPORTED_MODULE_3_react_toastify__["Bounce"],slide:__WEBPACK_IMPORTED_MODULE_3_react_toastify__["Slide"],zoom:__WEBPACK_IMPORTED_MODULE_3_react_toastify__["Zoom"],flip:__WEBPACK_IMPORTED_MODULE_3_react_toastify__["Flip"]};var Checkbox=function Checkbox(_ref){var label=_ref.label,onChange=_ref.onChange,id=_ref.id,checked=_ref.checked;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-check'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{id:id,className:'form-check-input',type:'checkbox',name:id,checked:checked,onChange:onChange}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'form-check-label',htmlFor:id},label));};var Radio=function Radio(_ref2){var options=_ref2.options,name=_ref2.name,onChange=_ref2.onChange,_ref2$checked=_ref2.checked,checked=_ref2$checked===undefined?false:_ref2$checked;return Object.keys(options).map(function(k){var option=options[k];return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-check',key:name+'-'+option},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{className:'form-check-input',id:option,type:'radio',name:name,value:option,checked:option===checked,onChange:onChange}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'form-check-label',htmlFor:option},option));});};function getType(type){switch(type){case'default':default:return'toast';case'success':return'toast.success';case'error':return'toast.error';case'info':return'toast.info';case'warning':return'toast.warn';}}var ToastifyAlerts=function(_Component){_inherits(ToastifyAlerts,_Component);function ToastifyAlerts(){var _ref3;var _temp,_this,_ret;_classCallCheck(this,ToastifyAlerts);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref3=ToastifyAlerts.__proto__||Object.getPrototypeOf(ToastifyAlerts)).call.apply(_ref3,[this].concat(args))),_this),_this.state=ToastifyAlerts.getDefaultState(),_this.handleReset=function(){return _this.setState(Object.assign({},ToastifyAlerts.getDefaultState()));},_this.clearAll=function(){return __WEBPACK_IMPORTED_MODULE_3_react_toastify__["toast"].dismiss();},_this.showToast=function(){return _this.state.type==='default'?Object(__WEBPACK_IMPORTED_MODULE_3_react_toastify__["toast"])('This is the default toaster notification box!'):__WEBPACK_IMPORTED_MODULE_3_react_toastify__["toast"][_this.state.type]('This is a toaster screen notification with dummy color, position and extra texts!');},_this.handleAutoCloseDelay=function(e){return _this.setState({autoClose:e.target.value>0?parseInt(e.target.value,10):1});},_this.handleRadioOrSelect=function(e){return _this.setState(_defineProperty({},e.target.name,e.target.value));},_this.toggleCheckbox=function(e){return _this.setState(_defineProperty({},e.target.name,!_this.state[e.target.name]));},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ToastifyAlerts,[{key:'isDefaultProps',value:function isDefaultProps(){return this.state.position==='top-right'&&this.state.autoClose===5000&&!this.state.disableAutoClose&&!this.state.hideProgressBar&&!this.state.newestOnTop&&!this.state.rtl&&this.state.pauseOnFocusLoss&&this.state.pauseOnHover&&this.state.closeOnClick&&this.state.draggable;}},{key:'renderFlags',value:function renderFlags(){var _this2=this;return flags.map(function(_ref4){var id=_ref4.id,label=_ref4.label;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Checkbox,{id:id,className:'form-check-input',label:label,onChange:_this2.toggleCheckbox,checked:_this2.state[id]}));});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Toastify Configurator'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h5',null,'Color States'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Radio,{options:__WEBPACK_IMPORTED_MODULE_3_react_toastify__["toast"].TYPE,name:'type',checked:this.state.type,onChange:this.handleRadioOrSelect})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'4'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h5',null,'Options'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,this.renderFlags())),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h5',null,'Animation'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{htmlFor:'transition'},'Transition'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'transition',id:'transition',className:'form-control',onChange:this.handleRadioOrSelect,value:this.state.transition},Object.keys(transitions).map(function(k){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{key:k,value:k},k);}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{htmlFor:'autoClose'},'Delay'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'number',name:'autoClose',className:'form-control',id:'autoClose',value:this.state.autoClose,onChange:this.handleAutoCloseDelay,disabled:this.state.disableAutoClose}))))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"],{size:'sm',className:'text-danger',onClick:this.clearAll,color:'link'},'Clear All'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"],{size:'sm',className:'text-primary',onClick:this.handleReset,color:'link'},'Reset')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'ml-auto'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"],{size:'lg',color:'success',onClick:this.showToast},'Show Toast'))))))));}}],[{key:'getDefaultState',value:function getDefaultState(){return Object.assign({},__WEBPACK_IMPORTED_MODULE_3_react_toastify__["ToastContainer"].defaultProps,{transition:'bounce',type:'success',disableAutoClose:false});}}]);return ToastifyAlerts;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (ToastifyAlerts);

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var BasicAlerts=function(_React$Component){_inherits(BasicAlerts,_React$Component);function BasicAlerts(props){_classCallCheck(this,BasicAlerts);var _this=_possibleConstructorReturn(this,(BasicAlerts.__proto__||Object.getPrototypeOf(BasicAlerts)).call(this,props));_this.state={visible:true};_this.onDismiss=_this.onDismiss.bind(_this);return _this;}_createClass(BasicAlerts,[{key:'onDismiss',value:function onDismiss(){this.setState({visible:false});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Alerts'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'primary'},'This is a primary alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'secondary'},'This is a secondary alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'success'},'This is a success alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'danger'},'This is a danger alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'warning'},'This is a warning alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'info'},'This is a info alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'light'},'This is a light alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'dark'},'This is a dark alert \u2014 check it out!')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Alerts Link Color'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'primary'},'This is a primary alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'secondary'},'This is a secondary alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'success'},'This is a success alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'danger'},'This is a danger alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'warning'},'This is a warning alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'info'},'This is a info alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'light'},'This is a light alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'dark'},'This is a dark alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Alerts Content'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'success'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'alert-heading'},'Well done!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'mb-0'},'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.'))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Dismissable Alerts'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'info',isOpen:this.state.visible,toggle:this.onDismiss},'I am an alert and I can be dismissed!'))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Alerts'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'primary'},'This is a primary alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'secondary'},'This is a secondary alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'success'},'This is a success alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'danger'},'This is a danger alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'warning'},'This is a warning alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'info'},'This is a info alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'light'},'This is a light alert \u2014 check it out!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'dark'},'This is a dark alert \u2014 check it out!')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Alerts Link Color'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'primary'},'This is a primary alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'secondary'},'This is a secondary alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'success'},'This is a success alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'danger'},'This is a danger alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'warning'},'This is a warning alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'info'},'This is a info alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'light'},'This is a light alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'dark'},'This is a dark alert with ',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:void(0);',className:'alert-link'},'an example link'),'. Give it a click if you like.')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Alerts Content'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'success'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'alert-heading'},'Well done!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'mb-0'},'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.'))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Dismissable Alerts'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Alert"],{color:'info',isOpen:this.state.visible,toggle:this.onDismiss},'I am an alert and I can be dismissed!'))))))));}}]);return BasicAlerts;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (BasicAlerts);

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Examples_Popovers___ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Examples_Tooltips___ = __webpack_require__(1025);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
var TooltipsPopoversExample=function(_React$Component){_inherits(TooltipsPopoversExample,_React$Component);function TooltipsPopoversExample(){_classCallCheck(this,TooltipsPopoversExample);return _possibleConstructorReturn(this,(TooltipsPopoversExample.__proto__||Object.getPrototypeOf(TooltipsPopoversExample)).apply(this,arguments));}_createClass(TooltipsPopoversExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Tooltips & Popovers',subheading:'These React components are used to add interaction or extra information for your app\'s content.',icon:'pe-7s-note2 icon-gradient bg-happy-fisher'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Examples_Tooltips___["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Examples_Popovers___["a" /* default */],null));}}]);return TooltipsPopoversExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (TooltipsPopoversExample);

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Basic__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Colors__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Gradients__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Custom__ = __webpack_require__(1024);
var PopoversExample=function PopoversExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{lg:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Popovers Alignments'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Basic__["a" /* default */],null)))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{lg:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Solid Colors'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Colors__["a" /* default */],null))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Gradient Colors'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Gradients__["a" /* default */],null)))));};/* harmony default export */ __webpack_exports__["a"] = (PopoversExample);

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PopoverItem=function(_React$Component){_inherits(PopoverItem,_React$Component);function PopoverItem(props){_classCallCheck(this,PopoverItem);var _this=_possibleConstructorReturn(this,(PopoverItem.__proto__||Object.getPrototypeOf(PopoverItem)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={popoverOpen:false};return _this;}_createClass(PopoverItem,[{key:'toggle',value:function toggle(){this.setState({popoverOpen:!this.state.popoverOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{className:'mr-2 mb-2',color:'primary',id:'Popover-'+this.props.id,onClick:this.toggle},this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Popover"],{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:'Popover-'+this.props.id,toggle:this.toggle},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["PopoverHeader"],null,'Popover Title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["PopoverBody"],null,'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.')));}}]);return PopoverItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var PopoversBasicExample=function(_React$Component2){_inherits(PopoversBasicExample,_React$Component2);function PopoversBasicExample(props){_classCallCheck(this,PopoversBasicExample);var _this2=_possibleConstructorReturn(this,(PopoversBasicExample.__proto__||Object.getPrototypeOf(PopoversBasicExample)).call(this,props));_this2.state={popovers:[{placement:'auto',text:'auto'},{placement:'auto-start',text:'auto-start'},{placement:'auto-end',text:'auto-end'},{placement:'top',text:'top'},{placement:'top-start',text:'top-start'},{placement:'top-end',text:'top-end'},{placement:'right',text:'right'},{placement:'right-start',text:'right-start'},{placement:'right-end',text:'right-end'},{placement:'bottom',text:'bottom'},{placement:'bottom-start',text:'bottom-start'},{placement:'bottom-end',text:'bottom-end'},{placement:'left',text:'left'},{placement:'left-start',text:'left-start'},{placement:'left-end',text:'left-end'}]};return _this2;}_createClass(PopoversBasicExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},this.state.popovers.map(function(popover,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverItem,{key:i,item:popover,id:i});})));}}]);return PopoversBasicExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PopoversBasicExample);

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PopoverItem=function(_React$Component){_inherits(PopoverItem,_React$Component);function PopoverItem(props){_classCallCheck(this,PopoverItem);var _this=_possibleConstructorReturn(this,(PopoverItem.__proto__||Object.getPrototypeOf(PopoverItem)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={popoverOpen:false};return _this;}_createClass(PopoverItem,[{key:'toggle',value:function toggle(){this.setState({popoverOpen:!this.state.popoverOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{className:'mr-2 mb-2',color:this.props.item.btn,id:'PopoverC-'+this.props.id,onClick:this.toggle},this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Popover"],{className:this.props.item.color,placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:'PopoverC-'+this.props.id,toggle:this.toggle},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["PopoverHeader"],null,this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["PopoverBody"],null,'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.')));}}]);return PopoverItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var PopoversColorsExample=function(_React$Component2){_inherits(PopoversColorsExample,_React$Component2);function PopoversColorsExample(props){_classCallCheck(this,PopoversColorsExample);var _this2=_possibleConstructorReturn(this,(PopoversColorsExample.__proto__||Object.getPrototypeOf(PopoversColorsExample)).call(this,props));_this2.state={popovers:[{placement:'bottom',text:'Primary',color:'popover-bg bg-primary',btn:'primary'},{placement:'bottom',text:'Secondary',color:'popover-bg bg-secondary',btn:'secondary'},{placement:'bottom',text:'Success',color:'popover-bg bg-success',btn:'success'},{placement:'bottom',text:'Info',color:'popover-bg bg-info',btn:'info'},{placement:'bottom',text:'Warning',color:'popover-bg bg-warning text-dark',btn:'warning '},{placement:'bottom',text:'Danger',color:'popover-bg bg-danger',btn:'danger'},{placement:'bottom',text:'Focus',color:'popover-bg bg-focus',btn:'focus'},{placement:'bottom',text:'Alternate',color:'popover-bg bg-alternate',btn:'alternate'},{placement:'bottom',text:'Light',color:'popover-bg bg-light text-dark',btn:'light'},{placement:'bottom',text:'Dark',color:'popover-bg bg-dark',btn:'dark'}]};return _this2;}_createClass(PopoversColorsExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},this.state.popovers.map(function(popover,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverItem,{key:i,item:popover,id:i});})));}}]);return PopoversColorsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PopoversColorsExample);

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PopoverItem=function(_React$Component){_inherits(PopoverItem,_React$Component);function PopoverItem(props){_classCallCheck(this,PopoverItem);var _this=_possibleConstructorReturn(this,(PopoverItem.__proto__||Object.getPrototypeOf(PopoverItem)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={popoverOpen:false};return _this;}_createClass(PopoverItem,[{key:'toggle',value:function toggle(){this.setState({popoverOpen:!this.state.popoverOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{className:'mr-2 mb-2',color:this.props.item.btn,id:'PopoverG-'+this.props.id,onClick:this.toggle},this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Popover"],{className:this.props.item.color,placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:'PopoverG-'+this.props.id,toggle:this.toggle},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["PopoverHeader"],null,this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["PopoverBody"],null,'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.')));}}]);return PopoverItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var PopoversGradientsExample=function(_React$Component2){_inherits(PopoversGradientsExample,_React$Component2);function PopoversGradientsExample(props){_classCallCheck(this,PopoversGradientsExample);var _this2=_possibleConstructorReturn(this,(PopoversGradientsExample.__proto__||Object.getPrototypeOf(PopoversGradientsExample)).call(this,props));_this2.state={popovers:[{placement:'bottom',text:'Warm Flame',color:'popover-bg bg-warm-flame text-dark',btn:'secondary'},{placement:'bottom',text:'Night Fade',color:'popover-bg bg-night-fade text-dark',btn:'secondary'},{placement:'bottom',text:'Sunny Morning',color:'popover-bg bg-sunny-morning text-dark',btn:'secondary'},{placement:'bottom',text:'Tempting Azure',color:'popover-bg bg-tempting-azure text-dark',btn:'secondary'},{placement:'bottom',text:'Amy Crisp',color:'popover-bg bg-amy-crisp text-dark',btn:'secondary'},{placement:'bottom',text:'Heavy Rain',color:'popover-bg bg-heavy-rain text-dark',btn:'secondary'},{placement:'bottom',text:'Mean Fruit',color:'popover-bg bg-mean-fruit text-dark',btn:'secondary'},{placement:'bottom',text:'Malibu Beach',color:'popover-bg bg-malibu-beach text-dark',btn:'secondary'},{placement:'bottom',text:'Deep Blue',color:'popover-bg bg-deep-blue text-dark',btn:'secondary'},{placement:'bottom',text:'Ripe Malin',color:'popover-bg bg-ripe-malin',btn:'secondary'},{placement:'bottom',text:'Arielle Smile',color:'popover-bg bg-arielle-smile',btn:'secondary'},{placement:'bottom',text:'Plum Plate',color:'popover-bg bg-plum-plate',btn:'secondary'},{placement:'bottom',text:'Happy Fisher',color:'popover-bg bg-happy-fisher text-dark',btn:'secondary'},{placement:'bottom',text:'Happy Itmeo',color:'popover-bg bg-happy-itmeo',btn:'secondary'},{placement:'bottom',text:'Mixed Hopes',color:'popover-bg bg-mixed-hopes',btn:'secondary'},{placement:'bottom',text:'Strong Bliss',color:'popover-bg bg-strong-bliss',btn:'secondary'},{placement:'bottom',text:'Grow-Early',color:'popover-bg bg-grow-early',btn:'secondary'},{placement:'bottom',text:'Love Kiss',color:'popover-bg bg-love-kiss',btn:'secondary'},{placement:'bottom',text:'Premium Dark',color:'popover-bg bg-premium-dark',btn:'secondary'},{placement:'bottom',text:'Happy Green',color:'popover-bg bg-happy-green',btn:'secondary'}]};return _this2;}_createClass(PopoversGradientsExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},this.state.popovers.map(function(popover,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverItem,{key:i,item:popover,id:i});})));}}]);return PopoversGradientsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PopoversGradientsExample);

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_utils_images_dropdown_header_abstract1_jpg__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_utils_images_dropdown_header_abstract1_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_utils_images_dropdown_header_abstract1_jpg__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PopoverItem=function(_React$Component){_inherits(PopoverItem,_React$Component);function PopoverItem(props){_classCallCheck(this,PopoverItem);var _this=_possibleConstructorReturn(this,(PopoverItem.__proto__||Object.getPrototypeOf(PopoverItem)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={popoverOpen:false};return _this;}_createClass(PopoverItem,[{key:'toggle',value:function toggle(){this.setState({popoverOpen:!this.state.popoverOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"],{className:'mr-2 mb-2',color:this.props.item.btn,id:'PopoverCustom-'+this.props.id,onClick:this.toggle},this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Popover"],{className:'popover-custom',placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:'PopoverCustom-'+this.props.id,toggle:this.toggle},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["PopoverBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Nav"],{vertical:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],{className:'nav-item-header'},'Activity'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavLink"],{href:'javascript:void(0);'},'Chat',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'ml-auto badge badge-pill badge-info'},'8'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavLink"],{href:'javascript:void(0);'},'Recover Password')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],{className:'nav-item-divider'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],{className:'nav-item-btn'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Button"],{size:'sm',className:'btn-wide btn-shadow',color:'danger'},'Cancel'))))));}}]);return PopoverItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var PopoversCustomExample=function(_React$Component2){_inherits(PopoversCustomExample,_React$Component2);function PopoversCustomExample(props){_classCallCheck(this,PopoversCustomExample);var _this2=_possibleConstructorReturn(this,(PopoversCustomExample.__proto__||Object.getPrototypeOf(PopoversCustomExample)).call(this,props));_this2.state={popovers:[{placement:'bottom',text:'Primary',color:'popover-bg bg-primary',btn:'primary'},{placement:'bottom',text:'Secondary',color:'popover-bg bg-secondary',btn:'secondary'},{placement:'bottom',text:'Success',color:'popover-bg bg-success',btn:'success'},{placement:'bottom',text:'Info',color:'popover-bg bg-info',btn:'info'},{placement:'bottom',text:'Warning',color:'popover-bg bg-warning text-dark',btn:'warning '},{placement:'bottom',text:'Danger',color:'popover-bg bg-danger',btn:'danger'},{placement:'bottom',text:'Focus',color:'popover-bg bg-focus',btn:'focus'},{placement:'bottom',text:'Alternate',color:'popover-bg bg-alternate',btn:'alternate'},{placement:'bottom',text:'Light',color:'popover-bg bg-light text-dark',btn:'light'},{placement:'bottom',text:'Dark',color:'popover-bg bg-dark',btn:'dark'}]};return _this2;}_createClass(PopoversCustomExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},this.state.popovers.map(function(popover,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverItem,{key:i,item:popover,id:i});})));}}]);return PopoversCustomExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* unused harmony default export */ var _unused_webpack_default_export = (PopoversCustomExample);

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TooltipDark__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TooltipLight__ = __webpack_require__(1027);
var TooltipsExample=function TooltipsExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{lg:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Dark Tooltips'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TooltipDark__["a" /* default */],null)))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{lg:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Light Tooltips'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TooltipLight__["a" /* default */],null)))))));};/* harmony default export */ __webpack_exports__["a"] = (TooltipsExample);

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TooltipItem=function(_React$Component){_inherits(TooltipItem,_React$Component);function TooltipItem(props){_classCallCheck(this,TooltipItem);var _this=_possibleConstructorReturn(this,(TooltipItem.__proto__||Object.getPrototypeOf(TooltipItem)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={tooltipOpen:false};return _this;}_createClass(TooltipItem,[{key:'toggle',value:function toggle(){this.setState({tooltipOpen:!this.state.tooltipOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{className:'mr-2 mb-2',color:'primary',id:'Tooltip-'+this.props.id},this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Tooltip"],{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:'Tooltip-'+this.props.id,toggle:this.toggle},'Tooltip Content!'));}}]);return TooltipItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var TooltipExampleDark=function(_React$Component2){_inherits(TooltipExampleDark,_React$Component2);function TooltipExampleDark(props){_classCallCheck(this,TooltipExampleDark);var _this2=_possibleConstructorReturn(this,(TooltipExampleDark.__proto__||Object.getPrototypeOf(TooltipExampleDark)).call(this,props));_this2.state={tooltips:[{placement:'auto',text:'auto'},{placement:'auto-start',text:'auto-start'},{placement:'auto-end',text:'auto-end'},{placement:'top',text:'top'},{placement:'top-start',text:'top-start'},{placement:'top-end',text:'top-end'},{placement:'right',text:'right'},{placement:'right-start',text:'right-start'},{placement:'right-end',text:'right-end'},{placement:'bottom',text:'bottom'},{placement:'bottom-start',text:'bottom-start'},{placement:'bottom-end',text:'bottom-end'},{placement:'left',text:'left'},{placement:'left-start',text:'left-start'},{placement:'left-end',text:'left-end'}]};return _this2;}_createClass(TooltipExampleDark,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},this.state.tooltips.map(function(tooltip,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TooltipItem,{key:i,item:tooltip,id:i});}));}}]);return TooltipExampleDark;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (TooltipExampleDark);

/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TooltipItem=function(_React$Component){_inherits(TooltipItem,_React$Component);function TooltipItem(props){_classCallCheck(this,TooltipItem);var _this=_possibleConstructorReturn(this,(TooltipItem.__proto__||Object.getPrototypeOf(TooltipItem)).call(this,props));_this.toggle=_this.toggle.bind(_this);_this.state={tooltipOpen:false};return _this;}_createClass(TooltipItem,[{key:'toggle',value:function toggle(){this.setState({tooltipOpen:!this.state.tooltipOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{className:'mr-2 mb-2',color:'primary',id:'TooltipLight-'+this.props.id},this.props.item.text),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Tooltip"],{className:'tooltip-light',placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:'TooltipLight-'+this.props.id,toggle:this.toggle},'Tooltip Content!'));}}]);return TooltipItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var TooltipExampleLight=function(_React$Component2){_inherits(TooltipExampleLight,_React$Component2);function TooltipExampleLight(props){_classCallCheck(this,TooltipExampleLight);var _this2=_possibleConstructorReturn(this,(TooltipExampleLight.__proto__||Object.getPrototypeOf(TooltipExampleLight)).call(this,props));_this2.state={tooltips:[{placement:'auto',text:'auto'},{placement:'top',text:'top'},{placement:'right',text:'right'},{placement:'bottom',text:'bottom'},{placement:'left',text:'left'}]};return _this2;}_createClass(TooltipExampleLight,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},this.state.tooltips.map(function(tooltip,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TooltipItem,{key:i,item:tooltip,id:i});}));}}]);return TooltipExampleLight;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (TooltipExampleLight);

/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Examples__ = __webpack_require__(1029);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
var ModalsExamples=function(_React$Component){_inherits(ModalsExamples,_React$Component);function ModalsExamples(){_classCallCheck(this,ModalsExamples);return _possibleConstructorReturn(this,(ModalsExamples.__proto__||Object.getPrototypeOf(ModalsExamples)).apply(this,arguments));}_createClass(ModalsExamples,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Modals',subheading:'Wide selection of modal dialogs styles and animations available.',icon:'pe-7s-phone icon-gradient bg-premium-dark'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Examples__["a" /* default */],null));}}]);return ModalsExamples;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalsExamples);

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ModalBackdrop__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ModalCustomCloseButton__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ModalCustomCloseIcon__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ModalCustomTimeout__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ModalExternal__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ModalFadeless__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ModalNested__ = __webpack_require__(1037);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalsExample=function(_React$Component){_inherits(ModalsExample,_React$Component);function ModalsExample(props){_classCallCheck(this,ModalsExample);return _possibleConstructorReturn(this,(ModalsExample.__proto__||Object.getPrototypeOf(ModalsExample)).call(this,props));}_createClass(ModalsExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],{className:'text-center'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Bootstrap 4 Modals'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Modal__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ModalCustomCloseButton__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ModalCustomCloseIcon__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ModalCustomTimeout__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ModalExternal__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ModalFadeless__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ModalNested__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'divider'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ModalBackdrop__["a" /* default */],null)))))));}}]);return ModalsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalsExample);

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalExample=function(_React$Component){_inherits(ModalExample,_React$Component);function ModalExample(props){_classCallCheck(this,ModalExample);var _this=_possibleConstructorReturn(this,(ModalExample.__proto__||Object.getPrototypeOf(ModalExample)).call(this,props));_this.state={modal:false};_this.toggle=_this.toggle.bind(_this);return _this;}_createClass(ModalExample,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Basic Modal'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalExample);

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalBackdrop=function(_React$Component){_inherits(ModalBackdrop,_React$Component);function ModalBackdrop(props){_classCallCheck(this,ModalBackdrop);var _this=_possibleConstructorReturn(this,(ModalBackdrop.__proto__||Object.getPrototypeOf(ModalBackdrop)).call(this,props));_this.state={modal:false,backdrop:true};_this.toggle=_this.toggle.bind(_this);_this.changeBackdrop=_this.changeBackdrop.bind(_this);return _this;}_createClass(ModalBackdrop,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'changeBackdrop',value:function changeBackdrop(e){var value=e.target.value;if(value!=='static'){value=JSON.parse(value);}this.setState({backdrop:value});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Form"],{inline:true,onSubmit:function onSubmit(e){return e.preventDefault();}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["FormGroup"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Input"],{bsSize:'sm',className:'mr-1',type:'select',name:'backdrop',id:'backdrop',onChange:this.changeBackdrop},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'true'},'true'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'false'},'false'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'static'},'"static"'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Modal Backdrop')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:this.state.backdrop},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalBackdrop;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalBackdrop);

/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalCustomCloseButton=function(_React$Component){_inherits(ModalCustomCloseButton,_React$Component);function ModalCustomCloseButton(props){_classCallCheck(this,ModalCustomCloseButton);var _this=_possibleConstructorReturn(this,(ModalCustomCloseButton.__proto__||Object.getPrototypeOf(ModalCustomCloseButton)).call(this,props));_this.state={modal:false};_this.toggle=_this.toggle.bind(_this);return _this;}_createClass(ModalCustomCloseButton,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'render',value:function render(){var closeBtn=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'close',onClick:this.toggle},'\xD7');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Custom Close Button'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle,close:closeBtn},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalCustomCloseButton;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalCustomCloseButton);

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalCustomCloseIcon=function(_React$Component){_inherits(ModalCustomCloseIcon,_React$Component);function ModalCustomCloseIcon(props){_classCallCheck(this,ModalCustomCloseIcon);var _this=_possibleConstructorReturn(this,(ModalCustomCloseIcon.__proto__||Object.getPrototypeOf(ModalCustomCloseIcon)).call(this,props));_this.state={modal:false};_this.toggle=_this.toggle.bind(_this);return _this;}_createClass(ModalCustomCloseIcon,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Custom Close Icon'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle,charCode:'Y'},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalCustomCloseIcon;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalCustomCloseIcon);

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalCustomTimeout=function(_React$Component){_inherits(ModalCustomTimeout,_React$Component);function ModalCustomTimeout(props){_classCallCheck(this,ModalCustomTimeout);var _this=_possibleConstructorReturn(this,(ModalCustomTimeout.__proto__||Object.getPrototypeOf(ModalCustomTimeout)).call(this,props));_this.state={modal:false};_this.toggle=_this.toggle.bind(_this);return _this;}_createClass(ModalCustomTimeout,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Custom Timeout'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,modalTransition:{timeout:700},backdropTransition:{timeout:1300},toggle:this.toggle,className:this.props.className},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalCustomTimeout;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalCustomTimeout);

/***/ }),

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalExternal=function(_React$Component){_inherits(ModalExternal,_React$Component);function ModalExternal(props){_classCallCheck(this,ModalExternal);var _this=_possibleConstructorReturn(this,(ModalExternal.__proto__||Object.getPrototypeOf(ModalExternal)).call(this,props));_this.state={modal:false};_this.toggle=_this.toggle.bind(_this);return _this;}_createClass(ModalExternal,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'render',value:function render(){var externalCloseBtn=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'close',style:{position:'absolute',top:'15px',right:'15px'},onClick:this.toggle},'\xD7');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'External Modal'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,external:externalCloseBtn},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],null,'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('b',null,'Look at the top right of the page/viewport!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null),'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalExternal;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalExternal);

/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalFadeless=function(_React$Component){_inherits(ModalFadeless,_React$Component);function ModalFadeless(props){_classCallCheck(this,ModalFadeless);var _this=_possibleConstructorReturn(this,(ModalFadeless.__proto__||Object.getPrototypeOf(ModalFadeless)).call(this,props));_this.state={modal:false};_this.toggle=_this.toggle.bind(_this);return _this;}_createClass(ModalFadeless,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Fadeless Modal'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,fade:false,toggle:this.toggle,className:this.props.className},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalFadeless;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalFadeless);

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalNested=function(_React$Component){_inherits(ModalNested,_React$Component);function ModalNested(props){_classCallCheck(this,ModalNested);var _this=_possibleConstructorReturn(this,(ModalNested.__proto__||Object.getPrototypeOf(ModalNested)).call(this,props));_this.state={modal:false,nestedModal:false,closeAll:false};_this.toggle=_this.toggle.bind(_this);_this.toggleNested=_this.toggleNested.bind(_this);_this.toggleAll=_this.toggleAll.bind(_this);return _this;}_createClass(ModalNested,[{key:'toggle',value:function toggle(){this.setState({modal:!this.state.modal});}},{key:'toggleNested',value:function toggleNested(){this.setState({nestedModal:!this.state.nestedModal,closeAll:false});}},{key:'toggleAll',value:function toggleAll(){this.setState({nestedModal:!this.state.nestedModal,closeAll:true});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'d-inline-block mb-2 mr-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Nested Modal'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],{toggle:this.toggle},'Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'success',onClick:this.toggleNested},'Show Nested Modal'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Modal"],{isOpen:this.state.nestedModal,toggle:this.toggleNested,onClosed:this.state.closeAll?this.toggle:undefined},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalHeader"],null,'Nested Modal title'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalBody"],null,'Stuff and things'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggleAll},'All Done'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggleNested},'Done'),' '))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["ModalFooter"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'link',onClick:this.toggle},'Cancel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"],{color:'primary',onClick:this.toggle},'Do Something'),' ')));}}]);return ModalNested;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ModalNested);

/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Examples_Basic___ = __webpack_require__(1039);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
var tabsContent=[{title:'Basic',content:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Examples_Basic___["a" /* default */],null)}];function getTabs(){return tabsContent.map(function(tab,index){return{title:tab.title,getContent:function getContent(){return tab.content;},key:index};});}var ProgressBarsExamples=function(_React$Component){_inherits(ProgressBarsExamples,_React$Component);function ProgressBarsExamples(){_classCallCheck(this,ProgressBarsExamples);return _possibleConstructorReturn(this,(ProgressBarsExamples.__proto__||Object.getPrototypeOf(ProgressBarsExamples)).apply(this,arguments));}_createClass(ProgressBarsExamples,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Progress Bar',subheading:'You can use the progress bars on their own or in combination with other widgets.',icon:'pe-7s-filter icon-gradient bg-grow-early'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs___default.a,{tabsWrapperClass:'body-tabs body-tabs-layout',transform:false,showInkBar:true,items:getTabs()}));}}]);return ProgressBarsExamples;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ProgressBarsExamples);

/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Progress__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProgressSizing__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProgressRounded__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ProgressAnimated__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ProgressColor__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ProgressLabels__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ProgressMax__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ProgressMulti__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ProgressStriped__ = __webpack_require__(1048);
var ProgressBarExample=function ProgressBarExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Basic'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Progress__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Progress bar labels'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ProgressLabels__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Progress bar max'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ProgressMax__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Progress bar striped'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ProgressStriped__["a" /* default */],null)))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{md:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Sizing'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ProgressSizing__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Rounded'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ProgressRounded__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Progress color'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ProgressColor__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Progress bar multi'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ProgressMulti__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Progress animated'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ProgressAnimated__["a" /* default */],null)))))));};/* harmony default export */ __webpack_exports__["a"] = (ProgressBarExample);

/***/ }),

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressExample=function ProgressExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'0%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'25%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'50%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'75%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'100%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'Multiple bars'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'5'})));};/* harmony default export */ __webpack_exports__["a"] = (ProgressExample);

/***/ }),

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressSizingExample=function ProgressSizingExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-sm mb-3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-sm mb-3',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-sm mb-3',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-sm mb-3',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-sm mb-3',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-sm',multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'5'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'divider'},' '),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-xs mb-3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-xs mb-3',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-xs mb-3',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-xs mb-3',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-xs mb-3',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-xs',multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'5'})));};/* harmony default export */ __webpack_exports__["a"] = (ProgressSizingExample);

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressRoundedExample=function ProgressRoundedExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-rounded mb-3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-rounded mb-3',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-rounded mb-3',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-rounded mb-3',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-rounded mb-3',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-rounded',multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'5'})));};/* harmony default export */ __webpack_exports__["a"] = (ProgressRoundedExample);

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressAnimatedExample=function ProgressAnimatedExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',animated:true,value:2*5}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',animated:true,color:'success',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',animated:true,color:'info',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',animated:true,color:'warning',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',animated:true,color:'danger',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{animated:true,bar:true,value:'10'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{animated:true,bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{animated:true,bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{animated:true,bar:true,color:'danger',value:'20'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'divider'},' '),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3 progress-bar-animated-alt',value:2*5}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3 progress-bar-animated-alt',color:'success',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3 progress-bar-animated-alt',color:'info',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3 progress-bar-animated-alt',color:'warning',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3 progress-bar-animated-alt',color:'danger',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-animated-alt',bar:true,value:'10'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-animated-alt',bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-animated-alt',bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'progress-bar-animated-alt',bar:true,color:'danger',value:'20'})));};/* harmony default export */ __webpack_exports__["a"] = (ProgressAnimatedExample);

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressColorExample=function ProgressColorExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:2*5}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',color:'success',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',color:'info',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',color:'warning',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{color:'danger',value:'100'}));};/* harmony default export */ __webpack_exports__["a"] = (ProgressColorExample);

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressLabelsExample=function ProgressLabelsExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:'25'},'25%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:50},'1/2'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:75},'You\'re almost there!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',color:'success',value:'100'},'You did it!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'},'Meh'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'30'},'Wow!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'},'Cool'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'20'},'20%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'5'},'!!')));};/* harmony default export */ __webpack_exports__["a"] = (ProgressLabelsExample);

/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressMaxExample=function ProgressMaxExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'1 of 5'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:'1',max:'5'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'50 of 135'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:50,max:'135'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'75 of 111'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:75,max:111}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'463 of 500'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',value:'463',max:500}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'Various (40) of 55'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'5',max:55},'5'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'15',max:55},'15'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'10',max:55},'10'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'10',max:55},'10')));};/* harmony default export */ __webpack_exports__["a"] = (ProgressMaxExample);

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressMultiExample=function ProgressMultiExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'Plain'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'15'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'With Labels'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,value:'15'},'Meh'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'success',value:'35'},'Wow!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'warning',value:'25'},'25%'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'danger',value:'25'},'LOOK OUT!!')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'text-center'},'Stripes and Animations'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,striped:true,value:'15'},'Stripes'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,animated:true,color:'success',value:'30'},'Animated Stripes'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{bar:true,color:'info',value:'25'},'Plain')));};/* harmony default export */ __webpack_exports__["a"] = (ProgressMultiExample);

/***/ }),

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var ProgressStripedExample=function ProgressStripedExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',striped:true,value:2*5}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',striped:true,color:'success',value:'25'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',striped:true,color:'info',value:50}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',striped:true,color:'warning',value:75}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{className:'mb-3',striped:true,color:'danger',value:'100'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{multi:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{striped:true,bar:true,value:'10'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{striped:true,bar:true,color:'success',value:'30'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{striped:true,bar:true,color:'warning',value:'20'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"],{striped:true,bar:true,color:'danger',value:'20'})));};/* harmony default export */ __webpack_exports__["a"] = (ProgressStripedExample);

/***/ }),

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Examples_Carousel__ = __webpack_require__(1050);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
var CarouselExample=function(_React$Component){_inherits(CarouselExample,_React$Component);function CarouselExample(){_classCallCheck(this,CarouselExample);return _possibleConstructorReturn(this,(CarouselExample.__proto__||Object.getPrototypeOf(CarouselExample)).apply(this,arguments));}_createClass(CarouselExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Carousels & Slideshows',subheading:'Create easy and beautiful slideshows with these React components.',icon:'pe-7s-album icon-gradient bg-sunny-morning'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'card-header-title fsize-2 text-capitalize font-weight-normal'},'Bootstrap 4 Carousel')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Examples_Carousel__["a" /* default */],null));}}]);return CarouselExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (CarouselExample);

/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Carousel__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CustomTag__ = __webpack_require__(1052);
var CarouselBSExample=function CarouselBSExample(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Row"],{className:'slick-slider-md'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{lg:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Basic'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Carousel__["a" /* default */],null)))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Col"],{lg:'6'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["CardTitle"],null,'Custom Tags'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CustomTag__["a" /* default */],null)))))));};/* harmony default export */ __webpack_exports__["a"] = (CarouselBSExample);

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var items=[{id:1,src:'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',altText:'Slide 1',caption:'Slide 1'},{id:2,src:'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',altText:'Slide 2',caption:'Slide 2'},{id:3,src:'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',altText:'Slide 3',caption:'Slide 3'}];var CarouselDefault=function CarouselDefault(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["UncontrolledCarousel"],{items:items});};/* harmony default export */ __webpack_exports__["a"] = (CarouselDefault);

/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var items=[{id:1,altText:'Slide 1',caption:'Slide 1'},{id:2,altText:'Slide 2',caption:'Slide 2'},{id:3,altText:'Slide 3',caption:'Slide 3'}];var CustomExample=function(_Component){_inherits(CustomExample,_Component);function CustomExample(props){_classCallCheck(this,CustomExample);var _this=_possibleConstructorReturn(this,(CustomExample.__proto__||Object.getPrototypeOf(CustomExample)).call(this,props));_this.state={activeIndex:0};_this.next=_this.next.bind(_this);_this.previous=_this.previous.bind(_this);_this.goToIndex=_this.goToIndex.bind(_this);_this.onExiting=_this.onExiting.bind(_this);_this.onExited=_this.onExited.bind(_this);return _this;}_createClass(CustomExample,[{key:'onExiting',value:function onExiting(){this.animating=true;}},{key:'onExited',value:function onExited(){this.animating=false;}},{key:'next',value:function next(){if(this.animating)return;var nextIndex=this.state.activeIndex===items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:nextIndex});}},{key:'previous',value:function previous(){if(this.animating)return;var nextIndex=this.state.activeIndex===0?items.length-1:this.state.activeIndex-1;this.setState({activeIndex:nextIndex});}},{key:'goToIndex',value:function goToIndex(newIndex){if(this.animating)return;this.setState({activeIndex:newIndex});}},{key:'render',value:function render(){var _this2=this;var activeIndex=this.state.activeIndex;var slides=items.map(function(item){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CarouselItem"],{className:'custom-tag',tag:'div',key:item.id,onExiting:_this2.onExiting,onExited:_this2.onExited},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CarouselCaption"],{className:'text-danger',captionText:item.caption,captionHeader:item.caption}));});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style',null,'.custom-tag {\n                max-width: 100%;\n                height: 500px;\n                background: black;\n              }'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Carousel"],{activeIndex:activeIndex,next:this.next,previous:this.previous},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CarouselIndicators"],{items:items,activeIndex:activeIndex,onClickHandler:this.goToIndex}),slides,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CarouselControl"],{direction:'prev',directionText:'Previous',onClickHandler:this.previous}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CarouselControl"],{direction:'next',directionText:'Next',onClickHandler:this.next})));}}]);return CustomExample;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (CustomExample);

/***/ }),

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_AppMain_PageTitle__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Examples_GoogleMaps__ = __webpack_require__(1054);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// Examples
// import VectorMapsExample from './Examples/VectorMaps';
var tabsContent=[// {
//     title: 'Vector Maps',
//     content: <VectorMapsExample/>
// },
{title:'Google Maps',content:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Examples_GoogleMaps__["a" /* default */],null)}];function getTabs(){return tabsContent.map(function(tab,index){return{title:tab.title,getContent:function getContent(){return tab.content;},key:index};});}var MapsExample=function(_React$Component){_inherits(MapsExample,_React$Component);function MapsExample(){_classCallCheck(this,MapsExample);return _possibleConstructorReturn(this,(MapsExample.__proto__||Object.getPrototypeOf(MapsExample)).apply(this,arguments));}_createClass(MapsExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Layout_AppMain_PageTitle__["a" /* default */],{heading:'Maps',subheading:'Implement in your applications Google or vector maps.',icon:'pe-7s-map icon-gradient bg-premium-dark'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_responsive_tabs___default.a,{tabsWrapperClass:'body-tabs body-tabs-layout',transform:false,showInkBar:true,items:getTabs()}));}}]);return MapsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (MapsExample);

/***/ }),

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_map_react__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_map_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_google_map_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AnyReactComponent=function AnyReactComponent(_ref){var text=_ref.text;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,text);};var GoogleMapsExample=function(_React$Component){_inherits(GoogleMapsExample,_React$Component);function GoogleMapsExample(){_classCallCheck(this,GoogleMapsExample);return _possibleConstructorReturn(this,(GoogleMapsExample.__proto__||Object.getPrototypeOf(GoogleMapsExample)).apply(this,arguments));}_createClass(GoogleMapsExample,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,{component:'div',transitionName:'TabsAnimation',transitionAppear:true,transitionAppearTimeout:0,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Row"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],{md:'12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],{className:'main-card mb-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],null,'Basic'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{height:'100vh',width:'100%'}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_google_map_react___default.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AnyReactComponent,{lat:59.955413,lng:30.337844,text:'Example Text'})))))))));}}]);return GoogleMapsExample;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);GoogleMapsExample.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};/* harmony default export */ __webpack_exports__["a"] = (GoogleMapsExample);

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=__webpack_require__(1),o=e(t),n=e(__webpack_require__(5)),r=e(__webpack_require__(13)),i=e(__webpack_require__(781)),s=__webpack_require__(1056),a=e(__webpack_require__(1057));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},c=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return o.createElement("div",{ref:this.props.registerChild,style:h})},t}(t.Component),d=function(e){function t(t){var o;return(o=e.call(this)||this).gmapInstance=t,o}l(t,e);var o=t.prototype;return o.getChildren=function(){return this.gmapInstance.props.children},o.getMousePosition=function(){return this.gmapInstance.mouse_},o.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},o.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},t}(i),m=function(e,t){for(var o=p({},e),n=0;n<t.length;n++){var r=t[n];r in o&&delete o[r]}return o},g=Object.prototype.hasOwnProperty;function _(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function f(e,t){if(_(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(var r=0;r<o.length;r++)if(!g.call(t,o[r])||!_(e[o[r]],t[o[r]]))return!1;return!0}var v={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},M={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},y=function(e){function t(t){var n;return(n=e.call(this,t)||this)._getState=function(){return{children:n.props.dispatcher.getChildren(),updateCounter:n.props.dispatcher.getUpdateCounter()}},n._onChangeHandler=function(){if(n.dimensionsCache_){var e=(n.state.children||[]).length,t=n._getState();n.setState(t,function(){return(t.children||[]).length!==e&&n._onMouseChangeHandler()})}},n._onChildClick=function(){n.props.onChildClick&&n.hoverChildProps_&&n.props.onChildClick(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseDown=function(){n.props.onChildMouseDown&&n.hoverChildProps_&&n.props.onChildMouseDown(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseEnter=function(e,t){n.dimensionsCache_&&(n.props.onChildMouseEnter&&n.props.onChildMouseEnter(e,t),n.hoverChildProps_=t,n.hoverKey_=e,n.setState({hoverKey:e}))},n._onChildMouseLeave=function(){if(n.dimensionsCache_){var e=n.hoverKey_;null!=e&&(n.props.onChildMouseLeave&&n.props.onChildMouseLeave(e,n.hoverChildProps_),n.hoverKey_=null,n.hoverChildProps_=null,n.setState({hoverKey:null}))}},n._onMouseAllow=function(e){e||n._onChildMouseLeave(),n.allowMouse_=e},n._onMouseChangeHandler=function(){n.allowMouse_&&n._onMouseChangeHandlerRaf()},n._onMouseChangeHandlerRaf=function(){if(n.dimensionsCache_){var e=n.props.dispatcher.getMousePosition();if(e){var t=[],r=n.props.getHoverDistance();if(o.Children.forEach(n.state.children,function(o,i){if(o&&(void 0!==o.props.latLng||void 0!==o.props.lat||void 0!==o.props.lng)){var s=null!=o.key?o.key:i,a=n.props.distanceToMouse(n.dimensionsCache_[s],e,o.props);a<r&&t.push({key:s,dist:a,props:o.props})}}),t.length){t.sort(function(e,t){return e.dist-t.dist});var i=t[0].key,s=t[0].props;n.hoverKey_!==i&&(n._onChildMouseLeave(),n._onChildMouseEnter(i,s))}else n._onChildMouseLeave()}else n._onChildMouseLeave()}},n._getDimensions=function(e){return n.dimensionsCache_[e]},n.dimensionsCache_={},n.hoverKey_=null,n.hoverChildProps_=null,n.allowMouse_=!0,n.state=p({},n._getState(),{hoverKey:null}),n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(e,t){return!0===this.props.experimental?!f(this.props,e)||!f(m(this.state,["hoverKey"]),m(t,["hoverKey"])):!f(this.props,e)||!f(this.state,t)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var e=this,t=this.props.style||v;this.dimensionsCache_={};var n=o.Children.map(this.state.children,function(t,n){if(t){if(void 0===t.props.latLng&&void 0===t.props.lat&&void 0===t.props.lng)return o.cloneElement(t,{$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender});var r=void 0!==t.props.latLng?t.props.latLng:{lat:t.props.lat,lng:t.props.lng},i=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(r):e.props.geoService.fromLatLngToCenterPixel(r),s={left:i.x,top:i.y};if(void 0!==t.props.seLatLng||void 0!==t.props.seLat&&void 0!==t.props.seLng){var a=void 0!==t.props.seLatLng?t.props.seLatLng:{lat:t.props.seLat,lng:t.props.seLng},l=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(a):e.props.geoService.fromLatLngToCenterPixel(a);s.width=l.x-i.x,s.height=l.y-i.y}var u=e.props.geoService.fromLatLngToContainerPixel(r),h=null!=t.key?t.key:n;return e.dimensionsCache_[h]=p({x:u.x,y:u.y},r),o.createElement("div",{key:h,style:p({},M,s),className:t.props.$markerHolderClassName},o.cloneElement(t,{$hover:h===e.state.hoverKey,$getDimensions:e._getDimensions,$dimensionKey:h,$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender}))}});return o.createElement("div",{style:t},n)},t}(t.Component);y.propTypes={geoService:n.any,style:n.any,distanceToMouse:n.func,dispatcher:n.any,onChildClick:n.func,onChildMouseDown:n.func,onChildMouseLeave:n.func,onChildMouseEnter:n.func,getHoverDistance:n.func,insideMapPanes:n.bool,prerender:n.bool},y.defaultProps={insideMapPanes:!1,prerender:!1};var C={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function w(e){return o.createElement("div",{style:C},o.createElement(y,p({},e,{prerender:!0})))}var L,b,D,z=new Promise(function(e){D=e}),O=function(e,t){if(!e)return z;if(b)return b;e.libraries||(e.libraries=[]);var o=[].concat(e.libraries);if(t&&(0!==o.length&&o.includes("visualization")||o.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),"production"!=="production"&&Object.keys(e).indexOf("callback")>-1){var n='"callback" key in bootstrapURLKeys is not allowed,\n                      use onGoogleApiLoaded property instead';throw console.error(n),new Error(n)}if("undefined"==typeof window)throw new Error("google map cannot be loaded outside browser env");var r=e.key,i=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(o=i[n])>=0||(r[o]=e[o]);return r}(e,["key"]);return L||(L=new s.Loader(p({apiKey:r||""},i,{libraries:o}))),b=L.load().then(function(){return D(window.google.maps),window.google.maps}),D(b),b};function k(e,t,o){var n=o-t;return e===o?e:((e-t)%n+n)%n+t}var x=function(){function e(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t}return e.prototype.wrap=function(){return new e(this.lat,k(this.lng,-180,180))},e}();x.convert=function(e){return e instanceof x?e:Array.isArray(e)?new x(e[0],e[1]):"lng"in e&&"lat"in e?new x(e.lat,e.lng):e};var S=function(){function e(e,t,o){this.tileSize=e||512,this._minZoom=t||0,this._maxZoom=o||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new x(0,0),this.angle=0}var t,o=e.prototype;return o.zoomScale=function(e){return Math.pow(2,e)},o.scaleZoom=function(e){return Math.log(e)/Math.LN2},o.project=function(e,t){return new a(this.lngX(e.lng,t),this.latY(e.lat,t))},o.unproject=function(e,t){return new x(this.yLat(e.y,t),this.xLng(e.x,t))},o.lngX=function(e,t){return(180+e)*(t||this.worldSize)/360},o.latY=function(e,t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))*(t||this.worldSize)/360},o.xLng=function(e,t){return 360*e/(t||this.worldSize)-180},o.yLat=function(e,t){return 360/Math.PI*Math.atan(Math.exp((180-360*e/(t||this.worldSize))*Math.PI/180))-90},o.locationPoint=function(e){var t=this.project(e);return this.centerPoint._sub(this.point._sub(t)._rotate(this.angle))},o.pointLocation=function(e){var t=this.centerPoint._sub(e)._rotate(-this.angle);return this.unproject(this.point.sub(t))},(t=[{key:"minZoom",get:function(){return this._minZoom},set:function(e){this._minZoom=e,this.zoom=Math.max(this.zoom,e)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(e){this._maxZoom=e,this.zoom=Math.min(this.zoom,e)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new a(0,0)}},{key:"size",get:function(){return new a(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(e){this.angle=-k(e,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(e){var t=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom=t,this.scale=this.zoomScale(t),this.tileZoom=Math.floor(t),this.zoomFraction=t-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new a(this.x,this.y)}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}(),T=function(){function e(e){this.hasSize_=!1,this.hasView_=!1,this.transform_=new S(e||512)}var t=e.prototype;return t.setView=function(e,t,o){this.transform_.center=x.convert(e),this.transform_.zoom=+t,this.transform_.bearing=+o,this.hasView_=!0},t.setViewSize=function(e,t){this.transform_.width=e,this.transform_.height=t,this.hasSize_=!0},t.setMapCanvasProjection=function(e,t){this.maps_=e,this.mapCanvasProjection_=t},t.canProject=function(){return this.hasSize_&&this.hasView_},t.hasSize=function(){return this.hasSize_},t.fromLatLngToCenterPixel=function(e){return this.transform_.locationPoint(x.convert(e))},t.fromLatLngToDivPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(t)}return this.fromLatLngToCenterPixel(e)},t.fromLatLngToContainerPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(t)}var o=this.fromLatLngToCenterPixel(e);return o.x-=this.transform_.worldSize*Math.round(o.x/this.transform_.worldSize),o.x+=this.transform_.width/2,o.y+=this.transform_.height/2,o},t.fromContainerPixelToLatLng=function(e){if(this.mapCanvasProjection_){var t=this.mapCanvasProjection_.fromContainerPixelToLatLng(e);return{lat:t.lat(),lng:t.lng()}}var o=p({},e);o.x-=this.transform_.width/2,o.y-=this.transform_.height/2;var n=this.transform_.pointLocation(a.convert(o));return n.lng-=360*Math.round(n.lng/360),n},t.getWidth=function(){return this.transform_.width},t.getHeight=function(){return this.transform_.height},t.getZoom=function(){return this.transform_.zoom},t.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},t.getBounds=function(e,t){var o=e&&e[0]||0,n=e&&e[1]||0,r=e&&e[2]||0,i=e&&e[3]||0;if(this.getWidth()-n-i>0&&this.getHeight()-o-r>0){var s=this.transform_.pointLocation(a.convert({x:i-this.getWidth()/2,y:o-this.getHeight()/2})),p=this.transform_.pointLocation(a.convert({x:this.getWidth()/2-n,y:this.getHeight()/2-r})),l=[s.lat,s.lng,p.lat,p.lng,p.lat,s.lng,s.lat,p.lng];return t&&(l=l.map(function(e){return Math.round(e*t)/t})),l}return[0,0,0,0]},e}();function E(e){if(window.requestAnimationFrame)return window.requestAnimationFrame(e);var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)}var P=Math.log2?Math.log2:function(e){return Math.log(e)/Math.LN2};function A(e,t){return Object.keys(e).reduce(function(o,n){return t(e[n])&&(o[n]=e[n]),o},{})}var I=function(e){if(null!==e&&"object"==typeof e){if(0===Object.keys(e).length)return!0}else if(null==e||""===e)return!0;return!1},N=Object.prototype.toString;function Z(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"===N.call(e)}var j=null;function U(){if(j)return j;if("undefined"!=typeof navigator){var e=navigator.userAgent.indexOf("MSIE")>-1,t=navigator.userAgent.indexOf("Firefox")>-1,o=navigator.userAgent.toLowerCase().indexOf("op")>-1,n=navigator.userAgent.indexOf("Chrome")>-1,r=navigator.userAgent.indexOf("Safari")>-1;return n&&r&&(r=!1),n&&o&&(n=!1),j={isExplorer:e,isFirefox:t,isOpera:o,isChrome:n,isSafari:r}}return j={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var H=function(e){return Function.prototype.toString.call(e)};function K(e){if(!e||"object"!=typeof e)return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var o=t.constructor;return"function"==typeof o&&o instanceof o&&H(o)===H(Object)}function R(e,t,o,n){e.addEventListener(t,o,function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()?{capture:n,passive:!0}:n)}var B,G=!("undefined"==typeof window||!window.document||!window.document.createElement);B=G?window:"undefined"!=typeof self?self:void 0;var W,V="undefined"!=typeof document&&document.attachEvent,F=!1;if(G&&!V){var q=function(){var e=B.requestAnimationFrame||B.mozRequestAnimationFrame||B.webkitRequestAnimationFrame||function(e){return B.setTimeout(e,20)};return function(t){return e(t)}}(),$=(W=B.cancelAnimationFrame||B.mozCancelAnimationFrame||B.webkitCancelAnimationFrame||B.clearTimeout,function(e){return W(e)}),Y=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},X=function(e){var t=this;Y(this),this.__resizeRAF__&&$(this.__resizeRAF__),this.__resizeRAF__=q(function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(o){o.call(t,e)}))})},J=!1,Q="",ee="animationstart",te="Webkit Moz O ms".split(" "),oe="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(G){var ne=document.createElement("fakeelement");if(void 0!==ne.style.animationName&&(J=!0),!1===J)for(var re=0;re<te.length;re++)if(void 0!==ne.style[te[re]+"AnimationName"]){Q="-"+te[re].toLowerCase()+"-",ee=oe[re],J=!0;break}}var ie="resizeanim",se="@"+Q+"keyframes "+ie+" { from { opacity: 0; } to { opacity: 0; } } ",ae=Q+"animation: 1ms "+ie+"; "}var pe=void 0!==r.createPortal,le=pe?r.createPortal:r.unstable_renderSubtreeIntoContainer,ue=function(e){return K(e)?e:{lat:e[0],lng:e[1]}},he=function(e,t){return"production"!=="production"&&e<t&&console.warn("GoogleMap: minZoom option is less than recommended minZoom option for your map sizes.\noverrided to value "+t),t<e?e:t},ce=function(e){function t(t){var n;if((n=e.call(this,t)||this)._getMinZoom=function(){if(n.geoService_.getWidth()>0||n.geoService_.getHeight()>0){var e=Math.ceil(n.geoService_.getWidth()/256)+2,t=Math.ceil(n.geoService_.getHeight()/256)+2,o=Math.max(e,t);return Math.ceil(P(o))}return 3},n._computeMinZoom=function(e){return I(e)?n._getMinZoom():e},n._mapDomResizeCallback=function(){if(n.resetSizeOnIdle_=!0,n.maps_){var e=n.props.center||n.props.defaultCenter,t=n.map_.getCenter();n.maps_.event.trigger(n.map_,"resize"),n.map_.setCenter(n.props.resetBoundsOnResize?e:t)}},n._setLayers=function(e){e.forEach(function(e){n.layers_[e]=new n.maps_[e],n.layers_[e].setMap(n.map_)})},n._renderPortal=function(){return o.createElement(y,{experimental:n.props.experimental,onChildClick:n._onChildClick,onChildMouseDown:n._onChildMouseDown,onChildMouseEnter:n._onChildMouseEnter,onChildMouseLeave:n._onChildMouseLeave,geoService:n.geoService_,insideMapPanes:!0,distanceToMouse:n.props.distanceToMouse,getHoverDistance:n._getHoverDistance,dispatcher:n.markersDispatcher_})},n._initMap=function(){if(!n.initialized_){n.initialized_=!0;var e=ue(n.props.center||n.props.defaultCenter);n.geoService_.setView(e,n.props.zoom||n.props.defaultZoom,0),n._onBoundsChanged();var t=p({},n.props.apiKey&&{key:n.props.apiKey},n.props.bootstrapURLKeys);n.props.googleMapLoader(t,n.props.heatmapLibrary).then(function(e){if(n.mounted_){var t,o,i=n.geoService_.getCenter(),s={zoom:n.props.zoom||n.props.defaultZoom,center:new e.LatLng(i.lat,i.lng)};n.props.heatmap.positions&&(Object.assign(u(n),{heatmap:(t=e,o=n.props.heatmap,new t.visualization.HeatmapLayer({data:o.positions.reduce(function(e,o){var n=o.weight,r=void 0===n?1:n;return e.push({location:new t.LatLng(o.lat,o.lng),weight:r}),e},[])}))}),function(e,t){var o=t.options,n=void 0===o?{}:o;Object.keys(n).map(function(t){return e.set(t,n[t])})}(n.heatmap,n.props.heatmap));var a=A(e,K),l="function"==typeof n.props.options?n.props.options(a):n.props.options,h=!I(n.props.draggable)&&{draggable:n.props.draggable},c=n._computeMinZoom(l.minZoom);n.minZoom_=c;var d=p({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:c},l,s);n.defaultDraggableOption_=I(d.draggable)?n.defaultDraggableOption_:d.draggable;var m=p({},d,h);m.minZoom=he(m.minZoom,c);var g=new e.Map(r.findDOMNode(n.googleMapDom_),m);n.map_=g,n.maps_=e,n._setLayers(n.props.layerTypes);var _=e.version.match(/^3\.(\d+)\./),f=_&&Number(_[1]),v=u(n),M=Object.assign(new e.OverlayView,{onAdd:function(){var t="undefined"!=typeof screen?screen.width+"px":"2000px",o="undefined"!=typeof screen?screen.height+"px":"2000px",n=document.createElement("div");if(n.style.backgroundColor="transparent",n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.width=t,n.style.height=o,v.props.overlayViewDivStyle){var r=v.props.overlayViewDivStyle;"object"==typeof r&&Object.keys(r).forEach(function(e){n.style[e]=r[e]})}this.getPanes().overlayMouseTarget.appendChild(n),v.geoService_.setMapCanvasProjection(e,M.getProjection()),pe?v.setState({overlay:n}):le(v,v._renderPortal(),n,function(){return v.setState({overlay:n})})},onRemove:function(){var e=v.state.overlay;e&&!pe&&r.unmountComponentAtNode(e),v.setState({overlay:null})},draw:function(){if(v.updateCounter_++,v._onBoundsChanged(g,e,!v.props.debounced),v.googleApiLoadedCalled_||(v._onGoogleApiLoaded({map:g,maps:e,ref:v.googleMapDom_}),v.googleApiLoadedCalled_=!0),v.mouse_){var t=v.geoService_.fromContainerPixelToLatLng(v.mouse_);v.mouse_.lat=t.lat,v.mouse_.lng=t.lng}v._onChildMouseMove(),v.markersDispatcher_&&(v.markersDispatcher_.emit("kON_CHANGE"),v.fireMouseEventOnIdle_&&v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"))}});n.overlay_=M,M.setMap(g),n.props.heatmap.positions&&n.heatmap.setMap(g),n.props.onTilesLoaded&&e.event.addListener(g,"tilesloaded",function(){v._onTilesLoaded()}),e.event.addListener(g,"zoom_changed",function(){v.geoService_.getZoom()!==g.getZoom()&&(v.zoomAnimationInProgress_||(v.zoomAnimationInProgress_=!0,v._onZoomAnimationStart(g.zoom)),f<32)&&((new Date).getTime()-n.zoomControlClickTime_<300?E(function(){return E(function(){v.updateCounter_++,v._onBoundsChanged(g,e)})}):(v.updateCounter_++,v._onBoundsChanged(g,e)))}),e.event.addListener(g,"idle",function(){if(n.resetSizeOnIdle_){n._setViewSize();var t=n._computeMinZoom(l.minZoom);t!==n.minZoom_&&(n.minZoom_=t,g.setOptions({minZoom:t})),n.resetSizeOnIdle_=!1}v.zoomAnimationInProgress_&&(v.zoomAnimationInProgress_=!1,v._onZoomAnimationEnd(g.zoom)),v.updateCounter_++,v._onBoundsChanged(g,e),v.dragTime_=0,v.markersDispatcher_&&v.markersDispatcher_.emit("kON_CHANGE")}),e.event.addListener(g,"mouseover",function(){v.mouseInMap_=!0}),e.event.addListener(g,"click",function(){v.mouseInMap_=!0}),e.event.addListener(g,"mouseout",function(){v.mouseInMap_=!1,v.mouse_=null,v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")}),e.event.addListener(g,"drag",function(){v.dragTime_=(new Date).getTime(),v._onDrag(g)}),e.event.addListener(g,"dragend",function(){var t=e.event.addListener(g,"idle",function(){e.event.removeListener(t),v._onDragEnd(g)})}),e.event.addListener(g,"maptypeid_changed",function(){v._onMapTypeIdChange(g.getMapTypeId())})}}).catch(function(e){throw n._onGoogleApiLoaded({map:null,maps:null,ref:n.googleMapDom_}),console.error(e),e})}},n._onGoogleApiLoaded=function(){var e;n.props.onGoogleApiLoaded&&("production"!=="production"&&!0!==n.props.yesIWantToUseGoogleMapApiInternals&&console.warn("GoogleMap: Usage of internal api objects is dangerous and can cause a lot of issues.\nTo hide this warning add yesIWantToUseGoogleMapApiInternals={true} to <GoogleMap instance"),(e=n.props).onGoogleApiLoaded.apply(e,arguments))},n._getHoverDistance=function(){return n.props.hoverDistance},n._onDrag=function(){var e;return n.props.onDrag&&(e=n.props).onDrag.apply(e,arguments)},n._onDragEnd=function(){var e;return n.props.onDragEnd&&(e=n.props).onDragEnd.apply(e,arguments)},n._onMapTypeIdChange=function(){var e;return n.props.onMapTypeIdChange&&(e=n.props).onMapTypeIdChange.apply(e,arguments)},n._onZoomAnimationStart=function(){var e;return n.props.onZoomAnimationStart&&(e=n.props).onZoomAnimationStart.apply(e,arguments)},n._onZoomAnimationEnd=function(){var e;return n.props.onZoomAnimationEnd&&(e=n.props).onZoomAnimationEnd.apply(e,arguments)},n._onTilesLoaded=function(){return n.props.onTilesLoaded&&n.props.onTilesLoaded()},n._onChildClick=function(){var e;if(n.props.onChildClick)return(e=n.props).onChildClick.apply(e,arguments)},n._onChildMouseDown=function(e,t){n.childMouseDownArgs_=[e,t],n.props.onChildMouseDown&&n.props.onChildMouseDown(e,t,p({},n.mouse_))},n._onChildMouseUp=function(){var e;n.childMouseDownArgs_&&(n.props.onChildMouseUp&&(e=n.props).onChildMouseUp.apply(e,n.childMouseDownArgs_.concat([p({},n.mouse_)])),n.childMouseDownArgs_=null,n.childMouseUpTime_=(new Date).getTime())},n._onChildMouseMove=function(){var e;n.childMouseDownArgs_&&n.props.onChildMouseMove&&(e=n.props).onChildMouseMove.apply(e,n.childMouseDownArgs_.concat([p({},n.mouse_)]))},n._onChildMouseEnter=function(){var e;if(n.props.onChildMouseEnter)return(e=n.props).onChildMouseEnter.apply(e,arguments)},n._onChildMouseLeave=function(){var e;if(n.props.onChildMouseLeave)return(e=n.props).onChildMouseLeave.apply(e,arguments)},n._setViewSize=function(){if(n.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)n.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var e=r.findDOMNode(n.googleMapDom_);n.geoService_.setViewSize(e.clientWidth,e.clientHeight)}n._onBoundsChanged()}},n._onWindowResize=function(){n.resetSizeOnIdle_=!0},n._onMapMouseMove=function(e){if(n.mouseInMap_){var t=(new Date).getTime();t-n.mouseMoveTime_>50&&(n.boundingRect_=e.currentTarget.getBoundingClientRect()),n.mouseMoveTime_=t;var o=e.clientX-n.boundingRect_.left,r=e.clientY-n.boundingRect_.top;n.mouse_||(n.mouse_={x:0,y:0,lat:0,lng:0}),n.mouse_.x=o,n.mouse_.y=r;var i=n.geoService_.fromContainerPixelToLatLng(n.mouse_);n.mouse_.lat=i.lat,n.mouse_.lng=i.lng,n._onChildMouseMove(),t-n.dragTime_<100?n.fireMouseEventOnIdle_=!0:(n.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),n.fireMouseEventOnIdle_=!1)}},n._onClick=function(){var e;return n.props.onClick&&!n.childMouseDownArgs_&&(new Date).getTime()-n.childMouseUpTime_>300&&0===n.dragTime_&&(e=n.props).onClick.apply(e,arguments)},n._onMapClick=function(e){n.markersDispatcher_&&(n._onMapMouseMove(e),(new Date).getTime()-n.dragTime_>100&&(n.mouse_&&n._onClick(p({},n.mouse_,{event:e})),n.markersDispatcher_.emit("kON_CLICK",e)))},n._onMapMouseDownNative=function(e){n.mouseInMap_&&n._onMapMouseDown(e)},n._onMapMouseDown=function(e){n.markersDispatcher_&&(new Date).getTime()-n.dragTime_>100&&(n._onMapMouseMove(e),n.markersDispatcher_.emit("kON_MDOWN",e))},n._onMapMouseDownCapture=function(){U().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._onKeyDownCapture=function(){U().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._isCenterDefined=function(e){return e&&(K(e)&&Z(e.lat)&&Z(e.lng)||2===e.length&&Z(e[0])&&Z(e[1]))},n._onBoundsChanged=function(e,t,o){if(e){var r=e.getCenter();n.geoService_.setView([r.lat(),r.lng()],e.getZoom(),0)}if((n.props.onChange||n.props.onBoundsChange)&&n.geoService_.canProject()){var i=n.geoService_.getZoom(),s=n.geoService_.getBounds(),a=n.geoService_.getCenter();if(!function(e,t,o){if(e&&t){for(var n=0;n!==e.length;++n)if(Math.abs(e[n]-t[n])>1e-5)return!1;return!0}return!1}(s,n.prevBounds_)&&!1!==o){var l=n.geoService_.getBounds(n.props.margin);n.props.onBoundsChange&&n.props.onBoundsChange(n.centerIsObject_?p({},a):[a.lat,a.lng],i,s,l),n.props.onChange&&n.props.onChange({center:p({},a),zoom:i,bounds:{nw:{lat:s[0],lng:s[1]},se:{lat:s[2],lng:s[3]},sw:{lat:s[4],lng:s[5]},ne:{lat:s[6],lng:s[7]}},marginBounds:{nw:{lat:l[0],lng:l[1]},se:{lat:l[2],lng:l[3]},sw:{lat:l[4],lng:l[5]},ne:{lat:l[6],lng:l[7]}},size:n.geoService_.hasSize()?{width:n.geoService_.getWidth(),height:n.geoService_.getHeight()}:{width:0,height:0}}),n.prevBounds_=s}}},n._registerChild=function(e){n.googleMapDom_=e},n.mounted_=!1,n.initialized_=!1,n.googleApiLoadedCalled_=!1,n.map_=null,n.maps_=null,n.prevBounds_=null,n.heatmap=null,n.layers_={},n.mouse_=null,n.mouseMoveTime_=0,n.boundingRect_=null,n.mouseInMap_=!0,n.dragTime_=0,n.fireMouseEventOnIdle_=!1,n.updateCounter_=0,n.markersDispatcher_=new d(u(n)),n.geoService_=new T(256),n.centerIsObject_=K(n.props.center),n.minZoom_=3,n.defaultDraggableOption_=!0,n.zoomControlClickTime_=0,n.childMouseDownArgs_=null,n.childMouseUpTime_=0,n.googleMapDom_=null,"production"!=="production"&&(n.props.apiKey&&console.warn("GoogleMap: apiKey is deprecated, use bootstrapURLKeys={{key: YOUR_API_KEY}} instead."),n.props.onBoundsChange&&console.warn("GoogleMap: onBoundsChange is deprecated, use onChange({center, zoom, bounds, ...other}) instead."),I(n.props.center)&&I(n.props.defaultCenter)&&console.warn("GoogleMap: center or defaultCenter property must be defined"),I(n.props.zoom)&&I(n.props.defaultZoom)&&console.warn("GoogleMap: zoom or defaultZoom property must be defined")),n._isCenterDefined(n.props.center||n.props.defaultCenter)){var i=ue(n.props.center||n.props.defaultCenter);n.geoService_.setView(i,n.props.zoom||n.props.defaultZoom,0)}return n.zoomAnimationInProgress_=!1,n.state={overlay:null},n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.mounted_=!0,R(window,"resize",this._onWindowResize,!1),R(window,"keydown",this._onKeyDownCapture,!0);var t=r.findDOMNode(this.googleMapDom_);t&&R(t,"mousedown",this._onMapMouseDownNative,!0),R(window,"mouseup",this._onChildMouseUp,!1);var o=p({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(o,this.props.heatmapLibrary),setTimeout(function(){e._setViewSize(),e._isCenterDefined(e.props.center||e.props.defaultCenter)&&e._initMap()},0,this),this.props.resetBoundsOnResize&&function(e,t){if(void 0===e.parentNode){var o=document.createElement("div");e.parentNode=o}e=e.parentNode,V?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!F){var e=(se||"")+".resize-triggers { "+(ae||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),t.appendChild(o),F=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),Y(e),R(e,"scroll",X,!0),ee&&e.__resizeTriggers__.addEventListener(ee,function(t){t.animationName==ie&&Y(e)})),e.__resizeListeners__.push(t))}(t,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(e,t){return!f(m(this.props,["draggable"]),m(e,["draggable"]))||!f(this.state,t)},n.componentDidUpdate=function(e){var t=this;if("production"!=="production"&&(f(e.defaultCenter,this.props.defaultCenter)||console.warn("GoogleMap: defaultCenter prop changed. You can't change default props."),f(e.defaultZoom,this.props.defaultZoom)||console.warn("GoogleMap: defaultZoom prop changed. You can't change default props.")),!this._isCenterDefined(e.center)&&this._isCenterDefined(this.props.center)&&setTimeout(function(){return t._initMap()},0),this.map_){var o=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var n=ue(this.props.center),r=this._isCenterDefined(e.center)?ue(e.center):null;(!r||Math.abs(n.lat-r.lat)+Math.abs(n.lng-r.lng)>1e-5)&&Math.abs(n.lat-o.lat)+Math.abs(n.lng-o.lng)>1e-5&&this.map_.panTo({lat:n.lat,lng:n.lng})}if(I(this.props.zoom)||Math.abs(this.props.zoom-e.zoom)>0&&this.map_.setZoom(this.props.zoom),!I(e.draggable)&&I(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):f(e.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!I(this.props.options)&&!f(e.options,this.props.options)){var i=A(this.maps_,K),s="function"==typeof this.props.options?this.props.options(i):this.props.options;if("minZoom"in(s=m(s,["zoom","center","draggable"]))){var a=this._computeMinZoom(s.minZoom);s.minZoom=he(s.minZoom,a)}this.map_.setOptions(s)}f(this.props.layerTypes,e.layerTypes)||(Object.keys(this.layers_).forEach(function(e){t.layers_[e].setMap(null),delete t.layers_[e]}),this._setLayers(this.props.layerTypes)),this.heatmap&&!f(this.props.heatmap.positions,e.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map(function(e){return{location:new t.maps_.LatLng(e.lat,e.lng),weight:e.weight}})),this.heatmap&&!f(this.props.heatmap.options,e.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach(function(e){t.heatmap.set(e,t.props.heatmap.options[e])})}this.markersDispatcher_.emit("kON_CHANGE"),f(this.props.hoverDistance,e.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var e,t,o=r.findDOMNode(this.googleMapDom_);o&&o.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(t=this._mapDomResizeCallback,e=(e=o).parentNode,V?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",X),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var e=this.state.overlay,t=e?null:o.createElement(w,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return o.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},o.createElement(c,{registerChild:this._registerChild}),pe&&e&&le(this._renderPortal(),e),t)},t}(t.Component);function de(e){var t=e.lng,o=Math.sin(e.lat*Math.PI/180),n=t/360+.5,r=.5-.25*Math.log((1+o)/(1-o))/Math.PI;return{x:n,y:r=r<0?0:r>1?1:r}}function me(e){var t=e.x,o=Math.PI-2*Math.PI*e.y;return{lat:180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o))),lng:360*t-180}}function ge(e,t,o,n){var r=de(e),i=de(t),s=r.x<i.x?i.x-r.x:1-r.x+i.x,a=i.y-r.y;if(s<=0&&a<=0)return null;var p=P(o/256/Math.abs(s)),l=P(n/256/Math.abs(a)),u=Math.floor(1e-9+Math.min(p,l)),h={x:r.x<i.x?.5*(r.x+i.x):r.x+i.x-1>0?.5*(r.x+i.x-1):.5*(1+r.x+i.x),y:.5*(r.y+i.y)},c=Math.pow(2,u),d=o/c/256/2,m=n/c/256/2,g=me({x:h.x-d,y:h.y-m}),_=me({x:h.x+d,y:h.y+m});return{center:me(h),zoom:u,newBounds:{nw:g,se:_}}}function _e(e){var t=e.ne,o=e.sw;return{nw:{lat:t.lat,lng:o.lng},se:{lat:o.lat,lng:t.lng}}}function fe(e){var t=e.nw,o=e.se;return{ne:{lat:t.lat,lng:o.lng},sw:{lat:o.lat,lng:t.lng}}}ce.propTypes={apiKey:n.string,bootstrapURLKeys:n.any,defaultCenter:n.oneOfType([n.array,n.shape({lat:n.number,lng:n.number})]),center:n.oneOfType([n.array,n.shape({lat:n.number,lng:n.number})]),defaultZoom:n.number,zoom:n.number,onBoundsChange:n.func,onChange:n.func,onClick:n.func,onChildClick:n.func,onChildMouseDown:n.func,onChildMouseUp:n.func,onChildMouseMove:n.func,onChildMouseEnter:n.func,onChildMouseLeave:n.func,onZoomAnimationStart:n.func,onZoomAnimationEnd:n.func,onDrag:n.func,onDragEnd:n.func,onMapTypeIdChange:n.func,onTilesLoaded:n.func,options:n.any,distanceToMouse:n.func,hoverDistance:n.number,debounced:n.bool,margin:n.array,googleMapLoader:n.any,onGoogleApiLoaded:n.func,yesIWantToUseGoogleMapApiInternals:n.bool,draggable:n.bool,style:n.any,resetBoundsOnResize:n.bool,layerTypes:n.arrayOf(n.string),shouldUnregisterMapOnUnmount:n.bool},ce.defaultProps={distanceToMouse:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:O,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},ce.googleMapLoader=O,Object.assign(ce,{convertNeSwToNwSe:_e,convertNwSeToNeSw:fe,fitBounds:function(e,t){var o,n=e.nw,r=e.se,i=e.ne,s=e.sw,a=t.width,l=t.height;if(n&&r)o=ge(n,r,a,l);else{var u=_e({ne:i,sw:s});o=ge(u.nw,u.se,a,l)}return p({},o,{newBounds:p({},o.newBounds,fe(o.newBounds))})},meters2ScreenPixels:function(e,t,o){var n=function(e,t){var o=function(e,t){var o,n=t.lat,r=t.lng,i=(o=n*Math.PI/180,{metersPerLatDegree:111132.92-559.82*Math.cos(2*o)+1.175*Math.cos(4*o)-.0023*Math.cos(6*o),metersPerLngDegree:111412.84*Math.cos(o)-93.5*Math.cos(3*o)+.118*Math.cos(5*o)}),s=.5*e/i.metersPerLatDegree,a=.5*e/i.metersPerLngDegree;return{nw:{lat:n-s,lng:r-a},se:{lat:n+s,lng:r+a}}}(e,{lat:t.lat,lng:t.lng}),n=o.se,r=de(o.nw),i=de(n);return{w:Math.abs(i.x-r.x),h:Math.abs(i.y-r.y)}}(e,{lat:t.lat,lng:t.lng}),r=n.w,i=n.h,s=Math.pow(2,o);return{w:r*s*256,h:i*s*256}},tile2LatLng:function(e,t){var o=e.x,n=Math.PI-2*Math.PI*e.y/Math.pow(2,t);return{lat:180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n))),lng:o/Math.pow(2,t)*360-180}},latLng2Tile:function(e,t){var o=de({lat:e.lat,lng:e.lng}),n=Math.pow(2,t);return{x:Math.floor(o.x*n),y:Math.floor(o.y*n)}},getTilesIds:function(e,t){for(var o=e.from,n=e.to,r=Math.pow(2,t),i=[],s=o.x;s!==(n.x+1)%r;s=(s+1)%r)for(var a=o.y;a!==(n.y+1)%r;a=(a+1)%r)i.push([t,s,a]);return i}}),module.exports=ce;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.loader={}))}(this,(function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,f={f:s&&!u.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:u},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h={}.toString,p=function(t){return h.call(t).slice(8,-1)},d="".split,v=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==p(t)?d.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},y=function(t){return v(g(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!m(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!m(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,S=function(t,e){return w.call(t,e)},j=i.document,E=m(j)&&m(j.createElement),O=function(t){return E?j.createElement(t):{}},T=!a&&!c((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),k=Object.getOwnPropertyDescriptor,L={f:a?k:function(t,e){if(t=y(t),e=b(e,!0),T)try{return k(t,e)}catch(t){}if(S(t,e))return l(!f.f.call(t,e),t[e])}},M=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,x={f:a?P:function(t,e,n){if(M(t),e=b(e,!0),M(n),T)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},C=a?function(t,e,n){return x.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},A=function(t,e){try{C(i,t,e)}catch(n){i[t]=e}return e},I="__core-js_shared__",_=i[I]||A(I,{}),N=Function.toString;"function"!=typeof _.inspectSource&&(_.inspectSource=function(t){return N.call(t)});var R,D,F,G,K=_.inspectSource,V=i.WeakMap,B="function"==typeof V&&/native code/.test(K(V)),U=r((function(t){(t.exports=function(t,e){return _[t]||(_[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),z=0,H=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++z+H).toString(36)},W=U("keys"),J={},Y=i.WeakMap;if(B){var Q=_.state||(_.state=new Y),X=Q.get,Z=Q.has,$=Q.set;R=function(t,e){return e.facade=t,$.call(Q,t,e),e},D=function(t){return X.call(Q,t)||{}},F=function(t){return Z.call(Q,t)}}else{var tt=W[G="state"]||(W[G]=q(G));J[tt]=!0,R=function(t,e){return e.facade=t,C(t,tt,e),e},D=function(t){return S(t,tt)?t[tt]:{}},F=function(t){return S(t,tt)}}var et,nt,rt={set:R,get:D,has:F,enforce:function(t){return F(t)?D(t):R(t,{})},getterFor:function(t){return function(e){var n;if(!m(e)||(n=D(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},ot=r((function(t){var e=rt.get,n=rt.enforce,r=String(String).split("String");(t.exports=function(t,e,o,c){var a,u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof o&&("string"!=typeof e||S(o,"name")||C(o,"name",e),(a=n(o)).source||(a.source=r.join("string"==typeof e?e:""))),t!==i?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=o:C(t,e,o)):s?t[e]=o:A(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||K(this)}))})),it=i,ct=function(t){return"function"==typeof t?t:void 0},at=function(t,e){return arguments.length<2?ct(it[t])||ct(i[t]):it[t]&&it[t][e]||i[t]&&i[t][e]},ut=Math.ceil,st=Math.floor,ft=function(t){return isNaN(t=+t)?0:(t>0?st:ut)(t)},lt=Math.min,ht=function(t){return t>0?lt(ft(t),9007199254740991):0},pt=Math.max,dt=Math.min,vt=function(t){return function(e,n,r){var o,i=y(e),c=ht(i.length),a=function(t,e){var n=ft(t);return n<0?pt(n+e,0):dt(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},gt={includes:vt(!0),indexOf:vt(!1)}.indexOf,yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),mt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=y(t),o=0,i=[];for(n in r)!S(J,n)&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~gt(i,n)||i.push(n));return i}(t,yt)}},bt={f:Object.getOwnPropertySymbols},wt=at("Reflect","ownKeys")||function(t){var e=mt.f(M(t)),n=bt.f;return n?e.concat(n(t)):e},St=function(t,e){for(var n=wt(e),r=x.f,o=L.f,i=0;i<n.length;i++){var c=n[i];S(t,c)||r(t,c,o(e,c))}},jt=/#|\.prototype\./,Et=function(t,e){var n=Tt[Ot(t)];return n==Lt||n!=kt&&("function"==typeof e?c(e):!!e)},Ot=Et.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},Tt=Et.data={},kt=Et.NATIVE="N",Lt=Et.POLYFILL="P",Mt=Et,Pt=L.f,xt=function(t,e){var n,r,o,c,a,u=t.target,s=t.global,f=t.stat;if(n=s?i:f?i[u]||A(u,{}):(i[u]||{}).prototype)for(r in e){if(c=e[r],o=t.noTargetGet?(a=Pt(n,r))&&a.value:n[r],!Mt(s?r:u+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof c==typeof o)continue;St(c,o)}(t.sham||o&&o.sham)&&C(c,"sham",!0),ot(n,r,c,t)}},Ct=Array.isArray||function(t){return"Array"==p(t)},At=function(t){return Object(g(t))},It=function(t,e,n){var r=b(e);r in t?x.f(t,r,l(0,n)):t[r]=n},_t="process"==p(i.process),Nt=at("navigator","userAgent")||"",Rt=i.process,Dt=Rt&&Rt.versions,Ft=Dt&&Dt.v8;Ft?nt=(et=Ft.split("."))[0]+et[1]:Nt&&(!(et=Nt.match(/Edge\/(\d+)/))||et[1]>=74)&&(et=Nt.match(/Chrome\/(\d+)/))&&(nt=et[1]);var Gt,Kt=nt&&+nt,Vt=!!Object.getOwnPropertySymbols&&!c((function(){return!Symbol.sham&&(_t?38===Kt:Kt>37&&Kt<41)})),Bt=Vt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ut=U("wks"),zt=i.Symbol,Ht=Bt?zt:zt&&zt.withoutSetter||q,qt=function(t){return S(Ut,t)&&(Vt||"string"==typeof Ut[t])||(Vt&&S(zt,t)?Ut[t]=zt[t]:Ut[t]=Ht("Symbol."+t)),Ut[t]},Wt=qt("species"),Jt=function(t,e){var n;return Ct(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Ct(n.prototype)?m(n)&&null===(n=n[Wt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Yt=qt("species"),Qt=qt("isConcatSpreadable"),Xt=9007199254740991,Zt="Maximum allowed index exceeded",$t=Kt>=51||!c((function(){var t=[];return t[Qt]=!1,t.concat()[0]!==t})),te=(Gt="concat",Kt>=51||!c((function(){var t=[];return(t.constructor={})[Yt]=function(){return{foo:1}},1!==t[Gt](Boolean).foo}))),ee=function(t){if(!m(t))return!1;var e=t[Qt];return void 0!==e?!!e:Ct(t)};xt({target:"Array",proto:!0,forced:!$t||!te},{concat:function(t){var e,n,r,o,i,c=At(this),a=Jt(c,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if(ee(i=-1===e?c:arguments[e])){if(u+(o=ht(i.length))>Xt)throw TypeError(Zt);for(n=0;n<o;n++,u++)n in i&&It(a,u,i[n])}else{if(u>=Xt)throw TypeError(Zt);It(a,u++,i)}return a.length=u,a}});var ne=function(t,e){var n=[][t];return!!n&&c((function(){n.call(null,e||function(){throw 1},1)}))},re=[].join,oe=v!=Object,ie=ne("join",",");xt({target:"Array",proto:!0,forced:oe||!ie},{join:function(t){return re.call(y(this),void 0===t?",":t)}});var ce=i.Promise,ae=x.f,ue=qt("toStringTag"),se=qt("species"),fe=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},le={},he=qt("iterator"),pe=Array.prototype,de=function(t,e,n){if(fe(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},ve={};ve[qt("toStringTag")]="z";var ge="[object z]"===String(ve),ye=qt("toStringTag"),me="Arguments"==p(function(){return arguments}()),be=ge?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ye))?n:me?p(e):"Object"==(r=p(e))&&"function"==typeof e.callee?"Arguments":r},we=qt("iterator"),Se=function(t){var e=t.return;if(void 0!==e)return M(e.call(t)).value},je=function(t,e){this.stopped=t,this.result=e},Ee=function(t,e,n){var r,o,i,c,a,u,s,f,l=n&&n.that,h=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),d=!(!n||!n.INTERRUPTED),v=de(e,l,1+h+d),g=function(t){return r&&Se(r),new je(!0,t)},y=function(t){return h?(M(t),d?v(t[0],t[1],g):v(t[0],t[1])):d?v(t,g):v(t)};if(p)r=t;else{if("function"!=typeof(o=function(t){if(null!=t)return t[we]||t["@@iterator"]||le[be(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(f=o)&&(le.Array===f||pe[he]===f)){for(i=0,c=ht(t.length);c>i;i++)if((a=y(t[i]))&&a instanceof je)return a;return new je(!1)}r=o.call(t)}for(u=r.next;!(s=u.call(r)).done;){try{a=y(s.value)}catch(t){throw Se(r),t}if("object"==typeof a&&a&&a instanceof je)return a}return new je(!1)},Oe=qt("iterator"),Te=!1;try{var ke=0,Le={next:function(){return{done:!!ke++}},return:function(){Te=!0}};Le[Oe]=function(){return this},Array.from(Le,(function(){throw 2}))}catch(t){}var Me,Pe,xe,Ce=qt("species"),Ae=at("document","documentElement"),Ie=/(iphone|ipod|ipad).*applewebkit/i.test(Nt),_e=i.location,Ne=i.setImmediate,Re=i.clearImmediate,De=i.process,Fe=i.MessageChannel,Ge=i.Dispatch,Ke=0,Ve={},Be="onreadystatechange",Ue=function(t){if(Ve.hasOwnProperty(t)){var e=Ve[t];delete Ve[t],e()}},ze=function(t){return function(){Ue(t)}},He=function(t){Ue(t.data)},qe=function(t){i.postMessage(t+"",_e.protocol+"//"+_e.host)};Ne&&Re||(Ne=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Ve[++Ke]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Me(Ke),Ke},Re=function(t){delete Ve[t]},_t?Me=function(t){De.nextTick(ze(t))}:Ge&&Ge.now?Me=function(t){Ge.now(ze(t))}:Fe&&!Ie?(xe=(Pe=new Fe).port2,Pe.port1.onmessage=He,Me=de(xe.postMessage,xe,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts&&_e&&"file:"!==_e.protocol&&!c(qe)?(Me=qe,i.addEventListener("message",He,!1)):Me=Be in O("script")?function(t){Ae.appendChild(O("script")).onreadystatechange=function(){Ae.removeChild(this),Ue(t)}}:function(t){setTimeout(ze(t),0)});var We,Je,Ye,Qe,Xe,Ze,$e,tn,en={set:Ne,clear:Re},nn=/web0s(?!.*chrome)/i.test(Nt),rn=L.f,on=en.set,cn=i.MutationObserver||i.WebKitMutationObserver,an=i.document,un=i.process,sn=i.Promise,fn=rn(i,"queueMicrotask"),ln=fn&&fn.value;ln||(We=function(){var t,e;for(_t&&(t=un.domain)&&t.exit();Je;){e=Je.fn,Je=Je.next;try{e()}catch(t){throw Je?Qe():Ye=void 0,t}}Ye=void 0,t&&t.enter()},Ie||_t||nn||!cn||!an?sn&&sn.resolve?($e=sn.resolve(void 0),tn=$e.then,Qe=function(){tn.call($e,We)}):Qe=_t?function(){un.nextTick(We)}:function(){on.call(i,We)}:(Xe=!0,Ze=an.createTextNode(""),new cn(We).observe(Ze,{characterData:!0}),Qe=function(){Ze.data=Xe=!Xe}));var hn,pn,dn,vn,gn,yn,mn,bn=ln||function(t){var e={fn:t,next:void 0};Ye&&(Ye.next=e),Je||(Je=e,Qe()),Ye=e},wn=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=fe(e),this.reject=fe(n)},Sn={f:function(t){return new wn(t)}},jn=function(t,e){if(M(t),m(e)&&e.constructor===t)return e;var n=Sn.f(t);return(0,n.resolve)(e),n.promise},En=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},On=en.set,Tn=qt("species"),kn="Promise",Ln=rt.get,Mn=rt.set,Pn=rt.getterFor(kn),xn=ce,Cn=i.TypeError,An=i.document,In=i.process,_n=at("fetch"),Nn=Sn.f,Rn=Nn,Dn=!!(An&&An.createEvent&&i.dispatchEvent),Fn="function"==typeof PromiseRejectionEvent,Gn="unhandledrejection",Kn=Mt(kn,(function(){if(!(K(xn)!==String(xn))){if(66===Kt)return!0;if(!_t&&!Fn)return!0}if(Kt>=51&&/native code/.test(xn))return!1;var t=xn.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[Tn]=e,!(t.then((function(){}))instanceof e)})),Vn=Kn||!function(t,e){if(!e&&!Te)return!1;var n=!1;try{var r={};r[Oe]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){xn.all(t).catch((function(){}))})),Bn=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},Un=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;bn((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var c,a,u,s=n[i++],f=o?s.ok:s.fail,l=s.resolve,h=s.reject,p=s.domain;try{f?(o||(2===t.rejection&&Wn(t),t.rejection=1),!0===f?c=r:(p&&p.enter(),c=f(r),p&&(p.exit(),u=!0)),c===s.promise?h(Cn("Promise-chain cycle")):(a=Bn(c))?a.call(c,l,h):l(c)):h(r)}catch(t){p&&!u&&p.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&Hn(t)}))}},zn=function(t,e,n){var r,o;Dn?((r=An.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),i.dispatchEvent(r)):r={promise:e,reason:n},!Fn&&(o=i["on"+t])?o(r):t===Gn&&function(t,e){var n=i.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Hn=function(t){On.call(i,(function(){var e,n=t.facade,r=t.value;if(qn(t)&&(e=En((function(){_t?In.emit("unhandledRejection",r,n):zn(Gn,n,r)})),t.rejection=_t||qn(t)?2:1,e.error))throw e.value}))},qn=function(t){return 1!==t.rejection&&!t.parent},Wn=function(t){On.call(i,(function(){var e=t.facade;_t?In.emit("rejectionHandled",e):zn("rejectionhandled",e,t.value)}))},Jn=function(t,e,n){return function(r){t(e,r,n)}},Yn=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,Un(t,!0))},Qn=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Cn("Promise can't be resolved itself");var r=Bn(e);r?bn((function(){var n={done:!1};try{r.call(e,Jn(Qn,n,t),Jn(Yn,n,t))}catch(e){Yn(n,e,t)}})):(t.value=e,t.state=1,Un(t,!1))}catch(e){Yn({done:!1},e,t)}}};Kn&&(xn=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,xn,kn),fe(t),hn.call(this);var e=Ln(this);try{t(Jn(Qn,e),Jn(Yn,e))}catch(t){Yn(e,t)}},(hn=function(t){Mn(this,{type:kn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)ot(t,r,e[r],n);return t}(xn.prototype,{then:function(t,e){var n,r,o,i=Pn(this),c=Nn((n=xn,void 0===(o=M(this).constructor)||null==(r=M(o)[Ce])?n:fe(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=_t?In.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&Un(i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),pn=function(){var t=new hn,e=Ln(t);this.promise=t,this.resolve=Jn(Qn,e),this.reject=Jn(Yn,e)},Sn.f=Nn=function(t){return t===xn||t===dn?new pn(t):Rn(t)},"function"==typeof ce&&(vn=ce.prototype.then,ot(ce.prototype,"then",(function(t,e){var n=this;return new xn((function(t,e){vn.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof _n&&xt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return jn(xn,_n.apply(i,arguments))}}))),xt({global:!0,wrap:!0,forced:Kn},{Promise:xn}),yn=kn,mn=!1,(gn=xn)&&!S(gn=mn?gn:gn.prototype,ue)&&ae(gn,ue,{configurable:!0,value:yn}),function(t){var e=at(t),n=x.f;a&&e&&!e[se]&&n(e,se,{configurable:!0,get:function(){return this}})}(kn),dn=at(kn),xt({target:kn,stat:!0,forced:Kn},{reject:function(t){var e=Nn(this);return e.reject.call(void 0,t),e.promise}}),xt({target:kn,stat:!0,forced:Kn},{resolve:function(t){return jn(this,t)}}),xt({target:kn,stat:!0,forced:Vn},{all:function(t){var e=this,n=Nn(e),r=n.resolve,o=n.reject,i=En((function(){var n=fe(e.resolve),i=[],c=0,a=1;Ee(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Nn(e),r=n.reject,o=En((function(){var o=fe(e.resolve);Ee(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var Xn=ge?{}.toString:function(){return"[object "+be(this)+"]"};ge||ot(Object.prototype,"toString",Xn,{unsafe:!0});var Zn=[].push,$n=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=7==t,a=5==t||i;return function(u,s,f,l){for(var h,p,d=At(u),g=v(d),y=de(s,f,3),m=ht(g.length),b=0,w=l||Jt,S=e?w(u,m):n||c?w(u,0):void 0;m>b;b++)if((a||b in g)&&(p=y(h=g[b],b,d),t))if(e)S[b]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:Zn.call(S,h)}else switch(t){case 4:return!1;case 7:Zn.call(S,h)}return i?-1:r||o?o:S}},tr={forEach:$n(0),map:$n(1),filter:$n(2),some:$n(3),every:$n(4),find:$n(5),findIndex:$n(6),filterOut:$n(7)}.forEach,er=ne("forEach")?[].forEach:function(t){return tr(this,t,arguments.length>1?arguments[1]:void 0)};for(var nr in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var rr=i[nr],or=rr&&rr.prototype;if(or&&or.forEach!==er)try{C(or,"forEach",er)}catch(t){or.forEach=er}}var ir="__googleMapsScriptId",cr=function(){function t(e){var n=e.apiKey,r=e.channel,o=e.client,i=e.id,c=void 0===i?ir:i,a=e.libraries,u=void 0===a?[]:a,s=e.language,f=e.region,l=e.version,h=e.mapIds,p=e.nonce,d=e.retries,v=void 0===d?3:d,g=e.url,y=void 0===g?"https://maps.googleapis.com/maps/api/js":g;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=l,this.apiKey=n,this.channel=r,this.client=o,this.id=c||ir,this.libraries=u,this.language=s,this.region=f,this.mapIds=h,this.nonce=p,this.retries=v,this.url=y,t.instance){if(!function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!=o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var c=i[o];if(!t(e[c],n[c]))return!1}return!0}return e!=e&&n!=n}(this.options,t.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(t.instance.options)));return t.instance}t.instance=this}var n,r,o;return n=t,(r=[{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}},{key:"createUrl",value:function(){var t=this.url;return t+="?callback=".concat(this.CALLBACK),this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),t}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var t=this;return new Promise((function(e,n){t.loadCallback((function(t){t?n(t):e()}))}))}},{key:"loadCallback",value:function(t){this.callbacks.push(t),this.execute()}},{key:"setScript",value:function(){if(document.getElementById(this.id))this.callback();else{var t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}}},{key:"deleteScript",value:function(){var t=document.getElementById(this.id);t&&t.remove()}},{key:"resetIfRetryingFailed",value:function(){var t=this.retries+1;this.done&&!this.loading&&this.errors.length>=t&&(this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null)}},{key:"loadErrorCallback",value:function(t){var e=this;if(this.errors.push(t),this.errors.length<=this.retries){var n=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(n," ms.")),setTimeout((function(){e.deleteScript(),e.setScript()}),n)}else this.onerrorEvent=t,this.callback()}},{key:"setCallback",value:function(){window.__googleMapsCallback=this.callback.bind(this)}},{key:"callback",value:function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}])&&e(n.prototype,r),o&&e(n,o),t}();t.DEFAULT_ID=ir,t.Loader=cr,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tabs___ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Notifications___ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TooltipsPopovers___ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modal___ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ProgressBar___ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Carousel___ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Maps___ = __webpack_require__(1053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layout_AppHeader___ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Layout_AppSidebar___ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Layout_AppFooter___ = __webpack_require__(578);
// COMPONENTS
// Tabs
// Notifications
// Tooltips & Popovers
// Modals
// Progress Bar
// Carousel
// Maps
// Layout
var Components=function Components(_ref){var match=_ref.match;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Layout_AppHeader___["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-main'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Layout_AppSidebar___["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-main__outer'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-main__inner'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/tabs',component:__WEBPACK_IMPORTED_MODULE_2__Tabs___["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/notifications',component:__WEBPACK_IMPORTED_MODULE_3__Notifications___["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/tooltips-popovers',component:__WEBPACK_IMPORTED_MODULE_4__TooltipsPopovers___["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/progress-bar',component:__WEBPACK_IMPORTED_MODULE_6__ProgressBar___["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/carousel',component:__WEBPACK_IMPORTED_MODULE_7__Carousel___["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/modals',component:__WEBPACK_IMPORTED_MODULE_5__Modal___["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],{path:match.url+'/maps',component:__WEBPACK_IMPORTED_MODULE_8__Maps___["a" /* default */]})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Layout_AppFooter___["a" /* default */],null))));};/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(512);


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(43);

var ReactCurrentOwner = __webpack_require__(484);

var warning = __webpack_require__(465);
var canDefineProperty = __webpack_require__(483);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(485);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (false) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (false) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
       false ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
       false ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (false) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (false) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (false) {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(502);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(488);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(554);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(555);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(556);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(490);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(489);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2['default'];
exports.combineReducers = _combineReducers2['default'];
exports.bindActionCreators = _bindActionCreators2['default'];
exports.applyMiddleware = _applyMiddleware2['default'];
exports.compose = _compose2['default'];

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(466),
    getRawTag = __webpack_require__(520),
    objectToString = __webpack_require__(521);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(476);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(460);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _interopRequireWildcard = __webpack_require__(7);

exports.__esModule = true;

var _Provider = _interopRequireWildcard(__webpack_require__(548));

exports.Provider = _Provider.default;
exports.createProvider = _Provider.createProvider;

var _connectAdvanced = _interopRequireDefault(__webpack_require__(487));

exports.connectAdvanced = _connectAdvanced.default;

var _connect = _interopRequireDefault(__webpack_require__(551));

exports.connect = _connect.default;

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = warning;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var updateContent = exports.updateContent = function updateContent(reduxUid, content) {
  return {
    type: 'UPDATE_CONTENT',
    reduxUid: reduxUid,
    content: content
  };
};

var changeSubMenuVisibility = exports.changeSubMenuVisibility = function changeSubMenuVisibility(reduxUid, id, trace, subMenuVisibility) {
  return {
    type: 'CHANGE_SUBMENU_VISIBILITY',
    reduxUid: reduxUid,
    id: id,
    trace: trace,
    subMenuVisibility: subMenuVisibility
  };
};

var changeActiveLinkId = exports.changeActiveLinkId = function changeActiveLinkId(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'id',
    value: value
  };
};
var changeActiveLinkTo = exports.changeActiveLinkTo = function changeActiveLinkTo(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'to',
    value: value
  };
};
var changeActiveLinkLabel = exports.changeActiveLinkLabel = function changeActiveLinkLabel(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'label',
    value: value
  };
};
var changeActiveLinkFromLocation = exports.changeActiveLinkFromLocation = function changeActiveLinkFromLocation(reduxUid) {
  return {
    type: 'CHANGE_ACTIVE_LINK_FROM_LOCATION',
    reduxUid: reduxUid
  };
};

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(464),
    getPrototype = __webpack_require__(501),
    isObjectLike = __webpack_require__(463);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hamburgers__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hamburgers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hamburgers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppMobileMenu__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_ThemeOptions__ = __webpack_require__(175);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectDestructuringEmpty(obj){if(obj==null)throw new TypeError("Cannot destructure undefined");}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var HeaderLogo=function(_React$Component){_inherits(HeaderLogo,_React$Component);function HeaderLogo(props){_classCallCheck(this,HeaderLogo);var _this=_possibleConstructorReturn(this,(HeaderLogo.__proto__||Object.getPrototypeOf(HeaderLogo)).call(this,props));_this.toggleEnableClosedSidebar=function(){var _this$props=_this.props,enableClosedSidebar=_this$props.enableClosedSidebar,setEnableClosedSidebar=_this$props.setEnableClosedSidebar;setEnableClosedSidebar(!enableClosedSidebar);};_this.state={openLeft:false,openRight:false,relativeWidth:false,width:280,noTouchOpen:false,noTouchClose:false};_this.state={active:false,mobile:false,activeSecondaryMenuMobile:false};return _this;}_createClass(HeaderLogo,[{key:'render',value:function render(){var _this2=this;var enableClosedSidebar=this.props.enableClosedSidebar;_objectDestructuringEmpty(this.state);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-header__logo'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'logo-src'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header__pane ml-auto'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:this.toggleEnableClosedSidebar},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_hamburgers___default.a,{active:enableClosedSidebar,type:'elastic',onClick:function onClick(){return _this2.setState({active:!_this2.state.active});}})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AppMobileMenu__["a" /* default */],null));}}]);return HeaderLogo;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var mapStateToProps=function mapStateToProps(state){return{enableClosedSidebar:state.ThemeOptions.enableClosedSidebar,enableMobileMenu:state.ThemeOptions.enableMobileMenu,enableMobileMenuSmall:state.ThemeOptions.enableMobileMenuSmall};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{setEnableClosedSidebar:function setEnableClosedSidebar(enable){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__reducers_ThemeOptions__["b" /* setEnableClosedSidebar */])(enable));},setEnableMobileMenu:function setEnableMobileMenu(enable){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__reducers_ThemeOptions__["c" /* setEnableMobileMenu */])(enable));},setEnableMobileMenuSmall:function setEnableMobileMenuSmall(enable){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__reducers_ThemeOptions__["d" /* setEnableMobileMenuSmall */])(enable));}};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps,mapDispatchToProps)(HeaderLogo));

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Hamburger;

var _react = __webpack_require__(526);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Hamburger(_ref) {
  var active = _ref.active,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['active', 'type']);

  var cNames = (0, _classnames2.default)('hamburger', 'hamburger--' + type, { 'is-active': active });

  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: cNames }, props),
    _react2.default.createElement(
      'span',
      { className: 'hamburger-box' },
      _react2.default.createElement('span', { className: 'hamburger-inner' })
    )
  );
}

/* PropTypes */
Hamburger.propTypes = {
  active: _propTypes2.default.bool,
  type: _propTypes2.default.string
};

/* Default props */
Hamburger.defaultProps = {
  active: false,
  type: 'boring'
};

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__(461),
    _assign = __webpack_require__(43);

var ReactNoopUpdateQueue = __webpack_require__(482);

var canDefineProperty = __webpack_require__(483);
var emptyObject = __webpack_require__(510);
var invariant = __webpack_require__(458);
var lowPriorityWarning = __webpack_require__(528);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  false ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (false) {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var warning = __webpack_require__(465);

function warnNoop(publicInstance, callerName) {
  if (false) {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var canDefineProperty = false;
if (false) {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.storeShape = exports.subscriptionShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(5));

var subscriptionShape = _propTypes.default.shape({
  trySubscribe: _propTypes.default.func.isRequired,
  tryUnsubscribe: _propTypes.default.func.isRequired,
  notifyNestedSubs: _propTypes.default.func.isRequired,
  isSubscribed: _propTypes.default.func.isRequired
});

exports.subscriptionShape = subscriptionShape;

var storeShape = _propTypes.default.shape({
  subscribe: _propTypes.default.func.isRequired,
  dispatch: _propTypes.default.func.isRequired,
  getState: _propTypes.default.func.isRequired
});

exports.storeShape = storeShape;

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(7);

var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = connectAdvanced;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(9));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _extends2 = _interopRequireDefault(__webpack_require__(2));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(3));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(549));

var _invariant = _interopRequireDefault(__webpack_require__(30));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _reactIs = __webpack_require__(29);

var _Subscription = _interopRequireDefault(__webpack_require__(550));

var _PropTypes = __webpack_require__(486);

var prefixUnsafeLifecycleMethods = typeof _react.default.forwardRef !== "undefined";
var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);
  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    (0, _invariant.default)((0, _reactIs.isValidElementType)(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = (0, _extends2.default)({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      (0, _inheritsLoose2.default)(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        (0, _invariant.default)(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      }; // Note: this is renamed below to the UNSAFE_ version in React >=16.3.0


      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant.default)(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _Subscription.default(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = (0, _extends2.default)({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(_react.Component);

    if (prefixUnsafeLifecycleMethods) {
      // Use UNSAFE_ event name where supported
      Connect.prototype.UNSAFE_componentWillReceiveProps = Connect.prototype.componentWillReceiveProps;
      delete Connect.prototype.componentWillReceiveProps;
    }
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      // Use UNSAFE_ event name where supported
      var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillUpdate' : 'componentWillUpdate';

      Connect.prototype[eventName] = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.

          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }

          this.initSubscription();

          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return (0, _hoistNonReactStatics.default)(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = __webpack_require__(470);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(183);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2['default'])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2['default']] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = _interopRequireDefault(__webpack_require__(492));

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..


function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    


function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) (0, _verifyPlainObject.default)(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = verifyPlainObject;

var _isPlainObject = _interopRequireDefault(__webpack_require__(557));

var _warning = _interopRequireDefault(__webpack_require__(468));

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject.default)(value)) {
    (0, _warning.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(467);

var _Container = __webpack_require__(565);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapStateToProps = function mapStateToProps(store, ownProps) {
  return {
    items: store[ownProps.reduxStoreName].content[ownProps.reduxUid].filter(function (item) {
      return item.parentId === ownProps.itemId;
    })
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Container2.default);

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitSelected = exports.emitSelected = function emitSelected(reduxUid, e) {
  return {
    type: 'EMIT_SELECTED',
    reduxUid: reduxUid,
    event: e
  };
};

var updateListener = exports.updateListener = function updateListener(reduxUid, listener) {
  return {
    type: 'UPDATE_LISTENER',
    reduxUid: reduxUid,
    listener: listener
  };
};

exports.default = true;

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(503);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(43);

// -- Inlined from fbjs --

var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function _invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var warning = function(){};

if (false) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

// /-- Inlined from fbjs --

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(1));

var _withPolyfill = _interopRequireDefault(__webpack_require__(599));

var _classnames = _interopRequireDefault(__webpack_require__(4));

var _lodash = _interopRequireDefault(__webpack_require__(179));

var _propTypes = _interopRequireDefault(__webpack_require__(5));

var _ShowMore = _interopRequireDefault(__webpack_require__(639));

var _Tab = _interopRequireDefault(__webpack_require__(640));

var _TabPanel = _interopRequireDefault(__webpack_require__(641));

var _InkBar = _interopRequireDefault(__webpack_require__(642));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabPrefix = 'tab-';
var panelPrefix = 'panel-';

var Tabs = /*#__PURE__*/function (_Component) {
  _inherits(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      if (_this.tabsWrapper.current) {
        var currentIsCollapsed = _this.getIsCollapsed();

        _this.setState({
          blockWidth: _this.tabsWrapper.current.offsetWidth
        }, function () {
          var items = _this.props.items;
          var selectedTabKey = _this.state.selectedTabKey;

          var nextIsCollapsed = _this.getIsCollapsed();

          if (currentIsCollapsed && !nextIsCollapsed && selectedTabKey === -1 && items && items.length) {
            var firstTabKey = items[0].key || 0;

            _this.setState({
              selectedTabKey: firstTabKey
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTab", function (nextTabKey, evt) {
      var _this$props = _this.props,
          beforeChange = _this$props.beforeChange,
          onChange = _this$props.onChange;
      var selectedTabKey = _this.state.selectedTabKey;

      if (typeof beforeChange === 'function') {
        var beforeChangeRes = beforeChange({
          selectedTabKey: selectedTabKey,
          nextTabKey: nextTabKey
        });

        if (beforeChangeRes === false) {
          evt.preventDefault();
          return;
        }
      }

      var isCollapsed = _this.getIsCollapsed();

      if (isCollapsed && selectedTabKey === nextTabKey) {
        // hide on mobile
        _this.setState({
          selectedTabKey: -1
        });
      } else {
        // change active tab
        _this.setState({
          selectedTabKey: nextTabKey
        });
      }

      if (onChange) {
        onChange(nextTabKey);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocusTab", function (focusedTabKey) {
      return function () {
        return _this.setState({
          focusedTabKey: focusedTabKey
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurTab", function () {
      return _this.setState({
        focusedTabKey: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var focusedTabKey = _this.state.focusedTabKey;

      if (event.keyCode === 13 && focusedTabKey !== null) {
        _this.setState({
          selectedTabKey: focusedTabKey
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setTabsDimensions", function () {
      if (!_this.tabsWrapper.current) {
        // it shouldn't happen ever. Just a paranoic check
        return;
      } // initial wrapper width calculation


      var blockWidth = _this.tabsWrapper.current.offsetWidth; // calculate width and offset for each tab

      var tabsTotalWidth = 0;
      var tabDimensions = {};
      Object.keys(_this.tabRefs).forEach(function (key) {
        if (_this.tabRefs[key]) {
          var width = _this.tabRefs[key].tab.offsetWidth;
          tabDimensions[key.replace(tabPrefix, '')] = {
            width: width,
            offset: tabsTotalWidth
          };
          tabsTotalWidth += width;
        }
      });

      _this.setState({
        tabDimensions: tabDimensions,
        tabsTotalWidth: tabsTotalWidth,
        blockWidth: blockWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTabs", function () {
      var _this$props2 = _this.props,
          showMore = _this$props2.showMore,
          transform = _this$props2.transform,
          transformWidth = _this$props2.transformWidth,
          items = _this$props2.items,
          allowRemove = _this$props2.allowRemove,
          removeActiveOnly = _this$props2.removeActiveOnly,
          _onRemove = _this$props2.onRemove;
      var _this$state = _this.state,
          blockWidth = _this$state.blockWidth,
          tabsTotalWidth = _this$state.tabsTotalWidth,
          tabDimensions = _this$state.tabDimensions,
          showMoreWidth = _this$state.showMoreWidth;

      var selectedTabKey = _this.getSelectedTabKey();

      var collapsed = blockWidth && transform && blockWidth < transformWidth;
      var tabIndex = 0;
      var availableWidth = blockWidth - (tabsTotalWidth > blockWidth ? showMoreWidth : 0);
      return items.reduce(function (result, item, index) {
        var _item$key = item.key,
            key = _item$key === void 0 ? index : _item$key,
            title = item.title,
            content = item.content,
            getContent = item.getContent,
            disabled = item.disabled,
            tabClassName = item.tabClassName,
            panelClassName = item.panelClassName;
        var selected = selectedTabKey === key;
        var payload = {
          tabIndex: tabIndex,
          collapsed: collapsed,
          selected: selected,
          disabled: disabled,
          key: key
        };

        var tabPayload = _objectSpread(_objectSpread({}, payload), {}, {
          title: title,
          onRemove: function onRemove(evt) {
            if (typeof _onRemove === 'function') {
              _onRemove(key, evt);
            }
          },
          allowRemove: allowRemove && (!removeActiveOnly || selected),
          className: tabClassName
        });

        var panelPayload = _objectSpread(_objectSpread({}, payload), {}, {
          content: content,
          getContent: getContent,
          className: panelClassName
        });

        var tabWidth = tabDimensions[key] ? tabDimensions[key].width : 0;
        tabIndex += 1;
        /* eslint-disable no-param-reassign */

        if ( // don't need to `Show more` button
        !showMore || // initial call
        !blockWidth || // collapsed mode
        collapsed || // all tabs are fit into the block
        blockWidth > tabsTotalWidth || // current tab fit into the block
        availableWidth - tabWidth > 0) {
          result.tabsVisible.push(tabPayload);
        } else {
          result.tabsHidden.push(tabPayload);
          if (selected) result.isSelectedTabHidden = true;
        }
        /* eslint-enable no-param-reassign */


        result.panels[key] = panelPayload; // eslint-disable-line no-param-reassign

        availableWidth -= tabWidth;
        return result;
      }, {
        tabsVisible: [],
        tabsHidden: [],
        panels: {},
        isSelectedTabHidden: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTabProps", function (_ref) {
      var title = _ref.title,
          key = _ref.key,
          selected = _ref.selected,
          collapsed = _ref.collapsed,
          tabIndex = _ref.tabIndex,
          disabled = _ref.disabled,
          className = _ref.className,
          onRemove = _ref.onRemove,
          allowRemove = _ref.allowRemove;
      return {
        selected: selected,
        allowRemove: allowRemove,
        children: title,
        key: tabPrefix + key,
        id: tabPrefix + key,
        ref: function ref(e) {
          return _this.tabRefs[tabPrefix + key] = e;
        },
        originalKey: key,
        onClick: _this.onChangeTab,
        onFocus: _this.onFocusTab,
        onBlur: _this.onBlurTab,
        onRemove: onRemove,
        panelId: panelPrefix + key,
        classNames: _this.getClassNamesFor('tab', {
          selected: selected,
          collapsed: collapsed,
          tabIndex: tabIndex,
          disabled: disabled,
          className: className
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelProps", function (_ref2, isHidden) {
      var key = _ref2.key,
          content = _ref2.content,
          getContent = _ref2.getContent,
          className = _ref2.className;
      return {
        getContent: getContent,
        children: content,
        key: panelPrefix + key,
        id: panelPrefix + key,
        tabId: tabPrefix + key,
        classNames: _this.getClassNamesFor('panel', {
          className: className,
          isHidden: isHidden
        }),
        isHidden: isHidden
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getShowMoreProps", function (isShown, isSelectedTabHidden, showMoreLabel) {
      return {
        onShowMoreChanged: _this.showMoreChanged,
        isShown: isShown,
        label: showMoreLabel,
        hasChildSelected: isSelectedTabHidden
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getClassNamesFor", function (type, _ref3) {
      var selected = _ref3.selected,
          collapsed = _ref3.collapsed,
          tabIndex = _ref3.tabIndex,
          disabled = _ref3.disabled,
          _ref3$className = _ref3.className,
          className = _ref3$className === void 0 ? '' : _ref3$className,
          isHidden = _ref3.isHidden;
      var _this$props3 = _this.props,
          tabClass = _this$props3.tabClass,
          panelClass = _this$props3.panelClass;

      switch (type) {
        case 'tab':
          return (0, _classnames["default"])('RRT__tab', className, tabClass, {
            'RRT__tab--first': !tabIndex,
            'RRT__tab--selected': selected,
            'RRT__tab--disabled': disabled,
            'RRT__tab--collapsed': collapsed
          });

        case 'panel':
          return (0, _classnames["default"])('RRT__panel', className, panelClass, {
            'RRT__panel--hidden': isHidden
          });

        default:
          return '';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedTabKey", function () {
      var items = _this.props.items;
      var selectedTabKey = _this.state.selectedTabKey;

      if (typeof selectedTabKey === 'undefined') {
        if (!items[0]) {
          return undefined;
        }

        return items[0].key || 0;
      }

      return selectedTabKey;
    });

    _defineProperty(_assertThisInitialized(_this), "getIsCollapsed", function () {
      var _this$props4 = _this.props,
          transform = _this$props4.transform,
          transformWidth = _this$props4.transformWidth;
      var blockWidth = _this.state.blockWidth;
      return blockWidth && transform && blockWidth < transformWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "showMoreChanged", function (element) {
      if (!element) {
        return;
      }

      var showMoreWidth = _this.state.showMoreWidth;
      var offsetWidth = element.offsetWidth;

      if (showMoreWidth === offsetWidth) {
        return;
      }

      _this.setState({
        showMoreWidth: offsetWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getExpandedTabs", function (panels, selectedTabKey, isCollapsed) {
      var unmountOnExit = _this.props.unmountOnExit;

      if (isCollapsed) {
        return undefined;
      }

      if (!unmountOnExit) {
        // render all tabs if unmountOnExit === false (inactive are hidden)
        return Object.keys(panels).map(function (key) {
          return /*#__PURE__*/_react["default"].createElement(_TabPanel["default"], _this.getPanelProps(panels[key], "".concat(selectedTabKey) !== "".concat(key)));
        });
      }

      if (panels[selectedTabKey]) {
        // render only active tab if unmountOnExit === true
        return /*#__PURE__*/_react["default"].createElement(_TabPanel["default"], _this.getPanelProps(panels[selectedTabKey]));
      }

      return undefined;
    });

    _this.tabRefs = {};
    _this.tabsWrapper = /*#__PURE__*/(0, _react.createRef)();
    _this.selectedTabKeyProp = props.selectedTabKey;
    _this.state = {
      tabDimensions: {},
      blockWidth: 0,
      tabsTotalWidth: 0,
      showMoreWidth: 40,
      selectedTabKey: props.selectedTabKey,
      focusedTabKey: null
    };
    _this.onResizeThrottled = (0, _lodash["default"])(_this.onResize, props.resizeThrottle, {
      trailing: true
    });
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTabsDimensions();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$state2 = this.state,
          selectedTabKey = _this$state2.selectedTabKey,
          tabsTotalWidth = _this$state2.tabsTotalWidth,
          blockWidth = _this$state2.blockWidth,
          showMoreWidth = _this$state2.showMoreWidth;
      var _this$props5 = this.props,
          items = _this$props5.items,
          transform = _this$props5.transform,
          showMore = _this$props5.showMore,
          showInkBar = _this$props5.showInkBar,
          allowRemove = _this$props5.allowRemove,
          removeActiveOnly = _this$props5.removeActiveOnly,
          uid = _this$props5.uid;
      return items !== nextProps.items || nextProps.uid !== uid || nextProps.transform !== transform || nextProps.showMore !== showMore || nextProps.showInkBar !== showInkBar || nextProps.allowRemove !== allowRemove || nextProps.removeActiveOnly !== removeActiveOnly || nextState.tabsTotalWidth !== tabsTotalWidth || nextState.blockWidth !== blockWidth || nextState.showMoreWidth !== showMoreWidth || nextProps.selectedTabKey !== this.selectedTabKeyProp || nextState.selectedTabKey !== selectedTabKey;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          uid = _this$props6.uid,
          items = _this$props6.items,
          selectedTabKey = _this$props6.selectedTabKey;

      if (this.selectedTabKeyProp !== selectedTabKey) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selectedTabKey: selectedTabKey
        });
      }

      if (uid !== prevProps.uid || items.length !== prevProps.items.length || items.every(function (item, i) {
        return item.title !== prevProps.items[i].title;
      })) {
        this.setTabsDimensions();
      }

      this.selectedTabKeyProp = selectedTabKey;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props7 = this.props,
          showInkBar = _this$props7.showInkBar,
          containerClass = _this$props7.containerClass,
          tabsWrapperClass = _this$props7.tabsWrapperClass,
          showMore = _this$props7.showMore,
          transform = _this$props7.transform,
          showMoreLabel = _this$props7.showMoreLabel,
          unmountOnExit = _this$props7.unmountOnExit;
      var tabDimensions = this.state.tabDimensions;

      var _this$getTabs = this.getTabs(),
          tabsVisible = _this$getTabs.tabsVisible,
          tabsHidden = _this$getTabs.tabsHidden,
          panels = _this$getTabs.panels,
          isSelectedTabHidden = _this$getTabs.isSelectedTabHidden;

      var isCollapsed = this.getIsCollapsed();
      var selectedTabKey = this.getSelectedTabKey();
      var selectedTabDimensions = tabDimensions[selectedTabKey] || {};
      var containerClasses = (0, _classnames["default"])('RRT__container', containerClass);
      var tabsClasses = (0, _classnames["default"])('RRT__tabs', tabsWrapperClass, {
        RRT__accordion: isCollapsed
      });
      var handleResize = showMore || transform;
      return /*#__PURE__*/_react["default"].createElement(_withPolyfill["default"], {
        handleWidth: handleResize,
        handleHeight: false,
        targetRef: this.tabsWrapper,
        onResize: this.onResizeThrottled
      }, function () {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: containerClasses,
          ref: _this2.tabsWrapper,
          onKeyDown: _this2.onKeyDown
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: tabsClasses
        }, tabsVisible.reduce(function (result, tab) {
          result.push( /*#__PURE__*/_react["default"].createElement(_Tab["default"], _this2.getTabProps(tab)));

          if (isCollapsed && (!unmountOnExit || selectedTabKey === tab.key)) {
            result.push( /*#__PURE__*/_react["default"].createElement(_TabPanel["default"], _this2.getPanelProps(panels[tab.key], selectedTabKey !== tab.key)));
          }

          return result;
        }, []), !isCollapsed && /*#__PURE__*/_react["default"].createElement(_ShowMore["default"], _this2.getShowMoreProps(showMore, isSelectedTabHidden, showMoreLabel), tabsHidden.map(function (tab) {
          return /*#__PURE__*/_react["default"].createElement(_Tab["default"], _this2.getTabProps(tab));
        }))), showInkBar && !isCollapsed && !isSelectedTabHidden && /*#__PURE__*/_react["default"].createElement(_InkBar["default"], {
          left: selectedTabDimensions.offset || 0,
          width: selectedTabDimensions.width || 0
        }), _this2.getExpandedTabs(panels, selectedTabKey, isCollapsed));
      });
    }
  }]);

  return Tabs;
}(_react.Component);

exports["default"] = Tabs;
Tabs.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  // list of tabs
  items: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),

  /* eslint-enable react/no-unused-prop-types */
  // selected tab key
  selectedTabKey: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  // show 'X' and remove tab
  allowRemove: _propTypes["default"].bool,
  // show 'X' closing element only for active tab
  removeActiveOnly: _propTypes["default"].bool,
  // move tabs to the special `Show more` tab if they don't fit into a screen
  showMore: _propTypes["default"].bool,
  // materialUI-like rail under the selected tab
  showInkBar: _propTypes["default"].bool,
  // transform to the accordion on small screens
  transform: _propTypes["default"].bool,
  // tabs will be transformed to accodrion for screen sizes below `transformWidth`px
  transformWidth: _propTypes["default"].number,
  // beforeChange callback: return false to prevent tab change
  beforeChange: _propTypes["default"].func,
  // onChange active tab callback
  onChange: _propTypes["default"].func,
  // onRemove callback
  onRemove: _propTypes["default"].func,
  // frequency of onResize recalculation fires
  resizeThrottle: _propTypes["default"].number,
  // unmounts the tab when it gets inactive (unselected)
  unmountOnExit: _propTypes["default"].bool,
  // classnames
  containerClass: _propTypes["default"].string,
  tabsWrapperClass: _propTypes["default"].string,
  tabClass: _propTypes["default"].string,
  panelClass: _propTypes["default"].string,
  // optional external id. Force rerender when it changes
  // eslint-disable-next-line react/forbid-prop-types
  uid: _propTypes["default"].any,
  // labels
  showMoreLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Tabs.defaultProps = {
  items: [],
  uid: undefined,
  selectedTabKey: undefined,
  showMore: true,
  showInkBar: false,
  allowRemove: false,
  removeActiveOnly: false,
  transform: true,
  transformWidth: 800,
  resizeThrottle: 100,
  containerClass: undefined,
  tabsWrapperClass: undefined,
  tabClass: undefined,
  panelClass: undefined,
  showMoreLabel: '...',
  unmountOnExit: true,
  beforeChange: undefined,
  onChange: function onChange() {
    return null;
  },
  onRemove: function onRemove() {
    return null;
  }
};

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCABAAEADAREAAhEBAxEB/8QAhgAAAgMBAQEAAAAAAAAAAAAABAcDBQYIAgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFABAAAgEDAwMCBAUEAwAAAAAAAQIDEQQFACESMRMGQSJRQhQHYZEyIxVxgbEk0VIIEQEAAwACAgEEAgIDAAAAAAABABECIQMxEkFRIhME8JFh8YHBMv/aAAwDAQACEQMRAD8AduMyGKtOxbtGbS3kCyR27k0DrUskbEnkh6kfnrPadHsxrQq2/wA5hbXF3ZJH9Mf9R34RKWE78uJ49tvlU1AUUoNeuKznOvPn+v8AcC8j81tcX4vdSXV6Ult6w3NxGFEvcP6I1UjiXkHVhsBvrHXE9+Ktmq4fH0nP3kv3ZzmUumZJ2tMansgtYWKhgB8xHuYAfHrr2RW2e3tlBH5pcQSm57r9w7RxKdifxH/Y/H000D4iFZtMH5ZLnYIrfLXDRZFCRY3kX6kD9UevtZGNK1px66DtyJf0jOlLrX9zT4LIWlrbTW0lzci/DFblVDFIFU0bkaGvboTVdjt8NJzq/Msxn3H2fEH8ligjyEwtn+ohkNYZgeXNTuGrtWuouwrSSzqftLjIuMYifTred2XHCLtC7iYKe6X37nP9Ap1dTT466PqTlnZrkWQtjr4C5f6d2shGEYwMY5O65JLErQkkGh9B/fWIxp2Z4F/7/n1iQ+/nlC/zlv49asBFjo0jkpQ8rmReUrNQdQvFfz0IFwN6aiyu3WKKNd2I3P4n4fnohi04ln4d4rk/Jsh/rpS2jbi87CiV/D4nQ77a4IXX1OuXxHPkft7ZY3xOY24LXtsvejuPXkm7Cg9COo0rO0buO1gSgknjV5/JW2Kv+E0dnO0kGWlgNEkmanAuAahSoHIepH5svmBhTkf9w/ysxW+QjaJJIhx98MwAeNvVajYrTdSPQ6m7kNcSz9e3HMaxjuGEb2kSrHOP3O5QgUNJCqkdeNB+I1fT8Tkms8+z4kePxUsMlz3J3Fqhk5P3KrXiAxKEU1lT2uwaQ5nHHk1yuf8AuNlrlzWJ7uZhN8vBGIqB/QdNKWjiPyW0ym+lsb3ImCS6aJQ1FCo8jEn5PbsKL1OsVDghULyx7+IXtha+LSPaJFClgoSqghano++5rqNdXLAAqAeK/cmS9y0mOyl7L9FcSfSrztFEBaSoAL15KG9CRp3IWxK21PfiPcxltmLWVJWs7DMJBPGm4Qo4COQQUFRShbbfppotcwMeaJqfKoOVpE7rKsyMy/vtyk7exQtx9g9aAU2ptqb9m+GV/r8KTUWeYu4frr+Uu+Px9vG0ohUmSSR2If1O4VBSnWur82Cs4/a50nqeYfk/JbLG+JXmTvXCQiOSSU8wa92rAU9CeQG251uj7ViurX3VOUfEktcn51IsydqyuTIvaHyierAH+v6dT9imSdPpB1HTD4t45BacYLSOPfoqip/GukZ1fmV666hHjNnbzreQqtbeX2RhujcfQf8AOjzzdzNYohmLtMPbXBEVupYVHB1+YH3KwPqD6az2Jh1NcsochkL6Dy3Mpj+QtMhd2UmQtgA8VHhAndo225cI+tNhp2dWSPsKWXb3lzkrSTG20RuIZo/qTOAIgOFe1QOVaROHRwK6Hsx7ZQgdP7CaPbxNHkPtpb29tcCG9jfkUnvjPzeWW45DhLJ76AHpTj06aPONeXVyLNjMF/6GQYnAQre5INcXUtWsgW90SHcqgooXl0rrDOvbls+lRnRmrbnOOH8kvMZnEyyhfp2dBcI4rWIuCzD1DL1B07eBzXzH47HLcf1xk7qKOKdZjNYyGgMQ5NxpyBNPlKmtdcs81Ov72cT5jstiEnkdMq0Mb/qiZmoVApSMMNqfhpnqz1teJFk/LcTb3ccuPlkei+4hWYzUFOKg+5n2600OutXiB+T1EZFdY7NxXWCOVtIxkM3dTyF2fdjIAnZNCOPbACk1+I+OrM5oCcve/ZWOWDA5G3sRfrho38iNoIyyPSNmDAhCxYgKR1YDVOaC/mRJcQvjn3EyFr9zMv5XlLWa6t80DFcW0akdm2QjslA5oWj4Ls3xNNSbyuQHklX41Cpm/vJ5VF5B5DcyxzGezjjSKFzWhAFSVB3pUnRdIhzDqipgYcTPkyLS04yTt7UtwT3HIFeKgA9NUhfMGlaJr/tt53DbIPH8y/ZMTdqzmkNAtNuy5PRl9Ceo21J+x0c+xKejur7deYyJ7S04CSOYSu5AigCh2kf4A1p/f0Gphfll5pDzMT5Z5L/HX62ONuVu81FR727tivZs1qCkMNKcnJH7j+nTbfVHR1r9ycSHv7S6GMTEZXB+d2tna5i1vBfYuBHgaN1huolFCXqlFkic+8PQGvX46LtvLx4kiV8Rhr515BBcW8FoDeW8i0Rpl7UjcdiBuV2Hr66X7v1ges48GcMEndjYRuNwULOdvhUD/OrHHEM7KZ5v5JGk7h2MnFo1O9WcVGhwcw9tcyfC32bxKy5myRXiSZbW4ndt5Gb38BxKsF47Mw26eunVXMVlbuD5O0TJ/WZOObuGF6yWfINMsDEsJA1KyxxsePLcj10LrmqhU7tW2BpnpxamCN2IC0SRnYbH1IB6aH8ZdzHsaohni2Ptzb3V7eSqkXJbe1lYUrcP7iQfgiD3H0rptcQ+rrNC64PA/wCZf2b+RWd1BlRNLDeYuP6d7mOQh4FVq2/Hj8lH6dDoU4m66tZ8/EYH2/8Av1ewz/x/lPdu0lnKrl6KTCGIHGWOgDRoRsV3GheuyyDju5piP5WruFVZJHchVTpUk066JULigFqWObgaGSLk1Sp4bdBQAUGk9OrWVd/XWSX3jYngw+QxkCNHkMvPAltcvGWSK3KESydDtXj/AJ9NULQ8XUX+PQBXC/3Cp8ZjsPFDLeQBA9LOe6hJQQXzKWjuIWO/CQAh1bbl+GsTgSWYHr3WwF+f5/mYTN20Us0ctlH27mZ+1cWSLT90tQNGvpzruno3TbW8fE52jlm48i8W/gfHMVZ5S+jlykBf6awtwvbhDkd7vOBWSWg3r06a96hz8xibci/+fiEY+W8g8Wka7lUQZWOWG0t1oZ2ijRiCw6hK+6MnqAdGFEbjd5PZ4Lr/AJlL4R4tmvLMvJa4pUCx0e5vJm4wQgmlWIBJLH9KqKnSnsMnMnz1uvE//9k=");

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var factory = __webpack_require__(536);
module.exports = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(513);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(517);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(478);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  false ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(514);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(515);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         false ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  false ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 514:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(1);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(180);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(181);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(518);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(519);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(13);

var _PropTypes = __webpack_require__(478);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  false ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(477));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(477));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(466);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 521:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppLogo__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_SearchBox__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_UserBox__ = __webpack_require__(543);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Header=function(_React$Component){_inherits(Header,_React$Component);function Header(){_classCallCheck(this,Header);return _possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));}_createClass(Header,[{key:'render',value:function render(){var _props=this.props,headerBackgroundColor=_props.headerBackgroundColor,enableMobileMenuSmall=_props.enableMobileMenuSmall,enableHeaderShadow=_props.enableHeaderShadow;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group___default.a,{component:'div',className:__WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-header",headerBackgroundColor,{'header-shadow':enableHeaderShadow}),transitionName:'HeaderAnimation',transitionAppear:true,transitionAppearTimeout:1500,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AppLogo__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-header__content",{'header-mobile-open':enableMobileMenuSmall})},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-header-left'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_SearchBox__["a" /* default */],null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-header-right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_UserBox__["a" /* default */],null)))));}}]);return Header;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var mapStateToProps=function mapStateToProps(state){return{enableHeaderShadow:state.ThemeOptions.enableHeaderShadow,closedSmallerSidebar:state.ThemeOptions.closedSmallerSidebar,headerBackgroundColor:state.ThemeOptions.headerBackgroundColor,enableMobileMenuSmall:state.ThemeOptions.enableMobileMenuSmall};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps,mapDispatchToProps)(Header));

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(527);


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(43);

var ReactBaseClasses = __webpack_require__(481);
var ReactChildren = __webpack_require__(529);
var ReactDOMFactories = __webpack_require__(534);
var ReactElement = __webpack_require__(455);
var ReactPropTypes = __webpack_require__(535);
var ReactVersion = __webpack_require__(538);

var createReactClass = __webpack_require__(539);
var onlyChild = __webpack_require__(540);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (false) {
  var lowPriorityWarning = require('./lowPriorityWarning');
  var canDefineProperty = require('./canDefineProperty');
  var ReactElementValidator = require('./ReactElementValidator');
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (false) {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (false) {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (false) {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var PooledClass = __webpack_require__(530);
var ReactElement = __webpack_require__(455);

var emptyFunction = __webpack_require__(476);
var traverseAllChildren = __webpack_require__(531);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var _prodInvariant = __webpack_require__(461);

var invariant = __webpack_require__(458);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ?  false ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__(461);

var ReactCurrentOwner = __webpack_require__(484);
var REACT_ELEMENT_TYPE = __webpack_require__(485);

var getIteratorFn = __webpack_require__(532);
var invariant = __webpack_require__(458);
var KeyEscapeUtils = __webpack_require__(533);
var warning = __webpack_require__(465);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (false) {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (false) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ?  false ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var ReactElement = __webpack_require__(455);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (false) {
  var ReactElementValidator = require('./ReactElementValidator');
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _require = __webpack_require__(455),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(511);

module.exports = factory(isValidElement);

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(29);
var assign = __webpack_require__(43);

var ReactPropTypesSecret = __webpack_require__(182);
var checkPropTypes = __webpack_require__(537);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (false) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (false) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (false) {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (false) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       false ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (false) {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (false) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (false) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



module.exports = '15.7.0';


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _require = __webpack_require__(481),
    Component = _require.Component;

var _require2 = __webpack_require__(455),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(482);
var factory = __webpack_require__(507);

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _prodInvariant = __webpack_require__(461);

var ReactElement = __webpack_require__(455);

var invariant = __webpack_require__(458);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ?  false ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hamburgers__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hamburgers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hamburgers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_ThemeOptions__ = __webpack_require__(175);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AppMobileMenu=function(_React$Component){_inherits(AppMobileMenu,_React$Component);function AppMobileMenu(props){_classCallCheck(this,AppMobileMenu);var _this=_possibleConstructorReturn(this,(AppMobileMenu.__proto__||Object.getPrototypeOf(AppMobileMenu)).call(this,props));_this.toggleMobileSidebar=function(){var _this$props=_this.props,enableMobileMenu=_this$props.enableMobileMenu,setEnableMobileMenu=_this$props.setEnableMobileMenu;setEnableMobileMenu(!enableMobileMenu);};_this.toggleMobileSmall=function(){var _this$props2=_this.props,enableMobileMenuSmall=_this$props2.enableMobileMenuSmall,setEnableMobileMenuSmall=_this$props2.setEnableMobileMenuSmall;setEnableMobileMenuSmall(!enableMobileMenuSmall);};_this.state={openLeft:false,openRight:false,relativeWidth:false,width:280,noTouchOpen:false,noTouchClose:false};_this.state={active:false,mobile:false,activeSecondaryMenuMobile:false};return _this;}_createClass(AppMobileMenu,[{key:'render',value:function render(){var _this2=this;var enableMobileMenu=this.props.enableMobileMenu;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-header__mobile-menu'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:this.toggleMobileSidebar},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_hamburgers___default.a,{active:enableMobileMenu,type:'elastic',onClick:function onClick(){return _this2.setState({activeMobile:!_this2.state.activeMobile});}}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-header__menu'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{onClick:this.toggleMobileSmall},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["Button"],{size:'sm',className:__WEBPACK_IMPORTED_MODULE_3_classnames___default()("btn-icon btn-icon-only",{active:this.state.activeSecondaryMenuMobile}),color:'primary',onClick:function onClick(){return _this2.setState({activeSecondaryMenuMobile:!_this2.state.activeSecondaryMenuMobile});}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'btn-icon-wrapper'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__fortawesome_react_fontawesome__["FontAwesomeIcon"],{icon:__WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__["faEllipsisV"]}))))));}}]);return AppMobileMenu;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var mapStateToProps=function mapStateToProps(state){return{closedSmallerSidebar:state.ThemeOptions.closedSmallerSidebar,enableMobileMenu:state.ThemeOptions.enableMobileMenu,enableMobileMenuSmall:state.ThemeOptions.enableMobileMenuSmall};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{setEnableMobileMenu:function setEnableMobileMenu(enable){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__reducers_ThemeOptions__["c" /* setEnableMobileMenu */])(enable));},setEnableMobileMenuSmall:function setEnableMobileMenuSmall(enable){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__reducers_ThemeOptions__["d" /* setEnableMobileMenuSmall */])(enable));}};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps,mapDispatchToProps)(AppMobileMenu));

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SearchBox=function(_React$Component){_inherits(SearchBox,_React$Component);function SearchBox(props){_classCallCheck(this,SearchBox);var _this=_possibleConstructorReturn(this,(SearchBox.__proto__||Object.getPrototypeOf(SearchBox)).call(this,props));_this.state={activeSearch:false};return _this;}_createClass(SearchBox,[{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1_classnames___default()("search-wrapper",{'active':this.state.activeSearch})},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'input-holder'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',className:'search-input'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{onClick:function onClick(){return _this2.setState({activeSearch:!_this2.state.activeSearch});},className:'search-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{onClick:function onClick(){return _this2.setState({activeSearch:!_this2.state.activeSearch});},className:'close'})));}}]);return SearchBox;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (SearchBox);

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toastify__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toastify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toastify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_free_solid_svg_icons__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_free_solid_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_free_solid_svg_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_utils_images_avatars_1_jpg__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UserBox=function(_React$Component){_inherits(UserBox,_React$Component);function UserBox(props){_classCallCheck(this,UserBox);var _this=_possibleConstructorReturn(this,(UserBox.__proto__||Object.getPrototypeOf(UserBox)).call(this,props));_this.notify2=function(){return _this.toastId=Object(__WEBPACK_IMPORTED_MODULE_2_react_toastify__["toast"])("You don't have any new items in your calendar for today! Go out and play!",{transition:__WEBPACK_IMPORTED_MODULE_2_react_toastify__["Bounce"],closeButton:true,autoClose:5000,position:"bottom-center",type:"success"});};_this.state={active:false,redirect:false,user:localStorage&&localStorage.token?JSON.parse(localStorage.user):{firstName:"",lastName:"",role:""}};return _this;}_createClass(UserBox,[{key:"render",value:function render(){var _this2=this;if(this.state.redirect){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["Redirect"],{to:"/auth/login"});}var user=this.state.user;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"header-btn-lg pr-0"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"widget-content p-0"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"widget-content-wrapper"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"widget-content-left"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["UncontrolledButtonDropdown"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["DropdownToggle"],{color:"link",className:"p-0"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{width:42,className:"rounded-circle",src:__WEBPACK_IMPORTED_MODULE_5__assets_utils_images_avatars_1_jpg__["a" /* default */],alt:""}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__fortawesome_react_fontawesome__["FontAwesomeIcon"],{className:"ml-2 opacity-8",icon:__WEBPACK_IMPORTED_MODULE_3__fortawesome_free_solid_svg_icons__["faAngleDown"]})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["DropdownMenu"],{right:true,className:"rm-pointers dropdown-menu-lg"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Nav"],{vertical:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["NavItem"],{className:"nav-item-header"},"Auth"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["NavItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["NavLink"],{href:"javascript:void(0);",onClick:function onClick(){localStorage.clear();_this2.setState(Object.assign({},_this2.state,{redirect:true}));}},"Sign Out")))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"widget-content-left  ml-3 header-user-info"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"widget-heading"},user.firstName," ",user.lastName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"widget-subheading"},user.role))))));}}]);return UserBox;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (UserBox);

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppNav_VerticalNavWrapper__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppLogo__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_ThemeOptions__ = __webpack_require__(175);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AppSidebar=function(_Component){_inherits(AppSidebar,_Component);function AppSidebar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppSidebar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppSidebar.__proto__||Object.getPrototypeOf(AppSidebar)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_this.toggleMobileSidebar=function(){var _this$props=_this.props,enableMobileMenu=_this$props.enableMobileMenu,setEnableMobileMenu=_this$props.setEnableMobileMenu;setEnableMobileMenu(!enableMobileMenu);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppSidebar,[{key:'render',value:function render(){var _props=this.props,backgroundColor=_props.backgroundColor,enableBackgroundImage=_props.enableBackgroundImage,enableSidebarShadow=_props.enableSidebarShadow,backgroundImage=_props.backgroundImage,backgroundImageOpacity=_props.backgroundImageOpacity;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'sidebar-mobile-overlay',onClick:this.toggleMobileSidebar}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group___default.a,{component:'div',className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()("app-sidebar",backgroundColor,{'sidebar-shadow':enableSidebarShadow}),transitionName:'SidebarAnimation',transitionAppear:true,transitionAppearTimeout:1500,transitionEnter:false,transitionLeave:false},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__AppLogo__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar___default.a,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'app-sidebar__inner'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AppNav_VerticalNavWrapper__["a" /* default */],null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()("app-sidebar-bg",backgroundImageOpacity),style:{backgroundImage:enableBackgroundImage?'url('+backgroundImage+')':null}})));}}]);return AppSidebar;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var mapStateToProps=function mapStateToProps(state){return{enableBackgroundImage:state.ThemeOptions.enableBackgroundImage,enableSidebarShadow:state.ThemeOptions.enableSidebarShadow,enableMobileMenu:state.ThemeOptions.enableMobileMenu,backgroundColor:state.ThemeOptions.backgroundColor,backgroundImage:state.ThemeOptions.backgroundImage,backgroundImageOpacity:state.ThemeOptions.backgroundImageOpacity};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{setEnableMobileMenu:function setEnableMobileMenu(enable){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__reducers_ThemeOptions__["c" /* setEnableMobileMenu */])(enable));}};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps,mapDispatchToProps)(AppSidebar));

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_metismenu__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_metismenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_metismenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NavItems__ = __webpack_require__(574);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Nav=function(_Component){_inherits(Nav,_Component);function Nav(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Nav);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Nav.__proto__||Object.getPrototypeOf(Nav)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Nav,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5",{className:"app-sidebar__heading"},"Products"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_metismenu___default.a,{content:__WEBPACK_IMPORTED_MODULE_3__NavItems__["b" /* Products */],activeLinkFromLocation:true,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5",{className:"app-sidebar__heading"},"Categories"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_metismenu___default.a,{content:__WEBPACK_IMPORTED_MODULE_3__NavItems__["a" /* Categories */],activeLinkFromLocation:true,className:"vertical-nav-menu",iconNamePrefix:"",classNameStateIcon:"pe-7s-angle-down"}));}},{key:"isPathActive",value:function isPathActive(path){return this.props.location.pathname.startsWith(path);}}]);return Nav;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Nav));

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MetisMenu = __webpack_require__(547);

var _MetisMenu2 = _interopRequireDefault(_MetisMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MetisMenu2.default; /**
                                        * src/main.js
                                        * Author: H.Alper Tuna <halpertuna@gmail.com>
                                        * Date: 16.09.2016
                                        */

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(467);

var _redux = __webpack_require__(462);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _simpleAjax = __webpack_require__(562);

var _simpleAjax2 = _interopRequireDefault(_simpleAjax);

var _Container = __webpack_require__(493);

var _Container2 = _interopRequireDefault(_Container);

var _DefaultLink = __webpack_require__(568);

var _DefaultLink2 = _interopRequireDefault(_DefaultLink);

var _internal = __webpack_require__(569);

var _internal2 = _interopRequireDefault(_internal);

var _content = __webpack_require__(469);

var _emitters = __webpack_require__(494);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/components/MetisMenu.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16.09.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint react/forbid-prop-types: [ "error", { forbid: [ "any", "array" ] } ] */

var lastReduxUid = -1;

var MetisMenu = function (_React$Component) {
  _inherits(MetisMenu, _React$Component);

  function MetisMenu(props) {
    _classCallCheck(this, MetisMenu);

    var _this = _possibleConstructorReturn(this, (MetisMenu.__proto__ || Object.getPrototypeOf(MetisMenu)).call(this, props));

    lastReduxUid += 1;
    _this.reduxUid = lastReduxUid;
    _this.useExternalReduxStore = props.useExternalReduxStore;
    _this.reduxStoreName = props.reduxStoreName;
    if (_this.useExternalReduxStore) {
      _this.store = _this.useExternalReduxStore;
    } else {
      _this.store = (0, _redux.createStore)(_internal2.default);
    }

    if (props.onSelected) {
      _this.store.dispatch((0, _emitters.updateListener)(_this.reduxUid, props.onSelected));
    }

    _this.LinkComponent = props.LinkComponent;

    if (props.content) {
      _this.updateContent(props.content);
      _this.updateActiveLink(props);
    } else if (props.ajax) {
      _this.updateRemoteContent(props);
    }

    _this.classStore = {
      classMainWrapper: (0, _classnames2.default)({ metismenu: !props.noBuiltInClassNames }, props.className),
      classContainer: typeof props.classNameContainer === 'function' ? props.classNameContainer : (0, _classnames2.default)({ 'metismenu-container': !props.noBuiltInClassNames }, props.classNameContainer),
      classContainerVisible: (0, _classnames2.default)({ visible: !props.noBuiltInClassNames }, props.classNameContainerVisible),
      classItem: (0, _classnames2.default)({ 'metismenu-item': !props.noBuiltInClassNames }, props.classNameItem),
      classLink: (0, _classnames2.default)({ 'metismenu-link': !props.noBuiltInClassNames }, props.classNameLink),
      classItemActive: props.classNameItemActive,
      classItemHasActiveChild: props.classNameItemHasActiveChild,
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      classLinkActive: (0, _classnames2.default)({ active: !props.noBuiltInClassNames }, props.classNameLinkActive),
      classLinkHasActiveChild: (0, _classnames2.default)({ 'has-active-child': !props.noBuiltInClassNames }, props.classNameLinkHasActiveChild),
      classIcon: (0, _classnames2.default)({ 'metismenu-icon': !props.noBuiltInClassNames }, props.classNameIcon),
      classStateIcon: (0, _classnames2.default)({ 'metismenu-state-icon': !props.noBuiltInClassNames }, props.classNameStateIcon),

      iconNamePrefix: props.iconNamePrefix,
      iconNameStateHidden: props.iconNameStateHidden,
      iconNameStateVisible: props.iconNameStateVisible
    };
    return _this;
  }

  _createClass(MetisMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        classStore: this.classStore,
        LinkComponent: this.LinkComponent
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.content !== nextProps.content) {
        this.updateContent(nextProps.content);
      }

      if (this.props.ajax !== nextProps.ajax) {
        this.updateRemoteContent(nextProps);
      } else if (this.props.activeLinkId !== nextProps.activeLinkId || this.props.activeLinkTo !== nextProps.activeLinkTo || this.props.activeLinkLabel !== nextProps.activeLinkLabel || this.props.activeLinkFromLocation !== nextProps.activeLinkFromLocation) {
        this.updateActiveLink(nextProps);
      }
    }
  }, {
    key: 'changeActiveLinkId',
    value: function changeActiveLinkId(value) {
      this.store.dispatch((0, _content.changeActiveLinkId)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkTo',
    value: function changeActiveLinkTo(value) {
      this.store.dispatch((0, _content.changeActiveLinkTo)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkLabel',
    value: function changeActiveLinkLabel(value) {
      this.store.dispatch((0, _content.changeActiveLinkLabel)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkFromLocation',
    value: function changeActiveLinkFromLocation() {
      this.store.dispatch((0, _content.changeActiveLinkFromLocation)(this.reduxUid));
    }
  }, {
    key: 'updateActiveLink',
    value: function updateActiveLink(props) {
      if (props.activeLinkId) this.changeActiveLinkId(props.activeLinkId);else if (props.activeLinkTo) this.changeActiveLinkTo(props.activeLinkTo);else if (props.activeLinkLabel) this.changeActiveLinkLabel(props.activeLinkLabel);else if (props.activeLinkFromLocation) this.changeActiveLinkFromLocation();
    }
  }, {
    key: 'updateRemoteContent',
    value: function updateRemoteContent(props) {
      var _this2 = this;

      var ajax = new _simpleAjax2.default(props.ajax);
      ajax.on('success', function (event) {
        var content = void 0;
        var responseText = event.target.responseText.target.responseText;

        try {
          content = JSON.parse(responseText);
        } catch (e) {
          throw new Error('MetisMenu: Ajax response expected to be json, but got; ' + responseText);
        }
        _this2.updateContent(content);
        _this2.updateActiveLink(props);
      });
      ajax.send();
    }
  }, {
    key: 'updateContent',
    value: function updateContent(content) {
      this.store.dispatch((0, _content.updateContent)(this.reduxUid, content));
    }
  }, {
    key: 'render',
    value: function render() {
      var mainWrapper = _react2.default.createElement(
        'div',
        { className: this.classStore.classMainWrapper },
        _react2.default.createElement(_Container2.default, {
          reduxStoreName: this.reduxStoreName,
          reduxUid: this.reduxUid
        })
      );

      if (this.useExternalReduxStore) {
        return mainWrapper;
      }

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        mainWrapper
      );
    }
  }]);

  return MetisMenu;
}(_react2.default.Component);

MetisMenu.defaultProps = {
  content: [],
  ajax: null,
  LinkComponent: _DefaultLink2.default,
  noBuiltInClassNames: false,
  className: null,
  classNameContainer: null,
  classNameContainerVisible: null,
  classNameItem: null,
  classNameItemActive: null,
  classNameItemHasActiveChild: null,
  classNameItemHasVisibleChild: null,
  classNameLink: null,
  classNameLinkActive: null,
  classNameLinkHasActiveChild: null,
  classNameIcon: null,
  classNameStateIcon: null,
  iconNamePrefix: 'fa fa-',
  iconNameStateHidden: 'caret-left',
  iconNameStateVisible: 'caret-left rotate-minus-90',
  activeLinkId: null,
  activeLinkTo: null,
  activeLinkLabel: null,
  activeLinkFromLocation: false,
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: 'metisMenuStore'
};

MetisMenu.propTypes = {
  content: _propTypes2.default.arrayOf(_propTypes2.default.object),
  ajax: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),

  LinkComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),

  noBuiltInClassNames: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  classNameContainerVisible: _propTypes2.default.string,
  classNameItem: _propTypes2.default.string,
  classNameItemActive: _propTypes2.default.string,
  classNameItemHasActiveChild: _propTypes2.default.string,
  classNameItemHasVisibleChild: _propTypes2.default.string,
  classNameLink: _propTypes2.default.string,
  classNameLinkActive: _propTypes2.default.string,
  classNameLinkHasActiveChild: _propTypes2.default.string,
  classNameIcon: _propTypes2.default.string,
  classNameStateIcon: _propTypes2.default.string,
  iconNamePrefix: _propTypes2.default.string,
  iconNameStateHidden: _propTypes2.default.string,
  iconNameStateVisible: _propTypes2.default.string,

  activeLinkId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  activeLinkTo: _propTypes2.default.string,
  activeLinkLabel: _propTypes2.default.string,
  activeLinkFromLocation: _propTypes2.default.bool,

  onSelected: _propTypes2.default.func,
  useExternalReduxStore: _propTypes2.default.object,
  reduxStoreName: _propTypes2.default.string
};

MetisMenu.childContextTypes = {
  classStore: _propTypes2.default.object.isRequired,
  LinkComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired
};

exports.default = MetisMenu;

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(7);

var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.createProvider = createProvider;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(9));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(5));

var _PropTypes = __webpack_require__(486);

var _warning = _interopRequireDefault(__webpack_require__(468));

var prefixUnsafeLifecycleMethods = typeof _react.default.forwardRef !== "undefined";
var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  (0, _warning.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    (0, _inheritsLoose2.default)(Provider, _Component);
    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return _react.Children.only(this.props.children);
    };

    return Provider;
  }(_react.Component);

  if (false) {
    // Use UNSAFE_ event name where supported
    var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillReceiveProps' : 'componentWillReceiveProps';

    Provider.prototype[eventName] = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _PropTypes.storeShape.isRequired,
    children: _propTypes.default.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
  return Provider;
}

var _default = createProvider();

exports.default = _default;

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(29);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.createConnect = createConnect;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(2));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(3));

var _connectAdvanced = _interopRequireDefault(__webpack_require__(487));

var _shallowEqual = _interopRequireDefault(__webpack_require__(552));

var _mapDispatchToProps = _interopRequireDefault(__webpack_require__(553));

var _mapStateToProps = _interopRequireDefault(__webpack_require__(558));

var _mergeProps = _interopRequireDefault(__webpack_require__(559));

var _selectorFactory = _interopRequireDefault(__webpack_require__(560));

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _shallowEqual.default : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _shallowEqual.default : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _shallowEqual.default : _ref3$areMergedPropsE,
        extraOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0, _extends2.default)({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}

var _default = createConnect();

exports.default = _default;

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
exports.default = void 0;

var _redux = __webpack_require__(462);

var _wrapMapToProps = __webpack_require__(491);

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

var _default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
exports.default = _default;

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = combineReducers;

var _createStore = __webpack_require__(488);

var _isPlainObject = __webpack_require__(470);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(489);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2['default'])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2['default'])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = applyMiddleware;

var _compose = __webpack_require__(490);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isPlainObject;

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
exports.default = void 0;

var _wrapMapToProps = __webpack_require__(491);

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

var _default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
exports.default = _default;

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(2));

var _verifyPlainObject = _interopRequireDefault(__webpack_require__(492));

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0, _extends2.default)({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) (0, _verifyPlainObject.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var _default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
exports.default = _default;

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(3));

var _verifySubselectors = _interopRequireDefault(__webpack_require__(561));

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.


function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    (0, _verifySubselectors.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = verifySubselectors;

var _warning = _interopRequireDefault(__webpack_require__(468));

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0, _warning.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(563).EventEmitter,
    queryString = __webpack_require__(564);

function tryParseJson(data){
    try{
        return JSON.parse(data);
    }catch(error){
        return error;
    }
}

function timeout(){
   this.request.abort();
   this.emit('timeout');
}

function Ajax(settings){
    var queryStringData,
        ajax = this;

    if(typeof settings === 'string'){
        settings = {
            url: settings
        };
    }

    if(typeof settings !== 'object'){
        settings = {};
    }

    ajax.settings = settings;
    ajax.request = new XMLHttpRequest();
    ajax.settings.method = ajax.settings.method || 'get';

    if(ajax.settings.cors && !'withCredentials' in ajax.request){
        if (typeof XDomainRequest !== 'undefined') {
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            ajax.request = new XDomainRequest();
        } else {
            // Otherwise, CORS is not supported by the browser.
            ajax.emit('error', new Error('Cors is not supported by this browser'));
        }
    }

    if(ajax.settings.cache === false){
        ajax.settings.data = ajax.settings.data || {};
        ajax.settings.data._ = new Date().getTime();
    }

    if(ajax.settings.method.toLowerCase() === 'get' && typeof ajax.settings.data === 'object'){
        var urlParts = ajax.settings.url.split('?');

        queryStringData = queryString.parse(urlParts[1]);

        for(var key in ajax.settings.data){
            queryStringData[key] = ajax.settings.data[key];
        }

        var parsedQueryStringData = queryString.stringify(queryStringData);

        ajax.settings.url = urlParts[0] + (parsedQueryStringData ? '?' + parsedQueryStringData : '');
        ajax.settings.data = null;
    }

    ajax.request.addEventListener('progress', function(event){
        ajax.emit('progress', event);
    }, false);

    ajax.request.addEventListener('load', function(event){
        var data = event.target.responseText;

        if(ajax.settings.dataType && ajax.settings.dataType.toLowerCase() === 'json'){
            if(data === ''){
                data = undefined;
            }else{
                data = tryParseJson(data);
                if(data instanceof Error){
                    ajax.emit('error', event, data);
                    return;
                }
            }
        }

        if(event.target.status >= 400){
            ajax.emit('error', event, data);
        } else {
            ajax.emit('success', event, data);
        }

    }, false);

    ajax.request.addEventListener('error', function(event){
        ajax.emit('error', event);
    }, false);

    ajax.request.addEventListener('abort', function(event){
        ajax.emit('error', event, new Error('Connection Aborted'));
        ajax.emit('abort', event);
    }, false);

    ajax.request.addEventListener('loadend', function(event){
        clearTimeout(ajax._requestTimeout);
        ajax.emit('complete', event);
    }, false);

    ajax.request.open(ajax.settings.method || 'get', ajax.settings.url, true);

    if(ajax.settings.cors && 'withCredentials' in ajax.request) {
        ajax.request.withCredentials = !!settings.withCredentials;
    }

    // Set default headers
    if(ajax.settings.contentType !== false){
        ajax.request.setRequestHeader('Content-Type', ajax.settings.contentType || 'application/json; charset=utf-8');
    }
    if(ajax.settings.requestedWith !== false) {
        ajax.request.setRequestHeader('X-Requested-With', ajax.settings.requestedWith || 'XMLHttpRequest');
    }
    if(ajax.settings.auth){
        ajax.request.setRequestHeader('Authorization', ajax.settings.auth);
    }

    // Set custom headers
    for(var headerKey in ajax.settings.headers){
        ajax.request.setRequestHeader(headerKey, ajax.settings.headers[headerKey]);
    }

    if(ajax.settings.processData !== false && ajax.settings.dataType === 'json'){
        ajax.settings.data = JSON.stringify(ajax.settings.data);
    }
}

Ajax.prototype = Object.create(EventEmitter.prototype);

Ajax.prototype.send = function(){
    var ajax = this;

    ajax._requestTimeout = setTimeout(
        function(){
            timeout.apply(ajax, []);
        },
        ajax.settings.timeout || 120000
    );

    ajax.request.send(ajax.settings.data && ajax.settings.data);
};

module.exports = Ajax;


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	query-string
	Parse and stringify URL query strings
	https://github.com/sindresorhus/query-string
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';
	var queryString = {};

	queryString.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#)/, '');

		if (!str) {
			return {};
		}

		return str.trim().split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			var key = parts[0];
			var val = parts[1];

			key = decodeURIComponent(key);
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	queryString.stringify = function (obj) {
		return obj ? Object.keys(obj).map(function (key) {
			var val = obj[key];

			if (Array.isArray(val)) {
				return val.map(function (val2) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
				}).join('&');
			}

			return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return queryString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = queryString;
	} else {
		self.queryString = queryString;
	}
})();


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * src/components/Container.jsx
                                                                                                                                                                                                                                                                   * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                   * Date: 16.09.2016
                                                                                                                                                                                                                                                                   */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Item = __webpack_require__(566);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref, _ref2) {
  var items = _ref.items,
      visible = _ref.visible,
      itemId = _ref.itemId,
      reduxStoreName = _ref.reduxStoreName,
      reduxUid = _ref.reduxUid;
  var classStore = _ref2.classStore;
  return _react2.default.createElement(
    'ul',
    {
      className: (0, _classnames2.default)(typeof classStore.classContainer === 'function' ? classStore.classContainer({ itemId: itemId, visible: visible, items: items }) : classStore.classContainer, visible && classStore.classContainerVisible)
    },
    items.map(function (item, i) {
      return _react2.default.createElement(_Item2.default, _extends({ key: item.id || '_' + i, reduxStoreName: reduxStoreName, reduxUid: reduxUid }, item));
    })
  );
};

Container.defaultProps = {
  itemId: null,
  visible: false
};

Container.propTypes = {
  itemId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  visible: _propTypes2.default.bool,
  reduxStoreName: _propTypes2.default.string.isRequired,
  reduxUid: _propTypes2.default.number.isRequired
};

Container.contextTypes = {
  classStore: _propTypes2.default.object.isRequired
};

exports.default = Container;

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = undefined;

var _reactRedux = __webpack_require__(467);

var _content = __webpack_require__(469);

var _emitters = __webpack_require__(494);

var _Item = __webpack_require__(567);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleSubMenu: function toggleSubMenu(e) {
      if (!ownProps.hasSubMenu) return;
      e.preventDefault();
      dispatch((0, _content.changeSubMenuVisibility)(ownProps.reduxUid, ownProps.id, ownProps.trace, !ownProps.subMenuVisibility));
    },
    activateMe: function activateMe(e) {
      dispatch((0, _emitters.emitSelected)(ownProps.reduxUid, e));
      if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
        dispatch((0, _content.changeActiveLinkId)(ownProps.reduxUid, ownProps.id));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Item2.default);

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Container = __webpack_require__(493);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var Item = function Item(_ref, _ref2) {
  var id = _ref.id,
      icon = _ref.icon,
      label = _ref.label,
      to = _ref.to,
      externalLink = _ref.externalLink,
      hasSubMenu = _ref.hasSubMenu,
      active = _ref.active,
      hasActiveChild = _ref.hasActiveChild,
      subMenuVisibility = _ref.subMenuVisibility,
      toggleSubMenu = _ref.toggleSubMenu,
      activateMe = _ref.activateMe,
      reduxStoreName = _ref.reduxStoreName,
      reduxUid = _ref.reduxUid;
  var classStore = _ref2.classStore,
      LinkComponent = _ref2.LinkComponent;
  return _react2.default.createElement(
    'li',
    {
      className: (0, _classnames2.default)(classStore.classItem, active && classStore.classItemActive, hasActiveChild && classStore.classItemHasActiveChild, hasSubMenu && subMenuVisibility && classStore.classItemHasVisibleChild)
    },
    _react2.default.createElement(
      LinkComponent,
      {
        className: classStore.classLink,
        classNameActive: classStore.classLinkActive,
        classNameHasActiveChild: classStore.classLinkHasActiveChild,
        active: active,
        hasActiveChild: hasActiveChild,
        id: id,
        to: to,
        label: label,
        externalLink: externalLink,
        hasSubMenu: hasSubMenu,
        toggleSubMenu: toggleSubMenu,
        activateMe: activateMe
      },
      _react2.default.createElement('i', { className: (0, _classnames2.default)(classStore.classIcon, classStore.iconNamePrefix + icon) }),
      label,
      hasSubMenu && _react2.default.createElement('i', {
        className: (0, _classnames2.default)(classStore.classStateIcon, classStore.iconNamePrefix + (subMenuVisibility ? classStore.iconNameStateVisible : classStore.iconNameStateHidden))
      })
    ),
    hasSubMenu && _react2.default.createElement(_Container2.default, {
      itemId: id,
      visible: subMenuVisibility,
      reduxStoreName: reduxStoreName,
      reduxUid: reduxUid
    })
  );
};

Item.defaultProps = {
  icon: '',
  label: '',
  to: null,
  externalLink: false,
  toggleSubMenu: null
};

Item.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  icon: _propTypes2.default.string,
  label: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array, _propTypes2.default.string]),
  to: _propTypes2.default.string,
  externalLink: _propTypes2.default.bool,
  hasSubMenu: _propTypes2.default.bool.isRequired,
  active: _propTypes2.default.bool.isRequired,
  hasActiveChild: _propTypes2.default.bool.isRequired,
  subMenuVisibility: _propTypes2.default.bool.isRequired,
  toggleSubMenu: _propTypes2.default.func,
  activateMe: _propTypes2.default.func.isRequired,
  reduxStoreName: _propTypes2.default.string.isRequired,
  reduxUid: _propTypes2.default.number.isRequired
};

Item.contextTypes = {
  classStore: _propTypes2.default.object.isRequired,
  LinkComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired
};

exports.default = Item;

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultLink = function DefaultLink(_ref) {
  var className = _ref.className,
      classNameActive = _ref.classNameActive,
      classNameHasActiveChild = _ref.classNameHasActiveChild,
      active = _ref.active,
      hasActiveChild = _ref.hasActiveChild,
      to = _ref.to,
      externalLink = _ref.externalLink,
      hasSubMenu = _ref.hasSubMenu,
      toggleSubMenu = _ref.toggleSubMenu,
      activateMe = _ref.activateMe,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    {
      className: (0, _classnames2.default)(className, active && classNameActive, hasActiveChild && classNameHasActiveChild),
      href: to,
      onClick: hasSubMenu ? toggleSubMenu : activateMe,
      target: externalLink ? '_blank' : undefined
    },
    children
  );
}; /**
    * src/components/DefaultLink.jsx
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 17.09.2016
    */

DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null
};

DefaultLink.propTypes = {
  className: _propTypes2.default.string.isRequired,
  classNameActive: _propTypes2.default.string.isRequired,
  classNameHasActiveChild: _propTypes2.default.string.isRequired,
  active: _propTypes2.default.bool.isRequired,
  hasActiveChild: _propTypes2.default.bool.isRequired,
  to: _propTypes2.default.string.isRequired,
  externalLink: _propTypes2.default.bool,
  hasSubMenu: _propTypes2.default.bool.isRequired,
  toggleSubMenu: _propTypes2.default.func,
  activateMe: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]).isRequired
};

exports.default = DefaultLink;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(462);

var _index = __webpack_require__(570);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file src/reducers/internal.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 03.02.2017
 */

/* eslint-env browser */

exports.default = (0, _redux.combineReducers)({
  metisMenuStore: _index2.default
});

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(462);

var _content = __webpack_require__(571);

var _content2 = _interopRequireDefault(_content);

var _emitters = __webpack_require__(573);

var _emitters2 = _interopRequireDefault(_emitters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  content: _content2.default,
  emitters: _emitters2.default
}); /**
     * src/reducers/index.js
     * Author: H.Alper Tuna <halpertuna@gmail.com>
     * Date: 16.09.2016
     */

/* eslint-env browser */

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _content = __webpack_require__(469);

var _flattenContent = __webpack_require__(572);

var _flattenContent2 = _interopRequireDefault(_flattenContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file reducers/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

/* eslint-env browser */

var item = function item(state, action) {
  switch (action.type) {
    case 'CHANGE_SUBMENU_VISIBILITY':
      {
        return Object.assign({}, state, {
          subMenuVisibility: state.id === action.id ? action.subMenuVisibility : action.trace.indexOf(state.id) !== -1
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        return Object.assign({}, state, {
          active: state.id === action.id,
          hasActiveChild: action.trace.indexOf(state.id) !== -1
        });
      }
    default:
      {
        return state;
      }
  }
};

var findItem = function findItem(content, value, prop) {
  return content.find(function (i) {
    return i[prop] === value;
  });
};

var content = function content() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'UPDATE_CONTENT':
      {
        return (0, _flattenContent2.default)(action.content);
      }
    case 'CHANGE_SUBMENU_VISIBILITY':
      {
        return state.map(function (i) {
          return item(i, action);
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        var activeItem = void 0;
        if (action.type === 'CHANGE_ACTIVE_LINK_FROM_LOCATION') {
          var locationSets = [window.location.hash, // #hash
          window.location.pathname + window.location.search, // /path?search
          window.location.pathname + window.location.search + window.location.hash, // /path?s#hash
          window.location.pathname.slice(1) + window.location.search, // path?search
          window.location.pathname.slice(1) + window.location.search + window.location.hash];
          activeItem = state.find(function (i) {
            return locationSets.indexOf(i.to) !== -1;
          });
        } else {
          activeItem = findItem(state, action.value, action.propName);
        }

        // If metismenu user tries to activate non-exist item
        if (!activeItem) return state;

        var _activeItem = activeItem,
            id = _activeItem.id,
            parentId = _activeItem.parentId,
            trace = _activeItem.trace;

        var stage = state.map(function (i) {
          return item(i, Object.assign({ id: id, trace: trace }, action));
        });

        // Trace also keeps parentId nonetheless it doesn't matter
        return content(stage, (0, _content.changeSubMenuVisibility)(action.reduxUid, parentId, trace, true));
      }
    default:
      {
        return state;
      }
  }
};

var multiContent = function multiContent() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (typeof action.reduxUid === 'undefined') return state;

  var reduxUid = action.reduxUid;

  var newState = Object.assign({}, state);
  newState[reduxUid] = content(state[reduxUid], action);
  return newState;
};

exports.default = multiContent;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * src/reducers/flattenContent.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

/* eslint no-param-reassign: ["error", { "props": false }] */

var uid = void 0;
var flattenLevel = function flattenLevel(content, parentId) {
  var flatContent = [];
  content.forEach(function (item) {
    var id = item.id || uid;
    uid += 1;

    flatContent.push({
      id: id,
      parentId: item.parentId || parentId,
      icon: item.icon,
      label: item.label,
      to: item.to,
      externalLink: item.externalLink,
      active: false,
      hasActiveChild: false,
      subMenuVisibility: false
    });
    if (typeof item.content !== 'undefined') {
      flatContent = [].concat(_toConsumableArray(flatContent), _toConsumableArray(flattenLevel(item.content, id)));
    }
  });
  return flatContent;
};

var trace = void 0;
var mapTrace = function mapTrace(content, parentId) {
  var subItems = content.filter(function (item) {
    return item.parentId === parentId;
  });
  subItems.forEach(function (item) {
    item.trace = [].concat(_toConsumableArray(trace));
    trace.push(item.id);
    item.hasSubMenu = mapTrace(content, item.id);
    if (item.hasSubMenu) {
      item.to = '#';
    }
    trace.pop();
  });
  return subItems.length > 0;
};

exports.default = function (content) {
  uid = 1;
  trace = [];
  var flatContent = flattenLevel(content);
  mapTrace(flatContent);
  return flatContent;
};

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file reducers/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitters = function emitters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'EMIT_SELECTED':
      {
        if (state.emitSelected) {
          state.emitSelected(action.event);
        }
        return state;
      }
    case 'UPDATE_LISTENER':
      {
        return Object.assign({}, state, {
          emitSelected: action.listener
        });
      }
    default:
      {
        return state;
      }
  }
};

var multiEmitters = function multiEmitters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (typeof action.reduxUid === 'undefined') return state;

  var reduxUid = action.reduxUid;

  var newState = Object.assign({}, state);
  newState[reduxUid] = emitters(state[reduxUid], action);
  return newState;
};

exports.default = multiEmitters;

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MainNav */
/* unused harmony export ComponentsNav */
/* unused harmony export FormsNav */
/* unused harmony export WidgetsNav */
/* unused harmony export ChartsNav */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
var MainNav=[{icon:"pe-7s-rocket",label:"Dashboard Example",to:"#/dashboards/basic"}];var ComponentsNav=[{icon:"pe-7s-diamond",label:"Elements",content:[{label:"Standard Buttons",to:"#/elements/buttons-standard"},{label:"Dropdowns",to:"#/elements/dropdowns"},{label:"Icons",to:"#/elements/icons"},{label:"Badges",to:"#/elements/badges-labels"},{label:"Cards",to:"#/elements/cards"},{label:"List Groups",to:"#/elements/list-group"},{label:"Navigation Menus",to:"#/elements/navigation"},{label:"Utilities",to:"#/elements/utilities"}]},{icon:"pe-7s-car",label:"Components",content:[{label:"Tabs",to:"#/components/tabs"},{label:"Notifications",to:"#/components/notifications"},{label:"Modals",to:"#/components/modals"},{label:"Progress Bar",to:"#/components/progress-bar"},{label:"Tooltips & Popovers",to:"#/components/tooltips-popovers"},{label:"Carousel",to:"#/components/carousel"},{label:"Maps",to:"#/components/maps"}]},{icon:"pe-7s-display2",label:"Regular Tables",to:"#/tables/regular-tables"}];var FormsNav=[{icon:"pe-7s-light",label:"Controls",to:"#/forms/controls"},{icon:"pe-7s-eyedropper",label:"Layouts",to:"#/forms/layouts"},{icon:"pe-7s-pendrive",label:"Validation",to:"#/forms/validation"}];var WidgetsNav=[{icon:"pe-7s-graph2",label:"Dashboard Boxes",to:"#/widgets/dashboard-boxes"}];var ChartsNav=[{icon:"pe-7s-graph2",label:"ChartJS",to:"#/charts/chartjs"}];var Products=[{icon:"pe-7s-graph2",label:"Products",to:"#/product/list"}];var Categories=[{icon:"pe-7s-graph2",label:"Categories",to:"#/category/list"}];

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollbar = __webpack_require__(576);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scrollbar2.default;
module.exports = exports['default'];

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _perfectScrollbar = __webpack_require__(577);

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    _classCallCheck(this, ScrollBar);

    var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));

    _this.handleRef = _this.handleRef.bind(_this);
    _this._handlerByEvent = {};
    return _this;
  }

  _createClass(ScrollBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.option) {
        console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"');
      }

      this._ps = new _perfectScrollbar2.default(this._container, this.props.options || this.props.option);
      // hook up events
      this._updateEventHook();
      this._updateClassName();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._updateEventHook(prevProps);

      this.updateScroll();

      if (prevProps.className !== this.props.className) {
        this._updateClassName();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (key) {
        var value = _this2._handlerByEvent[key];

        if (value) {
          _this2._container.removeEventListener(key, value, false);
        }
      });
      this._handlerByEvent = {};
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: '_updateEventHook',
    value: function _updateEventHook() {
      var _this3 = this;

      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // hook up events
      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this3.props[handlerNameByEvent[key]];
        var prevCallback = prevProps[handlerNameByEvent[key]];
        if (callback !== prevCallback) {
          if (prevCallback) {
            var prevHandler = _this3._handlerByEvent[key];
            _this3._container.removeEventListener(key, prevHandler, false);
            _this3._handlerByEvent[key] = null;
          }
          if (callback) {
            var handler = function handler() {
              return callback(_this3._container);
            };
            _this3._container.addEventListener(key, handler, false);
            _this3._handlerByEvent[key] = handler;
          }
        }
      });
    }
  }, {
    key: '_updateClassName',
    value: function _updateClassName() {
      var className = this.props.className;


      var psClassNames = this._container.className.split(' ').filter(function (name) {
        return name.match(/^ps([-_].+|)$/);
      }).join(' ');

      if (this._container) {
        this._container.className = 'scrollbar-container' + (className ? ' ' + className : '') + (psClassNames ? ' ' + psClassNames : '');
      }
    }
  }, {
    key: 'updateScroll',
    value: function updateScroll() {
      this.props.onSync(this._ps);
    }
  }, {
    key: 'handleRef',
    value: function handleRef(ref) {
      this._container = ref;
      this.props.containerRef(ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          option = _props.option,
          options = _props.options,
          containerRef = _props.containerRef,
          onScrollY = _props.onScrollY,
          onScrollX = _props.onScrollX,
          onScrollUp = _props.onScrollUp,
          onScrollDown = _props.onScrollDown,
          onScrollLeft = _props.onScrollLeft,
          onScrollRight = _props.onScrollRight,
          onYReachStart = _props.onYReachStart,
          onYReachEnd = _props.onYReachEnd,
          onXReachStart = _props.onXReachStart,
          onXReachEnd = _props.onXReachEnd,
          component = _props.component,
          onSync = _props.onSync,
          children = _props.children,
          remainProps = _objectWithoutProperties(_props, ['className', 'style', 'option', 'options', 'containerRef', 'onScrollY', 'onScrollX', 'onScrollUp', 'onScrollDown', 'onScrollLeft', 'onScrollRight', 'onYReachStart', 'onYReachEnd', 'onXReachStart', 'onXReachEnd', 'component', 'onSync', 'children']);

      var Comp = component;

      return _react2.default.createElement(
        Comp,
        _extends({ style: style, ref: this.handleRef }, remainProps),
        children
      );
    }
  }]);

  return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
  className: '',
  style: undefined,
  option: undefined,
  options: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  onSync: function onSync(ps) {
    return ps.update();
  },
  component: 'div'
};

ScrollBar.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  option: _propTypes.PropTypes.object,
  options: _propTypes.PropTypes.object,
  containerRef: _propTypes.PropTypes.func,
  onScrollY: _propTypes.PropTypes.func,
  onScrollX: _propTypes.PropTypes.func,
  onScrollUp: _propTypes.PropTypes.func,
  onScrollDown: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onYReachStart: _propTypes.PropTypes.func,
  onYReachEnd: _propTypes.PropTypes.func,
  onXReachStart: _propTypes.PropTypes.func,
  onXReachEnd: _propTypes.PropTypes.func,
  onSync: _propTypes.PropTypes.func,
  component: _propTypes.PropTypes.string
};
module.exports = exports['default'];

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */



function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

module.exports = PerfectScrollbar;
//# sourceMappingURL=perfect-scrollbar.common.js.map


/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AppFooter=function(_React$Component){_inherits(AppFooter,_React$Component);function AppFooter(){_classCallCheck(this,AppFooter);return _possibleConstructorReturn(this,(AppFooter.__proto__||Object.getPrototypeOf(AppFooter)).apply(this,arguments));}_createClass(AppFooter,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"app-footer"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"app-footer__inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"app-footer-left"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul",{className:"nav"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},"Footer Link 1")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},"Footer Link 2")))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"app-footer-right"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul",{className:"nav"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},"Footer Link 3")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"javascript:void(0);",className:"nav-link"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"badge badge-success mr-1 ml-0"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small",null,"NEW")),"Footer Link 4")))))));}}]);return AppFooter;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (AppFooter);

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var $inject_window_ResizeObserver=__webpack_require__(608),React=__webpack_require__(1),reactDom=__webpack_require__(13),debounce=__webpack_require__(185),throttle=__webpack_require__(179);function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var $inject_window_ResizeObserver__default=/*#__PURE__*/_interopDefaultLegacy($inject_window_ResizeObserver);var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var debounce__default=/*#__PURE__*/_interopDefaultLegacy(debounce);var throttle__default=/*#__PURE__*/_interopDefaultLegacy(throttle);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}var patchResizeHandler = function (resizeCallback, refreshMode, refreshRate, refreshOptions) {
    switch (refreshMode) {
        case 'debounce':
            return debounce__default['default'](resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return throttle__default['default'](resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
var isFunction = function (fn) { return typeof fn === 'function'; };
var isSSR = function () { return typeof window === 'undefined'; };
var isDOMElement = function (element) { return element instanceof Element || element instanceof HTMLDocument; };
var createNotifier = function (onResize, setSize, handleWidth, handleHeight) { return function (_a) {
    var width = _a.width, height = _a.height;
    setSize(function (prev) {
        if (prev.width === width && prev.height === height) {
            // skip if dimensions haven't changed
            return prev;
        }
        if ((prev.width === width && !handleHeight) || (prev.height === height && !handleWidth)) {
            // process `handleHeight/handleWidth` props
            return prev;
        }
        if (onResize && isFunction(onResize)) {
            onResize(width, height);
        }
        return { width: width, height: height };
    });
}; };var ResizeDetector = /** @class */ (function (_super) {
    __extends(ResizeDetector, _super);
    function ResizeDetector(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelHandler = function () {
            if (_this.resizeHandler && _this.resizeHandler.cancel) {
                // cancel debounced handler
                _this.resizeHandler.cancel();
                _this.resizeHandler = null;
            }
        };
        _this.attachObserver = function () {
            var _a = _this.props, targetRef = _a.targetRef, observerOptions = _a.observerOptions;
            if (isSSR()) {
                return;
            }
            if (targetRef && targetRef.current) {
                _this.targetRef.current = targetRef.current;
            }
            var element = _this.getElement();
            if (!element) {
                // can't find element to observe
                return;
            }
            if (_this.observableElement && _this.observableElement === element) {
                // element is already observed
                return;
            }
            _this.observableElement = element;
            _this.resizeObserver.observe(element, observerOptions);
        };
        _this.getElement = function () {
            var _a = _this.props, querySelector = _a.querySelector, targetDomEl = _a.targetDomEl;
            if (isSSR())
                return null;
            // in case we pass a querySelector
            if (querySelector)
                return document.querySelector(querySelector);
            // in case we pass a DOM element
            if (targetDomEl && isDOMElement(targetDomEl))
                return targetDomEl;
            // in case we pass a React ref using React.createRef()
            if (_this.targetRef && isDOMElement(_this.targetRef.current))
                return _this.targetRef.current;
            // the worse case when we don't receive any information from the parent and the library doesn't add any wrappers
            // we have to use a deprecated `findDOMNode` method in order to find a DOM element to attach to
            var currentElement = reactDom.findDOMNode(_this);
            if (!currentElement)
                return null;
            var renderType = _this.getRenderType();
            switch (renderType) {
                case 'renderProp':
                    return currentElement;
                case 'childFunction':
                    return currentElement;
                case 'child':
                    return currentElement;
                case 'childArray':
                    return currentElement;
                default:
                    return currentElement.parentElement;
            }
        };
        _this.createResizeHandler = function (entries) {
            var _a = _this.props, _b = _a.handleWidth, handleWidth = _b === void 0 ? true : _b, _c = _a.handleHeight, handleHeight = _c === void 0 ? true : _c, onResize = _a.onResize;
            if (!handleWidth && !handleHeight)
                return;
            var notifyResize = createNotifier(onResize, _this.setState.bind(_this), handleWidth, handleHeight);
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var shouldSetSize = !_this.skipOnMount && !isSSR();
                if (shouldSetSize) {
                    notifyResize({ width: width, height: height });
                }
                _this.skipOnMount = false;
            });
        };
        _this.getRenderType = function () {
            var _a = _this.props, render = _a.render, children = _a.children;
            if (isFunction(render)) {
                // DEPRECATED. Use `Child Function Pattern` instead
                return 'renderProp';
            }
            if (isFunction(children)) {
                return 'childFunction';
            }
            if (React.isValidElement(children)) {
                return 'child';
            }
            if (Array.isArray(children)) {
                // DEPRECATED. Wrap children with a single parent
                return 'childArray';
            }
            // DEPRECATED. Use `Child Function Pattern` instead
            return 'parent';
        };
        var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1000 : _a, refreshOptions = props.refreshOptions;
        _this.state = {
            width: undefined,
            height: undefined
        };
        _this.skipOnMount = skipOnMount;
        _this.targetRef = React.createRef();
        _this.observableElement = null;
        if (isSSR()) {
            return _this;
        }
        _this.resizeHandler = patchResizeHandler(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        _this.resizeObserver = new $inject_window_ResizeObserver__default['default'](_this.resizeHandler);
        return _this;
    }
    ResizeDetector.prototype.componentDidMount = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentDidUpdate = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentWillUnmount = function () {
        if (isSSR()) {
            return;
        }
        this.resizeObserver.disconnect();
        this.cancelHandler();
    };
    ResizeDetector.prototype.render = function () {
        var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? 'div' : _b;
        var _c = this.state, width = _c.width, height = _c.height;
        var childProps = { width: width, height: height, targetRef: this.targetRef };
        var renderType = this.getRenderType();
        var typedChildren;
        switch (renderType) {
            case 'renderProp':
                return render && render(childProps);
            case 'childFunction':
                typedChildren = children;
                return typedChildren(childProps);
            case 'child':
                // @TODO bug prone logic
                typedChildren = children;
                if (typedChildren.type && typeof typedChildren.type === 'string') {
                    // child is a native DOM elements such as div, span etc
                    var nativeProps = __rest(childProps, ["targetRef"]);
                    return React.cloneElement(typedChildren, nativeProps);
                }
                // class or functional component otherwise
                return React.cloneElement(typedChildren, childProps);
            case 'childArray':
                typedChildren = children;
                return typedChildren.map(function (el) { return !!el && React.cloneElement(el, childProps); });
            default:
                return React__default['default'].createElement(WrapperTag, null);
        }
    };
    return ResizeDetector;
}(React.PureComponent));function withResizeDetector(ComponentInner, options) {
    if (options === void 0) { options = {}; }
    var ResizeDetectorHOC = /** @class */ (function (_super) {
        __extends(ResizeDetectorHOC, _super);
        function ResizeDetectorHOC() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ref = React.createRef();
            return _this;
        }
        ResizeDetectorHOC.prototype.render = function () {
            var _a = this.props, forwardedRef = _a.forwardedRef, rest = __rest(_a, ["forwardedRef"]);
            var targetRef = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : this.ref;
            return (React__default['default'].createElement(ResizeDetector, __assign({}, options, { targetRef: targetRef }),
                React__default['default'].createElement(ComponentInner, __assign({ targetRef: targetRef }, rest))));
        };
        return ResizeDetectorHOC;
    }(React.Component));
    function forwardRefWrapper(props, ref) {
        return React__default['default'].createElement(ResizeDetectorHOC, __assign({}, props, { forwardedRef: ref }));
    }
    var name = ComponentInner.displayName || ComponentInner.name;
    forwardRefWrapper.displayName = "withResizeDetector(" + name + ")";
    return React.forwardRef(forwardRefWrapper);
}var useEnhancedEffect = isSSR() ? React.useEffect : React.useLayoutEffect;
function useResizeDetector(props) {
    if (props === void 0) { props = {}; }
    var _a = props.skipOnMount, skipOnMount = _a === void 0 ? false : _a, refreshMode = props.refreshMode, _b = props.refreshRate, refreshRate = _b === void 0 ? 1000 : _b, refreshOptions = props.refreshOptions, _c = props.handleWidth, handleWidth = _c === void 0 ? true : _c, _d = props.handleHeight, handleHeight = _d === void 0 ? true : _d, targetRef = props.targetRef, observerOptions = props.observerOptions, onResize = props.onResize;
    var skipResize = React.useRef(skipOnMount);
    var localRef = React.useRef(null);
    var ref = (targetRef !== null && targetRef !== void 0 ? targetRef : localRef);
    var resizeHandler = React.useRef();
    var _e = React.useState({
        width: undefined,
        height: undefined
    }), size = _e[0], setSize = _e[1];
    useEnhancedEffect(function () {
        if (isSSR()) {
            return;
        }
        var notifyResize = createNotifier(onResize, setSize, handleWidth, handleHeight);
        var resizeCallback = function (entries) {
            if (!handleWidth && !handleHeight)
                return;
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var shouldSetSize = !skipResize.current && !isSSR();
                if (shouldSetSize) {
                    notifyResize({ width: width, height: height });
                }
                skipResize.current = false;
            });
        };
        resizeHandler.current = patchResizeHandler(resizeCallback, refreshMode, refreshRate, refreshOptions);
        var resizeObserver = new $inject_window_ResizeObserver__default['default'](resizeHandler.current);
        if (ref.current) {
            // Something wrong with typings here...
            resizeObserver.observe(ref.current, observerOptions);
        }
        return function () {
            resizeObserver.disconnect();
            var patchedResizeHandler = resizeHandler.current;
            if (patchedResizeHandler && patchedResizeHandler.cancel) {
                patchedResizeHandler.cancel();
            }
        };
    }, [refreshMode, refreshRate, refreshOptions, handleWidth, handleHeight, onResize, observerOptions, ref.current]);
    return __assign({ ref: ref }, size);
}exports.default=ResizeDetector;exports.useResizeDetector=useResizeDetector;exports.withResizeDetector=withResizeDetector;//# sourceMappingURL=withPolyfill.js.map


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ResizeObserver = factory());
}(this, (function () { 'use strict';

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;
            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;
                    return true;
                }
                return false;
            });
            return result;
        }
        return /** @class */ (function () {
            function class_1() {
                this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function () {
                    return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                    this.__entries__[index][1] = value;
                }
                else {
                    this.__entries__.push([key, value]);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                    entries.splice(index, 1);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
                this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
                if (ctx === void 0) { ctx = null; }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    callback.call(ctx, entry[1], entry[0]);
                }
            };
            return class_1;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }
        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }
        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }
        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }
        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    function throttle (callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;
                callback();
            }
            if (trailingCall) {
                proxy();
            }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }
                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            }
            else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
        }
        return proxy;
    }

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;
    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */
        ResizeObserverController.prototype.addObserver = function (observer) {
            if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
                this.connect_();
            }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */
        ResizeObserverController.prototype.removeObserver = function (observer) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
                observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
                this.disconnect_();
            }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */
        ResizeObserverController.prototype.refresh = function () {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
                this.refresh();
            }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */
        ResizeObserverController.prototype.updateObservers_ = function () {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function (observer) {
                return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
            return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.connect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
                return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            else {
                document.addEventListener('DOMSubtreeModified', this.refresh);
                this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.disconnect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
                return;
            }
            document.removeEventListener('transitionend', this.onTransitionEnd_);
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
                document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */
        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function (key) {
                return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
                this.refresh();
            }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */
        ResizeObserverController.getInstance = function () {
            if (!this.instance_) {
                this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */
        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
    }());

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }
        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
        }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
        }
        return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width), height = toFloat(styles.height);
        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }
        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }
        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
            typeof target.getBBox === 'function'); };
    })();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });
        return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */
        ResizeObservation.prototype.isActive = function () {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (rect.width !== this.broadcastWidth ||
                rect.height !== this.broadcastHeight);
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */
        ResizeObservation.prototype.broadcastRect = function () {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
        };
        return ResizeObservation;
    }());

    var ResizeObserverEntry = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, { target: target, contentRect: contentRect });
        }
        return ResizeObserverEntry;
    }());

    var ResizeObserverSPI = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.observe = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
                return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.unobserve = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
                return;
            }
            observations.delete(target);
            if (!observations.size) {
                this.controller_.removeObserver(this);
            }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.disconnect = function () {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.gatherActive = function () {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function (observation) {
                if (observation.isActive()) {
                    _this.activeObservations_.push(observation);
                }
            });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.broadcastActive = function () {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
                return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function (observation) {
                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */
        ResizeObserverSPI.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
        };
        return ResizeObserverSPI;
    }());

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
                throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
        }
        return ResizeObserver;
    }());
    // Expose public methods of ResizeObserver.
    [
        'observe',
        'unobserve',
        'disconnect'
    ].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }
        return ResizeObserver;
    })();

    return index;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(4));

var _propTypes = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShowMore = /*#__PURE__*/function (_Component) {
  _inherits(ShowMore, _Component);

  var _super = _createSuper(ShowMore);

  function ShowMore() {
    var _this;

    _classCallCheck(this, ShowMore);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      return _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      return _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$state = _this.state,
          isFocused = _this$state.isFocused,
          isHidden = _this$state.isHidden;

      if (event.keyCode === 13) {
        if (isFocused) {
          _this.setState({
            isHidden: !isHidden
          });
        } else if (!isHidden) {
          _this.setState({
            isHidden: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var isHidden = _this.state.isHidden;

      if (!isHidden) {
        _this.setState({
          isHidden: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function (event) {
      var isHidden = _this.state.isHidden;
      event.stopPropagation();

      _this.setState({
        isHidden: !isHidden
      });
    });

    _this.state = {
      isFocused: false,
      isHidden: true
    };
    return _this;
  }

  _createClass(ShowMore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('click', this.close);
        window.addEventListener('keydown', this.onKeyDown);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          children = _this$props.children,
          isShown = _this$props.isShown,
          hasChildSelected = _this$props.hasChildSelected;
      return children.length !== nextProps.children.length || isShown !== nextProps.isShown || hasChildSelected !== nextProps.hasChildSelected || this.state !== nextState;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', this.close);
        window.removeEventListener('keydown', this.onKeyDown);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isShown = _this$props2.isShown,
          children = _this$props2.children,
          onShowMoreChanged = _this$props2.onShowMoreChanged,
          hasChildSelected = _this$props2.hasChildSelected,
          label = _this$props2.label;
      var isHidden = this.state.isHidden;

      if (!isShown || !children || !children.length) {
        return null;
      }

      var isListHidden = isHidden;
      var showMoreStyles = (0, _classnames["default"])({
        RRT__showmore: true,
        'RRT__showmore--selected': hasChildSelected
      });
      var listStyles = (0, _classnames["default"])({
        'RRT__showmore-list': true,
        'RRT__showmore-list--opened': !isListHidden
      });
      var showMoreLabelStyles = (0, _classnames["default"])({
        'RRT__showmore-label': true,
        'RRT__showmore-label--selected': !isListHidden
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: onShowMoreChanged,
        className: showMoreStyles,
        role: "navigation",
        tabIndex: "0",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: this.toggleVisibility
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: showMoreLabelStyles
      }, label), /*#__PURE__*/_react["default"].createElement("div", {
        className: listStyles,
        "aria-hidden": isListHidden,
        role: "menu"
      }, children));
    }
  }]);

  return ShowMore;
}(_react.Component);

exports["default"] = ShowMore;
ShowMore.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object, _propTypes["default"].string]),
  hasChildSelected: _propTypes["default"].bool,
  isShown: _propTypes["default"].bool.isRequired,
  onShowMoreChanged: _propTypes["default"].func,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
ShowMore.defaultProps = {
  children: undefined,
  hasChildSelected: false,
  label: '...',
  onShowMoreChanged: function onShowMoreChanged() {
    return null;
  }
};

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tab = /*#__PURE__*/function (_Component) {
  _inherits(Tab, _Component);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onTabClick", function (evt) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          originalKey = _this$props.originalKey;
      onClick(originalKey, evt);
    });

    _defineProperty(_assertThisInitialized(_this), "renderRemovableTab", function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          onRemove = _this$props2.onRemove;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "RRT__removable"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "RRT__removable-text"
      }, children), /*#__PURE__*/_react["default"].createElement("div", {
        className: "RRT__removable-icon",
        onClick: onRemove
      }, "x"));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTab", function () {
      var _this$props3 = _this.props,
          children = _this$props3.children,
          allowRemove = _this$props3.allowRemove;

      if (allowRemove) {
        return _this.renderRemovableTab();
      }

      return children;
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props4 = this.props,
          children = _this$props4.children,
          selected = _this$props4.selected,
          classNames = _this$props4.classNames;
      return children !== nextProps.children || selected !== nextProps.selected || classNames !== nextProps.classNames;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          id = _this$props5.id,
          classNames = _this$props5.classNames,
          selected = _this$props5.selected,
          disabled = _this$props5.disabled,
          panelId = _this$props5.panelId,
          onFocus = _this$props5.onFocus,
          onBlur = _this$props5.onBlur,
          originalKey = _this$props5.originalKey;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(e) {
          return _this2.tab = e;
        },
        role: "tab",
        className: classNames,
        id: id,
        "aria-selected": selected ? 'true' : 'false',
        "aria-expanded": selected ? 'true' : 'false',
        "aria-disabled": disabled ? 'true' : 'false',
        "aria-controls": panelId,
        tabIndex: "0",
        onClick: this.onTabClick,
        onFocus: onFocus(originalKey),
        onBlur: onBlur
      }, this.renderTab());
    }
  }]);

  return Tab;
}(_react.Component);

exports["default"] = Tab;
Tab.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object, _propTypes["default"].string]),
  disabled: _propTypes["default"].bool,
  // generic props
  panelId: _propTypes["default"].string.isRequired,
  selected: _propTypes["default"].bool.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onRemove: _propTypes["default"].func,
  onFocus: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func.isRequired,
  allowRemove: _propTypes["default"].bool,
  id: _propTypes["default"].string.isRequired,
  originalKey: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  classNames: _propTypes["default"].string.isRequired
};
Tab.defaultProps = {
  children: undefined,
  onRemove: function onRemove() {},
  allowRemove: false,
  disabled: false
};

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TabPanel = /*#__PURE__*/function (_Component) {
  _inherits(TabPanel, _Component);

  var _super = _createSuper(TabPanel);

  function TabPanel(props) {
    var _this;

    _classCallCheck(this, TabPanel);

    _this = _super.call(this, props);
    _this.state = {
      renderedAtLeastOnce: !props.isHidden
    };
    return _this;
  }

  _createClass(TabPanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          children = _this$props.children,
          getContent = _this$props.getContent,
          classNames = _this$props.classNames,
          isHidden = _this$props.isHidden;
      return getContent !== nextProps.getContent || children !== nextProps.children || classNames !== nextProps.classNames || isHidden !== nextProps.isHidden;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classNames = _this$props2.classNames,
          id = _this$props2.id,
          tabId = _this$props2.tabId,
          children = _this$props2.children,
          getContent = _this$props2.getContent,
          isHidden = _this$props2.isHidden;
      var renderedAtLeastOnce = this.state.renderedAtLeastOnce;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames,
        role: "tabpanel",
        id: id,
        "aria-labelledby": tabId,
        "aria-hidden": isHidden
      }, getContent && renderedAtLeastOnce && getContent(), !getContent && children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        renderedAtLeastOnce: state.renderedAtLeastOnce || !props.isHidden
      };
    }
  }]);

  return TabPanel;
}(_react.Component);

exports["default"] = TabPanel;
TabPanel.propTypes = {
  getContent: _propTypes["default"].func,
  children: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object, _propTypes["default"].string]),
  id: _propTypes["default"].string.isRequired,
  isHidden: _propTypes["default"].bool,
  // generic props
  classNames: _propTypes["default"].string.isRequired,
  tabId: _propTypes["default"].string.isRequired
};
TabPanel.defaultProps = {
  getContent: undefined,
  children: undefined,
  isHidden: false
};

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InkBar = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InkBar = function InkBar(_ref) {
  var left = _ref.left,
      width = _ref.width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "RRT__inkbar-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "RRT__inkbar",
    style: {
      left: left,
      width: width
    }
  }));
};

exports.InkBar = InkBar;
var _default = InkBar;
exports["default"] = _default;
InkBar.propTypes = {
  left: _propTypes["default"].number,
  width: _propTypes["default"].number
};
InkBar.defaultProps = {
  left: 0,
  width: 0
};

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/abstract1.74469765.jpg";

/***/ })

});