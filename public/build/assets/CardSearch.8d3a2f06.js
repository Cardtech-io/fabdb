import{n as s,c as n,_ as i}from"./app.f266d440.js";import{Q as l,A as o}from"./AdvancedCardSearch.75b8247f.js";const u={props:{external:{type:Object,default:()=>({})},page:Number,limit:{type:Number,default:12},useCase:String,refreshable:{type:Boolean,default:!0},wait:Boolean},components:{Icon:n},mixins:[l],data(){return{params:{...{...this.external,keywords:""},...this.fromQuery(this.exceptParams("per_page","page"))},sets:this.filterSets()}},computed:{keywordClasses(){let a="";return this.params.keywords?a+=" px-2":a+=" px-2 sm:px-4",a}},methods:{newSearch(){this.params.page=1,this.updateQuery(this.params)},filterSets(){return i.sortBy(this.$settings.game.sets,"name")},query(a){return a?this.$route.query[a]:this.$route.query},search(){let a=this.combineParams({...this.params,"use-case":this.useCase,...this.$route.query}),e=this.useCase==="collection"?"collection":"cards";axios.get("/"+e,{params:a}).then(t=>{this.$emit("search-completed",t.data)}).catch(t=>{})},showAdvancedSearch(){this.$modal.show(o,{query:this.params},{adaptive:!0,classes:["rounded-lg","bg-white","dark:bg-gray-800"],scrollable:!0,height:"auto",maxHeight:300})}},mounted(){this.wait||(this.$eventHub.$on("advanced-search",a=>{a.page=1,this.updateQuery(a)}),this.search())},watch:{"$route.query":function(){this.search()}}};var c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-base pb-4"},[t("form",{on:{submit:function(r){return r.preventDefault(),e.newSearch.apply(null,arguments)}}},[t("div",{staticClass:"flex w-full px-4 md:px-0"},[t("div",{staticClass:"w-3/4 relative pr-1 flex bg-gray-200 dark:bg-gray-900 focus:bg-gray-700 focus:border-gray-500 rounded-lg mr-2 items-center"},[t("button",{staticClass:"flex-initial ml-2 bg-primary hover:bg-secondary text-white rounded p-1 px-2 text-xs uppercase",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),e.$modal.show("search-help")}}},[t("span",{staticClass:"hidden sm:inline"},[e._v("SYNTAX")]),e._v(" HELP ")]),e.params.keywords?t("button",{staticClass:"flex-initial ml-1 text-red-500",attrs:{type:"button"},on:{click:function(r){r.preventDefault(),e.params.keywords="",e.newSearch()}}},[t("icon",{attrs:{size:6}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"}})])],1):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.params.keywords,expression:"params.keywords"}],staticClass:"flex-1 bg-transparent outline-none py-2 dark:text-gray-300",class:e.keywordClasses,attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.params.keywords},on:{input:function(r){r.target.composing||e.$set(e.params,"keywords",r.target.value)}}}),t("button",{staticClass:"absolute right-0 text-black dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-100 mr-1",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),e.showAdvancedSearch.apply(null,arguments)}}},[t("icon",{attrs:{size:7}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"}})])],1)]),e._m(0)])])])},p=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"w-1/4"},[e("input",{staticClass:"w-full button-primary rounded-lg py-3 px-2 sm:px-4 leading-tight focus:outline-none",attrs:{type:"submit",value:"Search"}})])}],d=s(u,c,p,!1,null,null,null,null);const y=d.exports;export{y as C};
