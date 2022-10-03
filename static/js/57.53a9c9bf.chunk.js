"use strict";(self.webpackChunkreact_learning_homework8=self.webpackChunkreact_learning_homework8||[]).push([[57],{4057:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var a=t(885),r=t(2791),s=t(9434),o="UserInput_formWrapper__il-PQ",c="UserInput_userInput__sFOde",i=t(3329);function l(e){var n=e.handleClick,t=e.type,a=e.name,r=e.children,s=e.className;return(0,i.jsx)("button",{name:a,onClick:n,type:t,className:s,children:r})}var d=(0,r.memo)(l),u=t(2007),m=t.n(u),h=t(8820);function p(e){var n=e.onChange,t=e.addContact,a=e.valueName,r=e.valueTel,s=e.titel;return(0,i.jsxs)("form",{className:o,children:[(0,i.jsx)("input",{className:c,placeholder:"Name",type:"text",value:a,name:"name",onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("input",{className:c,onChange:n,placeholder:"Phone",value:r,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),a&&r?(0,i.jsxs)(d,{handleClick:t,className:"addContact",type:"submit",children:[(0,i.jsx)(h.vM4,{})," ",s]}):(0,i.jsx)("p",{children:"Add contact details to add it to the contact list"})]})}var b=p;function x(e){var n=e.filterValue,t=e.onChange;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Find contacts by name"}),(0,i.jsx)("form",{children:(0,i.jsx)("input",{className:c,placeholder:"Search contact",type:"text",name:"filter",value:n,onChange:t})})]})}p.prototype={onChange:m().func.isRequired,addContact:m().func.isRequired,valueName:m().string.isRequired,valueTel:m().string.isRequired};var j=(0,r.memo)(x);x.prototype={filterValue:m().string.isRequired,onChange:m().func.isRequired};var f={contactList:"ContactList_contactList__6i5pP",contactItem:"ContactList_contactItem__l+IPj",button:"ContactList_button__zafWS",buttonUpdate:"ContactList_buttonUpdate__u5aBc",user:"ContactList_user__xnNXh"},v=t(7425),C=t(1413),N=t(3360),g=t(7502),_=t(3027),y=function(e){return e.phonebook.contacts.filter},k=function(e){return e.phonebook.contacts.data.items},Z=function(e){return e.phonebook.contacts.data.loading},w=t(826),L=t(9085);var P=function(e){var n=(0,r.useState)(""),t=(0,a.Z)(n,2),o=t[0],c=t[1],l=(0,r.useState)(""),d=(0,a.Z)(l,2),u=d[0],m=d[1],h=(0,s.v9)(k),p=(0,s.I0)(),b=function(e){switch(e.target.id){case"formBasicName":c(e.target.value);break;case"formBasicPhone":m(e.target.value)}};return(0,i.jsx)("div",{children:(0,i.jsxs)(g.Z,(0,C.Z)((0,C.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,i.jsx)(g.Z.Header,{closeButton:!0,children:(0,i.jsx)(g.Z.Title,{id:"contained-modal-title-vcenter",children:"Update contact"})}),(0,i.jsx)(g.Z.Body,{children:(0,i.jsxs)(_.Z,{children:[(0,i.jsxs)(_.Z.Group,{className:"mb-3",controlId:"formBasicName",children:[(0,i.jsx)(_.Z.Label,{children:(0,i.jsxs)("h5",{children:["Name :",e.name]})}),(0,i.jsx)("br",{}),(0,i.jsxs)(_.Z.Label,{children:["New name :",o]}),(0,i.jsx)(_.Z.Control,{type:"name",placeholder:"Enter name",onChange:b,value:o})]}),(0,i.jsxs)(_.Z.Group,{className:"mb-3",controlId:"formBasicPhone",children:[(0,i.jsx)(_.Z.Label,{children:(0,i.jsxs)("h5",{children:["Number: ",e.phone]})}),(0,i.jsx)("br",{}),(0,i.jsxs)(_.Z.Label,{children:["New number :",u]}),(0,i.jsx)(_.Z.Control,{type:"phone",placeholder:"Enter phone",onChange:b,value:u})]}),(0,i.jsx)(N.Z,{style:{backgroundColor:"#f0bb29",borderColor:"#c17900"},variant:"primary",type:"button",onClick:function(n){n.preventDefault();var t={name:o,number:u},a={userId:e.id,newContsct:t};h.map((function(e){return e.name})).includes(t.name)?(0,L.Am)('Person: "'.concat(t.name,'" is already in contacts')):(p((0,w._n)(a)),e.onHide())},children:"Submit"})]})}),(0,i.jsx)(g.Z.Footer,{children:(0,i.jsx)(N.Z,{style:{backgroundColor:"#f0bb29",borderColor:"#c17900"},onClick:e.onHide,children:"Close"})})]}))})};function I(e){var n=e.filter,t=e.contacts,s=e.filterByName,o=e.removeContact,c=(0,r.useState)(!1),l=(0,a.Z)(c,2),d=l[0],u=l[1],m=(0,r.useState)(""),p=(0,a.Z)(m,2),b=p[0],x=p[1],j=function(e){x(e.target.name),u(!0)};return(0,i.jsx)("div",{className:f.test,children:(0,i.jsx)("ul",{className:f.contactList,children:n&&s().map((function(e){return(0,i.jsxs)("li",{className:f.contactItem,children:[e.id===b&&(0,i.jsx)(P,{name:e.name,phone:e.number,id:b,show:d,onHide:function(){return u(!1)}}),(0,i.jsxs)("p",{className:f.user,children:[e.name,": ",e.number]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("button",{name:e.id,onClick:j,className:f.buttonUpdate,type:"button",children:[(0,i.jsx)(v.Nwp,{})," Update"]}),(0,i.jsxs)("button",{name:e.id,onClick:o,className:f.button,type:"button",children:[(0,i.jsx)(h.Psi,{})," Delete"]})]})]},e.id)}))||t.map((function(e){return(0,i.jsxs)("li",{className:f.contactItem,children:[(0,i.jsxs)("div",{children:[e.id===b&&(0,i.jsx)(P,{name:e.name,phone:e.number,id:b,show:d,onHide:function(){return u(!1)}}),(0,i.jsxs)("p",{className:f.user,children:[e.name,": ",e.number]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("button",{name:e.id,onClick:j,className:f.buttonUpdate,type:"button",children:[(0,i.jsx)(v.Nwp,{})," Update"]}),(0,i.jsxs)("button",{name:e.id,onClick:o,className:f.button,type:"button",children:[(0,i.jsx)(h.Psi,{})," Delete"]})]})]},e.id)}))})})}I.prototype={filter:m().string,filterByName:m().string,contacts:m().array.isRequired,deleteContact:m().func.isRequired};var S=I,q=t(1538),B="Phonebook_phonebook__uzxkM",U="Phonebook_title__mhwvS",A="Phonebook_contactsTitle__nW60w",R="Phonebook_listWraper__US9CM",z=t(1014),F=t(4691),H=function(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],o=n[1],c=(0,r.useState)(""),l=(0,a.Z)(c,2),d=l[0],u=l[1],m=(0,s.v9)(y),h=(0,s.v9)(k),p=(0,s.v9)(Z),x=(0,s.v9)(z.y6),f=(0,s.I0)();(0,r.useEffect)((function(){x&&f((0,w.K2)())}),[f,x]);var v=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"phone":u(e.target.value);break;case"filter":f((0,q.s)(e.target.value))}},C=function(){o(""),u("")};return(0,i.jsxs)("div",{className:B,children:[(0,i.jsx)("h2",{className:U,children:"Phonebook"}),(0,i.jsx)(b,{titel:"Add contact",valueName:t,valueTel:d,onChange:v,addContact:function(e){var n={name:t,number:d};h.map((function(e){return e.name})).includes(t)?(0,L.Am)('Person: "'.concat(t,'" is already in contacts')):f((0,w.Dk)(n)),C()}}),(0,i.jsxs)("div",{className:R,children:[(0,i.jsx)("div",{className:A,children:p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"We are processing your request, please wait..."}),(0,i.jsx)(F.Y8,{colors:["#223f4a","#f0bb29","#c17900"],visible:!0,height:"30",width:"30",ariaLabel:"radio-loading",wrapperStyle:{width:"20%"},wrapperClass:"radio-wrapper"})]}):(0,i.jsx)("p",{children:"\u0421ontacts:"})}),(0,i.jsx)(j,{filterValue:m,onChange:v}),(0,i.jsx)(S,{filter:m,contacts:h,filterByName:function(){return h.filter((function(e){return e.name.toLocaleLowerCase().includes(m.toLocaleLowerCase())}))},removeContact:function(e){f((0,w.GK)(e.target.name)),f((0,w.K2)())}})]})]})};var T=function(){return(0,i.jsx)(H,{})}}}]);
//# sourceMappingURL=57.53a9c9bf.chunk.js.map