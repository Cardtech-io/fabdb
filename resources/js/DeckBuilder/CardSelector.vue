<template>
    <div>
        <div class="bg-white py-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto px-4">
                <card-search use-case="build" :wait="true" :page="page" @search-completed="refreshResults" :refreshable="false" :limit="25"></card-search>
            </div>
        </div>

        <div class="bg-gray-200 py-8">
            <div class="container sm:mx-auto px-4">
                <div v-if="cards.data">
                    <ol class="clearfix">
                        <card-item :action="addCard" :card="card" v-for="card in cards.data" :key="card.identifier"></card-item>
                    </ol>
                    <div class="py-4">
                        <paginator :results="cards" @page-selected="updatePage"></paginator>
                    </div>
                </div>
                <div v-else>
                    <h2 class="font-serif text-2xl uppercase">Usage</h2>
                    <p>
                        Search for your cards in the usual manner. When you see the card you want to add, click the card's name.<br>
                        This will add one (1) of that card to your deck. You can switch back to your deck at any time.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardSearch from '../CardDatabase/CardSearch.vue';
    import CardItem from './CardItem.vue';
    import Paginator from '../Components/Paginator.vue';

    export default {
        components: { CardItem, CardSearch, Paginator },

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