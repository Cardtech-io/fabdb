export default {
    namespaced: true,

    state: {
        filters: [],
        format: 'sealed',
        fullScreen: false,
        grouping: '',
        practise: null,
        zoom: 2,
    },

    mutations: {
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
            let packsRequired = state.practise.format === 'sealed' ? 6 : 9;
            let total = packsRequired - state.practise.packs.length;

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
        }
    }
}
