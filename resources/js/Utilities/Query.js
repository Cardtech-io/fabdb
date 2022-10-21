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

        async updateQuery(params) {
            let query = this.buildQuery(this.filterParams(params));

            await this.$router.push({
                query: query
            }).catch(e => {});
        },

        filterParams(params) {
            let filtered = {};

            for (let i in params) {
                if (params[i]) filtered[i] = params[i]
            }

            return filtered;
        },

        combineParams(params) {
            return {...params};
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
