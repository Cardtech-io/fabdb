import{C as i,e as o,H as n,o as l,j as m,m as d,p as c,a as r,n as u}from"./app.f2cce41c.js";import{L as p}from"./LazyLoader.0379a251.js";import{V as f}from"./Viewable.d36f93df.js";const v={components:{CardImage:i,Crumbs:o,HeaderTitle:n,Submit:l},mixins:[m,f],computed:{...d("session",["user"]),name:{get(){return this.user.name},set(s){this.setUserParam({param:"name",value:s})}},gemId:{get(){return this.user.gemId},set(s){this.setUserParam({param:"gemId",value:s})}},cards:function(){return this.deck.cards},crumbs:function(){return[{text:"Home",link:"/"},{text:"Deck Builder",link:"/decks/build/"+this.deck.slug},{text:"Export deck"}]}},data(){return{deck:null,event:null,exportRequested:!1,format:"pdf"}},methods:{...c("session",["setUserParam"]),requestExport:function(){const s={name:this.name,gemId:this.gemId,event:this.event};r.post("/export/"+this.deck.slug+"."+this.format,s).then(e=>{this.exportRequested=!0})}},metaInfo(){return{title:"Deck builder - Export deck"}},extends:p((s,e)=>{r.get("/decks/"+s.params.deck).then(t=>{e(function(){this.deck=t.data})})})};var b=function(){var e=this,t=e._self._c;return t("div",[t("header-title",{attrs:{title:"Export deck"}}),t("div",{staticClass:"bg-red-900 text-white font-serif uppercase"},[t("div",{staticClass:"container sm:mx-auto p-4 flex"},[t("div",{staticClass:"flex-1"},[t("crumbs",{attrs:{crumbs:e.crumbs}})],1)])]),t("div",{staticClass:"bg-gray-200"},[t("div",{staticClass:"container sm:mx-auto bg-white py-8 px-8"},[t("div",{staticClass:"container sm:mx-auto border-b border-gray-400 mb-8"},[e.hero?t("h1",{staticClass:"inline-block font-serif text-4xl"},[e._v(e._s(e.hero.name)+" ("+e._s(e.deck.name)+")")]):e._e()]),t("div",{staticClass:"md:flex"},[t("div",{staticClass:"md:w-2/3 md:pr-8"},[e.exportRequested?t("div",[t("p",[e._v("Your deck export has been requested, and shall arrived at your email inbox in a few moments.")])]):t("div",[t("p",{staticClass:"mb-4 p-4 bg-blue-500 rounded-lg text-white"},[e._v(" The information collected below is not saved, but is required for your PDF as part of the tournament pack export. We will email you your export once it's been generated. ")]),t("form",{on:{submit:function(a){return a.preventDefault(),e.requestExport.apply(null,arguments)}}},[t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("GEM player ID")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gemId,expression:"gemId"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text"},domProps:{value:e.gemId},on:{input:function(a){a.target.composing||(e.gemId=a.target.value)}}})]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Event")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.event,expression:"event"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text"},domProps:{value:e.event},on:{input:function(a){a.target.composing||(e.event=a.target.value)}}})]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Export format")]),t("label",{staticClass:"block",attrs:{fpr:"pdf-export"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],staticClass:"focus:bg-white focus:border-gray-500",attrs:{type:"radio",name:"format",value:"pdf",id:"pdf-export"},domProps:{checked:e._q(e.format,"pdf")},on:{change:function(a){e.format="pdf"}}}),t("span",{staticClass:"ml-4"},[e._v("PDF")])]),t("label",{staticClass:"block mt-2",attrs:{for:"zip-export"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],staticClass:"focus:bg-white focus:border-gray-500",attrs:{type:"radio",name:"format",value:"zip",id:"zip-export"},domProps:{checked:e._q(e.format,"zip")},on:{change:function(a){e.format="zip"}}}),t("span",{staticClass:"ml-4"},[e._v("ZIP")])])]),t("submit",{staticClass:"mt-8",attrs:{text:"Export"}})],1)])]),t("div",{staticClass:"hidden md:block md:w-1/3"},[t("card-image",{attrs:{card:e.hero}})],1)])])])],1)},g=[],x=u(v,b,g,!1,null,null,null,null);const _=x.exports;export{_ as default};
