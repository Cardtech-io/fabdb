<template>
    <div>
        <div v-if="deck && hero">
            <header-title :title="deck.name + ' (' + hero.name + ')'"></header-title>

            <breadcrumbs :crumbs="crumbs"></breadcrumbs>

            <div class="bg-white">
                <div class="container sm:mx-auto px-4 flex">
                    <div class="flex-1 font-serif uppercase p-4 md:px-0">
                        {{ totalCards }} Cards in deck &nbsp;
                        (
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}
                        )
                    </div>
                    <div class="text-right mt-2">
                        <votes :size="6" :total="deck.totalVotes" :voted="deck.myVote" voteable="deck" :foreign="deck.slug"></votes>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200">
                <div class="container sm:mx-auto py-8" v-if="cards && cards.length">
                    <div class="clearfix">
                        <div class="p-4 md:w-1/3 md:float-left">
                            <div class="mb-8">
                                <img :src="cardUrl(hero.identifier, 350, user && user.view == 'bordered')" :alt="hero.name" class="w-full max-w-md rounded-xl" style="max-width: 400px">
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left pl-4">
                            <div v-if="other.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Card totals</h3>
                                <ol>
                                    <li class="block p-1 pl-4 w-full">Total cards: {{ totalCards }}</li>
                                    <li class="block p-1 pl-4 w-full">Attack actions: {{ totalAttackActions }}</li>
                                    <li class="block p-1 pl-4 w-full">Attack reactions: {{ totalAttackReactions }}</li>
                                    <li class="block p-1 pl-4 w-full">Defense reactions: {{ totalDefenseReactions }}</li>
                                </ol>
                            </div>

                            <div v-if="other.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Deck stats</h3>
                                <ol>
                                    <li class="block p-1 pl-4 w-full">Average card cost: {{ averageCost }}</li>
                                    <li class="block p-1 pl-4 w-full">Average pitch: {{ averagePitch }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 1: {{ pitchCount(1) }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 2: {{ pitchCount(2) }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 3: {{ pitchCount(3) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 0: {{ costCount(0) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 1: {{ costCount(1) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 2: {{ costCount(2) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 3+: {{ costCount(3) }}</li>
                                </ol>
                            </div>

                            <div v-if="weapons" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Weapons</h3>
                                <ol>
                                    <li v-for="weapon in weapons" class="p-2 pl-4">
                                        <router-link :to="/cards/ + weapon.identifier">
                                            <span>{{ weapon.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                        </router-link>
                                    </li>
                                </ol>
                            </div>

                            <div v-if="equipment.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Equipment</h3>
                                <ol>
                                    <li v-for="card in equipment" class="p-2 pl-4">
                                        <router-link :to="/cards/ + card.identifier">
                                            <span>{{ card.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </router-link>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left pl-4">
                            <div v-if="other.length">
                                <h3 class="p-2 font-serif uppercase text-2xl">Other</h3>
                                <ol>
                                    <li v-for="card in other" class="p-2 pl-4">
                                        <router-link :to="/cards/ + card.identifier">
                                            <span class="">({{ card.total }})</span>
                                            <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </router-link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <hr class="text-gray-500 mt-4">

                        <comment-count :comments="comments"></comment-count>

                        <div v-if="comments">
                            <comment v-for="comment in comments" :key="comment.slug" :comment="comment"></comment>
                        </div>

                        <!-- post a comment -->
                        <respond type="deck" :foreign="deck.slug" @comment-posted="addComment"></respond>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <header-title :title="deck.name"></header-title>

            <breadcrumbs :crumbs="crumbs"></breadcrumbs>

            <div class="bg-gray-200">
                <div class="container sm:mx-auto py-8 px-4">
                    This deck is not yet ready for viewing or sharing, possibly because it's missing some required configuration.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapGetters } from 'vuex';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from '../DeckBuilder/Viewable';
    import Respond from '../Discussion/Respond.vue';
    import Comment from '../Discussion/Comment.vue';
    import CommentCount from '../Discussion/CommentCount.vue';
    import Votes from '../Voting/Votes.vue';

    export default {
        mixins: [ Cardable, Viewable ],

        components: {
            Breadcrumbs,
            Comment,
            CommentCount,
            HeaderTitle,
            Respond,
            Votes
        },

        computed: {
            ...mapGetters('session', ['user']),

            crumbs: function() {
                return [
                    { text: 'Home', link: { name: 'home' } },
                    { text: 'Decks', link: { name: 'decks.browse' } },
                    { text: this.deck.name }
                ]
            }
        },

        data() {
            return {
                cards: [],
                comments: null,
                deck: null,
            }
        },

        methods: {
            addComment: function(comment) {
                this.comments.push(comment);
            }
        },

        metaInfo() {
            let title = 'View deck - ' + this.deck.name;
            let meta = [];

            if (this.hero) {
                title += ' (' + this.hero.name + ')';

                meta = [
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: 'A custom ' + this.hero.keywords[0] + ' deck built at fabdb.net, utilising the hero, \'' + this.hero.name + '\'.'  },
                    { vmid: 'og:image', property: 'og:image', content: this.cardUrl(this.hero.identifier, 450, true) },
                    { vmid: 'og:image:width', property: 'og:image:width', content: '450' },
                    { vmid: 'og:image:height', property: 'og:image:height', content: '628' }
                ];
            } else {
                meta = [
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: 'A custom deck built at fabdb.net.'  }
                ];
            }

            return {
                title: title,
                meta: meta
            };
        },

        extends: LazyLoader((to, callback) => {
            let deck = axios.get('/decks/' + to.params.deck);
            let comments = axios.get('/comments/deck/' + to.params.deck);

            axios.all([deck, comments]).then(axios.spread((...responses) => {
                callback(function() {
                    this.deck = responses[0].data;
                    this.cards = this.deck.cards;
                    this.comments = responses[1].data;
                })
            }));
        })
    };
</script>