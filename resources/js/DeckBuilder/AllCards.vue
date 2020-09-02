<template>
    <div>
        <div v-if="!hero">
            <hero-selector></hero-selector>
        </div>
        <div v-else>
            <grouped-cards :cards="all" group-id="all" :action="mode == 'search' ? removeFromDeck : false" v-if="all.cards.length"></grouped-cards>
            <div v-else class="text-center my-20 px-4">
                There are no cards in your deck that match the selected filters.
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import FormButton from '../Components/Form/Button.vue';
    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import HeroSelector from "./HeroSelector";
    import ManagesDecks from './ManagesDecks';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],
        components: {FormButton, GroupedCards, HeroSelector},

        computed: {
            ...mapState('deck', ['cards', 'filters', 'grouping', 'mode']),

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
            }
        }
    };
</script>
