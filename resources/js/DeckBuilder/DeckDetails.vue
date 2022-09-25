<template>
    <div class="py-4 pb-20 sm:flex px-4">
        <div class="w-full hidden lg:block lg:w-1/4 lg:mr-8">
            <card-image :card="hero"/>
        </div>

        <div class="w-full lg:w-3/4">
            <tabs>
                <tab-item name="Settings">
                    <deck-settings :deck="deck"/>
                </tab-item>
                <tab-item name="Metrics" class="md:flex md:space-x-4">
                    <div class="md:w-1/3">
                        <h3 class="font-serif uppercase text-2xl">Totals</h3>
                        <totals/>
                    </div>

                    <div class="mt-4 md:mt-0 md:w-1/3 md:mx-4">
                        <h3 class="font-serif uppercase text-2xl">General</h3>
                        <general/>
                    </div>

                    <div class="mt-4 md:mt-0 md:w-1/3 md:mx-4">
                        <h3 class="font-serif uppercase text-2xl">Offensive</h3>
                        <ol class="mt-2 text-base">
                            <stat :value="offenseRating" text="Rating" position="top"></stat>
                            <stat :value="averageAttack" text="Average attack"></stat>
                            <stat :value="attacksPerHand" text="Attacks per hand" position="bottom"></stat>
                        </ol>

                        <h3 class="font-serif uppercase text-2xl mt-4 md:mt-8">Defensive</h3>
                        <ol class="mt-2 text-base">
                            <stat :value="defenseRating" text="Rating" position="top"></stat>
                            <stat :value="averageBlock" text="Average block" position="bottom"></stat>
                        </ol>
                    </div>
                </tab-item>
                <tab-item name="Rulings">
                    <rulings :rulings="rulings"/>
                </tab-item>
                <tab-item name="Export">
                    <tts-exporter :deck="deck"/>
                </tab-item>
            </tabs>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import DeckSettings from './DeckSettings.vue';
    import ManagesDecks from './ManagesDecks.js';
    import Rulings from '../CardDatabase/Rulings.vue';
    import Stat from './Metrics/Stat.vue';
    import Totals from "./Metrics/Totals.vue";
    import General from "./Metrics/General.vue";
    import TtsExporter from './TtsExporter.vue';
    import Viewable from './Viewable.js';
    import _ from "lodash";
    import TabItem from "../Components/TabItem.vue";
    import Tabs from "../Components/Tabs.vue";

    export default {
        mixins: [ManagesDecks, Viewable],
        components: {
            CardImage,
            DeckSettings,
            General,
            Rulings,
            Stat,
            TabItem,
            Tabs,
            Totals,
            TtsExporter
        },

        data() {
            return {
                tab: 'settings'
            }
        },

        computed: {
            ...mapState('deck', ['cards', 'deck']),

            offenseRating: function() {
                return (((this.totalAttackActions + this.totalAttackReactions) / this.totalCards).toFixed(2) * 100).toFixed(0) + '%';
            },

            defenseRating: function() {
                return ((this.blocks.length / this.totalCards).toFixed(2) * 100).toFixed(0) + '%';
            },

            rulings() {
                let rulings = _.flatten(this.cards.map(card => {
                    return _.flatten(card.rulings && card.rulings.length ? card.rulings.map(ruling => { return ruling.description; }) : []);
                }));

                return _.uniq(rulings);
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
        }
    };
</script>
