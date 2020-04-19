import _ from 'underscore';

function find(card, cards) {
    return cards.filter(deckCard => {
        return deckCard.identifier == card.identifier;
    })[0];
};

export default {
    namespaced: true,

    state: {
        deck: {},
        cards: [],
        fullScreen: false,
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
            
            if (fullScreen && state.zoom == 0) {
                state.zoom = 1;
            }

            if (!fullScreen && state.zoom == 3) {
                state.zoom = 2;
            }
        },

        zoom(state, { n }) {
            if ((n == -1 && state.zoom > 0) || (n == 1 && state.zoom < 3)) {
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
