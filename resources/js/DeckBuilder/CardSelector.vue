<template>
    <div>
        <div class="bg-white py-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto md:px-4">
                <card-search :use-case="useCase" :wait="true" :page="page" @search-completed="refreshResults" :refreshable="false" :limit="25"></card-search>
            </div>
        </div>

        <div class="bg-gray-200 py-8">
            <div class="container sm:mx-auto px-4">
                <div v-if="cards.data">
                    <ul class="clearfix sm:-mx-4">
                        <card-item :action="addCard" :card="card" v-for="card in cards.data" :key="card.identifier"></card-item>
                    </ul>
                    <div class="py-4">
                        <paginator :results="cards" @page-selected="updatePage"></paginator>
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
    import CardSearch from '../CardDatabase/CardSearch.vue';
    import CardItem from './CardItem.vue';
    import Paginator from '../Components/Paginator.vue';
    import SearchTips from '../CardDatabase/SearchTips.vue';

    export default {
        props: ['deck'],

        components: {
            CardItem,
            CardSearch,
            Paginator,
            SearchTips
        },

        computed: {
            useCase: function() {
                return this.deck && this.deck.format == 'open' ? 'build-open' : 'build';
            }
        },

        data() {
            return {
                page: 1,
                cards: {}
            }
        },

        methods: {
            addCard: function(card) {
                this.$emit('card-selected', card);
            },

            refreshResults: function(results) {
                if (results == null) {
                    this.cards = {};
                } else {
                    this.cards = results;
                }
            },

            updatePage: function(page) {
                this.page = page;
            }
        }
    };
</script>