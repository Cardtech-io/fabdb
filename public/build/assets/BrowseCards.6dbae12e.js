import{n as a,D as n,f as l,H as o}from"./app.452767c0.js";import{C as d}from"./CardItem.00e83a10.js";import{C as c}from"./CardSearch.63deb25d.js";import{P as u}from"./Paginator.911a1dd5.js";import{Q as p}from"./AdvancedCardSearch.67c91d83.js";import"./CardLegality.a0c6dfc0.js";const m="/build/assets/card-loading.53edac77.png",f={mixins:[n]};var h=function(){var e=this,t=e._self._c;return t("img",{ref:"image",staticClass:"w-full rounded-card animate-pulse",attrs:{src:m,alt:"Loader image",title:"Loader image",width:e.requiredWidth,height:e.requiredHeight}})},g=[],_=a(f,h,g,!1,null,null,null,null);const v=_.exports,b={data(){return{isOpen:!1,options:{identifier:{name:"Alphabetical",icon:'<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>'},sku:{name:"Card number",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>'}}}},methods:{select(r){this.$emit("order-changed",r),this.isOpen=!1}}};var w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative font-serif"},[t("button",{staticClass:"relative flex items-center text-left text-base font-serif rounded-lg p-1 uppercase hover:bg-white dark:hover:bg-gray-600",class:{"bg-white dark:bg-gray-600":e.isOpen,"bg-gray-200 dark:bg-gray-800":!e.isOpen,"z-75":e.isOpen},on:{click:function(s){e.isOpen=!e.isOpen}}},[t("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"}})])]),e.isOpen?t("button",{staticClass:"fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2",attrs:{type:"button"},on:{click:function(s){e.isOpen=!1}}}):e._e(),e.isOpen?t("div",{staticClass:"w-full absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden mt-2 shadow-lg",staticStyle:{width:"150px"}},e._l(e.options,function(s,i){return t("button",{staticClass:"flex items-center space-x-2 w-full text-base text-left px-4 py-1 uppercase",class:i===s?"bg-blue-400 text-white":"hover:bg-blue-400 hover:text-white",on:{click:function(z){return e.select(i)}}},[t("span",[e._v(e._s(s.name))])])}),0):e._e()])},C=[],x=a(b,w,C,!1,null,null,null,null);const y=x.exports,k={components:{CardItem:d,CardLoader:v,CardSearch:c,Collapser:l,HeaderTitle:o,Ordering:y,Paginator:u},mixins:[p],computed:{setDescription:function(){return"Browse the entire Flesh & Blood card catalogue at FaB DB."}},data(){return{crumbs:[{text:"Home",link:"/"},{text:"Cards"}],firstLoad:!0,order:"sku",page:Number(this.$route.query.page)||1,per_page:30,results:{},set:this.$route.query.set||"",view:"gallery"}},metaInfo(){return{title:"Flesh and Blood TCG Card List",meta:[{vmid:"description",name:"description",content:this.setDescription}]}},methods:{refreshResults(r){this.results=r,this.firstLoad=!1},updateOrder(r){this.updateQuery({page:1,order:r})},updatePage(r){this.updateQuery({page:r})}}};var $=function(){var e=this,t=e._self._c;return t("div",[t("header-title",{attrs:{title:"Browse cards"}}),t("breadcrumbs",{attrs:{crumbs:e.crumbs}}),t("div",{staticClass:"bg-white dark:bg-gray-800 pt-4 border-b-4 border-gray-300 dark:border-gray-600"},[t("div",{staticClass:"container sm:mx-auto md:px-4"},[t("card-search",{attrs:{useCase:"browse",page:e.page,refreshable:!0,external:{per_page:e.per_page,order:e.order}},on:{"search-completed":e.refreshResults}})],1)]),t("div",{staticClass:"main-body"},[t("div",{staticClass:"container sm:mx-auto px-4"},[e.firstLoad?t("div",[t("ul",{staticClass:"flow-root -mx-2 pt-16"},e._l(30,function(s){return t("li",{staticClass:"float-left p-2 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6"},[t("card-loader")],1)}),0)]):t("div",[e.results&&e.results.data?t("div",[t("div",{staticClass:"flow-root"},[t("div",{staticClass:"py-4"},[t("div",{staticClass:"flex justify-between"},[t("div",{staticClass:"flex-grow"},[t("paginator",{attrs:{results:e.results},on:{"page-selected":e.updatePage}})],1),t("ordering",{on:{"order-changed":e.updateOrder}})],1)]),t("ul",{staticClass:"flow-root -mx-2"},e._l(e.results.data,function(s){return t("card-item",{key:s.identifier,staticClass:"float-left p-2 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6",attrs:{card:s,view:e.view,path:"/cards"}})}),1),t("div",{staticClass:"py-4"},[t("paginator",{attrs:{results:e.results},on:{"page-selected":e.updatePage}})],1)])]):e._e()])])])],1)},O=[],H=a(k,$,O,!1,null,null,null,null);const P=H.exports;export{P as default};
