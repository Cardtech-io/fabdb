import{n as r,j as o,B as c,H as l}from"./app.a14e6b93.js";import{D as a}from"./Deck.61e34c43.js";import{L as i}from"./LazyLoader.0379a251.js";import{M as d}from"./Models.cc4dbaf5.js";import"./Cards.18bb5576.js";import"./Card.f220136b.js";const m={props:{deck:{required:!0,type:a}},mixins:[o]};var u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 bg-semi-black bg-semi-black p-4 sm:p-2 mb-4 rounded-xl"},[e("card-image",{attrs:{card:t.deck.hero}}),e("div",{staticClass:"flex justify-center mt-2 text-base"},[e("a",{staticClass:"block button-primary w-1/2 text-center px-3 py-2 rounded-l mr-1",attrs:{href:t.buyLink(t.deck),target:"_blank"}},[t._v("Buy")]),e("router-link",{staticClass:"block button-secondary w-1/2 text-center px-3 py-2 rounded-r",attrs:{to:{name:"decks.view",params:{deck:t.deck.slug}}}},[t._v("View")])],1)],1)},f=[],p=r(m,u,f,!1,null,null,null,null);const _=p.exports,k={components:{Breadcrumbs:c,HeaderTitle:l,StarterDeck:_},data(){return{crumbs:[{text:"Home",link:"/"},{text:"Starter decks"}],decks:[]}},extends:i((s,t)=>{axios.get("/decks/starters").then(e=>{t(function(){this.decks=d.hydrateMany(e.data,a)})})}),metaInfo(){return{title:"Flesh and Blood TCG Starter Decks",meta:[{vmid:"description",name:"description",content:"View and purchase Flesh & Blood TCG starter decks, from cards on TCG Player."}]}}};var v=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Starter decks"}}),e("div",{staticClass:"container mx-auto mt-8 sm:mt-0"},[t._m(0),t.decks.length?e("div",{staticClass:"flex flex-wrap mt-8 mx-2"},t._l(t.decks,function(n){return e("div",{key:t.decks.slug,staticClass:"w-full sm:w-1/2 md:w-1/4"},[e("starter-deck",{attrs:{deck:n}})],1)}),0):t._e()])],1)},x=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"px-4"},[t("p",{staticClass:"text-gray-200 bg-semi-black p-4 rounded-lg leading-8"},[t("span",{staticClass:"block text-5xl font-serif uppercase float-left relative leading-3",staticStyle:{top:"15px"}},[s._v("L")]),s._v("ooking for the Official starter decks? Want to import them into TTS, or simply want to create your own deck from them? Look no further! This page lists all of the official Flesh & Blood starter decks, as well as providing all the usual features you've come to expect from FaB DB! ")])])}],h=r(k,v,x,!1,null,null,null,null);const S=h.exports;export{S as default};