var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function i(t){try{s(n.next(t))}catch(e){o(e)}}function c(t){try{s(n["throw"](t))}catch(e){o(e)}}function s(t){t.done?r(t.value):a(t.value).then(i,c)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,i;return i={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return s([t,e])}}function s(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(o=i[0]&2?a["return"]:i[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;if(a=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;a=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){r.label=i[1];break}if(i[0]===6&&r.label<o[1]){r.label=o[1];o=i;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(i);break}if(o[2])r.ops.pop();r.trys.pop();continue}i=e.call(t,r)}catch(c){i=[6,c];a=0}finally{n=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-1465f153.system.js","./p-ccd14062.system.js"],(function(t){"use strict";var e,r,n,a,o;return{setters:[function(t){e=t.r;r=t.h;n=t.H;a=t.c},function(t){o=t.g}],execute:function(){var i=":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]):host(.fab-horizontal-center),:host-context([dir=rtl]).fab-horizontal-center{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";var c=t("ion_fab",function(){function t(t){var r=this;e(this,t);this.edge=false;this.activated=false;this.onClick=function(){var t=!!r.el.querySelector("ion-fab-list");var e=r.getFab();var n=e&&e.disabled;if(t&&!n){r.activated=!r.activated}}}t.prototype.activatedChanged=function(){var t=this.activated;var e=this.getFab();if(e){e.activated=t}Array.from(this.el.querySelectorAll("ion-fab-list")).forEach((function(e){e.activated=t}))};t.prototype.componentDidLoad=function(){if(this.activated){this.activatedChanged()}};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.activated=false;return[2]}))}))};t.prototype.getFab=function(){return this.el.querySelector("ion-fab-button")};t.prototype.render=function(){var t;var e=this,a=e.horizontal,i=e.vertical,c=e.edge;var s=o(this);return r(n,{onClick:this.onClick,class:(t={},t[s]=true,t["fab-horizontal-"+a]=a!==undefined,t["fab-vertical-"+i]=i!==undefined,t["fab-edge"]=c,t)},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:true,configurable:true});return t}());c.style=i}}}));