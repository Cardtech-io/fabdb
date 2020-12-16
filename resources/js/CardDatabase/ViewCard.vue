<template>
    <div>
        <header-title :title="card.name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8 md:py-8">
                <div class="clearfix">
                    <div class="md:w-1/4 md:float-left p-4 md:py-0">
                        <card-image :card="card"></card-image>
                        <div class="flex mt-2">
                            <card-nav :to="card.prev" text="Previous" class="mr-2"></card-nav>
                            <card-nav :to="card.next" text="Next" class="ml2 text-right"></card-nav>
                        </div>

                        <ul class="pt-4 text-base">
                            <li class="clearfix bg-white">
                                <div class="float-left w-1/3 p-2 px-4">Rarity</div>
                                <div class="float-left w-2/3 p-2 px-4"><router-link :to="{ name: 'cards.browse', query: { rarity: card.rarity.toLowerCase() } }" class="link-alternate">{{ rarity }}</router-link></div>
                            </li>
                            <li class="clearfix">
                                <div class="float-left w-1/3 p-2 px-4">Keywords</div>
                                <div class="float-left w-2/3 p-2 px-4">
                                    <span v-for="(keyword, index) in card.keywords">
                                        <router-link :to="'/cards/browse?keywords=' + keyword" class="link-alternate">{{ keyword }}</router-link><span v-if="index < card.keywords.length - 1">, </span>
                                    </span>
                                </div>
                            </li>
                            <li v-for="(value, stat) in card.stats" class="clearfix even:bg-white" v-if="value">
                                <div class="float-left w-1/3 p-2 px-4">{{ sentenceCase(stat) }}</div>
                                <div class="float-left w-2/3 p-2 px-4">{{ value }}</div>
                            </li>
                        </ul>
                    </div>

                    <div class="md:w-3/4 md:float-right sm:px-4 md:flex">
                        <div class="md:w-1/2">
                            <div class="p-4 pt-0 sm:p-0">
                                <div v-if="card.text" class="border bg-gray-300 border-gray-500 rounded-lg mb-8">
                                    <div v-html="prettyText(card.text)" class="px-4"></div>
                                    <div class="italic border-t border-gray-400 p-4 text-gray-600" v-if="card.flavour">{{ card.flavour }}</div>
                                </div>

                                <article>
                                    <p class="mb-4 italic">
                                        <span v-if="!card.variantOf">
                                            <strong>"{{ card.name }}"</strong> is a trading card from the <strong>"{{ setToString(setFromIdentifier(card.identifier)) }}"</strong> set of the trading card game, <strong>Flesh & Blood.</strong>
                                        </span>
                                        <span v-else>
                                            <strong>"{{ card.name }}" ({{ card.identifier }})</strong> is a trading card promo variant of {{ card.variantOf.identifier }}, from the <strong>"{{ setToString(setFromIdentifier(card.variantOf.identifier)) }}"</strong> set of the trading card game, <strong>Flesh & Blood.</strong>
                                        </span>
                                    </p>
                                </article>
                            </div>

                            <rulings :rulings="rulings" class="px-4 sm:px-0" v-if="rulings.length"></rulings>
                        </div>
                        <div class="md:w-1/2 md:ml-8">
                            <pricing :listings="card.listings" class="mb-8 mt-4 md:mt-0"></pricing>
                            <card-price :card="card"></card-price>
                        </div>
                    </div>
                </div>

                <hr class="text-gray-500 mt-4">

                <discussion type="card" :id="card.identifier" class="mx-4"></discussion>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from './Cardable.js';
    import CardImage from './CardImage.vue';
    import CardPrice from "./Metrics/CardPrice";
    import CardNav from "./CardNav";
    import Discussion from "../Discussion/Discussion";
    import LazyLoader from '../Components/LazyLoader';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Pricing from './Pricing.vue';
    import Rulings from "./Rulings";
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [ Cardable, Strings ],

        components: {
            Breadcrumbs,
            CardImage,
            CardPrice,
            CardNav,
            Discussion,
            HeaderTitle,
            Pricing,
            Rulings,
        },

        computed: {
            crumbs() {
                return [
                    { text: 'Home', link: '/' },
                    { text: this.$route.meta.parent.name, link: this.$route.meta.parent.path },
                    { text: this.card.name }
                ];
            },

            rarity() {
                return this.$settings.game.rarities[this.card.rarity];
            },

            rulings() {
                return this.card.rulings.map(ruling => {
                    return ruling.description;
                });
            }
        },

        data() {
            return {
                card: null
            }
        },

        methods: {
            keywords: function() {
                var keywords = this.card.keywords;

                for (var i in keywords) {
                    keywords[i] = '<router-link to="/cards/?search=' + keywords[i] + '">' + keywords[i] + '</router-link>';
                }

                return this.card.keywords.join(', ');
            },

            sentenceCase: function(string) {
                var sentence = string.replace("-", ' ');

                return sentence.slice(0, 1).toUpperCase() + sentence.slice(1);
            }
        },

        metaInfo() {
            return {
                title: this.card.name + ' - ' + this.card.identifier,
                meta: [
                    { vmid: 'description', name: 'description', content: 'View Flesh & Blood card, ' + this.card.name + '.' },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: this.card.name + ' - ' + this.card.identifier },
                    { vmid: 'og:description', property: 'og:description', content: this.card.text },
                    { vmid: 'og:image', property: 'og:image', content: this.cardUrl(this.$route.params.identifier, 450, true) },
                    { vmid: 'og:image:width', property: 'og:image:width', content: '450' },
                    { vmid: 'og:image:height', property: 'og:image:height', content: '628' }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/cards/' + to.params.identifier).then(response => {
                callback(function() {
                    this.card = response.data;
                })
            });
        })
    }
</script>
