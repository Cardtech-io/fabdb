<template>
    <div>
        <header-title :title="name"/>
        <breadcrumbs :crumbs="crumbs"/>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8">
                <div class="md:flex md:space-x-4 p-4">
                    <div class="md:w-1/4">
                        <div class="relative">
                            <card-image :card="card"/>
                            <card-legality :card="card"/>
                        </div>
                        <div class="flex mt-2">
                            <card-nav :to="card.prev" text="Previous" class="mr-1"/>
                            <card-nav :to="card.next" text="Next" class="ml-1 text-right"/>
                        </div>

                        <h2 class="font-serif uppercase text-lg mb-1 mt-4">Printings</h2>
                        <button @click="selectPrinting(printing)" v-for="printing in card.printings" :class="printingClasses(printing)" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.finish">
                            {{ printing.sku.sku }}
                        </button>

                        <advertisement :width="340" :height="340" :zone="107318" class="mt-4"/>

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

                    <div class="md:w-1/2 mt-4 md:mt-0">
                        <div class="space-y-4">
                            <div v-if="text" class="bg-white text-black rounded-lg">
                                <div v-html="prettyText(text)" class="px-4 py-px"></div>
                                <div class="italic border-t border-gray-200 p-4 text-gray-600" v-if="flavour">{{ flavour }}</div>
                            </div>

                            <div class="inline-block flex rounded-lg overflow-hidden space-x-px">
                                <div v-for="(value, stat) in card.stats" class="flex justify-center items-center flex-grow bg-white space-x-2 py-2" v-if="!isNaN(value)">
                                    <div class="">
                                        <img :src="statToImagePath(stat, value)" :alt="sentenceCase(stat)" class="h-6">
                                    </div>
                                    <div class="text-xl">{{ value }}</div>
                                </div>
                            </div>

                            <legality-banner :card="card" class="my-4"/>

                            <article>
                                <p class="my-4 italic">
                                    <strong>"{{ card.name }}"</strong> is a trading card from the <strong>"{{ setToString(setFromIdentifier(card.printings[0].sku.sku)) }}"</strong> set of the trading card game, <strong>Flesh & Blood.</strong>
                                </p>
                            </article>
                        </div>

                        <rulings :rulings="rulings" class="px-4 sm:px-0" v-if="rulings.length"></rulings>

                        <hr class="text-gray-500 mt-4">

                        <discussion type="card" :id="card.identifier" class="md:block"/>
                    </div>
                    <div class="md:w-1/4 mt-4 md:mt-0">
                        <tcg-player :buy-link="card.buyLink"/>
                        <recent-decks :card="card" class="mt-4"/>
                    </div>
                </div>

                <hr class="text-gray-500 mt-4">

                <discussion type="card" :id="card.identifier" class="mx-4 md:hidden"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import Advertisement from "../Components/Advertisement";
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from './Cardable.js';
    import CardImage from './CardImage.vue';
    import CardLegality from './CardLegality';
    import CardPrice from "./Metrics/CardPrice";
    import CardNav from "./CardNav";
    import Discussion from "../Discussion/Discussion";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from "../Utilities/Imagery";
    import LanguageSelector from "./LanguageSelector";
    import LazyLoader from '../Components/LazyLoader';
    import LegalityBanner from "./LegalityBanner";
    import Pricing from './Pricing.vue';
    import RecentDecks from "../Decks/Featured/RecentDecks";
    import Rulings from "./Rulings";
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [Cardable, Imagery, Strings],

        components: {
            CardLegality,
            Advertisement,
            Breadcrumbs,
            CardImage,
            CardPrice,
            CardNav,
            Discussion,
            HeaderTitle,
            LanguageSelector,
            LegalityBanner,
            Pricing,
            RecentDecks,
            Rulings
        },

        computed: {
            bannedFormats() {
                if (Object.keys(this.card.legality).length > 2) {
                    return 'in all formats';
                }

                return 'in '+this.ucfirst(this.card.banned[0])+' format';
            },

            languages() {
                let available = this.card.printings.map(printing => printing.language);

                return this.$settings.languages.filter(language => {
                    return available.indexOf(language.code) !== -1;
                });
            },

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
                card: null,
                selected: null,
                text: '',
                flavour: '',
                name: '',
            }
        },

        methods: {
            printingClasses(printing) {
                let finishes = {
                    'cold foil': 'cold',
                    'gold foil': 'gold',
                    'rainbow foil': 'rainbow',
                    'regular': 'regular'
                };

                return this.selected && this.selected.sku.sku === printing.sku.sku ? 'bg-black' : finishes[printing.finish.toLowerCase()];
            },

            selectPrinting(printing) {
                this.card.image = this.cardImageFromSku(printing.sku.sku, 450);
                this.selected = printing;
                this.switchContent(printing);
                this.$eventHub.$emit('language-selected', printing.language);
            },

            switchContent(record) {
                this.text = record.text;
                this.flavour = record.flavour;
                this.name = record.name;
            },

            findPrintingForLanguage(languageCode) {
                // get first printing of that language
                let printing = this.card.printings.filter(printing => printing.language === languageCode)[0];

                if (printing) {
                    this.selectPrinting(printing);
                }
            },

            keywords() {
                var keywords = this.card.keywords;

                for (var i in keywords) {
                    keywords[i] = '<router-link to="/cards/?search=' + keywords[i] + '">' + keywords[i] + '</router-link>';
                }

                return this.card.keywords.join(', ');
            },

            statToImagePath(stat, value) {
                if (stat === 'cost') return '/img/resource.png';
                if (stat === 'resource') return '/img/pitch-'+value+'.png';

                return '/img/'+stat+'.png';
            }
        },

        metaInfo() {
            let title = this.name + ' - ' + this.card.printings[0].sku.sku + ' - FaB DB';

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
                    this.switchContent(this.card);
                    this.selectPrinting(this.card.printings[0]);
                })
            });
        })
    }
</script>
