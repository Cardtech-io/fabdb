import{m as G,o as H,n as D,B as M,H as U}from"./app.d4472289.js";var h={},l=function(){var s=/\blang(?:uage)?-([\w-]+)\b/i,e=0,t=h.Prism={manual:h.Prism&&h.Prism.manual,disableWorkerMessageHandler:h.Prism&&h.Prism.disableWorkerMessageHandler,util:{encode:function(a){return a instanceof _?new _(a.type,t.util.encode(a.content),a.alias):t.util.type(a)==="Array"?a.map(t.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++e}),a.__id},clone:function(a,r){var i=t.util.type(a);switch(r=r||{},i){case"Object":if(r[t.util.objId(a)])return r[t.util.objId(a)];var o={};r[t.util.objId(a)]=o;for(var n in a)a.hasOwnProperty(n)&&(o[n]=t.util.clone(a[n],r));return o;case"Array":if(r[t.util.objId(a)])return r[t.util.objId(a)];var o=[];return r[t.util.objId(a)]=o,a.forEach(function(u,f){o[f]=t.util.clone(u,r)}),o}return a}},languages:{extend:function(a,r){var i=t.util.clone(t.languages[a]);for(var n in r)i[n]=r[n];return i},insertBefore:function(a,r,i,n){n=n||t.languages;var o=n[a];if(arguments.length==2){i=arguments[1];for(var u in i)i.hasOwnProperty(u)&&(o[u]=i[u]);return o}var f={};for(var c in o)if(o.hasOwnProperty(c)){if(c==r)for(var u in i)i.hasOwnProperty(u)&&(f[u]=i[u]);f[c]=o[c]}return t.languages.DFS(t.languages,function(m,y){y===n[a]&&m!=a&&(this[m]=f)}),n[a]=f},DFS:function(a,r,i,n){n=n||{};for(var o in a)a.hasOwnProperty(o)&&(r.call(a,o,a[o],i||o),t.util.type(a[o])==="Object"&&!n[t.util.objId(a[o])]?(n[t.util.objId(a[o])]=!0,t.languages.DFS(a[o],r,null,n)):t.util.type(a[o])==="Array"&&!n[t.util.objId(a[o])]&&(n[t.util.objId(a[o])]=!0,t.languages.DFS(a[o],r,o,n)))}},plugins:{},highlightAll:function(a,r){t.highlightAllUnder(document,a,r)},highlightAllUnder:function(a,r,i){var n={callback:i,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",n);for(var o=n.elements||a.querySelectorAll(n.selector),u=0,f;f=o[u++];)t.highlightElement(f,r===!0,n.callback)},highlightElement:function(a,r,i){for(var n,o,u=a;u&&!s.test(u.className);)u=u.parentNode;u&&(n=(u.className.match(s)||[,""])[1].toLowerCase(),o=t.languages[n]),a.className=a.className.replace(s,"").replace(/\s+/g," ")+" language-"+n,a.parentNode&&(u=a.parentNode,/pre/i.test(u.nodeName)&&(u.className=u.className.replace(s,"").replace(/\s+/g," ")+" language-"+n));var f=a.textContent,c={element:a,language:n,grammar:o,code:f};if(t.hooks.run("before-sanity-check",c),!c.code||!c.grammar){c.code&&(t.hooks.run("before-highlight",c),c.element.textContent=c.code,t.hooks.run("after-highlight",c)),t.hooks.run("complete",c);return}if(t.hooks.run("before-highlight",c),r&&h.Worker){var m=new Worker(t.filename);m.onmessage=function(y){c.highlightedCode=y.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},m.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(a,r,i){var n={code:a,grammar:r,language:i};return t.hooks.run("before-tokenize",n),n.tokens=t.tokenize(n.code,n.grammar),t.hooks.run("after-tokenize",n),_.stringify(t.util.encode(n.tokens),n.language)},matchGrammar:function(a,r,i,n,o,u,f){var c=t.Token;for(var m in i)if(!(!i.hasOwnProperty(m)||!i[m])){if(m==f)return;var y=i[m];y=t.util.type(y)==="Array"?y:[y];for(var S=0;S<y.length;++S){var p=y[S],O=p.inside,$=!!p.lookbehind,I=!!p.greedy,P=0,R=p.alias;if(I&&!p.pattern.global){var z=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,z+"g")}p=p.pattern||p;for(var b=n,v=o;b<r.length;v+=r[b].length,++b){var k=r[b];if(r.length>a.length)return;if(!(k instanceof c)){if(I&&b!=r.length-1){p.lastIndex=v;var g=p.exec(a);if(!g)break;for(var w=g.index+($?g[1].length:0),T=g.index+g[0].length,C=b,x=v,N=r.length;C<N&&(x<T||!r[C].type&&!r[C-1].greedy);++C)x+=r[C].length,w>=x&&(++b,v=x);if(r[b]instanceof c)continue;B=C-b,k=a.slice(v,x),g.index-=v}else{p.lastIndex=0;var g=p.exec(k),B=1}if(!g){if(u)break;continue}$&&(P=g[1]?g[1].length:0);var w=g.index+P,g=g[0].slice(P),T=w+g.length,j=k.slice(0,w),q=k.slice(T),A=[b,B];j&&(++b,v+=j.length,A.push(j));var V=new c(m,O?t.tokenize(g,O):g,R,g,I);if(A.push(V),q&&A.push(q),Array.prototype.splice.apply(r,A),B!=1&&t.matchGrammar(a,r,i,b,v,!0,m),u)break}}}}},tokenize:function(a,r,i){var n=[a],o=r.rest;if(o){for(var u in o)r[u]=o[u];delete r.rest}return t.matchGrammar(a,n,r,0,0,!1),n},hooks:{all:{},add:function(a,r){var i=t.hooks.all;i[a]=i[a]||[],i[a].push(r)},run:function(a,r){var i=t.hooks.all[a];if(!(!i||!i.length))for(var n=0,o;o=i[n++];)o(r)}}},_=t.Token=function(d,a,r,i,n){this.type=d,this.content=a,this.alias=r,this.length=(i||"").length|0,this.greedy=!!n};return _.stringify=function(d,a,r){if(typeof d=="string")return d;if(t.util.type(d)==="Array")return d.map(function(u){return _.stringify(u,a,d)}).join("");var i={type:d.type,content:_.stringify(d.content,a,r),tag:"span",classes:["token",d.type],attributes:{},language:a,parent:r};if(d.alias){var n=t.util.type(d.alias)==="Array"?d.alias:[d.alias];Array.prototype.push.apply(i.classes,n)}t.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(u){return u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},h.document||h.addEventListener&&(t.disableWorkerMessageHandler||h.addEventListener("message",function(d){var a=JSON.parse(d.data),r=a.language,i=a.code,n=a.immediateClose;h.postMessage(t.highlight(i,t.languages[r],r)),n&&h.close()},!1)),h.Prism}();typeof module<"u"&&module.exports&&(module.exports=l);typeof global<"u"&&(global.Prism=l);l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity;l.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))});l.languages.xml=l.languages.markup;l.languages.html=l.languages.markup;l.languages.mathml=l.languages.markup;l.languages.svg=l.languages.markup;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/};l.languages.css.atrule.inside.rest=l.languages.css;l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag));l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/});l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}});l.languages.javascript["template-string"].inside.interpolation.inside.rest=l.languages.javascript;l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}});l.languages.js=l.languages.javascript;(function(){if(typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),t="";e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),s.appendChild(e)}})();var W={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{ref:"codeBlock"},[t("pre",{class:s.languageClass},[t("code",[s._t("default")],2)])])},staticRenderFns:[],name:"code-highlight",props:{language:{type:String,default:"javascript"}},computed:{languageClass:function(){return"language-"+this.language}},mounted:function(){l.highlightAllUnder(this.$refs.codeBlock)},beforeUpdate:function(){if(this.$slots.default[0].text){var e=this.$slots.default[0].text.replace(/^[\r\n\s]*|[\r\n\s]*$/g,"");this.$el.querySelector("code").textContent=e,l.highlightAllUnder(this.$refs.codeBlock)}}};function Y(s){l.highlightAllUnder(s)}function E(s){E.installed||(E.installed=!0,s.directive("highlight",Y))}var K={install:E},F=null;typeof window<"u"?F=window.Vue:typeof global<"u"&&(F=global.Vue);F&&F.use(K);const L={computed:{...G("session",["user"])},methods:{...H("session",["setApiKey"]),generateApiKey(){axios.post("/auth/api-key").then(s=>{this.setApiKey({token:s.data.token,secret:s.data.secret})})}}};var J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-gray-200 dark:bg-gray-900 -mx-4 p-4"},[t("div",{staticClass:"bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200"},[t("h3",{staticClass:"font-serif uppercase bg-secondary text-white px-4 py-2"},[e._v("Your API key - Token and Secret")]),t("div",{staticClass:"p-4"},[e.user.apiToken?t("div",[t("div",[e._v("Your API token: "),t("span",{staticClass:"font-bold"},[e._v(e._s(e.user.apiToken))])]),e.user.apiSecret?t("div",[e._v(" Your API secret: "),t("span",{staticClass:"font-bold"},[e._v(e._s(e.user.apiSecret))]),t("br"),t("div",{staticClass:"my-2"},[e._v("Please be sure to copy your secret and store it in a safe place - you will not be able to see it again once this page refreshes.")])]):e._e(),t("button",{staticClass:"button-primary rounded px-3 py-2 mt-2",on:{click:e.generateApiKey}},[e._v("Regenerate token and secret")])]):t("div",[t("button",{staticClass:"button-primary rounded px-3 py-2",on:{click:e.generateApiKey}},[e._v("Generate a token and secret")])])])])])},X=[],Z=D(L,J,X,!1,null,null,null,null);const Q=Z.exports,ee={components:{ApiToken:Q,Breadcrumbs:M,HeaderTitle:U,VueCodeHighlight:W},computed:{domain(){return window.settings.apiDomain}},data(){return{crumbs:[{text:"Home",link:{name:"home"}},{text:"API Documentation"}]}}};var te=function(){var e=this,t=e._self._c;return t("div",[t("header-title",{attrs:{title:"API Documentation"}}),t("breadcrumbs",{attrs:{crumbs:e.crumbs}}),t("div",{staticClass:"main-body"},[t("div",{staticClass:"container sm:mx-auto px-4 py-8 flex"},[e._m(0),t("div",{staticClass:"w-3/4"},[t("div",{staticClass:"bg-white dark:bg-gray-800 p-4"},[t("h2",{staticClass:"font-serif uppercase text-2xl"},[e._v("Getting started")]),e._m(1),e._m(2),t("a",{attrs:{name:"authentication"}}),t("h3",{staticClass:"font-serif uppercase text-xl"},[e._v("Authentication")]),t("p",{staticClass:"my-4"},[e._v(" In order to authenticate with the FaB DB API, you must have an API key. Your key consists of a public API token and an associated API secret. The token is provided alongside all requests you make to FaB DB's API. The secret, as its name suggests, is a secret token that you store on your server and is used to sign all requests. You can generate your API key, and its associated token and secret on this very page. ")]),t("api-token"),t("p",{staticClass:"my-4"},[e._v(' To authenticate, all requests must contain a header called "Authorization", ie: ')]),t("vue-code-highlight",{staticClass:"text-base",attrs:{language:"text"}},[t("pre",[e._v(`    Authorization: Bearer YOURTOKENHERE
`)])]),t("p",{staticClass:"my-4"},[e._v(" Each request must also be signed using your secret token. To do this, include one parameter in your query string/post data: time. Time must be a unix timestamp. ")]),t("p",{staticClass:"my-4"},[e._v(" Once that is done, you must hash the query string using the sha512 algorithm, using your secret token as a prefix, wo it would look like this: THISISYOURSECRET1662853301 which will result in the following: ")]),t("vue-code-highlight",{staticClass:"text-base",attrs:{language:"text"}},[t("pre",[e._v(`    https://api.fabdb.net/cards?time=1662853301&hash=c5392d43c8f45e6e961ddf66dcfa36770a9964ad9e8feedd3e903d5d905821ae97e7de5578b09eb1bec008ef4731b457c525dc8d24b32ccfb086230c00e590b3
`)])]),t("p",{staticClass:"my-4"},[e._v(" On the FaB DB side, we then deconstruct this request, ensure that the hash matches the provided token and then either allow or deny the request. ")]),e._m(3),t("a",{attrs:{name:"requests"}}),t("h3",{staticClass:"font-serif uppercase text-xl"},[e._v("Requests")]),t("p",{staticClass:"my-4"},[e._v(" All requests made to the API must be made securely (https) to: "+e._s(e.domain)+". ")]),t("a",{attrs:{name:"formats"}}),t("h3",{staticClass:"font-serif uppercase text-xl"},[e._v("Formats")]),t("p",{staticClass:"my-4"},[e._v(" The FaB DB API supports multiple formats for output from the API, depending on your use case. The default response is JSON, with both XML and CSV available when you set the accepted content type as part of your requests headers, eg: ")]),e._m(4),t("a",{attrs:{name:"throttling"}}),t("h3",{staticClass:"font-serif uppercase text-xl"},[e._v("Throttling")]),t("p",{staticClass:"my-4"},[e._v(" Requests to the FaB DB API are throttled at 60 requests/minute for public API access. If you need to make more requests than this, an API key can be provided to you which increase this to 600 per minute. ")]),t("hr",{staticClass:"mt-8",attrs:{size:"1"}}),t("h2",{staticClass:"font-serif uppercase text-2xl mt-8"},[e._v("Endpoints")]),t("p",{staticClass:"my-4"},[e._v(" The FaB DB API supports a number of endpoints to help with your research, or write your own application. Currently, those endpoints are centered around cards and decks that have been published for the public to read and use themselves. ")]),t("a",{attrs:{name:"cards"}}),t("h3",{staticClass:"font-serif uppercase text-xl"},[e._v("Cards")]),t("p",{staticClass:"my-4"},[e._v(" The card database at FaB DB forms the backbone of all the other features, and so it makes sense that it would also provide a powerful API to utilise that dataset. ")]),t("h4",{staticClass:"font-bold text-lg"},[e._v("Card search")]),t("p",{staticClass:"my-4 font-mono border border-gray-300 p-4"},[e._v("GET /cards")]),t("p",{staticClass:"my-4"},[e._v("Example response:")]),t("vue-code-highlight",{staticClass:"text-base dark:bg-gray-900 overflow-hidden",attrs:{language:"json"}},[t("pre",[e._v(`{
    "current_page":19,
    "data": [
        {
            "identifier":"WTR219",
            "name":"Nimblism",
            "keywords":["generic","action"],
            "stats":{"cost":"0","defense":"2","resource":"2"},
        },
        ...
    ],
    "first_page_url":"/cards?per_page=25&page=1",
    "from":451,
    "next_page_url":null,
    "path":"/cards",
    "per_page":"25",
    "prev_page_url":"/cards?per_page=25&page=18",
    "to":457
}`)])]),e._m(5),t("h4",{staticClass:"font-bold text-lg"},[e._v("View card")]),t("p",{staticClass:"my-4 font-mono border border-gray-300 p-4"},[e._v("GET /cards/ARC000")]),t("p",{staticClass:"my-4"},[e._v("Example response:")]),t("vue-code-highlight",{staticClass:"text-base dark:bg-gray-900 overflow-hidden",attrs:{language:"javascript"}},[t("pre",[e._v(`{
    "identifier":"ARC000",
    "name":"Eye of Ophidia",
    "rarity":"F",
    "keywords":["generic","resource","gem"],
    "stats":{"resource":"3"},
    "text":"**Legendary** *(You may only have 1 Eye of Ophidia in your deck.)*\\n\\nWhen you pitch Eye of Ophidia, **opt 2**.",
    "flavour":"Beyond the turbulent waters of Death\\u2019s Knell, the ocean stretches as far as the eye can see, an endless, unfathomable expanse of deep blue. The keeper looks upon the shifting tides, feeling the weight of time within its weary soul. As the great divide draws near, it relinquishes a part of itself, bequeathing the gift of its immeasurable knowledge. Under the light of the pale moon, the ocean calls it home, and at last, the keeper sinks into the deep, undisturbed.",
    "comments":"The second fabled card to be released, the Eye of Ophidia helped to establish the pattern that there will be a Fabled card in every set. Additionally, it set a new standard in artwork for the franchise, with the Eye of Ophidia being a truly beautiful card.",
    "next":"ARC001",
    "prev":"ARC218"
}
                            `)])]),t("a",{attrs:{name:"decks"}}),t("h4",{staticClass:"font-bold text-lg"},[e._v("Decks")]),t("h4",{staticClass:"font-bold text-lg"},[e._v("View deck")]),t("p",{staticClass:"my-4 font-mono border border-gray-300 p-4"},[e._v("GET /decks/{slug}")]),t("p",{staticClass:"my-4"},[e._v("Example response:")]),t("vue-code-highlight",{staticClass:"text-base dark:bg-gray-900 overflow-hidden",attrs:{language:"javascript"}},[t("pre",[e._v(`{
    "slug": "NmzrmMWV",
    "name": "Katsudon",
    "format": "constructed",
    "notes": null,
    "visibility": "public",
    "cardBack": 1,
    "createdAt": "2020-05-31 09:04:13",
    "totalVotes": 0,
    "myVote": 0,
    "cards": [
         {
            "identifier": "WTR082",
            "name": "Ancestral Empowerment",
            "rarity": "M",
            "stats": {"cost": "0", "defense": "2", "resource": "1"},
            "text": "",
            "keywords":["ninja", "attack", "reaction"],
            "flavour": "",
            "comments": "",
            "image": "https:\\/\\/fabdb2.imgix.net\\/cards\\/wtr\\/82.png?w=300&fit=clip&auto=compress",
            "total": 3
        },
        ...
    ],
    "sideboard": []
}
                            `)])])],1)])])])],1)},ae=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"w-1/4"},[e("ul",{staticClass:"mr-4"},[e("li",{staticClass:"mb-2"},[e("h2",{staticClass:"text-xl font-serif uppercase"},[s._v("Getting started")])]),e("li",{staticClass:"mb-1"},[e("a",{staticClass:"block p-2 px-4 button-secondary",attrs:{href:"#authentication"}},[s._v("Authentication")])]),e("li",{staticClass:"mb-1"},[e("a",{staticClass:"block p-2 px-4 button-secondary",attrs:{href:"#requests"}},[s._v("Requests")])]),e("li",{staticClass:"mb-1"},[e("a",{staticClass:"block p-2 px-4 button-secondary",attrs:{href:"#formats"}},[s._v("Formats")])]),e("li",{staticClass:"mb-1"},[e("a",{staticClass:"block p-2 px-4 button-secondary",attrs:{href:"#throttling"}},[s._v("Throttling")])]),e("li",{staticClass:"mt-4 mb-2"},[e("h2",{staticClass:"text-xl font-serif uppercase"},[s._v("Endpoints")])]),e("li",{staticClass:"mb-1"},[e("a",{staticClass:"block p-2 px-4 button-secondary",attrs:{href:"#cards"}},[s._v("Cards")])]),e("li",{staticClass:"mb-1"},[e("a",{staticClass:"block p-2 px-4 button-secondary",attrs:{href:"#decks"}},[s._v("Decks")])])])])},function(){var s=this,e=s._self._c;return e("p",{staticClass:"my-4"},[s._v(" The FaB DB API provides a public interface for access to card and deck information entered into the system. This makes it possible for 3rd parties to create amazing applications utilising our rich APIs and data endpoints. The API is completely free-to-use but has a single requirement and that is: "),e("span",{staticClass:"italic font-bold"},[s._v("the API cannot be used to create competing products/tools to FaB DB and its solutions.")])])},function(){var s=this,e=s._self._c;return e("p",{staticClass:"my-4"},[s._v(" Getting stated with consuming the FaB DB API is simple - simply utilise your favourite library to make various requests to the various "),e("a",{staticClass:"link",attrs:{href:"#endpoints"}},[s._v("endpoints")]),s._v(" we have documented. ")])},function(){var s=this,e=s._self._c;return e("p",{staticClass:"my-4"},[e("span",{staticClass:"italic"},[s._v("Note: your secret is securely stored and encrypted on the FaB DB servers.")])])},function(){var s=this,e=s._self._c;return e("p",{staticClass:"my-4 font-mono bg-gray-300 dark:bg-gray-900 p-4"},[s._v(" Accept: application/json"),e("br"),s._v(" Accept: application/xml"),e("br"),s._v(" Accept: text/csv ")])},function(){var s=this,e=s._self._c;return e("table",{staticClass:"my-4 w-full border-collapse border border-gray-500 text-base"},[e("thead",{staticClass:"font-bold bg-gray-100 dark:bg-gray-900"},[e("th",{staticClass:"text-left p-2 border border-gray-400"},[s._v("Parameter")]),e("th",{staticClass:"text-left p-2 border border-gray-400"},[s._v("Description")]),e("th",{staticClass:"text-left p-2 border border-gray-400"},[s._v("Options")])]),e("tbody",[e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("page")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("When paginating through data sets, specify the page.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Integer")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("per_page")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Specify the number of records per result set.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Integer. Max=100.")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("keywords")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("A string representing a search term.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("String")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("pitch")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Search for a card with a given pitch.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("String. Valid values are: (1, 2, or 3)")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("cost")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Search for a card with a given cost.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("String. Valid values are: (1, 2, 3, or 4+)")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("class")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Search for a card that matches the required hero class.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v(" String. Valid values are: brute, guardian, mechanologist, ninja, ranger, runeblade, warrior, wizard. ")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("rarity")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Search for a card that matches the specified rarity.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v(" String. Valid values are: C, R, S, T, L, F, P ")])]),e("tr",[e("td",{staticClass:"p-2 border border-gray-400"},[s._v("set")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v("Search for cards from a given set.")]),e("td",{staticClass:"p-2 border border-gray-400"},[s._v(" String. Valid values are: WTR, ARC, CRU, MON ")])])])])}],se=D(ee,te,ae,!1,null,null,null,null);const ne=se.exports;export{ne as default};
