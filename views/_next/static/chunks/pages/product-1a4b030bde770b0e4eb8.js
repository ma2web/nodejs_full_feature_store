_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"+cZo":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return n("yCkV")}])},xvhg:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("8rE2");function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,c=!1,l=void 0;try{for(var o,r=e[Symbol.iterator]();!(i=(o=r.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(d){c=!0,l=d}finally{try{i||null==r.return||r.return()}finally{if(c)throw l}}return n}}(e,t)||Object(i.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},yCkV:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),c=n("xvhg"),l=n("q1tI"),o=n.n(l),r=n("20a2"),d=n("vDqi"),s=n.n(d),a=n("aFs1"),u=n("z7pX"),j=n("cpVT"),v=n("r9w1"),b=n("Z3vd"),h=n("+bXu"),O=n("Qh7G"),x=n("13PV");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t,n,c,o,d,j=e.product,p=e.setProduct,g=Object(x.a)(),m=Object(l.useState)([]),y=m[0],k=m[1],w=Object(l.useState)([]),S=w[0],_=w[1],C=Object(l.useState)(""),N=C[0],z=C[1],P=Object(l.useState)(""),E=P[0],D=P[1],L=Object(l.useState)(null),T=L[0],I=L[1],A=Object(l.useState)(""),q=A[0],R=A[1],V=Object(l.useState)(null),X=V[0],U=V[1],W=Object(r.useRouter)(),Z=W.query,F=W.push;return Object(l.useEffect)((function(){s.a.get("".concat(a.a,"/api/category/").concat(localStorage.userId),{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){return k(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0645\u062d\u0635\u0648\u0644"})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:g.parent,children:[Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0635\u0648\u0644"})}),Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{variant:"outlined",type:"text",value:null===j||void 0===j?void 0:j.name,onChange:function(e){return p(f(f({},j),{},{name:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0645\u062d\u0635\u0648\u0644"})}),Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{variant:"outlined",type:"text",value:null===j||void 0===j?void 0:j.description,onChange:function(e){return p(f(f({},j),{},{description:e.target.value}))}})})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a"})}),Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{variant:"outlined",type:"text",value:null===j||void 0===j?void 0:j.price,onChange:function(e){return p(f(f({},j),{},{price:Object(O.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a \u0628\u0627 \u062a\u062e\u0641\u06cc\u0641"})}),Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{variant:"outlined",type:"text",value:null===j||void 0===j?void 0:j.discount,onChange:function(e){return p(f(f({},j),{},{discount:Object(O.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0639\u06a9\u0633 \u0647\u0627\u06cc \u0645\u062d\u0635\u0648\u0644"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{style:{display:"flex"},children:null!==j&&void 0!==j&&null!==(t=j.images)&&void 0!==t&&t.length?null===j||void 0===j||null===(n=j.images)||void 0===n?void 0:n.map((function(e){return Object(i.jsx)("li",{onClick:function(){var t,n=null===j||void 0===j||null===(t=j.images)||void 0===t?void 0:t.filter((function(t){return t!==e}));p(f(f({},j),{},{images:n}))},children:Object(i.jsx)("img",{style:{padding:10},width:200,src:"".concat(a.a,"/uploads/admin/product/").concat(null===j||void 0===j?void 0:j._id,"/").concat(e),alt:null===j||void 0===j?void 0:j.name})},null===e||void 0===e?void 0:e._id)})):"\u0639\u06a9\u0633\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"file",name:"image",id:"image",onChange:function(e){U(e.target.files[0]),R(URL.createObjectURL(e.target.files[0]))}}),Object(i.jsx)("img",{src:q})]})})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null===j||void 0===j||null===(c=j.categories)||void 0===c?void 0:c.map((function(e){return Object(i.jsx)("li",{onClick:function(){var t,n=null===j||void 0===j||null===(t=j.categories)||void 0===t?void 0:t.filter((function(t){return(null===t||void 0===t?void 0:t.name)!==(null===e||void 0===e?void 0:e.name)}));p(f(f({},j),{},{categories:n}))},children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id)}))})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(h.a,{fullWidth:!0,options:y,getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(i.jsx)(v.a,f(f({},e),{},{variant:"outlined",label:"\u0627\u0646\u062a\u062e\u0627\u0628"}))},onChange:function(e,t){if(z(t),S.includes(t._id)){var n=S.filter((function(e){return e!==t._id}));_(n)}else _([].concat(Object(u.a)(S),[t._id]))}})}),Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{color:"primary",variant:"outlined",onClick:function(){return p(f(f({},j),{},{categories:[].concat(Object(u.a)(j.categories),[N])}))},children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc"})})]})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u062a\u0639\u062f\u0627\u062f \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u0627\u0646\u0628\u0627\u0631"})}),Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{variant:"outlined",type:"number",value:null===j||void 0===j?void 0:j.stock,onChange:function(e){return p(f(f({},j),{},{stock:Object(O.b)(e.target.value)}))}})})]}),Object(i.jsxs)("div",{className:g.child,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\u0633\u0627\u06cc\u0632 \u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f"})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:null!==j&&void 0!==j&&null!==(o=j.sizes)&&void 0!==o&&o.length?null===j||void 0===j||null===(d=j.sizes)||void 0===d?void 0:d.map((function(e){return Object(i.jsxs)("li",{onClick:function(){var t,n=null===j||void 0===j||null===(t=j.sizes)||void 0===t?void 0:t.filter((function(t){return(null===t||void 0===t?void 0:t.size)!==(null===e||void 0===e?void 0:e.size)}));p(f(f({},j),{},{sizes:n}))},children:[null===e||void 0===e?void 0:e.size," - ",null===e||void 0===e?void 0:e.price]},null===e||void 0===e?void 0:e._id)})):"\u0633\u0627\u06cc\u0632\u06cc \u0627\u0636\u0627\u0641\u0647 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(h.a,{fullWidth:!0,options:["\u0628\u0632\u0631\u06af","\u0645\u062a\u0648\u0633\u0637","\u06a9\u0648\u0686\u06a9"],getOptionLabel:function(e){return e},renderInput:function(e){return Object(i.jsx)(v.a,f(f({},e),{},{variant:"outlined"}))},onChange:function(e,t){D("\u06a9\u0648\u0686\u06a9"===t?"small":"\u0645\u062a\u0648\u0633\u0637"===t?"normal":"large")}})}),Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{variant:"outlined",type:"text",label:"\u0642\u06cc\u0645\u062a",onChange:function(e){return I(Object(O.b)(e.target.value))},value:T})}),Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{color:"primary",variant:"outlined",onClick:function(){p(f(f({},j),{},{sizes:[].concat(Object(u.a)(j.sizes),[{size:E,price:T}])}))},children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0633\u0627\u06cc\u0632"})})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{fullWidth:!0,color:"primary",variant:"outlined",onClick:function(){var e,t,n=j;n.user=null===j||void 0===j||null===(e=j.user)||void 0===e?void 0:e._id,n.stock,n.inStock=!0;var i,c=null===j||void 0===j||null===(t=j.categories)||void 0===t?void 0:t.map((function(e){return j._id}));S.length>0?n.categories=[].concat(Object(u.a)(c),Object(u.a)(S)):(null===n||void 0===n||null===(i=n.categories)||void 0===i?void 0:i.length)>0?delete n.categories:n.categories=[];s.a.put("".concat(a.a,"/api/product/").concat(null===Z||void 0===Z?void 0:Z.id),n,{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){if(X){var t=new FormData;t.append("image",X),s.a.post("".concat(a.a,"/api/product/upload/").concat(null===n||void 0===n?void 0:n._id),t,{headers:{"x-auth-token":localStorage.token}}).then((function(e){return F("/products")})).catch((function(e){return console.log(e)}))}else F("/products")})).catch((function(e){return console.log(e)}))},children:"\u0628\u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062d\u0635\u0648\u0644"})})]})]})},m=function(){var e,t,n,l,d,u,j,v=Object(r.useRouter)().query.id,h=Object(x.a)(),O=o.a.useState(null),p=Object(c.a)(O,2),f=p[0],m=p[1],y=o.a.useState(!1),k=Object(c.a)(y,2),w=k[0],S=k[1];return o.a.useEffect((function(){s.a.get("".concat(a.a,"/api/product/").concat(v),{headers:{"Content-Type":"application/json","x-auth-token":localStorage.token}}).then((function(e){return m(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[v]),Object(i.jsx)("div",{className:h.product,children:Object(i.jsx)("div",{children:w?Object(i.jsx)(g,{product:f,setProduct:m}):Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{color:"primary",onClick:function(){return S((function(e){return!e}))},variant:"outlined",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0645\u062d\u0635\u0648\u0644"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("h1",{children:null===f||void 0===f?void 0:f.name}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:h.row,children:[Object(i.jsxs)("div",{className:h.col,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:null===f||void 0===f?void 0:f.price})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u0642\u06cc\u0645\u062a \u0628\u0627 \u062a\u062e\u0641\u06cc\u0641"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:null===f||void 0===f?void 0:f.discount})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u0639\u06a9\u0633 \u0647\u0627\u06cc \u0645\u062d\u0635\u0648\u0644"}),Object(i.jsx)("ul",{style:{display:"flex"},children:null!==f&&void 0!==f&&null!==(e=f.images)&&void 0!==e&&e.length?null===f||void 0===f||null===(t=f.images)||void 0===t?void 0:t.map((function(e){return Object(i.jsx)("li",{style:{display:"inline-block"},children:Object(i.jsx)("img",{width:200,style:{padding:10},src:"".concat(a.a,"/uploads/admin/product/").concat(v,"/").concat(e),alt:null===f||void 0===f?void 0:f.name})})})):"No Photos Added"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc"}),Object(i.jsx)("ul",{children:null===f||void 0===f||null===(n=f.categories)||void 0===n?void 0:n.map((function(e){return Object(i.jsx)("li",{children:null===e||void 0===e?void 0:e.name})}))})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u062a\u0639\u062f\u0627\u062f \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u0627\u0646\u0628\u0627\u0631"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:null===f||void 0===f?void 0:f.stock})})]})]}),Object(i.jsxs)("div",{className:h.col,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u0633\u0627\u06cc\u0632\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f"}),Object(i.jsx)("ul",{children:null!==f&&void 0!==f&&null!==(l=f.sizes)&&void 0!==l&&l.length?null===f||void 0===f||null===(d=f.sizes)||void 0===d?void 0:d.map((function(e){return Object(i.jsxs)("li",{children:[null===e||void 0===e?void 0:e.size," - ",null===e||void 0===e?void 0:e.price]})})):"\u0633\u0627\u06cc\u0632\u06cc \u0627\u0636\u0627\u0641\u0647 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u062a\u0639\u062f\u0627\u062f \u062f\u06cc\u062f\u06af\u0627\u0647 \u0647\u0627"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:null!==f&&void 0!==f&&null!==(u=f.comments)&&void 0!==u&&u.length?null===f||void 0===f||null===(j=f.comments)||void 0===j?void 0:j.map((function(e){return null===e||void 0===e?void 0:e.size})):"\u0628\u062f\u0648\u0646 \u062f\u06cc\u062f\u06af\u0627\u0647"})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u062a\u0627\u0631\u06cc\u062e \u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc"}),Object(i.jsx)("ul",{children:new Date(null===f||void 0===f?void 0:f.createdAt).toLocaleString()})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u062a\u0627\u0631\u06cc\u062e \u0622\u062e\u0631\u06cc\u0646 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc"}),Object(i.jsx)("ul",{children:new Date(null===f||void 0===f?void 0:f.updatedAt).toLocaleString()})]})]})]})]})})})},y=function(){return Object(i.jsx)(m,{})};y.Layout=!0;t.default=y}},[["+cZo",0,1,2,3,5,4,6,14]]]);