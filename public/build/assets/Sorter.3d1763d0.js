import{n as s,c as i}from"./app.452767c0.js";const l={props:{field:{type:String,required:!0},text:{type:String,required:!0},clicked:{required:!0},order:{type:String,required:!0},direction:{type:String,required:!0}},components:{Icon:i},methods:{handler(r,e){this.clicked(this.field)}}};var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex items-center"},[t("a",{staticClass:"link-alternate flex-0",attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.handler.apply(null,arguments)}}},[e._v(e._s(e.text))]),e.order===e.field&&e.direction==="desc"?t("icon",{staticClass:"flex-0",attrs:{size:5}},[t("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})]):e._e(),e.order===e.field&&e.direction==="asc"?t("icon",{staticClass:"flex-0",attrs:{size:5}},[t("path",{attrs:{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}})]):e._e()],1)},c=[],o=s(l,a,c,!1,null,null,null,null);const u=o.exports;export{u as S};
