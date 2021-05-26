<template>
    <div class="pb-24 text-base">
        <div v-if="!cards.hero()">
            <hero-selector @hero-selected="addToDeck" :deck="deck"></hero-selector>
        </div>
        <div v-else>
            <div v-if="view === 'gallery'">
                <div v-if="user.subscription" class="md:flex m-4">
                    <div class="md:mr-4 md:w-auto md:max-w-250 clearfix">
                        <div class="w-1/2 md:w-auto pr-4 md:p-0 float-left md:float-none">
                            <card-image :card="cards.hero()" class="mb-4"></card-image>
                        </div>
                        <div class="w-1/2 md:w-auto float-left md:float-none">
                            <div class="bg-white rounded-lg pl-2 pr-4 pt-4 pb-2">
                                <deck-curves :cards="other" stat="cost" class="mb-4 h-140 sm:h-160"></deck-curves>
                            </div>
                            <div class="bg-white rounded-lg pl-2 pr-4 pt-4 pb-2 mt-4">
                                <deck-curves :cards="other" stat="resource" class="mb-4 h-140 sm:h-160"></deck-curves>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="mx-2 my-4">
                                <h3 class="font-serif uppercase text-lg">Totals</h3>
                                <totals class="mt-2"></totals>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="mx-2">
                                <h3 class="font-serif uppercase text-lg">General</h3>
                                <general class="mt-2"></general>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div v-if="loadout.total()" class="mt-4 md:m-0">
                            <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: 'loadout' })" :class="{ 'mb-4': !sections.loadout }">
                                <chevron :open="sections.loadout" class="mr-2"></chevron>
                                Loadout ({{loadout.count()}})
                            </h2>
                            <grouped-cards :cards="loadout" group-id="loadout" :action="mode === 'search' ? removeFromDeck : false" v-show="sections.loadout"></grouped-cards>
                        </div>
                        <div v-if="other.total()">
                            <h2 class="block flex cursor-pointer font-serif uppercase text-lg ml-4" @click="toggleSection({ section: 'other' })" :class="{ 'mb-4': !sections.other }">
                                <chevron :open="sections.other" class="mr-2"></chevron>
                                Other ({{ other.count() }})
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
                <div class="hidden lg:block md:mr-8 max-w-250">
                    <card-image :card="cards.hero()" class="mb-4"></card-image>
                    <div>
                        <deck-curves :cards="other" stat="cost" class="h-160 mb-4"></deck-curves>
                        <deck-curves :cards="other" stat="resource"class="h-160"></deck-curves>
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
    import HeroSelector from "../Components/HeroSelector";
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
            ...mapState('deck', ['deck', 'filters', 'grouping', 'mode', 'sections', 'view', 'zoom']),
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
                 return this.all.weapons().concat(this.all.equipment());
            },

            other() {
                return this.all.other();
            }
        },

        methods: {
            ...mapActions('deck', ['addCard', 'setMode', 'removeCard', 'toggleSection']),

            addToDeck(card) {
                this.addRemote(card, response => {
                    this.addCard({card});
                    this.setMode({mode: 'search'});
                    this.$eventHub.$emit('hero-selected', card, this.type(card));
                });
            },

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
