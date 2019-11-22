import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import BrowseCards from './CardDatabase/BrowseCards.vue';
import ViewCard from './CardDatabase/ViewCard.vue';
import Collection from './CardDatabase/Collection.vue';
import DeckBuilder from './DeckBuilder/DeckBuilder.vue';
import EditDeck from './DeckBuilder/EditDeck.vue';
import Support from './Support.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: BrowseCards, name: 'cards', meta: {title: 'Browse cards'} },
        { path: "/card/:identifier/", component: ViewCard, name: 'card-view', meta: {title: 'View card'} },
        { path: "/collection/", component: Collection, name: 'collection', meta: {title: 'My collection'} },
        {
            path: "/deck-builder/",
            component: DeckBuilder,
            name: 'deck-builder',
            meta: {
                title: 'Deck builder'
            },
            children: [{
                path: ":deck",
                component: EditDeck,
                meta: {
                    title: 'Deck builder &gt; Edit deck'
                }
            }]
        },
        { path: "/support/", component: Support, name: 'support', meta: {title: 'Support options'} }
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

    document.title = to.meta.title + ' | fabdb.net';
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
