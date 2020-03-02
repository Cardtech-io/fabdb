<template>
    <div>
        <header-title :title="card.name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8 md:py-8 clearfix">
                <div class="md:w-1/3 md:float-left p-4 md:py-0">
                    <img :src="cardUrl(card.identifier, 350)" :alt="card.name" class="w-full max-w-md rounded-xl">
                </div>

                <div class="md:w-2/3 md:float-right sm:px-4">
                    <div class="p-4 pt-0 sm:p-0">
                        <div v-if="card.text" v-html="prettyText(card.text)" class="-mt-4 mb-8"></div>
                        <span v-else>This card is from the "{{ setToString(set(card.identifier)) }}" set of the Flesh & Blood TCG.</span>
                    </div>
                    <ul class="sm:py-4">
                        <li class="clearfix bg-white">
                            <div class="float-left w-1/3 p-2 px-4">Rarity</div>
                            <div class="float-left w-2/3 p-2 px-4">{{ rarity }}</div>
                        </li>
                        <li class="clearfix">
                            <div class="float-left w-1/3 p-2 px-4">Keywords</div>
                            <div class="float-left w-2/3 p-2 px-4">
                                <span v-for="(keyword, index) in card.keywords">
                                    <router-link :to="'/cards/browse/?keywords=' + keyword" class="link">{{ keyword }}</router-link><span v-if="index < card.keywords.length - 1">, </span>
                                </span>
                            </div>
                        </li>
                        <li v-for="(value, stat) in card.stats" class="clearfix odd:bg-white">
                            <div class="float-left w-1/3 p-2 px-4">{{ sentenceCase(stat) }}</div>
                            <div class="float-left w-2/3 p-2 px-4">{{ value }}</div>
                        </li>
                    </ul>

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
    import LazyLoader from '../Components/LazyLoader';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Respond from '../Discussion/Respond.vue';
    import Comment from '../Discussion/Comment.vue';
    import CommentCount from '../Discussion/CommentCount.vue';
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [ Cardable, Strings ],

        components: {
            Breadcrumbs,
            Comment,
            CommentCount,
            HeaderTitle,
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