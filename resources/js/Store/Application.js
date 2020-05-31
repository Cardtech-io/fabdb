import Vue from 'vue';
import Vuex from 'vuex';

import deck from './Deck';
import messages from './Messages';
import cardSearch from './Search';
import deckSearch from './Search';
import session from './Session';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cardSearch,
        deckSearch,
        deck,
        messages,
        session
    }
});
