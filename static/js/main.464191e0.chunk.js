(this["webpackJsonpmood-tracker"]=this["webpackJsonpmood-tracker"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(7),n=s.n(r),d=s(8),i=s(4),l=s(2),o=s.n(l),j=(s(14),s.p+"static/media/lock.265fd113.png"),b=s(0),h=function(){var e=o()().format("dddd, MMMM Do, YYYY"),t=Object(c.useState)(null),s=Object(i.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)(localStorage.days?JSON.parse(localStorage.days):[]),l=Object(i.a)(n,2),h=l[0],O=l[1],m=Object(c.useState)(75),x=Object(i.a)(m,2),u=x[0],p=x[1],v=Object(c.useState)(""),f=Object(i.a)(v,2),g=f[0],N=f[1],y=h.some((function(t){return o()(t.date).format("dddd, MMMM Do, YYYY")===e})),M=Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Mood Tracker"}),Object(b.jsxs)("div",{className:"today",children:["Today is ",e]})]}),S=Object(b.jsxs)("div",{className:"flex-scroll",children:[Object(b.jsx)("div",{className:"scratch"}),h.map((function(e,t){return Object(b.jsxs)("div",{className:a&&a.date===e.date?"day active":"day",onClick:function(){return r(e)},children:[Object(b.jsx)("div",{className:"bar",children:Object(b.jsx)("div",{className:"progress",style:{height:"".concat(e.happiness,"%")}})}),Object(b.jsxs)("div",{className:"date",children:[Object(b.jsx)("p",{className:"day",children:o()(e.date).format("D")}),Object(b.jsx)("p",{className:"month",children:o()(e.date).format("MMM")})]})]},t)})),Object(b.jsx)("div",{className:"scratch"})]}),Y=Object(b.jsxs)("div",{className:"locked",children:[Object(b.jsx)("img",{src:j,alt:""}),Object(b.jsxs)("p",{className:"advice",children:["Track your mood for ",Object(b.jsx)("b",{children:"7 days"})," ",Object(b.jsx)("br",{})," to get some valuable insights"," ",Object(b.jsx)("br",{})," on how to increase your overall ",Object(b.jsx)("br",{})," well-being and happiness"]})]}),k=a&&Object(b.jsxs)("div",{className:"day-details",children:[Object(b.jsxs)("p",{className:"score",children:["Happiness score: ",Object(b.jsx)("strong",{children:a.happiness})]}),Object(b.jsx)("strong",{children:"Note:"}),Object(b.jsx)("p",{className:"text",children:a.text}),Object(b.jsx)("p",{className:"date",children:o()(a.date).format("dddd, MMMM Do, YYYY")}),Object(b.jsx)("div",{className:"close",onClick:function(){return r(null)},title:"close",children:"\u274c"})]}),w=Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=[].concat(Object(d.a)(h),[{happiness:u,text:g,date:new Date}]);O(t),localStorage.days=JSON.stringify(t),N("")},className:"submit-log",children:["Score: ",u,Object(b.jsx)("input",{type:"range",min:"1",max:"100",value:u,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("textarea",{required:!0,placeholder:"Add additional information",rows:"5",value:g,onChange:function(e){return N(e.target.value)}}),0===h.length&&Object(b.jsx)("div",{className:"first-log",children:"It's time for the first log"}),Object(b.jsx)("button",{type:"submit",children:"Submit Log"})]}),D=Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"That's it for today \u2705"}),Object(b.jsx)("p",{children:"Come back tomorrow"})]});return Object(b.jsxs)("div",{className:"App",children:[M,Object(b.jsx)("div",{className:"days",children:h.length?S:Y}),k,y?D:w]})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.464191e0.chunk.js.map