var __awaiter=this&&this.__awaiter||function(i,n,t,e){function o(i){return i instanceof t?i:new t((function(n){n(i)}))}return new(t||(t=Promise))((function(t,a){function r(i){try{d(e.next(i))}catch(n){a(n)}}function s(i){try{d(e["throw"](i))}catch(n){a(n)}}function d(i){i.done?t(i.value):o(i.value).then(r,s)}d((e=e.apply(i,n||[])).next())}))};var __generator=this&&this.__generator||function(i,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},e,o,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(i){return function(n){return d([i,n])}}function d(r){if(e)throw new TypeError("Generator is already executing.");while(t)try{if(e=1,o&&(a=r[0]&2?o["return"]:r[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;if(o=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:t.label++;return{value:r[1],done:false};case 5:t.label++;o=r[1];r=[0];continue;case 7:r=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){t.label=r[1];break}if(r[0]===6&&t.label<a[1]){t.label=a[1];a=r;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(r);break}if(a[2])t.ops.pop();t.trys.pop();continue}r=n.call(i,t)}catch(s){r=[6,s];o=0}finally{e=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-1465f153.system.js","./p-ccd14062.system.js","./p-58644701.system.js","./p-ef2985f4.system.js","./p-7fc62b7b.system.js","./p-babd758f.system.js","./p-89b6bf28.system.js","./p-6d7214ae.system.js"],(function(i){"use strict";var n,t,e,o,a,r,s,d,l,c,p,u,g,f,m;return{setters:[function(i){n=i.r;t=i.d;e=i.h;o=i.H;a=i.c},function(i){r=i.g;s=i.c},function(){},function(){},function(i){d=i.B;l=i.p;c=i.a;p=i.d;u=i.e},function(i){g=i.g},function(i){f=i.c},function(i){m=i.s}],execute:function(){var h=function(i){var n=f();var t=f();var e=f();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var b=function(i){var n=f();var t=f();var e=f();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var y=function(i){var n=f();var t=f();var e=f();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var x=function(i){var n=f();var t=f();var e=f();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var v=".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";var w=".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";var k=i("ion_loading",function(){function i(i){var e=this;n(this,i);this.presented=false;this.keyboardClose=true;this.duration=0;this.backdropDismiss=false;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onBackdropTap=function(){e.dismiss(undefined,d)};l(this.el);this.didPresent=t(this,"ionLoadingDidPresent",7);this.willPresent=t(this,"ionLoadingWillPresent",7);this.willDismiss=t(this,"ionLoadingWillDismiss",7);this.didDismiss=t(this,"ionLoadingDidDismiss",7)}i.prototype.componentWillLoad=function(){if(this.spinner===undefined){var i=r(this);this.spinner=s.get("loadingSpinner",s.get("spinner",i==="ios"?"lines":"crescent"))}};i.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(n){switch(n.label){case 0:return[4,c(this,"loadingEnter",h,y,undefined)];case 1:n.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)}return[2]}}))}))};i.prototype.dismiss=function(i,n){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return p(this,i,n,"loadingLeave",b,x)};i.prototype.onDidDismiss=function(){return u(this.el,"ionLoadingDidDismiss")};i.prototype.onWillDismiss=function(){return u(this.el,"ionLoadingWillDismiss")};i.prototype.render=function(){var i;var n=this,t=n.message,a=n.spinner;var s=r(this);return e(o,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},g(this.cssClass)),(i={},i[s]=true,i["loading-translucent"]=this.translucent,i))},e("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),e("div",{class:"loading-wrapper",role:"dialog"},a&&e("div",{class:"loading-spinner"},e("ion-spinner",{name:a,"aria-hidden":"true"})),t&&e("div",{class:"loading-content",innerHTML:m(t)})))};Object.defineProperty(i.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});return i}());k.style={ios:v}}}}));