import{g as t}from"./p-0c76def7.js";import{MENU_BACK_BUTTON_PRIORITY as n}from"./p-f3a0c163.js";import{c as r}from"./p-724bfe80.js";const a=t=>r().duration(t?400:300),e=n=>{let e,s;const o=n.width+8,i=r(),c=r();n.isEndSide?(e=o+"px",s="0px"):(e=-o+"px",s="0px"),i.addElement(n.menuInnerEl).fromTo("transform",`translateX(${e})`,`translateX(${s})`);const u="ios"===t(n),p=u?.2:.25;return c.addElement(n.backdropEl).fromTo("opacity",.01,p),a(u).addAnimation([i,c])},s=n=>{let e,s;const o=t(n),i=n.width;n.isEndSide?(e=-i+"px",s=i+"px"):(e=i+"px",s=-i+"px");const c=r().addElement(n.menuInnerEl).fromTo("transform",`translateX(${s})`,"translateX(0px)"),u=r().addElement(n.contentEl).fromTo("transform","translateX(0px)",`translateX(${e})`),p=r().addElement(n.backdropEl).fromTo("opacity",.01,.32);return a("ios"===o).addAnimation([c,u,p])},o=n=>{const e=t(n),s=n.width*(n.isEndSide?-1:1)+"px",o=r().addElement(n.contentEl).fromTo("transform","translateX(0px)",`translateX(${s})`);return a("ios"===e).addAnimation(o)},i=(()=>{const t=new Map,r=[],a=async t=>{if(await f(),"start"===t||"end"===t){return m(n=>n.side===t&&!n.disabled)||m(n=>n.side===t)}if(null!=t)return m(n=>n.menuId===t);return m(t=>!t.disabled)||(r.length>0?r[0].el:void 0)},i=async()=>(await f(),p()),c=(n,r)=>{t.set(n,r)},u=t=>{const n=t.side;r.filter(r=>r.side===n&&r!==t).forEach(t=>t.disabled=!0)},p=()=>m(t=>t._isOpen),l=()=>r.some(t=>t.isAnimating),m=t=>{const n=r.find(t);if(void 0!==n)return n.el},f=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()));return c("reveal",o),c("push",s),c("overlay",e),"undefined"!=typeof document&&document.addEventListener("ionBackButton",t=>{const r=p();r&&t.detail.register(n,()=>r.close())}),{registerAnimation:c,get:a,getMenus:async()=>(await f(),r.map(t=>t.el)),getOpen:i,isEnabled:async t=>{const n=await a(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const r=await a(n);return r&&(r.swipeGesture=t),r},isAnimating:async()=>(await f(),l()),isOpen:async t=>{if(null!=t){const n=await a(t);return void 0!==n&&n.isOpen()}return void 0!==await i()},enable:async(t,n)=>{const r=await a(n);return r&&(r.disabled=!t),r},toggle:async t=>{const n=await a(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?a(t):i());return void 0!==n&&n.close()},open:async t=>{const n=await a(t);return!!n&&n.open()},_getOpenSync:p,_createAnimation:(n,r)=>{const a=t.get(n);if(!a)throw new Error("animation not registered");return a(r)},_register:t=>{r.indexOf(t)<0&&(t.disabled||u(t),r.push(t))},_unregister:t=>{const n=r.indexOf(t);n>-1&&r.splice(n,1)},_setOpen:async(t,n,r)=>{if(l())return!1;if(n){const n=await i();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,r)},_setActiveMenu:u}})();export{i as m}