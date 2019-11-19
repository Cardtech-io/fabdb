require('./bootstrap');
require('./axios-config');

import Vue from 'vue';
import Authenticator from './Auth/Authenticator.vue';
import router from './router.js';

Vue.component('authenticator', Authenticator);

const app = new Vue({
    router
}).$mount('#app');
