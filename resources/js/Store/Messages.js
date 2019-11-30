export default {
    namespaced: true,

    state: {
        messages: []
    },

    mutations: {
        addMessage(state, { status, message }) {
            console.log(status, message);
            state.messages.push({ status: status, message: message });
        }
    },

    actions: {
        addMessage({ commit }, { status, message }) {
            commit('addMessage', { status, message });
        }
    }
};
