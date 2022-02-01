<template>
    <div class="py-4 pb-20 sm:flex px-4">
        <div class="w-full hidden lg:block lg:w-1/4 lg:mr-8">
            <card-image :card="hero"></card-image>
        </div>

        <div class="w-full lg:w-3/4">
            <ul class="block border-b border-gray-400 font-serif uppercase flow-root text-sm sm:text-base">
                <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'settings' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'settings'">Settings</a></li>
                <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'metrics' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'metrics'">Metrics</a></li>
                <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'rulings' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'rulings'">Rulings</a></li>
                <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'export' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'export'">Export</a></li>
            </ul>

            <div class="bg-gray-200 border border-t-0 border-gray-400 px-4">
                <div class="sm:flex pt-8" v-if="tab == 'metrics'">
                    <div class="sm:w-1/3 sm:mr-4">
                        <h3 class="font-serif uppercase text-2xl">Totals</h3>
                        <totals/>
                    </div>

                    <div class="mt-4 sm:mt-0 sm:w-1/3 sm:mx-4">
                        <h3 class="font-serif uppercase text-2xl">General</h3>
                        <general/>
                    </div>

                    <div class="mt-4 sm:mt-0 sm:w-1/3 sm:mx-4">
                        <h3 class="font-serif uppercase text-2xl">Offensive</h3>
                        <ol class="mt-2 text-base">
                            <stat :value="offenseRating" text="Rating" position="top"></stat>
                            <stat :value="averageAttack" text="Average attack"></stat>
                            <stat :value="attacksPerHand" text="Attacks per hand" position="bottom"></stat>
                        </ol>

                        <h3 class="font-serif uppercase text-2xl mt-4 sm:mt-8">Defensive</h3>
                        <ol class="mt-2 text-base">
                            <stat :value="defenseRating" text="Rating" position="top"></stat>
                            <stat :value="averageBlock" text="Average block" position="bottom"></stat>
                        </ol>
                    </div>
                </div>

                <div class="sm:flex pt-8" v-if="tab == 'rulings'">
                    <rulings :rulings="rulings"/>
                </div>

                <div v-if="tab == 'settings'">
                    <deck-settings :deck="deck"/>
                </div>

                <div class="py-8" v-if="tab === 'export'">
                    <tts-exporter :deck="deck"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import DeckSettings from './DeckSettings.vue';
    import ManagesDecks from './ManagesDecks';
    import Rulings from '../CardDatabase/Rulings';
    import Stat from './Metrics/Stat.vue';
    import Totals from "./Metrics/Totals";
    import General from "./Metrics/General";
    import TtsExporter from './TtsExporter.vue';
    import Viewable from './Viewable';
    import _ from "lodash";

    export default {
        mixins: [ManagesDecks, Viewable],
        components: {
            CardImage,
            DeckSettings,
            General,
            Rulings,
            Stat,
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
                    return _.flatten(card.rulings.map(ruling => { return ruling.description; }));
                }));

                return _.uniq(rulings);
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
        }
    };
</script>
