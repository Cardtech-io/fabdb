export default {
    namespaced: true,

    state: {
        messages: [],
        timeouts: [],
    },

    mutations: {
        acknowledge(state , { index }) {
            state.messages.splice(index, 1);
        },

        addMessage(state, { status, message }) {
            state.messages.unshift({ status: status, message: message, total: 1 });
        },

        incrementMessage(state, { index }) {
            clearTimeout(state.timeouts[index]);
            state.messages[index].total += 1;
        },

        timeout(state, { index }) {
            state.timeouts[index] = setTimeout(function() {
                state.messages.splice(index, 1);
            }, 3000);
        }
    },

    actions: {
        acknowledge({ commit }, { index }) {
            commit('acknowledge', { index });
        },

        addMessage({ commit, state }, { status, message }) {
            let index = -1;

            for (let i in state.messages) {
                if (state.messages[i].message == message) {
                    index = i;
                    break;
                };
            }

            if (index > -1) {
                commit('incrementMessage', { index });
            } else {
                commit('addMessage', { status, message });
                index = state.messages.length - 1;
            }

            commit('timeout', { index });
        }
    }
};
