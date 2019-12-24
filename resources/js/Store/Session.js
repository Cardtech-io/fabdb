export default {
    namespaced: true,

    state: {
        user: null
    },

    mutations: {
        setUser: function(state, {userData}) {
            state.user = userData;
        }
    },

    actions: {
        setUser: function({commit}, {userData}) {
            commit('setUser', {userData});
        }
    }
};
