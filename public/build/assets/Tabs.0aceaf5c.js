import{B as h}from"./Rulings.d140ea56.js";import{_ as l,n as c}from"./app.f266d440.js";const x={extends:h,props:{cards:{required:!0,type:Object},stat:{required:!0,type:String},strategy:{required:!0,type:String,validator(t){return["total","length"].indexOf(t)!==-1}}},methods:{colours(t){if(this.stat==="resource"){let s=[];return t.indexOf("1")!==-1&&s.push("239,68,68"),t.indexOf("2")!==-1&&s.push("251,191,37"),t.indexOf("3")!==-1&&s.push("96,165,250"),s}let e=[];for(let s=0;s<t.length;s++){let a=180-180*(s/t.length),i=s/t.length*255;e.push([i+", "+a+", 30"])}return e},update(t){let e=this.values(t),s=this.stat==="resource"?"Pitch":"Cost",a=this.colours(l.keys(e)),i={labels:l.keys(e).map(r=>this.stat==="resource"?"Pitch "+r:"Cost "+r),datasets:[{label:s,backgroundColor:a.map(r=>"rgba("+r+", 0.6)"),borderColor:a.map(r=>"rgba("+r+", 1)"),borderWidth:1,data:l.values(e),barPercentage:.6}]};this.renderChart(i,{legend:{display:!0,position:"bottom"},responsive:!0,maintainAspectRatio:!1,fill:!1,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{stepSize:10,suggestedMin:0}}]}})},values(t){return l(t.all()).groupBy(e=>e.stats[this.stat]||0).mapValues(e=>this.strategy==="total"?e.reduce((s,a)=>s+a.total,0):e.length).value()}},watch:{cards(t){this.update(t)}},mounted(){this.update(this.cards)}},k={methods:{copyToClipboard(t,e){this.$copyText(t),this.addMessage({status:"success",message:e})},shareDeckViaText(t){const e=t.cards.weapons().all().map(r=>r.name).join(", "),s=t.cards.equipment().all().map(r=>r.name).join(", ");let a=this.shareLine("Deck build - via https://fabdb.net :")+this.shareLine("")+this.shareLine(this.deck.name+" ("+t.hero.name+")")+this.shareLine("")+this.shareLine("Weapons: "+e)+this.shareLine("Equipment: "+s)+this.shareLine(""),i=t.other;for(let r in i.all()){let n=i.all()[r],o="["+n.total+"] "+n.name;isNaN(n.stats.resource)||(o=o+" ("+this.ucfirst(this.colourToText(n.stats.resource))+")"),a=a+this.shareLine(o)}a=a+this.shareLine(""),a=a+this.shareLine("See the full deck at: https://fabdb.net/decks/"+this.deck.slug),this.copyToClipboard(a,"Deck build copied to clipboard.")},shareLine(t){return t+`
`}}},u={props:{name:{type:String,required:!0}},data(){return{active:!0}},created(){this.$parent.tabs.push(this)}};var d=function(){var e=this,s=e._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}]},[e._t("default")],2)},p=[],f=c(u,d,p,!1,null,null,null,null);const T=f.exports,g={data(){return{active:0,tabs:[]}},methods:{classes(t){return this.active===t?"relative bg-gray-300 dark:bg-gray-800 -bottom-1px text-gray-800 dark:text-gray-300":"bg-gray-200 dark:bg-black hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"},selectTab(t){this.active=t,this.tabs.forEach((e,s)=>{e.active=s===t})}},mounted(){this.selectTab(0)}};var b=function(){var e=this,s=e._self._c;return s("div",[s("div",{staticClass:"flex space-x-1"},[e._l(e.tabs,function(a,i){return s("button",{staticClass:"flex rounded-t-lg px-4 py-2",class:e.classes(i),on:{click:function(r){return e.selectTab(i)}}},[e._v(e._s(a.name))])}),e._t("right")],2),s("div",{staticClass:"bg-gray-300 dark:bg-gray-800 p-4"},[e._t("default")],2)])},m=[],_=c(g,b,m,!1,null,null,null,null);const C=_.exports;export{x as D,k as S,T,C as a};