import{n as l}from"./app.881f611a.js";const r={data:()=>({colours:{legal:"",banned:"bg-red-600",suspended:"bg-orange-600",legend:"bg-purple-600"},texts:{banned:"Banned",suspended:"Suspended",legend:"Living Legend"}})},a=null,o=null;var d=l(r,a,o,!1,null,null,null,null);const i=d.exports,c={props:{card:{required:!0}},extends:i,methods:{colour(){return this.colours[this.highestLevel()]},highestLevel(){let n=0,e=["","suspended","legend","banned"],t=Object.values(this.card.legality);for(let s in t)e.indexOf(t[s])>n&&(n=e.indexOf(t[s]));return e[n]},text(){return this.texts[this.highestLevel()]}}};var u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"absolute w-full text-white text-center py-2 z-50 -mt-2",class:e.colour(),staticStyle:{bottom:"40%"}},[e._v(" "+e._s(e.text())+" ")])},_=[],f=l(c,u,_,!1,null,null,null,null);const p=f.exports;export{p as C,i as L};
