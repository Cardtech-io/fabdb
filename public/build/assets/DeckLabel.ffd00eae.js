import{n as r}from"./app.2eb95b36.js";const a={props:{label:{type:String,required:!0}},methods:{labelColours(){switch(this.label){case"janky":return"bg-yellow-500 text-black";case"casual":return"bg-green-300 text-black";case"competitive":return"bg-blue-800 text-white";case"pauper":return"bg-red-700 text-white";case"tournament":return"bg-black text-white";case"meme":return"bg-pink-600 text-white"}},name(){return this.label==="tournament"?"Tournament":this.$settings.game.decks.labels[this.label]}}};var n=function(){var e=this,t=e._self._c;return e.label?t("span",{staticClass:"font-serif uppercase",class:e.labelColours()},[e._v(e._s(e.name()))]):e._e()},s=[],l=r(a,n,s,!1,null,null,null,null);const i=l.exports;export{i as D};
