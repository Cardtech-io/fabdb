import{n as r,a as s}from"./app.881f611a.js";const o={props:{name:{type:String,required:!0},params:{type:Object,default:function(){return{}}},enabled:{type:Boolean,default:!0}},methods:{addDeck(){s.post("/decks/",{name:this.name,...this.params}).then(t=>{this.$router.push({name:"decks.build",params:{deck:t.data.slug}})})}}};var d=function(){var e=this,a=e._self._c;return a("form",{staticClass:"block text-right",on:{submit:function(n){return n.preventDefault(),e.addDeck()}}},[a("button",{staticClass:"py-2 px-4 appearance-none rounded-lg p-2 button-primary cursor-pointer",class:{"button-disabled":!e.enabled},attrs:{type:"submit",disabled:!e.enabled}},[e._t("default")],2)])},l=[],u=r(o,d,l,!1,null,null,null,null);const i=u.exports;export{i as A};
