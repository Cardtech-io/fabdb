import{h as a}from"./app.77650677.js";const i={computed:{attacksPerHand(){return(this.totalAttacks/(this.totalOther/4)).toFixed(1)},averageAttack(){return(a.reduce(this.attacks,(t,e)=>t+e.stats.attack*e.total,0)/this.totalAttacks).toFixed(1)},averageBlock(){return(a.reduce(this.blocks,(t,e)=>t+e.stats.defense*e.total,0)/this.totalBlocks).toFixed(1)},hero(){if(!!this.cards)return this.cards.filter(t=>t.type==="hero")[0]},attacks(){return this.other.filter(t=>t.keywords.includes("attack")&&!t.keywords.includes("reaction"))},blocks(){return this.other.filter(t=>t.stats.defense&&t.stats.defense>0)},weapons(){return this.cards.filter(t=>t.keywords.includes("weapon"))},equipment(){return this.cards.filter(t=>t.keywords.includes("equipment"))},other(){const t=this.cards.filter(e=>!(e.keywords.includes("hero")||e.keywords.includes("equipment")||e.keywords.includes("weapon")));return a.sortBy(t,e=>e.stats?e.stats.resource:0)},totalOther(){return this.other.reduce((t,e)=>t+e.total,0)},totalAttacks(){return this.attacks.reduce((t,e)=>t+e.total,0)},totalBlocks(){return this.blocks.reduce((t,e)=>t+e.total,0)},totalClass(){return this.countCards(this.other.filter(t=>!t.keywords.includes("generic")))},totalGeneric(){return this.countCards(this.other.filter(t=>t.keywords.includes("generic")))},totalCards(){let t=this.other.filter(e=>!e.keywords.includes("token")).reduce((e,r)=>e+r.total,0);return this.deck&&this.deck.format==="blitz"&&this.hero&&t++,t+this.equipment.reduce((e,r)=>e+r.total,0)+this.weapons.reduce((e,r)=>e+r.total,0)},totalActions(){return this.totalCardType(this.other,["action"])},totalAttackActions(){return this.totalCardType(this.other,["action","attack"])},totalAttackReactions(){return this.totalCardType(this.other,["attack","reaction"])},totalDefenseReactions(){return this.totalCardType(this.other,["defense","reaction"])},totalInstants(){return this.totalCardType(this.other,["instant"])},totalColoured(){return{blue:this.countColoured("blue"),yellow:this.countColoured("yellow"),red:this.countColoured("red")}}},methods:{costCount(t){return this.other.filter(r=>t<3?r.stats.cost==t:r.stats.cost>=t).reduce((r,s)=>r+s.total,0)},countColoured(t){const e={blue:3,yellow:2,red:1},r=this.other.filter(o=>o.stats.resource==e[t]);var s=0;for(var n in r)s+=r[n].total;return s},pitchCount(t){return this.other.filter(r=>r.stats.resource==t).reduce((r,s)=>r+s.total,0)},averageCardType(t,e){return(this.totalCardType(t,e)/t.length).toFixed(1)},totalCardType(t,e){return t.reduce((r,s)=>{let n=0;for(let o=0;o<e.length;o++)s.keywords.includes(e[o])&&n++;return n<e.length?r:r+s.total},0)},countCards(t){return a.reduce(t,(e,r)=>e+r.total,0)}}};export{i as V};
