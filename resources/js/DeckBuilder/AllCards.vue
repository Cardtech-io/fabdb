<template>
    <div>
        <div v-if="!hero">
            <hero-selector></hero-selector>
        </div>
        <div v-else>
            <div>
                <h2 class="font-serif uppercase text-lg ml-4">Hero &amp; weapons</h2>
                <grouped-cards :cards="loadout" group-id="loadout" :action="mode == 'search' ? removeFromDeck : false">
                    <div class="sm:w-1/3 sm:mr-4">
                        <h3 class="font-serif uppercase text-2xl">Totals</h3>
                    </div>
                </grouped-cards>
            </div>
            <div>
                <h2 class="font-serif uppercase text-lg ml-4">Equipment ({{ equipment.total() }})</h2>
                <grouped-cards :cards="equipment" group-id="equipment" :action="mode == 'search' ? removeFromDeck : false"></grouped-cards>
            </div>
            <div>
                <h2 class="font-serif uppercase text-lg ml-4">Other ({{ other.total() }})</h2>
                <grouped-cards :cards="other" group-id="other" :action="mode == 'search' ? removeFromDeck : false"></grouped-cards>
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

            loadout() {
                return new Cards([this.all.hero(), ...this.all.weapons()]);
            },

            equipment() {
                return new Cards(this.all.equipment());
            },

            other() {
                return new Cards(this.all.other());
            }
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
