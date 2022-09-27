import{n as a,I as r}from"./app.2eb95b36.js";import{D as i}from"./DeckLabel.ffd00eae.js";import{F as l}from"./FormatLabel.8b2cb9fd.js";import{H as o}from"./HeroAvatar.906e53fe.js";import{V as c}from"./Viewable.90d64ff7.js";import{D as d}from"./Deck.bb60e637.js";const n={props:{deck:{required:!0,type:d},route:{type:String,default:"decks.view"},theme:{type:String}},mixins:[r,c],components:{HeroAvatar:o,DeckLabel:i,FormatLabel:l},computed:{cards(){return this.deck.cards}},methods:{themeClasses(){return this.theme==="light"?"bg-gray-100 hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600":"bg-semi-black hover:bg-black"}}};var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-2 text-sm"},[e("div",{staticClass:"rounded-lg overflow-hidden"},[e("router-link",{staticClass:"block",class:t.themeClasses(),attrs:{to:{name:t.route,params:{deck:t.deck.slug}}}},[e("div",{staticClass:"relative flex-none"},[e("div",{staticClass:"h-140 md:h-200",style:{background:"radial-gradient(transparent, rgba(0, 0, 0, 0.5)), url("+t.heroProfile(t.deck.hero,250)+") top center",backgroundSize:"cover"}}),e("div",{staticClass:"absolute top-0 w-full p-2"},[e("h3",{staticClass:"text-white font-serif uppercase text-lg md:text-xl overflow-hidden",staticStyle:{"max-height":"30px"}},[t._v(t._s(t.deck.name))]),e("div",{staticClass:"text-xs space-y-1"},[e("div",[e("deck-label",{staticClass:"text-xs px-2 rounded-full",attrs:{label:t.deck.label}})],1)])]),t.deck.notes?e("div",{staticClass:"absolute top-0 right-0 mt-2 mr-2",attrs:{title:"Deck has notes for play."}},[e("svg",{staticClass:"h-8 w-8 sm:h-8 sm:w-8 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})])]):t._e(),e("div",{staticClass:"flex absolute bottom-0 w-full justify-between p-2"},[t.deck.weapons.count()?e("div",{staticClass:"flex items-center bg-nearly-white rounded-lg p-0.5 space-x-1"},t._l(t.deck.weapons.all(),function(s){return e("img",{staticClass:"rounded",attrs:{src:t.squareThumbUrl(s.image,55),width:"40",height:"40"}})}),0):t._e(),e("div",{staticClass:"font-serif text-4xl text-white pr-1"},[t._v(t._s(t.deck.totalCards))])])]),e("div",{staticClass:"p-2 space-y-2"},[e("div",{staticClass:"flex justify-between"},[e("div",[t._v("by "+t._s(t.deck.authorName))]),e("div",[t._v(t._s(t.deck.updatedAt))])])])])],1)])},u=[],h=a(n,m,u,!1,null,null,null,null);const _=h.exports;export{_ as D};
