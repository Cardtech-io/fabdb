import{d as P,g as b,m as k,n as D}from"./app.00661b81.js";var O={exports:{}};/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */(function(M,F){(function(_,N){M.exports=N()})(P,function(){return function(C){var _={};function N(v){if(_[v])return _[v].exports;var o=_[v]={exports:{},id:v,loaded:!1};return C[v].call(o.exports,o,o.exports,N),o.loaded=!0,o.exports}return N.m=C,N.c=_,N.p="",N(0)}([function(C,_,N){var v=N(1),o=m(v);function m(y){return y&&y.__esModule?y:{default:y}}C.exports=o.default},function(C,_,N){_.__esModule=!0;var v=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r};_.default=s;var o=N(2),m=l(o),y=N(4),c=S(y);function S(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t}function l(r){return r&&r.__esModule?r:{default:r}}function f(){}var p={afterAsync:f,afterDequeue:f,afterStreamStart:f,afterWrite:f,autoFix:!0,beforeEnqueue:f,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:f,error:function(t){throw new Error(t.msg)},releaseAsync:!1},h=0,i=[],n=null;function u(){var r=i.shift();if(r){var t=c.last(r);t.afterDequeue(),r.stream=g.apply(void 0,r),t.afterStreamStart()}}function g(r,t,e){n=new m.default(r,e),n.id=h++,n.name=e.name||n.id,s.streams[n.name]=n;var a=r.ownerDocument,d={close:a.close,open:a.open,write:a.write,writeln:a.writeln};function w(A){A=e.beforeWrite(A),n.write(A),e.afterWrite(A)}v(a,{close:f,open:f,write:function(){for(var T=arguments.length,x=Array(T),R=0;R<T;R++)x[R]=arguments[R];return w(x.join(""))},writeln:function(){for(var T=arguments.length,x=Array(T),R=0;R<T;R++)x[R]=arguments[R];return w(x.join("")+`
`)}});var E=n.win.onerror||f;return n.win.onerror=function(A,T,x){e.error({msg:A+" - "+T+": "+x}),E.apply(n.win,[A,T,x])},n.write(t,function(){v(a,d),n.win.onerror=E,e.done(),n=null,u()}),n}function s(r,t,e){if(c.isFunction(e))e={done:e};else if(e==="clear"){i=[],n=null,h=0;return}e=c.defaults(e,p),/^#/.test(r)?r=window.document.getElementById(r.substr(1)):r=r.jquery?r[0]:r;var a=[r,t,e];return r.postscribe={cancel:function(){a.stream?a.stream.abort():a[1]=f}},e.beforeEnqueue(a),i.push(a),n||u(),r.postscribe}v(s,{streams:{},queue:i,WriteStream:m.default})},function(C,_,N){_.__esModule=!0;var v=Object.assign||function(s){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])}return s},o=N(3),m=l(o),y=N(4),c=S(y);function S(s){if(s&&s.__esModule)return s;var r={};if(s!=null)for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(r[t]=s[t]);return r.default=s,r}function l(s){return s&&s.__esModule?s:{default:s}}function f(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")}var p="data-ps-",h="ps-style",i="ps-script";function n(s,r){var t=p+r,e=s.getAttribute(t);return c.existy(e)?String(e):e}function u(s,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,e=p+r;c.existy(t)&&t!==""?s.setAttribute(e,t):s.removeAttribute(e)}var g=function(){function s(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};f(this,s),this.root=r,this.options=t,this.doc=r.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new m.default("",{autoFix:t.autoFix}),this.actuals=[r],this.proxyHistory="",this.proxyRoot=this.doc.createElement(r.nodeName),this.scriptStack=[],this.writeQueue=[],u(this.proxyRoot,"proxyof",0)}return s.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();c.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},s.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},s.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,a=void 0,d=void 0,w=[];(e=this.parser.readToken())&&!(a=c.isScript(e))&&!(d=c.isStyle(e));)e=this.options.beforeWriteToken(e),e&&w.push(e);w.length>0&&this._writeStaticTokens(w),a&&this._handleScriptToken(e),d&&this._handleStyleToken(e)},s.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},s.prototype._buildChunk=function(t){for(var e=this.actuals.length,a=[],d=[],w=[],E=t.length,A=0;A<E;A++){var T=t[A],x=T.toString();if(a.push(x),T.attrs){if(!/^noscript$/i.test(T.tagName)){var R=e++;d.push(x.replace(/(\/?>)/," "+p+"id="+R+" $1")),T.attrs.id!==i&&T.attrs.id!==h&&w.push(T.type==="atomicTag"?"":"<"+T.tagName+" "+p+"proxyof="+R+(T.unary?" />":">"))}}else d.push(x),w.push(T.type==="endTag"?x:"")}return{tokens:t,raw:a.join(""),actual:d.join(""),proxy:w.join("")}},s.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];c.existy(t=e.shift());){var a=t.nodeType===1,d=a&&n(t,"proxyof");if(!d){a&&(this.actuals[n(t,"id")]=t,u(t,"id"));var w=t.parentNode&&n(t.parentNode,"proxyof");w&&this.actuals[w].appendChild(t)}e.unshift.apply(e,c.toArray(t.childNodes))}},s.prototype._handleScriptToken=function(t){var e=this,a=this.parser.clear();a&&this.writeQueue.unshift(a),t.src=t.attrs.src||t.attrs.SRC,t=this.options.beforeWriteToken(t),t&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},s.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",t=this.options.beforeWriteToken(t),t&&this._writeStyleToken(t),e&&this.write()},s.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,h),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},s.prototype._buildStyle=function(t){var e=this.doc.createElement(t.tagName);return e.setAttribute("type",t.type),c.eachKey(t.attrs,function(a,d){e.setAttribute(a,d)}),e},s.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var a=this.doc.getElementById(e);a&&a.parentNode.replaceChild(t,a)},s.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},s.prototype._onScriptDone=function(t){if(t!==this.scriptStack[0]){this.options.error({msg:"Bad script nesting or script finished twice"});return}this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)},s.prototype._writeScriptToken=function(t,e){var a=this._buildScript(t),d=this._shouldRelease(a),w=this.options.afterAsync;t.src&&(a.src=t.src,this._scriptLoadHandler(a,d?w:function(){e(),w()}));try{this._insertCursor(a,i),(!a.src||d)&&e()}catch(E){this.options.error(E),e()}},s.prototype._buildScript=function(t){var e=this.doc.createElement(t.tagName);return c.eachKey(t.attrs,function(a,d){e.setAttribute(a,d)}),t.content&&(e.text=t.content),e},s.prototype._scriptLoadHandler=function(t,e){function a(){t=t.onload=t.onreadystatechange=t.onerror=null}var d=this.options.error;function w(){a(),e!=null&&e(),e=null}function E(T){a(),d(T),e!=null&&e(),e=null}function A(T,x){var R=T["on"+x];R!=null&&(T["_on"+x]=R)}A(t,"load"),A(t,"error"),v(t,{onload:function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(x){E({msg:"onload handler failed "+x+" @ "+t.src})}w()},onerror:function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(x){E({msg:"onerror handler failed "+x+" @ "+t.src});return}E({msg:"remote script failed "+t.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(t.readyState)&&w()}})},s.prototype._shouldRelease=function(t){var e=/^script$/i.test(t.nodeName);return!e||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},s}();_.default=g},function(C,_,N){/**
 * @file prescribe
 * @description Tiny, forgiving HTML parser
 * @version vundefined
 * @see {@link https://github.com/krux/prescribe/}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */(function(o,m){C.exports=m()})(this,function(){return function(v){var o={};function m(y){if(o[y])return o[y].exports;var c=o[y]={exports:{},id:y,loaded:!1};return v[y].call(c.exports,c,c.exports,m),c.loaded=!0,c.exports}return m.m=v,m.c=o,m.p="",m(0)}([function(v,o,m){var y=m(1),c=S(y);function S(l){return l&&l.__esModule?l:{default:l}}v.exports=c.default},function(v,o,m){o.__esModule=!0;var y=m(2),c=n(y),S=m(3),l=n(S),f=m(6),p=i(f),h=m(5);function i(t){return t&&t.__esModule?t:{default:t}}function n(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var g={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},s=function(){function t(){var e=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};u(this,t),this.stream=a;var w=!1,E={};for(var A in c)c.hasOwnProperty(A)&&(d.autoFix&&(E[A+"Fix"]=!0),w=w||E[A+"Fix"]);w?(this._readToken=(0,p.default)(this,E,function(){return e._readTokenImpl()}),this._peekToken=(0,p.default)(this,E,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return t.prototype.append=function(a){this.stream+=a},t.prototype.prepend=function(a){this.stream=a+this.stream},t.prototype._readTokenImpl=function(){var a=this._peekTokenImpl();if(a)return this.stream=this.stream.slice(a.length),a},t.prototype._peekTokenImpl=function(){for(var a in g)if(g.hasOwnProperty(a)&&g[a].test(this.stream)){var d=l[a](this.stream);if(d)return d.type==="startTag"&&/script|style/i.test(d.tagName)?null:(d.text=this.stream.substr(0,d.length),d)}},t.prototype.peekToken=function(){return this._peekToken()},t.prototype.readToken=function(){return this._readToken()},t.prototype.readTokens=function(a){for(var d=void 0;d=this.readToken();)if(a[d.type]&&a[d.type](d)===!1)return},t.prototype.clear=function(){var a=this.stream;return this.stream="",a},t.prototype.rest=function(){return this.stream},t}();o.default=s,s.tokenToString=function(t){return t.toString()},s.escapeAttributes=function(t){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]=(0,h.escapeQuotes)(t[a],null));return e},s.supports=c;for(var r in c)c.hasOwnProperty(r)&&(s.browserHasFlaw=s.browserHasFlaw||!c[r]&&r)},function(v,o){o.__esModule=!0;var m=!1,y=!1,c=window.document.createElement("div");try{var S="<P><I></P></I>";c.innerHTML=S,o.tagSoup=m=c.innerHTML!==S}catch{o.tagSoup=m=!1}try{c.innerHTML="<P><i><P></P></i></P>",o.selfClose=y=c.childNodes.length===2}catch{o.selfClose=y=!1}c=null,o.tagSoup=m,o.selfClose=y},function(v,o,m){o.__esModule=!0;var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};o.comment=l,o.chars=f,o.startTag=p,o.atomicTag=h,o.endTag=i;var c=m(4),S={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function l(n){var u=n.indexOf("-->");if(u>=0)return new c.CommentToken(n.substr(4,u-1),u+3)}function f(n){var u=n.indexOf("<");return new c.CharsToken(u>=0?u:n.length)}function p(n){var u=n.indexOf(">");if(u!==-1){var g=n.match(S.startTag);if(g){var s=function(){var r={},t={},e=g[2];return g[2].replace(S.attr,function(a,d){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(r[arguments[5]]="",t[arguments[5]]=!0):r[d]=arguments[2]||arguments[3]||arguments[4]||S.fillAttr.test(d)&&d||"":r[d]="",e=e.replace(a,"")}),{v:new c.StartTagToken(g[1],g[0].length,r,t,!!g[3],e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if((typeof s>"u"?"undefined":y(s))==="object")return s.v}}}function h(n){var u=p(n);if(u){var g=n.slice(u.length);if(g.match(new RegExp("</\\s*"+u.tagName+"\\s*>","i"))){var s=g.match(new RegExp("([\\s\\S]*?)</\\s*"+u.tagName+"\\s*>","i"));if(s)return new c.AtomicTagToken(u.tagName,s[0].length+u.length,u.attrs,u.booleanAttrs,s[1])}}}function i(n){var u=n.match(S.endTag);if(u)return new c.EndTagToken(u[1],u[0].length)}},function(v,o,m){o.__esModule=!0,o.EndTagToken=o.AtomicTagToken=o.StartTagToken=o.TagToken=o.CharsToken=o.CommentToken=o.Token=void 0;var y=m(5);function c(l,f){if(!(l instanceof f))throw new TypeError("Cannot call a class as a function")}o.Token=function l(f,p){c(this,l),this.type=f,this.length=p,this.text=""},o.CommentToken=function(){function l(f,p){c(this,l),this.type="comment",this.length=p||(f?f.length:0),this.text="",this.content=f}return l.prototype.toString=function(){return"<!--"+this.content},l}(),o.CharsToken=function(){function l(f){c(this,l),this.type="chars",this.length=f,this.text=""}return l.prototype.toString=function(){return this.text},l}();var S=o.TagToken=function(){function l(f,p,h,i,n){c(this,l),this.type=f,this.length=h,this.text="",this.tagName=p,this.attrs=i,this.booleanAttrs=n,this.unary=!1,this.html5Unary=!1}return l.formatTag=function(p){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i="<"+p.tagName;for(var n in p.attrs)if(p.attrs.hasOwnProperty(n)){i+=" "+n;var u=p.attrs[n];(typeof p.booleanAttrs>"u"||typeof p.booleanAttrs[n]>"u")&&(i+='="'+(0,y.escapeQuotes)(u)+'"')}return p.rest&&(i+=" "+p.rest),p.unary&&!p.html5Unary?i+="/>":i+=">",h!=null&&(i+=h+"</"+p.tagName+">"),i},l}();o.StartTagToken=function(){function l(f,p,h,i,n,u){c(this,l),this.type="startTag",this.length=p,this.text="",this.tagName=f,this.attrs=h,this.booleanAttrs=i,this.html5Unary=!1,this.unary=n,this.rest=u}return l.prototype.toString=function(){return S.formatTag(this)},l}(),o.AtomicTagToken=function(){function l(f,p,h,i,n){c(this,l),this.type="atomicTag",this.length=p,this.text="",this.tagName=f,this.attrs=h,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=n}return l.prototype.toString=function(){return S.formatTag(this,this.content)},l}(),o.EndTagToken=function(){function l(f,p){c(this,l),this.type="endTag",this.length=p,this.text="",this.tagName=f}return l.prototype.toString=function(){return"</"+this.tagName+">"},l}()},function(v,o){o.__esModule=!0,o.escapeQuotes=m;function m(y){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return y?y.replace(/([^"]*)"/g,function(S,l){return/\\/.test(l)?l+'"':l+'\\"'}):c}},function(v,o){o.__esModule=!0,o.default=p;var m=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,y=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function c(h){return h&&h.type==="startTag"&&(h.unary=m.test(h.tagName)||h.unary,h.html5Unary=!/\/>$/.test(h.text)),h}function S(h,i){var n=h.stream,u=c(i());return h.stream=n,u}function l(h,i){var n=i.pop();h.prepend("</"+n.tagName+">")}function f(){var h=[];return h.last=function(){return this[this.length-1]},h.lastTagNameEq=function(i){var n=this.last();return n&&n.tagName&&n.tagName.toUpperCase()===i.toUpperCase()},h.containsTagName=function(i){for(var n=0,u;u=this[n];n++)if(u.tagName===i)return!0;return!1},h}function p(h,i,n){var u=f(),g={startTag:function(t){var e=t.tagName;e.toUpperCase()==="TR"&&u.lastTagNameEq("TABLE")?(h.prepend("<TBODY>"),s()):i.selfCloseFix&&y.test(e)&&u.containsTagName(e)?u.lastTagNameEq(e)?l(h,u):(h.prepend("</"+t.tagName+">"),s()):t.unary||u.push(t)},endTag:function(t){var e=u.last();e?i.tagSoupFix&&!u.lastTagNameEq(t.tagName)?l(h,u):u.pop():i.tagSoupFix&&(n(),s())}};function s(){var r=S(h,n);r&&g[r.type]&&g[r.type](r)}return function(){return s(),c(n())}}}])})},function(C,_){_.__esModule=!0;var N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};_.existy=v,_.isFunction=o,_.each=m,_.eachKey=y,_.defaults=c,_.toArray=S,_.last=l,_.isTag=f,_.isScript=p,_.isStyle=h;function v(i){return i!=null}function o(i){return typeof i=="function"}function m(i,n,u){var g=void 0,s=i&&i.length||0;for(g=0;g<s;g++)n.call(u,i[g],g)}function y(i,n,u){for(var g in i)i.hasOwnProperty(g)&&n.call(u,g,i[g])}function c(i,n){return i=i||{},y(n,function(u,g){v(i[u])||(i[u]=g)}),i}function S(i){try{return Array.prototype.slice.call(i)}catch{var n=function(){var g=[];return m(i,function(s){g.push(s)}),{v:g}}();if((typeof n>"u"?"undefined":N(n))==="object")return n.v}}function l(i){return i[i.length-1]}function f(i,n){return!i||!(i.type==="startTag"||i.type==="atomicTag")||!("tagName"in i)?!1:!!~i.tagName.toLowerCase().indexOf(n)}function p(i){return f(i,"script")}function h(i){return f(i,"style")}}])})})(O);const q=b(O.exports),H={props:{height:{required:!0,type:Number},width:{required:!0,type:Number},zone:{required:!0,type:Number}},data(){return{style:"max-width: "+this.width+"px; max-height: "+this.height+"px"}},computed:{...k("session",["marketable"])},methods:{params(M){let F=[];for(let C in M)F.push(C+"="+M[C]);return F.join("&")},url(M){let F=this.params({do:M,zid:this.zone,oid:26444,wd:-1,ht:-1,target:"_blank",noerror:1});return"https://g.adspeed.net/ad.php?"+F}},mounted(){!this.marketable||setTimeout(()=>{let M=this.url("js"),F='<script src="'+M+'" async><\/script>';q(this.$refs.ad,F)},100)}};var W=function(){var F=this,C=F._self._c;return F.marketable?C("div",{staticClass:"mx-auto",style:F.style},[C("div",{ref:"ad"})]):F._e()},I=[],L=D(H,W,I,!1,null,null,null,null);const U=L.exports;export{U as A};
