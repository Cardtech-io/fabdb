import{m as c,a as l,_ as n,n as i,i as d,I as o,b as u,B as m,C as p,H as g,c as f}from"./app.00661b81.js";import{A as h}from"./Advertisement.ba79d182.js";import{L as _,C as v}from"./CardLegality.31049608.js";import{L as b,R as x}from"./Rulings.28f6ba5e.js";import{D as y}from"./Discussion.a39e70b6.js";import{L as C}from"./LazyLoader.0379a251.js";import{P as k}from"./Pricing.1e2f4510.js";import{D as w}from"./DeckItem.65b2c238.js";import{M as $}from"./Models.cc4dbaf5.js";import{D as L}from"./Deck.cb58e17f.js";import"./Avatar.826754ef.js";import"./Badge.de1149b0.js";import"./DeckLabel.99c1f2d9.js";import"./FormatLabel.21a46b72.js";import"./HeroAvatar.4542c141.js";import"./Card.f220136b.js";import"./Viewable.d2d05f98.js";import"./Cards.16b95ace.js";const P={extends:b,props:["card","options"],computed:{...c("session",["user"])},mounted(){let s=this.user&&this.user.currency||"USD";l.get("/market/"+this.card.identifier+"?days=30&currency="+s).then(t=>{t=t.data;let e={labels:n.keys(t),datasets:[{label:"Low",backgroundColor:"rgba(66, 153, 225, 0.5)",borderColor:"rgba(66, 153, 225, 1)",borderWidth:1,data:n.values(t).map(r=>r[0])},{label:"Mean",backgroundColor:"rgba(66, 153, 225, 0.5)",borderColor:"rgba(66, 153, 225, 1)",borderWidth:1,data:n.values(t).map(r=>r[1])},{label:"High",backgroundColor:"rgba(66, 153, 225, 0.5)",borderColor:"rgba(66, 153, 225, 1)",borderWidth:1,data:n.values(t).map(r=>r[2])}]};this.renderChart(e,{legend:!1,responsive:!0,maintainAspectRatio:!1,fill:!1})})}},z={props:["card"],components:{CardPriceChart:P}};var O=function(){var t=this,e=t._self._c;return e("div",[e("card-price-chart",{staticStyle:{height:"200px"},attrs:{card:t.card}})],1)},F=[],R=i(z,O,F,!1,null,null,null,null);const I=R.exports,D={props:["to"],computed:{classes(){return this.to?"button-primary":"button-disabled"}}};var H=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"w-1/2 appearance-none block w-full py-2 px-4",class:t.classes,attrs:{to:"/cards/"+t.to,disabled:t.to}},[t._t("default")],2)},M=[],B=i(D,H,M,!1,null,null,null,null);const T=B.exports,j={props:{languages:{required:!0,type:Array}},data(){return{selected:null,isOpen:!1}},methods:{select(s){(!this.selected||s.code!==this.selected.code)&&(this.isOpen=!1,this.selected=s,this.$emit("language-selected",s.code))}},mounted(){this.selected=this.languages.filter(s=>s.code==="en")[0],this.$eventHub.$on("language-selected",s=>{this.isOpen=!1,this.selected=this.languages.filter(t=>t.code===s)[0]})}};var A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative font-serif"},[e("button",{staticClass:"w-full relative flex items-center text-left bg-white border border-gray-200 text-base font-serif rounded-lg px-4 py-1 uppercase hover:border-gray-500",class:{"border-gray-500 z-75":t.isOpen},on:{click:function(r){t.isOpen=!t.isOpen}}},[e("span",{staticClass:"inline-block mr-1 flex-1"},[t._v("Language "),t.selected?e("span",[t._v("("+t._s(t.selected.name)+")")]):t._e()]),e("svg",{staticClass:"inline-block h-5 w-5 fill-current ml-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t.isOpen?e("button",{staticClass:"fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2",attrs:{type:"button"},on:{click:function(r){t.isOpen=!1}}}):t._e(),t.isOpen?e("div",{staticClass:"w-full absolute left-0 rounded-lg bg-white z-100 overflow-hidden mt-1 border border-gray-500"},t._l(t.languages,function(r){return e("button",{staticClass:"w-full flex items-center space-x-2 text-base text-left px-4 py-1 uppercase",class:r.code===t.selected.code?"bg-primary text-white":"hover:bg-primary hover:text-white",on:{click:function(a){return t.select(r)}}},[e("icon",{attrs:{size:5,box:128},domProps:{innerHTML:t._s(r.icon)}}),e("span",[t._v(" "+t._s(r.name)+" ")])],1)}),0):t._e()])},S=[],N=i(j,A,S,!1,null,null,null,null);const q=N.exports,W={props:{card:{required:!0,type:Object}},extends:_,computed:{formats(){return this.$settings.game.decks.formats}},methods:{text(s){return s==="legend"?"now a Living Legend":s}}};var V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg overflow-hidden text-sm text-center text-white"},t._l(Object.keys(t.formats),function(r){return t.card.legality[r]?e("div",{staticClass:"py-1 px-4",class:t.colours[t.card.legality[r]]},[t._v(" This card is "+t._s(t.text(t.card.legality[r]))+" in "+t._s(r)+". ")]):t._e()}),0)},G=[],K=i(W,V,G,!1,null,null,null,null);const U=K.exports,E={props:{card:{type:Object}},components:{DeckItem:w},data(){return{decks:[]}},mounted(){l.get("/decks/latest?per_page=3&card="+this.card.identifier+"&include=weapons").then(s=>{this.decks=$.hydrateMany(s.data.data,L)})}};var J=function(){var t=this,e=t._self._c;return t.decks?e("section",[e("header",{staticClass:"flex items-center py-2 px-4 rounded-lg overflow-hidden bg-black text-white"},[e("h2",{staticClass:"font-serif text-xl uppercase"},[t._v("Recent decks")]),e("router-link",{staticClass:"block flex items-center ml-auto rounded py-1 px-2 text-base button-primary",attrs:{to:{name:"decks.browse",query:"card="+this.card.identifier}}},[t._v(" See more "),e("icon",{staticClass:"inline-block",attrs:{size:5}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])],1)],1),e("div",{staticClass:"bg-gray-200 dark:bg-transparent rounded-b-lg overflow-hidden"},t._l(t.decks,function(r){return e("deck-item",{key:r.slug,attrs:{deck:r,theme:"light"}})}),1)]):t._e()},Q=[],X=i(E,J,Q,!1,null,null,null,null);const Y=X.exports,Z={mixins:[d,o,u],components:{CardLegality:v,Advertisement:h,Breadcrumbs:m,CardImage:p,CardPrice:I,CardNav:T,Discussion:y,HeaderTitle:g,Icon:f,LanguageSelector:q,LegalityBanner:U,Pricing:k,RecentDecks:Y,Rulings:x},computed:{bannedFormats(){return Object.keys(this.card.legality).length>2?"in all formats":"in "+this.ucfirst(this.card.banned[0])+" format"},languages(){let s=this.card.printings.map(t=>t.language);return this.$settings.languages.filter(t=>s.indexOf(t.code)!==-1)},crumbs(){return[{text:"Home",link:"/"},{text:this.$route.meta.parent.name,link:this.$route.meta.parent.path},{text:this.card.name}]},rarity(){return this.$settings.game.rarities[this.card.rarity]},rulings(){return this.card.rulings.map(s=>s.description)}},data(){return{card:null,selected:null,text:"",flavour:"",name:""}},methods:{printingClasses(s){let t={"cold foil":"cold","gold foil":"gold","rainbow foil":"rainbow",regular:"regular"};return this.selected&&this.selected.sku.sku===s.sku.sku?"bg-black":t[s.finish.toLowerCase()]},selectPrinting(s){this.card.image=this.cardImageFromSku(s.sku.sku,450),this.selected=s,this.switchContent(s),this.$eventHub.$emit("language-selected",s.language)},switchContent(s){this.text=s.text,this.flavour=s.flavour,this.name=s.name},findPrintingForLanguage(s){let t=this.card.printings.filter(e=>e.language===s)[0];t&&this.selectPrinting(t)},keywords(){var s=this.card.keywords;for(var t in s)s[t]='<router-link to="/cards/?search='+s[t]+'">'+s[t]+"</router-link>";return this.card.keywords.join(", ")},statToImagePath(s,t){return s==="cost"?"/img/resource.png":s==="resource"?"/img/pitch-"+t+".png":"/img/"+s+".png"}},metaInfo(){let s=this.name+" - "+this.card.printings[0].sku.sku+" - FaB DB";return{title:s,meta:[{vmid:"description",name:"description",content:"View Flesh & Blood card, "+this.card.name+"."},{vmid:"og:type",property:"og:type",content:"article"},{vmid:"og:title",property:"og:title",content:s},{vmid:"og:description",property:"og:description",content:this.card.text},{vmid:"og:image",property:"og:image",content:this.cardImage(this.card.image,!0)},{vmid:"og:image:width",property:"og:image:width",content:"450"},{vmid:"og:image:height",property:"og:image:height",content:"628"}]}},extends:C((s,t)=>{l.get("/cards/"+s.params.identifier).then(e=>{t(function(){this.card=e.data,this.switchContent(this.card),this.selectPrinting(this.card.printings[0])})})})};var tt=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:t.name}}),e("breadcrumbs",{attrs:{crumbs:t.crumbs}}),e("div",{staticClass:"main-body"},[e("div",{staticClass:"container sm:mx-auto pt-0 pb-8"},[e("div",{staticClass:"md:flex md:space-x-8 p-4"},[e("div",{staticClass:"md:w-1/4"},[e("div",{staticClass:"relative"},[e("card-image",{attrs:{card:t.card}}),e("card-legality",{attrs:{card:t.card}})],1),e("div",{staticClass:"flex mt-2 space-x-px"},[e("card-nav",{staticClass:"flex items-center space-x-2 rounded-l-lg",attrs:{to:t.card.prev,text:"Previous"}},[e("icon",{attrs:{size:5}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z","clip-rule":"evenodd"}})]),e("span",[t._v(" Previous ")])],1),e("card-nav",{staticClass:"flex items-center justify-end space-x-2 rounded-r-lg text-right",attrs:{to:t.card.next,text:"Next"}},[e("span",[t._v(" Next ")]),e("icon",{attrs:{size:5}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z","clip-rule":"evenodd"}})])],1)],1),e("h2",{staticClass:"font-serif uppercase text-lg mb-1 mt-4"},[t._v("Printings")]),t._l(t.card.printings,function(r){return e("button",{staticClass:"block w-full py-1 px-2 text-sm text-white mb-1 rounded-sm",class:t.printingClasses(r),attrs:{title:r.finish},on:{click:function(a){return t.selectPrinting(r)}}},[t._v(" "+t._s(r.sku.sku)+" ")])}),e("advertisement",{staticClass:"mt-4",attrs:{width:340,height:340,zone:107318}}),e("ul",{staticClass:"pt-4 text-base"},[t.card.artist?e("li",{staticClass:"flex odd:bg-white dark:odd:bg-gray-700"},[e("div",{staticClass:"w-1/3 p-2 px-4"},[t._v("Artist")]),e("div",{staticClass:"w-2/3 p-2 px-4"},[e("router-link",{staticClass:"link-alternate",attrs:{to:{name:"artists.view",params:{artist:t.card.artist.slug}}}},[t._v(t._s(t.card.artist.name))])],1)]):t._e(),e("li",{staticClass:"flex odd:bg-white dark:odd:bg-gray-700"},[e("div",{staticClass:"w-1/3 p-2 px-4"},[t._v("Rarity")]),e("div",{staticClass:"w-2/3 p-2 px-4"},[e("router-link",{staticClass:"link-alternate",attrs:{to:{name:"cards.browse",query:{rarity:t.card.rarity.toLowerCase()}}}},[t._v(t._s(t.rarity))])],1)]),e("li",{staticClass:"flex odd:bg-white dark:odd:bg-gray-700"},[e("div",{staticClass:"w-1/3 p-2 px-4"},[t._v("Keywords")]),e("div",{staticClass:"w-2/3 p-2 px-4"},t._l(t.card.keywords,function(r,a){return e("span",[e("router-link",{staticClass:"link-alternate",attrs:{to:"/cards/browse?keywords="+r}},[t._v(t._s(r))]),a<t.card.keywords.length-1?e("span",[t._v(", ")]):t._e()],1)}),0)])])],2),e("div",{staticClass:"md:w-1/2 mt-4 md:mt-0"},[e("div",{staticClass:"space-y-4"},[t.text?e("div",{staticClass:"bg-white dark:bg-gray-800 rounded-lg"},[e("div",{staticClass:"px-4 py-px",domProps:{innerHTML:t._s(t.prettyText(t.text))}}),t.flavour?e("div",{staticClass:"italic border-t border-gray-200 dark:border-gray-900 p-4"},[t._v(t._s(t.flavour))]):t._e()]):t._e(),e("div",{staticClass:"inline-block flex rounded-lg overflow-hidden space-x-px"},t._l(t.card.stats,function(r,a){return isNaN(r)?t._e():e("div",{staticClass:"flex justify-center items-center flex-grow bg-white dark:bg-gray-800 space-x-2 py-2"},[e("div",{},[e("img",{staticClass:"h-6",attrs:{src:t.statToImagePath(a,r),alt:t.sentenceCase(a)}})]),e("div",{staticClass:"text-xl"},[t._v(t._s(r))])])}),0),e("legality-banner",{staticClass:"my-4",attrs:{card:t.card}}),e("article",[e("p",{staticClass:"my-4 italic"},[e("strong",[t._v('"'+t._s(t.card.name)+'"')]),t._v(" is a trading card from the "),e("strong",[t._v('"'+t._s(t.setToString(t.setFromIdentifier(t.card.printings[0].sku.sku)))+'"')]),t._v(" set of the trading card game, "),e("strong",[t._v("Flesh & Blood.")])])])],1),t.rulings.length?e("rulings",{staticClass:"px-4 sm:px-0",attrs:{rulings:t.rulings}}):t._e(),e("hr",{staticClass:"text-gray-500 mt-4"}),e("discussion",{staticClass:"md:block",attrs:{type:"card",id:t.card.identifier}})],1),e("div",{staticClass:"md:w-1/4 mt-4 md:mt-0"},[e("tcg-player",{attrs:{"buy-link":t.card.buyLink}}),e("recent-decks",{staticClass:"mt-4",attrs:{card:t.card}})],1)]),e("hr",{staticClass:"text-gray-500 mt-4"}),e("discussion",{staticClass:"mx-4 md:hidden",attrs:{type:"card",id:t.card.identifier}})],1)])],1)},et=[],st=i(Z,tt,et,!1,null,null,null,null);const yt=st.exports;export{yt as default};
