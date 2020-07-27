<template>
    <div>
        <grouped-cards :cards="all" group-id="all" :action="mode == 'search' ? removeFromDeck : false" v-if="all.cards.length"></grouped-cards>
        <div v-else class="text-center my-20 px-4">
            <span v-if="!filters.length">
                <div class="mb-8">
                    You have not yet added any cards.
                </div>
                <div class="w-1/2 lg:w-1/4 mx-auto" v-if="mode != 'search'">
                    <form-button :handler="updateMode" text="Search for cards" value="search"></form-button>
                </div>
            </span>
            <span v-else>
                There are no cards in your deck that match the selected filters.
            </span>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import FormButton from '../Components/Form/Button.vue';
    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import ManagesDecks from './ManagesDecks';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],
        components: {FormButton, GroupedCards},

        computed: {
            ...mapState('deck', ['filters', 'grouping', 'mode']),

            all: function() {
                if (!this.collection.length) {
                    return new Cards([]);
                }

                let reducer = (carry, card) => {
                    for (let i = 0; i < card.total; i++) {
                        carry.push(card);
                    }

                    return carry;
                };

                // If filters are applied, we don't want to go with the default ordering
                if (this.filters.length) {
                    return this.filter((new Cards(this.collection)).hydrate());
                } else {
                    let collection = new Cards(this.collection);
                    let cards = collection.hero() ? new Cards([collection.hero()]) : new Cards([]);

                    cards = cards.concat(collection.weapons());
                    cards = cards.concat(collection.equipment());
                    cards = cards.concat(collection.other());

                    return cards.hydrate();
                }
            },
        },

        methods: {
            ...mapActions('deck', ['setMode', 'removeCard']),

            filter: function(cards) {
                return cards.applyFilters(this.filters);
            },

            removeFromDeck: function(card) {
                this.removeRemote(card);
                this.removeCard({ card });
            },

            updateMode: function(mode) {
                this.setMode({ mode });
            }
        }
    };
</script>
