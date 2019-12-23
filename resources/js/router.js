import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from './Home.vue';
import BrowseCards from './CardDatabase/BrowseCards.vue';
import ViewCard from './CardDatabase/ViewCard.vue';
import Collection from './CardDatabase/Collection.vue';
import ListDecks from './DeckBuilder/ListDecks.vue';
import DeckBuilder from './DeckBuilder/DeckBuilder.vue';
import ViewDeck from './DeckBuilder/ViewDeck.vue';
import Support from './Support.vue';
import Profile from './Identity/Profile.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: Home, name: 'home', meta: { title: 'Home' } },
        { path: "/browse/", component: BrowseCards, name: 'cards', meta: {title: 'Browse cards'} },
        {
            path: "/cards/:identifier/",
            component: ViewCard,
            name: 'card-view',
            meta: { title: 'View card', parent: { name: 'Browse', path: '/browse/' } }
        },
        {
            path: "/collection/",
            component: Collection,
            name: 'collection',
            meta: { title: 'My collection' }
        },
        {
            path: "/collection/:identifier/",
            component: ViewCard,
            name: 'collection-view',
            meta: { title: 'View card', parent: { name: 'My collection', path: '/collection' } }
        },
        {
            path: "/deck-builder/",
            component: ListDecks,
            name: 'list-decks'
        },
        {
            path: "/deck-builder/:deck/",
            component: DeckBuilder,
            meta: {
                title: 'Deck builder &gt; Edit deck'
            }
        },
        {
            path: "/decks/:deck/",
            component: ViewDeck,
            meta: {
                title: 'View deck'
            }
        },
        { path: "/support/", component: Support, name: 'support', meta: {title: 'Support options'} },
        { path: "/profile/", component: Profile, name: 'profile', meta: { title: 'Your user profile' } }
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
