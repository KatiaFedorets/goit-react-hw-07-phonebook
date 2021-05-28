(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{23:function(t,e,n){"use strict";var r=n(16),c=n.n(r),a=n(22),o=n(18),s=n.n(o),u=n(4);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var i=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){s.a.defaults.headers.common.Authorization=""},l={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.registerRequest()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:r=e.sent,i(r.data.token),n(u.a.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.a.logoutRequest()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:b(),e(u.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.loginRequest()),e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:r=e.sent,i(r.data.token),n(u.a.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(a),e(u.a.getCurrentUserRequest()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:o=t.sent,console.log(o.data),e(u.a.getCurrentUserSuccess(o.data)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(u.a.getCurrentUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()}};e.a=l},4:function(t,e,n){"use strict";var r=n(3),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),s=Object(r.b)("auth/loginRequest"),u=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b={registerRequest:c,registerSuccess:a,registerError:o,logoutRequest:Object(r.b)("auth/logoutRequest"),logoutSuccess:Object(r.b)("auth/logoutSuccess"),logoutError:Object(r.b)("auth/logoutError"),loginRequest:s,loginSuccess:u,loginError:i,getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")};e.a=b},46:function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},79:function(t,e,n){"use strict";n.r(e);var r,c,a,o,s,u,i=n(0),b=n.n(i),l=n(24),j=n.n(l),d=n(15),O=n(9),h=n(45),f=n(33),g=n(34),p=n(36),x=n(35),C=n(6),v=n(46),k=n.n(v),m=n(1),y=function(t){var e=t.children;return Object(m.jsx)("div",{className:k.a.Container,children:e})},S={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name}},E={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},A=Object(O.b)((function(t){return{isAuthenticated:S.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(m.jsxs)("nav",{children:[Object(m.jsx)(d.b,{to:"/",exact:!0,style:E.link,activeStyle:E.activeLink,children:"Home"}),e&&Object(m.jsx)(d.b,{to:"/contacts",exact:!0,style:E.link,activeStyle:E.activeLink,children:"Contacts"})]})})),R=n(23),q={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},U={onLogout:R.a.logOut},w=Object(O.b)((function(t){return{name:S.getUsername(t)}}),U)((function(t){var e=t.name,n=t.onLogout;return Object(m.jsxs)("div",{style:q.container,children:[Object(m.jsxs)("span",{style:q.name,children:["Welcome, ",e]}),Object(m.jsx)("button",{type:"button",onClick:n,children:"Log out"})]})})),L={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},I=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(d.b,{to:"/register",exact:!0,style:L.link,activeStyle:L.activeLink,children:"SING UP"}),Object(m.jsx)(d.b,{to:"/login",exact:!0,style:L.link,activeStyle:L.activeLink,children:"LOG IN"})]})},B={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},T=Object(O.b)((function(t){return{isAuthenticated:S.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(m.jsxs)("header",{style:B.header,children:[Object(m.jsx)(A,{}),e?Object(m.jsx)(w,{}):Object(m.jsx)(I,{})]})})),z=n(19),F=n(28),G=Object(O.b)((function(t){return{isAuthenticated:S.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(F.a)(t,["component","isAuthenticated","redirectTo"]);return Object(m.jsx)(C.b,Object(z.a)(Object(z.a)({},c),{},{render:function(t){return n?Object(m.jsx)(e,Object(z.a)({},t)):Object(m.jsx)(C.a,{to:r})}}))})),W=Object(O.b)((function(t){return{isAuthenticated:S.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(F.a)(t,["component","isAuthenticated","redirectTo"]);return Object(m.jsx)(C.b,Object(z.a)(Object(z.a)({},c),{},{render:function(t){return n&&c.restricted?Object(m.jsx)(C.a,{to:r}):Object(m.jsx)(e,Object(z.a)({},t))}}))})),D=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,83))})),N=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,84))})),_=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,85))})),J=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,86))})),M=function(t){Object(p.a)(n,t);var e=Object(x.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(m.jsxs)(y,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(i.Suspense,{fallback:Object(m.jsx)("p",{children:"Loading..."}),children:Object(m.jsxs)(C.d,{children:[Object(m.jsx)(W,{exact:!0,path:"/",component:D}),Object(m.jsx)(W,{path:"/register",restricted:!0,redirectTo:"/contacts",component:N}),Object(m.jsx)(W,{path:"/login",restricted:!0,redirectTo:"/contacts",component:_}),Object(m.jsx)(G,{path:"/contacts",redirectTo:"/login",component:J})]})})]})}}]),n}(i.Component),H={onGetCurrentUser:R.a.getCurrentUser},P=Object(O.b)(null,H)(M),Q=n(27),K=n(2),V=n(3),X=n(7),Y=n(8),Z={items:Object(V.c)([],(r={},Object(K.a)(r,Y.a.fetchContactsSuccess,(function(t,e){return e.payload})),Object(K.a)(r,Y.a.addContactsSuccess,(function(t,e){var n=e.payload;return[].concat(Object(Q.a)(t),[n])})),Object(K.a)(r,Y.a.deleteContactsSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(K.a)(r,Y.a.fetchContactsSuccess,(function(t,e){return e.payload})),r)),error:Object(V.c)(!1,(c={},Object(K.a)(c,Y.a.addContactRequest,(function(){return!1})),Object(K.a)(c,Y.a.addContactSuccess,(function(){return!1})),Object(K.a)(c,Y.a.addContactError,(function(t,e){return e.payload})),Object(K.a)(c,Y.a.deleteContactError,(function(t,e){return e.payload})),Object(K.a)(c,Y.a.deleteContactsSuccess,(function(){return!1})),Object(K.a)(c,Y.a.deleteContactRequest,(function(){return!1})),Object(K.a)(c,Y.a.fetchContactsError,(function(t,e){return e.payload})),Object(K.a)(c,Y.a.fetchContactsRequest,(function(){return!0})),Object(K.a)(c,Y.a.fetchContactsSuccess,(function(){return!1})),c)),filter:Object(V.c)("",Object(K.a)({},Y.a.changeFilter,(function(t,e){return e.payload})))},$=Object(X.b)(Z),tt=n(17),et=n(47),nt=n.n(et),rt=n(4),ct={name:null,email:null},at=Object(V.c)(ct,(a={},Object(K.a)(a,rt.a.registerSuccess,(function(t,e){return e.payload.user})),Object(K.a)(a,rt.a.loginSuccess,(function(t,e){return e.payload.user})),Object(K.a)(a,rt.a.logoutSuccess,(function(){return ct})),Object(K.a)(a,rt.a.getCurrentUserSuccess,(function(t,e){return e.payload})),a)),ot=Object(V.c)(null,(o={},Object(K.a)(o,rt.a.registerSuccess,(function(t,e){return e.payload.token})),Object(K.a)(o,rt.a.loginSuccess,(function(t,e){return e.payload.token})),Object(K.a)(o,rt.a.logoutSuccess,(function(){return null})),o)),st=function(t,e){return e.payload},ut={user:at,isAuthenticated:Object(V.c)(!1,(s={},Object(K.a)(s,rt.a.registerSuccess,(function(){return!0})),Object(K.a)(s,rt.a.loginSuccess,(function(){return!0})),Object(K.a)(s,rt.a.getCurrentUserSuccess,(function(){return!0})),Object(K.a)(s,rt.a.registerError,(function(){return!1})),Object(K.a)(s,rt.a.loginError,(function(){return!1})),Object(K.a)(s,rt.a.getCurrentUserError,(function(){return!1})),Object(K.a)(s,rt.a.logoutSuccess,(function(){return!1})),s)),token:ot,error:Object(V.c)(null,(u={},Object(K.a)(u,rt.a.registerError,st),Object(K.a)(u,rt.a.loginError,st),Object(K.a)(u,rt.a.logoutError,st),Object(K.a)(u,rt.a.getCurrentUserError,st),u))},it=Object(X.b)(ut),bt=Object(Q.a)(Object(V.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),lt={key:"auth",storage:nt.a,whitelist:["token"]},jt=Object(V.a)({reducer:{auth:Object(tt.g)(lt,it),contacts:$},middleware:bt,devTools:!1}),dt={store:jt,persistor:Object(tt.h)(jt)};j.a.render(Object(m.jsx)(b.a.StrictMode,{children:Object(m.jsx)(O.a,{store:dt.store,children:Object(m.jsx)(h.a,{loading:null,persistor:dt.persistor,children:Object(m.jsx)(d.a,{children:Object(m.jsx)(P,{})})})})}),document.getElementById("root"))},8:function(t,e,n){"use strict";var r=n(3),c=Object(r.b)("contacts/addContactsSuccess"),a=Object(r.b)("contacts/addContactsError"),o=Object(r.b)("contacts/addContactsRequest"),s=Object(r.b)("contacts/deleteContactsSuccess"),u=Object(r.b)("contacts/deleteContactsError"),i=Object(r.b)("contacts/deleteContactsRequest"),b=Object(r.b)("phoneBook/fetchContactsRequest"),l=Object(r.b)("phoneBook/fetchContactsSuccess"),j={addContactsSuccess:c,addContactsError:a,addContactsRequest:o,deleteContactsSuccess:s,deleteContactsError:u,deleteContactsRequest:i,fetchContactsError:Object(r.b)("phoneBook/fetchContactsError"),fetchContactsRequest:b,fetchContactsSuccess:l,changeFilter:Object(r.b)("phonebook/change-filter")};e.a=j}},[[79,1,2]]]);
//# sourceMappingURL=main.9fa58af4.chunk.js.map