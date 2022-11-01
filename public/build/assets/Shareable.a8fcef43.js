import{B as d,D as x,P as w}from"./Rulings.4882816d.js";import{h as n,n as i,b as o,r as f,s as C}from"./app.881f611a.js";import{C as c}from"./Cards.3e629bf5.js";import{V as _}from"./Viewable.19d659d2.js";import{S as y,a as k}from"./SelectorItem.1700aab3.js";const $={extends:d,props:{cards:{required:!0,type:Object},stat:{required:!0,type:String},strategy:{required:!0,type:String,validator(s){return["total","length"].indexOf(s)!==-1}}},methods:{colours(s){if(this.stat==="resource"){let e=[];return s.indexOf("1")!==-1&&e.push("239,68,68"),s.indexOf("2")!==-1&&e.push("251,191,37"),s.indexOf("3")!==-1&&e.push("96,165,250"),e}let t=[];for(let e=0;e<s.length;e++){let a=180-180*(e/s.length),r=e/s.length*255;t.push([r+", "+a+", 30"])}return t},update(s){let t=this.values(s),e=this.stat==="resource"?"Pitch":"Cost",a=this.colours(n.keys(t)),r={labels:n.keys(t).map(l=>this.stat==="resource"?"Pitch "+l:"Cost "+l),datasets:[{label:e,backgroundColor:a.map(l=>"rgba("+l+", 1)"),data:n.values(t),barPercentage:.6}]};this.renderChart(r,{legend:{display:!1,position:"bottom"},responsive:!0,maintainAspectRatio:!1,fill:!1,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}})},values(s){return n(s.all()).groupBy(t=>t.stats[this.stat]||0).mapValues(t=>this.strategy==="total"?t.reduce((e,a)=>e+a.total,0):t.length).value()}},watch:{cards(s){this.update(s)}},mounted(){this.update(this.cards)}},R={props:["text","value","position"],methods:{bottom(){return this.position==="bottom"||this.position==="both"},top(){return this.position==="top"||this.position==="both"}}};var A=function(){var t=this,e=t._self._c;return e("li",{staticClass:"block w-full flex mb-px space-x-px"},[e("div",{staticClass:"w-3/4 bg-gray-200 dark:bg-gray-700 p-2 py-1",class:{"rounded-tl-lg":t.top(),"rounded-bl-lg":t.bottom()}},[t._v(t._s(t.text))]),e("div",{staticClass:"w-1/4 bg-gray-200 dark:bg-gray-700 py-1 text-center",class:{"rounded-tr-lg":t.top(),"rounded-br-lg":t.bottom()}},[t._v(t._s(t.value))])])},O=[],D=i(R,A,O,!1,null,null,null,null);const m=D.exports,S={mixins:[_],components:{Stat:m},props:{cards:{required:!0,type:c}},computed:{averageCost(){const s=this.cards.withCost(),t=s.total(),e=s.reduce((a,r)=>a+r.stats.cost*r.total,0);return(t?e/t:0).toFixed(2)},averagePitch(){const s=this.cards.withResource(),t=s.total(),e=s.reduce((a,r)=>a+r.stats.resource*r.total,0);return(t?e/t:0).toFixed(2)}},methods:{costCount(s){return this.cards.deck().filter(e=>s<3?e.stats.cost==s:e.stats.cost>=s).reduce((e,a)=>e+a.total,0)},pitchCount(s){return this.cards.other().filter(e=>e.stats.resource==s).reduce((e,a)=>e+a.total,0)}}};var j=function(){var t=this,e=t._self._c;return e("div",[e("ol",{staticClass:"mt-2 text-base"},[e("stat",{attrs:{value:t.averageCost,text:"Avg cost",position:"top"}}),e("stat",{attrs:{value:t.averagePitch,text:"Avg pitch"}}),e("stat",{attrs:{value:t.pitchCount(1),text:"Pitch 1"}}),e("stat",{attrs:{value:t.pitchCount(2),text:"Pitch 2"}}),e("stat",{attrs:{value:t.pitchCount(3),text:"Pitch 3"}}),e("stat",{attrs:{value:t.costCount(0),text:"Cost 0"}}),e("stat",{attrs:{value:t.costCount(1),text:"Cost 1"}}),e("stat",{attrs:{value:t.costCount(2),text:"Cost 2"}}),e("stat",{attrs:{value:t.costCount(3),text:"Cost 3+",position:"bottom"}})],1)])},q=[],F=i(S,j,q,!1,null,null,null,null);const v=F.exports,T={components:{Stat:m},props:{cards:{required:!0,type:c},deck:{required:!0,type:Object}}};var P=function(){var t=this,e=t._self._c;return e("div",[e("ol",{staticClass:"mt-2"},[e("stat",{attrs:{value:t.cards.deckTotal(t.deck.format),text:"Cards",position:"top"}}),e("stat",{attrs:{value:t.cards.forClass().total(),text:"Class"}}),e("stat",{attrs:{value:t.cards.forGeneric().total(),text:"Generic",position:"bottom"}})],1),e("ol",{staticClass:"mt-4 text-base"},[e("stat",{attrs:{value:t.cards.nonAttackActions().total(),text:"Non-att. actions",position:"top"}}),e("stat",{attrs:{value:t.cards.attackActions().total(),text:"Att. actions"}}),e("stat",{attrs:{value:t.cards.attackReactions().total(),text:"Att. reactions"}}),e("stat",{attrs:{value:t.cards.defenseReactions().total(),text:"Def. reactions"}}),e("stat",{attrs:{value:t.cards.instants().total(),text:"Instants",position:"bottom"}})],1)])},L=[],V=i(T,P,L,!1,null,null,null,null);const g=V.exports,W={extends:d,props:{cards:{required:!0,type:Object}},mixins:[o],methods:{colours(s){let t=[];for(let e=0;e<s.length;e++){let a=255-180*(e/s.length),r=e/s.length*255;t.push([r+", 0, "+a])}return t.map(e=>"rgb("+e+")")},update(s){let t=this.values(s),a={labels:Object.keys(t).map(r=>r+" Power"),datasets:[{data:Object.values(t),backgroundColor:Object.values(this.colours(Object.values(t))),barPercentage:.6}]};this.renderChart(a,{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}})},values(s){return n(s.all()).groupBy(t=>t.stats.attack).mapValues(t=>t.reduce((e,a)=>e+a.total,0)).value()}},mounted(){this.update(this.cards)}},B={extends:x,props:{deck:{required:!0,type:Object},cards:{required:!0,type:Object}},mixins:[o],methods:{colours(s){let t={"Attack action":"rgb(239 68 68)","Attack reaction":"rgb(249 115 22)",Hero:"rgb(6 182 212)","Non-attack action":"rgb(99 102 241)",Equipment:"rgb(113 113 122)",Item:"rgb(245 158 11)","Defense reaction":"rgb(132 204 22)",Weapon:"rgb(34 197 94)",Instant:"rgb(168 85 247)"},e={};for(let a in s)e[a]=t[a];return e},update(s){let t=this.values(s),a={labels:Object.keys(t),datasets:[{data:Object.values(t),backgroundColor:Object.values(this.colours(t))}]};this.renderChart(a,{legend:{display:!0,position:this.$mq==="sm"?"top":"right"},responsive:!0,maintainAspectRatio:!1})},values(s){return n(s.deck().all()).groupBy(t=>this.prettyType(t.type,t.subType)).mapValues(t=>t.reduce((e,a)=>e+a.total,0)).value()}},mounted(){this.update(this.cards)}},M={extends:w,props:{cards:{required:!0,type:Object}},mixins:[o],methods:{colours(s){let t=[];for(let e=0;e<s.length;e++){let a=255-180*(e/s.length),r=e/s.length*255;t.push([r+", 0, "+a])}return t.map(e=>"rgb("+e+")")},update(s){let t=this.values(s),a={labels:Object.keys(t).map(r=>r+" Defense"),datasets:[{data:Object.values(t),backgroundColor:Object.values(this.colours(Object.values(t)))}]};this.renderChart(a,{legend:{display:!0,position:this.$mq==="sm"?"top":"right"},responsive:!0,maintainAspectRatio:!1})},values(s){return n(s.all()).groupBy(t=>t.stats.defense).mapValues(t=>t.reduce((e,a)=>e+a.total,0)).value()}},mounted(){this.update(this.cards)}},I={props:{title:{type:String}}};var N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex flex-col"},[t.title?e("header",{staticClass:"block w-full bg-white dark:bg-gray-900 p-1 px-4 text-center"},[t._v(" "+t._s(t.title)+" ")]):t._e(),e("div",{staticClass:"md:flex md:flex-col md:items-center md:justify-center md:flex-1"},[t._t("default")],2)])},G=[],Z=i(I,N,G,!1,null,null,null,null);const b=Z.exports,E={components:{AttackPower:W,DeckCurves:$,Defense:M,Composition:B,General:v,Tile:b,Totals:g,Stat:m},mixins:[_],props:{deck:{required:!0,type:Object},cards:{required:!0,type:c}}};var H=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"md:flex md:space-x-4 w-full mb-4 space-y-4 md:space-y-0"},[e("tile",{staticClass:"w-full md:w-1/4",attrs:{title:"Total cards"}},[e("h1",{staticClass:"text-12xl text-center font-bold leading-none my-4 md:-mt-4"},[t._v(t._s(t.cards.deckTotal(t.deck.format)))])]),e("tile",{staticClass:"w-full md:w-1/2",attrs:{title:"Deck composition"}},[e("composition",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{deck:t.deck,cards:t.cards}})],1),e("tile",{staticClass:"w-full md:w-1/4",attrs:{title:"Cost curve"}},[e("deck-curves",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{cards:t.cards,stat:"cost",strategy:"total"}})],1)],1),e("div",{staticClass:"md:flex md:space-x-4 w-full mb-4 space-y-4 md:space-y-0"},[e("tile",{staticClass:"w-full md:w-1/3",attrs:{title:"Pitch curve"}},[e("deck-curves",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{cards:t.cards.withResource(),stat:"resource",strategy:"total"}})],1),e("tile",{staticClass:"w-full md:w-1/3",attrs:{title:"Offensive potential"}},[e("attack-power",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{cards:t.cards.withPower()}})],1),e("tile",{staticClass:"w-full md:w-1/3",attrs:{title:"Defensive capabilities"}},[e("defense",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{cards:t.cards.withDefense()}})],1)],1)])},z=[],J=i(E,H,z,!1,null,null,null,null);const K=J.exports,Q={components:{General:v,Stat:m,Totals:g},props:{deck:{required:!0,type:Object},cards:{required:!0,type:c}},computed:{total(){return this.deck.format==="constructed"?this.cards.total()-1:this.cards.total()},offenseRating(){return(((this.cards.attackActions().total()+this.cards.attackReactions().total())/this.total).toFixed(2)*100).toFixed(0)+"%"},defenseRating(){return((this.cards.withDefense().total()/this.total).toFixed(2)*100).toFixed(0)+"%"}}};var U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex"},[e("div",{staticClass:"md:w-1/3"},[e("h3",{staticClass:"font-serif uppercase text-2xl"},[t._v("Totals")]),e("totals",{attrs:{cards:t.cards,deck:t.deck}})],1),e("div",{staticClass:"mt-4 md:mt-0 md:w-1/3 md:mx-4"},[e("h3",{staticClass:"font-serif uppercase text-2xl"},[t._v("General")]),e("general",{attrs:{cards:t.cards}})],1),e("div",{staticClass:"mt-4 md:mt-0 md:w-1/3 md:mx-4"},[e("h3",{staticClass:"font-serif uppercase text-2xl"},[t._v("Offensive")]),e("ol",{staticClass:"mt-2 text-base"},[e("stat",{attrs:{value:t.offenseRating,text:"Rating",position:"top"}}),e("stat",{attrs:{value:t.cards.averageAttack(),text:"Average attack"}}),e("stat",{attrs:{value:t.cards.attacksPerHand(),text:"Attacks per hand",position:"bottom"}})],1),e("h3",{staticClass:"font-serif uppercase text-2xl mt-4 md:mt-8"},[t._v("Defensive")]),e("ol",{staticClass:"mt-2 text-base"},[e("stat",{attrs:{value:t.defenseRating,text:"Rating",position:"top"}}),e("stat",{attrs:{value:t.cards.averageBlock(),text:"Average block",position:"bottom"}})],1)])])},X=[],Y=i(Q,U,X,!1,null,null,null,null);const tt=Y.exports,et={props:{name:{type:String,required:!0}},data(){return{active:!0}},created(){this.$parent.tabs.push(this)}};var st=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"w-full"},[t._t("default")],2)},at=[],rt=i(et,st,at,!1,null,null,null,null);const lt=rt.exports,it={data(){return{active:0,tabs:[]}},methods:{classes(s){return this.active===s?"relative bg-gray-300 dark:bg-gray-800 -bottom-1px text-gray-800 dark:text-gray-300":"bg-gray-200 dark:bg-black hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"},selectTab(s){this.active=s,this.tabs.forEach((t,e)=>{t.active=e===s})}},mounted(){this.selectTab(0)}};var nt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex items-center space-x-1"},[t._l(t.tabs,function(a,r){return e("button",{staticClass:"flex rounded-t-lg px-4 py-2 text-sm md:text-base",class:t.classes(r),on:{click:function(l){return t.selectTab(r)}}},[t._v(t._s(a.name))])}),t._t("right")],2),e("div",{staticClass:"flex bg-gray-300 dark:bg-gray-800 p-2 md:p-4 w-full"},[t._t("default")],2)])},ct=[],ot=i(it,nt,ct,!1,null,null,null,null);const dt=ot.exports,u={computed:{...f("performance",["deck","view","window"])},methods:{getData(){axios.get(`${this.endpoint()}?deck=${this.deck}&view=${this.view}&window=${this.window}`).then(s=>{this.update(s.data)})}},mounted(){this.getData()},watch:{view(){this.getData()},window(){this.getData()}}},ut={props:{slug:{required:!0,type:String}},data:()=>({stats:[]}),mixins:[u],methods:{update(s){this.stats=s},endpoint(){return"/games/card-stats"}}};var pt=function(){var t=this,e=t._self._c;return e("div",[e("table",{staticClass:"text-sm"},[t._m(0),e("tbody",t._l(t.stats,function(a){return e("tr",{staticClass:"even:bg-gray-100 dark:even:bg-gray-800"},[e("td",{staticClass:"p-1"},[t._v(t._s(a.name))]),e("td",{staticClass:"text-right p-1"},[t._v(t._s(a.seen))]),e("td",{staticClass:"text-right p-1"},[t._v(t._s(a.blocked))]),e("td",{staticClass:"text-right p-1"},[t._v(t._s(a.pitched))]),e("td",{staticClass:"text-right p-1"},[t._v(t._s(a.played))])])}),0)])])},mt=[function(){var s=this,t=s._self._c;return t("thead",{staticClass:"bg-gray-100 dark:bg-gray-600"},[t("tr",[t("th",{staticClass:"text-left p-1"},[s._v("Name")]),t("th",{staticClass:"text-right p-1"},[s._v("Seen")]),t("th",{staticClass:"text-right p-1"},[s._v("Blocked")]),t("th",{staticClass:"text-right p-1"},[s._v("Pitched")]),t("th",{staticClass:"text-right p-1"},[s._v("Played")])])])}],ht=i(ut,pt,mt,!1,null,null,null,null);const ft=ht.exports,_t={extends:d,props:{slug:{required:!0,type:String}},mixins:[u,o],methods:{update(s){let t={labels:Object.keys(s.data).map(this.ucfirst),datasets:[{data:Object.values(s.data),backgroundColor:"rgb(6 182 212)"}]};this.renderChart(t,{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,fill:!1,scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0,steps:10,stepValue:10,max:100}}]},tooltips:{callbacks:{label(e){return" "+e.yLabel+"%"}}}})},endpoint(){return"/games/class-win-rate"}}},vt={extends:d,props:{slug:{required:!0,type:String}},mixins:[u,o],methods:{calcAvg(s,t){return Math.round(s/t*100*10)/10},update(s){let t=[this.calcAvg(s.wonFirst,s.totalFirst),this.calcAvg(s.wonSecond,s.totalSecond)],e=[this.calcAvg(s.totalFirst-s.wonFirst,s.totalFirst),this.calcAvg(s.totalSecond-s.wonSecond,s.totalSecond)],a=[(t[0]+t[1])/2,(e[0]+e[1])/2],r={labels:["Went first","Went second"],datasets:[{type:"line",label:"Either",borderColor:localStorage.getItem("darkMode")==="true"?"white":"black",data:a,fill:!1},{label:"Won",backgroundColor:"rgb(20 184 166)",data:t},{label:"Lost",backgroundColor:"rgb(249 115 22)",data:e}]};this.renderChart(r,{legend:{display:!0,position:this.$mq==="sm"?"top":"right"},scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0,steps:10,stepValue:10,max:100}}]},tooltips:{callbacks:{label(l){return" "+l.yLabel+"%"}}},responsive:!0,maintainAspectRatio:!1,fill:!1})},endpoint(){return"/games/overall-win-rate"}}},gt={extends:d,props:{slug:{required:!0,type:String}},mixins:[u,o],methods:{update(s){let t={labels:Object.values(s.data).map(e=>e.hero.name.split(",")[0]),datasets:[{data:Object.values(s.data).map(e=>e.winRate),backgroundColor:"rgb(220 38 38)"}]};this.renderChart(t,{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,fill:!1,scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0,steps:10,stepValue:10,max:100}}]},tooltips:{callbacks:{label(e){return" "+e.yLabel+"%"}}}})},endpoint(){return"/games/hero-win-rate"}}};const bt={props:{slug:{required:!0,type:String}},mixins:[u],data:()=>({winRate:0}),methods:{endpoint(){return"/games/win-rate"},update(s){s.total?this.winRate=(s.won/s.total*100).toFixed(1):this.winRate=s.total}}};var xt=function(){var t=this,e=t._self._c;return e("h1",{staticClass:"text-8xl text-center font-bold leading-none my-4 md:-mt-4"},[t._v(t._s(t.winRate)+"%")])},wt=[],Ct=i(bt,xt,wt,!1,null,"20b9b8e2",null,null);const yt=Ct.exports,kt={components:{CardStats:ft,ClassWinRate:_t,HeroWinRate:gt,FirstSecondWinRate:vt,Selector:y,SelectorItem:k,Tile:b,WinRate:yt},props:{deck:{required:!0,type:Object}},computed:{...f("performance",["view","window"])},methods:{...C("performance",["setDeck","setView","setWindow"])},created(){this.setDeck({deck:this.deck.slug}),this.deck.mine?this.setView({view:"me"}):this.setView({view:"community"})}};var $t=function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"flex mb-2 justify-end space-x-4"},[e("selector",{attrs:{width:150,title:"View",default:t.view},scopedSlots:t._u([{key:"items",fn:function(a){return[e("selector-item",{attrs:{value:"me",selected:a.selected},on:{"item-selected":r=>t.setView({view:r})}},[t._v("Mine")]),e("selector-item",{attrs:{value:"author",selected:a.selected},on:{"item-selected":r=>t.setView({view:r})}},[t._v("Deck author")]),e("selector-item",{attrs:{value:"community",selected:a.selected},on:{"item-selected":r=>t.setView({view:r})}},[t._v("Community")])]}}])}),e("selector",{attrs:{width:170,title:"Window",default:t.window},scopedSlots:t._u([{key:"items",fn:function(a){return[e("selector-item",{attrs:{value:30,selected:a.selected},on:{"item-selected":r=>t.setWindow({window:r})}},[t._v("Last 30 games")]),e("selector-item",{attrs:{value:100,selected:a.selected},on:{"item-selected":r=>t.setWindow({window:r})}},[t._v("Last 100 games")])]}}])})],1),e("div",{staticClass:"md:flex md:space-x-4"},[e("div",{staticClass:"space-y-4 md:w-2/3 mb-4"},[e("div",{staticClass:"md:flex md:space-x-4 space-y-4 md:space-y-0"},[e("tile",{staticClass:"w-full md:w-1/2",attrs:{title:"Win rate"}},[e("win-rate",{attrs:{slug:t.deck.slug}})],1),e("tile",{staticClass:"w-full md:w-1/2",attrs:{title:"First/second turn win rate"}},[e("first-second-win-rate",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{slug:t.deck.slug}})],1)],1),e("tile",{staticClass:"w-full",attrs:{title:"Win rate by class"}},[e("class-win-rate",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{slug:t.deck.slug}})],1),e("tile",{staticClass:"w-full",attrs:{title:"Win rate by hero"}},[e("hero-win-rate",{staticClass:"w-full h-200 md:h-180 p-2",attrs:{slug:t.deck.slug}})],1)],1),e("div",{staticClass:"md:w-1/3"},[e("tile",{attrs:{title:"Card stats"}},[e("card-stats",{attrs:{slug:t.deck.slug}})],1)],1)])])},Rt=[],At=i(kt,$t,Rt,!1,null,null,null,null);const Ot=At.exports,Dt={components:{DeckComposition:K,RawStats:tt,TabItem:lt,Tabs:dt,Performance:Ot},props:{deck:{required:!0,type:Object}},computed:{cards(){return this.deck.cards instanceof c?this.deck.cards:new c(this.deck.cards)}}};var St=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("tabs",[e("tab-item",{attrs:{name:"Composition"}},[e("deck-composition",{attrs:{deck:t.deck,cards:t.cards}})],1),e("tab-item",{attrs:{name:"Performance"}},[e("performance",{attrs:{deck:t.deck}})],1),e("tab-item",{attrs:{name:"Raw"}},[e("raw-stats",{attrs:{deck:t.deck,cards:t.cards}})],1)],1)],1)},jt=[],qt=i(Dt,St,jt,!1,null,null,null,null);const Wt=qt.exports,Bt={methods:{copyToClipboard(s,t){this.$copyText(s),this.addMessage({status:"success",message:t})},shareDeckViaText(s){const t=s.cards.weapons().all().map(l=>l.name).join(", "),e=s.cards.equipment().all().map(l=>l.name).join(", ");let a=this.shareLine("Deck build - via https://fabdb.net :")+this.shareLine("")+this.shareLine(this.deck.name+" ("+s.hero.name+")")+this.shareLine("")+this.shareLine("Weapons: "+t)+this.shareLine("Equipment: "+e)+this.shareLine(""),r=s.other;for(let l in r.all()){let p=r.all()[l],h="["+p.total+"] "+p.name;isNaN(p.stats.resource)||(h=h+" ("+this.ucfirst(this.colourToText(p.stats.resource))+")"),a=a+this.shareLine(h)}a=a+this.shareLine(""),a=a+this.shareLine("See the full deck at: https://fabdb.net/decks/"+this.deck.slug),this.copyToClipboard(a,"Deck build copied to clipboard.")},shareLine(s){return s+`
`}}};export{$ as D,v as G,Wt as M,Bt as S,g as T,m as a,lt as b,dt as c};
