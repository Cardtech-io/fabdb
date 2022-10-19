import{n as r}from"./app.d4472289.js";const n={props:{label:{type:String,required:!0}},methods:{labelColours(){switch(this.label){case"janky":return"bg-yellow-500 text-black";case"casual":return"bg-green-300 text-black";case"competitive":return"bg-blue-800 text-white";case"pauper":return"bg-red-700 text-white";case"tournament":return"bg-black text-white";case"meme":return"bg-pink-600 text-white"}},name(){return this.label==="tournament"?"Tournament":this.$settings.game.decks.labels[this.label]}}};var a=function(){var e=this,t=e._self._c;return e.label?t("span",{staticClass:"font-serif uppercase",class:e.labelColours()},[e._v(e._s(e.name()))]):e._e()},l=[],o=r(n,a,l,!1,null,null,null,null);const b=o.exports,c={props:{format:{type:String,required:!0}},methods:{formatColours(){switch(this.format){case"blitz":return"bg-orange-500 text-white";case"commoner":return"bg-green-600 text-white";case"constructed":return"bg-blue-500 text-white";case"open":return"bg-gray-500 text-white"}},name(){return this.$settings.game.decks.formats[this.format]}}};var u=function(){var e=this,t=e._self._c;return e.format?t("span",{staticClass:"font-serif uppercase",class:e.formatColours()},[e._v(e._s(e.name()))]):e._e()},i=[],m=r(c,u,i,!1,null,null,null,null);const f=m.exports;export{b as D,f as F};
