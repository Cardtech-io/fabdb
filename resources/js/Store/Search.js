export default {
    namespaced: true,

    state: {
        page: 1
    },

    mutations: {
        setPage: function(state, { page }) {
            state.page = page;
        }
    },

    actions: {
        setPage: function({ commit }, { page }) {
            commit('setPage', { page });
        }
    }
};
