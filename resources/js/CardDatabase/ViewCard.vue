<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4 mb-4">
            <p class="">
                <router-link to="/" class="link">Home</router-link> <span class="text-gray-600">&gt;</span>
                <router-link :to="$route.meta.parent.path" class="link">{{ $route.meta.parent.name }}</router-link> <span class="text-gray-600">&gt;</span>
                <span v-if="card">{{ card.name }}</span>
            </p>
        </div>

        <div class="border-gray-800 rounded-lg border p-4 clearfix" v-if="card">
            <div class="md:w-1/3 md:float-left">
                <img :src="cardUrl(card.identifier, 350)" :alt="card.name" class="w-full max-w-md">
            </div>
            <div class="md:w-2/3 md:float-right md:pl-8">
                <h1 class="font-serif text-4xl mb-4">{{ card.name }} - {{ card.identifier }}</h1>
                <ul>
                    <li class="clearfix">
                        <div class="float-left w-1/3">Rarity</div>
                        <div class="float-left w-2/3">{{ rarity }}</div>
                    </li>
                    <li class="clearfix mb-4">
                        <div class="float-left w-1/3">Keywords</div>
                        <div class="float-left w-2/3">
                        <span v-for="(keyword, index) in card.keywords">
                            <router-link :to="'/?search=' + keyword" class="link">{{ keyword }}</router-link><span v-if="index < card.keywords.length - 1">, </span>
                        </span>
                        </div>
                    </li>
                    <li v-for="(value, stat) in card.stats" class="clearfix">
                        <div class="float-left w-1/3">{{ sentenceCase(stat) }}</div>
                        <div class="float-left w-2/3">{{ value }}</div>
                    </li>
                </ul>

                <manage-card :card="card"></manage-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Cardable from './Cardable.js';
    import ManageCard from './ManageCard.vue';

    export default {
        mixins: [Cardable],

        components: {
            ManageCard
        },

        computed: {
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

        mounted() {
            axios.get('/cards/' + this.$route.params.identifier).then(response => {
                this.card = response.data;
            });
        }
    }
</script>