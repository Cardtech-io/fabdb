import{n as a,k as l,a as r,l as m,m as c,o}from"./app.77650677.js";import{A as u}from"./Avatar.88988064.js";import{B as d}from"./Badge.484cda2c.js";import{M as p}from"./Models.cc4dbaf5.js";const v={props:["comments"]};var _=function(){var t=this,e=t._self._c;return e("h2",{staticClass:"font-serif uppercase text-lg mt-4"},[t._v(t._s(t.comments?t.comments.length:0)+" comments.")])},f=[],h=a(v,_,f,!1,null,null,null,null);const g=h.exports;class i{constructor(t){this.fields=t}get author(){return this.fields.user}get name(){return this.fields.user.name||"Anonymous"}get slug(){return this.fields.slug}get when(){return l.utc(this.fields.createdAt).local().fromNow()}get content(){return this.fields.content}get subscription(){return this.fields.user.subscription}get myVote(){return this.fields.myVote||0}get totalVotes(){return this.fields.totalVotes||0}}const y={props:{layout:{type:String,validator:function(s){return["vertical","horizontal"].indexOf(s)!==-1}},size:{type:Number,required:!0},total:{type:Number,required:!0},voteable:{type:String,required:!0},foreign:{type:String,required:!0},voted:{type:Number,required:!0}},data(){return{actualTotal:this.total,count:this.total,voteState:this.voted}},computed:{classes(){return this.voteState?"text-red-500":"text-gray-400 hover:text-gray-800 dark:hover:text-white"},sizes(){return["h-"+this.size]}},methods:{vote(){this.voteState=!this.voteState;let s={type:this.voteable,foreign:this.foreign};r.post("/vote",s)}}};var x=function(){var t=this,e=t._self._c;return e("button",{class:{"flex items-center space-x-2":t.layout!=="vertical"},on:{click:function(n){return t.vote()}}},[t.layout!=="vertical"?e("div",{staticClass:"text-lg mt-1"},[t.total&&t.total>0?e("span",[t._v(t._s(t.actualTotal))]):t._e()]):t._e(),e("div",{staticClass:"mt-1",class:{flex:t.layout!=="vertical"}},[e("div",{staticClass:"flex space-x-1",class:t.classes},[e("icon",{attrs:{size:t.size}},[e("path",{attrs:{d:"M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"}})])],1),t.layout==="vertical"?e("div",{staticClass:"text-center -mt-1"},[t.total&&t.total>0?e("span",[t._v(t._s(t.actualTotal))]):t._e()]):t._e()])])},C=[],b=a(y,x,C,!1,null,null,null,null);const $=b.exports,S={props:["comment"],components:{Avatar:u,Badge:d,Votes:$}};var w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-4 sm:mx-0"},[e("div",{staticClass:"flex mb-4"},[e("div",{staticClass:"mr-4"},[e("avatar",{staticClass:"rounded-br-none",attrs:{user:t.comment.author,width:80}})],1),e("div",{staticClass:"mr-4"},[e("votes",{attrs:{size:4,total:t.comment.totalVotes,voted:t.comment.myVote,voteable:"comment",foreign:t.comment.slug,layout:"vertical"}})],1),e("div",{staticClass:"flex-1"},[e("header",{staticClass:"flex w-full"},[e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"mr-4 font-bold"},[t._v(t._s(t.comment.name))]),t.comment.subscription?e("badge",{attrs:{"subscription-level":t.comment.subscription,size:"small"}}):t._e()],1),e("div",{staticClass:"text-gray-500 text-sm text-right"},[t._v(t._s(t.comment.createdAt))])]),e("div",{staticClass:"mt-2"},[t._v(t._s(t.comment.content))])])]),e("hr",{staticClass:"text-gray-500"})])},q=[],R=a(S,w,q,!1,null,null,null,null);const z=R.exports,V={props:["type","foreign"],components:{Submit:m},computed:{...c("session",["user"]),name:{get(){return this.user.name},set(s){this.setUserParam({param:"name",value:s}),this.nameRequiresSaving=!0}}},data(){return{content:null,nameRequiresSaving:!1,saving:!1}},methods:{...o("session",["setUserParam"]),...o("messages",["addMessage"]),save:function(){this.saving=!0,this.nameRequiresSaving&&r.put("/profile/name",{name:this.name}),r.post("/comments/",{type:this.type,foreign:this.foreign,content:this.content}).then(s=>{this.addMessage({status:"success",message:"Comment posted."}),this.saving=!1,this.content="",this.$emit("comment-posted",s.data)})}}};var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4 sm:px-0"},[t.user?e("form",{on:{submit:function(n){return n.preventDefault(),t.save.apply(null,arguments)}}},[!t.user.name||t.nameRequiresSaving?e("div",{staticClass:"w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(n){n.target.composing||(t.name=n.target.value)}}})]):t._e(),e("div",{staticClass:"w-full mt-1"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"input focus:border-gray-500 py-3 px-4 rounded-lg",attrs:{type:"text",rows:"4",placeholder:"Type here to comment on this "+t.type+"."},domProps:{value:t.content},on:{input:function(n){n.target.composing||(t.content=n.target.value)}}})]),e("submit",{staticClass:"w-full sm:w-auto mt-2 mx-auto",attrs:{text:"Comment",disabled:t.saving}})],1):e("div",{staticClass:"text-center"},[t._v(" You must be "),e("router-link",{staticClass:"link",attrs:{to:"/login/?from="+t.$route.path}},[t._v("logged in")]),t._v(" to participate in discussions. ")],1)])},A=[],N=a(V,k,A,!1,null,null,null,null);const M=N.exports,F={props:{type:{type:String,required:!0},id:{type:String,required:!0}},components:{Comment:z,CommentCount:g,Respond:M},data(){return{comments:[]}},methods:{addComment(s){this.comments.push(new i(s))}},mounted(){r.get("/comments/"+this.type+"/"+this.id).then(s=>{this.comments=p.hydrateMany(s.data,i)})}};var P=function(){var t=this,e=t._self._c;return e("div",[e("comment-count",{attrs:{comments:t.comments}}),t.comments.length?e("div",t._l(t.comments,function(n){return e("comment",{key:n.slug,attrs:{comment:n}})}),1):t._e(),e("respond",{staticClass:"mt-8",attrs:{type:t.type,foreign:t.id},on:{"comment-posted":t.addComment}})],1)},T=[],D=a(F,P,T,!1,null,null,null,null);const Y=D.exports;export{Y as D,M as R,$ as V};
