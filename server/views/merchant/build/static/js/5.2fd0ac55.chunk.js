(this.webpackJsonpeapay=this.webpackJsonpeapay||[]).push([[5],{178:function(e,t,n){"use strict";var a=n(166),r=n(55),c=n(177),s=(n(179),n(30)),o=n(19),i=n(3);t.a=function(){return Object(i.jsx)(a.a,{className:"auth-side h-100",children:Object(i.jsxs)(c.Slide,{left:!0,children:[Object(i.jsx)(s.b,{className:"auth-side",to:o.b,children:Object(i.jsx)("img",{src:r.b,alt:"logo"})}),Object(i.jsxs)("div",{className:"content-side d-flex flex-column align-items-center justify-content-center h-100",children:[Object(i.jsx)("img",{src:r.a,alt:"phone purchase",className:"w-50"}),Object(i.jsx)("h2",{className:"text-center py-3",children:"Merchant"}),Object(i.jsx)("p",{className:"text-center",children:"Help you and your customer experience seamless payment transactions; get payment in more ways, easy delivery and tax audit"})]})]})})}},179:function(e,t,n){},180:function(e,t,n){"use strict";var a=n(333),r=n(340);t.a=function(e,t){var n=Object(a.a)();return"up"===e?Object(r.a)(n.breakpoints.up(t)):Object(r.a)(n.breakpoints.down(t))}},181:function(e,t,n){"use strict";var a=n(3);t.a=function(e){var t=e.label,n=e.variant,r=e.rounded,c=e.className,s="primary"===n||"secondary"===n?"btn-primary-eapay":"outline-primary"===n?"btn-primary-outline-eapay":"outline-secondary"===n?"btn-secondary-outline-eapay":"",o=r?"btn-rounded-eapay ":"";return Object(a.jsx)("button",{className:"btn ".concat(s," ").concat(o," ").concat(c),children:t})}},182:function(e,t,n){"use strict";var a=n(20),r=n(196),c=Object(r.a)({floatingLabelWrap:{display:"flex",flexDirection:"column",position:"relative",transformOrigin:"top left",transition:"all 0.5s ease-out","&:focus-within label":{transform:"translate(0, 7px) scale(0.75)"}},input:{width:"100%",height:60,padding:"14px 15px 0 20px",outline:0,borderRadius:5,background:"rgba(196, 196, 196, 0.18)",fontSize:20,fontWeight:300,fontFamily:"'Roboto', sans-serif",border:0,color:"#818181",'input[type="date"]':{paddingRight:12}},label:{fontSize:14,padding:"0 12px",fontWeight:500,fontFamily:"'Roboto', sans-serif",color:"rgba(129, 129, 129, 0.6)",pointerEvents:"none",position:"absolute",transform:"translate(0, 19px) scale(1)"},active:{transform:"translate(0, 7px) scale(0.75)"}}),s=n(3);t.a=function(e){var t=e.type,n=e.placeholder,r=e.label,o=e.name,i=e.input,l=e.className,u=e.inputClassName,d=e.inputContainerClassName,b=e.meta,p=c();return Object(s.jsxs)("div",{className:d,children:[Object(s.jsxs)("div",{className:"".concat(p.floatingLabelWrap,"  ").concat(l),children:[Object(s.jsx)("input",Object(a.a)(Object(a.a)({},i),{},{type:t,name:o,className:"".concat(p.input,"  ").concat(u),id:o,placeholder:n})),Object(s.jsx)("label",{htmlFor:o,className:"".concat(p.label," ").concat(b.visited&&i.value?p.active:""),children:r})]}),(null===b||void 0===b?void 0:b.touched)&&(null===b||void 0===b?void 0:b.error)]})}},187:function(e,t,n){"use strict";n(188);var a=n(186),r=n.n(a),c=n(3);t.a=function(e){var t=e.content,n=e.status,a=e.onCancel,s=e.notify;return Object(c.jsx)(r.a,{top:!0,when:s,children:Object(c.jsxs)("div",{className:"".concat("success"===n?"bg-success":"bg-danger"),id:"topbar",children:[Object(c.jsx)("p",{className:"m-0",children:t}),Object(c.jsx)("label",{onClick:a,className:"m-0",id:"hideTop",children:"X"})]})})}},188:function(e,t,n){},191:function(e,t,n){"use strict";var a=n(174),r=n.n(a),c=n(175),s=n(184),o=n.n(s),i=n(20),l=n(208),u=n.n(l),d=n(209),b=n.n(d),p=o.a.create();b()(p,{retries:2,retryDelay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=1e3*Math.pow(2,e),n=1e3*Math.random();return t+n},retryCondition:b.a.isRetryableError});var j=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,o,l,d,b,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,c=t.params,s=t.data,o=t.headers,l=t.token,d=l||localStorage.getItem(""),b={method:a,params:c,data:s,headers:Object(i.a)({"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(d)},o)},"GET"!==a&&"DELETE"!==a||(b=u()(b,["data"])),e.next=6,p(Object(i.a)({url:n},b));case 6:return j=e.sent,e.abrupt("return",j);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(31);t.a={createUserAccount:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(Object(h.a)(!0));case 3:return t.next=5,j({url:"/api/merchant/register",method:"post",data:e});case 5:if(c=t.sent,!(null===(a=c.data)||void 0===a?void 0:a.success)){t.next=14;break}return t.next=9,n(Object(h.a)(!1));case 9:return t.next=11,n(Object(h.c)(c.data));case 11:return t.abrupt("return",c.data);case 14:return t.next=16,n(Object(h.a)(!1));case 16:return t.next=18,n(Object(h.b)(null===c||void 0===c?void 0:c.data));case 18:t.next=34;break;case 20:return t.prev=20,t.t0=t.catch(0),t.next=24,n(Object(h.a)(!1));case 24:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.response)){t.next=29;break}return t.next=27,n(Object(h.b)("Network error - check your connection"));case 27:t.next=33;break;case 29:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.request)){t.next=33;break}return console.log("we"),t.next=33,n(Object(h.b)("Network error - check your connection"));case 33:throw t.t0;case 34:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}()},loginUserAccount:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(Object(h.a)(!0));case 3:return t.next=5,j({url:"/api/merchant/login",method:"post",data:e});case 5:if(c=t.sent,!(null===(a=c.data)||void 0===a?void 0:a.success)){t.next=14;break}return t.next=9,n(Object(h.a)(!1));case 9:return t.next=11,n(Object(h.c)(c.data));case 11:return t.abrupt("return",c.data);case 14:return t.next=16,n(Object(h.a)(!1));case 16:return t.next=18,n(Object(h.b)(null===c||void 0===c?void 0:c.data));case 18:t.next=33;break;case 20:return t.prev=20,t.t0=t.catch(0),t.next=24,n(Object(h.a)(!1));case 24:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.response)){t.next=29;break}return t.next=27,n(Object(h.b)(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.payload));case 27:t.next=32;break;case 29:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.request)){t.next=32;break}return t.next=32,n(Object(h.b)("Network error - check your connection"));case 32:throw t.t0;case 33:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}()},verifyUserAccount:function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e,t),n.prev=1,n.next=4,a(Object(h.a)(!0));case 4:return n.next=6,j({url:"/api/merchant/verify",data:e,method:"post",params:t});case 6:n.sent,n.next=22;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,a(Object(h.a)(!1));case 13:if(!(null===n.t0||void 0===n.t0?void 0:n.t0.response)){n.next=18;break}return n.next=16,a(Object(h.b)(null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.payload));case 16:n.next=21;break;case 18:if(!(null===n.t0||void 0===n.t0?void 0:n.t0.request)){n.next=21;break}return n.next=21,a(Object(h.b)("Network error - check your connection"));case 21:throw n.t0;case 22:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}}},240:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var a=n(174),r=n.n(a),c=n(175),s=n(192),o=n(193),i=n(198),l=n(197),u=n(0),d=n(329),b=n(330),p=n(166),j=(n(240),n(335)),h=n(334),m=n(55),x=n(178),f=n(182),v=n(30),O=n(177),y=n(19),g=n(180),N=n(181),k=n(58),w=n(187),C=n(3),S=Object(h.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.loading,a=e.notify,r=e.onNotificationCancel,c=Object(g.a)("down","md");return Object(C.jsxs)("div",{className:"login-top-container",children:[Object(C.jsx)(w.a,{content:a,onCancel:r,notify:a}),n?Object(C.jsx)(k.a,{}):Object(C.jsxs)(d.a,{className:"h-100",children:[c?null:Object(C.jsx)(b.a,{md:4,children:Object(C.jsx)(x.a,{})}),Object(C.jsx)(b.a,{md:12,lg:8,children:Object(C.jsx)(p.a,{className:"d-flex flex-column justify-content-center h-100 ",children:Object(C.jsx)(O.Slide,{right:!0,children:Object(C.jsx)("form",{onSubmit:t,children:Object(C.jsxs)("div",{className:"container-div ".concat(c?"w-100 text-center":"w-75"," mx-auto"),children:[c?Object(C.jsx)("img",{src:m.b,alt:"logo",className:"mb-4"}):null,Object(C.jsx)("h5",{className:"mb-4 ".concat(c?"text-center":""),children:"Welcome back, let start today\u2019s business"}),Object(C.jsx)(j.a,{name:"email",type:"text",label:"Email or Phone",component:f.a}),Object(C.jsx)(j.a,{name:"password",label:"Password",type:"password",inputContainerClassName:"mt-4",component:f.a}),Object(C.jsxs)(d.a,{className:"mt-3 align-items-center",children:[Object(C.jsx)(b.a,{md:5,children:Object(C.jsx)(N.a,{variant:"primary",className:"w-100",label:"Login"})}),Object(C.jsx)(b.a,{className:"mt-lg-0 mt-4",children:Object(C.jsxs)(v.b,{to:y.c,children:[Object(C.jsxs)("span",{className:"text-dark",children:["I don\u2019t have an account?","   "]}),"Register"]})})]}),Object(C.jsx)("div",{className:"mt-3",children:Object(C.jsx)(v.b,{to:y.d,children:"Forgot password"})})]})})})})})]})]})})),R=n(191),A=n(56),E=n(4),L=n(31),W=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.onLogin(t);case 2:!0===(null===(c=e.sent)||void 0===c||null===(n=c.merchant)||void 0===n?void 0:n.newDevice)||!1===c.merchant.verified?a.props.history.push(y.e):a.props.history.push(y.a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.props,n=t.isloading,a=t.isNotification,r=t.onClose;return Object(C.jsx)(S,{onSubmit:e,loading:n,notify:a,onNotificationCancel:r})}}]),n}(u.Component),D=Object(E.f)(W);t.default=Object(A.b)((function(e){return{isloading:e.otherReducer.isloading,isNotification:e.otherReducer.notify}}),(function(e){return{onLogin:function(t){return e(R.a.loginUserAccount(t))},onClose:function(){return e(Object(L.b)(""))}}}))(D)}}]);
//# sourceMappingURL=5.2fd0ac55.chunk.js.map