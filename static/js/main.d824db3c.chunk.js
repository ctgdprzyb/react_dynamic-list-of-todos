(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(4)),d=c.n(i);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var o=c(0),j=function(e){var t,c=e.setIsLoading,s=e.setInspectedTodo,a=e.filteringMode,i=e.searchQuery,j=e.inspectedTodo,u=Object(l.useState)(null),b=Object(n.a)(u,2),h=b[0],m=b[1];Object(l.useEffect)((function(){r("/todos").then((function(e){return m(e)})).finally((function(){return c(!1)}))}),[]);return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:null===(t=function(e){var t=[];if(null===e)return null;switch(a){case"active":t=null===e||void 0===e?void 0:e.filter((function(e){return!e.completed}));break;case"completed":t=null===e||void 0===e?void 0:e.filter((function(e){return e.completed}));break;case"all":t=e}return t.filter((function(e){return e.title.toLocaleLowerCase().includes(i.toLocaleLowerCase())}))}(h))||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon",children:e.completed&&Object(o.jsx)("i",{"data-cy":"iconCompleted",className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()({far:!0,"fa-eye-slash":(null===j||void 0===j?void 0:j.id)===e.id,"fa-eye":!((null===j||void 0===j?void 0:j.id)===e.id)})})})})})]},e.id)}))})]})},u=function(e){var t=e.setFilteringMode,c=e.setSearchQuery,s=e.searchQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),h=function(e){var t=e.inspectedTodo,c=e.setInspectedTodo,s=Object(l.useState)(!0),a=Object(n.a)(s,2),i=a[0],d=a[1],j=Object(l.useState)(null),u=Object(n.a)(j,2),h=u[0],m=u[1];return Object(l.useEffect)((function(){var e;(e=t.userId,r("/users/".concat(e))).then((function(e){return m(e)})).finally((function(){return d(!1)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsx)(b,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]})]})},m=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),i=Object(n.a)(a,2),d=i[0],r=i[1],m=Object(l.useState)("all"),O=Object(n.a)(m,2),x=O[0],f=O[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),N=v[0],y=v[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(u,{setFilteringMode:f,setSearchQuery:y,searchQuery:N})}),Object(o.jsxs)("div",{className:"block",children:[c&&Object(o.jsx)(b,{}),Object(o.jsx)(j,{setIsLoading:s,setInspectedTodo:r,filteringMode:x,searchQuery:N,inspectedTodo:d})]})]})})}),d&&Object(o.jsx)(h,{inspectedTodo:d,setInspectedTodo:r})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d824db3c.chunk.js.map