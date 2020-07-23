<template>
    <div class="py-4 pb-20 sm:flex px-4">
        <div class="w-full hidden sm:block sm:w-1/4 sm:mr-8">
            <card-image :card="hero"></card-image>
        </div>

        <div class="sm:w-3/4">
            <ul class="block border-b border-gray-400 font-serif uppercase clearfix">
                <li class="float-left mr-4"><a href="" class="inline-block px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="{ 'bg-gray-400': tab == 'metrics' }" @click.prevent="tab = 'metrics'">Metrics</a></li>
                <li class="float-left mr-4"><a href="" class="inline-block px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="{ 'bg-gray-400': tab == 'settings' }" @click.prevent="tab = 'settings'">Settings</a></li>
                <li class="float-left mr-4"><a href="" class="inline-block px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="{ 'bg-gray-400': tab == 'export' }" @click.prevent="tab = 'export'">Export</a></li>
            </ul>

            <div class="sm:flex mt-8" v-if="tab == 'metrics'">
                <div class="sm:w-1/3 sm:mr-4">
                    <h3 class="font-serif uppercase text-2xl">Totals</h3>
                    <ol class="mt-2">
                        <stat :value="totalCards" text="Total" position="both"></stat>
                    </ol>

                    <ol class="mt-4">
                        <stat :value="totalActions" text="Total actions" position="top"></stat>
                        <stat :value="totalAttackActions" text="Attack actions"></stat>
                        <stat :value="totalAttackReactions" text="Attack reactions"></stat>
                        <stat :value="totalDefenseReactions" text="Defense reactions"></stat>
                        <stat :value="totalInstants" text="Instants" position="bottom"></stat>
                    </ol>
                </div>

                <div class="mt-4 sm:mt-0 sm:w-1/3 sm:mx-4">
                    <h3 class="font-serif uppercase text-2xl">General</h3>
                    <ol class="mt-2">
                        <stat :value="averageCost" text="Average cost" position="top"></stat>
                        <stat :value="averagePitch" text="Average pitch"></stat>
                        <stat :value="pitchCount(1)" text="Pitch 1"></stat>
                        <stat :value="pitchCount(2)" text="Pitch 2"></stat>
                        <stat :value="pitchCount(3)" text="Pitch 3"></stat>
                        <stat :value="costCount(0)" text="Cost 0"></stat>
                        <stat :value="costCount(1)" text="Cost 1"></stat>
                        <stat :value="costCount(2)" text="Cost 2"></stat>
                        <stat :value="costCount(3)" text="Cost 3+" position="bottom"></stat>
                    </ol>
                </div>

                <div class="mt-4 sm:mt-0 sm:w-1/3 sm:mx-4">
                    <h3 class="font-serif uppercase text-2xl">Offensive</h3>
                    <ol class="mt-2">
                        <stat :value="offenseRating" text="Rating" position="top"></stat>
                        <stat :value="averageAttack" text="Average attack"></stat>
                        <stat :value="attacksPerHand" text="Attacks per hand" position="bottom"></stat>
                    </ol>

                    <h3 class="font-serif uppercase text-2xl mt-4 sm:mt-8">Defensive</h3>
                    <ol class="mt-2">
                        <stat :value="defenseRating" text="Rating" position="top"></stat>
                        <stat :value="averageBlock" text="Average block" position="bottom"></stat>
                    </ol>
                </div>
            </div>

            <div v-if="tab == 'settings'" class="bg-white px-4">
                <deck-settings :deck="deck"></deck-settings>
            </div>

            <div class="mt-8" v-if="tab == 'export'">
                <a href="" class="block clearfix p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white" @click.prevent="copyShareURL">
                    <div class="float-left mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-20">
                            <path d="M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"/>
                        </svg>
                    </div>
                    <h2 class="font-serif uppercase text-xl">Link to deck</h2>
                    <p class="text-base">Copies your publicly-accessible deck URL to the clipboard.</p>
                </a>

                <tts-exporter :deck="deck"></tts-exporter>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import DeckSettings from './DeckSettings.vue';
    import ManagesDecks from './ManagesDecks';
    import Stat from './Stat.vue';
    import TtsExporter from './TtsExporter.vue';
    import Viewable from './Viewable';

    export default {
        mixins: [ManagesDecks, Viewable],
        components: { CardImage, DeckSettings, Stat, TtsExporter },

        data() {
            return {
                tab: 'metrics'
            }
        },

        computed: {
            ...mapState('deck', ['cards', 'deck']),

            offenseRating: function() {
                return (((this.totalAttackActions + this.totalAttackReactions) / this.totalCards).toFixed(2) * 100) + '%';
            },

            defenseRating: function() {
                return ((this.blocks.length / this.totalCards).toFixed(2) * 100) + '%';
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
        }
    };
</script>
