import{n as i,b as l,a as n}from"./app.00661b81.js";import{H as o}from"./HeroAvatar.4542c141.js";import{M as c}from"./Models.cc4dbaf5.js";import{C as d}from"./Card.f220136b.js";const m="/build/assets/intellect.8c5f1558.png",u="/build/assets/life.b370bbfe.png",_={props:["deck"],components:{HeroAvatar:o},mixins:[l],data(){return{availableHeroes:[]}},computed:{heroes(){return this.deck&&this.deck.practise?this.availableHeroes.filter(s=>s.young()&&s.sku.set.id===this.deck.practise.set.id):this.availableHeroes}},methods:{selectHero(s){let t=s.fields;this.$emit("hero-selected",t,this.type(t)),this.$eventHub.$emit("hero-selected",t,this.type(t))},type(s){return s.keywords.indexOf("young")!==-1?"Blitz":"Constructed"}},mounted(){n.get("/cards/heroes").then(s=>{this.availableHeroes=c.hydrateMany(s.data,d)})}};var f=function(){var t=this,e=t._self._c;return e("ol",{staticClass:"flex flex-wrap my-8"},t._l(t.heroes,function(r){return e("li",{staticClass:"w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-8"},[e("button",{staticClass:"block cursor-pointer mx-auto",on:{click:function(a){return a.preventDefault(),t.selectHero(r)}}},[e("hero-avatar",{attrs:{hero:r,name:r.name,width:150}}),e("div",{staticClass:"flex -mt-5"},[e("div",{staticClass:"w-1/2 flex justify-end mr-2"},[e("span",{staticClass:"text-lg"},[t._v(t._s(r.stats.intellect))]),e("img",{staticClass:"block h-10 ml-1 border-2 border-gray-200 rounded-full",attrs:{src:m}})]),e("div",{staticClass:"w-1/2 flex ml-2"},[e("img",{staticClass:"block h-10 mr-1 border-2 border-gray-200 rounded-full",attrs:{src:u}}),e("span",{staticClass:"text-lg"},[t._v(t._s(r.stats.life))])])])],1),e("div",{staticClass:"mt-4 text-center font-serif uppercase text-lg overflow-hidden",staticStyle:{"max-height":"20px"}},[t._v(t._s(r.name))]),e("div",{staticClass:"mt-2 text-center"},[t._v(t._s(t.type(r)))])])}),0)},p=[],v=i(_,f,p,!1,null,null,null,null);const g=v.exports;export{g as H};
