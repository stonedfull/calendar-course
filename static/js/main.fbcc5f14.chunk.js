(this["webpackJsonpcalendar-course"]=this["webpackJsonpcalendar-course"]||[]).push([[0],{290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r,a=n(27),c=n.n(a),s=n(80),u=n(135),o=n(83),i=n(162),l=n(23),j=n(28),d=n.n(j),b=n(50),h=n(163),f=n(164),O=n(165),p=n.n(O),v=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"getUsers",value:function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.get("./users.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();!function(e){e.SetUser="auth:setUser",e.SetIsAuth="auth:setIsAuth",e.SetIsLoading="auth:setIsLoading",e.SetError="auth:setError",e.Login="auth:login",e.Logout="auth:logout"}(r||(r={}));var g,m=function(e){return{type:r.SetUser,payload:e}},x=function(e){return{type:r.SetIsAuth,payload:e}},y=function(e){return{type:r.SetIsLoading,payload:e}},S=function(e){return{type:r.SetError,payload:e}},w={setUser:m,setIsAuth:x,setIsLoading:y,setError:S,login:function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(y(!0)),setTimeout(Object(b.a)(d.a.mark((function t(){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getUsers();case 2:r=t.sent,(a=r.data.find((function(t){var n=t.username,r=t.password;return n===e.username&&r===e.password})))?(localStorage.setItem("auth","true"),localStorage.setItem("username",a.username),n(m(a)),n(x(!0))):n(S("Username or password is wrong!")),n(y(!1));case 6:case"end":return t.stop()}}),t)}))),1e3)}catch(r){n(S("Something went wrong!"))}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("auth"),localStorage.removeItem("username"),t(m({})),t(x(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},I={isAuth:!1,error:"",isLoading:!1,user:{}};!function(e){e.SetGuests="setGuests",e.SetEvents="setEvents"}(g||(g={}));var E={guests:[],events:[]};var k,C={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SetIsAuth:return Object(l.a)(Object(l.a)({},e),{},{isAuth:t.payload,isLoading:!1});case r.SetIsLoading:return Object(l.a)(Object(l.a)({},e),{},{isLoading:t.payload});case r.SetError:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload,isLoading:!1});case r.SetUser:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});default:return e}},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SetGuests:return Object(l.a)(Object(l.a)({},e),{},{guests:t.payload});case g.SetEvents:return Object(l.a)(Object(l.a)({},e),{},{events:t.payload});default:return e}}},L=C,A=Object(o.c)(L),U=Object(o.d)(A,Object(o.a)(i.a)),G=n(294),D=n(0),J=n(26),N=s.c,P=n(127),R=n(300),z=n(34),F=n.n(z),M=n(166),T=n(84),q=n(51),B=n(56),H=n(299),V=n(304),Y=function(e){var t=e.getFullYear(),n=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0".concat(e.getDate()):e.getDate();return"".concat(t,".").concat(n,".").concat(r)},K=n(302),Q=n(303),W=n(7),X=function(e){var t=e.event,n=e.onRemove,r=Object(D.useCallback)((function(e){e.stopPropagation(),n(t.id)}),[t,n]);return Object(W.jsx)("div",{children:Object(W.jsxs)(K.b,{size:10,children:[t.description,Object(W.jsx)(Q.a,{onClick:r})]})})},Z=function(e){var t=e.events,n=e.selected,r=e.onRemove,a=e.onAdd,c=e.onSelect;return Object(W.jsx)(H.a,{dateCellRender:function(e){var c=Y(e.toDate()),s=t.filter((function(e){return e.date===c}));return Object(W.jsxs)(T.a,{children:[Object(W.jsx)(q.a,{span:20,children:s.map((function(e){return Object(W.jsx)(X,{event:e,onRemove:r},e.id)}))}),(n&&Y(n.toDate())===c||!n&&Y(F()().toDate())===c)&&Object(W.jsx)(q.a,{span:4,children:Object(W.jsx)(B.a,{type:"text",size:"small",onClick:function(){return a(e)},children:Object(W.jsx)(V.a,{})})})]})},onSelect:c})},$=n(296),_=n(298),ee=n(297),te=n(138),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Required field";return{required:!0,message:e}},re=function(e){return function(){return{validator:function(t,n){return n.startOf("day").isSameOrAfter(F()().startOf("day"))?Promise.resolve():Promise.reject(new Error(e))}}}},ae=function(e){var t=e.value,n=e.guests,r=e.onChange,a=e.onSubmit,c=Object(D.useCallback)((function(e){return r(Object(l.a)(Object(l.a)({},t),{},{description:e.target.value}))}),[t,r]),s=Object(D.useCallback)((function(e){e&&r(Object(l.a)(Object(l.a)({},t),{},{date:e}))}),[t,r]),u=Object(D.useCallback)((function(e){return r(Object(l.a)(Object(l.a)({},t),{},{guest:e}))}),[t,r]);return Object(W.jsxs)($.a,{onFinish:a,initialValues:t,children:[Object(W.jsx)($.a.Item,{label:"Event description",name:"description",rules:[ne()],children:Object(W.jsx)(_.a,{onChange:c})}),Object(W.jsx)($.a.Item,{label:"Event date",name:"date",rules:[ne(),re("Cannot create an event in the past")],children:Object(W.jsx)(ee.a,{onChange:s})}),Object(W.jsx)($.a.Item,{label:"Select guest",name:"guest",rules:[ne()],children:Object(W.jsx)(te.a,{value:t.guest,onChange:u,children:n.map((function(e){var t=e.username;return Object(W.jsx)(te.a.Option,{value:t,children:t},t)}))})}),Object(W.jsx)($.a.Item,{children:Object(W.jsx)(B.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Create"})})]})},ce={setGuests:function(e){return{type:g.SetGuests,payload:e}},setEvents:function(e){return{type:g.SetEvents,payload:e}},fetchGuests:function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getUsers();case 3:n=e.sent,t(ce.setGuests(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},fetchEvents:function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a=null!==(r=localStorage.getItem("events"))&&void 0!==r?r:"[]",c=JSON.parse(a),s=c.filter((function(t){return t.author===e||t.guest===e})),n(ce.setEvents(s))}catch(u){console.log(u)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createEvent:function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a=null!==(r=localStorage.getItem("events"))&&void 0!==r?r:"[]",(c=JSON.parse(a)).push(e),n(ce.setEvents(c)),localStorage.setItem("events",JSON.stringify(c))}catch(s){console.log(s)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeEvent:function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a=null!==(r=localStorage.getItem("events"))&&void 0!==r?r:"[]",c=JSON.parse(a),s=c.filter((function(t){return t.id!==e})),n(ce.setEvents(s)),localStorage.setItem("events",JSON.stringify(s))}catch(u){console.log(u)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},se=Object(l.a)(Object(l.a)({},w),ce),ue=function(){var e=Object(s.b)();return Object(o.b)(se,e)},oe=n(295),ie=function(){var e=ue().login,t=N((function(e){return e.auth})),n=t.error,r=t.isLoading,a=Object(D.useCallback)((function(t){e(t)}),[e]);return Object(W.jsxs)($.a,{onFinish:a,children:[n&&Object(W.jsx)("div",{style:{color:"red"},children:n}),Object(W.jsx)($.a.Item,{label:"Username",name:"username",rules:[ne("Please input your username")],children:Object(W.jsx)(_.a,{})}),Object(W.jsx)($.a.Item,{label:"Password",name:"password",rules:[ne("Please input your password")],children:Object(W.jsx)(_.a,{type:"password"})}),Object(W.jsx)($.a.Item,{children:Object(W.jsx)(B.a,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:r,children:"Login"})})]})};!function(e){e.Login="/login",e.Event="/"}(k||(k={}));var le=[{path:k.Login,exact:!0,component:function(){return Object(W.jsx)(G.a,{children:Object(W.jsx)(T.a,{justify:"center",align:"middle",className:"h100",children:Object(W.jsx)(oe.a,{children:Object(W.jsx)(ie,{})})})})}}],je=[{path:k.Event,exact:!0,component:function(){var e=Object(D.useState)(!1),t=Object(P.a)(e,2),n=t[0],r=t[1],a=N((function(e){return e.event})),c=a.guests,s=a.events,u=ue(),o=u.fetchGuests,i=u.fetchEvents,j=u.createEvent,d=u.removeEvent,b=N((function(e){return e.auth})).user,h=Object(D.useState)(),f=Object(P.a)(h,2),O=f[0],p=f[1],v=Object(D.useCallback)((function(e){return{id:Object(M.a)(),author:b.username,guest:"",date:e,description:""}}),[b]),g=Object(D.useState)(v(F()())),m=Object(P.a)(g,2),x=m[0],y=m[1];Object(D.useEffect)((function(){o(),i(b.username)}),[]);var S=Object(D.useCallback)((function(){r(!1),j(Object(l.a)(Object(l.a)({},x),{},{date:Y(x.date.toDate())})),y(v(F()()))}),[x,j,r,y,v]),w=Object(D.useCallback)((function(e){return d(e)}),[d]),I=Object(D.useCallback)((function(e){y(v(e)),r(!0)}),[y,r,v]);return Object(W.jsxs)(G.a,{children:[Object(W.jsx)(Z,{events:s,selected:O,onRemove:w,onAdd:I,onSelect:p}),n&&Object(W.jsx)(R.a,{title:"Add an event",visible:n,footer:null,onCancel:function(){return r(!1)},children:Object(W.jsx)(ae,{guests:c,value:x,onChange:y,onSubmit:S})})]})}}],de=function(){return N((function(e){return e.auth})).isAuth?Object(W.jsxs)(J.d,{children:[je.map((function(e){return Object(W.jsx)(J.b,Object(l.a)({},e),e.path)})),Object(W.jsx)(J.a,{to:k.Event})]}):Object(W.jsxs)(J.d,{children:[le.map((function(e){return Object(W.jsx)(J.b,Object(l.a)({},e),e.path)})),Object(W.jsx)(J.a,{to:k.Login})]})},be=n(301),he=function(){var e=ue().logout,t=N((function(e){return e.auth})),n=t.isAuth,r=t.user;return Object(W.jsx)(G.a.Header,{children:n?Object(W.jsxs)(T.a,{children:[Object(W.jsx)("div",{style:{color:"white",padding:"0 20px"},children:r.username}),Object(W.jsx)(be.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(W.jsx)(be.a.Item,{onClick:e,children:"Logout"},1)})]}):Object(W.jsx)(be.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(W.jsx)(be.a.Item,{children:"Login"},1)})})},fe=(n(290),function(){var e=ue(),t=e.setUser,n=e.setIsAuth;return Object(D.useEffect)((function(){localStorage.getItem("auth")&&(t({username:localStorage.getItem("username")}),n(!0))}),[]),Object(W.jsxs)(G.a,{children:[Object(W.jsx)(he,{}),Object(W.jsx)(G.a.Content,{children:Object(W.jsx)(de,{})})]})});c.a.render(Object(W.jsx)(s.a,{store:U,children:Object(W.jsx)(u.a,{children:Object(W.jsx)(fe,{})})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.fbcc5f14.chunk.js.map