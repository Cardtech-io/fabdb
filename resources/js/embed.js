require('./bootstrap');

import Vue from 'vue';

import Embed from './Embed.vue';
import store from './Store/Application';

Vue.prototype.$settings = window.settings;
Vue.prototype.$eventHub = new Vue;

Embed.store = store;

new Vue(Embed).$mount('#app');
