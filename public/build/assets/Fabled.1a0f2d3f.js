import{n as r,i as o,b as i,C as n,H as l,a as m}from"./app.ff97eda1.js";import{L as c}from"./LazyLoader.0379a251.js";import{P as d}from"./Pricing.1f44500c.js";const p={mixins:[o,i],components:{CardImage:n,HeaderTitle:l,Pricing:d},data(){return{cards:[]}},methods:{},metaInfo(){return{title:"The fabled cards of Flesh & Blood.",meta:[{vmid:"description",name:"description",content:"Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell."},{vmid:"og:type",property:"og:type",content:"article"},{vmid:"og:title",property:"og:title",content:"The fabled cards of Flesh & Blood."},{vmid:"og:description",property:"og:description",content:"Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell."}]}},extends:c((a,e)=>{m.get("/cards/fabled").then(t=>{e(function(){this.cards=t.data})})})};var f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container px-4 sm:mx-auto sm:px-0 text-white"},[t("header-title",{staticClass:"text-center",attrs:{title:"The fabled cards of Flesh & Blood"}}),t("div",{staticClass:"sm:mx-4 mt-4 sm:mt-0"},e._l(e.cards,function(s){return t("div",{staticClass:"w-full mb-8 p-4 sm:pr-0 bg-semi-black rounded-xl sm:flex"},[t("div",{staticClass:"sm:w-1/4"},[t("router-link",{attrs:{to:{name:"cards.view",params:{identifier:s.identifier}}}},[t("card-image",{attrs:{card:s}})],1)],1),t("div",{staticClass:"mt-4 sm:mt-0 sm:w-3/4"},[t("h1",{staticClass:"font-serif uppercase text-4xl sm:text-6xl sm:pl-8"},[e._v(e._s(s.name))]),t("p",{staticClass:"bg-semi-black font-serif text-gray-300 -mx-4 sm:mx-0 italic p-4 sm:px-8 mb-4"},[e._v("'"+e._s(s.flavour))]),t("p",{staticClass:"sm:px-8",domProps:{innerHTML:e._s(e.prettyText(s.text))}}),t("p",{staticClass:"sm:mt-8 sm:mb-4 sm:px-8 pl-4 sm:pl-12 text-gray-400 text-base",domProps:{innerHTML:e._s(e.prettyText(s.comments))}})])])}),0)],1)},x=[],h=r(p,f,x,!1,null,null,null,null);const b=h.exports;export{b as default};