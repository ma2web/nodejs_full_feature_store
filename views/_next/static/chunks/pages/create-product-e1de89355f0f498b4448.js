_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{Vih8:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),c=n("z7pX"),l=n("cpVT"),o=n("r9w1"),r=n("Z3vd"),a=n("+bXu"),d=n("vDqi"),s=n.n(d),u=n("aFs1"),j=n("20a2"),v=n("q1tI"),b=n("Qh7G"),O=n("13PV");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e,t,n,l,d,h=Object(v.useState)({name:"",description:"",price:null,discount:null,images:[],stock:null,inStock:!1,categories:[],sizes:[]}),p=h[0],f=h[1],g=Object(v.useState)([]),m=g[0],y=g[1],k=Object(v.useState)([]),w=k[0],C=k[1],S=Object(v.useState)(""),_=S[0],N=S[1],z=Object(v.useState)(""),P=z[0],E=z[1],D=Object(v.useState)(null),L=D[0],T=D[1],I=Object(v.useState)(""),V=I[0],X=I[1],R=Object(v.useState)(null),U=R[0],W=R[1],q=Object(j.useRouter)().push,F=Object(O.a)();return Object(v.useEffect)((function(){s.a.get("".concat(u.a,"/api/category/").concat(localStorage.userId),{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){return y(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("div",{className:F.parent,children:[Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0646\u0627\u0645 \u0645\u062d\u0635\u0648\u0644"})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{variant:"outlined",type:"text",value:null===p||void 0===p?void 0:p.name,onChange:function(e){return f(x(x({},p),{},{name:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0645\u062e\u062a\u0635\u0631"})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{variant:"outlined",type:"text",value:null===p||void 0===p?void 0:p.description,onChange:function(e){return f(x(x({},p),{},{description:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a"})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{variant:"outlined",type:"text",value:null===p||void 0===p?void 0:p.price,onChange:function(e){return f(x(x({},p),{},{price:Object(b.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a \u0628\u0627 \u062a\u062e\u0641\u06cc\u0641"})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{variant:"outlined",type:"text",value:null===p||void 0===p?void 0:p.discount,onChange:function(e){return f(x(x({},p),{},{discount:Object(b.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null!==p&&void 0!==p&&null!==(e=p.images)&&void 0!==e&&e.length?null===p||void 0===p||null===(t=p.images)||void 0===t?void 0:t.map((function(e){return Object(i.jsx)("li",{style:{display:"inline-block"},children:Object(i.jsx)("img",{style:{padding:10},width:200,alt:null===p||void 0===p?void 0:p.name})})})):null})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"file",name:"image",id:"image",onChange:function(e){W(e.target.files[0]),X(URL.createObjectURL(e.target.files[0]))}}),Object(i.jsx)("img",{src:V})]})})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null===p||void 0===p||null===(n=p.categories)||void 0===n?void 0:n.map((function(e){return Object(i.jsx)("li",{onClick:function(){var t,n=null===p||void 0===p||null===(t=p.categories)||void 0===t?void 0:t.filter((function(t){return(null===t||void 0===t?void 0:t.name)!==(null===e||void 0===e?void 0:e.name)}));f(x(x({},p),{},{categories:n}))},children:null===e||void 0===e?void 0:e.name})}))})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(a.a,{fullWidth:!0,options:m,getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(i.jsx)(o.a,x(x({},e),{},{variant:"outlined"}))},onChange:function(e,t){if(N(t),w.includes(null===t||void 0===t?void 0:t._id)){var n=w.filter((function(e){return e!==(null===t||void 0===t?void 0:t._id)}));C(n)}else C([].concat(Object(c.a)(w),[null===t||void 0===t?void 0:t._id]))}})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{color:"primary",variant:"outlined",onClick:function(){_?null!==p&&void 0!==p&&p.categories.includes(_)?alert("\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0632 \u0642\u0628\u0644 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647 \u0627\u0633\u062a"):f(x(x({},p),{},{categories:[].concat(Object(c.a)(p.categories),[_])})):alert("\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f")},children:"\u0627\u0641\u0632\u0648\u062f\u0646"})})]})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062a\u0639\u062f\u0627\u062f \u0645\u0648\u062c\u0648\u062f\u06cc \u062f\u0631 \u0627\u0646\u0628\u0627\u0631"})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{variant:"outlined",type:"number",value:null===p||void 0===p?void 0:p.stock,onChange:function(e){return f(x(x({},p),{},{stock:Object(b.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:F.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0633\u0627\u06cc\u0632"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null!==p&&void 0!==p&&null!==(l=p.sizes)&&void 0!==l&&l.length?null===p||void 0===p||null===(d=p.sizes)||void 0===d?void 0:d.map((function(e){return Object(i.jsxs)("li",{onClick:function(){var t,n=null===p||void 0===p||null===(t=p.sizes)||void 0===t?void 0:t.filter((function(t){return(null===t||void 0===t?void 0:t.size)!==(null===e||void 0===e?void 0:e.size)}));f(x(x({},p),{},{sizes:n}))},children:[null===e||void 0===e?void 0:e.size," - ",null===e||void 0===e?void 0:e.price]})})):null})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(a.a,{fullWidth:!0,options:["\u0628\u0632\u0631\u06af","\u0645\u062a\u0648\u0633\u0637","\u06a9\u0648\u0686\u06a9"],getOptionLabel:function(e){return e},renderInput:function(e){return Object(i.jsx)(o.a,x(x({},e),{},{variant:"outlined"}))},onChange:function(e,t){E("\u06a9\u0648\u0686\u06a9"===t?"small":"\u0645\u062a\u0648\u0633\u0637"===t?"normal":"large")}})}),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{variant:"outlined",type:"text",label:"\u0642\u06cc\u0645\u062a",onChange:function(e){T(Object(b.b)(e.target.value))},value:L})}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{color:"primary",variant:"outlined",onClick:function(){L&&P?(f(x(x({},p),{},{sizes:[].concat(Object(c.a)(p.sizes),[{size:P,price:L}])})),T(""),E("")):alert("\u0642\u06cc\u0645\u062a \u0648 \u0633\u0627\u06cc\u0632 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f")},children:"\u0627\u0641\u0632\u0648\u062f\u0646"})})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{fullWidth:!0,color:"primary",variant:"outlined",onClick:function(){var e=p;null===e||void 0===e||e.stock,e.inStock=!0,e.categories=w,s.a.post("".concat(u.a,"/api/product"),e,{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){if(null!==e&&void 0!==e&&e.data){var t,n=new FormData;null===n||void 0===n||n.append("image",U),s.a.post("".concat(u.a,"/api/product/upload/").concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id),n,{headers:{"x-auth-token":localStorage.token}}),q("/products")}})).catch((function(e){return console.log(e)}))},size:"large",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0645\u062d\u0635\u0648\u0644"})})]})},f=function(){return Object(i.jsx)(p,{})};f.Layout=!0;t.default=f},"on/f":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-product",function(){return n("Vih8")}])}},[["on/f",0,1,2,5,4,3,7,13]]]);