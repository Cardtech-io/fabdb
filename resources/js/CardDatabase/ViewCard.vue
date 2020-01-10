<template>
    <div>
        <header-title :title="card.name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto pt-0 pb-8 md:py-8 clearfix" v-if="card">
                <div class="md:w-2/3 md:float-right sm:px-4 md:pl-8">
                    <h2 class="font-serif text-4xl uppercase hidden md:block">{{ card.name }} - {{ card.identifier }}</h2>
                    <p class="p-4 sm:px-0 sm:pb-0">This card is from the "{{ setToString(set(card.identifier)) }}" set of the Flesh & Blood TCG.</p>
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
                </div>

                <div class="md:w-1/3 md:float-left p-4 md:py-0">
                    <img :src="cardUrl(card.identifier, 350)" :alt="card.name" class="w-full max-w-md rounded-xl">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from './Cardable.js';
    import LazyLoader from '../Components/LazyLoader';
    import HeaderTitle from '../Components/HeaderTitle.vue';

    export default {
        mixins: [Cardable],

        components: {
            Breadcrumbs,
            HeaderTitle
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
                    { vmid: 'description', name: 'description', content: 'View Flesh & Blood card, ' + this.card.name + '.' }
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