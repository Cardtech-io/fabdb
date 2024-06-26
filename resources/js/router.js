import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

let WantTradeList = () => import(/* webpackChunkName: "user.profile.wants" */ './Collection/WantTradeList.vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: () => import(/* webpackChunkName: "home" */ './Home.vue'), name: 'home', meta: { title: 'Home' } },

        { path: "/artists/:artist", component: () => import(/* webpackChunkName: "artists.view" */ './Artists/View.vue'), name: 'artists.view', meta: { title: 'View artist' } },

        { path: "/cards/browse", component: () => import(/* webpackChunkName: "cards.browse" */ './CardDatabase/BrowseCards.vue'), name: 'cards.browse', meta: { title: 'Browse cards' } },
        { path: "/cards/browse/advanced", component: () => import(/* webpackChunkName: "cards.advanced" */ './CardDatabase/AdvancedCardSearch.vue'), name: 'cards.advanced', meta: { title: 'Advanced card search' } },
        { path: "/cards/fabled", component: () => import(/* webpackChunkName: "cards.fabled" */ './CardDatabase/Fabled.vue'), name: 'cards.fabled', meta: { title: 'The fabled cards of Flesh & Blood' } },
        { path: "/cards/:identifier", component: () => import(/* webpackChunkName: "cards.view" */ './CardDatabase/ViewCard.vue'), name: 'cards.view', meta: { title: 'View card', parent: { name: 'Browse', path: '/cards/browse' } } },

        { path: "/events/mine", component: () => import(/* webpackChunkName: "events.mine" */ './Events/Events.vue'), meta: { title: 'My Events', auth: true }, name: 'events.mine' },
        { path: "/events/schedule", component: () => import(/* webpackChunkName: "events.start" */ './Events/Event.vue'), meta: { title: 'Events', auth: true }, name: 'events.start' },
        { path: "/events/:event", component: () => import(/* webpackChunkName: "events.view" */ './Events/ViewEvent.vue'), meta: { title: 'View Event' }, name: 'events.view' },
        { path: "/events/:event/edit", component: () => import(/* webpackChunkName: "events.edit" */ './Events/Event.vue'), meta: { title: 'Edit Event', auth: true }, name: 'events.edit' },

        { path: "/packs/generate", component: () => import(/* webpackChunkName: "generator" */ './CardDatabase/BoosterGenerator.vue'), name: 'generator', meta: { title: 'Booster generator', auth: true } },

        { path: "/collection", component: () => import(/* webpackChunkName: "collection" */ './Collection/Collection.vue'), name: 'collection', meta: { title: 'My collection', auth: true } },
        { path: "/collection/advanced", component: () => import(/* webpackChunkName: "collection.advanced" */ './CardDatabase/AdvancedCardSearch.vue'), name: 'collection.advanced', meta: { title: 'Advanced collection search', auth: true } },
        { path: "/collection/:identifier", component: () => import(/* webpackChunkName: "collection.view" */ './CardDatabase/ViewCard.vue'), name: 'collection-view', meta: { title: 'View card', parent: { name: 'My collection', path: '/collection' } } },

        { path: '/tools/life-counter', component: () => import(/* webpackChunkName: "tools.counter" */ './LifeCounter/Main.vue'), name: 'tools.life-counter', meta: { title: 'Flesh & Blood Life Counter' } },

        { path: "/decks", component: () => import(/* webpackChunkName: "decks.featured" */ './Decks/Featured/Featured.vue'), name: 'decks.featured' },
        { path: '/decks/mine', redirect: { name: 'decks.mine' }},
        { path: "/decks/browse", component: () => import(/* webpackChunkName: "decks.browse" */ './Decks/Browse.vue'), name: 'decks.browse' },
        { path: "/decks/build", component: () => import(/* webpackChunkName: "decks.mine" */ './DeckBuilder/ListDecks.vue'), name: 'decks.mine' },
        { path: "/decks/build/:deck", component: () => import(/* webpackChunkName: "decks.build" */ './DeckBuilder/DeckBuilder.vue'), name: 'decks.build', meta: { title: 'Deck builder &gt; Edit deck' } },

        { path: "/decks/test/:deck", component: () => import(/* webpackChunkName: "decks.test" */ './DeckBuilder/TestDeck.vue'), name: 'decks.test', meta: { auth: true } },

        { path: "/decks/:deck/test", component: () => import(/* webpackChunkName: "decks.test.main" */ './DeckTester/Main.vue'), name: 'decks.test.prepare', meta: { auth: true }},

        { path: "/decks/export/:deck", component: () => import(/* webpackChunkName: "decks.export" */ './DeckBuilder/ExportDeck.vue'), name: 'decks.export', meta: { title: 'Deck builder &gt; Export', auth: true } },
        { path: "/decks/starters", component: () => import(/* webpackChunkName: "decks.starters" */ './Decks/Starters.vue'), name: 'decks.starters', meta: { title: 'Flesh &amp; Blood Starter Decks' } },
        { path: "/decks/:deck", component: () => import(/* webpackChunkName: "decks.view" */ './Decks/Viewing/ViewDeck.vue'), name: 'decks.view', meta: { title: 'View deck' } },

        { path: "/articles/spoilers", component: () => import(/* webpackChunkName: "articles.spoilers" */ './Content/Spoilers.vue'), name: 'articles.spoilers' },
        { path: "/articles/:title/:article", component: () => import(/* webpackChunkName: "articles.view" */ './Content/ViewArticle.vue'), name: 'articles.view' },

        { path: "/practise", component: () => import(/* webpackChunkName: "practise" */ './Practise/Index.vue'), name: 'practise', meta: { auth: true } },
        { path: '/practise/setup', component: () => import(/* webpackChunkName: "practise.setup" */ './Practise/Setup.vue'), name: 'practise.setup', meta: { auth: true } },
        { path: '/practise/:practise', component: () => import(/* webpackChunkName: "practise.view" */ './Practise/Draft.vue'), name: 'practise.view', meta: { auth: true } },

        { path: "/login", component: () => import(/* webpackChunkName: "auth.login" */ './Auth/Login.vue'), name: 'login' },
        { path: "/logout", component: () => import(/* webpackChunkName: "auth.logout" */ './Auth/Logout.vue'), name: 'logout', meta: { auth: true } },
        { path: "/support", component: () => import(/* webpackChunkName: "support" */ './Support.vue'), name: 'support', meta: { title: 'Support options' } },
        { path: "/profile", component: () => import(/* webpackChunkName: "profile" */ './Identity/Profile.vue'), name: 'profile', meta: { title: 'Your user profile', auth: true } },
        { path: "/privacy", component: () => import(/* webpackChunkName: "privacy" */ './Privacy.vue'), name: 'privacy', meta: { title: 'FaB DB Privacy Policy' } },
        { path: "/premium", component: () => import(/* webpackChunkName: "premium" */ './Premium.vue'), name: 'premium', meta: { title: 'Premium feature' } },

        { path: '/user/:user', component: () => import(/* webpackChunkName: "user.profile.view" */ './Identity/ViewProfile.vue'), children: [
            { path: '', component: () => import(/* webpackChunkName: "user.profile.decks" */ './Decks/LatestDecks.vue'), name: 'user.profile.decks' },
            { path: 'wants', component: WantTradeList, name: 'user.profile.wants', meta: { view: 'want' } },
            { path: 'trades', component: WantTradeList, name: 'user.profile.trades', meta: { view: 'trade' } },
        ]},

        { path: "/resources/api", component: () => import(/* webpackChunkName: "resources.api" */ './Resources/Api.vue'), name: 'resources.api', meta: { title: 'API Documentation' } },

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
