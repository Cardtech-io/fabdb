import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import ListCards from './CardDatabase/ListCards.vue';
import ViewCard from './CardDatabase/ViewCard.vue';
import Collection from './CardDatabase/Collection.vue';
import Support from './Support.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: ListCards, name: 'cards' },
        { path: "/card/:identifier/", component: ViewCard, name: 'card-view' },
        { path: "/collection/", component: Collection, name: 'collection' },
        { path: "/support/", component: Support, name: 'support' }
    ]
});

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
