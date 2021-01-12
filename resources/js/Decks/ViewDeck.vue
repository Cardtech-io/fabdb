<template>
    <div>
        <div v-if="deck && hero">
            <header-title :title="deck.name + ' (' + hero.name + ')'"></header-title>
            <breadcrumbs :crumbs="crumbs"></breadcrumbs>

            <div class="bg-white">
                <div class="container sm:mx-auto px-4 flex">
                    <div class="flex-1 font-serif uppercase py-4 md:px-0">
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
                <div class="sm:hidden" :style="'height: 200px; background-size: cover; background-image: linear-gradient(180deg, rgba(245, 246, 252, 0), 70%, rgba(237, 242, 247, 1)), url('+heroBackground(hero.name)+'); background-repeat: no-repeat'"></div>

                <div class="container sm:mx-auto px-4">
                    <div class="md:flex -mt-12 sm:mt-0">
                        <div class="hidden sm:block pt-4 md:pt-0 w-full md:w-1/4 md:mr-8" :style="'max-height: 1000px; background-size: cover; background-image: linear-gradient(180deg, rgba(245, 246, 252, 0), 70%, rgba(237, 242, 247, 1)), url('+heroBackground(hero.name)+'); background-repeat: no-repeat'"></div>

                        <div class="w-full md:w-3/4 md:py-8">
                            <ul class="flex border-b border-gray-400 mb-4">
                                <li class="mr-2"><button class="border border-b-0 border-gray-400 rounded-t-lg px-4 py-2" @click="tab = 'composition'" :class="tabClasses('composition')">Composition</button></li>
                                <li class="mr-2"><button class="border border-b-0 border-gray-400 rounded-t-lg px-4 py-2" @click="tab = 'rulings'" :class="tabClasses('rulings')">Rulings</button></li>
                                <li class="text-right flex-1">
                                    <button @click="copyDeck" class="w-full sm:w-auto button-primary rounded px-3 py-2 text-base">
                                        <icon :size="4" class="inline-block">
                                            <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"/>
                                        </icon>
                                        <span class="ml-1">Copy <span class="hidden sm:inline">deck</span></span>
                                    </button>
                                </li>
                            </ul>

                            <div class="lg:flex" v-if="tab == 'composition'">
                                <div class="w-full md:w-2/7">
                                    <div v-if="weapons" class="mb-8">
                                        <h3 class="py-2 px-4 font-serif uppercase text-2xl">Weapons</h3>
                                        <ol>
                                            <li v-for="card in weapons" class="p-2 pl-4">
                                                <deck-card :card="card" :collapse="true"></deck-card>
                                            </li>
                                        </ol>
                                    </div>

                                    <div v-if="equipment.length" class="mb-8">
                                        <h3 class="py-2 px-4 font-serif uppercase text-2xl">Equipment</h3>
                                        <ol>
                                            <li v-for="card in equipment" class="p-2 pl-4">
                                                <deck-card :card="card" :collapse="true"></deck-card>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div class="w-full md:w-3/7">
                                    <div v-if="other.length">
                                        <h3 class="py-2 px-4 font-serif uppercase text-2xl">Other</h3>
                                        <ol>
                                            <li v-for="card in other" class="p-2 pl-4">
                                                <deck-card :card="card"></deck-card>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div class="w-full md:w-2/7">
                                    <h3 class="py-2 px-4 font-serif uppercase text-2xl mb-4">Deck stats</h3>

                                    <ol class="mb-8">
                                        <li class="block p-1 pl-4 w-full">Attack actions: {{ totalAttackActions }}</li>
                                        <li class="block p-1 pl-4 w-full">Attack reactions: {{ totalAttackReactions }}</li>
                                        <li class="block p-1 pl-4 w-full">Defense reactions: {{ totalDefenseReactions }}</li>
                                    </ol>

                                    <deck-curves :cards="other" stat="cost" style="height: 200px" class="mb-4"></deck-curves>
                                    <deck-curves :cards="other" stat="resource" style="height: 200px"></deck-curves>
                                </div>
                            </div>

                            <div class="md:pl-4" v-if="tab == 'rulings'">
                                <rulings :rulings="rulings"></rulings>
                            </div>
                        </div>
                    </div>

                    <hr class="text-gray-500 mt-4">

                    <discussion type="deck" :id="deck.slug" class="pb-8"></discussion>
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

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import DeckCard from "./DeckCard";
    import DeckCurves from "../DeckBuilder/DeckCurves";
    import Discussion from "../Discussion/Discussion";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import HeroAvatar from "../Components/HeroAvatar";
    import Imagery from "../Utilities/Imagery";
    import Icon from '../Components/Icon';
    import LazyLoader from '../Components/LazyLoader';
    import Respond from '../Discussion/Respond.vue';
    import Rulings from "../CardDatabase/Rulings";
    import Viewable from '../DeckBuilder/Viewable';
    import Votes from '../Voting/Votes.vue';

    export default {
        mixins: [Cardable, Imagery, Viewable],

        components: {
            Breadcrumbs,
            DeckCard,
            DeckCurves,
            Discussion,
            HeaderTitle,
            HeroAvatar,
            Icon,
            Respond,
            Rulings,
            Votes
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
                let rulings = _.flatten(this.deck.cards.map(card => {
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
            },

            tabClasses(tab) {
                if (this.tab === tab) {
                    return 'relative bg-gray-200 -bottom-1px text-gray-800';
                }

                return 'bg-gray-200 hover:bg-white text-gray-600';
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
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.deck = response.data;
                })
            });
        })
    };
</script>
