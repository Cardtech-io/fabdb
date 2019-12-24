import Vue from 'vue';
import Vuex from 'vuex';
import messages from './Messages';
import session from './Session';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules: {
        messages,
        session
    }
});
