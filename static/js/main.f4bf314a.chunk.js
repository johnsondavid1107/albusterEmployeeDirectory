(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),r=n.n(s),o=n(12),l=n.n(o);n(23),n(24);var a=function(){var e={header:{fontSize:"40px",color:"white"},display:{background:"#00004d",borderBottom:"5px solid red",marginBottom:"0px"},ptag:{color:"white"}};return Object(c.jsx)("div",{className:"jumbotron jumbotron-fluid",style:e.display,children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"display-4 text-center",style:e.header,children:"Employee Directory"}),Object(c.jsx)("p",{className:"text-center",style:e.ptag,children:"Click on the carrots to filter by heading or use the search box to narrow your results."})]})})},i=n(13),d=n(14),j=n(17),h=n(16),u=n(15),b=n.n(u);n(43);var m=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table table-striped",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsxs)("th",{scope:"col",children:["Name",Object(c.jsx)("button",{onClick:e.sort,children:"sort"})]}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(c.jsx)("tbody",{children:e.employee.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("img",{src:e.picture.large,alt:"Epicture"})}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{value:e.cell,children:e.cell}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.dob.date.slice(0,7)})]})}))})]})})},p=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={find:"",employees:[]},e.handleChange=function(t){var n=t.target.value;e.setState({find:n},(function(){return e.findEmployee()}))},e.findEmployee=function(){var t=e.state.employees.filter((function(t){return t.cell.includes(e.state.find)}));e.setState({employees:t},(function(){})),console.log(e.state.employees),console.log(e.state.find),console.log(t)},e.handleSort=function(){var t=e.state.employees;t.sort((function(e,t){return e.name.last-t.name.last})),console.log(t)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://randomuser.me/api/?results=10").then((function(t){return e.setState({employees:t.data.results})}))}},{key:"render",value:function(){var e={rowColor:{background:"#F5F5F5"},inputF:{margin:"10px"}};return Object(c.jsxs)("div",{className:"container-fluid",style:e.rowColor,children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-5"}),Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("input",{type:"text",name:"find",value:this.state.find,className:"form-control",onChange:this.handleChange,placeholder:"Search",style:e.inputF})}),Object(c.jsx)("div",{className:"col-md-5"})]}),Object(c.jsx)(m,{employee:this.state.employees,sort:this.handleSort},this.state.key)]})}}]),n}(r.a.Component);var x=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(a,{}),Object(c.jsx)(p,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};n(47);l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.f4bf314a.chunk.js.map