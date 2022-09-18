import{i as m,C as o,r as n,m as d,h,n as i,o as c,I as u,b as p,a as f,s as g}from"./app.452767c0.js";import{A as _}from"./AddDeck.c7e9996c.js";import{C as v}from"./Cards.23f7349c.js";import{R as b,F as k,G as w}from"./Fullscreen.8347eda3.js";import{V as x}from"./Viewable.9eddfa5c.js";import{L as C}from"./LazyLoader.0379a251.js";const y={props:["cards","groupId","width"],mixins:[m,b,x],components:{CardImage:o},computed:{...n("draft",["fullScreen","grouping","zoom"]),...d("session",["user"]),cardClasses(){return[this.width||"w-1/2 sm:w-1/"+(this.cardWidth-2)+" sm:w-1/"+(this.cardWidth-1)+"  md:w-1/"+this.cardWidth,"rounded-card"]},cardWidth(){return[3,4,5,6,7,8][this.zoom]},groupedCards(){if(this.grouping==="class"){let s=this.$settings.game.classes;return this.cards.filter(t=>h.intersection(t.keywords,Object.keys(s)).length).group(t=>Object.keys(s).indexOf(t.keywords[0])!==-1?t.keywords[0]:t.keywords[1])}if(this.grouping==="talent"){let s=this.$settings.game.talents;return this.cards.filter(t=>Object.keys(s).indexOf(t.keywords[0])!==-1).group(t=>t.keywords[0])}return this.cards.group("name")},offset(){return this.user.view==="borderless"?10:12},pad(){return this.user.view==="borderless"?17:18},rounded:function(){let s=["rounded-xl","rounded-lg","rounded-lg","rounded"],t=["rounded-lg","rounded-lg","rounded","rounded"];return this.fullScreen?s[this.zoom]:t[this.zoom]}},methods:{margin:function(s){let t=s-1;if(t>0)return"margin-bottom: "+t*this.pad+"%"},styles:function(s){let t=[],e=s;return t.push("z-index: "+e),t.push("position: absolute"),t.push("top: "+s*this.offset+"%"),t.push("left: 0"),t.join("; ")}},watch:{cards(){this.redraw(this.groupId)},fullScreen(){this.redraw(this.groupId)},zoom(){this.redraw(this.groupId)},sections:{handler(){this.redraw(this.groupId)},deep:!0}}};var $=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"pb-2 mx-2",attrs:{"destroy-delay":"2000",containerId:t.groupId,"transition-duration":"0.3s"}},t._l(t.groupedCards,function(r){return e("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],class:t.cardClasses},[e("div",{staticClass:"relative my-4 mx-2"},[e("img",{staticClass:"block w-full invisible",style:t.margin(r.length),attrs:{src:r[0].image}}),t._l(r,function(a,l){return e("div",{staticClass:"relative rounded-card w-full",style:t.styles(l)},[e("card-image",{staticClass:"w-full",attrs:{card:a,width:350}})],1)})],2)])}),0)},S=[],F=i(y,$,S,!1,null,null,null,null);const z=F.exports,O={components:{GroupedCards:z},props:["packs"],computed:{...n("draft",["filters"]),cards(){let s=new v(this.packs.flat());return this.filters.length&&(s=s.applyFilters(this.filters)),s.sort()}}};var L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-8 pt-4 w-full"},[e("grouped-cards",{attrs:{cards:t.cards,"group-id":"cards"}})],1)},I=[],R=i(O,L,I,!1,null,null,null,null);const P=R.exports,A={data(){return{isOpen:!1,availableFilters:{actions:"Actions",attacks:"Attacks",attackReactions:"Attack reactions",defenseReactions:"Defense reactions",instants:"Instants"}}},computed:{...n("draft",["filters"]),filtersEnabled(){return this.filters.length}},methods:{...c("draft",["clearFilters","toggleFilter"]),hasFilter(s){return this.filters.indexOf(s)>-1},select(s){this.toggleFilter({filter:s})}}};var G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center rounded-lg",class:{"bg-red-600":t.filtersEnabled}},[e("div",{staticClass:"relative text-sm xl:text-base"},[e("button",{staticClass:"relative flex items-center overflow-hidden rounded-lg hover:bg-white dark:hover:bg-gray-600 leading-none px-2",class:{"bg-white dark:bg-gray-600":t.isOpen,"bg-gray-200 dark:bg-black":!t.isOpen,"z-75":t.isOpen},staticStyle:{width:"230px"},on:{click:function(r){t.isOpen=!t.isOpen}}},[e("span",{staticClass:"py-2"},[t._v("Filters")]),e("svg",{staticClass:"h-6 fill-current ml-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t.isOpen?e("button",{staticClass:"fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default",attrs:{type:"button"},on:{click:function(r){t.isOpen=!1}}}):t._e(),t.isOpen?e("div",{staticClass:"w-full absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden mt-2"},t._l(t.availableFilters,function(r,a){return e("button",{staticClass:"group w-full text-base text-left p-2 hover:bg-blue-400 hover:text-white flex items-center",on:{click:function(l){return t.select(a)}}},[e("span",{staticClass:"inline-block h-4 w-4 mr-2"},[t.hasFilter(a)?e("svg",{staticClass:"fill-current text-green-500 group-hover:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]):t._e()]),e("span",{staticClass:"flex-1"},[t._v(" "+t._s(r)+" ")])])}),0):t._e()]),t.filtersEnabled?e("button",{staticClass:"flex items-center text-white w-full h-full cursor-pointer",on:{click:t.clearFilters}},[e("div",{staticClass:"flex items-center w-full h-full p-2"},[e("svg",{staticClass:"block fill-current h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])])]):t._e()])},M=[],j=i(A,G,M,!1,null,null,null,null);const N=j.exports;const W={components:{CardImage:o},mixins:[u,p],props:{index:{type:Number,required:!0},pack:{type:Array,required:!0}},computed:{...n("draft",["practise"])},methods:{...c("draft",["crackPack"]),openPack(s){f.post("practise/open-pack",{practise:this.practise.slug}).then(t=>{this.crackPack({cards:t.data,pack:s}),this.$emit("pack-opened")})},styles(s){let t={};return s>0&&(t.marginTop=s*36+"px"),t},toggle(s){this.viewing!==s?this.viewing=s:this.viewing=null}}};var B=function(){var t=this,e=t._self._c;return e("div",[t.pack.length?e("div",{staticClass:"relative p-4",style:{height:t.pack.length*36+300+"px"}},t._l(t.pack,function(r,a){return e("div",{staticClass:"absolute overflow-hidden cursor-pointer mx-auto sm:mx-0",style:t.styles(a),on:{click:function(l){return t.toggle(r)}}},[e("card-image",{staticStyle:{"max-width":"350px"},attrs:{card:r,width:350}})],1)}),0):e("div",{staticClass:"inline-block booster hover:bg-white dark:hover:bg-gray-700 p-4 rounded-lg"},[e("button",{staticClass:"block link-alternate",on:{click:function(r){return t.openPack(t.index)}}},[e("img",{attrs:{src:t.imageUrl("/boosters/"+t.kebabCase(t.practise.set.name)+".png",180),alt:"Open pack",title:"Open pack"}})])])])},D=[],E=i(W,B,D,!1,null,"55b47edd",null,null);const T=E.exports,q={components:{AddDeck:_,Cards:P,FilterSelector:N,Fullscreen:k,GroupingSelector:w,Pack:T},mixins:[u,p],data(){return{mode:"packs",modes:{packs:"Packs",cards:"Cards"},opened:0}},computed:{...n("draft",["fullScreen","format","grouping","practise"]),...d("session",["majestic","user"]),craftable(){return this.majestic&&(this.format==="team-sealed"||this.practise.userSlug===this.user.slug)},crumbs(){return[{text:"Home",link:"/"},{text:"Limited practise",link:"/practise"},{text:this.practise.format==="sealed"?"Sealed deck run":"Team sealed run"}]},containers(){if(!this.fullScreen)return"container lg:mx-auto"},fullScreenClasses(){if(this.fullScreen)return"fixed top-0 bottom-0 left-0 right-0 z-75"}},methods:{...c("draft",["selectSet","reset","setPractise"]),...g("draft",["setGrouping","toggleFullScreen"]),classes(s){return{"button-disabled":this.mode===s,"button-secondary":this.mode!==s}},setMode(s){this.mode=s},increment(){this.opened++},updateGrouping(s){this.setGrouping({grouping:s})}},extends:C((s,t)=>{f.get("/practise/"+s.params.practise).then(e=>{t(function(){this.setPractise({practise:e.data}),this.opened=this.practise.packs.filter(r=>r.length).length})})})};var V=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Limited practise"}}),e("breadcrumbs",{attrs:{crumbs:t.crumbs}}),e("div",{class:t.fullScreenClasses},[e("div",{staticClass:"bg-white dark:bg-gray-800 border-b-4 border-gray-300 dark:border-gray-600"},[e("div",{staticClass:"flex p-4 w-full items-center",class:t.containers},[e("div",{staticClass:"flex rounded-lg overflow-hidden text-sm xl:text-base mr-2"},[e("button",{staticClass:"flex-grow block px-4 py-2",class:t.classes("packs"),attrs:{type:"button"},on:{click:function(r){return t.setMode("packs")}}},[t._v("Packs")]),e("button",{staticClass:"flex-grow block px-4 py-2",class:t.classes("cards"),attrs:{type:"button",disabled:!t.opened},on:{click:function(r){return t.setMode("cards")}}},[t._v("Cards")])]),e("add-deck",{attrs:{name:"Sealed practise",params:{practise:t.practise.slug},enabled:t.craftable}},[t._v(" Craft deck ")]),t.mode==="cards"?e("filter-selector",{staticClass:"mx-2"}):t._e(),t.mode==="cards"?e("grouping-selector",{staticClass:"hidden xl:block",attrs:{grouping:t.grouping,options:{none:"None",class:"Class",talent:"Talent"}},on:{selected:t.updateGrouping}}):t._e(),t.mode==="cards"||t.fullScreen?e("fullscreen",{staticClass:"ml-auto",attrs:{"full-screen":t.fullScreen,toggle:t.toggleFullScreen}}):t._e()],1)]),e("div",{staticClass:"main-body h-full pt-4 pb-16 px-4"},[e("div",{staticClass:"flex flex-wrap justify-center h-full",class:t.containers},[t._l(t.practise.packs,function(r,a){return t.mode==="packs"?e("div",{staticClass:"w-1/6"},[e("pack",{staticClass:"w-full",attrs:{pack:r,index:a},on:{"pack-opened":t.increment}})],1):t._e()}),t.mode==="cards"?e("div",{staticClass:"h-full w-full overflow-y-auto"},[e("cards",{attrs:{packs:t.practise.packs}})],1):t._e()],2)])])],1)},H=[],U=i(q,V,H,!1,null,null,null,null);const tt=U.exports;export{tt as default};
