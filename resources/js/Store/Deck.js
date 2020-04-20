import _ from 'underscore';

function find(card, cards) {
    return cards.filter(existing => {
        return existing.identifier == card.identifier;
    })[0];
};

// Add a card to a collection
function add(card, cards) {
    const existing = find(card, cards);

    if (existing) {
        existing.total += 1;
    } else {
        card = _.clone(card);
        card.total = 1;
        cards.push(card);
    }
};

// Remove a card from a collection
function remove(card, cards) {
    const existing = find(card, cards);

    if (existing.total > 1) {
        existing.total -= 1;
    } else {
        // Need to remove from array completely
        let key = null;

        for (let i in cards) {
            let match = cards[i];

            if (match.identifier == card.identifier) {
                key = i;
                break;
            }
        }

        if (key) {
            cards.splice(key, 1);
        }
    }
};

// the following matrix dictates the floor and ceiling
// of the zoom level based on whether or not fullscreen
// is enabled, and whether or not the mode is set to all.
let zoomMatrix = [
    [[4,3],[2,1]], // fullscreen
    [[3,2],[1,0]]
];

function controlMaxZoom(state) {
    let ms = state.mode == 'all' ? 0 : 1;

    // Moving to fullscreen, increase minimum
    if (state.fullScreen && state.zoom == zoomMatrix[1][1][ms]) {
        state.zoom = zoomMatrix[0][1][ms];
    }

    if (!state.fullScreen && state.zoom == zoomMatrix[0][0][ms]) {
        state.zoom = zoomMatrix[1][0][ms];
    }
}

export default {
    namespaced: true,

    state: {
        deck: {},
        cards: [],
        sideboard: [],
        fullScreen: false,
        mode: 'all',
        zoom: 1,
    },

    getters: {
        fsIndex: state => {
            return state.fullScreen ? 0 : 1;
        },

        msIndex: state => {
            return state.mode == 'all' ? 0 : 1;
        },

        maxZoom: (state, getters) => {
            return zoomMatrix[getters.fsIndex][0][getters.msIndex];
        },

        minZoom: (state, getters) => {
            return zoomMatrix[getters.fsIndex][1][getters.msIndex];
        }
    },

    mutations: {
        addCard(state, { card, collection }) {
            add(card, collection);
        },

        removeCard(state, { card, collection }) {
            remove(card, collection);
        },

        setDeck(state, { deck }) {
            state.deck = deck;
            state.cards = _.sortBy(deck.cards, 'identifier');
            state.sideboard = _.sortBy(deck.sideboard, 'identifier');
        },

        setFullScreen(state, { fullScreen }) {
            state.fullScreen = fullScreen;
        },

        setMode(state, { mode }) {
            state.mode = mode;
            controlMaxZoom(state);
        },

        zoom(state, { n }) {
            let fs = state.fullScreen ? 0 : 1;
            let ms = state.mode == 'all' ? 0 : 1;

            if ((n == -1 && state.zoom > zoomMatrix[fs][1][ms]) || (n == 1 && state.zoom < zoomMatrix[fs][0][ms])) {
                state.zoom += n;
            }
        }
    },

    actions: {
        addCard({ commit, state }, { card }) {
            commit('addCard', { card, collection: state.cards });
        },

        addToSideboard({ commit, state }, { card }) {
            commit('addCard', { card, collection: state.sideboard });
        },

        removeFromSideBoard({ commit, state }, { card }) {
            commit('removeCard', { card, collection: state.sideboard });
        },

        removeCard({ commit, state }, { card }) {
            commit('removeCard', { card, collection: state.cards });
        },

        setDeck(context, { deck }) {
            context.commit('setDeck', { deck });
        },

        setMode(context, { mode }) {
            context.commit('setMode', { mode });
        },

        toggleFullScreen({ commit, state }) {
            commit('setFullScreen', { fullScreen: !state.fullScreen });

            let n = state.fullScreen ? 1 : -1;

            commit('zoom', { n })
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
