export default {
    namespaced: true,

    state: {
        deck: [],
        fullScreen: false,
        zoom: 1,
    },

    mutations: {
        setDeck(state, { deck }) {
            state.deck = deck;
        },

        setFullScreen(state, { fullScreen }) {
            state.fullScreen = fullScreen;
        },

        zoom(state, { n }) {
            if ((n == -1 && state.zoom > 0) || (n == 1 && state.zoom < 3)) {
                state.zoom += n;
            }
        }
    },

    actions: {
        setDeck(context, { deck }) {
            context.commit('setDeck', { deck });
        },

        toggleFullScreen(context) {
            context.commit('setFullScreen', { fullScreen: !context.state.fullScreen });
        },

        zoomIn(context) {
            context.commit('zoom', { n: -1 });
        },

        zoomOut(context) {
            context.commit('zoom', { n: 1 });
        },

        setZoom(context, { n }) {
            context.commit('zoom', { n });
        }
    }
};
