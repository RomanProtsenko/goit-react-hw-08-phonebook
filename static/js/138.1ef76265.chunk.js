"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[138],{7138:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,o,a,i,c,l,s,d,u,p,x,b,m=t(2791),f=t(9439),g=t(5984),h=t(9434),k=t(168),Z=t(5706),v=Z.Z.form(r||(r=(0,k.Z)(["\n  margin-top: 28px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n"]))),j=Z.Z.label(o||(o=(0,k.Z)(["\n  font-size: 20px;\n  line-height: 24px;\n"]))),y=Z.Z.input(a||(a=(0,k.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 16px;\n\n  font-size: 16px;\n  line-height: 20px;\n\n  outline: none;\n  border-radius: 16px;\n  border: 1px solid black;\n"]))),w=Z.Z.button(i||(i=(0,k.Z)(["\n  padding: 8px 16px;\n\n  color: black;\n  background-color: transparent;\n  border-radius: 8px;\n  border: 1px solid black;\n\n  transition: color 250ms ease-out, background-color 250ms ease-out;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: black;\n  }\n"]))),C=t(3634),z=function(n){return n.contacts.items},A=function(n){return n.contacts.error},F=function(){return{contacts:(0,h.v9)(z),error:(0,h.v9)(A)}},S=t(184),_=function(){var n=(0,g.x0)(),e=(0,g.x0)(),t=(0,m.useState)(!1),r=(0,f.Z)(t,2),o=r[0],a=r[1],i=F().contacts,c=(0,h.I0)();(0,m.useEffect)((function(){a(!1)}),[i]);return(0,S.jsxs)(v,{onSubmit:function(n){n.preventDefault();var e=n.target;if(a(!0),i.find((function(n){return n.name.toLowerCase()===e.name.value.toLowerCase()})))return alert("".concat(e.name.value," is already in contacts"));c((0,C.uK)({id:(0,g.x0)(),name:e.name.value,number:e.number.value})),n.target.reset()},children:[(0,S.jsx)(j,{htmlFor:n,children:"Name"}),(0,S.jsx)(y,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:n}),(0,S.jsx)(j,{htmlFor:e,children:"Number"}),(0,S.jsx)(y,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:e}),(0,S.jsx)(w,{type:"submit",children:o?"Adding...":"Add contact"})]})},I=function(n){return n.filter},D=Z.Z.ul(c||(c=(0,k.Z)(["\n  margin-top: 24px;\n  padding: 0 200px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),L=(Z.Z.li(l||(l=(0,k.Z)(["\n  padding-bottom: 16px;\n\n  display: flex;\n  align-items: center;\n  gap: 32px;\n\n  border-bottom: 1px solid black;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]))),Z.Z.button(s||(s=(0,k.Z)(["\n  padding: 8px 16px;\n  margin-left: auto;\n\n  color: black;\n  background-color: transparent;\n  border-radius: 8px;\n  border: 1px solid black;\n\n  transition: color 250ms ease-out, background-color 250ms ease-out;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: black;\n  }\n"]))),Z.Z.p(d||(d=(0,k.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"])))),N=Z.Z.li(u||(u=(0,k.Z)(["\n  padding-bottom: 16px;\n\n  display: flex;\n  align-items: center;\n  gap: 32px;\n\n  border-bottom: 1px solid black;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]))),q=Z.Z.button(p||(p=(0,k.Z)(["\n  padding: 8px 16px;\n  margin-left: auto;\n\n  color: black;\n  background-color: transparent;\n  border-radius: 8px;\n  border: 1px solid black;\n\n  transition: color 250ms ease-out, background-color 250ms ease-out;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: black;\n  }\n"]))),E=function(n){var e=n.id,t=n.name,r=n.number,o=(0,h.I0)(),a=(0,m.useState)(!1),i=(0,f.Z)(a,2),c=i[0],l=i[1];return(0,S.jsxs)(N,{children:[(0,S.jsx)("p",{children:t}),(0,S.jsx)("p",{children:r}),(0,S.jsx)(q,{type:"button",onClick:function(){return function(n){o((0,C.GK)(n)),l(!0)}(e)},children:c?"Deleting...":"Delete"})]})},K=Z.Z.label(x||(x=(0,k.Z)(["\n  margin-bottom: 24px;\n\n  display: block;\n\n  font-size: 16px;\n  line-height: 20px;\n"]))),U=Z.Z.input(b||(b=(0,k.Z)(["\n  margin-top: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n\n  display: block;\n\n  font-size: 12px;\n  line-height: 16px;\n\n  outline: none;\n  border-radius: 16px;\n  border: 1px solid black;\n"]))),B=t(1273),G=function(){var n,e=(0,h.I0)(),t=null!==(n=(0,h.v9)(I))&&void 0!==n?n:"";return(0,S.jsxs)(K,{children:["Find contacts by name",(0,S.jsx)(U,{type:"text",name:"filter",onChange:function(n){e((0,B.x)(n.target.value))},value:t})]})},J=function(){var n=F(),e=n.contacts,t=n.error,r=(0,h.v9)(I),o=e.filter((function(n){return n.name.toLowerCase().includes(r)})),a=0!==e.length,i=0!==o.length,c=a||i;return(0,S.jsxs)(S.Fragment,{children:[a?(0,S.jsxs)(D,{children:[(0,S.jsx)("h1",{children:"Your Contacts"}),(0,S.jsx)(G,{}),i&&o.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,S.jsx)(E,{id:e,name:t,number:r},e)}))]}):t&&(0,S.jsx)("p",{children:t}),!c&&(0,S.jsx)(L,{children:"There are no contacts :("})]})},M=function(){var n=(0,h.I0)();return(0,m.useEffect)((function(){n((0,C.yF)())}),[n]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{}),(0,S.jsx)(J,{})]})}},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}}}]);
//# sourceMappingURL=138.1ef76265.chunk.js.map