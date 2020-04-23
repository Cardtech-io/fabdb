<template>
    <div>
        <grouped-cards :cards="all" group-id="all" :action="removeFromDeck" v-if="all.cards.length"></grouped-cards>
        <div v-else class="text-center my-20">
            <span v-if="!filters.length">
                You have not yet added any cards. Select a hero by first searching for cards by clicking the button top-right.
            </span>
            <span v-else>
                There are no cards in your deck that match the selected filters.
            </span>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import ManagesDecks from './ManagesDecks';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],
        components: {GroupedCards},

        computed: {
            ...mapState('deck', ['filters']),

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
                    return this.filter(new Cards(this.collection.reduce(reducer, []))).group('name');
                } else {
                    let collection = new Cards(this.collection);
                    let cards = new Cards([collection.hero()]);

                    cards = cards.concat(collection.weapons().reduce(reducer, []));
                    cards = cards.concat(collection.equipment().reduce(reducer, []));
                    cards = cards.concat(collection.other().reduce(reducer, []));

                    return cards.group('name');
                }
            },
        },

        methods: {
            ...mapActions('deck', ['removeCard']),

            filter: function(cards) {
                return cards.applyFilters(this.filters);
            },

            removeFromDeck: function(card) {
                this.removeRemote(card);
                this.removeCard({ card });
            },
        }
    };
</script>
