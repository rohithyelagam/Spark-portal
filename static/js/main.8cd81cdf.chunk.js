(this["webpackJsonpspark-portal"]=this["webpackJsonpspark-portal"]||[]).push([[0],{50:function(e,t,a){},69:function(e,t,a){},89:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(31),i=a.n(n),r=a(7),o=a(57),l={isLoggedin:!1,onSignup:!0,forgot:!1,user:{firstName:"",lastName:"",email:"",password:""}},d={firstName:"",lastName:"",email:"",password:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{isLoggedin:!0,onSignup:!1,user:t.payload};case"LOGOUT":return{isLoggedin:!1,onSignup:!1,user:d};case"CREATE_SIGNUP":return{onSignup:!0,isLoggedin:!0};case"CLOSE_SIGNUP":return{onSignup:!1,isLoggedin:!1};case"OPEN_FORGOT":return{onSignup:e.onSignup,isLoggedin:e.isLoggedin,forgot:!0};case"CLOSE_FORGOT":return{onSignup:e.onSignup,isLoggedin:e.isLoggedin,forgot:!1};default:return e}},O=(a(69),a(4));function b(e,t,a,s){return{type:"LOGIN",payload:{firstName:e,lastName:t,email:a,password:s}}}var u=a(106),m=a(18),p=a.n(m),g=(a(50),a(1));var h=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),i=Object(O.a)(n,2),o=i[0],l=i[1],d=Object(s.useState)(""),j=Object(O.a)(d,2),m=j[0],h=j[1],x=Object(s.useState)(""),v=Object(O.a)(x,2),N=v[0],f=v[1],S=Object(r.b)();return Object(g.jsx)("div",{className:"login",children:o?Object(g.jsx)("div",{className:"loading-login",children:Object(g.jsx)(u.a,{})}):Object(g.jsxs)("div",{className:"login-wrapper",onClick:function(){return c(!1)},children:[Object(g.jsx)("div",{className:"login-title",children:"Spark Portal"}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"login-form",children:[a?Object(g.jsx)("div",{className:"invalidmsg",children:"email or password is incorrect!"}):Object(g.jsx)("div",{}),Object(g.jsx)("div",{className:"email",children:Object(g.jsx)("input",{type:"text",name:"email",value:m,onChange:function(e){h(e.target.value)},placeholder:"email"})}),Object(g.jsx)("div",{className:"password",children:Object(g.jsx)("input",{type:"text",name:"password",value:N,onChange:function(e){f(e.target.value)},placeholder:"password"})}),Object(g.jsx)("div",{className:"submit",children:Object(g.jsx)("button",{onClick:function(){l(!0),p.a.post("https://spark-portal-backend.herokuapp.com/login/user",{email:m,password:N}).then((function(e){l(!1),e.data?(c(!1),h(e.data.email),f(e.data.password),localStorage.setItem("user","true"),localStorage.setItem("firstName",e.data.firstName),localStorage.setItem("lastName",e.data.lastName),localStorage.setItem("email",m),localStorage.setItem("password",N),S(b(e.data.firstName,e.data.lastName,e.data.email,e.data.password))):(c(!0),console.log("invalid credidentials!"))}))},children:"Log in"})})]})}),Object(g.jsxs)("div",{className:"login-bottom",children:[Object(g.jsxs)("div",{className:"forgot-password",children:["Forgot"," ",Object(g.jsx)("a",{onClick:function(){S({type:"OPEN_FORGOT"})},className:"forgot-link",children:"Password"}),"?"]}),Object(g.jsxs)("div",{className:"sign-up",children:["Don't have an account?"," ",Object(g.jsx)("a",{onClick:function(){S({type:"CREATE_SIGNUP"})},className:"signup-link",children:"Sign up"})]})]})]})})},x=(a(89),a(55)),v=a.n(x);var N=function(e){var t=Object(s.useState)(Object(r.c)((function(e){return e.user.firstName}))),a=Object(O.a)(t,2),c=a[0],n=(a[1],Object(s.useState)(Object(r.c)((function(e){return e.user.lastName})))),i=Object(O.a)(n,2),o=i[0],l=(i[1],Object(s.useState)(Object(r.c)((function(e){return e.user.email})))),d=Object(O.a)(l,2),j=d[0],b=(d[1],Object(s.useState)(Object(r.c)((function(e){return e.user.password})))),u=Object(O.a)(b,2),m=(u[0],u[1],Object(r.b)());return Object(g.jsx)("div",{className:"loggedin",children:Object(g.jsxs)("div",{className:"wrapper",children:[Object(g.jsx)("div",{className:"header",children:"Spark Portal"}),Object(g.jsx)("div",{className:"photo",children:Object(g.jsx)(v.a,{className:"photo-icon",sx:{color:"#0091b9",fontSize:100}})}),Object(g.jsx)("div",{className:"names",children:Object(g.jsx)("div",{className:"text",children:c+" "+o})}),Object(g.jsx)("div",{className:"email",children:j}),Object(g.jsx)("div",{className:"footer",children:Object(g.jsx)("button",{onClick:function(){m({type:"LOGOUT"}),localStorage.clear()},children:"Log out"})})]})})};a(92);var f=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(O.a)(n,2),o=i[0],l=i[1],d=Object(s.useState)(""),j=Object(O.a)(d,2),u=j[0],m=j[1],h=Object(s.useState)(""),x=Object(O.a)(h,2),v=x[0],N=x[1],f=Object(s.useState)("none"),S=Object(O.a)(f,2),w=S[0],k=S[1],C=Object(s.useState)("none"),y=Object(O.a)(C,2),L=y[0],I=y[1],E=Object(s.useState)("none"),_=Object(O.a)(E,2),P=_[0],T=_[1],G=Object(r.b)(),R=function(){k("none"),I("none"),T("none")},U=function(e){var t=e.target.name,a=e.target.value;"firstName"===t?c(a):"lastName"===t?l(a):"email"===t?m(a):"password"===t&&N(a)};return Object(g.jsx)("div",{className:"signup",children:Object(g.jsxs)("div",{className:"signup-wrapper",children:[Object(g.jsx)("div",{className:"login-title",children:"Sign Up"}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"login-form",children:[Object(g.jsxs)("div",{className:"signup-names",children:[Object(g.jsxs)("div",{className:"signup-firstName",children:[Object(g.jsx)("input",{style:{border:w},type:"text",name:"firstName",value:a,onChange:U,placeholder:"first name",onClick:R}),"none"!=w?Object(g.jsx)("div",{className:"err",children:"first name canot be empty"}):Object(g.jsx)("div",{})]}),Object(g.jsx)("div",{className:"signup-lastName",children:Object(g.jsx)("input",{type:"text",name:"lastName",value:o,onChange:U,placeholder:"last name"})})]}),Object(g.jsx)("div",{className:"signup-email",children:Object(g.jsx)("input",{style:{border:L},type:"text",name:"email",value:u,onChange:U,placeholder:"email",onClick:R})}),"none"===L?Object(g.jsx)("div",{}):Object(g.jsx)("div",{children:"."===L[1]?Object(g.jsx)("div",{className:"err",children:"email address is already in use"}):Object(g.jsx)("div",{className:"err",children:"email address is invalid"})}),Object(g.jsx)("div",{className:"signup-password",children:Object(g.jsx)("input",{style:{border:P},type:"text",name:"password",value:v,onChange:U,placeholder:"password",onClick:R})}),"none"===P?Object(g.jsx)("div",{}):Object(g.jsx)("div",{className:"err",children:"password cannot be empty"}),Object(g.jsx)("div",{className:"signup-submit",children:Object(g.jsx)("button",{onClick:function(){(function(){var e=0;if(""===a&&(k("1px solid #f81d1d"),e=1),""===u)I("1px solid #f81d1d"),e=1;else{for(var t=u.length,s=0,c=0;c<t;c++)"@"===u[c]&&(s=1),1==s&&"."===u[c]&&(s=2);2!=s&&(T("email format is not accepted"),e=1)}return""===v&&(T("1px solid #f81d1d"),e=1),1!==e})()&&p.a.post("https://spark-portal-backend.herokuapp.com/new/user",{firstName:a,lastName:o,email:u,password:v}).then((function(e){e.data?(R(),localStorage.setItem("user","true"),localStorage.setItem("firstName",e.data.firstName),localStorage.setItem("lastName",e.data.lastName),localStorage.setItem("email",u),localStorage.setItem("password",v),G(b(a,o,u,v))):(I("1.2px solid #f81d1d"),console.log("user exists already"))}))},children:"Create account"})})]})}),Object(g.jsx)("div",{className:"login-bottom",children:Object(g.jsxs)("div",{className:"forgot-password",children:["Already have an account?"," ",Object(g.jsx)("a",{onClick:function(){G({type:"CLOSE_SIGNUP"})},className:"signup-link",children:"Log in"})]})})]})})};var S=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),i=Object(O.a)(n,2),o=i[0],l=i[1],d=Object(s.useState)("none"),j=Object(O.a)(d,2),b=j[0],m=j[1],h=Object(s.useState)(),x=Object(O.a)(h,2),v=x[0],N=x[1],f=Object(s.useState)("none"),S=Object(O.a)(f,2),w=S[0],k=S[1],C=Object(s.useState)("none"),y=Object(O.a)(C,2),L=y[0],I=y[1],E=Object(s.useState)(""),_=Object(O.a)(E,2),P=_[0],T=_[1],G=Object(r.b)(),R=function(e){"email"==e.target.name?c(e.target.value):l(e.target.value)};return Object(g.jsx)("div",{className:"login",children:Object(g.jsxs)("div",{className:"login-wrapper",children:[Object(g.jsx)("div",{className:"login-title",children:"Forgot Password"}),Object(g.jsx)("div",{className:"forgot-des",children:Object(g.jsx)("p",{children:"Enter your email address"})}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"login-form",children:[Object(g.jsx)("div",{className:"email",children:Object(g.jsx)("input",{type:"text",name:"email",value:a,onChange:R,onClick:function(){m("none"),k("none"),l(),N(),T(""),I("none")},placeholder:"email"})}),"true"===L?Object(g.jsx)("div",{className:"otperr",children:"Email adress is invalid"}):Object(g.jsx)("div",{}),"loading"==b?Object(g.jsx)("div",{className:"loading",children:Object(g.jsx)(u.a,{})}):Object(g.jsx)("div",{}),"sucess"==b?Object(g.jsx)("div",{className:"otp",children:Object(g.jsx)("input",{type:"text",name:"otp",value:o,onChange:R,placeholder:"OTP"})}):Object(g.jsx)("div",{}),"correct"===w?Object(g.jsxs)("div",{className:"sucess",children:["Password: ",P]}):Object(g.jsx)("div",{}),"wrong"===w?Object(g.jsx)("div",{className:"otperr",children:"OTP desen't match"}):Object(g.jsx)("div",{}),Object(g.jsx)("div",{className:"submit",children:"sucess"===b?Object(g.jsx)("button",{className:"recover-pswd",onClick:function(){console.log(v),console.log(o),v!=o?k("wrong"):p.a.post("https://spark-portal-backend.herokuapp.com/get/pswd",{email:a}).then((function(e){T(e.data),k("correct")}))},children:"Recover Password"}):Object(g.jsx)("button",{className:"recover-pswd",onClick:function(){(function(){if(""==a)return I("true"),!1;for(var e=a.length,t=0,s=0;s<e;s++)0==t&&"@"==a[s]?t=1:1==t&&"."==a[s]&&(t=2);return 2==t||(I("true"),!1)})()&&(m("loading"),p.a.post("https://spark-portal-backend.herokuapp.com/forgot/user",{email:a}).then((function(e){console.log(e.data),N(e.data.otp),m("sucess")})))},children:"Get OTP"})})]})}),Object(g.jsx)("div",{className:"login-bottom",children:Object(g.jsxs)("div",{className:"forgot-password",children:["Back to"," ",Object(g.jsx)("a",{onClick:function(){G({type:"CLOSE_FORGOT"})},className:"forgot-link",children:"Log in"}),"?"]})})]})})};a(93);var w=function(){var e=Object(r.c)((function(e){return e.isLoggedin})),t=Object(r.c)((function(e){return e.onSignup})),a=Object(r.c)((function(e){return e.forgot})),c=Object(r.b)();return Object(s.useEffect)((function(){var t=localStorage.getItem("user"),a=localStorage.getItem("firstName"),s=localStorage.getItem("lastName"),n=localStorage.getItem("email"),i=localStorage.getItem("password");t&&(e=t,c(b(a,s,n,i)))}),[]),Object(g.jsx)("div",{className:"App",children:a?Object(g.jsx)(S,{}):Object(g.jsx)("div",{children:e?Object(g.jsx)("div",{className:"logged-in",children:!0===t?Object(g.jsx)("div",{children:Object(g.jsx)(f,{})}):Object(g.jsx)("div",{children:Object(g.jsx)(N,{isLoggedin:e})})}):Object(g.jsx)("div",{className:"login",children:Object(g.jsx)(h,{isLoggedin:e})})})})},k=Object(o.a)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(r.a,{store:k,children:Object(g.jsx)(w,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.8cd81cdf.chunk.js.map