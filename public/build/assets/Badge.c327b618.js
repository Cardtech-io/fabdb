import{n as t,i as n}from"./app.452767c0.js";const l={mixins:[n],props:{subscriptionLevel:{type:String,required:!0},size:String},computed:{classes:function(){const s={supporter:"bg-blue-400",majestic:"bg-yellow-500",legendary:"bg-black",trial:"bg-gray-400",promo:"bg-orange-600",fabled:"bg-green-400"};let e={};return e[s[this.subscriptionLevel]]=!0,this.size==="small"?(e["px-3"]=!0,e["py-1"]=!0,e["text-xs"]=!0):(e["px-4"]=!0,e["py-2"]=!0),e}}};var i=function(){var e=this,r=e._self._c;return r("span",{staticClass:"inline-block rounded-full text-white uppercase font-serif",class:e.classes},[e._v(e._s(e.ucfirst(e.subscriptionLevel)))])},a=[],o=t(l,i,a,!1,null,null,null,null);const u=o.exports;export{u as B};
