require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CardDatabase from './CardDatabase/CardDatabase.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {"path": "/", "component": CardDatabase}
    ]
});

const app = new Vue({
    router
}).$mount('#app');
