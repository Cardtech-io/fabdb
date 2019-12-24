export default {
    namespaced: true,

    state: {
        messages: []
    },

    mutations: {
        acknowledge(state , { index }) {
            state.messages.splice(index, 1);
        },

        addMessage(state, { status, message }) {
            state.messages.push({ status: status, message: message });
        }
    },

    actions: {
        acknowledge({ commit }, { index }) {
            commit('acknowledge', { index });
        },

        addMessage({ commit, state }, { status, message }) {
            commit('addMessage', { status, message });

            setTimeout(function() {
                let index = state.messages.length - 1;
                commit('acknowledge', { index });
            }, 3000);
        }
    }
};
