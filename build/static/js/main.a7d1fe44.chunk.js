(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),u=a.n(l),c=a(16),s=a(38),i=a(39),o=a.n(i),m=a(23),d=a(17),p=function(e){return{type:"LOGGED_IN",status:e}},h=function(e,t){return{type:"GET_USER",name:e,email:t}},b={all:[],budget:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BUDGETS":return Object(d.a)({},e,{all:t.budgets});case"GET_BUDGET":return Object(d.a)({},e,{budget:t.budget});default:return e}},E={name:"",email:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return Object(d.a)({},e,{name:t.name,email:t.email});case"REMOVE_USER":return Object(d.a)({},e,{name:"",email:""});default:return e}},f={status:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return Object(d.a)({},e,{status:t.status});default:return e}},j={all:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOTALS":return Object(d.a)({},e,{all:t.totals});default:return e}},N=Object(c.c)({budgets:g,users:v,status:y,totals:O}),S={key:"root",storage:o.a},k=Object(m.a)(S,N),I=a(3),B=a(41),w=a(4),C=a(19),T=function(){return r.a.createElement("div",{className:"App home"},r.a.createElement("h1",null,"Budget Tracker"),r.a.createElement("div",{className:"login-links"},r.a.createElement(w.b,{to:"/login"},"Login"),r.a.createElement(w.b,{to:"/signup"},"Sign up")))},x=a(6),D=a(7),q=a(9),G=a(8),U=a(12),_=a(10),A=a(5),P=a.n(A),z=a(2),L=a.n(z),R=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(q.a)(this,Object(G.a)(t).call(this,e))).state={name:"",email:"",password:""},a.handleChange=a.handleChange.bind(Object(U.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(U.a)(a)),a}return Object(_.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;"nameInput"===n?this.setState({name:a}):"emailInput"===n?this.setState({email:a}):this.setState({password:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementById("nameInput"),a=document.getElementById("emailInput"),n=document.getElementById("password"),r=this.state,l=r.name,u=r.email,c=r.password,s=this.props,i=s.getUser,o=s.loggedIn,m=s.history;t.value="",a.value="",n.value="";var d={auth:{email:u,password:c}};Object(A.post)("".concat("https://king-budget-api.herokuapp.com/","login"),d).then((function(e){localStorage.setItem("jwt",e.data.jwt),m.push("/budgets")})),i(l,u),o(!0),this.setState({name:"",email:"",password:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-form"},r.a.createElement("h2",{className:"logo"},"Budget Tracker"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleChange,className:"user-input",id:"nameInput",placeholder:"Enter your name",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",onChange:this.handleChange,className:"user-input",id:"emailInput",placeholder:"Enter your email",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange,className:"user-input",id:"password",placeholder:"Enter your password",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"app-btn"},"Login")))}}]),t}(r.a.Component);R.defaultProps={history:z.PropTypes.shape};var M=Object(I.b)(null,(function(e){return{getUser:function(t,a){return e(h(t,a))},loggedIn:function(t){return e(p(t))}}}))(R),J=Object(I.b)(null,(function(e){return{loggedIn:function(t){return e(p(t))},removeUser:function(){return e({type:"REMOVE_USER"})}}}))((function(e){var t=e.removeUser,a=e.loggedIn;return Object(n.useEffect)((function(){localStorage.removeItem("jwt"),a(!1),t()})),r.a.createElement(C.a,{to:"/"})})),V=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(q.a)(this,Object(G.a)(t).call(this,e))).state={name:"",email:"",password:""},a.handleChange=a.handleChange.bind(Object(U.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(U.a)(a)),a}return Object(_.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;"nameInput-signup"===n?this.setState({name:a}):"emailInput-signup"===n?this.setState({email:a}):this.setState({password:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementById("nameInput-signup"),a=document.getElementById("emailInput-signup"),n=document.getElementById("password-signup"),r=this.props,l=r.history,u=r.getUser,c=r.loggedIn,s=this.state,i=s.name,o=s.email,m=s.password,d={user:this.state},p={auth:{email:o,password:m}},h="https://king-budget-api.herokuapp.com/";Object(A.post)("".concat(h,"api/v1/users"),d).then((function(e){return localStorage.setItem("jwt",e.data.jwt),u(i,o),c(!0),Object(A.post)("".concat(h,"login"),p)})),l.push("/budgets"),this.setState({name:"",email:"",password:""}),t.value="",a.value="",n.value="",l.push("/budgets")}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-form"},r.a.createElement("h2",{className:"logo"},"Budget Tracker"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleChange,className:"user-input",id:"nameInput-signup",placeholder:"Enter your name",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",onChange:this.handleChange,className:"user-input",id:"emailInput-signup",placeholder:"Enter your email",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange,className:"user-input",id:"password-signup",placeholder:"Enter your password",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"app-btn"},"Sign Up")))}}]),t}(r.a.Component);V.defaultProps={history:L.a.shape};var F=Object(I.b)(null,(function(e){return{getUser:function(t,a){return e(h(t,a))},loggedIn:function(t){return e(p(t))}}}))(V),Y=Object(I.b)((function(e){return{name:e.users.name,email:e.users.email}}),null)((function(e){var t=e.name,a=e.email;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Profile")),r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"profile-name"},r.a.createElement("img",{src:"https://img.icons8.com/ultraviolet/40/000000/star.png",alt:"user icon"}),r.a.createElement("h3",null,t)),r.a.createElement("p",{className:"profile-email"},a)))})),H=function(e){function t(){return Object(x.a)(this,t),Object(q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.getBudgets,t="Bearer ".concat(localStorage.getItem("jwt"));P()({method:"get",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets"),headers:{Authorization:t}}).then((function(t){e(t.data)}))}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.budgets,n="Bearer ".concat(localStorage.getItem("jwt"));return r.a.createElement("div",{className:"budgets"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Budget Tracker")),r.a.createElement("h3",{className:"budget-page-title"},t,"'s Budgets"),r.a.createElement("div",{className:"user-budgets"},a.map((function(e){return r.a.createElement("div",{key:e.id,className:"budget-details"},r.a.createElement("div",{className:"budget-name"},r.a.createElement(w.b,{to:"/budgets/".concat(e.id)},r.a.createElement("p",{className:"b-content"},e.name)),r.a.createElement("button",{type:"submit",onClick:function(){return P()({method:"delete",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets/").concat(e.id),headers:{Authorization:n}}).then((function(){return window.location.reload(!1)}))}},"Delete")))}))))}}]),t}(r.a.Component);H.defaultProps={budgets:L.a.instanceOf(Object)};var K=Object(I.b)((function(e){return{budgets:e.budgets.all,name:e.users.name,email:e.users.email}}),(function(e){return{getBudgets:function(t){return e(function(e){return{type:"GET_BUDGETS",budgets:e}}(t))}}}))(H),Q=function(e){function t(){return Object(x.a)(this,t),Object(q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.getBudget,t=this.props.match.params.id,a="Bearer ".concat(localStorage.getItem("jwt"));P()({method:"get",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets/").concat(t),headers:{Authorization:a}}).then((function(t){e(t.data)}))}},{key:"render",value:function(){var e=this.props.budget;return e?r.a.createElement("div",{className:"single-budget-area"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Budget Tracker")),r.a.createElement("div",{key:e.id,className:"single-budgets"},r.a.createElement("div",{className:"budget-name"},r.a.createElement("p",{className:"b-content"},e.name)),r.a.createElement("div",{className:"details-wrapper"},r.a.createElement("div",{className:"b-detail"},r.a.createElement("p",{className:"desc"},"Start Date:"),r.a.createElement("p",{className:"b-content"},e.startdate)),r.a.createElement("div",{className:"b-detail"},r.a.createElement("p",{className:"desc"},"End Date:"),r.a.createElement("p",{className:"b-content"},e.enddate)),r.a.createElement("div",{className:"b-detail"},r.a.createElement("p",{className:"desc"},"Income:"),r.a.createElement("p",{className:"b-content"},e.income)),r.a.createElement("div",{className:"b-detail links"},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/budgets/".concat(e.id,"/budgetTotals")},"Totals")),r.a.createElement("div",null,r.a.createElement(w.b,{to:"".concat(e.id,"/budgetTotals/new")},"New total")))))):r.a.createElement("div",null,"Budget data loading..")}}]),t}(r.a.Component);Q.defaultProps={budget:L.a.instanceOf(Object)};var W=Object(I.b)((function(e){return{budget:e.budgets.budget}}),(function(e){return{getBudget:function(t){return e(function(e){return{type:"GET_BUDGET",budget:e}}(t))}}}))(Q),X=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(q.a)(this,Object(G.a)(t).call(this,e))).state={name:"",startdate:"",enddate:"",income:0},a.handleSubmit=a.handleSubmit.bind(Object(U.a)(a)),a.handleChange=a.handleChange.bind(Object(U.a)(a)),a}return Object(_.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;"budget-name"===n?this.setState({name:a}):"start-date"===n?this.setState({startdate:a}):"end-date"===n?this.setState({enddate:a}):this.setState({income:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementById("budget-name"),a=document.getElementById("start-date"),n=document.getElementById("end-date"),r=document.getElementById("income"),l=this.props.history,u={budget:this.state},c="Bearer ".concat(localStorage.getItem("jwt"));P()({method:"post",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets"),data:u,headers:{Authorization:c}}).then((function(){return l.push("/budgets")})).then((function(){return window.location.reload(!1)})),this.setState({name:"",startdate:"",enddate:"",income:""}),t.value="",a.value="",n.value="",r.value=""}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.startdate,n=e.enddate,l=e.income;return r.a.createElement("div",{className:"app-form"},r.a.createElement("h2",{className:"logo"},"Budget Tracker"),r.a.createElement("h3",null,"Create a Budget"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"new-budget"},r.a.createElement("input",{type:"text",name:t,className:"user-input",id:"budget-name",onChange:this.handleChange,placeholder:"Enter your budget's name",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",name:a,className:"user-input",id:"start-date",onChange:this.handleChange,placeholder:"Enter your starting budget date",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",name:n,className:"user-input",id:"end-date",onChange:this.handleChange,placeholder:"Enter your ending budget date",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",className:"user-input",name:l,id:"income",onChange:this.handleChange,placeholder:"Enter your salary/income for this period",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"app-btn"},"Create Budget")))}}]),t}(r.a.Component);X.defaultProps={history:L.a.shape};var Z=X,$=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(q.a)(this,Object(G.a)(t).call(this,e))).state={date:"",rent:0,transport:0,food:0,entertainment:0,utilities:0,other:0},a.handleSubmit=a.handleSubmit.bind(Object(U.a)(a)),a.handleChange=a.handleChange.bind(Object(U.a)(a)),a}return Object(_.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.id;"date"===n?this.setState({date:a}):"rent"===n?this.setState({rent:a}):"transport"===n?this.setState({transport:a}):"food"===n?this.setState({food:a}):"entertainment"===n?this.setState({entertainment:a}):"utilities"===n?this.setState({utilities:a}):this.setState({other:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementById("date"),a=document.getElementById("rent"),n=document.getElementById("transport"),r=document.getElementById("food"),l=document.getElementById("entertainment"),u=document.getElementById("utilities"),c=document.getElementById("other"),s=this.props.match.params.budgetId,i=this.props.history,o={budget_total:this.state},m="Bearer ".concat(localStorage.getItem("jwt"));P()({method:"post",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets/").concat(s,"/budget_totals"),data:o,headers:{Authorization:m}}).then((function(){return i.push("/budgets")})),this.setState({date:"",rent:0,transport:0,food:0,entertainment:0,utilities:0,other:0}),t.value="",a.value="",n.value="",r.value="",l.value="",u.value="",c.value=""}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.rent,n=e.transport,l=e.food,u=e.entertainment,c=e.utilities,s=e.other;return r.a.createElement("div",{className:"totals-form"},r.a.createElement("h2",null,"Budget Tracker"),r.a.createElement("h5",null,"Daily Expenditure"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"date",name:t,className:"user-input",id:"date",placeholder:"Enter the date for this entry",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:a,className:"user-input",id:"rent",placeholder:"Enter rent payment",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:n,className:"user-input",id:"transport",placeholder:"Enter transport total",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:l,className:"user-input",id:"food",placeholder:"Enter food total",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:u,className:"user-input",id:"entertainment",placeholder:"Enter entertainment total",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:c,className:"user-input",id:"utilities",placeholder:"Enter utilities total",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:s,className:"user-input",id:"other",placeholder:"Enter other expenses",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"app-btn"},"Submit Daily Expenditure")))}}]),t}(r.a.Component);$.defaultProps={history:L.a.shape,match:L.a.shape};var ee=$,te=function(e){function t(){return Object(x.a)(this,t),Object(q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e="Bearer ".concat(localStorage.getItem("jwt")),t=this.props.match.params.budgetId,a=this.props.getTotals;P()({method:"get",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets/").concat(t,"/budget_totals"),headers:{Authorization:e}}).then((function(e){a(e.data)}))}},{key:"render",value:function(){var e="Bearer ".concat(localStorage.getItem("jwt")),t=this.props.budgetTotals,a=this.props.match.params.budgetId;return r.a.createElement("div",{className:"totals"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Budget Tracker")),r.a.createElement("div",{className:"totals-area"},t.map((function(t){return r.a.createElement("div",{key:t.id,className:"each-total"},r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Date:\u2009",r.a.createElement("span",{className:"date-span"},t.date))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Rent:\u2009",r.a.createElement("span",null,t.rent))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Transport:\u2009",r.a.createElement("span",null,t.transport))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Food:\u2009",r.a.createElement("span",null,t.food))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Entertainment:\u2009",r.a.createElement("span",null,t.entertainment))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Utilities:\u2009",r.a.createElement("span",null,t.utilities))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("p",null,"Other expenses:\u2009",r.a.createElement("span",null,t.other))),r.a.createElement("div",{className:"total-detail"},r.a.createElement("button",{type:"submit",onClick:function(){return P()({method:"delete",url:"".concat("https://king-budget-api.herokuapp.com/","api/v1/budgets/").concat(a,"/budget_totals/").concat(t.id),headers:{Authorization:e}}).then((function(){return window.location.reload(!1)}))}},"Delete")))}))))}}]),t}(r.a.Component);te.defaultProps={budgetTotals:L.a.instanceOf(Object)};var ae=Object(I.b)((function(e){return{budgetTotals:e.totals.all}}),(function(e){return{getTotals:function(t){return e(function(e){return{type:"GET_TOTALS",totals:e}}(t))}}}))(te),ne=(a(72),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(w.b,{to:"/newBudget"},"Create New Budget"),r.a.createElement(w.b,{to:"/budgets"},"Your Budgets"),r.a.createElement(w.b,{to:"/user"},"Profile"),r.a.createElement(w.b,{to:"/logout"},"Logout"))}),re=Object(I.b)((function(e){return{userStatus:e.status.status}}),null)((function(e){var t;return t=e.userStatus?r.a.createElement(ne,null):r.a.createElement("div",{className:"hidden"},"hidden"),r.a.createElement("div",{className:"App"},t,r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:T}),r.a.createElement(C.b,{exact:!0,path:"/login",component:M}),r.a.createElement(C.b,{exact:!0,path:"/logout",component:J}),r.a.createElement(C.b,{exact:!0,path:"/signup",component:F}),r.a.createElement(C.b,{exact:!0,path:"/user",component:Y}),r.a.createElement(C.b,{exact:!0,path:"/budgets",component:K}),r.a.createElement(C.b,{exact:!0,path:"/budgets/:id",component:W}),r.a.createElement(C.b,{exact:!0,path:"/newBudget",component:Z}),r.a.createElement(C.b,{exact:!0,path:"/budgets/:budgetId/budgetTotals/new",component:ee}),r.a.createElement(C.b,{exact:!0,path:"/budgets/:budgetId/budgetTotals",component:ae})))})),le=function(e){var t=e.store,a=Object(m.b)(t);return r.a.createElement(I.a,{store:t},r.a.createElement(B.a,{loading:null,persistor:a},r.a.createElement(w.a,{basename:"/budget-tracker"},r.a.createElement(re,null))))},ue=(a(73),Object(c.d)(k,Object(c.a)(s.a)));u.a.render(r.a.createElement(le,{store:ue}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a7d1fe44.chunk.js.map