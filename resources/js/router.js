import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

let WantTradeList = () => import(/* webpackChunkName: "user.profile.wants" */ './Collection/WantTradeList');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: () => import(/* webpackChunkName: "home" */ './Home'), name: 'home', meta: { title: 'Home' } },

        { path: "/cards/browse", component: () => import(/* webpackChunkName: "cards.browse" */ './CardDatabase/BrowseCards'), name: 'cards.browse', meta: { title: 'Browse cards' } },
        { path: "/cards/browse/advanced", component: () => import(/* webpackChunkName: "cards.advanced" */ './CardDatabase/AdvancedCardSearch'), name: 'cards.advanced', meta: { title: 'Advanced card search' } },
        { path: "/cards/fabled", component: () => import(/* webpackChunkName: "cards.fabled" */ './CardDatabase/Fabled'), name: 'cards.fabled', meta: { title: 'The fabled cards of Flesh & Blood' } },
        { path: "/cards/prices", component: () => import(/* webpackChunkName: "cards.prices" */ './CardDatabase/PriceList'), name: 'cards.prices', meta: { title: 'Card price list' } },
        { path: "/cards/:identifier", component: () => import(/* webpackChunkName: "cards.view" */ './CardDatabase/ViewCard'), name: 'cards.view', meta: { title: 'View card', parent: { name: 'Browse', path: '/cards/browse' } } },

        { path: "/events/mine", component: () => import(/* webpackChunkName: "events.mine" */ './Events/Events'), meta: { title: 'My Events', auth: true }, name: 'events.mine' },
        { path: "/events/schedule", component: () => import(/* webpackChunkName: "events.start" */ './Events/Event'), meta: { title: 'Events', auth: true }, name: 'events.start' },
        { path: "/events/:event", component: () => import(/* webpackChunkName: "events.view" */ './Events/ViewEvent'), meta: { title: 'View Event' }, name: 'events.view' },
        { path: "/events/:event/edit", component: () => import(/* webpackChunkName: "events.edit" */ './Events/Event'), meta: { title: 'Edit Event', auth: true }, name: 'events.edit' },

        { path: "/packs/generate", component: () => import(/* webpackChunkName: "generator" */ './CardDatabase/BoosterGenerator'), name: 'generator', meta: { title: 'Booster generator', auth: true } },

        { path: "/collection", component: () => import(/* webpackChunkName: "collection" */ './Collection/Collection'), name: 'collection', meta: { title: 'My collection', auth: true } },
        { path: "/collection/advanced", component: () => import(/* webpackChunkName: "collection.advanced" */ './CardDatabase/AdvancedCardSearch'), name: 'collection.advanced', meta: { title: 'Advanced collection search', auth: true } },
        { path: "/collection/:identifier", component: () => import(/* webpackChunkName: "collection.view" */ './CardDatabase/ViewCard'), name: 'collection-view', meta: { title: 'View card', parent: { name: 'My collection', path: '/collection' } } },

        { path: '/tools/life-counter', component: () => import(/* webpackChunkName: "tools.counter" */ './LifeCounter/Main'), name: 'tools.life-counter', meta: { title: 'Flesh & Blood Life Counter' } },

        { path: "/decks", component: () => import(/* webpackChunkName: "decks.featured" */ './Decks/Featured/Featured'), name: 'decks.featured' },
        { path: "/decks/browse", component: () => import(/* webpackChunkName: "decks.browse" */ './Decks/Browse'), name: 'decks.browse' },
        { path: "/decks/build", component: () => import(/* webpackChunkName: "decks.mine" */ './DeckBuilder/ListDecks'), name: 'decks.mine' },
        { path: "/decks/build/:deck", component: () => import(/* webpackChunkName: "decks.build" */ './DeckBuilder/DeckBuilder'), name: 'decks.build', meta: { title: 'Deck builder &gt; Edit deck' } },
        { path: "/decks/test/:deck", component: () => import(/* webpackChunkName: "decks.test" */ './DeckBuilder/TestDeck'), name: 'decks.test', meta: { auth: true } },
        { path: "/decks/export/:deck", component: () => import(/* webpackChunkName: "decks.export" */ './DeckBuilder/ExportDeck'), name: 'decks.export', meta: { title: 'Deck builder &gt; Export', auth: true } },
        { path: "/decks/starters", component: () => import(/* webpackChunkName: "decks.starters" */ './Decks/Starters'), name: 'decks.starters', meta: { title: 'Flesh &amp; Blood Starter Decks' } },
        { path: "/decks/:deck", component: () => import(/* webpackChunkName: "decks.view" */ './Decks/Viewing/ViewDeck'), name: 'decks.view', meta: { title: 'View deck' } },

        { path: "/articles/spoilers", component: () => import(/* webpackChunkName: "articles.spoilers" */ './Content/Spoilers'), name: 'articles.spoilers' },
        { path: "/articles/:title/:article", component: () => import(/* webpackChunkName: "articles.view" */ './Content/ViewArticle'), name: 'articles.view' },

        { path: "/practise", component: () => import(/* webpackChunkName: "practise" */ './Practise/Index'), name: 'practise', meta: { auth: true } },
        { path: '/practise/setup', component: () => import(/* webpackChunkName: "practise.setup" */ './Practise/Setup'), name: 'practise.setup', meta: { auth: true } },
        { path: '/practise/:practise', component: () => import(/* webpackChunkName: "practise.view" */ './Practise/Draft'), name: 'practise.view', meta: { auth: true } },

        { path: "/login", component: () => import(/* webpackChunkName: "auth.login" */ './Auth/Login'), name: 'login' },
        { path: "/logout", component: () => import(/* webpackChunkName: "auth.logout" */ './Auth/Logout'), name: 'logout', meta: { auth: true } },
        { path: "/support", component: () => import(/* webpackChunkName: "support" */ './Support'), name: 'support', meta: { title: 'Support options' } },
        { path: "/profile", component: () => import(/* webpackChunkName: "profile" */ './Identity/Profile'), name: 'profile', meta: { title: 'Your user profile', auth: true } },
        { path: "/privacy", component: () => import(/* webpackChunkName: "privacy" */ './Privacy'), name: 'privacy', meta: { title: 'FaB DB Privacy Policy' } },
        { path: "/premium", component: () => import(/* webpackChunkName: "premium" */ './Premium'), name: 'premium', meta: { title: 'Premium feature' } },

        { path: '/user/:user', component: () => import(/* webpackChunkName: "user.profile.view" */ './Identity/ViewProfile'), children: [
            { path: '', component: () => import(/* webpackChunkName: "user.profile.decks" */ './Decks/LatestDecks'), name: 'user.profile.decks' },
            { path: 'wants', component: WantTradeList, name: 'user.profile.wants', meta: { view: 'want' } },
            { path: 'trades', component: WantTradeList, name: 'user.profile.trades', meta: { view: 'trade' } },
        ]},

        { path: "/resources/api", component: () => import(/* webpackChunkName: "resources.api" */ './Resources/Api'), name: 'resources.api', meta: { title: 'API Documentation' } },

        // Deprecated
        { path: "/deck-builder", redirect: "/decks/build" },

        { path: "*", redirect: "/" }
    ]
});

router.beforeResolve(function(to, from, next) {
    let user = window.session.user;

    if (to.meta && to.meta.auth && !(user && user != null)) {
        next({ path: '/login', query: { from: to.path } });
    } else if (to.meta && to.meta.premium && !user.subscription) {
        next({ path: '/premium' });
    } else {
        next();
    }
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
    window.scrollTo(0,0);
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
