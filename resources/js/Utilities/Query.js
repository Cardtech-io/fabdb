export default {
    methods: {
        updateQuery(params) {
            let query = this.combineParams(params);

            this.$router.push({
                query: query
            }).catch(e => {});
        },

        combineParams(params) {
            return { ...this.clone(this.$route.query), ...params};
        },

        clone(query) {
            return JSON.parse(JSON.stringify(query))
        },

        onlyParams(...args) {
            let params = {};
            let query = this.clone(this.$route.query);

            for (var i in query) {
                if (args.indexOf(i) !== -1) {
                    params[i] = query[i];
                }
            }

            return params;
        }
    }
};
