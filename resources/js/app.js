require('./bootstrap');

import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import { VueMasonryPlugin } from 'vue-masonry';
import VueMeta from 'vue-meta';
import VModal from 'vue-js-modal'

import App from './App.vue';
import store from './Store/Application';
import router from './router.js';
import config from './axios-config';

import 'vue-datetime/dist/vue-datetime.css';

Vue.use(VModal, { injectModalsContainer: true });
Vue.use(VueClipboard);
Vue.use(VueMeta);
Vue.use(VueMasonryPlugin);

App.router = router;
App.store = store;

config(router);

new Vue(App).$mount('#app');
