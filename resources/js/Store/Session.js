export default {
    namespaced: true,

    state: {
        session: {}
    },

    mutations: {
        setSession: function(state, { session }) {
            state.session = session;
        },

        setUser: function(state, { user }) {
            state.session.user = user;
        },

        setUserParam: function(state, { param, value }) {
            state.session.user[param] = value;
        }
    },
    
    actions: {
        setSession: function({ commit }, { session }) {
            commit('setSession', { session });
        },

        setUser: function({ commit }, { user }) {
            commit('setUser', { user });
        },

        setUserParam: function({ commit }, { param, value }) {
            commit('setUserParam', { param, value });
        }
    },

    getters: {
        user: state => {
            return state.session.user;
        }
    }
};
