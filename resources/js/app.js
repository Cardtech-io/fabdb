import './bootstrap';
import '../css/fabdb.css';
import Vue from 'vue';

import VueClipboard from 'vue-clipboard2';
import { VueMasonryPlugin } from 'vue-masonry';
import VueMeta from 'vue-meta';
import VModal from 'vue-js-modal';
import VueMq from 'vue-mq'
import App from './App.vue';

import Breadcrumbs from "./Components/Breadcrumbs.vue";
import CardAd from "./CardDatabase/CardAd.vue";
import CardImage from "./CardDatabase/CardImage.vue";
import Icon from "./Components/Icon.vue";
import HeaderTitle from "./Components/HeaderTitle.vue";
import HoverCard from "./CardDatabase/HoverCard.js";
import PreviewCard from "./CardDatabase/PreviewCard.js";
import RaritySymbol from "./CardDatabase/RaritySymbol.vue";
import SkuFinish from "./CardDatabase/SkuFinish.vue";
import TcgPlayer from "./Components/TcgPlayer.vue";
import store from './Store/Application.js';
import router from './router.js';
import config from './axios-config';

import 'vue-datetime/dist/vue-datetime.css';

import AbstractModal from 'vue-js-modal/src/components/Modal.vue';

Vue.component('breadcrumbs', Breadcrumbs);
Vue.component('card-ad', CardAd);
Vue.component('card-image', CardImage);
Vue.component('icon', Icon);
Vue.component('rarity-symbol', RaritySymbol);
Vue.component('sku-finish', SkuFinish);
Vue.component('header-title', HeaderTitle);
Vue.component('tcg-player', TcgPlayer);

Vue.directive('hover-card', HoverCard);
Vue.directive('preview-card', PreviewCard);

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
    componentName: 'abstract-modal',
    injectModalsContainer: true
});

// This fixes the scrollable issue on iOS
Vue.component('modal', {
    extends: AbstractModal,
    computed: {
        /**
         * Fix using "adaptive" and "scrollable" at the same time
         */
        autoHeight () {
            if (this.scrollable) {
                return 'auto';
            }

            return AbstractModal.computed.autoHeight.apply(this);
        }
    }
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
