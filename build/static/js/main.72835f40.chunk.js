(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{53:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),i=c(31),a=c.n(i),u=(c(52),c(53),c(45)),o=c(21),s=c(19),j=c(34),d={auth:{clientId:"8386efec-d021-4f0a-9c85-ea11809d4046",authority:"https://login.microsoftonline.com/372ee9e0-9ce0-4033-a64a-c07073a91ecd",redirectUri:"https://awesome-lichterman-43e5d2.netlify.app"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,c){if(!c)switch(e){case j.a.Error:return void console.error(t);case j.a.Info:return void console.info(t);case j.a.Verbose:return void console.debug(t);case j.a.Warning:return void console.warn(t)}}}}},l={scopes:["User.Read"]},b="https://graph.microsoft.com",O=c(35),h=c(24),p=c(7),x=function(){var e=Object(s.e)().instance;return Object(p.jsx)(O.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:Object(p.jsx)(h.a.Item,{as:"button",onClick:function(){"popup"==="popup"&&e.loginPopup(l).catch((function(e){console.log(e)}))},children:"Sign in using Popup"})})},f=function(){var e=Object(s.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(p.jsxs)(O.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(p.jsx)(h.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(p.jsx)(h.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},g=function(e){var t=Object(s.d)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{textAlign:"center",padding:"10px 0px 50px 0px"},children:Object(p.jsx)("img",{src:"data:image/png;base64,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",height:65,width:400})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)("div",{}),Object(p.jsxs)("div",{style:{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",padding:"90px 86px",textAlign:"center"},children:[Object(p.jsx)("h4",{children:"Please use your Microsoft credentials to signIn"}),Object(p.jsx)("br",{}),t?Object(p.jsx)(f,{}):Object(p.jsx)(x,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),e.children]}),Object(p.jsx)("div",{})]})]})},A=function(e){return console.log(e.graphData),Object(p.jsxs)("div",{id:"profile-div",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},m=c(26),q=c.n(m),v=c(33);function w(){return(w=Object(v.a)(q.a.mark((function e(t){var c,n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new Headers,n="Bearer ".concat(t),c.append("Authorization",n),r={method:"GET",headers:c},e.abrupt("return",fetch(b,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=c(39),F=(c(59),function(){var e=Object(s.e)(),t=e.instance,c=e.accounts,r=Object(n.useState)(null),i=Object(o.a)(r,2),a=i[0],j=i[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h5",{className:"card-title",children:["Welcome ",c[0].name]}),a?Object(p.jsx)(A,{graphData:a}):Object(p.jsx)(G.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(u.a)(Object(u.a)({},l),{},{account:c[0]})).then((function(e){(function(e){return w.apply(this,arguments)})(e.accessToken).then((function(e){return j(e)}))}))},children:"Request Profile Information"})]})}),T=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(s.a,{children:Object(p.jsx)(F,{})}),Object(p.jsx)(s.c,{children:Object(p.jsx)("h6",{className:"card-title",children:"Your Profile Name will get displayed here after signingIn"})})]})};function X(){return Object(p.jsx)(g,{children:Object(p.jsx)(T,{})})}var J=new(c(65).a)(d);a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(s.b,{instance:J,children:Object(p.jsx)(X,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.72835f40.chunk.js.map