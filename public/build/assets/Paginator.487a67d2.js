import{n as l}from"./app.00661b81.js";const c={props:["results"],computed:{data(){return this.results.meta?this.results.meta:this.results},pageRange:function(){const t=this.data.current_page,a=this.data.last_page;let e=t-3;e+6>a&&(e=a-6),e<1&&(e=1);let r=e+6;r>a&&(r=a);for(var i=[],s=e;s<=r;s++)i.push(s);return i}},methods:{active:function(n){return{"button-secondary":this.data.current_page===n}},disabled:function(n){return n?"hidden":"button-secondary"},select:function(n){this.selectPage(n)},next:function(){this.data.current_page>=this.data.last_page||this.selectPage(this.data.current_page+1)},previous:function(){this.results.current_page<=1||this.selectPage(this.data.current_page-1)},selectPage:function(n){this.$emit("page-selected",n)}}};var u=function(){var t=this,a=t._self._c;return t.data?a("div",{staticClass:"flex text-sm justify-center"},[a("a",{staticClass:"inline-block rounded p-2 mr-1",class:t.disabled(t.data.current_page==1),attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.previous.apply(null,arguments)}}},[t._v("<")]),a("span",{staticClass:"inline-block rounded overflow-hidden"},t._l(t.pageRange,function(e){return a("a",{staticClass:"inline-block sm:rounded p-2 sm:mr-1 button-primary",class:t.active(e),attrs:{href:""},on:{click:function(r){return r.preventDefault(),t.select(e)}}},[t._v(t._s(e))])}),0),a("a",{staticClass:"inline-block rounded p-2 ml-1 sm:ml-0",class:t.disabled(t.data.current_page>=t.data.last_page),attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.next.apply(null,arguments)}}},[t._v(">")])]):t._e()},o=[],d=l(c,u,o,!1,null,null,null,null);const f=d.exports;export{f as P};
