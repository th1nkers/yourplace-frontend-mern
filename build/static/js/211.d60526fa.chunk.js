"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[211],{211:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(791),s=a(689),i=a(810),n=a(999),r=a(373),c=a(895),o=a(434),d=a(595),u=a(94),h=a(508),p=a(108),v=a(184);const m=()=>{const e=(0,l.useContext)(p.V),{isLoading:t,error:a,sendRequest:m,clearError:x}=(0,h.x)(),[f,y]=(0,l.useState)(),j=(0,s.UO)().placeId,C=(0,s.s0)(),[V,E,N]=(0,u.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);(0,l.useEffect)((()=>{(async()=>{try{const e=await m("".concat("http://localhost:5000/api","/places/").concat(j));y(e.place),N({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0)}catch(e){}})()}),[m,j,N]);return t?(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(c.Z,{})}):f||a?(0,v.jsxs)(l.Fragment,{children:[(0,v.jsx)(o.Z,{error:a,onClear:x}),!t&&f&&(0,v.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{await m("".concat("http://localhost:5000/api","/places/").concat(j),"PATCH",JSON.stringify({title:V.inputs.title.value,description:V.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}),C("/"+e.userId+"/places")}catch(a){}},children:[(0,v.jsx)(i.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,d.hg)()],errorText:"Please enter a valid title.",onInput:E,initialValue:f.title,initialValid:!0}),(0,v.jsx)(i.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,d.CP)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:E,initialValue:f.description,initialValid:!0}),(0,v.jsx)(n.Z,{type:"submit",disabled:!V.isValid,children:"UPDATE PLACE"})]})]}):(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(r.Z,{children:(0,v.jsx)("h2",{children:"Could not find place!"})})})}},810:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(791),s=a(595),i=a(184);const n=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,s.Gu)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},r=e=>{const[t,a]=(0,l.useReducer)(n,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:s,onInput:r}=e,{value:c,isValid:o}=t;(0,l.useEffect)((()=>{r(s,c,o)}),[s,c,o,r]);const d=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},h="input"===e.element?(0,i.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:u,value:t.value}):(0,i.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:u,value:t.value});return(0,i.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,i.jsx)("label",{htmlFor:e.id,children:e.label}),h,!t.isValid&&t.isTouched&&(0,i.jsx)("p",{children:e.errorText})]})}},373:(e,t,a)=>{a.d(t,{Z:()=>s});a(791);var l=a(184);const s=e=>(0,l.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},434:(e,t,a)=>{a.d(t,{Z:()=>n});a(791);var l=a(921),s=a(999),i=a(184);const n=e=>(0,i.jsx)(l.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(s.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})},921:(e,t,a)=>{a.d(t,{Z:()=>c});a(791);var l=a(164),s=a(189),i=a(422),n=a(184);const r=e=>{const t=(0,n.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,n.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,n.jsx)("h2",{children:e.header})}),(0,n.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,n.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,n.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return l.createPortal(t,document.getElementById("modal-hook"))},c=e=>(0,n.jsxs)(n.Fragment,{children:[e.show&&(0,n.jsx)(i.Z,{onClick:e.onCancel}),(0,n.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,n.jsx)(r,{...e})})]})},94:(e,t,a)=>{a.d(t,{c:()=>i});var l=a(791);const s=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const l in e.inputs)a=l===t.inputId?a&&t.isValid:a&&e.inputs[l].isValid;return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},i=(e,t)=>{const[a,i]=(0,l.useReducer)(s,{inputs:e,isValid:t});return[a,(0,l.useCallback)(((e,t,a)=>{i({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,l.useCallback)(((e,t)=>{i({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},508:(e,t,a)=>{a.d(t,{x:()=>s});var l=a(791);const s=()=>{const[e,t]=(0,l.useState)(!1),[a,s]=(0,l.useState)(),i=(0,l.useRef)([]),n=(0,l.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const r=new AbortController;i.current.push(r);try{const s=await fetch(e,{method:a,body:l,headers:n,signal:r.signal}),c=await s.json();if(i.current=i.current.filter((e=>e!==r)),!s.ok)throw new Error(c.message);return t(!1),c}catch(c){throw s(c.message),t(!1),c}}),[]);return(0,l.useEffect)((()=>{i.current.forEach((e=>e.about()))}),[]),{isLoading:e,error:a,sendRequest:n,clearError:()=>{s(null)}}}},595:(e,t,a)=>{a.d(t,{CP:()=>c,Gu:()=>d,Ox:()=>o,hg:()=>r});const l="REQUIRE",s="MINLENGTH",i="MAXLENGTH",n="EMAIL",r=()=>({type:l}),c=e=>({type:s,val:e}),o=()=>({type:n}),d=(e,t)=>{let a=!0;for(const r of t)r.type===l&&(a=a&&e.trim().length>0),r.type===s&&(a=a&&e.trim().length>=r.val),r.type===i&&(a=a&&e.trim().length<=r.val),"MIN"===r.type&&(a=a&&+e>=r.val),"MAX"===r.type&&(a=a&&+e<=r.val),r.type===n&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}}}]);
//# sourceMappingURL=211.d60526fa.chunk.js.map