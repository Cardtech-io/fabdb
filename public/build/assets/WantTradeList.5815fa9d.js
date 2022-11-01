import{n as r,I as i,C as n,S as o,a as d}from"./app.881f611a.js";import{P as c}from"./Paginator.3a0e1c3a.js";const l={props:["user"],mixins:[i],components:{CardImage:n,Paginator:c,SkuFinish:o},data(){return{cards:{},page:1}},methods:{phrase(){return this.$route.meta.view==="want"?"want":"would like to trade"},search(){d.get("/collection/lists?user="+this.user.slug+"&view="+this.$route.meta.view+"&page="+this.page).then(e=>{this.cards=e.data})},updatePage(e){this.page=e,this.search()}},mounted(){this.search()},metaInfo(){let e=this.user.name+"'s "+this.$route.meta.view+" list for Flesh & Blood TCG";return{title:e,meta:[{vmid:"description",name:"description",content:e},{vmid:"og:type",property:"og:type",content:"article"},{vmid:"og:title",property:"og:title",content:e},{vmid:"og:description",property:"og:description",content:e}]}}};var m=function(){var t=this,s=t._self._c;return t.cards.meta&&t.cards.meta.total?s("div",[s("div",{staticClass:"-mx-2 md:-mx-4 flex flex-wrap"},t._l(t.cards.data,function(a){return s("div",{staticClass:"w-1/3 sm:w-1/4 lg:w-1/6 px-2 md:px-4 text-center pb-4"},[s("card-image",{attrs:{card:a}}),s("sku-finish",{attrs:{sku:a.sku}})],1)}),0),s("paginator",{attrs:{results:t.cards},on:{"page-selected":t.updatePage}})],1):s("div",{staticClass:"bg-semi-black rounded-xl p-4"},[t._v(" "+t._s(t.user.name)+" has not listed any cards they "+t._s(t.phrase())+". ")])},p=[],u=r(l,m,p,!1,null,null,null,null);const v=u.exports;export{v as default};
