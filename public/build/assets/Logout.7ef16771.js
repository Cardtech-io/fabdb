import{a as n,o as t,n as o}from"./app.00661b81.js";const r={mounted(){n.delete("/auth/session").then(()=>{window.session.user=null,this.setUser({user:null}),this.$router.push("/")})},methods:{...t("session",["setUser"])}};var a=function(){var s=this,e=s._self._c;return e("div")},l=[],u=o(r,a,l,!1,null,null,null,null);const c=u.exports;export{c as default};
