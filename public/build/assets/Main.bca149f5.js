import{C as i}from"./Card.f220136b.js";import{H as o}from"./HeroSelector.ab7215ba.js";import{n as a,I as n,l}from"./app.18971425.js";import{H as c}from"./HeroAvatar.d8520f8c.js";import{T as u}from"./Tracker.88ce54ac.js";import"./Models.cc4dbaf5.js";const p="/build/assets/resource.bca42b67.png",f={props:{player:{required:!0,type:Object},resource:{required:!0,type:Number}},computed:{resourceClass(){return this.resource>0&&this.resource<=this.player.resource?"shadow-highlight":"opacity-50"}},methods:{pitch(){this.player.resource=this.resource}}};var h=function(){var e=this,t=e._self._c;return t("button",{staticClass:"flex flex-col text-center items-center my-1 focus-none mr-3",on:{click:function(r){return e.pitch()}}},[t("img",{staticClass:"rounded-full",class:e.resourceClass,attrs:{src:p,width:"58"}}),t("span",{staticClass:"font-serif font-bold mt-1 text-xl",class:e.player.resource===e.resource?"text-blue-500":"text-gray-300"},[e._v(e._s(e.resource))])])},y=[],m=a(f,h,y,!1,null,null,null,null);const d=m.exports,_={props:{player:{required:!0,type:Object},players:Number},mixins:[n],components:{HeroAvatar:c,Resource:d},data(){return{life:Number(this.player.life),lastSwipe:null}},computed:{lifeClass(){return this.life>this.player.maxLife?"text-green-400":this.life===0?"text-red-500":"text-white"}},methods:{heal(){this.life+=1},hurt(){this.life>0?this.life-=1:this.$emit("player-destroyed")},swipe(s){if(this.lastSwipe!==null){let e=s.changedTouches[0].clientY,t=this.lastSwipe.clientY;this.player.first?e<t-10?(this.heal(),this.lastSwipe=s.changedTouches[0]):e>t+10&&(this.hurt(),this.lastSwipe=s.changedTouches[0]):e>t+10?(this.heal(),this.lastSwipe=s.changedTouches[0]):e<t-10&&(this.hurt(),this.lastSwipe=s.changedTouches[0])}else this.lastSwipe=s.changedTouches[0]}},mounted(){this.$eventHub.$on("life-counter.reset",()=>{this.life=Number(this.player.maxLife)})}};var x=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"touch",rawName:"v-touch:moving",value:e.swipe,expression:"swipe",arg:"moving"}],staticClass:"flex-grow flex flex-col w-full"},[t("div",{staticClass:"flex mx-auto z-100 my-1",style:{backgroundImage:"url("+e.heroProfile(e.player.hero,160,!0)+")",backgroundRepeat:"no-repeat",backgroundPosition:"center 20px"}},[t("button",{staticClass:"text-white px-8 text-4xl",on:{click:function(r){return e.hurt()}}},[e._v("-")]),t("h2",{staticClass:"font-serif uppercase text-12xl text-center",class:e.lifeClass,staticStyle:{"text-shadow":"2px 2px 3px #000000"}},[e._v(e._s(e.life))]),t("button",{staticClass:"text-white px-8 text-4xl",on:{click:function(r){return e.heal()}}},[e._v("+")])]),t("div",{staticClass:"flex justify-center px-4 pr-2 py-1"},[t("resource",{attrs:{resource:0,player:e.player}}),t("resource",{attrs:{resource:1,player:e.player}}),t("resource",{attrs:{resource:2,player:e.player}}),t("resource",{attrs:{resource:3,player:e.player}})],1)])},v=[],g=a(_,x,v,!1,null,null,null,null);const b=g.exports;const C={components:{HeroSelector:o,Player:b},data(){return{players:[],requirePlayers:!0,timer:null}},computed:{firstPlayer(){return this.players[0]},secondPlayer(){return this.players[1]}},methods:{chooseHeroes(){this.players=[],this.requirePlayers=!0},logEvent(){this.timer&&this.timer.diff(l(),"minutes")>=5&&(u.track("Game","Completed"),this.timer=null)},newPlayer(s){let e={maxLife:s.stats.life,life:s.stats.life,resource:0,first:!this.players.length,hero:new i(s)};this.players.push(e),this.players.length===2&&(this.requirePlayers=!1)},reset(){this.$eventHub.$emit("life-counter.reset"),this.timer=l()},skip(){this.requirePlayers=!1}},watch:{requirePlayers(s){s?this.timer=null:this.timer=l()}}};var w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"no-dtz fixed top-0 right-0 bottom-0 left-0 flex flex-col overflow-y-scroll bg-semi-black"},[e.requirePlayers?t("div",{staticClass:"p-4"},[t("div",{staticClass:"flex"},[t("h1",{staticClass:"text-white font-serif uppercase text-2xl"},[e._v("Select Player "+e._s(e.players.length+1))]),e.players.length===1?t("button",{staticClass:"button-primary ml-auto py-3 px-4 rounded",on:{click:function(r){return e.skip()}}},[e._v("Skip")]):e._e()]),t("hero-selector",{staticClass:"text-gray-300 shadow-lg",on:{"hero-selected":e.newPlayer}})],1):t("div",{staticClass:"w-full flex flex-col h-full"},[t("div",{staticClass:"h-full flex flex-col items-center"},[e.players.length===2?t("player",{staticClass:"transform rotate-180",attrs:{player:e.secondPlayer,players:e.players.length},on:{"player-destroyed":e.logEvent}}):e._e(),t("div",{staticClass:"flex items-center"},[t("button",{staticClass:"button-primary py-3 px-4 pb-2 font-serif uppercase rounded-l-lg",on:{click:function(r){return e.reset()}}},[e._v("Reset")]),t("button",{staticClass:"button-primary py-3 px-4 pb-2 font-serif uppercase",on:{click:function(r){return e.chooseHeroes()}}},[e._v("Heroes")]),t("router-link",{staticClass:"button-secondary py-3 px-4 pb-2 font-serif uppercase rounded-r-lg",attrs:{to:{name:"home"}}},[e._v("FaB DB")])],1),t("player",{attrs:{player:e.firstPlayer,players:e.players.length},on:{"player-destroyed":e.logEvent}})],1)])])},$=[],k=a(C,w,$,!1,null,"e68f696a",null,null);const N=k.exports;export{N as default};
