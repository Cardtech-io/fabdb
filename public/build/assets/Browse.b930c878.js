import{n as a,B as i,H as l,o}from"./app.f266d440.js";import{D as c}from"./DeckItem.048309bd.js";import{D as n}from"./DeckSearch.094d1c90.js";import{P as d}from"./Paginator.8cff1ec4.js";import{M as u}from"./Models.cc4dbaf5.js";import{D as m}from"./Deck.08a5e84a.js";import"./DeckLabel.3689f8e3.js";import"./FormatLabel.bf0339e3.js";import"./HeroAvatar.85c3a672.js";import"./Card.f220136b.js";import"./Viewable.04a8e729.js";import"./Cards.c1d8c439.js";const p={props:["results"],computed:{data(){return this.results.links}},methods:{disabled(s){return s?"hidden":"button-secondary"},next(){this.selectPage(this.data.next)},previous(){this.selectPage(this.data.prev)},selectPage(s){s=s.replace("/?cursor=",""),this.$emit("cursor-selected",s)}}};var _=function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"flex text-sm justify-center"},[e("button",{staticClass:"inline-block rounded p-2 mr-1",class:t.disabled(!t.data.prev),attrs:{href:""},on:{click:t.previous}},[t._v("<")]),e("button",{staticClass:"inline-block rounded p-2 ml-1 sm:ml-0",class:t.disabled(!t.data.next),attrs:{href:""},on:{click:t.next}},[t._v(">")])]):t._e()},v=[],h=a(p,_,v,!1,null,null,null,null);const f=h.exports,b={components:{SimplePaginator:f,Breadcrumbs:i,DeckItem:c,DeckSearch:n,HeaderTitle:l,Paginator:d},computed:{decks(){return results.decks}},data(){return{crumbs:[{text:"Home",link:"/"},{text:"Decks"}],results:{}}},metaInfo(){return{title:"Flesh and Blood Deck lists",meta:[{vmid:"description",name:"description",content:"Browse Flesh & Blood deck lists, their cards, and various metrics for each."}]}},methods:{...o("deckSearch",["updateParam"]),refreshResults(s){this.results=s,this.results.data=u.hydrateMany(s.data,m)},updateCursor(s){this.updateParam({key:"cursor",value:s})}}};var k=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Browse decks"}}),e("breadcrumbs",{attrs:{crumbs:t.crumbs}}),e("div",{staticClass:"bg-white dark:bg-gray-800 py-4 border-b-4 border-gray-300 dark:border-gray-600"},[e("div",{staticClass:"container sm:mx-auto md:px-4"},[e("deck-search",{on:{"search-completed":t.refreshResults}})],1)]),e("div",{staticClass:"main-body"},[e("div",{staticClass:"container sm:mx-auto px-4"},[t.results&&t.results.data?e("div",{staticClass:"pb-8"},[e("div",{staticClass:"flow-root py-4"},[e("ul",{staticClass:"flow-root sm:-mx-4"},[t.results.data.length?e("div",{staticClass:"flex flex-wrap"},t._l(t.results.data,function(r){return e("div",{staticClass:"w-full md:w-1/3 lg:w-1/5 md:px-2"},[e("deck-item",{key:r.slug,attrs:{deck:r,theme:"light"}})],1)}),0):e("div",{staticClass:"text-center py-8"},[t._v(" There are no decks that match your search criteria. ")])]),t.results.data.length?e("div",{staticClass:"flow-root py-4"},[e("simple-paginator",{attrs:{results:t.results},on:{"cursor-selected":t.updateCursor}})],1):t._e()]),t._m(0)]):t._e()])])],1)},x=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"md:w-2/3 rounded-lg p-2 bg-blue-200 text-center text-base mx-auto"},[s._v(" Don't see your deck in the list above? Be sure to set your deck's visibility to "),t("span",{staticClass:"font-bold"},[s._v("public")]),s._v(". ")])}],C=a(b,k,x,!1,null,null,null,null);const I=C.exports;export{I as default};
