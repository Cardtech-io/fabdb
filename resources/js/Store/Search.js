export default {
    namespaced: true,

    state: {
        params: {
            currency: 'USD',
            format: null,
            hero: null,
            order: 'newest',
            keywords: '',
            page: 1,
        }
    },

    mutations: {
        setKeywords(state, { keywords }) {
            state.params.keywords = keywords;
        },

        setPage(state, { page }) {
            state.params.page = page;
        },

        updateParam(state, { key, value }) {
            state.params[key] = value;
        }
    },

    actions: {
        setKeywords({ commit }, { keywords }) {
            commit('setKeywords', { keywords });
        },

        setPage({ commit }, { page }) {
            commit('setPage', { page });
        },

        updateParam({ commit }, { key, value }) {
            commit('updateParam', { key, value });
        }
    }
};
