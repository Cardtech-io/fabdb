import{b as f,n as i,i as o,B as v,H as _,m as g}from"./app.881f611a.js";import{M as u}from"./Models.cc4dbaf5.js";import{D as h}from"./Deck.75e0f0ba.js";import{C as p}from"./Cards.3e629bf5.js";import{C as m}from"./Colour.489d3b0d.js";import"./Card.f220136b.js";const k={find(s){return axios.get("/decks/"+s).then(t=>u.hydrate(t.data,h))},findWithWidth(s,t){return axios.get("/decks/"+s+"?width="+t).then(e=>u.hydrate(e.data,h))}},l={history:[],write(s,t){this.history.push({action:s,message:t})}},c={mixins:[f],methods:{drag(s,t,e){const r=this.$parent[t][e],a=new Image;a.src=r.image,s.dataTransfer.dropEffect="move",s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("from",t),s.dataTransfer.setData("index",e),s.dataTransfer.setDragImage(a,100,139)},drop(s,t){const e=s.dataTransfer.getData("from");let r=s.dataTransfer.getData("index");r===void 0&&(r=this.$parent[e].length-1),this.send(r,e,t)},send(s,t,e){let r=this.$parent[t].splice(s,1)[0];this.$parent[e].push(r);let a="";switch(e){case"pitch":a=this.ucfirst(e)+'ed "'+r.name+'".';break;case"banished":a='Banished "'+r.name+'".';break;case"hand":a='Moved "'+r.name+'" back to hand.';break;case"arsenal":case"graveyard":a='Moved "'+r.name+'" to '+e+".";break}l.write("move-card",a)}}},b={props:{deck:{type:Array,required:!0},cardBack:{type:String,required:!0}},mixins:[c],data:()=>({capture:!1}),computed:{total(){let s=Math.ceil(this.deck.length/20);return s>4?4:s}},methods:{draw(){let s=this.deck.pop();!s||(this.$parent.hand.push(s),l.write("draw",'Drew "'+s.name+'"'))},drawMany(s){for(let t=0;t<s;t++)this.draw()},drawNumber(s){s.stopPropagation(),!(isNaN(s.key)||!this.capture)&&this.drawMany(s.key)},position(s){return{left:s*2+"px",top:s*2+"px"}}},mounted(){document.addEventListener("keyup",this.drawNumber),this.$eventHub.$on("end-turn",()=>{let s=this.$parent.hero.stats.intellect,t=this.$parent.hand.length,e=s-t;e>0&&this.drawMany(e)})}};var y=function(){var t=this,e=t._self._c;return t.deck.length?e("button",{staticClass:"w-full h-full relative",on:{click:function(r){return r.preventDefault(),t.draw.apply(null,arguments)},keyup:function(r){return r.preventDefault(),t.drawNumber.apply(null,arguments)},mouseenter:function(r){r.preventDefault(),t.capture=!0},mouseleave:function(r){r.preventDefault(),t.capture=!1},dragstart:function(r){return t.drag(r,"deck",t.deck.length-1)}}},[e("img",{staticClass:"z-0 invisible",attrs:{src:t.cardBack}}),t._l(t.total,function(r,a){return e("img",{staticClass:"absolute rounded-card border border-gray-200 z-25",style:t.position(a),attrs:{src:t.cardBack}})}),e("div",{staticClass:"absolute z-50 w-full flex justify-center text-white text-center font-serif uppercase text-2xl top-2/3"},[e("div",{staticClass:"flex justify-center items-center inline-block bg-semi-black rounded-full relative h-16 w-16",staticStyle:{left:"4px"}},[e("span",[t._v(" "+t._s(t.deck.length)+" ")])])])],2):t._e()},x=[],w=i(b,y,x,!1,null,null,null,null);const C=w.exports,$={props:{hand:{type:Array,required:!0}},mixins:[c],data:()=>({focused:null,images:[]}),methods:{setFocused(s){this.focused=s},classes(s){return{"opacity-30 z-50":this.focused!==null&&this.focused!==s,"opacity-0 z-0":this.focused===null||this.focused===s}},transform(s){let t=this.hand.length;if(t===1)return;let e=t*10>60?60/t:10,a=-((t-1)*e/2)+s*e,n=Math.abs(a)*(Math.abs(a)*.22);return{transform:"rotate("+a+"deg)",marginTop:n+"px"}}},mounted(){this.$eventHub.$on("end-turn",()=>{this.focused=null})}};var D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("div",{staticClass:"relative w-full flex justify-center items-start -space-x-10 my-8 min-h-96",on:{drop:function(r){return r.preventDefault(),t.drop(r,"hand")},dragover:function(r){r.preventDefault()},dragenter:function(r){r.preventDefault()}}},t._l(t.hand,function(r,a){return e("div",{staticClass:"relative z-0 w-200 hover:z-25 cursor-pointer",style:t.transform(a),on:{mouseover:function(n){return t.setFocused(a)},mouseout:function(n){return t.setFocused(null)}}},[e("card-image",{staticClass:"relative z-25",attrs:{card:r,draggable:""},nativeOn:{dragstart:function(n){return t.drag(n,"hand",a)},dragend:function(n){return t.setFocused(null)},click:function(n){return t.send(a,"hand","graveyard")}}}),e("div",{staticClass:"transition duration-300 absolute top-0 bottom-0 w-full bg-gray-200 dark:bg-gray-900 rounded-card",class:t.classes(a)})],1)}),0)])},z=[],T=i($,D,z,!1,null,null,null,null);const M=T.exports,H={data:()=>({history:l.history,open:!1}),methods:{toggle(){this.open=!this.open}}};var j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"absolute bottom-0 right-0"},[t.open?e("div",{staticClass:"transition flex flex-col h-96 -mt-96 -ml-40 mb-4 overflow-hidden w-56 bg-gray-100 rounded-lg shadow-lg z-100",class:{"opacity-100":t.open,"opacity-0":!t.open}},[e("header",{staticClass:"relative bg-primary px-4 py-2 text-center font-serif uppercase text-white z-50"},[t._v(" History ")]),e("div",{staticClass:"relative flex-grow py-2"},[e("div",{staticClass:"absolute bottom-0 w-full space-y-1 z-25"},t._l(t.history,function(r){return e("div",{staticClass:"px-4 odd:bg-black"},[t._v(" "+t._s(r.message)+" ")])}),0)])]):t._e(),e("button",{staticClass:"transition duration-300 transform bg-primary hover:bg-secondary rounded-full h-16 w-16 flex justify-center items-center text-white shadow-lg hover:scale-110",on:{click:t.toggle}},[e("svg",{staticClass:"h-10 w-10",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})])])])},B=[],F=i(H,j,B,!1,null,null,null,null);const S=F.exports,q={props:{pile:{type:String,required:!0},name:{type:String,required:!0}},mixins:[c],computed:{top4(){return this.stack.slice(-4)},stack(){return this.$parent[this.pile]}},methods:{position(s){return{left:s*2+"px",top:s*2+"px"}}}};var R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",on:{drop:function(r){return r.preventDefault(),t.drop(r,t.pile)},dragover:function(r){r.preventDefault()},dragenter:function(r){r.preventDefault()}}},[t.stack.length?e("div",{staticClass:"w-full h-full relative"},[t._l(t.top4,function(r,a){return e("card-image",{key:r.identifier+a,staticClass:"absolute rounded-card border border-gray-200 z-20",style:t.position(a),attrs:{card:r,draggable:""},nativeOn:{dragstart:function(n){return t.drag(n,t.pile,a)},click:function(n){return t.send(a,t.pile,"hand")}}})}),e("div",{staticClass:"absolute z-50 w-full flex justify-center text-white text-center font-serif uppercase text-2xl top-2/3"},[e("div",{staticClass:"flex justify-center items-center inline-block bg-semi-black rounded-full relative h-12 w-12",staticStyle:{left:"4px"}},[e("span",[t._v(" "+t._s(t.stack.length)+" ")])])])],2):e("div",{staticClass:"bg-gray-300 dark:bg-gray-800 font-serif text-xl uppercase rounded-card h-full pt-32 text-center"},[t._v(t._s(t.name))])])},I=[],P=i(q,R,I,!1,null,null,null,null);const A=P.exports;class d{constructor(t){this.deck=t,this.mainDeck=t.cards.other(),this.sideboard=t.sideboard.other(),this.hero=t.hero,this.slug=t.slug}move(t,e,r){r.add(t),e.remove(t)}hydrate(){this.mainDeck=this.mainDeck.hydrate(),this.sideboardStack=this.sideboard.hydrate()}}const N={name:"deck.play",props:{tester:{type:d,required:!0}},components:{Deck:C,Hand:M,History:S,Stack:A},data(){return{arsenal:[],banished:[],deck:[],graveyard:[],hand:[],hero:this.tester.hero,imageCache:[],pitch:[]}},methods:{endTurn(){for(;this.pitch.length;){let s=this.pitch.pop();this.deck.unshift(s),l.write("move-card",'Moved "'+s.name+'" to bottom of deck.')}this.$eventHub.$emit("end-turn")},preload(){this.imageCache=[];for(let s in this.deck){let t=new Image(200);t.src=this.deck[s].image,this.imageCache.push(t)}},reset(){this.deck=o.shuffle(this.tester.mainDeck.hydrate().cards),this.banished=[],this.graveyard=[],this.pitch=[],this.hand=[],this.arsenal=[]}},mounted(){this.reset(),this.preload()}};var O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[e("div",{staticClass:"flex justify-center items-stretch space-x-4"},[e("div",{staticClass:"w-200"},[e("stack",{attrs:{pile:"banished",name:"Banished"}})],1),e("div",{staticClass:"w-200"},[e("stack",{attrs:{pile:"arsenal",name:"Arsenal"}})],1),e("div",{staticClass:"pr-4"},[e("div",{staticClass:"w-200"},[e("card-image",{staticClass:"h-full",attrs:{card:t.hero}})],1)]),e("div",{staticClass:"pl-4"},[e("div",{staticClass:"w-200"},[e("deck",{staticClass:"cursor-pointer",attrs:{deck:t.deck,"card-back":t.tester.deck.cardBackImage}})],1)]),e("div",{staticClass:"w-200"},[e("stack",{attrs:{pile:"pitch",name:"Pitched"}})],1),e("div",{staticClass:"w-200"},[e("stack",{attrs:{pile:"graveyard",name:"Graveyard"}})],1)]),e("hand",{attrs:{hand:t.hand}}),e("div",{staticClass:"relative -top-20 flex justify-center space-x-4"},[e("button",{staticClass:"transition duration-200 transform bg-secondary hover:bg-red-500 rounded-full h-12 w-12 flex justify-center items-center text-white shadow-lg hover:scale-110",on:{click:function(r){t.$parent.step="prepare"}}},[e("svg",{staticClass:"h-7 w-7",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}})])]),e("button",{staticClass:"transition duration-200 transform bg-primary hover:bg-black rounded-full px-8 justify-center items-center text-white shadow-lg hover:scale-110",on:{click:t.endTurn}},[t._v(" End turn ")]),e("button",{staticClass:"transition duration-200 transform bg-secondary hover:bg-red-500 rounded-full h-12 w-12 flex justify-center items-center text-white shadow-lg hover:scale-110",on:{click:t.reset}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}})])])])],1)},V=[],W=i(N,O,V,!1,null,null,null,null);const E=W.exports;const G={props:{stack:{required:!0,type:Object},handler:{required:!0,type:Function}},components:{Colour:m}};var L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded border border-gray-400 p-4 pb-3"},[t.stack.total()?e("div",t._l(t.stack,function(r){return e("div",{staticClass:"group flex items-center bg-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-auto rounded-lg text-base mb-1 cursor-pointer",on:{click:function(a){return t.handler(r)}}},[t.$slots.left?e("div",{staticClass:"pl-4"},[e("icon",{staticClass:"group-hover:text-gray-500",attrs:{size:5}},[t._t("left")],2)],1):t._e(),e("div",{staticClass:"pl-4"},[r.stats.resource?e("colour",{staticClass:"mr-2",attrs:{resource:r.stats.resource}}):t._e()],1),e("div",{staticClass:"px-2 py-1"},[t._v(t._s(r.name)+" ("+t._s(r.total)+")")]),t.$slots.right?e("div",{staticClass:"px-4 ml-auto"},[e("icon",{staticClass:"group-hover:text-gray-500",attrs:{size:5}},[t._t("right")],2)],1):t._e()])}),0):e("div",{staticClass:"text-base pb-1"},[t._v(" There are no cards in this stack. ")])])},J=[],K=i(G,L,J,!1,null,"45046bdc",null,null);const Q=K.exports,U={name:"deck.prepare",props:{tester:{type:d,required:!0}},components:{Colour:m,DeckPreparer:Q},data(){return{mainDeck:null,deckTotal:0,sideboard:null}},methods:{move(s,t){return e=>{this.tester.move(e,s,t),this.refresh()}},refresh(){this.mainDeck=new p(o.sortBy(this.tester.mainDeck.all(),s=>s.name)),this.sideboard=new p(o.sortBy(this.tester.sideboard.all(),s=>s.name)),this.deckTotal=this.mainDeck.total()}},created(){this.refresh()}};var X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},[e("div",{staticClass:"w-1/3 mx-4"},[e("h2",{staticClass:"uppercase font-serif text-xl mb-2"},[t._v("Deck "),e("span",{staticClass:"text-gray-400 ml-1"},[t._v("(")]),e("span",{class:{"text-red-500":t.deckTotal<60}},[t._v(t._s(t.deckTotal))]),e("span",{staticClass:"text-gray-400"},[t._v(")")])]),e("deck-preparer",{attrs:{stack:t.mainDeck,handler:t.move(t.tester.mainDeck,t.tester.sideboard)},scopedSlots:t._u([{key:"right",fn:function(){return[e("path",{attrs:{d:"M10 7H2v6h8v5l8-8-8-8v5z"}})]},proxy:!0}])})],1),e("div",{staticClass:"w-1/3 mx-4"},[e("h2",{staticClass:"uppercase font-serif text-xl mb-2"},[t._v("Sideboard "),e("span",{staticClass:"text-gray-400 ml-1"},[t._v("(")]),t._v(t._s(t.tester.sideboard.total())),e("span",{staticClass:"text-gray-400"},[t._v(")")])]),e("deck-preparer",{attrs:{stack:t.sideboard,handler:t.move(t.tester.sideboard,t.tester.mainDeck)},scopedSlots:t._u([{key:"left",fn:function(){return[e("path",{attrs:{d:"M10 13h8V7h-8V2l-8 8 8 8v-5z"}})]},proxy:!0}])})],1),e("div",{staticClass:"w-1/5 mx-4"},[e("card-image",{attrs:{card:t.tester.hero}}),e("button",{staticClass:"flex w-full mt-4 py-3 px-4 rounded-full button-primary items-center",on:{click:function(r){t.$parent.step="play"}}},[e("span",[t._v("Ready (Test!)")]),e("icon",{staticClass:"ml-auto",attrs:{size:5}},[e("path",{attrs:{d:"M10 7H2v6h8v5l8-8-8-8v5z"}})])],1)],1)])},Y=[],Z=i(U,X,Y,!1,null,null,null,null);const tt=Z.exports,et={components:{Breadcrumbs:v,HeaderTitle:_,Play:E,Prepare:tt},mixins:[f],data(){return{deck:null,step:"prepare"}},computed:{...g("session",["premium"]),crumbs:function(){return[{text:"Home",link:"/"},{text:"Deck Builder",link:"/decks/mine"},{text:"Test "+this.deck.name}]},tester(){return new d(this.deck)}},methods:{async load(){let s=await k.findWithWidth(this.$route.params.deck,200);s.cards.each(t=>{let e=s.sideboard.find(t);e&&(t.total=t.total-e.total)}),this.deck=s}},mounted(){this.load()}};var st=function(){var t=this,e=t._self._c;return t.deck?e("div",[e("header-title",{attrs:{title:"Test Deck"}}),e("breadcrumbs",{attrs:{crumbs:t.crumbs}}),e("div",{staticClass:"main-body"},[e("div",{staticClass:"container py-8 sm:mx-auto"},[e(t.step,{tag:"component",attrs:{tester:t.tester}})],1)])],1):t._e()},rt=[],at=i(et,st,rt,!1,null,null,null,null);const ut=at.exports;export{ut as default};
