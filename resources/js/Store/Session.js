export default {
    namespaced: true,

    state: {
        collapsed: false,
        session: {},
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
        bootState({ state }) {
            state.collapsed = localStorage.getItem('collapsed') === 'true';
        },

        toggleCollapse({ state }) {
            state.collapsed = !state.collapsed;
            localStorage.setItem('collapsed', state.collapsed.toString());
        },

        setSession({ commit }, { session }) {
            commit('setSession', { session });

            // If the user is a subscriber, switch the default deck view to gallery
            if (session.user && session.user.subscription) {
                commit('deck/toggleView', null, { root: true });
            }
        },

        setUser: function({ commit }, { user }) {
            commit('setUser', { user });
        },

        setUserParam: function({ commit }, { param, value }) {
            commit('setUserParam', { param, value });
        }
    },

    getters: {
        // Returns true if the user can be marketed to (ads)
        marketable: state => {
            return !state.session.user || !state.session.user.subscription || ['supporter', 'trial'].indexOf(state.session.user.subscription) !== -1;
        },

        subscribed: state => {
            return state.session.user && state.session.user.subscription;
        },

        majestic: (state, getters) => {
            return getters.subscribed && ['majestic', 'legendary', 'fabled'].indexOf(state.session.user.subscription) !== -1;
        },

        legendary: (state, getters) => {
            return getters.subscribed && ['legendary', 'fabled'].indexOf(state.session.user.subscription) !== -1;
        },

        user: state => {
            return state.session.user;
        },

        wantsBorders: state => {
            return !state.session.user || state.session.user.view == 'bordered';
        }
    }
};
