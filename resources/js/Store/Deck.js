import _ from 'underscore';

function find(card, cards) {
    return cards.filter(existing => {
        return existing.identifier == card.identifier;
    })[0];
};

// Add a card to a collection
function add(card, cards) {
    let existing = find(card, cards);

    if (existing) {
        existing.total += 1;
    } else {
        existing = _.clone(card);
        existing.total = 1;
        cards.push(existing);
    }

    return existing;
};

// Remove a card from a collection
function remove(card, cards, bin) {
    const existing = find(card, cards);

    if (existing && existing.total > 1 && !bin) {
        existing.total -= 1;
    } else {
        // Need to remove from array completely
        let key = null;

        for (let i in cards) {
            let match = cards[i];

            if (match.identifier === card.identifier) {
                key = i;
                break;
            }
        }

        if (key) {
            cards.splice(key, 1);
        }
    }
};

function setTotal(card, cards, total) {
    let existing = find(card, cards);

    // If it exists, manage it
    if (existing) {
        if (total) {
            existing.total = total;
        } else {
            remove(card, cards, true);
        }
    }
    else if (total) {
        existing = add(card, cards);
        existing.total = total;
    }
}

function setMaxTotal(card, cards, max) {
    let existing = find(card, cards);

    // If it exists, ensure it doesn't eclipse the max
    if (existing) {
        if (max && existing.total > max) {
            existing.total = max;
        }
        else if (max === 0) {
            remove(card, cards, true);
        }
    }
}

// the following matrix dictates the floor and ceiling
// of the zoom level based on whether or not fullscreen
// is enabled, and whether or not the mode is set to all.
let zoomMatrix = [
    [[5,4],[2,1]], // fullscreen
    [[4,3],[1,0]]
];

function controlMaxZoom(state) {
    let ms = state.mode === 'all' ? 0 : 1;

    // Moving to fullscreen, increase minimum
    if (state.fullScreen && state.zoom === zoomMatrix[1][1][ms]) {
        state.zoom = zoomMatrix[0][1][ms];
    }

    if (!state.fullScreen && state.zoom === zoomMatrix[0][0][ms]) {
        state.zoom = zoomMatrix[1][0][ms];
    }
}

export default {
    namespaced: true,

    state: {
        deck: {},
        cards: [],
        filters: [],
        keywords: '',
        grouping: 'default',
        sections: {
            'All cards': true,
            'Attack actions': true,
            'Attack reactions': true,
            'Defense reactions': true,
            'Equipment': true,
            'Hero': true,
            'Instants': true,
            'Items': true,
            'Loadout': true,
            'Miscellaneous': true,
            'Non-Attack actions': true,
            'Other': true,
            'Weapons': true,
        },
        sideboard: [],
        fullScreen: false,
        mode: 'all',
        view: 'text',
        zoom: 2,
    },

    getters: {
        cards: state => {
            return state.cards;
        },

        fsIndex: state => {
            return state.fullScreen ? 0 : 1;
        },

        msIndex: state => {
            return state.mode === 'all' ? 0 : 1;
        },

        maxZoom: (state, getters) => {
            return zoomMatrix[getters.fsIndex][0][getters.msIndex];
        },

        minZoom: (state, getters) => {
            return zoomMatrix[getters.fsIndex][1][getters.msIndex];
        },

        requiresSideboard: (state) => {
            return state.deck.format !== 'blitz';
        },

        sectionOpen: (state) => (section) => {
            return state.sections[section] === undefined || state.sections[section];
        },
    },

    mutations: {
        addCard(state, { card, collection }) {
            add(card, collection);
        },

        removeCard(state, { card, collection }) {
            remove(card, collection);
        },

        removeCardFromDeck(state, { card }) {
            remove(card, state.cards);
            remove(card, state.sideboard);
        },

        clearFilters(state) {
            state.filters = [];
        },

        toggleFilter(state, { filter }) {
            let key = -1;

            if ((key = state.filters.indexOf(filter)) > -1) {
                state.filters.splice(key, 1);
            } else {
                state.filters.push(filter);
            }
        },

        toggleView(state) {
            state.view = state.view === 'text' ? 'gallery' : 'text';
        },

        setCardTotal(state, { card, total }) {
            setTotal(card, state.cards, total);
            setMaxTotal(card, state.sideboard, total);
        },

        setDeck(state, { deck }) {
            state.deck = deck;
            state.cards = _.sortBy(deck.cards, 'identifier');
            state.sideboard = _.sortBy(deck.sideboard, 'identifier');
        },

        setFullScreen(state, { fullScreen }) {
            state.fullScreen = fullScreen;
            controlMaxZoom(state);
        },

        setGrouping(state, { grouping }) {
            state.grouping = grouping;
        },

        setMode(state, { mode }) {
            state.mode = mode;
        },

        toggleSection(state, {section, status}) {
            state.sections[section] = status;
        },

        zoom(state, { n }) {
            let fs = state.fullScreen ? 0 : 1;
            let ms = state.mode === 'all' ? 0 : 1;

            if ((n === -1 && state.zoom > zoomMatrix[fs][1][ms]) || (n === 1 && state.zoom < zoomMatrix[fs][0][ms])) {
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

        toggleSection(context, {section}) {
            let value = context.getters.sectionOpen(section);

            context.commit('toggleSection', {section, status: !value});
        },

        toggleView({ commit, state }) {
            commit('toggleView');
        },

        removeFromSideBoard({ commit, state }, { card }) {
            commit('removeCard', { card, collection: state.sideboard });
        },

        removeCard({ commit }, { card }) {
            commit('removeCardFromDeck', { card });
        },

        setCardTotal({ commit }, { card, total }) {
            commit('setCardTotal', { card, total });
        },

        setDeck(context, { deck }) {
            context.commit('setDeck', { deck });
        },

        setGrouping(context, { grouping }) {
            context.commit('setGrouping', { grouping });
        },

        setMode(context, { mode }) {
            context.commit('setMode', { mode });
        },

        clearFilters(context) {
            context.commit('clearFilters');
        },

        toggleFilter(context, { filter }) {
            context.commit('toggleFilter', { filter });
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
