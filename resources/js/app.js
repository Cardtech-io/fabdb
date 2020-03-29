require('./bootstrap');
require('./axios-config');

import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import { VueMasonryPlugin } from 'vue-masonry';
import VueMeta from 'vue-meta';
import App from './App.vue';
import store from './Store/Application';
import router from './router.js';

import 'vue-datetime/dist/vue-datetime.css';

Vue.use(VueClipboard);
Vue.use(VueMeta);
Vue.use(VueMasonryPlugin);

App.router = router;
App.store = store;

new Vue(App).$mount('#app');
