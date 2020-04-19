import _ from 'underscore';

function find(card, cards) {
    return cards.filter(deckCard => {
        return deckCard.identifier == card.identifier;
    })[0];
};

// the following matrix dictates the floor and ceiling
// of the zoom level based on whether or not fullscreen
// is enabled, and whether or not the mode is set to all.
let zoomMatrix = [
    [[4,3],[2,1]], // fullscreen
    [[3,2],[1,0]]
];

export default {
    namespaced: true,

    state: {
        deck: {},
        cards: [],
        fullScreen: false,
        mode: 'all',
        zoom: 1,
    },

    mutations: {
        addCard(state, { card }) {
            const deckCard = find(card, state.cards);

            if (deckCard) {
                deckCard.total += 1;
            } else {
                card.total = 1;
                state.cards.push(card);
            }
        },

        removeCard(state, { card }) {
            const deckCard = find(card, state.cards);

            if (deckCard.total > 1) {
                deckCard.total -= 1;
            } else {
                // Need to remove from array completely
                let key = null;

                for (let i in state.cards) {
                    let match = state.cards[i];

                    if (match.identifier == card.identifier) {
                        key = i;
                        break;
                    }
                }

                if (key) {
                    state.cards.splice(key, 1);
                }
            }
        },

        setDeck(state, { deck }) {
            state.deck = deck;
            state.cards = _.sortBy(deck.cards, 'identifier');
        },

        setFullScreen(state, { fullScreen }) {
            state.fullScreen = fullScreen;

            let ms = state.mode == 'all' ? 0 : 1;

            if (fullScreen && state.zoom == 0) {
                state.zoom = zoomMatrix[0][ms][0];
            }

            if (!fullScreen && state.zoom == 4) {
                state.zoom = zoomMatrix[1][ms][0];
            }
        },

        setMode(state, { mode }) {
            state.mode = mode;
        },

        zoom(state, { n }) {
            let fs = state.fullScreen ? 0 : 1;
            let ms = state.mode == 'all' ? 0 : 1;

            console.log(state.zoom, zoomMatrix[fs][1][ms], zoomMatrix[fs][0][ms])
            if ((n == -1 && state.zoom > zoomMatrix[fs][1][ms]) || (n == 1 && state.zoom < zoomMatrix[fs][0][ms])) {
                state.zoom += n;
            }
        }
    },

    actions: {
        addCard({ commit }, { card }) {
            commit('addCard', { card });
        },

        removeCard({ commit }, { card }) {
            commit('removeCard', { card });
        },

        setDeck(context, { deck }) {
            context.commit('setDeck', { deck });
        },

        setMode(context, { mode }) {
            context.commit('setMode', { mode });
        },

        toggleFullScreen({ commit, state }) {
            commit('setFullScreen', { fullScreen: !state.fullScreen });
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
