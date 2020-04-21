import Vue from 'vue';
import Vuex from 'vuex';

import deck from './Deck';
import messages from './Messages';
import session from './Session';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        deck,
        messages,
        session
    }
});
