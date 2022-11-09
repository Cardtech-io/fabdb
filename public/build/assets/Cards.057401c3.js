import{i}from"./app.18971425.js";class r{constructor(t){this.cards=t}applyFilters(t){return new r(this.cards.filter(e=>!!(t.indexOf("actions")>-1&&this.isAction(e)||t.indexOf("attacks")>-1&&this.isAttack(e)||t.indexOf("attackReactions")>-1&&this.isAttackReaction(e)||t.indexOf("instants")>-1&&this.isInstant(e)||t.indexOf("defenseReactions")>-1&&this.isDefenseReaction(e))))}averageAttack(){return(this.attackActions().reduce((t,e)=>t+e.stats.attack*e.total,0)/this.attackActions().total()).toFixed(1)}averageBlock(){return(this.withDefense().reduce((t,e)=>t+e.stats.defense*e.total,0)/this.withDefense().total()).toFixed(1)}attacksPerHand(){return(this.attackActions().total()/(this.deck().total()/4)).toFixed(1)}forClass(){return this.filter(t=>t.class!==null&&t.class!=="generic")}forGeneric(){return this.filter(t=>t.class==="generic")}isAction(t){return t.keywords.includes("action")&&!t.keywords.includes("attack")}isAttack(t){return t.keywords.includes("attack")&&!t.keywords.includes("reaction")}isAttackReaction(t){return t.keywords.includes("attack")&&t.keywords.includes("reaction")}isDefenseReaction(t){return t.keywords.includes("defense")&&t.keywords.includes("reaction")}isInstant(t){return t.keywords.includes("instant")}hero(){return this.cards.filter(t=>t.type==="hero")[0]}miscellaneous(){return new r(this.cards.filter(t=>t.keywords.includes("resource")))}attackActions(){return new r(this.cards.filter(t=>this.isAttack(t)))}nonAttackActions(){return new r(this.cards.filter(t=>this.isAction(t)))}attackReactions(){return new r(this.cards.filter(t=>this.isAttackReaction(t)))}defenseReactions(){return new r(this.cards.filter(t=>this.isDefenseReaction(t)))}weapons(){return new r(this.cards.filter(t=>t.keywords.includes("weapon")))}equipment(){return new r(this.cards.filter(t=>t.keywords.includes("equipment")))}items(){return new r(this.cards.filter(t=>t.keywords.includes("item")))}instants(){return new r(this.cards.filter(t=>this.isInstant(t)))}colouredCount(t){const e={blue:3,yellow:2,red:1};return this.filter(s=>s.stats.resource&&s.stats.resource==e[t]).total()}other(){let t=this.cards.filter(e=>!(e.keywords.includes("hero")||e.keywords.includes("equipment")||e.keywords.includes("weapon")));return new r(i.sortBy(t,e=>e.stats?e.stats.resource:0))}deck(){return this.other()}withCost(){return this.other().filter(t=>t.stats&&!isNaN(t.stats.cost))}withResource(){return this.other().filter(t=>t.stats&&!isNaN(t.stats.resource))}withDefense(){return this.other().filter(t=>t.stats&&!isNaN(t.stats.defense))}withPower(){return this.deck().filter(t=>t.stats&&!isNaN(t.stats.attack))}sort(){return new r(i.sortBy(this.cards,t=>{let e=t.stats?t.stats.resource:"";return t.name+e}))}filter(t){return new r(this.cards.filter(t))}reduce(t,e){return this.cards.reduce(t,e)}find(t){return this.cards.filter(e=>e.identifier===t.identifier)[0]}findKey(t){for(let e in this.cards)if(this.cards[e].identifier===t.identifier)return e;return!1}hydrate(){let t=(e,s)=>{for(let n=0;n<s.total;n++)e.push(s);return e};return new r(this.cards.reduce(t,[]))}total(){return this.cards.reduce((t,e)=>t+e.total,0)}deckTotal(t){return t==="constructed"?this.total()-1:this.total()}count(){return this.cards.length}add(t){const e=this.find(t);e?e.total+=1:(t=JSON.parse(JSON.stringify(t)),t.total=1,this.cards.push(t))}group(t){let e=typeof t=="string"?s=>s[t]:t;return new r(Object.values(i.groupBy(this.cards,e)))}concat(t){return t=t instanceof r?t.all():t,new r(this.cards.concat(t))}remove(t){const e=this.find(t);if(e&&e.total>1)e.total-=1;else{let s=this.findKey(t);s!==!1&&this.cards.splice(s,1)}return this}all(){return this.cards}each(t){this.cards.forEach(t)}[Symbol.iterator](){return this.cards.values()}}export{r as C};
