<template>
    <div class="pb-24">
        <div v-if="!cards.hero()">
            <hero-selector></hero-selector>
        </div>
        <div v-else>
            <div v-if="view === 'gallery'">
                <div v-if="user.subscription">
                    <div class="mt-4">
                        <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: 'hero' })" :class="{ 'mb-4': !sections.hero }">
                            <chevron :open="sections.hero" class="mr-2"></chevron>
                            Hero &amp; weapons
                        </h2>
                        <grouped-cards :cards="loadout" group-id="loadout" :action="mode == 'search' ? removeFromDeck : false" v-show="sections.hero">
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
                        <grouped-cards :cards="equipment" group-id="equipment" :action="mode === 'search' ? removeFromDeck : false" v-show="sections.equipment"></grouped-cards>
                    </div>
                    <div v-if="other.total()">
                        <h2 class="block flex cursor-pointer font-serif uppercase text-lg ml-4" @click="toggleSection({ section: 'other' })" :class="{ 'mb-4': !sections.other }">
                            <chevron :open="sections.other" class="mr-2"></chevron>
                            Other ({{ other.total() }})
                        </h2>
                        <grouped-cards :cards="other" group-id="other" :action="mode === 'search' ? removeFromDeck : false" v-show="sections.other"></grouped-cards>
                    </div>
                </div>
                <div v-else class="text-center my-20 mx-10">
                    Gallery mode is only available to FaB DB patrons.<br>
                    <br>
                    <router-link to="/support" class="link-alternate">Upgrade to access the gallery mode feature.</router-link>
                </div>
            </div>

            <div class="lg:flex m-4" v-else>
                <!-- Text-based deck view -->
                <div class="hidden lg:block md:mr-8" style="max-width: 350px">
                    <card-image :card="cards.hero()" :clickHandler="removeFromDeck" v-if="mode === 'search'"></card-image>
                    <card-image :card="cards.hero()" v-else></card-image>
                </div>
                <div class="sm:flex-1 sm:mr-4">
                    <card-item-section :card="cards.hero()" title="Hero"></card-item-section>
                    <card-item-section :cards="cards.weapons()" title="Weapons"></card-item-section>
                    <card-item-section :cards="cards.equipment()" title="Equipment"></card-item-section>
                    <card-item-section :cards="cards.items()" title="Items"></card-item-section>
                    <card-item-section :cards="cards.instants()" title="Instants"></card-item-section>
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
    import General from "./Metrics/General";
    import GroupedCards from './GroupedCards.vue';
    import HeroSelector from "./HeroSelector";
    import ManagesDecks from './ManagesDecks';
    import Totals from "./Metrics/Totals";
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],
        components: {CardImage, CardItemSection, Chevron, FormButton, General, GroupedCards, HeroSelector, Totals},

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
