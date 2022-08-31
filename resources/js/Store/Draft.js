export default {
    namespaced: true,

    state: {
        filters: [],
        format: 'sealed',
        fullScreen: false,
        grouping: 'name',
        practise: null,
        zoom: 2,
    },

    mutations: {
        clearFilters(state) {
            state.filters = [];
        },

        toggleFilter(state, {filter}) {
            let key = -1;

            if ((key = state.filters.indexOf(filter)) > -1) {
                state.filters.splice(key, 1);
            } else {
                state.filters.push(filter);
            }
        },

        crackPack(state, {cards, pack}) {
            state.practise.packs.splice(pack, 1, cards);
        },

        selectSet(state, {set}) {
            state.set = set;
        },

        setFormat(state, {format}) {
            state.format = format;
        },

        setPractise(state, {practise}) {
            state.practise = practise;
        },

        generatePacks(state) {
            let packsPerFormat = {
                'draft': 3,
                'sealed' : 6,
                'team-sealed': 9
            };

            let requiredPacks = packsPerFormat[state.practise.format];
            
            let total = requiredPacks - state.practise.packs.length;

            for (let i = 0; i < total; i++) {
                state.practise.packs.push([]);
            }
        },

        setGrouping(state, {grouping}) {
            state.grouping = grouping;
        },

        toggleFullScreen(state) {
            state.fullScreen = !state.fullScreen;
        },
    },

    actions: {
        crackPack({commit}, {cards, pack}) {
            commit('crackPack', {cards, pack});
        },

        selectSet({commit}, {set}) {
            commit('selectSet', {set});
        },

        setPractise({commit}, {practise}) {
            commit('setPractise', {practise});
            commit('generatePacks');
        },

        reset({commit}) {
            commit('setPractise', {practise: null});
            commit('selectSet', {set: null});
        },

        clearFilters({commit}) {
            commit('clearFilters');
        },

        toggleFilter({commit}, {filter}) {
            commit('toggleFilter', {filter});
        }
    }
}
