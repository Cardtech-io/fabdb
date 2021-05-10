export default {
    namespaced: true,

    state: {
        format: 'sealed',
        fullScreen: false,
        grouping: 'pack',
        packs: [],
        set: null,
    },

    mutations: {
        generatePacks(state) {
            let numPacks = state.format === 'sealed' ? 6 : 9;

            for (let i = 0; i < numPacks; i++) {
                state.packs.push({});
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

        }
    },

    actions: {
        selectSet({commit}, {set}) {
            commit('selectSet', {set});
            commit('generatePacks');
        },

        reset({commit}, {format}) {
            commit('resetPacks');
            commit('setFormat', {format});
            commit('selectSet', {set: null});
        }
    }
}
