(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},28:function(t,e,n){t.exports={div:"App_div__21psy"}},58:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),s=n(10),u=n.n(s),i=n(6),l=n(3),b=n(29),d=n(2),f=n(5),j=Object(d.b)("contacts/addContactsSuccess"),h=Object(d.b)("contacts/addContactsError"),C=Object(d.b)("contacts/addContactsRequest"),m=Object(d.b)("contacts/deleteContactsSuccess"),O=Object(d.b)("contacts/deleteContactsError"),p=Object(d.b)("contacts/deleteContactsRequest"),_=Object(d.b)("phoneBook/fetchContactsRequest"),x=Object(d.b)("phoneBook/fetchContactsSuccess"),g={addContactsSuccess:j,addContactsError:h,addContactsRequest:C,deleteContactsSuccess:m,deleteContactsError:O,deleteContactsRequest:p,fetchContactsError:Object(d.b)("phoneBook/fetchContactsError"),fetchContactsRequest:_,fetchContactsSuccess:x,changeFilter:Object(d.b)("phonebook/change-filter")},v=Object(d.c)([],(c={},Object(l.a)(c,g.fetchContactsSuccess,(function(t,e){return e.payload})),Object(l.a)(c,g.addContactsSuccess,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(l.a)(c,g.deleteContactsSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(l.a)(c,g.fetchContactsSuccess,(function(t,e){return e.payload})),c)),S=Object(d.c)(!1,(a={},Object(l.a)(a,g.addContactRequest,(function(){return!1})),Object(l.a)(a,g.addContactSuccess,(function(){return!1})),Object(l.a)(a,g.addContactError,(function(t,e){return e.payload})),Object(l.a)(a,g.deleteContactError,(function(t,e){return e.payload})),Object(l.a)(a,g.deleteContactsSuccess,(function(){return!1})),Object(l.a)(a,g.deleteContactRequest,(function(){return!1})),Object(l.a)(a,g.fetchContactsError,(function(t,e){return e.payload})),Object(l.a)(a,g.fetchContactsRequest,(function(){return!0})),Object(l.a)(a,g.fetchContactsSuccess,(function(){return!1})),a)),y=Object(d.c)("",Object(l.a)({},g.changeFilter,(function(t,e){return e.payload}))),N=Object(f.b)({items:v,error:S,filter:y}),E=Object(d.a)({reducer:{contacts:N},middleware:d.d,devTools:!1}),F=n(12),k=n(13),q=n(15),R=n(14),A=n(8),D=n.n(A),L=n(9),w=n.n(L);w.a.defaults.baseURL="http://localhost:2000";var B=function(t){return function(e){e(g.addContactsRequest()),w.a.post("/contacts",t).then((function(t){var n=t.data;return e(g.addContactsSuccess(n))})).catch((function(t){return e(g.addContactsError(t))}))}},Z=function(t){return function(e){e(g.deleteContactsRequest()),w.a.delete("/contacts/".concat(t)).then((function(){return e(g.deleteContactsSuccess(t))})).catch((function(t){return e(g.deleteContactsError(t))}))}},z=function(){return function(t){t(g.fetchContactsRequest()),w.a.get("/contacts/").then((function(e){var n=e.data;return t(g.fetchContactsSuccess(n))})).catch((function(e){return t(g.fetchContactsError(e))}))}},M=n(11),T=function(t){return t.contacts.items},J=function(t){return t.contacts.filter},V={getAllContacts:T,getVisibleContacts:Object(M.a)([T,J],(function(t,e){return t.filter((function(t){var n=t.name,c=e.toLowerCase();return n.toLowerCase().includes(c)}))})),getFilterContacts:J,getError:function(t){return t.error}},I=n(1),P=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(I.jsx)("ul",{className:D.a.list,children:e.map((function(t){return Object(I.jsxs)("li",{className:D.a.list_item,children:[Object(I.jsxs)("span",{className:D.a.list_text,children:[t.name,":"]}),Object(I.jsx)("span",{className:D.a.list_text,children:t.number}),Object(I.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:D.a.list_button,children:"Delete"})]},t.id)}))})};P.defaultProps={contacts:[],onDeleteContact:function(){}};var G=Object(i.b)((function(t){return{contacts:V.getVisibleContacts(t)}}),(function(t){return{onDeleteContacts:function(e){return t(Z(e))}}}))(P),K=n(7),U=n.n(K),X=function(t){Object(q.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(F.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handelNameChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.items.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(k.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("form",{onSubmit:this.handleSubmit,className:U.a.form,children:[Object(I.jsxs)("label",{className:U.a.label,children:["Name",Object(I.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handelNameChange,className:U.a.input})]}),Object(I.jsxs)("label",{className:U.a.label,children:["Number",Object(I.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handelNameChange,className:U.a.input})]}),Object(I.jsx)("button",{type:"submit",className:U.a.button,children:"Add contact"})]})}}]),n}(r.Component),$=Object(i.b)((function(t){return{items:V.getAllContacts(t)}}),(function(t){return{onSubmit:function(e){return t(B(e))}}}))(X),H=n(16),Q=n.n(H),W=Object(i.b)((function(t){return{items:V.getAllContacts(t),filter:V.getFilterContacts(t)}}),(function(t){return{onChange:function(e){return t(g.changeFilter(e.target.value))}}}))((function(t){var e=t.filter,n=t.items,c=t.onChange,a=t.children;return Object(I.jsxs)("div",{className:Q.a.div,children:[n.length>0&&Object(I.jsxs)("label",{className:Q.a.label,children:["Find contact by name",Object(I.jsx)("input",{type:"text",value:e,onChange:c,className:Q.a.input})]}),a]})})),Y=n(28),tt=n.n(Y),et=(n(57),function(t){Object(q.a)(n,t);var e=Object(R.a)(n);function n(){return Object(F.a)(this,n),e.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(I.jsxs)("div",{className:tt.a.div,children:[Object(I.jsx)("h2",{children:"Phonebook"}),Object(I.jsx)($,{}),Object(I.jsx)(W,{children:Object(I.jsx)("h2",{children:"Contact"})}),Object(I.jsx)(G,{})]})}}]),n}(r.Component)),nt=Object(i.b)((function(t){return{error:V.getError(t)}}),(function(t){return{fetchContacts:function(){return t(z())}}}))(et);u.a.render(Object(I.jsx)(o.a.StrictMode,{children:Object(I.jsx)(i.a,{store:E,children:Object(I.jsx)(nt,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},8:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",list_item:"ContactList_list_item__3uTNX",list_text:"ContactList_list_text__16cIL",list_button:"ContactList_list_button__3NhD0"}}},[[58,1,2]]]);
//# sourceMappingURL=main.af6581ba.chunk.js.map