require('./bootstrap');
require('./axios-config');

import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import Authenticator from './Auth/Authenticator.vue';
import Navigation from './Components/Navigation.vue';
import Messages from './Components/Messages.vue';
import store from './Store/Application';
import router from './router.js';

Vue.use(VueClipboard);

Vue.component('authenticator', Authenticator);
Vue.component('navigation', Navigation);
Vue.component('messages', Messages);

const app = new Vue({
    router,
    store
}).$mount('#app');
