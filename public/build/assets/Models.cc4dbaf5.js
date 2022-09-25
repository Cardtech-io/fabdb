const a={hydrateMany(r,t){return r.map(e=>this.hydrate(e,t))},hydrate(r,t){return new t(r)},hydratePaginated(r,t){return r.data=this.hydrateMany(r.data,t),r}};export{a as M};
