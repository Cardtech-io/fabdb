export default {
    namespaced: true,

    state: {
        params: {
            currency: 'USD',
            cursor: null,
            format: null,
            label: '',
            hero: null,
            order: 'newest',
            keywords: '',
            page: null,
        }
    },

    mutations: {
        setKeywords(state, { keywords }) {
            state.params.keywords = keywords;
            state.params.cursor = null;
        },

        setPage(state, { page }) {
            state.params.page = page;
            state.params.cursor = null;
        },

        updateParam(state, { key, value }) {
            state.params[key] = value;
            state.params.cursor = null;
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
