"use strict";(self.webpackChunktest_car_rent=self.webpackChunktest_car_rent||[]).push([[413],{343:(e,n,r)=>{r.d(n,{h:()=>k});var s,i=r(420),l=r(791),t=r(87),a=r(168),c=r(867);const d=c.ZP.ul(s||(s=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n  margin: 0 auto;\n"])));var o,x,h,p,u=r(351),j=r(382);const m=c.ZP.li(o||(o=(0,a.Z)(["\n  flex-basis: calc((100% - 3 * 29px) / 4);\n  max-width: 274px;\n"]))),v=c.ZP.div(x||(x=(0,a.Z)(["\n  overflow: hidden;\n  position: relative;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  height: 268px;\n\n  display: flex;\n  flex-direction: column;\n\n  > img {\n    object-fit: cover;\n  }\n"]))),g=c.ZP.button(h||(h=(0,a.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  > svg {\n    width: 18px;\n    height: 18px;\n    fill: ",";\n  }\n"])),(e=>e.isFavorite?"#3470FF":"#FFFFFF")),b=c.ZP.div(p||(p=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 28px;\n"])));var f=r(290),y=r(122),F=r(184);const Z=e=>{let{car:n}=e;const{make:r,year:s,model:t,type:a,img:c,functionalities:d,rentalCompany:o,address:x,rentalPrice:h,mileage:p,id:j,description:Z}=n,w=(0,i.I0)(),k=(0,i.v9)(u._l);console.log(k);const[C,P]=(0,l.useState)(!1),R=null===x||void 0===x?void 0:x.split(", "),_=null===o||void 0===o?void 0:o.split(" ");(0,l.useEffect)((()=>{if(null!==k){const e=k.some((e=>e.id===j));P(e)}}),[k,j]);return(0,F.jsxs)(m,{children:[(0,F.jsxs)(v,{children:[(0,F.jsx)("img",{src:c||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWggGWNvpgV9vuCU59n0yoAuZtQTxKGSXH2w&usqp=CAU",alt:Z,loading:"lazy"}),(0,F.jsx)(g,{type:"button",onClick:()=>{C?(w((0,f.zm)(j)),P(!1)):(w((0,f._p)(n)),P(!0))},className:"cursor-pointer",$isFavorite:C,children:C?(0,F.jsx)(y.$0H,{}):(0,F.jsx)(y.BgW,{})})]}),(0,F.jsxs)(b,{children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)("p",{children:[(0,F.jsx)("span",{children:r}),(0,F.jsx)("span",{children:t}),(0,F.jsxs)("span",{children:[" ",s]})]}),(0,F.jsx)("p",{children:h})]}),(0,F.jsx)("div",{children:(0,F.jsxs)("ul",{children:[(0,F.jsx)("li",{children:R[1]}),(0,F.jsx)("li",{children:R[2]}),(0,F.jsx)("li",{children:o}),(0,F.jsx)("li",{children:_[0]}),(0,F.jsx)("li",{children:a}),(0,F.jsx)("li",{children:t}),(0,F.jsx)("li",{children:p}),(0,F.jsx)("li",{children:d[0]})]})})]}),(0,F.jsx)("button",{children:"Learn more"})]})};var w=r(563);const k=e=>{let{adverts:n}=e;const r=(0,i.I0)(),[s]=(0,t.lr)(),[a,c]=(0,l.useState)(Number(s.get("page"))||1),o=(0,i.v9)(u.Rd),x=(0,i.v9)(u.by),h=(0,i.v9)(u.Vc),p=(0,l.useRef)(!1);(0,l.useEffect)((()=>{p.current&&1===a||(r((0,j.o)(a)),p.current=!0)}),[r,a,p]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(d,{children:n.map((e=>{const{id:n}=e;return(0,F.jsx)(Z,{car:e},n||(0,w.x0)())}))}),o>0&&o<32&&!x&&!h&&(0,F.jsx)("button",{onClick:()=>{c((e=>e+1))},children:"Load more"})]})}},833:(e,n,r)=>{r.d(n,{Z:()=>i});var s=r(184);const i=e=>{let{carBrands:n,hourlyRates:r}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"carBrand",children:["Car Brand",(0,s.jsx)("select",{id:"carBrand",children:(0,s.jsx)("option",{value:"",disabled:!0,children:"Select brand"})})]}),(0,s.jsxs)("label",{htmlFor:"hourlyRate",children:["Price / 1 hour",(0,s.jsx)("select",{id:"hourlyRate",children:(0,s.jsx)("option",{value:"",disabled:!0,children:"Select hourly rate"})})]}),(0,s.jsxs)("label",{htmlFor:"mileage",children:["\u0421ar mileage / km",(0,s.jsx)("input",{type:"number",id:"mileage"}),(0,s.jsx)("input",{type:"number",id:"mileage"})]})]})}},413:(e,n,r)=>{r.r(n),r.d(n,{default:()=>o});var s=r(420),i=r(833),l=r(245),t=r(343),a=r(787),c=r(351),d=r(184);const o=()=>{const e=(0,s.v9)(c.Vc),n=(0,s.v9)(c.by),r=(0,s.v9)(c._l);return(0,d.jsxs)("main",{children:[e&&(0,d.jsx)(l.Z,{}),n&&(0,d.jsx)(a.j,{children:"Sorry. Something went wrong. Please reload the page to try again."}),(0,d.jsx)(i.Z,{}),(0,d.jsx)(t.h,{adverts:r})]})}},351:(e,n,r)=>{r.d(n,{Rd:()=>t,Rn:()=>s,Vc:()=>i,_l:()=>a,by:()=>l});const s=e=>e.cars.adverts,i=e=>e.cars.isLoading,l=e=>e.cars.error,t=e=>e.cars.adverts.length,a=e=>e.cars.favorites}}]);
//# sourceMappingURL=413.30abf19e.chunk.js.map