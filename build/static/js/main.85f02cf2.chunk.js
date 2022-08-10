(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{40:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(32),a=n.n(s),i=(n(40),n(33)),o=n(18),u=n(5),b=n(6),j=n(7),d=n(8),l=n(21),p=n.n(l),h=n(4),O=n(2),m=n(22),x=n.n(m),f=n(0),v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:["Balance: $",this.props.accountBalance]})}}]),n}(r.Component),g=v,S=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Bank of React"}),Object(f.jsx)("hr",{}),Object(f.jsx)(h.b,{to:"/userProfile",children:"User Profile"}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/login",children:"Login"}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/credits",children:"Credits"}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/debits",children:"Debits"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(g,{accountBalance:this.props.accountBalance}),Object(f.jsx)("br",{}),Object(f.jsx)("img",{src:"https://picsum.photos/400/400",alt:"bank"})]})}}]),n}(r.Component),y=S,C=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"User Profile"}),Object(f.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(f.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),k=C,B=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=Object(o.a)({},r.state.user);t.userName=e.target.value,r.setState({user:t})},r.handleSubmit=function(e){e.preventDefault(),r.props.mockLogIn(r.state.user),r.setState({redirect:!0})},r.state={user:{userName:r.props.user.userName,password:""},redirect:!1},r}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(f.jsx)(O.a,{to:"/userProfile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"User Name"}),Object(f.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"password",name:"password"})]}),Object(f.jsx)("button",{children:"Log In"})]}),Object(f.jsx)("br",{}),Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),L=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).creditsView=function(){return e.props.credits.map((function(e){var t=e.date.slice(0,10);return Object(f.jsxs)("ol",{children:[e.amount," ",e.description," ",t]},e.id)}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Credits"}),Object(f.jsx)("hr",{}),this.creditsView(),Object(f.jsx)("br",{}),Object(f.jsxs)("form",{onSubmit:this.props.updateCredit,children:[Object(f.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(f.jsx)("input",{type:"text",placeholder:"Enter a description",name:"description"}),Object(f.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(f.jsx)("input",{type:"number",placeholder:"Enter an amount",step:"0.1",name:"amount"}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]}),Object(f.jsx)("h2",{children:Object(f.jsx)(g,{accountBalance:this.props.accountBalance})}),Object(f.jsx)("hr",{}),Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),D=L,w=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).debitsView=function(){return e.props.debits.map((function(e){var t=e.date.slice(0,10);return Object(f.jsxs)("ol",{children:[e.amount," ",e.description," ",t]},e.id)}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Debits"}),Object(f.jsx)("hr",{}),this.debitsView(),Object(f.jsx)("br",{}),Object(f.jsxs)("form",{onSubmit:this.props.updateDebit,children:[Object(f.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(f.jsx)("input",{type:"text",placeholder:"Enter a description",name:"description"}),Object(f.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(f.jsx)("input",{type:"number",placeholder:"Enter an amount",step:"0.1",name:"amount"}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]}),Object(f.jsx)("h2",{children:Object(f.jsx)(g,{accountBalance:this.props.accountBalance})}),Object(f.jsx)("hr",{}),Object(f.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),N=w,F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.addDebit=function(t){var n=Object.assign({},t),r=e.state.debitsList;r.push(n),e.setState({debitsList:r});var c=Number(e.state.accountBalance)-Number(n.amount);e.setState({accountBalance:c.toFixed(2)})},e.updateDebit=function(t){t.preventDefault();var n=(new Date).toISOString(),r={amount:t.target.amount.value,description:t.target.description.value,date:n,id:n};e.addDebit(r)},e.addCredit=function(t){var n=Object.assign({},t),r=e.state.creditsList;r.push(n),e.setState({creditsList:r});var c=Number(e.state.accountBalance)+Number(n.amount);e.setState({accountBalance:c.toFixed(2)})},e.updateCredit=function(t){t.preventDefault();var n=(new Date).toISOString(),r={amount:t.target.amount.value,description:t.target.description.value,date:n,id:n};e.addCredit(r)},e.state={accountBalance:0,currentUser:{userName:"",memberSince:"8/3/2022"},creditsList:[],debitsList:[]},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(p.a.mark((function e(){var t,n,r,c,s,a,i,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/credits",t="https://moj-api.herokuapp.com/debits",n=0,r=0,e.prev=4,e.next=7,x.a.get("https://moj-api.herokuapp.com/credits");case 7:for(c=e.sent,this.setState({creditsList:c.data}),s=0;s<this.state.creditsList.length;s++)n+=this.state.creditsList[s].amount;return e.next=12,x.a.get(t);case 12:for(a=e.sent,this.setState({debitsList:a.data}),i=0;i<this.state.debitsList.length;i++)r+=this.state.debitsList[i].amount;e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),e.t0.responseCredit&&(console.log(e.t0.responseCredit.data),console.log(e.t0.responseCredit.status)),e.t0.responseDebit&&(console.log(e.t0.responseDebit.data),console.log(e.t0.responseDebit.status));case 21:o=n-r,this.setState({accountBalance:o.toFixed(2)});case 23:case"end":return e.stop()}}),e,this,[[4,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsx)(h.a,{basename:"/my-react-app",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(y,{accountBalance:e.state.accountBalance})}}),Object(f.jsx)(O.b,{exact:!0,path:"/userProfile",render:function(){return Object(f.jsx)(k,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(f.jsx)(O.b,{exact:!0,path:"/login",render:function(){return Object(f.jsx)(B,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(f.jsx)(O.b,{exact:!0,path:"/credits",render:function(){return Object(f.jsx)(D,{credits:e.state.creditsList,updateCredit:e.updateCredit,addCredit:e.addCredit,accountBalance:e.state.accountBalance})}}),Object(f.jsx)(O.b,{exact:!0,path:"/debits",render:function(){return Object(f.jsx)(N,{debits:e.state.debitsList,addDebit:e.addDebit,updateDebit:e.updateDebit,accountBalance:e.state.accountBalance})}})]})})}}]),n}(r.Component),U=F,I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),I()}},[[69,1,2]]]);
//# sourceMappingURL=main.85f02cf2.chunk.js.map