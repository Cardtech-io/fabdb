import{n as s,C as r,c as i,m as n}from"./app.881f611a.js";import{C as l}from"./CardLegality.ec9d95e8.js";const c={props:{rarity:{required:!0,type:String}},methods:{classes(){return"text-"+this.$settings.game.rarities[this.rarity].toLowerCase().replace(" ","")+" "},text(){return this.$settings.game.rarities[this.rarity]}}};var o=function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-center",class:t.classes()},[t._v(" "+t._s(t.text())+" ")])},d=[],m=s(c,o,d,!1,null,null,null,null);const v=m.exports,u={components:{CardImage:r,CardLegality:l,Icon:i,RarityText:v},props:{card:Object,path:String},data(){return{viewDetails:!1}},computed:{...n("session",["user"])},methods:{go(){this.path&&this.$router.push({name:"cards.view",params:{identifier:this.card.identifier}})},toggleDetails(){this.viewDetails=!this.viewDetails},totalOwned(a){return a.reduce((t,e)=>t+e.total,0)},viewUrl:function(){return this.path+"/"+this.card.identifier}}};var _=function(){var t=this,e=t._self._c;return e("li",{on:{mouseenter:t.toggleDetails,mouseleave:t.toggleDetails}},[e("div",{staticClass:"relative overflow-hidden rounded-card"},[t.path?e("router-link",{attrs:{to:{name:"cards.view",params:{identifier:t.card.identifier}}}},[e("card-image",{attrs:{card:t.card,width:350}})],1):e("card-image",{attrs:{card:t.card,width:300}}),t.card.legality?e("card-legality",{attrs:{card:t.card}}):t._e(),e("transition",{attrs:{name:"card-details","enter-active-class":"transition-all duration-150 ease-out-quad","leave-active-class":"transition-all duration-100 ease-in-quad"}},[t.viewDetails?e("div",{staticClass:"hidden sm:block bg-nearly-black absolute bottom-0 h-card-drawer z-100 w-full"},[e("div",{staticClass:"p-2 text-gray-400 text-sm h-full",class:{"cursor-pointer":!!t.path},on:{click:t.go}},[e("header",{staticClass:"mb-8"},[e("div",{staticClass:"font-serif uppercase text-center text-sm overflow-hidden -mb-1 text-gray-300"},[t._v(t._s(t.card.name))]),e("div",{staticClass:"font-serif uppercase text-gray-500 text-center"},[t._v(t._s(t.card.printings[0].sku.sku))])]),e("footer",{staticClass:"bottom-0 flex items-center text-sm"},[e("div",{staticClass:"flex pl-2 w-1/4",attrs:{title:"Printings available"}},[e("icon",{staticClass:"mr-2",attrs:{size:5}},[e("path",{attrs:{d:"M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"}})]),t._v(" "+t._s(t.card.printings.length)+" ")],1),e("rarity-text",{staticClass:"block bg-black w-1/2 text-xs text-center",attrs:{rarity:t.card.rarity}}),t.user?e("div",{staticClass:"flex pr-2 w-1/4",attrs:{title:"Cards in collection"}},[e("div",{staticClass:"ml-2"},[t._v(t._s(t.card.ownedTotal))]),e("icon",{staticClass:"inline-block ml-2",attrs:{size:5}},[e("path",{attrs:{d:"M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"}})])],1):t._e()],1)])]):t._e()])],1)])},h=[],p=s(u,_,h,!1,null,null,null,null);const C=p.exports;export{C};
