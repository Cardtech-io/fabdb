export default {
    namespaced: true,

    state: {
        format: 'sealed',
        fullScreen: false,
        grouping: 'pack',
        packs: [],
        practise: null,
        set: null,
    },

    mutations: {
        generatePacks(state) {
            let numPacks = state.format === 'sealed' ? 6 : 9;

            for (let i = 0; i < numPacks; i++) {
                state.packs.push([]);
            }
        },

        resetPacks(state) {
            state.packs = [];
        },

        selectSet(state, {set}) {
            state.set = set;
        },

        setFormat(state, {format}) {
            state.format = format;
        },

        setPractise(state, {practise}) {
            state.practise = practise;
        }
    },

    actions: {
        selectSet({commit}, {set}) {
            commit('selectSet', {set});
        },

        setPractise({commit}, {practise}) {
            commit('setPractise', {practise});
            commit('selectSet', {set: practise.set});
            commit('generatePacks');
        },

        reset({commit}) {
            commit('setPractise', {practise: null});
            commit('resetPacks');
            commit('selectSet', {set: null});
        }
    }
}
