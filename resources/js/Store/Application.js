import Vue from 'vue';
import Vuex from 'vuex';
import messages from './Messages';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules: {
        messages
    }
});
