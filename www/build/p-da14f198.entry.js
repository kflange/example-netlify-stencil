import{r as s,h as i,c as r,H as t}from"./p-9c7debc1.js";const e=class{constructor(i){s(this,i),this.routerDirection="forward",this.onClick=()=>((s,i,r,t)=>{const e=this.el.closest("ion-nav");if(e)if("forward"===i){if(void 0!==r)return e.push(r,t,{skipIfBusy:!0})}else if("root"===i){if(void 0!==r)return e.setRoot(r,t,{skipIfBusy:!0})}else if("back"===i)return e.pop({skipIfBusy:!0});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps)}render(){return i(t,{onClick:this.onClick})}get el(){return r(this)}};export{e as ion_nav_link}