_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{Vih8:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),c=n("z7pX"),l=n("cpVT"),r=n("r9w1"),o=n("Z3vd"),d=n("+bXu"),a=n("vDqi"),s=n.n(a),j=n("aFs1"),u=n("20a2"),v=n("q1tI"),b=n("FGyW"),O=n("Qh7G"),h=n("13PV");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){var e,t,n,l,a,x=Object(v.useState)({name:"",description:"",price:null,discount:null,images:[],stock:null,inStock:!1,categories:[],sizes:[]}),f=x[0],g=x[1],m=Object(v.useState)([]),y=m[0],k=m[1],w=Object(v.useState)([]),C=w[0],S=w[1],_=Object(v.useState)(""),N=_[0],z=_[1],P=Object(v.useState)(""),E=P[0],D=P[1],L=Object(v.useState)(null),T=L[0],I=L[1],V=Object(v.useState)(""),W=V[0],X=V[1],F=Object(v.useState)(null),R=F[0],U=F[1],q=Object(u.useRouter)().push,G=Object(h.a)();return Object(v.useEffect)((function(){s.a.get("".concat(j.a,"/api/category/").concat(localStorage.userId),{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){return k(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0645\u062d\u0635\u0648\u0644 \u062c\u062f\u06cc\u062f"})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:G.parent,children:[Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0646\u0627\u0645 \u0645\u062d\u0635\u0648\u0644"})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{variant:"outlined",type:"text",value:null===f||void 0===f?void 0:f.name,onChange:function(e){return g(p(p({},f),{},{name:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0645\u062e\u062a\u0635\u0631"})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{variant:"outlined",type:"text",value:null===f||void 0===f?void 0:f.description,onChange:function(e){return g(p(p({},f),{},{description:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a"})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{variant:"outlined",type:"text",value:null===f||void 0===f?void 0:f.price,onChange:function(e){return g(p(p({},f),{},{price:Object(O.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a \u0628\u0627 \u062a\u062e\u0641\u06cc\u0641"})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{variant:"outlined",type:"text",value:null===f||void 0===f?void 0:f.discount,onChange:function(e){return g(p(p({},f),{},{discount:Object(O.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null!==f&&void 0!==f&&null!==(e=f.images)&&void 0!==e&&e.length?null===f||void 0===f||null===(t=f.images)||void 0===t?void 0:t.map((function(e){return Object(i.jsx)("li",{style:{display:"inline-block"},children:Object(i.jsx)("img",{style:{padding:10},width:200,alt:null===f||void 0===f?void 0:f.name})})})):null})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"file",name:"image",id:"image",onChange:function(e){U(e.target.files[0]),X(URL.createObjectURL(e.target.files[0]))}}),Object(i.jsx)("img",{src:W})]})})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null===f||void 0===f||null===(n=f.categories)||void 0===n?void 0:n.map((function(e){return Object(i.jsx)("li",{onClick:function(){var t,n=null===f||void 0===f||null===(t=f.categories)||void 0===t?void 0:t.filter((function(t){return(null===t||void 0===t?void 0:t.name)!==(null===e||void 0===e?void 0:e.name)}));g(p(p({},f),{},{categories:n}))},children:null===e||void 0===e?void 0:e.name})}))})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(d.a,{fullWidth:!0,options:y,getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(i.jsx)(r.a,p(p({},e),{},{variant:"outlined"}))},onChange:function(e,t){if(z(t),C.includes(null===t||void 0===t?void 0:t._id)){var n=C.filter((function(e){return e!==(null===t||void 0===t?void 0:t._id)}));S(n)}else S([].concat(Object(c.a)(C),[null===t||void 0===t?void 0:t._id]))}})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{color:"primary",variant:"outlined",onClick:function(){N?null!==f&&void 0!==f&&f.categories.includes(N)?alert("\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0632 \u0642\u0628\u0644 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647 \u0627\u0633\u062a"):g(p(p({},f),{},{categories:[].concat(Object(c.a)(f.categories),[N])})):alert("\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f")},children:"\u0627\u0641\u0632\u0648\u062f\u0646"})})]})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062a\u0639\u062f\u0627\u062f \u0645\u0648\u062c\u0648\u062f\u06cc \u062f\u0631 \u0627\u0646\u0628\u0627\u0631"})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{variant:"outlined",type:"number",value:null===f||void 0===f?void 0:f.stock,onChange:function(e){return g(p(p({},f),{},{stock:Object(O.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:G.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0633\u0627\u06cc\u0632"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null!==f&&void 0!==f&&null!==(l=f.sizes)&&void 0!==l&&l.length?null===f||void 0===f||null===(a=f.sizes)||void 0===a?void 0:a.map((function(e){return Object(i.jsxs)("li",{onClick:function(){var t,n=null===f||void 0===f||null===(t=f.sizes)||void 0===t?void 0:t.filter((function(t){return(null===t||void 0===t?void 0:t.size)!==(null===e||void 0===e?void 0:e.size)}));g(p(p({},f),{},{sizes:n}))},children:[null===e||void 0===e?void 0:e.size," - ",null===e||void 0===e?void 0:e.price]})})):null})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(d.a,{fullWidth:!0,options:["\u0628\u0632\u0631\u06af","\u0645\u062a\u0648\u0633\u0637","\u06a9\u0648\u0686\u06a9"],getOptionLabel:function(e){return e},renderInput:function(e){return Object(i.jsx)(r.a,p(p({},e),{},{variant:"outlined"}))},onChange:function(e,t){D("\u06a9\u0648\u0686\u06a9"===t?"small":"\u0645\u062a\u0648\u0633\u0637"===t?"normal":"large")}})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{variant:"outlined",type:"text",label:"\u0642\u06cc\u0645\u062a",onChange:function(e){I(Object(O.b)(e.target.value))},value:T})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{color:"primary",variant:"outlined",onClick:function(){T&&E?(g(p(p({},f),{},{sizes:[].concat(Object(c.a)(f.sizes),[{size:E,price:T}])})),I(""),D("")):alert("\u0642\u06cc\u0645\u062a \u0648 \u0633\u0627\u06cc\u0632 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f")},children:"\u0627\u0641\u0632\u0648\u062f\u0646"})})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{fullWidth:!0,color:"primary",variant:"outlined",onClick:function(){var e=f;null===e||void 0===e||e.stock,e.inStock=!0,e.categories=C,e.price>e.discount?s.a.post("".concat(j.a,"/api/product"),e,{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){var t,n=new FormData;null===n||void 0===n||n.append("image",R),s.a.post("".concat(j.a,"/api/product/upload/").concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id),n,{headers:{"x-auth-token":localStorage.token}}),q("/products")})).catch((function(e){return b.b.error(e.message)})):b.b.error("\u0642\u06cc\u0645\u062a \u0645\u062d\u0635\u0648\u0644 \u0627\u0632 \u0642\u06cc\u0645\u062a \u062a\u062e\u0641\u06cc\u0641 \u062e\u0648\u0631\u062f\u0647 \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627\u06cc\u062f")},size:"large",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0645\u062d\u0635\u0648\u0644"})})]})]})},g=function(){return Object(i.jsx)(f,{})};g.Layout=!0;t.default=g},"on/f":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-product",function(){return n("Vih8")}])}},[["on/f",0,1,2,4,3,6,7,13]]]);