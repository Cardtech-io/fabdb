import{n as a,I as i,b as n,a as l}from"./app.00661b81.js";const o={mixins:[i,n],data(){return{crumbs:[{text:"Home",link:"/"},{text:"Limited practise",link:"/practise"},{text:this.$route.query.format==="sealed"?"Sealed deck run":"Team sealed run"}]}},methods:{sets(){return _.sortBy(_.filter(this.$settings.game.sets,r=>r.draftable),r=>r.released).reverse()},setup(r){l.post("practise",{format:this.$route.query.format,set:r}).then(t=>{this.$router.push({name:"practise.view",params:{practise:t.data.slug}})})}}};var u=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Limited practise"}}),e("breadcrumbs",{attrs:{crumbs:t.crumbs}}),e("div",{staticClass:"main-body"},[e("div",{staticClass:"w-auto flex justify-center items-start py-8"},t._l(t.sets(),function(s){return e("div",{staticClass:"booster mx-4 hover:bg-white dark:hover:bg-gray-700 p-4 rounded-lg"},[e("button",{staticClass:"block link-alternate",on:{click:function(d){return t.setup(s.id)}}},[e("img",{attrs:{src:t.imageUrl("/boosters/"+t.kebabCase(s.name)+".png",180),alt:s.name,title:s.name}})])])}),0)])],1)},c=[],m=a(o,u,c,!1,null,null,null,null);const f=m.exports;export{f as default};
