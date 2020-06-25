<template>
    <div>
        <header-title :title="card.name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8 md:py-8 clearfix">
                <div class="md:w-1/3 md:float-left p-4 md:py-0">
                    <card-image :card="card"></card-image>
                    <div class="flex mt-2">
                        <router-link :to="'/cards/' + card.prev" class="w-1/2 appearance-none block w-full mt-2 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 mr-2" v-if="card.prev">Previous</router-link>
                        <router-link :to="'/cards/' + card.next" class="w-1/2 appearance-none block w-full mt-2 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 ml-2" v-if="card.next">Next</router-link>
                    </div>
                </div>

                <div class="md:w-2/3 md:float-right sm:px-4">
                    <div class="p-4 pt-0 sm:p-0">
                        <div v-if="card.text" class="border bg-gray-300 border-gray-500 rounded-lg mb-8">
                            <div v-html="prettyText(card.text)" class="px-4"></div>
                            <div class="italic border-t border-gray-400 p-4 text-gray-600" v-if="card.flavour">{{ card.flavour }}</div>
                        </div>

                        <article>
                            <p class="mb-4">
                                <strong>"{{ card.name }}"</strong> is a trading card from the <strong>"{{ setToString(setFromIdentifier(card.identifier)) }}"</strong> set of the trading card game, <strong>Flesh & Blood.</strong>
                            </p>
                        </article>
                    </div>

                    <ul class="sm:py-4">
                        <li class="clearfix bg-white">
                            <div class="float-left w-1/4 p-2 px-4">Rarity</div>
                            <div class="float-left w-3/4 p-2 px-4"><router-link :to="{ name: 'cards.browse', query: { rarity: card.rarity } }" class="link">{{ rarity }}</router-link></div>
                        </li>
                        <li class="clearfix">
                            <div class="float-left w-1/4 p-2 px-4">Keywords</div>
                            <div class="float-left w-3/4 p-2 px-4">
                                <span v-for="(keyword, index) in card.keywords">
                                    <router-link :to="'/cards/browse/?keywords=' + keyword" class="link">{{ keyword }}</router-link><span v-if="index < card.keywords.length - 1">, </span>
                                </span>
                            </div>
                        </li>
                        <li v-for="(value, stat) in card.stats" class="clearfix odd:bg-white" v-if="value">
                            <div class="float-left w-1/4 p-2 px-4">{{ sentenceCase(stat) }}</div>
                            <div class="float-left w-3/4 p-2 px-4">{{ value }}</div>
                        </li>
                    </ul>

                    <pricing :listings="card.listings" class="mb-4"></pricing>

                    <hr class="text-gray-500 mt-4">

                    <comment-count :comments="comments"></comment-count>

                    <div v-if="comments">
                        <comment v-for="comment in comments" :key="comment.slug" :comment="comment"></comment>
                    </div>

                    <!-- post a comment -->
                    <respond type="card" :foreign="card.identifier" @comment-posted="addComment"></respond>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from './Cardable.js';
    import CardImage from './CardImage.vue';
    import LazyLoader from '../Components/LazyLoader';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Pricing from './Pricing.vue';
    import Respond from '../Discussion/Respond.vue';
    import Comment from '../Discussion/Comment.vue';
    import CommentCount from '../Discussion/CommentCount.vue';
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [ Cardable, Strings ],

        components: {
            Breadcrumbs,
            CardImage,
            Comment,
            CommentCount,
            HeaderTitle,
            Pricing,
            Respond
        },

        computed: {
            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: this.$route.meta.parent.name, link: this.$route.meta.parent.path },
                    { text: this.card.name }
                ];
            },

            rarity: function() {
                const levels = {
                    C: 'Common',
                    R: 'Rare',
                    S: 'Super rare',
                    M: 'Majestic',
                    L: 'Legendary',
                    F: 'Fabled',
                    T: 'Token',
                    P: 'Promo'
                };

                return levels[this.card.rarity];
            }
        },

        data() {
            return {
                card: null,
                comments: null,
            }
        },

        methods: {
            addComment: function(comment) {
                this.comments.push(comment);
            },

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
                    { vmid: 'og:image', property: 'og:image', content: this.cardUrl(this.card.identifier, 450, true) },
                    { vmid: 'og:image:width', property: 'og:image:width', content: '450' },
                    { vmid: 'og:image:height', property: 'og:image:height', content: '628' }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            let card = axios.get('/cards/' + to.params.identifier);
            let comments = axios.get('/comments/card/' + to.params.identifier);

            axios.all([card, comments]).then(axios.spread((...responses) => {
                callback(function() {
                    this.card = responses[0].data;
                    this.comments = responses[1].data;
                })
            }));
        })
    }
</script>