require('./bootstrap');
require('./axios-config');

import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import Authenticator from './Auth/Authenticator.vue';
import Navigation from './Components/Navigation.vue';
import router from './router.js';

Vue.use(VueClipboard);

Vue.component('authenticator', Authenticator);
Vue.component('navigation', Navigation);

const app = new Vue({
    router
}).$mount('#app');
