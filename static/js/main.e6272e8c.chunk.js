(this.webpackJsonpredux_blog=this.webpackJsonpredux_blog||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(6),a=n.n(c),s=n(3),i=n(5),u=n(20),o=n(4),d=n.n(o),l=n(7),j=n(21),p=n.n(j).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),b=n(11),f=n.n(b),h=n(1),O=function(e){var t=Object(s.c)((function(t){return t.user.find((function(t){return t.id===e.userId}))}));return t?Object(h.jsx)("div",{className:"header",children:t.name}):null},v=function(){var e=Object(s.c)((function(e){return e.posts})),t=Object(s.b)();return Object(r.useEffect)((function(){t(function(){var e=Object(l.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("about to fetch posts!"),e.next=3,t(function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:f.a.uniq(f.a.map(n().posts,"userId")).forEach((function(e){return t((n=e,function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/users/".concat(n));case 2:r=e.sent,t({type:"FETCH_USER",payload:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[t]),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"ui relaxed divided list",children:e.map((function(e){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("i",{className:"large middle aligned icon user"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"description",children:[Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("p",{children:e.body})]}),Object(h.jsx)(O,{userId:e.userId})]})]},e.id)}))})})},x=function(){return Object(h.jsx)("div",{className:"ui container",children:Object(h.jsx)(v,{})})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},y=n(22),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(y.a)(e),[t.payload]);default:return e}},w=Object(i.b)({posts:m,user:g}),E=Object(i.c)(w,Object(i.a)(u.a));a.a.render(Object(h.jsx)(s.a,{store:E,children:Object(h.jsx)(x,{})}),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.e6272e8c.chunk.js.map