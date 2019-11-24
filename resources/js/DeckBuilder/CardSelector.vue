<template>
    <div>
        <card-search view="all" size="small" :wait="true" @search-completed="refreshResults" :limit="5"></card-search>

        <ul v-if="cards">
            <li v-for="card in cards" class="flex border-gray-800 border-b p-2">
                <div>
                    <span class="font-serif">{{ card.name }}</span> <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card)"></span><br>
                    <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                    <span v-for="(keyword, index) in card.keywords" class="text-sm">{{ ucfirst(keyword) }}<span v-if="index < card.keywords.length - 1">, </span></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import CardSearch from '../CardDatabase/CardSearch.vue';

    export default {
        components: {CardSearch},

        data() {
            return {
                cards: []
            }
        },

        methods: {
            resourceColour: function(card) {
                if (card.stats.resource) {
                    const colours = {1: 'red-600', 2: 'yellow-300', 3: 'blue-400'};
                    const colour = colours[card.stats.resource];

                    if (colour) {
                        return 'bg-' + colour;
                    }
                }
            },

            ucfirst: function(string) {
                return string[0].toUpperCase() + string.slice(1);
            },

            refreshResults: function(results) {
                this.cards = results.data;
            }
        }
    };
</script>