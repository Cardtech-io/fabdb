import Vue from 'vue';
import Vuex from 'vuex';

import deck from './Deck.js';
import draft from './Draft.js';
import messages from './Messages.js';
import cardSearch from './Search.js';
import deckSearch from './Search.js';
import performance from './Performance';
import session from './Session.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cardSearch,
        deckSearch,
        deck,
        draft,
        messages,
        performance,
        session
    }
});
