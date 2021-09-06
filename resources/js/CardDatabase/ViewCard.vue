<template>
    <div>
        <header-title :title="card.name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8 md:py-8">
                <div class="flow-root">
                    <div class="md:w-1/4 md:float-left p-4 md:py-0">
                        <div class="relative">
                            <card-image :card="card"></card-image>
                            <banned v-if="card.banned"></banned>
                        </div>
                        <div class="flex mt-2">
                            <card-nav :to="card.prev" text="Previous" class="mr-1"></card-nav>
                            <card-nav :to="card.next" text="Next" class="ml-1 text-right"></card-nav>
                        </div>

                        <h2 class="font-serif uppercase text-lg mb-1 mt-4">Printings</h2>
                        <button @click="card.image = cardImageFromSku(printing.sku.sku, 300)" v-for="printing in card.printings" :class="printingClasses(printing)" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.sku.finish">
                            {{ printing.sku.sku }}
                        </button>

                        <advertisement :width="340" :height="340" :zone="107318" class="mt-4"></advertisement>

                        <ul class="pt-4 text-base">
                            <li class="flex odd:bg-white" v-if="card.artist">
                                <div class="w-1/3 p-2 px-4">Artist</div>
                                <div class="w-2/3 p-2 px-4"><router-link :to="{ name: 'artists.view', params: { artist: card.artist.slug } }" class="link-alternate">{{card.artist.name}}</router-link></div>
                            </li>
                            <li class="flex odd:bg-white">
                                <div class="w-1/3 p-2 px-4">Rarity</div>
                                <div class="w-2/3 p-2 px-4"><router-link :to="{ name: 'cards.browse', query: { rarity: card.rarity.toLowerCase() } }" class="link-alternate">{{ rarity }}</router-link></div>
                            </li>
                            <li class="flex odd:bg-white">
                                <div class="w-1/3 p-2 px-4">Keywords</div>
                                <div class="w-2/3 p-2 px-4">
                                    <span v-for="(keyword, index) in card.keywords">
                                        <router-link :to="'/cards/browse?keywords=' + keyword" class="link-alternate">{{ keyword }}</router-link><span v-if="index < card.keywords.length - 1">, </span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="md:w-3/4 md:float-right sm:px-4 md:flex">
                        <div class="md:w-1/2">
                            <div class="p-4 pt-0 sm:p-0">
                                <div v-if="card.text" class="bg-white text-black rounded-lg mb-1">
                                    <div v-html="prettyText(card.text)" class="px-4 py-px"></div>
                                    <div class="italic border-t border-gray-200 p-4 text-gray-600" v-if="card.flavour">{{ card.flavour }}</div>
                                </div>
                                <div class="inline-block flex rounded-lg overflow-hidden space-x-px mb-4">
                                    <div v-for="(value, stat) in card.stats" class="flex justify-center items-center flex-grow bg-white space-x-2 py-2" v-if="value">
                                        <div class="">
                                            <img :src="statToImagePath(stat, value)" :alt="sentenceCase(stat)" class="h-6">
                                        </div>
                                        <div class="text-xl">{{ value }}</div>
                                    </div>
                                </div>

                                <article>
                                    <p class="mb-4 italic">
                                        <strong>"{{ card.name }}"</strong> is a trading card from the <strong>"{{ setToString(setFromIdentifier(card.printings[0].sku.sku)) }}"</strong> set of the trading card game, <strong>Flesh & Blood.</strong>
                                    </p>
                                </article>
                            </div>

                            <rulings :rulings="rulings" class="px-4 sm:px-0" v-if="rulings.length"></rulings>
                        </div>
                        <div class="md:w-1/2 md:ml-8">
                            <a :href="buyLink(card)" class="flex items-center w-1/2 button-secondary rounded p-2 mb-4" target="_blank">
                                <icon :size="6">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                                </icon>
                                <span class="ml-1">Buy <span class="hidden sm:inline">from TCGplayer</span></span>
                            </a>

                            <pricing :card="card" class="mb-8 mt-4 md:mt-0"></pricing>
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

    import Advertisement from "../Components/Advertisement";
    import Banned from './Banned';
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
    import Imagery from "../Utilities/Imagery";

    export default {
        mixins: [Cardable, Imagery, Strings],

        components: {
            Advertisement,
            Banned,
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
            buyLink(card) {
                return 'https://www.tcgplayer.com/search/flesh-and-blood-tcg/product?q='+card.identifier+'&utm_campaign=affiliate&utm_medium=FABDB&utm_source=FABDB';
            },

            printingClasses(printing) {
                return this.card.image === this.cardImageFromSku(printing.sku.sku, 300) ? 'bg-black' :  printing.sku.finish;
            },

            keywords() {
                var keywords = this.card.keywords;

                for (var i in keywords) {
                    keywords[i] = '<router-link to="/cards/?search=' + keywords[i] + '">' + keywords[i] + '</router-link>';
                }

                return this.card.keywords.join(', ');
            },

            sentenceCase(string) {
                var sentence = string.replace("-", ' ');

                return sentence.slice(0, 1).toUpperCase() + sentence.slice(1);
            },

            statToImagePath(stat, value) {
                if (stat === 'cost') return '/img/resource.png';
                if (stat === 'resource') return '/img/pitch-'+value+'.png';

                return '/img/'+stat+'.png';
            }
        },

        metaInfo() {
            let title = this.card.name + ' - ' + this.card.printings[0].sku.sku;

            return {
                title: title,
                meta: [
                    { vmid: 'description', name: 'description', content: 'View Flesh & Blood card, ' + this.card.name + '.' },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: this.card.text },
                    { vmid: 'og:image', property: 'og:image', content: this.cardImage(this.card.image, true) },
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
