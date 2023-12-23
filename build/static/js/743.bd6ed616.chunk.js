"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[743],{743:(e,s,n)=>{n.r(s),n.d(s,{default:()=>j});var r=n(791),a=n(689),t=n(508),c=n(434),o=n(999),l=n(373),i=n(921),d=n(184);const h=e=>{const s=(0,r.useRef)(),{center:n,zoom:a}=e;return(0,r.useEffect)((()=>{const e=new window.Microsoft.Maps.Map(s.current,{center:new window.Microsoft.Maps.Location(n.lat,n.lng),zoom:a}),r=e.getCenter(),t=new window.Microsoft.Maps.Pushpin(r);e.entities.push(t)}),[n,a]),(0,d.jsx)("div",{ref:s,className:"map ".concat(e.className),style:e.style})};var m=n(895),u=n(108);const x=e=>{const s=(0,a.s0)(),n=(0,r.useContext)(u.V),{isLoading:x,error:p,sendRequest:j,clearError:f}=(0,t.x)(),[C,g]=(0,r.useState)(!1),[v,w]=(0,r.useState)(!1),E=()=>g(!1),y=()=>w(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.Z,{error:p,onClear:f}),(0,d.jsx)(i.Z,{show:C,onCancel:E,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,d.jsx)(o.Z,{onClick:E,children:"CLOSE"}),children:(0,d.jsx)("div",{className:"map-container",children:(0,d.jsx)(h,{center:e.coordinates,zoom:16})})}),(0,d.jsx)(i.Z,{show:v,onCancel:y,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(o.Z,{inverse:!0,onClick:y,children:"CANCEL"}),(0,d.jsx)(o.Z,{danger:!0,onClick:async()=>{w(!1);try{await j("".concat("https://yourplace-backend-mern.vercel.app/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+n.token}),e.onDelete(e.id),s("/"+n.userId+"/places")}catch(r){}},children:"DELETE"})]}),children:(0,d.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,d.jsx)("li",{className:"place-item",children:(0,d.jsxs)(l.Z,{className:"place-item__content",children:[x&&(0,d.jsx)(m.Z,{asOverlay:!0}),(0,d.jsx)("div",{className:"place-item__image",children:(0,d.jsx)("img",{src:"".concat("https://yourplace-backend-mern.vercel.app","/").concat(e.image),alt:e.title})}),(0,d.jsxs)("div",{className:"place-item__info",children:[(0,d.jsx)("h2",{children:e.title}),(0,d.jsx)("h3",{children:e.address}),(0,d.jsx)("p",{children:e.description})]}),(0,d.jsxs)("div",{className:"place-item__actions",children:[(0,d.jsx)(o.Z,{inverse:!0,onClick:()=>g(!0),children:"VIEW ON MAP"}),n.isLoggedIn&&(0,d.jsx)(o.Z,{to:"/places/".concat(e.id),children:"EDIT"}),n.isLoggedIn&&(0,d.jsx)(o.Z,{danger:!0,onClick:()=>w(!0),children:"DELETE"})]})]})})]})},p=e=>0===e.items.length?(0,d.jsx)("div",{className:"place-list center",children:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,d.jsx)(o.Z,{inverse:!0,to:"/places/new",children:"Share Place"})]})}):(0,d.jsx)("ul",{className:"place-list",children:e.items.map((s=>(0,d.jsx)(x,{id:s.id,image:s.image,title:s.title,description:s.description,address:s.address,creatorId:s.creator,coordinates:s.location,onDelete:e.onDeletePlace},s.id)))}),j=()=>{const[e,s]=(0,r.useState)(),{isLoading:n,error:o,sendRequest:l,clearError:i}=(0,t.x)(),h=(0,a.UO)().userId;(0,r.useEffect)((()=>{(async()=>{try{const e=await l("".concat("https://yourplace-backend-mern.vercel.app/api","/places/user/").concat(h));s(e.places)}catch(e){}})()}),[l,h]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.Z,{error:o,onClear:i}),n&&(0,d.jsx)("div",{className:"center",children:(0,d.jsx)(m.Z,{})}),!n&&e&&(0,d.jsx)(p,{items:e,onDeletePlace:e=>{s((s=>s.filter((s=>s.id!==e))))}})]})}},373:(e,s,n)=>{n.d(s,{Z:()=>a});n(791);var r=n(184);const a=e=>(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},434:(e,s,n)=>{n.d(s,{Z:()=>c});n(791);var r=n(921),a=n(999),t=n(184);const c=e=>(0,t.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,t.jsx)(a.Z,{onClick:e.onClear,children:"Okay"}),children:(0,t.jsx)("p",{children:e.error})})},921:(e,s,n)=>{n.d(s,{Z:()=>l});n(791);var r=n(164),a=n(189),t=n(422),c=n(184);const o=e=>{const s=(0,c.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,c.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,c.jsx)("h2",{children:e.header})}),(0,c.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,c.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,c.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return r.createPortal(s,document.getElementById("modal-hook"))},l=e=>(0,c.jsxs)(c.Fragment,{children:[e.show&&(0,c.jsx)(t.Z,{onClick:e.onCancel}),(0,c.jsx)(a.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(o,{...e})})]})},508:(e,s,n)=>{n.d(s,{x:()=>a});var r=n(791);const a=()=>{const[e,s]=(0,r.useState)(!1),[n,a]=(0,r.useState)(),t=(0,r.useRef)([]),c=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(!0);const o=new AbortController;t.current.push(o);try{const a=await fetch(e,{method:n,body:r,headers:c,signal:o.signal}),l=await a.json();if(t.current=t.current.filter((e=>e!==o)),!a.ok)throw new Error(l.message);return s(!1),l}catch(l){throw a(l.message),s(!1),l}}),[]);return(0,r.useEffect)((()=>{t.current.forEach((e=>e.about()))}),[]),{isLoading:e,error:n,sendRequest:c,clearError:()=>{a(null)}}}}}]);
//# sourceMappingURL=743.bd6ed616.chunk.js.map