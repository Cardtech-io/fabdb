import{n as a,I as i,b as l,H as c,a as r}from"./app.00661b81.js";import{L as p}from"./LazyLoader.0379a251.js";import{M as m}from"./Models.cc4dbaf5.js";import{A as d}from"./Article.ee2d9a64.js";const u={mixins:[i,l],components:{HeaderTitle:c},data(){return{articles:{},upcoming:[]}},methods:{localTime(n){return moment.utc(n).local()}},metaInfo(){return{title:"Flesh & Blood - Monarch Spoilers",meta:[{vmid:"description",name:"description",content:"Upcoming and recent spoilers for Flesh and Blood's next set, Monarch."},{vmid:"og:type",property:"og:type",content:"article"},{vmid:"og:title",property:"og:title",content:"Flesh & Blood - Monarch Spoilers"},{vmid:"og:description",property:"og:description",content:"Upcoming and recent spoilers for Flesh and Blood's next set, Monarch."}]}},extends:p((n,t)=>{let e=[r.get("/articles?type=spoiler"),r.get("/articles/upcoming?type=spoiler")];Promise.all(e).then(s=>{t(function(){this.articles=m.hydratePaginated(s[0].data,d),this.upcoming=s[1].data})})})};var _=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container px-4 sm:mx-auto sm:px-0 text-white"},[e("header-title",{staticClass:"text-center",attrs:{title:"Monarch Spoilers"}}),t._l(t.upcoming,function(s){return t.upcoming?e("div",{staticClass:"bg-semi-black rounded-xl mx-4 p-4 mt-8 sm:mt-0 text-center font-serif text-4xl"},[e("countdown",{attrs:{"end-time":t.localTime(s.publishAt)},scopedSlots:t._u([{key:"process",fn:function({timeObj:o}){return e("span",{},[o.d>0?e("span",[t._v(t._s(o.d)+" :")]):t._e(),o.h?e("span",[t._v(t._s(o.h)+" :")]):t._e(),o.m?e("span",[t._v(t._s(o.m)+" :")]):t._e(),o.s?e("span",[t._v(t._s(o.s))]):t._e()])}}],null,!0)})],1):t._e()}),t.articles.data.length?e("div",{staticClass:"my-8 mx-4"},t._l(t.articles.data,function(s){return e("div",{staticClass:"flex bg-semi-black rounded-xl p-4"},[e("div",{staticClass:"spoiler"},[e("h1",{staticClass:"font-serif uppercase text-4xl sm:text-6xl"},[t._v(t._s(s.title))]),e("div",[t._v(t._s(s.excerpt))]),e("img",{staticClass:"relative rounded-lg float-right m-8 mr-0 z-50 max-w-full",attrs:{src:t.thumbUrl(s.image,450)}}),e("div",{staticClass:"mt-8",domProps:{innerHTML:t._s(t.prettyText(s.content))}})])])}),0):e("div",[e("p",{staticClass:"my-8 text-center"},[t._v("Ah-ah! Not yet! Maybe come back tomorrow? ;)")])])],2)},x=[],f=a(u,_,x,!1,null,null,null,null);const C=f.exports;export{C as default};
