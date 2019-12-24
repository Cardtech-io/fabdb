export default {
    namespaced: true,

    state: {
        session: null
    },

    mutations: {
        setSession: function(state, {sessionData}) {
            state.session = sessionData;
        }
    },

    actions: {
        setSession: function({commit}, {sessionData}) {
            commit('setSession', {sessionData});
        }
    },

    getters: {
        user: state => {
            return state.session.user;
        }
    }
};
