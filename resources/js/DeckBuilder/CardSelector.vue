<template>
    <div>
        <div>
            <card-search view="all" size="small" :wait="true" @search-completed="refreshResults" :refreshable="false" :limit="10"></card-search>
        </div>

        <ul v-if="cards">
            <li v-for="card in cards" class="flex border-gray-800 border-b">
                <card-item :action="addCard" :card="card"></card-item>
            </li>
        </ul>
    </div>
</template>

<script>
    import CardSearch from '../CardDatabase/CardSearch.vue';
    import CardItem from './CardItem.vue';

    export default {
        components: { CardItem, CardSearch },

        data() {
            return {
                cards: []
            }
        },

        methods: {
            addCard: function(card) {
                this.$emit('card-selected', card);
            },

            refreshResults: function(results) {
                this.cards = results.data;
            }
        }
    };
</script>