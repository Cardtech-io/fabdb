require('./bootstrap');
require('./axios-config');

import Vue from 'vue';
import Authenticator from './Auth/Authenticator.vue';
import Navigation from './Components/Navigation.vue';
import router from './router.js';

Vue.component('authenticator', Authenticator);
Vue.component('navigation', Navigation);

const app = new Vue({
    router
}).$mount('#app');
