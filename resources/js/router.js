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

// ga may not be defined as it hasn't been loaded as no analytics id is available
if (typeof ga !== 'undefined') {
    // google analytics stuff
    ga('set', 'page', router.currentRoute.path);
    ga('send', 'pageview');

    router.afterEach((to, from) => {
        ga('set', 'page', to.path);
        ga('send', 'pageview');
    });
}

export default router;
