import{l as o,o as r,a as n,n as i,H as d}from"./app.d4472289.js";import{T as l}from"./Tracker.88ce54ac.js";const c={components:{Submit:o},data(){return{email:""}},methods:{...r("messages",["addMessage"]),checkEmail(){n.post("/auth/check-email",{email:this.email}).then(s=>{this.$emit("email-changed",this.email),this.$emit("status-changed",s.data.status)}).catch(s=>{if(s.response.status===422){let e=s.response.data.errors;for(let t in e)for(let a in e[t])this.addMessage({status:"error",message:e[t][a]})}})}}};var m=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(a){return a.preventDefault(),e.checkEmail()}}},[t("div",{staticClass:"flex mb-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input focus:bg-white focus:border-gray-500 w-3/4 p-4 rounded-l-lg",attrs:{type:"email",placeholder:"Email address",required:"required"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("submit",{staticClass:"w-1/4 p-4 rounded-l-none rounded-r-lg",attrs:{text:"Next"}})],1),t("p",[e._v(" Some features on FaB DB require an account. Registration & login is super easy! Just provide your email address and we'll take it from here! ")])])},p=[],f=i(c,m,p,!1,null,null,null,null);const h=f.exports,_={props:{email:{required:!0,type:String}},components:{Submit:o},data(){return{emailConfirmation:""}},methods:{...r("messages",["addMessage"]),register(){n.post("/auth/register",{email:this.email,email_confirmation:this.emailConfirmation}).then(s=>{this.$emit("status-changed",s.data.status)}).catch(s=>{if(s.response.status===422){let e=s.response.data.errors;for(let t in e)for(let a in e[t])this.addMessage({status:"error",message:e[t][a]})}})}}};var g=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(a){return a.preventDefault(),e.register()}}},[t("div",{staticClass:"mb-4"},[t("input",{staticClass:"input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",attrs:{type:"email",required:"required",readonly:""},domProps:{value:e.email}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.emailConfirmation,expression:"emailConfirmation"}],staticClass:"input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",attrs:{type:"email",placeholder:"Confirm email",required:"required"},domProps:{value:e.emailConfirmation},on:{input:function(a){a.target.composing||(e.emailConfirmation=a.target.value)}}}),t("submit",{staticClass:"w-full p-4",attrs:{text:"Next"}})],1),t("p",[e._v(" We couldn't find that email address. To register, please confirm your email. We'll send you a login code to confirm your email. Once completed, if you wish, you can configure your account to use a password instead. ")])])},v=[],w=i(_,g,v,!1,null,null,null,null);const b=w.exports,u={methods:{success(s){const e=this.$route.query.from||"/decks/build";window.session.user=s,this.setUser({user:s}),window.location=e}}},y={props:{email:{required:!0,type:String}},mixins:[u],components:{Submit:o},data(){return{code:""}},methods:{...r("messages",["addMessage"]),...r("session",["setUser"]),submitCode:function(){n.post("/auth/validate/",{email:this.email,code:this.code}).then(s=>{l.track("Authentication","Authenticated code"),this.success(s.data.user)}).catch(s=>{s.response.status===404&&this.addMessage({status:"error",message:"The auth code you have provided is incorrect. Please check to that you have not copied it correctly."})})}}};var C=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(a){return a.preventDefault(),e.submitCode()}}},[t("div",{staticClass:"flex mb-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"input focus:bg-white focus:border-gray-500 w-2/3 p-4 rounded-l-lg",attrs:{type:"text",placeholder:"Enter your authentication code",required:"required"},domProps:{value:e.code},on:{input:function(a){a.target.composing||(e.code=a.target.value)}}}),t("submit",{staticClass:"w-2/3 p-4 rounded-l-none rounded-r-lg",attrs:{text:"Next"}})],1),t("p",[e._v("Great! Now a one-time code will be emailed to you. When it arrives, copy and paste the code into the form above.")])])},x=[],q=i(y,C,x,!1,null,null,null,null);const $=q.exports,k={props:{email:{required:!0,type:String}},mixins:[u],components:{Submit:o},data(){return{password:""}},methods:{...r("messages",["addMessage"]),...r("session",["setUser"]),login(){n.post("/auth/password",{email:this.email,password:this.password}).then(s=>{l.track("Authentication","Authenticated password"),this.success(s.data.user)}).catch(s=>{s.response.status===422&&this.addMessage({status:"error",message:s.response.data.error})})}}};var E=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(a){return a.preventDefault(),e.login()}}},[t("div",{staticClass:"mb-4"},[t("input",{staticClass:"input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",attrs:{type:"email",readonly:""},domProps:{value:e.email}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2",attrs:{type:"password",placeholder:"Enter password",required:"required"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),t("submit",{staticClass:"w-full p-4",attrs:{text:"Next"}})],1),t("p",[e._v(" Great! Looks like you have an account! Please enter your password to complete login. ")])])},M=[],N=i(k,E,M,!1,null,null,null,null);const P=N.exports,S={components:{CheckEmail:h,EnterPassword:P,HeaderTitle:d,Register:b,ValidateCode:$},data(){return{email:"",step:"first"}},methods:{...r("messages",["addMessage"]),...r("session",["setUser"]),updateEmail(s){this.email=s},updateStep(s){this.step=s}}};var R=function(){var e=this,t=e._self._c;return t("div",[t("header-title",{attrs:{title:"Login / Register"}}),e._m(0),t("div",{staticClass:"main-body"},[t("div",{staticClass:"container sm:mx-auto"},[t("div",{staticClass:"bg-white dark:bg-gray-800 p-4 py-16"},[e.step==="first"?t("check-email",{on:{"status-changed":e.updateStep,"email-changed":e.updateEmail}}):e._e(),e.step==="registration-required"?t("register",{attrs:{email:e.email},on:{"status-changed":e.updateStep}}):e._e(),e.step==="code-requested"||e.step==="user-registered"?t("validate-code",{attrs:{email:e.email}}):e._e(),e.step==="password-required"?t("enter-password",{attrs:{email:e.email}}):e._e()],1)])])],1)},A=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"crumbs font-serif uppercase"},[e("div",{staticClass:"container sm:mx-auto px-4 py-2"},[s._v("\xA0")])])}],F=i(S,R,A,!1,null,null,null,null);const U=F.exports;export{U as default};
