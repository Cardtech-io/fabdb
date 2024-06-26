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
                if (['class', 'cardType', 'rarity', 'set', 'talent', ';'].indexOf(key) !== -1) {
                    return param.split(',').filter(value => !!value);
                }

                return param;
            });
        },

        updateQuery(params) {
            let query = this.buildQuery(params);

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

        exceptParams(...args) {
            let params = {};
            let query = this.clone(this.$route.query);

            for (var i in query) {
                if (args.indexOf(i) !== -1) continue;

                params[i] = query[i];
            }

            return params;
        }
    }
};
