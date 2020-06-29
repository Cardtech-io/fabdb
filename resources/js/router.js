import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from './Home.vue';
import Articles from './Content/Articles.vue';
import ArticleView from './Content/ViewArticle.vue';
import ArticlesMine from './Content/MyArticles.vue';
import ArticleWrite from './Content/WriteArticle.vue';
import BrowseCards from './CardDatabase/BrowseCards.vue';
import PriceList from './CardDatabase/PriceList.vue';
import BrowseDecks from './Decks/Browse.vue';
import Event from './Events/Event.vue';
import Events from './Events/Events.vue';
import EventView from './Events/ViewEvent.vue';
import BoosterGenerator from './CardDatabase/BoosterGenerator.vue';
import ViewCard from './CardDatabase/ViewCard.vue';
import Collection from './Collection/Collection.vue';
import ListDecks from './DeckBuilder/ListDecks.vue';
import DeckBuilder from './DeckBuilder/DeckBuilder.vue';
import PremiumDeckBuilder from './DeckBuilder/PremiumDeckBuilder.vue';
import TestDeck from './DeckBuilder/TestDeck.vue';
import ExportDeck from './DeckBuilder/ExportDeck.vue';
import ViewDeck from './DeckBuilder/ViewDeck.vue';
import Support from './Support.vue';
import Profile from './Identity/Profile.vue';
import Privacy from './Privacy.vue';
import Premium from './Premium.vue';
import Login from './Auth/Login.vue';
import Logout from './Auth/Logout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: Home, name: 'home', meta: { title: 'Home' } },

        { path: "/cards/browse", component: BrowseCards, name: 'cards.browse', meta: { title: 'Browse cards' } },
        { path: "/cards/:identifier", component: ViewCard, name: 'card-view', meta: { title: 'View card', parent: { name: 'Browse', path: '/cards/browse/' } } },

        { path: "/events/mine", component: Events, meta: { title: 'My Events', auth: true }, name: 'events.mine' },
        { path: "/events/schedule", component: Event, meta: { title: 'Events', auth: true }, name: 'events.start' },
        { path: "/events/:event", component: EventView, meta: { title: 'View Event' }, name: 'events.view' },
        { path: "/events/:event/edit", component: Event, meta: { title: 'Edit Event', auth: true }, name: 'events.edit' },

        { path: "/packs/generate", component: BoosterGenerator, name: 'generator', meta: { title: 'Booster generator', auth: true } },

        { path: "/collection", component: Collection, name: 'collection', meta: { title: 'My collection', auth: true } },
        { path: "/collection/:identifier", component: ViewCard, name: 'collection-view', meta: { title: 'View card', parent: { name: 'My collection', path: '/collection' } } },

        { path: "/decks/browse", component: BrowseDecks, name: 'decks.browse' },
        { path: "/decks/build", component: ListDecks, name: 'list-decks' },
        { path: "/decks/build/premium/:deck", component: PremiumDeckBuilder, name: 'decks.build-premium', meta: { auth: true, premium: true } },
        { path: "/decks/build/:deck", component: DeckBuilder, meta: { title: 'Deck builder &gt; Edit deck', auth: true } },
        { path: "/decks/test/:deck", component: TestDeck, meta: { auth: true } },
        { path: "/decks/export/:deck", component: ExportDeck, meta: { title: 'Deck builder &gt; Export', auth: true } },
        { path: "/decks/:deck", component: ViewDeck, name: 'decks.view', meta: { title: 'View deck' } },

        { path: "/articles", component: Articles, name: 'articles' },
        { path: "/articles/write", component: ArticleWrite, name: 'articles.write' },
        { path: "/articles/mine", component: ArticlesMine, name: 'articles.mine' },
        { path: "/articles/:article/edit", component: ArticleWrite, name: 'articles.edit' },
        { path: "/articles/:title/:article", component: ArticleView, name: 'articles.view' },

        { path: "/login", component: Login, name: 'login' },
        { path: "/logout", component: Logout, name: 'logout', meta: { auth: true } },
        { path: "/support", component: Support, name: 'support', meta: { title: 'Support options' } },
        { path: "/profile", component: Profile, name: 'profile', meta: { title: 'Your user profile', auth: true } },
        { path: "/privacy", component: Privacy, name: 'privacy', meta: { title: 'FaB DB Privacy Policy' } },
        { path: "/premium", component: Premium, name: 'premium', meta: { title: 'Premium feature' } },

        // Deprecated
        { path: "/deck-builder", redirect: "/decks/build" },
        { path: "/deck-builder/:deck", redirect: "/decks/build/:deck" },

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
