import{n,c as l,m as r}from"./app.f266d440.js";const i={props:{layout:{type:String,default:"text"},title:{type:String},width:{type:Number}},data(){return{isOpen:!1,options:[],selected:null}},methods:{select(s){this.selected=s}}};var c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative text-sm xl:text-base"},[e.layout==="text"?t("button",{staticClass:"relative flex items-center overflow-hidden rounded-lg hover:bg-white dark:hover:bg-gray-600 leading-none px-2",class:{"bg-white dark:bg-gray-600":e.isOpen,"bg-gray-200 dark:bg-black":!e.isOpen,"z-75":e.isOpen},style:{width:e.width},on:{click:function(a){e.isOpen=!e.isOpen}}},[e._t("title",function(){return[t("span",{staticClass:"py-2"},[e._v(e._s(e.title))]),t("svg",{staticClass:"h-6 fill-current ml-auto",class:{"transition-all transform rotate-180":e.isOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]})],2):t("button",{staticClass:"relative flex items-center",class:{"z-75":e.isOpen},on:{click:function(a){e.isOpen=!e.isOpen}}},[e._t("title")],2),e.isOpen?t("button",{staticClass:"fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-50 w-full h-full cursor-default backdrop-blur-2",attrs:{type:"button"},on:{click:function(a){e.isOpen=!1}}}):e._e(),e.isOpen?t("div",{staticClass:"absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden shadow-lg",style:{width:e.width+"px"}},[e._t("items",null,{selected:e.selected})],2):e._e()])},o=[],d=n(i,c,o,!1,null,null,null,null);const u=d.exports,p={props:{selected:{required:!0},value:{required:!0}},methods:{select(){this.$parent.select(this.value)}}};var h=function(){var e=this,t=e._self._c;return t("button",{staticClass:"w-full text-base text-left px-4 py-1",class:e.value===e.selected?"bg-secondary text-white":"hover:bg-secondary hover:text-white",on:{click:function(a){return e.select()}}},[e._t("default")],2)},f=[],_=n(p,h,f,!1,null,null,null,null);const v=_.exports,m={components:{Icon:l,Selector:u,SelectorItem:v},props:{deck:{required:!0}},computed:{...r("session",["user"])},methods:{fabOnlineUrl(){let s=encodeURIComponent("https://fabdb.net/decks/build/"+this.deck.slug),e=encodeURIComponent("Testing "+this.deck.name),t=this.deck.visiblity?this.deck.visibility:"public";return`https://www.fleshandbloodonline.com/FaBOnline2/CreateGame.php?fabdb=${s}&user=${this.user.slug}&gameDescription=${e}&format=${this.deck.format}&visibility=${t}`}}};var b=function(){var e=this,t=e._self._c;return t("selector",{attrs:{width:170,layout:"icon"},scopedSlots:e._u([{key:"title",fn:function(){return[t("icon",{attrs:{size:6}},[t("path",{attrs:{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"}})])]},proxy:!0},{key:"items",fn:function(a){return[t("selector-item",{attrs:{value:"test",selected:a.selected}},[t("a",{staticClass:"flex items-center space-x-1",attrs:{href:e.fabOnlineUrl(),target:"_blank"}},[t("icon",{attrs:{size:4}},[t("path",{attrs:{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"}})]),t("span",[e._v("Play on Talishar")])],1)]),t("selector-item",{attrs:{value:"test",selected:a.selected}},[t("router-link",{staticClass:"flex items-center space-x-1 lg:hidden",attrs:{to:{name:"decks.test",params:{deck:e.deck.slug}}}},[t("icon",{attrs:{size:4}},[t("path",{attrs:{d:"M12.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM17.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.906a1.5 1.5 0 000-2.552L3.288 4.819z"}})]),t("span",[e._v("Deck tester")])],1),t("router-link",{staticClass:"items-center space-x-1 hidden lg:flex hover:text-gray-400 dark:hover:text-white",attrs:{to:{name:"decks.test.prepare",params:{deck:e.deck.slug}}}},[t("icon",{attrs:{size:4}},[t("path",{attrs:{d:"M12.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM17.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.906a1.5 1.5 0 000-2.552L3.288 4.819z"}})]),t("span",[e._v("Deck tester")])],1)],1)]}}])})},g=[],k=n(m,b,g,!1,null,null,null,null);const y=k.exports;export{y as P};