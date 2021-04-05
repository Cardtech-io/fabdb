import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from './Home';
import AdvancedCardSearch from "./CardDatabase/AdvancedCardSearch";
import Api from './Resources/Api';
import Articles from './Content/Articles';
import ArticleView from './Content/ViewArticle';
import ArticlesMine from './Content/MyArticles';
import ArticleSearch from "./Content/ArticleSearch";
import ArticlesSpoilers from './Content/Spoilers';
import ArticleWrite from './Content/WriteArticle';
import BrowseCards from './CardDatabase/BrowseCards';
import FabledCards from './CardDatabase/Fabled';
import PriceList from './CardDatabase/PriceList';
import BrowseDecks from './Decks/Browse';
import Event from './Events/Event';
import Events from './Events/Events';
import EventView from './Events/ViewEvent';
import BoosterGenerator from './CardDatabase/BoosterGenerator';
import ViewCard from './CardDatabase/ViewCard';
import Collection from './Collection/Collection';
import ListDecks from './DeckBuilder/ListDecks';
import LifeCounter from './LifeCounter/Main';
import DeckBuilder from './DeckBuilder/DeckBuilder';
import TestDeck from './DeckBuilder/TestDeck';
import ExportDeck from './DeckBuilder/ExportDeck';
import StarterDecks from "./Decks/Starters";
import ViewDeck from './Decks/ViewDeck';
import Support from './Support';
import Profile from './Identity/Profile';
import Privacy from './Privacy';
import Premium from './Premium';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import ViewProfile from "./Identity/ViewProfile";
import LatestDecks from "./Decks/LatestDecks";
import WantTradeList from "./Collection/WantTradeList";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: Home, name: 'home', meta: { title: 'Home' } },

        { path: "/cards/browse", component: BrowseCards, name: 'cards.browse', meta: { title: 'Browse cards' } },
        { path: "/cards/browse/advanced", component: AdvancedCardSearch, name: 'cards.advanced', meta: { title: 'Advanced card search' } },
        { path: "/cards/fabled", component: FabledCards, name: 'cards.fabled', meta: { title: 'The fabled cards of Flesh & Blood' } },
        { path: "/cards/prices", component: PriceList, name: 'cards.prices', meta: { title: 'Card price list' } },
        { path: "/cards/:identifier", component: ViewCard, name: 'cards.view', meta: { title: 'View card', parent: { name: 'Browse', path: '/cards/browse' } } },

        { path: "/events/mine", component: Events, meta: { title: 'My Events', auth: true }, name: 'events.mine' },
        { path: "/events/schedule", component: Event, meta: { title: 'Events', auth: true }, name: 'events.start' },
        { path: "/events/:event", component: EventView, meta: { title: 'View Event' }, name: 'events.view' },
        { path: "/events/:event/edit", component: Event, meta: { title: 'Edit Event', auth: true }, name: 'events.edit' },

        { path: "/packs/generate", component: BoosterGenerator, name: 'generator', meta: { title: 'Booster generator', auth: true } },

        { path: "/collection", component: Collection, name: 'collection', meta: { title: 'My collection', auth: true } },
        { path: "/collection/advanced", component: AdvancedCardSearch, name: 'collection.advanced', meta: { title: 'Advanced collection search', auth: true } },
        { path: "/collection/:identifier", component: ViewCard, name: 'collection-view', meta: { title: 'View card', parent: { name: 'My collection', path: '/collection' } } },

        { path: '/tools/life-counter', component: LifeCounter, name: 'tools.life-counter', meta: { title: 'Flesh & Blood Life Counter' } },

        { path: "/decks/browse", component: BrowseDecks, name: 'decks.browse' },
        { path: "/decks/build", component: ListDecks, name: 'decks.mine' },
        { path: "/decks/build/:deck", component: DeckBuilder, name: 'decks.build', meta: { title: 'Deck builder &gt; Edit deck', auth: true } },
        { path: "/decks/test/:deck", component: TestDeck, meta: { auth: true } },
        { path: "/decks/export/:deck", component: ExportDeck, meta: { title: 'Deck builder &gt; Export', auth: true } },
        { path: "/decks/starters", component: StarterDecks, meta: { title: 'Flesh &amp; Blood Starter Decks' } },
        { path: "/decks/:deck", component: ViewDeck, name: 'decks.view', meta: { title: 'View deck' } },

        { path: "/articles", component: Articles, name: 'articles' },
        { path: "/articles/write", component: ArticleWrite, name: 'articles.write' },
        { path: "/articles/mine", component: ArticlesMine, name: 'articles.mine' },
        { path: "/articles/spoilers", component: ArticlesSpoilers, name: 'articles.spoilers' },
        { path: "/articles/:article/edit", component: ArticleWrite, name: 'articles.edit' },
        { path: "/articles/tags/:tag", component: ArticleSearch, name: 'articles.tag' },
        { path: "/articles/authors/:author", component: ArticleSearch, name: 'articles.author' },
        { path: "/articles/:title/:article", component: ArticleView, name: 'articles.view' },

        { path: "/login", component: Login, name: 'login' },
        { path: "/logout", component: Logout, name: 'logout', meta: { auth: true } },
        { path: "/support", component: Support, name: 'support', meta: { title: 'Support options' } },
        { path: "/profile", component: Profile, name: 'profile', meta: { title: 'Your user profile', auth: true } },
        { path: "/privacy", component: Privacy, name: 'privacy', meta: { title: 'FaB DB Privacy Policy' } },
        { path: "/premium", component: Premium, name: 'premium', meta: { title: 'Premium feature' } },

        { path: '/user/:user', component: ViewProfile, children: [
            { path: '', component: LatestDecks, name: 'user.profile.decks' },
            { path: 'wants', component: WantTradeList, name: 'user.profile.wants', meta: { view: 'want' } },
            { path: 'trades', component: WantTradeList, name: 'user.profile.trades', meta: { view: 'trade' } },
        ]},

        { path: "/resources/api", component: Api, name: 'resources.api', meta: { title: 'API Documentation' } },

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
