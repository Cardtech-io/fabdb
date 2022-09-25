import{I as n,f as c,e as p,l as m,m as d,a as i,n as u}from"./app.00661b81.js";import{A as f}from"./AddDeck.362c22ea.js";import{D as h}from"./Deck.cb58e17f.js";import{D as v}from"./DeckItem.65b2c238.js";import{D as b}from"./DeckLabel.99c1f2d9.js";import{D as g}from"./DeckSearch.f4583b68.js";import{L as _}from"./LazyLoader.0379a251.js";import{M as x}from"./Models.cc4dbaf5.js";import{P as C}from"./Paginator.487a67d2.js";import{S as y}from"./Sorter.60aa59f7.js";import{P as k}from"./PlayDeck.48a22fa8.js";import"./Cards.16b95ace.js";import"./Card.f220136b.js";import"./FormatLabel.21a46b72.js";import"./HeroAvatar.4542c141.js";import"./Viewable.d2d05f98.js";const w={mixins:[n],components:{AddDeck:f,Collapser:c,Crumbs:p,DeckItem:v,DeckLabel:b,DeckSearch:g,Paginator:C,PlayDeck:k,Sorter:y,Submit:m},computed:{...d("session",["user"])},data(){return{copyDisabled:!1,crumbs:[{text:"Home",link:{name:"home"}},{text:"Deck builder"}],decks:[],response:{},params:{class:"",format:"",page:1}}},methods:{copyDeck(a){this.copyDisabled||(this.copyDisabled=!0,setTimeout(()=>{this.copyDisabled=!1},3e3),i.post("/decks/copy",{deck:a.slug}).then(t=>{this.newSearch()}))},removeDeck(a,t){window.confirm("Are you sure you want to remove this deck? This action is not reversible.")&&i.delete("/decks/"+a.slug).then(s=>{this.decks.splice(t,1)})},newSearch(){let a=this.params;i.get("/decks/mine",{params:a}).then(t=>{this.refreshResults(t)})},refreshResults(a){this.response=a.data,this.decks=x.hydrateMany(a.data.data,h)},setPage(a){this.params.page=a,this.newSearch()}},extends:_((a,t)=>{i.get("/decks/mine").then(e=>{t(function(){this.refreshResults(e)})})}),metaInfo(){return{title:"Flesh & Blood Deck builder",description:"Create and customise tournament-winning decks for Flesh & Blood TCG."}}};var D=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Deck builder"}}),e("div",{staticClass:"container mx-auto sm:px-4"},[e("div",{staticClass:"crumbs flex items-center px-4"},[e("crumbs",{staticClass:"py-4 font-serif uppercase",attrs:{crumbs:t.crumbs}}),e("add-deck",{staticClass:"flex-initial ml-auto",attrs:{name:"New deck"}},[e("span",{staticClass:"hidden sm:block"},[t._v("New deck")]),e("span",{staticClass:"block sm:hidden"},[t._v("+")])])],1)]),e("div",{staticClass:"container sm:px-4 sm:mx-auto"},[e("form",{staticClass:"main-body p-4 block sm:flex w-full",on:{submit:function(s){return s.preventDefault(),t.newSearch.apply(null,arguments)}}},[e("div",{staticClass:"w-full mb-1 sm:mb-0 sm:w-1/3 sm:pr-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.params.class,expression:"params.class"}],staticClass:"input focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg",on:{change:function(s){var l=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});t.$set(t.params,"class",s.target.multiple?l:l[0])}}},[e("option",{attrs:{value:""}},[t._v("Select class")]),t._l(t.$settings.game.classes,function(s,l){return e("option",{domProps:{value:l}},[t._v(t._s(s))])})],2)]),e("div",{staticClass:"w-full mb-1 sm:mb-0 sm:w-1/3 sm:pr-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.params.format,expression:"params.format"}],staticClass:"input focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg",on:{change:function(s){var l=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});t.$set(t.params,"format",s.target.multiple?l:l[0])}}},[e("option",{attrs:{value:""}},[t._v("Format")]),e("option",{attrs:{value:"blitz"}},[t._v("Blitz")]),e("option",{attrs:{value:"constructed"}},[t._v("Constructed")]),e("option",{attrs:{value:"open"}},[t._v("Open")])])]),e("div",{staticClass:"sm:w-1/3"},[e("submit",{staticClass:"w-full",attrs:{text:"Search"}})],1)]),e("div",{staticClass:"main-body"},[t.user?e("div",[e("table",{staticClass:"w-full table-auto border-collapse bg-white dark:bg-gray-800"},[t._m(0),e("tbody",t._l(t.decks,function(s,l){return e("tr",{staticClass:"odd:bg-gray-100 dark:odd:bg-gray-700 group hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white dark:hover:text-gray-200"},[e("td",[e("router-link",{staticClass:"block flex items-center",attrs:{to:{name:"decks.build",params:{deck:s.slug}}}},[s.hero?e("img",{attrs:{src:t.squareThumbUrl(s.hero.image,43)}}):t._e(),e("span",{staticClass:"block flex-grow px-4 py-2"},[t._v(t._s(s.name))])])],1),e("td",{staticClass:"p-2 px-4 hidden lg:table-cell"},[s.label?e("deck-label",{staticClass:"text-xs rounded-full p-1 px-2",attrs:{label:s.label}}):t._e()],1),e("td",{staticClass:"hidden lg:table-cell"},[s.parent?e("router-link",{staticClass:"block w-full p-2 px-4",attrs:{to:{name:"decks.build",params:{deck:s.parent.slug}}}},[t._v(t._s(s.parent.name))]):t._e()],1),e("td",{staticClass:"p-2 px-4 hidden sm:table-cell"},[t._v(t._s(s.hero?t.$settings.game.classes[s.hero.class]:""))]),e("td",{staticClass:"p-2 px-4 hidden md:table-cell"},[t._v(t._s(s.totalCards))]),e("td",{staticClass:"p-2 px-4 hidden sm:table-cell"},[t._v(t._s(s.updatedAt))]),e("td",{staticClass:"p-2 px-4"},[e("div",{staticClass:"flex space-x-4 justify-center items-center"},[e("play-deck",{attrs:{deck:s}}),e("button",{staticClass:"hover:text-gray-400 dark:hover:text-white",on:{click:function(r){return t.copyDeck(s)}}},[e("icon",{attrs:{size:6}},[e("path",{attrs:{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}}),e("path",{attrs:{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"}})])],1),e("button",{staticClass:"hover:text-gray-400 dark:hover:text-white",on:{click:function(r){return t.removeDeck(s,l)}}},[e("icon",{attrs:{size:6}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})])],1)],1)])])}),0)]),e("paginator",{staticClass:"py-4",attrs:{results:t.response},on:{"page-selected":t.setPage}})],1):e("p",[t._v("The deck builder is available to registered users only, so if you do not yet have an account, you must "),e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("register or login")]),t._v(".")],1)])])],1)},z=[function(){var a=this,t=a._self._c;return t("thead",[t("tr",{staticClass:"text-base"},[t("th",{staticClass:"p-2 px-4 font-serif uppercase text-left"},[a._v("Deck")]),t("th",{staticClass:"p-2 px-4 font-serif uppercase text-left hidden lg:table-cell"},[a._v("Label")]),t("th",{staticClass:"p-2 px-4 font-serif uppercase text-left hidden lg:table-cell"},[a._v("Parent")]),t("th",{staticClass:"p-2 px-4 font-serif uppercase text-left hidden sm:table-cell"},[a._v("Class")]),t("th",{staticClass:"p-2 px-4 font-serif uppercase text-left hidden md:table-cell"},[a._v("Cards")]),t("th",{staticClass:"p-2 px-4 font-serif uppercase text-left hidden sm:table-cell"},[a._v("Last updated")]),t("th",{staticClass:"p-2 px-4 font-serif uppercase"},[t("span",{staticClass:"hidden lg:block"},[a._v("Actions")])])])])}],S=u(w,D,z,!1,null,null,null,null);const O=S.exports;export{O as default};