<template>
    <div class="pb-24">
        <div v-if="!hero">
            <hero-selector></hero-selector>
        </div>
        <div v-else>
            <div>
                <h2 class="font-serif uppercase text-lg ml-4">Hero &amp; weapons</h2>
                <grouped-cards :cards="loadout" group-id="loadout" :action="mode == 'search' ? removeFromDeck : false">
                    <template v-slot:default="props">
                        <div style="margin-top: -28px" class="hidden sm:block" :class="props.classes" v-masonry-tile>
                            <div class="mx-2 mb-12">
                                <h3 class="font-serif uppercase text-lg">Totals</h3>
                                <totals class="mt-4"></totals>
                            </div>
                        </div>
                        <div style="margin-top: -28px" class="hidden sm:block" :class="props.classes" v-masonry-tile>
                            <div class="mx-2">
                                <h3 class="font-serif uppercase text-lg">General</h3>
                                <general class="mt-4"></general>
                            </div>
                        </div>
                    </template>
                </grouped-cards>
            </div>
            <div v-if="equipment.total()">
                <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: 'equipment' })" :class="{ 'mb-4': !sections.equipment }">
                    <chevron :open="sections.equipment" class="mr-2"></chevron>
                    Equipment ({{ equipment.total() }})
                </h2>
                <grouped-cards :cards="equipment" group-id="equipment" :action="mode == 'search' ? removeFromDeck : false" v-show="sections.equipment"></grouped-cards>
            </div>
            <div v-if="other.total()">
                <h2 class="block flex cursor-pointer font-serif uppercase text-lg ml-4" @click="toggleSection({ section: 'other' })" :class="{ 'mb-4': !sections.other }">
                    <chevron :open="sections.other" class="mr-2"></chevron>
                    Other ({{ other.total() }})
                </h2>
                <grouped-cards :cards="other" group-id="other" :action="mode == 'search' ? removeFromDeck : false" v-show="sections.other"></grouped-cards>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import FormButton from '../Components/Form/Button.vue';
    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import Chevron from "./Buttons/Chevron";
    import General from "./Metrics/General";
    import GroupedCards from './GroupedCards.vue';
    import HeroSelector from "./HeroSelector";
    import ManagesDecks from './ManagesDecks';
    import Totals from "./Metrics/Totals";
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],
        components: {Chevron, FormButton, General, GroupedCards, HeroSelector, Totals},

        computed: {
            ...mapState('deck', ['cards', 'filters', 'grouping', 'mode', 'sections', 'zoom']),

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
            ...mapActions('deck', ['setMode', 'removeCard', 'toggleSection']),

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
