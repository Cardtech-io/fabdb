import{n as s,a as n}from"./app.2eb95b36.js";import{D as i}from"./DeckItem.b7e59ad2.js";import{M as a}from"./Models.cc4dbaf5.js";import{D as c}from"./Deck.bb60e637.js";import"./DeckLabel.ffd00eae.js";import"./FormatLabel.8b2cb9fd.js";import"./HeroAvatar.906e53fe.js";import"./Card.f220136b.js";import"./Viewable.90d64ff7.js";import"./Cards.06e8a0c1.js";const m={components:{DeckItem:i},props:["user"],data(){return{decks:{}}},metaInfo(){let t=this.user.name+"'s decks for Flesh & Blood TCG";return{title:t,meta:[{vmid:"description",name:"description",content:t},{vmid:"og:type",property:"og:type",content:"article"},{vmid:"og:title",property:"og:title",content:t},{vmid:"og:description",property:"og:description",content:t}]}},mounted(){n.get("/decks/latest?user="+this.user.slug).then(t=>{this.decks=a.hydrateMany(t.data,c)})}};var p=function(){var e=this,r=e._self._c;return r("div",[e.decks?r("div",{staticClass:"flex flex-wrap"},e._l(e.decks,function(o){return r("deck-item",{key:o.slug,attrs:{deck:o,theme:"dark"}})}),1):e._e()])},d=[],l=s(m,p,d,!1,null,null,null,null);const C=l.exports;export{C as default};
