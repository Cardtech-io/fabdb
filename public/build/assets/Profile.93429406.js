import{B as u,H as d,l as c,m,o as n,a as l,n as p}from"./app.452767c0.js";import{A as v}from"./Avatar.5513b82b.js";import{B as f}from"./Badge.c327b618.js";import{C as g}from"./Card.f220136b.js";import{L as w}from"./LazyLoader.0379a251.js";import{M as h}from"./Models.cc4dbaf5.js";const b={components:{Avatar:v,Badge:f,Breadcrumbs:u,HeaderTitle:d,Submit:c},computed:{...m("session",["user","subscribed"]),email:{get(){return this.user.email},set(r){this.setUserParam({param:"email",value:r})}},name:{get(){return this.user.name},set(r){this.setUserParam({param:"name",value:r})}},width:{get(){return this.user.width},set(r){this.setUserParam({param:"width",value:r})}},currency:{get(){return this.user.currency},set(r){this.setUserParam({param:"currency",value:r})}},gemId:{get(){return this.user.gemId},set(r){this.setUserParam({param:"gemId",value:r})}},need:{get(){return this.user.need},set(r){this.setUserParam({param:"need",value:r})}},theme:{get(){return this.user.theme||"default"},set(r){this.setUserParam({param:"theme",value:r})}},view:{get(){return this.user.view},set(r){this.setUserParam({param:"view",value:r})}},avatar:{get(){return this.user.avatar},set(r){this.setUserParam({param:"avatar",value:r})}},slug(){return["legendary","fabled"].indexOf(this.user.subscription)!==-1&&this.user.vanitySlug?this.user.vanitySlug:this.user.slug}},data(){return{crumbs:[{text:"Home",link:"/"},{text:"Profile Update"}],changePassword:!1,oldPassword:"",newPassword:"",newPasswordConfirmation:"",saving:!1}},methods:{...n("session",["setUserParam"]),...n("messages",["addMessage","addValidationMessages"]),save:function(){this.saving=!0;const r={email:this.email,name:this.name,gemId:this.gemId,currency:this.currency,need:this.need,view:this.view,oldPassword:this.oldPassword,newPassword:this.newPassword,newPassword_confirmation:this.newPasswordConfirmation,avatar:this.avatar,theme:this.theme,width:this.width};l.put("/profile",r).then(e=>{this.addMessage({status:"success",message:"Profile updated"}),this.saving=!1}).catch(e=>{e.response.status===422&&this.addValidationMessages({messages:e.response.data.errors}),this.saving=!1})}},extends:w((r,e)=>{l.get("/cards/heroes").then(t=>{e(function(){this.heroes=h.hydrateMany(t.data,g)})})})};var y=function(){var e=this,t=e._self._c;return t("div",[t("header-title",{attrs:{title:"Profile Update"}}),t("breadcrumbs",{attrs:{crumbs:e.crumbs}}),t("div",{staticClass:"main-body"},[t("div",{staticClass:"container sm:mx-auto bg-white dark:bg-gray-800 py-8 px-8 md:flex"},[t("div",{staticClass:"md:w-1/2 md:pr-8"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.save.apply(null,arguments)}}},[t("div",{staticClass:"w-full flex items-center"},[t("div",{staticClass:"mr-4"},[t("div",{staticClass:"rounded-xl overflow-hidden"},[t("avatar",{attrs:{user:e.user,width:80}})],1)]),t("div",{staticClass:"flex-auto"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Avatar (Patrons only)")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.avatar,expression:"avatar"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto",attrs:{disabled:!e.subscribed},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(s){return s.selected}).map(function(s){var o="_value"in s?s._value:s.value;return o});e.avatar=a.target.multiple?i:i[0]}}},[t("option",{attrs:{value:"bauble"}},[e._v("Bauble")]),e._l(e.heroes,function(a){return t("option",{domProps:{value:a.avatar()}},[e._v(e._s(a.name))])})],2)])]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Email address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"email",required:"required"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),e.changePassword?e._e():t("button",{staticClass:"button-secondary text-sm py-3 px-4 mt-4 rounded-lg",on:{click:function(a){e.changePassword=!0}}},[e._v("I'd like to add or change my password")]),e.changePassword?t("div",{staticClass:"p-4 bg-gray-100 rounded-lg mt-4"},[e.user.hasPassword?t("div",{staticClass:"w-full mb-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Old password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPassword,expression:"oldPassword"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"password"},domProps:{value:e.oldPassword},on:{input:function(a){a.target.composing||(e.oldPassword=a.target.value)}}})]):e._e(),t("div",{staticClass:"w-full"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("New password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"password"},domProps:{value:e.newPassword},on:{input:function(a){a.target.composing||(e.newPassword=a.target.value)}}})]),e.newPassword?t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Confirm password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordConfirmation,expression:"newPasswordConfirmation"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"password"},domProps:{value:e.newPasswordConfirmation},on:{input:function(a){a.target.composing||(e.newPasswordConfirmation=a.target.value)}}})]):e._e(),t("p",{staticClass:"border border-blue-500 text-blue-500 p-2 rounded-lg text-sm mt-4"},[e._v("At FaB DB we take security seriously. Your password must be at least 8 characters long, and consist of at least 1 non-alpha character (!?<>.,)")])]):e._e(),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("GEM player ID")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gemId,expression:"gemId"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text"},domProps:{value:e.gemId},on:{input:function(a){a.target.composing||(e.gemId=a.target.value)}}})]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Preferred currency")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.currency,expression:"currency"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{required:"required"},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(s){return s.selected}).map(function(s){var o="_value"in s?s._value:s.value;return o});e.currency=a.target.multiple?i:i[0]}}},[t("option",{attrs:{value:"AUD"}},[e._v("AUD")]),t("option",{attrs:{value:"CAD"}},[e._v("CAD")]),t("option",{attrs:{value:"NZD"}},[e._v("NZD")]),t("option",{attrs:{value:"USD"}},[e._v("USD")])])]),t("h2",{staticClass:"font-serif text-xl uppercase mt-8 mb-4"},[e._v("Interface")]),t("div",{staticClass:"w-full mt-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Theme")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{required:"required"},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(s){return s.selected}).map(function(s){var o="_value"in s?s._value:s.value;return o});e.theme=a.target.multiple?i:i[0]}}},[t("option",{attrs:{value:"default"}},[e._v("Default")]),t("option",{attrs:{value:"aria"}},[e._v("Aria")]),t("option",{attrs:{value:"demonastery"}},[e._v("Demonastery")]),t("option",{attrs:{value:"library"}},[e._v("Library")]),t("option",{attrs:{value:"monarch"}},[e._v("Monarch")]),t("option",{attrs:{value:"skies"}},[e._v("Skies")]),t("option",{attrs:{value:"savage-lands"}},[e._v("Savage Lands")]),t("option",{attrs:{value:"tales"}},[e._v("Tales of Aria")]),t("option",{attrs:{value:"the-pits"}},[e._v("The Pits")]),t("option",{attrs:{value:"battle"}},[e._v("Battle at the Peak (Patreon supporters only)")])])]),t("div",{staticClass:"w-full mt-4 mb-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Card borders")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.view,expression:"view"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(s){return s.selected}).map(function(s){var o="_value"in s?s._value:s.value;return o});e.view=a.target.multiple?i:i[0]}}},[t("option",{attrs:{value:"borderless"}},[e._v("Borderless")]),t("option",{attrs:{value:"bordered"}},[e._v("Bordered")])])]),t("h2",{staticClass:"font-serif text-xl uppercase mt-8 mb-4"},[e._v("Collection management")]),t("div",{staticClass:"w-full mb-4"},[t("label",{staticClass:"block font-serif uppercase tracking-wide mb-1"},[e._v("Cards required until no longer needed")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.need,expression:"need"}],staticClass:"input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(s){return s.selected}).map(function(s){var o="_value"in s?s._value:s.value;return o});e.need=a.target.multiple?i:i[0]}}},[t("option",{attrs:{value:"1"}},[e._v("1")]),t("option",{attrs:{value:"2"}},[e._v("2")]),t("option",{attrs:{value:"3"}},[e._v("3")])]),t("div",{staticClass:"text-sm mt-2"},[e._v(' When managing your collection, the default minimum cards required to satisfy the "need" metric, is 1. For example, setting this to 2, means the manager will continue to show those cards until you have 2 in your collection. ')])]),t("submit",{staticClass:"mt-8",attrs:{text:"Save",disabled:e.saving}})],1)]),t("div",{staticClass:"mt-8 md:w-1/2 md:mt-0"},[t("router-link",{staticClass:"inline-block button-secondary mb-4 rounded-full p-4",attrs:{to:{name:"user.profile.decks",params:{user:e.slug}}}},[e._v("View your public profile")]),t("h2",{staticClass:"text-xl font-serif uppercase mb-2"},[e._v("Your membership level")]),t("div",{staticClass:"mb-8"},[e.user.subscription?t("div",[t("badge",{attrs:{"subscription-level":e.user.subscription}})],1):t("p",[e._v("If you love what we're doing, please "),t("a",{staticClass:"link",attrs:{href:"https://www.patreon.com/fabdb"}},[e._v("support us on Patreon.")])])]),t("h2",{staticClass:"text-xl font-serif uppercase"},[e._v("What data do we collect?")]),t("p",{staticClass:"my-4"},[e._v("At fabdb.net, we endeavour to collect as little information about you as possible.")]),t("p",{staticClass:"my-4"},[e._v("Some details, such as email address, are absolutely essential. Not for marketing, but purely for identification purposes and application notifications.")]),t("p",[e._v("Other details, like name, gem id.etc. are only required if you use certain features. You will be prompted for these if and when that occurs.")]),t("p",[e._v("Currency will preferentially display stores and item listings that sell products in your preferred currency.")]),t("p",{staticClass:"my-4"},[e._v("Name for example, is only needed if you participate within the community, providing feedback and starting threads.etc. Your gem ID is only needed when you export your decks to PDF format, which can be handed in at tournaments. If you like, your gem ID does not need to be saved, and instead will be asked when generating a PDF. When asked for in this manner, your gem ID is not saved in our database.")])],1)])])],1)},_=[],C=p(b,y,_,!1,null,null,null,null);const N=C.exports;export{N as default};
