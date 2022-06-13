<template>
    <div>
        <header-title :title="name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8 md:py-8">
                <div class="flow-root">
                    <div class="md:w-1/4 md:float-left p-4 md:py-0">
                        <div class="relative">
                            <card-image :card="card"/>
                            <banned v-if="card.banned"/>
                        </div>
                        <div class="flex mt-2">
                            <card-nav :to="card.prev" text="Previous" class="mr-1"/>
                            <card-nav :to="card.next" text="Next" class="ml-1 text-right"/>
                        </div>

                        <h2 class="font-serif uppercase text-lg mb-1 mt-4">Printings</h2>
                        <button @click="selectPrinting(printing)" v-for="printing in card.printings" :class="printingClasses(printing)" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.finish">
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
                            <div class="p-4 pt-0 sm:p-0 space-y-1">
                                <section v-if="card.banned" class="bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-4">
                                    This card is banned {{bannedFormats}}.
                                </section>

                                <section class="flex">
                                    <language-selector :languages="languages" @language-selected="findPrintingForLanguage" class="flex-grow pr-1"/>
                                    <button @click="$modal.show('suggestion')" class="bg-white hover:bg-primary hover:text-white px-4 py-1 rounded-lg text-sm" v-if="selected">
                                        Suggest correction
                                    </button>
                                </section>

                                <modal name="suggestion" :adaptive="true" :min-height="730">
                                    <suggest-correction :printing="selected" :identifier="card.identifier" v-if="selected"/>
                                </modal>

                                <div v-if="text" class="bg-white text-black rounded-lg">
                                    <div v-html="prettyText(text)" class="px-4 py-px"></div>
                                    <div class="italic border-t border-gray-200 p-4 text-gray-600" v-if="flavour">{{ flavour }}</div>
                                </div>

                                <div class="inline-block flex rounded-lg overflow-hidden space-x-px mb-4">
                                    <div v-for="(value, stat) in card.stats" class="flex justify-center items-center flex-grow bg-white space-x-2 py-2" v-if="!isNaN(value)">
                                        <div class="">
                                            <img :src="statToImagePath(stat, value)" :alt="sentenceCase(stat)" class="h-6">
                                        </div>
                                        <div class="text-xl">{{ value }}</div>
                                    </div>
                                </div>

                                <article>
                                    <p class="my-4 italic">
                                        <strong>"{{ card.name }}"</strong> is a trading card from the <strong>"{{ setToString(setFromIdentifier(card.printings[0].sku.sku)) }}"</strong> set of the trading card game, <strong>Flesh & Blood.</strong>
                                    </p>
                                </article>
                            </div>

                            <rulings :rulings="rulings" class="px-4 sm:px-0" v-if="rulings.length"></rulings>
                        </div>
                        <div class="md:w-1/2 md:ml-8">
                            <tcg-player :buy-link="card.buyLink"/>

                            <latest-decks title="Recent" color="bg-black" :query="'card='+card.identifier" class="mb-4 mt-4"></latest-decks>
                        </div>
                    </div>
                </div>

                <hr class="text-gray-500 mt-4">

                <discussion type="card" :id="card.identifier" class="mx-4"/>
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
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from "../Utilities/Imagery";
    import LanguageSelector from "./LanguageSelector";
    import LatestDecks from "../Decks/Featured/LatestDecks";
    import LazyLoader from '../Components/LazyLoader';
    import Pricing from './Pricing.vue';
    import RecentDecks from "./RecentDecks";
    import Rulings from "./Rulings";
    import Strings from '../Utilities/Strings';
    import SuggestCorrection from "./SuggestCorrection";

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
            LanguageSelector,
            LatestDecks,
            Pricing,
            RecentDecks,
            Rulings,
            SuggestCorrection
        },

        computed: {
            bannedFormats() {
                if (this.card.banned.length > 1) {
                    return 'in both Blitz and Constructed formats';
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
                this.card.image = this.cardImageFromSku(printing.sku.sku, 300);
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
