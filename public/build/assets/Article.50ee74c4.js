import{b as e}from"./app.f266d440.js";class r{constructor(t){this.fields=t}get author(){return this.fields.author}get content(){return this.fields.content}get published(){return moment.utc(this.fields.publishAt).format("Do MMMM YYYY")}get publishedRelative(){return moment.utc(this.fields.publishAt).fromNow()}get excerpt(){return this.fields.excerpt}get image(){return this.fields.image}get slug(){return this.fields.slug}get tags(){return this.fields.tags}get title(){return this.fields.title}get link(){return"/articles/"+e.methods.kebabCase(this.title)+"/"+this.slug}valid(){return!!this.fields}}export{r as A};
