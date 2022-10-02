export default {
    namespaced: true,

    state: {
        deck: null,
        view: 'me',
        window: 30,
    },

    mutations: {
        setDeck(state, {deck}) {
            state.deck = deck;
        },

        setView(state, {view}) {
            state.view = view;
        },

        setWindow(state, {window}) {
            state.window = window;
        }
    }
}
