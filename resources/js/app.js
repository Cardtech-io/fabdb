require('./bootstrap');

import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import { VueMasonryPlugin } from 'vue-masonry';
import VueMeta from 'vue-meta';
import VueAwesomeCountdown from 'vue-awesome-countdown';
import VModal from 'vue-js-modal';
import Vue2TouchEvents from 'vue2-touch-events';

import App from './App.vue';
import CardAd from "./CardDatabase/CardAd";
import CardImage from "./CardDatabase/CardImage";
import store from './Store/Application';
import router from './router.js';
import config from './axios-config';

import 'vue-datetime/dist/vue-datetime.css';

Vue.component('card-ad', CardAd);
Vue.component('card-image', CardImage);
Vue.use(VueAwesomeCountdown, 'vac');
Vue.use(Vue2TouchEvents, {
    swipeTolerance: 60
});
Vue.use(VModal, { injectModalsContainer: true });
Vue.use(VueClipboard);
Vue.use(VueMeta);
Vue.use(VueMasonryPlugin);

Vue.prototype.$settings = window.settings;
Vue.prototype.$eventHub = new Vue;

App.router = router;
App.store = store;

config(router);

new Vue(App).$mount('#app');
