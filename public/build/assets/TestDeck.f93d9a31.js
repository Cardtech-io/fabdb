import{n,C as r,e as i,H as d,m as l}from"./app.f266d440.js";import{L as c}from"./LazyLoader.0379a251.js";import{V as o}from"./Viewable.04a8e729.js";const h={components:{CardImage:r},props:["card"],computed:{state:function(){return{"shadow-played":this.card.played,"shadow-pitched":this.card.pitched,"hover:shadow-black":!this.card.played&&!this.card.pitched,"shadow-black":this.showButtons}}},data(){return{showButtons:!1}},methods:{arsenal(){this.$emit("arsenaled",this.card,!0),this.card.arsenaled=!this.card.arsenaled,this.card.played=!1,this.card.pitched=!1},pitch(){this.card.played=!1,this.card.pitched=!this.card.pitched},play(){this.card.pitched=!1,this.card.played=!this.card.played},toggleButtons(){this.showButtons=!this.showButtons}}};var u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"deck-test-card relative rounded-lg sm:rounded-xl",class:t.state,on:{click:t.toggleButtons}},[e("card-image",{attrs:{card:t.card}}),e("div",{staticClass:"buttons w-full",class:{visible:t.showButtons,invisible:!t.showButtons}},[e("button",{staticClass:"appearance-none block w-1/3 bg-red-700 text-white text-sm rounded-lg py-2 px-3 mx-auto mb-1 leading-tight focus:outline-none hover:bg-red-500 shadow-lg",on:{click:t.play}},[t._v("Play")]),e("button",{staticClass:"appearance-none block w-1/3 bg-red-700 text-white text-sm rounded-lg py-2 px-3 mx-auto mb-1 leading-tight focus:outline-none hover:bg-red-500 shadow-lg",on:{click:t.pitch}},[t._v("Pitch")]),e("button",{staticClass:"appearance-none block w-1/3 bg-red-700 text-white text-sm rounded-lg py-2 px-3 mx-auto mb-1 leading-tight focus:outline-none hover:bg-red-500 shadow-lg",on:{click:t.arsenal}},[t._v("Arsenal")])])],1)},p=[],m=n(h,u,p,!1,null,null,null,null);const f=m.exports,w={components:{CardImage:r,Crumbs:i,DrawnCard:f,HeaderTitle:d},mixins:[o],computed:{...l("session",["user"]),cards:function(){return this.deck.cards},crumbs:function(){return[{text:"Home",link:"/"},{text:"Deck Builder",link:"/decks/build/"},{text:"Test "+this.deck.name}]},empty:function(){return!this.deckCards},pcWidth:function(){let a=4;return this.drawn.length>4&&(a=this.drawn.length),this.drawn.length>6&&(a=4),"sm:w-1/"+a}},data(){return{arsenal:null,deck:null,deckCards:[],drawn:[],drawnCards:[]}},methods:{addToArsenal:function(a){this.arsenal=a},draw:function(a){if(a>1&&(this.drawn=this.drawn.filter(s=>!(s.played||s.pitched||s.arsenaled))),this.drawnCards.length>=this.deckCards.length){this.drawnCards=[];return}let t=a==1?0:this.drawn.length;for(var e=t;e<a;e++){if(this.drawnCards.length>=this.deckCards.length)continue;const s=this.randomCard();this.drawnCards.push(s.identifier),this.drawn.push(s)}},randomCard:function(){const a=this.deckCards.filter(t=>!this.drawnCards.includes(t.identifier));return a[Math.floor(Math.random()*a.length)]},removeFromArsenal:function(){this.arsenal=null},shuffle:function(a){for(var t=a.length,e,s;t!==0;)s=Math.floor(Math.random()*t),t-=1,e=a[t],a[t]=a[s],a[s]=e;return a}},metaInfo(){return{title:this.deck?"Deck builder - Test deck ("+this.deck.name+")":"Deck builder - Test deck"}},extends:c((a,t)=>{axios.get("/decks/"+a.params.deck).then(e=>{t(function(){e.data.cards.forEach(s=>{s.arsenaled=!1,s.pitched=!1,s.played=!1}),this.deck=e.data,this.deckCards=this.deck.cards.filter(s=>!s.keywords.includes("equipment")&&!s.keywords.includes("weapon")&&!s.keywords.includes("hero"))})})})};var g=function(){var t=this,e=t._self._c;return e("div",[e("header-title",{attrs:{title:"Test Deck"}}),e("div",{staticClass:"bg-primary text-white font-serif uppercase"},[e("div",{staticClass:"container sm:mx-auto p-4 flex"},[e("div",{staticClass:"flex-1"},[e("crumbs",{attrs:{crumbs:t.crumbs}})],1)])]),e("div",{staticClass:"bg-gray-200"},[e("div",{staticClass:"container sm:mx-auto py-8 px-4 text-center"},[e("ol",{staticClass:"flex -mx-2 sm:-mx-4 mb-4 items-stretch"},[e("li",{staticClass:"p-2 sm:p-4 w-1/2 sm:w-1/3 lg:w-1/4"},[e("card-image",{attrs:{card:t.hero}})],1),e("li",{staticClass:"hidden sm:block sm:w-1/3 lg:w-1/2 text-center p-4 pt-24"},[e("button",{staticClass:"inline-block appearance-none block w-full rounded-lg py-3 px-4 button-primary",on:{click:function(s){return t.draw(1)}}},[t._v("Draw 1")]),e("button",{staticClass:"inline-block appearance-none block w-full rounded-lg py-3 px-4 button-primary mt-2",on:{click:function(s){return t.draw(t.hero.stats.intellect)}}},[t._v("Draw "+t._s(t.hero.stats["hand-size"]))])]),e("li",{staticClass:"p-2 sm:p-4 w-1/2 sm:w-1/3 lg:w-1/4"},[t.arsenal?e("div",[e("card-image",{attrs:{card:t.arsenal,clickHandler:t.removeFromArsenal}})],1):e("div",{staticClass:"bg-gray-300 font-serif text-xl uppercase rounded-lg sm:rounded-xl h-full align-middle pt-24"},[t._v("Arsenal")])])]),e("div",{staticClass:"mb-4 flex sm:hidden"},[e("button",{staticClass:"appearance-none inline-block w-1/2 rounded-l-lg py-3 px-4 button-primary disabled:opacity-50",on:{click:function(s){return t.draw(1)}}},[t._v("Draw 1")]),e("button",{staticClass:"appearance-none inline-block w-1/2 rounded-r-lg py-3 px-4 button-primary disabled:opacity-50",on:{click:function(s){return t.draw(4)}}},[t._v("Draw "+t._s(t.hero.stats["hand-size"]))])]),t.drawn.length?e("ol",{staticClass:"flow-root -mx-2 sm:-mx-4"},t._l(t.drawn,function(s){return e("li",{staticClass:"float-left p-2 sm:p-4 w-1/2 sm:w-1/4",class:t.pcWidth},[e("drawn-card",{attrs:{card:s},on:{arsenaled:function(v){return t.addToArsenal(s)}}})],1)}),0):e("div",{staticClass:"text-center"},[t._v(" There are no cards in hand. ")])])])],1)},b=[],k=n(w,g,b,!1,null,null,null,null);const y=k.exports;export{y as default};
