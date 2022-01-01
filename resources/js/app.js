require('./bootstrap');

import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import { VueMasonryPlugin } from 'vue-masonry';
import VueMeta from 'vue-meta';
import VueAwesomeCountdown from 'vue-awesome-countdown';
import VModal from 'vue-js-modal';
import Vue2TouchEvents from 'vue2-touch-events';
import VueMq from 'vue-mq'

import App from './App.vue';
import Breadcrumbs from "./Components/Breadcrumbs";
import CardAd from "./CardDatabase/CardAd";
import CardImage from "./CardDatabase/CardImage";
import Icon from "./Components/Icon";
import HeaderTitle from "./Components/HeaderTitle";
import RaritySymbol from "./CardDatabase/RaritySymbol";
import SkuFinish from "./CardDatabase/SkuFinish";
import store from './Store/Application';
import router from './router.js';
import config from './axios-config';

import 'vue-datetime/dist/vue-datetime.css';

Vue.component('breadcrumbs', Breadcrumbs);
Vue.component('card-ad', CardAd);
Vue.component('card-image', CardImage);
Vue.component('icon', Icon);
Vue.component('rarity-symbol', RaritySymbol);
Vue.component('sku-finish', SkuFinish);
Vue.component('header-title', HeaderTitle);

Vue.use(VueAwesomeCountdown, 'vac');

Vue.use(Vue2TouchEvents, {
    disableClick: true,
    swipeTolerance: 60
});

Vue.use(VueMq, {
    breakpoints: {
        "sm": 640,
        "md": 768,
        "lg": 1204,
        "xl": 1280,
        "2xl": 1536
    }
});

Vue.use(VModal, {
    injectModalsContainer: true
});

Vue.use(VueClipboard);
Vue.use(VueMeta);
Vue.use(VueMasonryPlugin);

Vue.prototype.$settings = window.settings;
Vue.prototype.$eventHub = new Vue;
Vue.prototype.lang = JSON.parse(atob(window.lang));

App.router = router;
App.store = store;

config(router);

new Vue(App).$mount('#app');
