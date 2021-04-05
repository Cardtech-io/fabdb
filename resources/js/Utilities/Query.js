import _ from 'underscore';

export default {
    methods: {
        buildQuery(params) {
            return _.mapObject(this.combineParams(params), param => {
                if (Array.isArray(param)) {
                    return param.join(',');
                }

                return param;
            });
        },

        fromQuery(params) {
            return _.mapObject(params, (param, key) => {
                if (['class', 'cardType', 'rarity'].indexOf(key) !== -1) {
                    return param.split(',');
                }

                return param;
            });
        },

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
