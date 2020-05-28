import{r as t,d as e,h as i,H as n,c as s}from"./p-9c7debc1.js";import{g as r}from"./p-0c76def7.js";import{c as o,f as a,b as h}from"./p-58d13c5e.js";import"./p-f3a0c163.js";import{b as d}from"./p-db3a7224.js";import{h as l}from"./p-5b51185b.js";const m=(t,e,i,n)=>{if(t!==I&&t!==O){if(t===V)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===Z)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===Y||t===j||t===A||t===F||t===z||t===H)return w(e);if(t===S)return N(e);if(t===C)return(n.monthNames?n.monthNames:B)[e-1];if(t===$)return(n.monthShortNames?n.monthShortNames:U)[e-1];if(t===T||t===J){if(0===e)return"12";if(e>12&&(e-=12),t===T&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===I?(n.dayNames?n.dayNames:P)[e]:(n.dayShortNames?n.dayShortNames:W)[e]}catch(s){}},u=(t,e,i,n=0,s=0)=>parseInt(`1${N(t)}${w(e)}${w(i)}${w(n)}${w(s)}`,10),c=t=>u(t.year,t.month,t.day,t.hour,t.minute),f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,p=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,v=t=>{let e=null;if(null!=t&&""!==t&&(e=p.exec(t),e?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=f.exec(t)),null===e)return;for(let n=1;n<8;n++)e[n]=void 0!==e[n]?parseInt(e[n],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}},g=(t,e)=>{const i=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),n=new Date(t.toLocaleString("en-US",{timeZone:e}));return i.getTime()-n.getTime()},y=(t,e)=>e===V||e===Z?t.hour<12?"am":"pm":e===T||e===J?t.hour>12?t.hour-12:0===t.hour?12:t.hour:t[b(e)],b=t=>{for(const e in E)if(E[e].f===t)return E[e].k},x=t=>{let e="";return void 0!==t.year?(e=N(t.year),void 0!==t.month&&(e+="-"+w(t.month),void 0!==t.day&&(e+="-"+w(t.day),void 0!==t.hour&&(e+=`T${w(t.hour)}:${w(t.minute)}:${w(t.second)}`,t.millisecond>0&&(e+="."+k(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+w(Math.floor(Math.abs(t.tzOffset/60)))+":"+w(t.tzOffset%60))))):void 0!==t.hour&&(e=w(t.hour)+":"+w(t.minute),void 0!==t.second&&(e+=":"+w(t.second),void 0!==t.millisecond&&(e+="."+k(t.millisecond)))),e},M=(t,e)=>{if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i},D=(t,e)=>{let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t],0===i.length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i},w=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),k=t=>("00"+(void 0!==t?Math.abs(t):"0")).slice(-3),N=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),S="YYYY",Y="YY",C="MMMM",$="MMM",j="MM",I="DDDD",O="DDD",A="DD",F="HH",T="hh",J="h",z="mm",H="ss",V="A",Z="a",E=[{f:S,k:"year"},{f:C,k:"month"},{f:I,k:"day"},{f:$,k:"month"},{f:O,k:"day"},{f:Y,k:"year"},{f:j,k:"month"},{f:A,k:"day"},{f:F,k:"hour"},{f:T,k:"hour"},{f:z,k:"minute"},{f:H,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:J,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:V,k:"ampm"},{f:Z,k:"ampm"}],P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],B=["January","February","March","April","May","June","July","August","September","October","November","December"],U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],L=[T,J,z,"m",H,"s"],R=class{constructor(i){t(this,i),this.inputId="ion-dt-"+G++,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onClick=()=>{this.setFocus(),this.open()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionCancel=e(this,"ionCancel",7),this.ionChange=e(this,"ionChange",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:M(this.monthNames,"monthNames"),monthShortNames:M(this.monthShortNames,"monthShortNames"),dayNames:M(this.dayNames,"dayNames"),dayShortNames:M(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}async open(){if(this.disabled||this.isExpanded)return;const t=this.generatePickerOptions(),e=await d.create(t);this.isExpanded=!0,e.onDidDismiss().then(()=>{this.isExpanded=!1,this.setFocus()}),e.addEventListener("ionPickerColChange",async t=>{const i=t.detail,n={};n[i.name]={value:i.options[i.selectedIndex].value},this.updateDatetimeValue(n),e.columns=this.generateColumns()}),await e.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){((t,e,i)=>{if(!e||"string"==typeof e){const t=((t="",e="")=>{null==t&&(t=""),10!==t.length&&7!==t.length||(t+=" ");const i="string"==typeof t&&t.length>0?new Date(t):new Date,n=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return e&&e.length>0?new Date(i.getTime()-g(n,e)):n})(e,i);Number.isNaN(t.getTime())||(e=t.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=v(e))return Object.assign(t,e),!0}else{if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}if(e.ampm)return e.hour={value:e.hour?e.hour.value:"pm"===e.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=e.hour.value,!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const n in t)t.hasOwnProperty(n)&&delete t[n]})(this.datetimeValue,t,this.displayTimezone)}generatePickerOptions(){const t=r(this);this.locale={monthNames:M(this.monthNames,"monthNames"),monthShortNames:M(this.monthShortNames,"monthShortNames"),dayNames:M(this.dayNames,"dayNames"),dayShortNames:M(this.dayShortNames,"dayShortNames")};const e=Object.assign(Object.assign({mode:t},this.pickerOptions),{columns:this.generateColumns()}),i=e.buttons;return i&&0!==i.length||(e.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t);const e=new Date(x(this.datetimeValue));this.datetimeValue.tzOffset=void 0!==this.displayTimezone&&this.displayTimezone.length>0?g(e,this.displayTimezone)/1e3/60*-1:-1*e.getTimezoneOffset(),this.value=x(this.datetimeValue)}}]),e}generateColumns(){let t=this.pickerFormat||this.displayFormat||q;if(0===t.length)return[];this.calcMinMax(),t=t.replace("DDDD","{~}").replace("DDD","{~}"),-1===t.indexOf("D")&&(t=t.replace("{~}","D")),t=t.replace(/{~}/g,"");const e=(t=>{const e=[];t=t.replace(/[^\w\s]/gi," "),E.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,n)=>{E.forEach(s=>{if(t===s.f){if((t===V||t===Z)&&(e.indexOf(J)<0&&e.indexOf(T)<0||-1===L.indexOf(i[n-1])))return;e.push(t)}})}),e})(t).map(t=>{const e=b(t);let i;i=this[e+"Values"]?D(this[e+"Values"],e):((t,e,i)=>{const n=[];if(t===S||t===Y){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)n.push(t)}else if(t===C||t===$||t===j||"M"===t||t===T||t===J)for(let s=1;s<13;s++)n.push(s);else if(t===I||t===O||t===A||"D"===t)for(let s=1;s<32;s++)n.push(s);else if(t===F||"H"===t)for(let s=0;s<24;s++)n.push(s);else if(t===z||"m"===t)for(let s=0;s<60;s++)n.push(s);else if(t===H||"s"===t)for(let s=0;s<60;s++)n.push(s);else t!==V&&t!==Z||n.push("am","pm");return n})(t,this.datetimeMin,this.datetimeMax);const n=i.map(e=>({value:e,text:m(t,e,void 0,this.locale)})),s=((t,e)=>{const i=y(this.datetimeValue,e);if(void 0!==i)return i;const n=v((new Date).toISOString());return y(n,e)})(0,t),r=n.findIndex(t=>t.value===s);return{name:e,selectedIndex:r>=0?r:0,options:n}}),i=this.datetimeMin,n=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,n[t]=0}),this.validateColumns(_(e))}validateColumns(t){const e=new Date,i=c(this.datetimeMin),n=c(this.datetimeMax),s=t.find(t=>"year"===t.name);let r=e.getFullYear();if(s){s.options.find(t=>t.value===e.getFullYear())||(r=s.options[0].value);const t=s.selectedIndex;if(void 0!==t){const e=s.options[t];e&&(r=e.value)}}const o=this.validateColumn(t,"month",1,i,n,[r,0,0,0,0],[r,12,31,23,59]),a=4===(h=o)||6===h||9===h||11===h?30:2===h?(t=>t%4==0&&t%100!=0||t%400==0)(r)?29:28:31;var h;const d=this.validateColumn(t,"day",2,i,n,[r,o,0,0,0],[r,o,a,23,59]),l=this.validateColumn(t,"hour",3,i,n,[r,o,d,0,0],[r,o,d,23,59]);return this.validateColumn(t,"minute",4,i,n,[r,o,d,l,0],[r,o,d,l,59]),t}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=D(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=v(this.min),i=this.datetimeMax=v(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=void 0===i.hour?23:i.hour,e.minute=e.minute||0,i.minute=void 0===i.minute?59:i.minute,e.second=e.second||0,i.second=void 0===i.second?59:i.second,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}validateColumn(t,e,i,n,s,r,a){const h=t.find(t=>t.name===e);if(!h)return 0;const d=r.slice(),l=a.slice(),m=h.options;let c=m.length-1,f=0;for(let o=0;o<m.length;o++){const t=m[o],e=t.value;d[i]=t.value,l[i]=t.value,(t.disabled=e<r[i]||e>a[i]||u(l[0],l[1],l[2],l[3],l[4])<n||u(d[0],d[1],d[2],d[3],d[4])>s)||(c=Math.min(c,o),f=Math.max(f,o))}const p=h.selectedIndex=o(c,h.selectedIndex,f),v=h.options[p];return v?v.value:0}get text(){if(null!=this.value&&0!==this.value.length)return((t,e,i)=>{if(void 0===e)return;const n=[];let s=!1;if(E.forEach((r,o)=>{if(t.indexOf(r.f)>-1){const a="{"+o+"}",h=m(r.f,e[r.k],e,i);s||void 0===h||null==e[r.k]||(s=!0),n.push(a,h||""),t=t.replace(r.f,a)}}),s){for(let e=0;e<n.length;e+=2)t=t.replace(n[e],n[e+1]);return t}})(this.displayFormat||this.pickerFormat||q,this.datetimeValue,this.locale)}hasValue(){return void 0!==this.text}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,text:e,disabled:s,readonly:o,isExpanded:d,el:m,placeholder:u}=this,c=r(this),f=t+"-lbl",p=a(m),v=void 0===e&&null!=u,g=void 0===e?null!=u?u:"":e,y=void 0===e?null!=u?"placeholder":void 0:"text";return p&&(p.id=f),h(!0,m,this.name,this.value,this.disabled),i(n,{onClick:this.onClick,role:"combobox","aria-disabled":s?"true":null,"aria-expanded":""+d,"aria-haspopup":"true","aria-labelledby":f,class:{[c]:!0,"datetime-disabled":s,"datetime-readonly":o,"datetime-placeholder":v,"in-item":l("ion-item",m)}},i("div",{class:"datetime-text",part:y},g),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return s(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}},_=t=>{const e=[];let i,n;for(let s=0;s<t.length;s++){i=t[s],e.push(0);for(const t of i.options)n=t.text.length,n>e[s]&&(e[s]=n)}return 2===e.length?(n=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*n+"px"):3===e.length&&(n=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=17*e[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*n+"px",t[2].align="left"),t},q="MMM D, YYYY";let G=0;R.style={md:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"};export{R as ion_datetime}