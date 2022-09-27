<template>
    <div>
        <div v-if="deck && deck.cards && deck.hero">
            <header-title :title="deck.name + ' (' + deck.hero.name + ')'"/>
            <breadcrumbs :crumbs="crumbs"/>

            <div class="bg-white dark:bg-gray-800">
                <div class="container sm:mx-auto px-4 flex items-center">
                    <div class="flex-1 font-serif uppercase py-4 md:px-0">
                        {{ deck.cards.total() }} Cards in deck &nbsp;
                        <span class="hidden md:inline">
                            (
                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ deck.cards.colouredCount('blue') }} &nbsp;
                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ deck.cards.colouredCount('yellow') }} &nbsp;
                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ deck.cards.colouredCount('red') }}
                            )
                        </span>
                    </div>
                    <div class="text-right mt-2">
                        <votes :size="6" :total="deck.fields.totalVotes" :voted="deck.fields.myVote" voteable="deck" :foreign="deck.slug"/>
                    </div>
                </div>
            </div>

            <div class="main-body">
                <div class="container sm:mx-auto px-4">
                    <div class="md:flex md:pt-0">
                        <div class="py-4 md:pr-4 md:w-1/4 space-y-4">
                            <div>
                                <card-image :card="deck.hero" class="relative z-25"/>

                                <div class="relative flex rounded-b-xl overflow-hidden space-x-px -mt-8 z-0">
                                    <a :href="buyLink(deck)" class="flex w-1/2 items-center justify-center button-primary rounded-l-xl px-2 pb-2 pt-10" target="_blank" title="Buy from TCG Player">
                                        <icon :size="4">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                                        </icon>
                                        <span class="ml-1">Buy deck</span>
                                    </a>
                                    <button @click="copyDeck" class="flex w-1/2 items-center justify-center button-primary rounded-r-xl px-2 pb-2 pt-10" title="Copy deck to my decks">
                                        <icon :size="4">
                                            <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"/>
                                        </icon>
                                        <span class="ml-2">Copy deck</span>
                                    </button>
                                </div>
                            </div>

                            <deck-label :label="deck.label" class="block w-full py-2 text-center rounded-lg" v-if="deck.label"/>

                            <div class="rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                <h3 class="font-serif uppercase text-xl mb-2 bg-white dark:bg-gray-700 p-2 px-4">Basic stats</h3>

                                <div class="px-4">
                                    <ol class="mb-8">
                                        <li class="block py-1 w-full">Attack actions: {{ deck.other.attackActions().total() }}</li>
                                        <li class="block py-1 w-full">Attack reactions: {{ deck.other.attackReactions().total() }}</li>
                                        <li class="block py-1 w-full">Defense reactions: {{ deck.other.defenseReactions().total() }}</li>
                                    </ol>

                                    <deck-curves :cards="deck.other.withCost()" stat="cost" strategy="total" style="height: 200px" class="mb-4"/>
                                    <deck-curves :cards="deck.other.withResource()" stat="resource" strategy="total" style="height: 200px"/>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-3/4 md:py-4">
                            <tabs>
                                <tab-item name="Deck">
                                    <div v-if="deck.notes || deck.videoUrl" class="md:flex">
                                        <div class="w-full md:w-2/3 md:pl-4 md:pr-8">
                                            <div v-if="deck.videoUrl" class="mb-8">
                                                <deck-video :url="deck.videoUrl"/>
                                            </div>
                                            <div class="mb-8" v-html="minimalMarkdown(deck.notes.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''))" v-if="deck.notes"></div>
                                            <div class="border-t border-gray-400 mt-4">
                                                <discussion type="deck" :id="deck.slug" class="pb-8"></discussion>
                                            </div>
                                        </div>
                                        <div class="w-full md:w-1/3">
                                            <cards :cards="deck.weapons" heading="Weapons" class="mb-8" v-if="deck.weapons.total()"/>
                                            <cards :cards="deck.equipment" heading="Equipment" class="mb-8" v-if="deck.equipment.total()"/>
                                            <cards :cards="deck.other" heading="Main deck" v-if="deck.other.total()"/>
                                        </div>
                                    </div>
                                    <div v-else class="md:flex">
                                        <div class="w-full md:w-1/3" :class="{'pr-4': !deck.notes}">
                                            <cards :cards="deck.weapons" heading="Weapons" class="mb-8" v-if="deck.weapons.total()"/>
                                            <cards :cards="deck.equipment" heading="Equipment" class="mb-8" v-if="deck.equipment.total()"/>
                                        </div>
                                        <div class="w-full md:w-1/3">
                                            <cards :cards="deck.other" heading="Main deck" v-if="deck.other.total()"/>
                                        </div>
                                    </div>
                                </tab-item>
                                <tab-item name="Metrics & Performance">
                                    <metrics-performance :deck="deck"/>
                                </tab-item>
                                <tab-item name="Rulings">
                                    <rulings :rulings="rulings"/>
                                </tab-item>
                            </tabs>
                        </div>
                    </div>

                    <div class="border-t border-gray-400 mt-4" v-if="!deck.notes">
                        <discussion type="deck" :id="deck.slug" class="pb-8"></discussion>
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
    import { mapActions, mapGetters } from 'vuex';
    import _ from 'lodash';

    import Breadcrumbs from '../../Components/Breadcrumbs.vue';
    import Cardable from '../../CardDatabase/Cardable.js';
    import Cards from "./Cards.vue";
    import DeckCurves from "../../DeckBuilder/DeckCurves";
    import DeckLabel from "./DeckLabel.vue";
    import DeckVideo from './DeckVideo.vue';
    import Discussion from "../../Discussion/Discussion.vue";
    import HeaderTitle from '../../Components/HeaderTitle.vue';
    import HeroAvatar from "../../Components/HeroAvatar.vue";
    import Imagery from "../../Utilities/Imagery";
    import Icon from '../../Components/Icon.vue';
    import LazyLoader from '../../Components/LazyLoader';
    import Respond from '../../Discussion/Respond.vue';
    import Rulings from "../../CardDatabase/Rulings.vue";
    import Votes from '../../Voting/Votes.vue';
    import Models from "../../Utilities/Models";
    import Deck from "../Deck";
    import Strings from "../../Utilities/Strings";
    import Viewable from "../../DeckBuilder/Viewable";
    import Shareable from "../../Components/Shareable";
    import MetricsPerformance from "../Metrics/MetricsPerformance.vue";
    import Tabs from "../../Components/Tabs.vue";
    import TabItem from "../../Components/TabItem.vue";

    export default {
        mixins: [Cardable, Shareable, Imagery, Strings, Viewable],

        components: {
            Breadcrumbs,
            Cards,
            DeckCurves,
            DeckLabel,
            DeckVideo,
            Discussion,
            HeaderTitle,
            HeroAvatar,
            Icon,
            MetricsPerformance,
            Respond,
            Rulings,
            TabItem,
            Tabs,
            Votes,
        },

        computed: {
            ...mapGetters('session', ['user']),

            cards() {
                return this.deck.cards || [];
            },

            crumbs() {
                return [
                    { text: 'Home', link: { name: 'home' } },
                    { text: 'Decks', link: { name: 'decks.browse' } },
                    { text: this.deck.name }
                ]
            },

            rulings() {
                let rulings = _.flatten(this.deck.cards.all().map(card => {
                    return _.flatten(card.rulings.map(ruling => { return ruling.description; }));
                }));

                return _.uniq(rulings);
            }
        },

        data() {
            return {
                deck: null,
                tab: 'composition',
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            copyDeck() {
                axios.post('/decks/copy', { deck: this.deck.slug }).then(response => {
                    this.addMessage({ status: 'success', message: 'Deck successfully copied.' });
                    this.$router.push({ name: 'decks.build', params: { deck: response.data.deck } });
                });
            }
        },

        metaInfo() {
            let title = 'View deck - ' + this.deck.name;
            let meta = [];

            if (this.deck.hero) {
                title += ' (' + this.deck.hero.name + ')';

                meta = [
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: 'A custom ' + this.deck.hero.keywords[0] + ' deck built at fabdb.net, utilising the hero, \'' + this.deck.hero.name + '\'.'  },
                    { vmid: 'og:image', property: 'og:image', content: this.heroProfile(this.deck.hero, 300) },
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
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.deck = Models.hydrate(response.data, Deck);
                })
            });
        })
    };
</script>

