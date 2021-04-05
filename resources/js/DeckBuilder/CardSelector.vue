<template>
    <div>
        <div class="bg-white py-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto md:px-4">
                <form class="block flex" @submit.prevent="search()">
                    <div class="w-1/2">
                        <input type="text" v-model="name" placeholder="Card name" class="w-full input rounded-lg py-3 px-4 focus:bg-white focus:border-gray-500">
                    </div>
                    <div class="w-1/4 mx-2">
                        <select v-model="cardType" class="w-1/4 input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                            <option value="">All</option>
                            <option value="non-attack action">Non-attack actions</option>
                            <option value="attack action">Attack actions</option>
                            <option value="attack reaction">Attack reactions</option>
                            <option value="defense reaction">Defense reactions</option>
                            <option value="equipment">Equipment</option>
                            <option value="hero">Hero</option>
                            <option value="instant">Instants</option>
                            <option value="item">Items</option>
                            <option value="weapon">Weapons</option>
                        </select>
                    </div>
                    <div class="w-1/4">
                        <button type="submit" class="w-full button-primary rounded-lg py-3 px-4">Search</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="bg-gray-200 py-8">
            <div class="container sm:mx-auto px-4">
                <div v-if="results.data">
                    <ul class="clearfix sm:-mx-4">
                        <card-item :action="addCard" :card="card" v-for="card in results.data" :key="card.identifier"></card-item>
                    </ul>
                    <div class="py-4">
                        <paginator :results="results" @page-selected="updatePage"></paginator>
                    </div>
                </div>
                <div v-else>
                    <search-tips></search-tips>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardItem from './CardItem.vue';
    import Paginator from '../Components/Paginator.vue';
    import SearchTips from '../CardDatabase/SearchTips.vue';
    import Viewable from "./Viewable";

    export default {
        props: ['deck'],

        components: {
            CardItem,
            Paginator,
            SearchTips
        },

        mixins: [Viewable],

        computed: {
            cards() {
                return this.deck.cards;
            },

            useCase() {
                return this.deck && this.deck.format == 'open' ? 'build-open' : 'build';
            }
        },

        data() {
            return {
                cardType: '',
                name: '',
                page: 1,
                results: {}
            }
        },

        methods: {
            addCard: function(card) {
                this.$emit('card-selected', card);
            },

            refreshResults: function(results) {
                if (results == null) {
                    this.results = {};
                } else {
                    this.results = results;
                }
            },

            search() {
                let params = {
                    'use-case': 'build',
                    cardType: this.cardType,
                    'class': this.hero ? this.hero.keywords[0] : '',
                    name: this.name,
                    page: this.page
                };

                axios.get('/cards/', { params }).then(response => {
                    this.refreshResults(response.data);
                }).catch(error => {});
            },

            updatePage: function(page) {
                this.page = page;
                this.search();
            }
        }
    };
</script>
