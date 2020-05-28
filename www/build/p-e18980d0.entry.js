import{r as t,d as i,h as s,c as e,H as n}from"./p-9c7debc1.js";import{g as o}from"./p-0c76def7.js";import{i as h}from"./p-58d13c5e.js";let r;const a=class{constructor(s){t(this,s),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1,this.ionDrag=i(this,"ionDrag",7)}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.item=this.el.querySelector("ion-item"),await this.updateOptions(),this.gesture=(await __sc_import_app("./p-dea53824.js")).createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:t=>this.canStart(t),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,r===this.el&&(r=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async open(t){if(null===this.item)return;const i=this.getOptions(t);i&&(void 0===t&&(t=i===this.leftOptions?"start":"end"),t=h(t)?"end":"start",this.openAmount<0&&i===this.leftOptions||this.openAmount>0&&i===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame(()=>{this.calculateOptsWidth(),r=this.el,this.setOpenAmount("end"===t?this.optsWidthRightSide:-this.optsWidthLeftSide,!1),this.state="end"===t?8:16})))}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return void 0!==r&&(r.close(),r=void 0,!0)}getOptions(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}async updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let s=0;s<t.length;s++){const e=await t.item(s).componentOnReady();"start"==(h(e.side)?"end":"start")?(this.leftOptions=e,i|=1):(this.rightOptions=e,i|=2)}this.optsDirty=!0,this.sides=i}canStart(t){return!("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)&&(r&&r!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions))}onStart(){r=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let i,s=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:s=Math.max(0,s);break;case 1:s=Math.min(0,s);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}s>this.optsWidthRightSide?(i=this.optsWidthRightSide,s=i+.55*(s-i)):s<-this.optsWidthLeftSide&&(i=-this.optsWidthLeftSide,s=i+.55*(s-i)),this.setOpenAmount(s,!1)}onEnd(t){const i=t.velocityX;let s=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const e=this.openAmount>0==!(i<0),n=Math.abs(i)>.3,o=Math.abs(this.openAmount)<Math.abs(s/2);d(e,n,o)&&(s=0);const h=this.state;this.setOpenAmount(s,!0),0!=(32&h)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&h)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(t,i){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const s=this.item.style;if(this.openAmount=t,i&&(s.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout(()=>{this.state=2,this.tmr=void 0},600),r=void 0,void(s.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}s.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const t=o(this);return s(n,{class:{[t]:!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}})}get el(){return e(this)}static get watchers(){return{disabled:["disabledChanged"]}}},d=(t,i,s)=>!i&&s||t&&i;a.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";export{a as ion_item_sliding}