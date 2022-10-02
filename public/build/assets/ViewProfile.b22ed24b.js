import{n as r,B as a,H as n,I as i,a as o}from"./app.f266d440.js";import{L as l}from"./LazyLoader.0379a251.js";import{M as u}from"./Models.cc4dbaf5.js";import{A as m}from"./Avatar.c6026bd8.js";class c{constructor(e){this.fields=e}get avatar(){return this.fields.avatar}get name(){return this.fields.name||"Anonymous"}get slug(){return this.fields.slug}}const d={props:{to:{required:!0,type:Object}},methods:{classes(){return this.$route.name===this.to.name?"bg-gray-800":"sm:bg-semi-black hover:bg-gray-800"}}};var f=function(){var e=this,s=e._self._c;return s("router-link",{staticClass:"block p-2 px-3 sm:rounded sm:mr-2",class:e.classes(),attrs:{to:e.to}},[e._t("default")],2)},p=[],_=r(d,f,p,!1,null,null,null,null);const v=_.exports,h={components:{Avatar:m,Breadcrumbs:a,HeaderTitle:n,ProfileNavItem:v},mixins:[i],data(){return{user:null,title:"",tab:"decks"}},computed:{crumbs(){return[{text:"Home",link:"/"},{text:"View profile: "+this.user.name}]}},extends:l((t,e)=>{o.get("/users/"+t.params.user).then(s=>{e(function(){this.user=u.hydrate(s.data,c)})})})};var x=function(){var e=this,s=e._self._c;return s("div",{staticClass:"container p-4 py-8 sm:mx-auto text-white"},[s("div",{staticClass:"flex navigation pb-8 mb-8"},[s("div",{staticClass:"flex-0"},[s("avatar",{staticClass:"mr-4",attrs:{user:e.user,width:100}})],1),s("div",[s("h1",{staticClass:"font-serif text-4xl uppercase mb-2"},[e._v(e._s(e.user.name))]),s("div",{staticClass:"text-base flex bg-semi-black rounded-lg overflow-hidden sm:bg-transparent"},[s("profile-nav-item",{attrs:{to:{name:"user.profile.decks",params:{user:e.$route.params.user}}}},[e._v("Decks")]),s("profile-nav-item",{attrs:{to:{name:"user.profile.wants",params:{user:e.$route.params.user}}}},[e._v("Want list")]),s("profile-nav-item",{attrs:{to:{name:"user.profile.trades",params:{user:e.$route.params.user}}}},[e._v("Trade list")])],1)])]),s("router-view",{attrs:{user:e.user}})],1)},b=[],g=r(h,x,b,!1,null,null,null,null);const w=g.exports;export{w as default};
