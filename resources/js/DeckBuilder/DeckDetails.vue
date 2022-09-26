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
                    <metrics-performance/>
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
    import MetricsPerformance from "../Decks/Metrics/MetricsPerformance.vue";
    import TabItem from "../Components/TabItem.vue";
    import Tabs from "../Components/Tabs.vue";
    import TtsExporter from './TtsExporter.vue';
    import Viewable from './Viewable.js';
    import _ from "lodash";

    export default {
        mixins: [ManagesDecks, Viewable],

        components: {
            MetricsPerformance,
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

            offenseRating() {
                return (((this.totalAttackActions + this.totalAttackReactions) / this.totalCards).toFixed(2) * 100).toFixed(0) + '%';
            },

            defenseRating() {
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
