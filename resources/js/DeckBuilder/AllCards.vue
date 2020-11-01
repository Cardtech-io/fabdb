<template>
    <div class="pb-24 text-base">
        <div v-if="!cards.hero()">
            <hero-selector></hero-selector>
        </div>
        <div v-else>
            <div v-if="view === 'gallery'">
                <div v-if="user.subscription" class="flex m-4">
                    <div class="mr-4" style="max-width: 250px">
                        <card-image :card="cards.hero()" class="mb-4"></card-image>
                        <div>
                            <deck-curves :cards="other.all()" stat="cost" style="height: 160px" class="mb-4"></deck-curves>
                            <deck-curves :cards="other.all()" stat="resource" style="height: 160px"></deck-curves>
                        </div>
                        <div>
                            <div class="mx-2 my-4">
                                <h3 class="font-serif uppercase text-lg">Totals</h3>
                                <totals class="mt-2"></totals>
                            </div>
                        </div>
                        <div>
                            <div class="mx-2">
                                <h3 class="font-serif uppercase text-lg">General</h3>
                                <general class="mt-2"></general>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div v-if="weapons.total()">
                            <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: 'loadout' })" :class="{ 'mb-4': !sections.loadout }">
                                <chevron :open="sections.loadout" class="mr-2"></chevron>
                                Loadout ({{ loadout.total() }})
                            </h2>
                            <grouped-cards :cards="loadout" group-id="loadout" :action="mode === 'search' ? removeFromDeck : false" v-show="sections.loadout"></grouped-cards>
                        </div>
                        <div v-if="other.total()">
                            <h2 class="block flex cursor-pointer font-serif uppercase text-lg ml-4" @click="toggleSection({ section: 'other' })" :class="{ 'mb-4': !sections.other }">
                                <chevron :open="sections.other" class="mr-2"></chevron>
                                Other ({{ other.total() }})
                            </h2>
                            <grouped-cards :cards="other" group-id="other" :action="mode === 'search' ? removeFromDeck : false" v-show="sections.other"></grouped-cards>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center my-20 mx-10">
                    Gallery mode is only available to FaB DB patrons.<br>
                    <br>
                    <router-link to="/support" class="link-alternate">Upgrade to access the gallery mode feature.</router-link>
                </div>
            </div>

            <div v-else class="lg:flex m-4">
                <!-- Text-based deck view -->
                <div class="hidden lg:block md:mr-8" style="max-width: 250px">
                    <card-image :card="cards.hero()" class="mb-4"></card-image>
                    <div>
                        <deck-curves :cards="other.all()" stat="cost" style="height: 160px" class="mb-4"></deck-curves>
                        <deck-curves :cards="other.all()" stat="resource" style="height: 160px"></deck-curves>
                    </div>
                </div>
                <div class="sm:flex-1 sm:mr-4">
                    <card-item-section :card="cards.hero()" title="Hero"></card-item-section>
                    <card-item-section :cards="cards.weapons()" title="Weapons"></card-item-section>
                    <card-item-section :cards="cards.equipment()" title="Equipment"></card-item-section>
                    <card-item-section :cards="cards.instants()" title="Instants"></card-item-section>
                    <card-item-section :cards="cards.miscellaneous()" title="Miscellaneous"></card-item-section>
                </div>
                <div class="sm:flex-1">
                    <card-item-section :cards="cards.attackActions()" title="Attack actions"></card-item-section>
                    <card-item-section :cards="cards.attackReactions()" title="Attack reactions"></card-item-section>
                    <card-item-section :cards="cards.nonAttackActions()" title="'Non-attack' actions"></card-item-section>
                    <card-item-section :cards="cards.defenseReactions()" title="Defense reactions"></card-item-section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    import FormButton from '../Components/Form/Button.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage';
    import CardItemSection from "./CardItemSection";
    import Cards from './Cards';
    import Chevron from "./Buttons/Chevron";
    import DeckCurves from "./DeckCurves";
    import General from "./Metrics/General";
    import GroupedCards from './GroupedCards.vue';
    import HeroSelector from "./HeroSelector";
    import ManagesDecks from './ManagesDecks';
    import Totals from "./Metrics/Totals";
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],

        components: {
            CardImage,
            CardItemSection,
            Chevron,
            DeckCurves,
            FormButton,
            General,
            GroupedCards,
            HeroSelector,
            Totals
        },

        computed: {
            ...mapState('deck', ['filters', 'grouping', 'mode', 'sections', 'view', 'zoom']),
            ...mapGetters('session', ['user']),

            all() {
                if (!this.collection.length) {
                    return new Cards([]);
                }

                let reducer = (carry, card) => {
                    for (let i = 0; i < card.total; i++) {
                        carry.push(card);
                    }

                    return carry;
                };

                let collection = new Cards(this.collection);
                let cards = collection.hero() ? new Cards([collection.hero()]) : new Cards([]);

                cards = cards.concat(collection.weapons());
                cards = cards.concat(collection.equipment());
                cards = cards.concat(collection.other());

                return cards.hydrate();
            },

            cards() {
                return new Cards(this.collection);
            },

            loadout() {
                return new Cards(this.all.weapons().concat(this.all.equipment()));
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
