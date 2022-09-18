import{n as a,e as r,a as o}from"./app.452767c0.js";import{C as n}from"./CardItem.00e83a10.js";import{L as l}from"./LazyLoader.0379a251.js";import"./CardLegality.a0c6dfc0.js";const m={components:{CardItem:n,Crumbs:r},data:()=>({artist:null}),computed:{crumbs(){return[{text:"Home",link:"/"},{text:this.artist.name}]}},metaInfo(){let s="The artwork of "+this.artist.name,t="View Flesh & Blood card artwork designed by "+this.artist.name+" for Flesh & Blood TCG.";return{title:s,meta:[{vmid:"description",name:"description",content:t},{vmid:"og:type",property:"og:type",content:"article"},{vmid:"og:title",property:"og:title",content:s},{vmid:"og:description",property:"og:description",content:t},{vmid:"og:image",property:"og:image",content:this.artist.image},{vmid:"og:image:width",property:"og:image:width",content:"300"},{vmid:"og:image:height",property:"og:image:height",content:"300"}]}},extends:l((s,t)=>{o.get("/artists/"+s.params.artist).then(e=>{t(function(){this.artist=e.data})})})};var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-full pb-8"},[e("div",{staticClass:"container sm:mx-auto hidden sm:block"},[e("div",{staticClass:"p-4 md:py-8"},[e("h1",{staticClass:"font-serif text-white text-4xl uppercase"},[t._v("The artwork of "+t._s(t.artist.name))])])]),e("div",{staticClass:"flex-grow container mx-auto px-4 sm:flex sm:items-stretch mt-4 sm:mt-0"},[e("div",{staticClass:"mr-4 rounded-xl bg-nearly-black overflow-hidden w-full sm:w-300"},[e("img",{staticClass:"w-full",attrs:{src:t.artist.image,alt:""}}),e("p",{staticClass:"text-white p-4"},[t._v(" "+t._s(t.artist.blurb)+" ")])]),e("div",{staticClass:"sm:w-3/4 sm:flex-grow rounded-xl overflow-hidden mt-4 sm:-mt-2"},[e("ul",{staticClass:"flow-root -mx-2"},t._l(t.artist.cards,function(i){return e("card-item",{key:i.identifier,staticClass:"float-left p-2 w-1/2 md:w-1/4 xl:w-1/5 mb-4",attrs:{card:i,path:"/cards"}})}),1)])])])},d=[],p=a(m,c,d,!1,null,null,null,null);const v=p.exports;export{v as default};
