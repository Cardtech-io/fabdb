import{n as r,m as i,k as n,a as l}from"./app.d4472289.js";import{L as o}from"./LazyLoader.0379a251.js";const d={props:{format:{type:String,required:!0}},data(){let a={draft:"bg-purple-500",sealed:"bg-blue-500","team-sealed":"bg-green-500"},t={draft:"Draft",sealed:"Solo","team-sealed":"Team"};return{colour:a[this.format],text:t[this.format]}}};var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-block text-white rounded px-3 py-1 text-sm",class:t.colour},[t._v(" "+t._s(t.text)+" ")])},u=[],m=r(d,c,u,!1,null,null,null,null);const p=m.exports,f={components:{Format:p},data(){return{crumbs:[{text:"Home",link:"/"},{text:"Limited practise"}],practises:{}}},computed:{...i("session",["majestic","legendary"])},methods:{when(a){return n(a).format("dddd, MMMM Do YYYY, h:mm:ss a")}},extends:o((a,t)=>{l.get("/practise").then(e=>{t(function(){this.practises=e.data.data})})})};var _=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Limited practise"}}),e("breadcrumbs",{attrs:{crumbs:t.crumbs}}),e("div",{staticClass:"main-body"},[e("div",{staticClass:"container flex sm:mx-auto px-4 py-8"},[e("div",{class:{"w-1/2":t.practises.length}},[e("p",{staticClass:"bg-white dark:bg-gray-800 p-4"},[t._v(" Each Limited Practise run will generate a number of packs, that can then be viewed and saved for future reference. This will allow you to test with and build decks based on the random nature of the booster packs, and even be able to practise over and over with especially bad Limited drafts. ")]),e("div",{staticClass:"my-4 text-center"},[e("router-link",{staticClass:"inline-block mx-auto button-primary px-4 py-3 rounded-lg",attrs:{to:{name:"practise.setup",query:{format:"draft"}},tag:"button"}},[t._v("Draft practise")]),e("router-link",{staticClass:"inline-block mx-auto button-primary px-4 py-3 rounded-lg",class:{"button-disabled":!t.majestic},attrs:{to:{name:"practise.setup",query:{format:"sealed"}},disabled:!t.majestic,tag:"button"}},[t._v("Sealed practise (Solo)")]),e("router-link",{staticClass:"inline-block mx-auto button-secondary px-4 py-3 rounded-lg",class:{"button-disabled":!t.legendary},attrs:{to:{name:"practise.setup",query:{format:"team-sealed"}},disabled:!t.legendary,tag:"button"}},[t._v("Sealed practise (Team)")])],1),e("p",{staticClass:"p-4 italic"},[t._v(" Draft practise is open to all, whereas sealed practise is available to Majestic and Legendary supporters only. ")])]),t.practises.length?e("div",{staticClass:"w-1/2 pl-4"},[e("h2",{staticClass:"font-serif uppercase text-xl mb-2"},[t._v("Previous practise runs")]),e("ul",t._l(t.practises,function(s){return e("li",{staticClass:"flex odd:bg-white dark:odd:bg-gray-800 p-4"},[e("div",{staticClass:"w-4/5"},[e("router-link",{staticClass:"link-alternate",attrs:{to:{name:"practise.view",params:{practise:s.slug}}}},[t._v(t._s(t.when(s.createdAt)))]),t._v(" ("+t._s(s.set.name)+") ")],1),e("div",{staticClass:"w-1/5 text-right"},[e("format",{attrs:{format:s.format}})],1)])}),0)]):t._e()])])],1)},b=[],v=r(f,_,b,!1,null,null,null,null);const x=v.exports;export{x as default};
