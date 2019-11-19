<template>
    <div class="border-gray-800 rounded-lg border p-4 clearfix" v-if="card">
        <div class="md:w-1/3 md:float-left">
            <img :src="cardUrl(card.identifier, 350)" :alt="card.name" class="w-full max-w-md">
        </div>
        <div class="md:w-2/3 md:float-right md:pl-8">
            <h1 class="font-serif text-4xl mb-4">{{ card.name }} - {{ card.identifier }}</h1>
            <ul>
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

            <div class="my-4">
                <button class="flex bg-gray-900 p-2 px-4 items-center rounded-lg hover:bg-gray-800" @click="addToCollection()">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 110-20 10 10 0 010 20z"/></svg>
                    <span class="ml-2">Add to collection</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],

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
            },

            addToCollection: function() {
                axios.post('/collection/', {identifier: this.card.identifier}).then(response => {
                    this.card.count += 1;
                });
            }
        },

        mounted() {
            axios.get('/cards/' + this.$route.params.identifier).then(response => {
                this.card = response.data;
            });
        }
    }
</script>