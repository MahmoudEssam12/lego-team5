"use strict";(self.webpackChunklego=self.webpackChunklego||[]).push([[378,215,548,484],{33548:function(e,s,n){n.r(s),n.d(s,{default:function(){return u}});var r=n(29439),i=n(72791),t=n(43504),l=n(66614),a={"inner-content":"Myorder_inner-content__o7JOV",nameOfBlock:"Myorder_nameOfBlock__3YyxI","wrapper-order":"Myorder_wrapper-order__JShTs","wrapper-orders":"Myorder_wrapper-orders__xDDtZ","order-text":"Myorder_order-text__cKX2A","order-btn":"Myorder_order-btn__BXp6J","wish-supp":"Myorder_wish-supp__1mHhz","img-supp":"Myorder_img-supp__YpSJn","supp-heading":"Myorder_supp-heading__WlSVn","line-break":"Myorder_line-break__KC6Po","wrapper-supp":"Myorder_wrapper-supp__lJp2v","cont-supp-link":"Myorder_cont-supp-link__UTqM+","supp-link":"Myorder_supp-link__AnYKC","line-breakTwo":"Myorder_line-breakTwo__Iy2U2",tableOrder:"Myorder_tableOrder__k0bMv","order-status-code":"Myorder_order-status-code__hp7qw",container:"Myorder_container__qdqCr",content:"Myorder_content__frF0G"},d=n(72426),c=n.n(d),o=n(80184);function u(){var e=(0,i.useState)([]),s=(0,r.Z)(e,2),n=s[0],d=s[1];(0,i.useEffect)((function(){return l.b.get("/userOrder").then((function(e){return d(e.data)})),function(){}}),[]);var u=function(e){var s=0;return e.forEach((function(e){return s+=e.quantity*e.unit_price})),s};return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:a["inner-content"],children:[(0,o.jsx)("h1",{className:a.nameOfBlock,children:"My Orders"}),(0,o.jsxs)("div",{className:a["wrapper-order"],style:{marginTop:"1rem"},children:[(0,o.jsx)("span",{className:a.heading,style:{display:"block",marginBottom:"1rem"},children:"Latest Order"}),n.length>0?(0,o.jsx)("div",{className:a["order-contatiner"],children:(0,o.jsxs)("table",{className:a.tableOrder,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Shipper Name"}),(0,o.jsx)("th",{children:"Order Status"}),(0,o.jsx)("th",{children:"Order Date"}),(0,o.jsx)("th",{style:{textAlign:"center"},children:"Product"}),(0,o.jsx)("th",{children:"Total Cost"})]})}),(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){var s=e._id,n=e.shipper,r=(e.isPending,e.isShipped),i=e.isCanceled,t=e.isDelivered,l=e.order_date,d=e.products;e.total_price;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:n?n.name:"-"}),(0,o.jsxs)("td",{style:{width:"100px"},children:[(0,o.jsx)("span",{className:a["order-status-code"],style:{backgroundColor:i?"red":t?"green":r?"orange":"grey"}})," ",i?"Canceled":t?"Delivered":r?"Shipped":"Pending"]}),(0,o.jsx)("td",{children:c()(l).format("DD/MM/YYYY")}),(0,o.jsx)("td",{children:(0,o.jsx)("ul",{style:{marginBottom:"0",paddingLeft:"0",listStyle:"none",display:"flex",justifyContent:"center",gap:"0.125rem 0.25rem",flexWrap:"wrap"},children:null===d||void 0===d?void 0:d.map((function(e){var s,n,r;return(0,o.jsxs)("li",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.125rem 0.25rem"},children:[(0,o.jsx)("img",{alt:"",style:{width:"50px",aspectRatio:"1/1",objectFit:"cover"},src:"http://localhost:8080/images/".concat(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.images[0])}),(0,o.jsxs)("span",{style:{display:"flex",flexDirection:"column",width:"125px",fontSize:"1rem",textTransform:"capitalize"},children:[null===e||void 0===e||null===(r=e.product)||void 0===r?void 0:r.name,(0,o.jsx)("small",{style:{fontSize:"0.7rem",color:"#999"},children:"Qty. ".concat(null===e||void 0===e?void 0:e.quantity)})]})]},null===e||void 0===e||null===(s=e.product)||void 0===s?void 0:s._id)}))})}),(0,o.jsxs)("td",{style:{width:"100px"},children:[u(d).toFixed(2)," EGP"]})]},s)}))})]})}):(0,o.jsxs)("div",{className:a["wrapper-orders"],children:[(0,o.jsx)("span",{className:a["order-text"],children:"You currently have no open orders."}),(0,o.jsx)(t.OL,{to:"/shop-now",children:(0,o.jsx)("button",{className:a["order-btn"],children:"Start Shopping"})})]})]})]})})}},72215:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});var r=n(29439),i=n(72791),t=n(43504),l=n(16871),a="Personal_inner-content__0uqhB",d="Personal_nameOfBlock__i1jGO",c="Personal_acc-block__lWnrI",o="Personal_heading__UQ-10",u="Personal_personal-text__pDKGF",m="Personal_wrapper-personal-btn__gOYVR",h="Personal_personal-btn__0BhOc",_="Personal_personal-email__plFDd",p="Personal_lego-account__zZ+GO",x=n(30456),j=n(55646),v=n(94070),f=n(80184);function y(){var e=(0,i.useState)((function(){return(0,x.Z)(localStorage.getItem("token"))})),s=(0,r.Z)(e,2),n=s[0],y=(s[1],(0,i.useState)(!1)),w=(0,r.Z)(y,2),g=w[0],N=w[1],O=(0,i.useState)(""),b=(0,r.Z)(O,2),M=b[0],k=b[1],L=(0,l.TH)(),S=function(e,s){"clickaway"!==s&&N(!1)};return(0,i.useEffect)((function(){var e;return L.state&&(e=L.state.message,k(e),N(!0)),function(){}}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)("h1",{className:d,children:"Personal & Address Details"}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("span",{className:o,children:"LEGO\xae Account Details"}),(0,f.jsx)("span",{className:u,children:"The LEGO ID is your gateway to logging into LEGO digital experiences, go here to edit your LEGO Account details"}),(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("button",{className:h,children:(0,f.jsx)(t.OL,{to:"/details",style:{textDecoration:"none",color:"white"},children:"LEGO\xae Account Details"})}),(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)("span",{className:p,children:"LEGO\xae Account Email"}),(0,f.jsx)("span",{className:u,children:n.user.email})]})]})]})]})}),(0,f.jsx)(j.Z,{open:g,autoHideDuration:3e3,onClose:S,severity:"success",children:(0,f.jsx)(v.Z,{onClose:S,severity:"success",sx:{width:"100%"},children:M})})]})}},64396:function(e,s,n){n.r(s),n.d(s,{default:function(){return h}});var r=n(29439),i=n(43504),t=n(72791),l=n(16871),a=(n(31323),n(33548),n(72215),n(15729),{"side-menu":"sidemenue_side-menu__3yuUR",menu:"sidemenue_menu__-6zlu","side-menu-items":"sidemenue_side-menu-items__x2kld",active:"sidemenue_active__SHjKY",menuTwo:"sidemenue_menuTwo__AqeyQ",hiddenMenu:"sidemenue_hiddenMenu__+wYrO","menu-arrow":"sidemenue_menu-arrow__KeqXV","account-menu-text":"sidemenue_account-menu-text__GLVC+","account-menu":"sidemenue_account-menu__lMVzX","btn-menu":"sidemenue_btn-menu__34clS",up:"sidemenue_up__SEL4L",down:"sidemenue_down__xEjpO",show:"sidemenue_show__YAey4","addtobag-btn":"sidemenue_addtobag-btn__9kFd8"}),d=n(16030),c=n(66303),o=n(80184);var u=function(){var e=(0,t.useState)(!1),s=(0,r.Z)(e,2),n=s[0],u=s[1],m=(0,d.I0)(),h=function(){localStorage.clear(),m((0,c.s9)()),(0,l.Fg)("/")};return(0,o.jsxs)("div",{className:a.container,children:[(0,o.jsxs)("ul",{className:a.menu,style:{paddingLeft:"0px"},children:[(0,o.jsx)(i.OL,{to:"/whishlist/myorder",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsx)("li",{className:a["side-menu-items"],children:"My Orders"})}),(0,o.jsx)(i.OL,{to:"/whishlist/personal",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsx)("li",{className:a["side-menu-items"],children:"Personal & Address Details"})}),(0,o.jsx)(i.OL,{to:"/whishlist/whishlist",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsx)("li",{className:a["side-menu-items"],children:"Wish list"})}),(0,o.jsx)(i.OL,{to:"/",className:a["side-menu"],children:(0,o.jsx)("li",{className:a["side-menu-items"],onClick:h,children:"Logout"})})]}),(0,o.jsx)("ul",{className:a.menuTwo,style:{paddingLeft:"0px"},children:(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:a["btn-menu"],onClick:function(){u(!n)},children:(0,o.jsxs)("div",{className:a["account-menu"],children:[(0,o.jsx)("div",{className:a["account-menu-text"],children:"account menu"}),(0,o.jsxs)("div",{className:a["menu-arrow"],children:["Wish list",(0,o.jsx)("svg",{className:n?a.up:a.down,width:"18",height:"28",viewBox:"0 0 18 28",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z",fill:"currentColor"})})]})]})}),(0,o.jsx)("div",{className:n?a.show:a.hiddenMenu,children:(0,o.jsxs)("ul",{className:a.menuTwo,style:{paddingLeft:"0px"},children:[(0,o.jsx)(i.OL,{to:"/whishlist/myorder",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsx)("li",{className:a["side-menu-items"],children:"My Orders"})}),(0,o.jsx)(i.OL,{to:"/whishlist/personal",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsx)("li",{className:a["side-menu-items"],children:"Personal & Address Details"})}),(0,o.jsx)(i.OL,{to:"/whishlist/whishlist",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsx)("li",{className:a["side-menu-items"],children:"Wish list"})}),(0,o.jsx)(i.OL,{to:"/",className:function(e){return e.isActive?a.active:a["side-menu"]},children:(0,o.jsxs)("li",{onClick:h,className:a["side-menu-items"],children:[" ","Logout"," "]})})]})})]})})]})},m=n(4644);n(57522);function h(){var e=(0,t.useState)(""),s=(0,r.Z)(e,2),n=s[0],a=s[1],d=(0,l.TH)();return(0,t.useEffect)((function(){var e=d.pathname.split("/")[2];a(e)}),[d]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("ul",{className:m.Z.ulist,children:[(0,o.jsxs)("li",{className:m.Z["list-direct"],children:[(0,o.jsx)(i.rU,{to:"/home",style:{cursor:"pointer"},className:m.Z.link,children:"Home"}),(0,o.jsx)("svg",{className:m.Z.arrow,height:"10",width:"10",viewBox:"0 0 18 28",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z",fill:"currentColor"})})]}),(0,o.jsx)("li",{className:m.Z["list-direct"],children:(0,o.jsx)("span",{children:n})})]}),(0,o.jsxs)("div",{className:m.Z.container,children:[(0,o.jsx)("div",{className:m.Z.sidemenue,children:(0,o.jsx)(u,{})}),(0,o.jsx)("div",{className:"outlet-container",style:{width:"100%"},children:(0,o.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=378.13decc66.chunk.js.map