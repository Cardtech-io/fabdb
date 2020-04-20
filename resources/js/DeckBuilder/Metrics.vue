<template>
    <div class="py-4 pb-20 flex">
        <div class="w-1/4 mx-4">
            <card-image :card="hero"></card-image>
        </div>

        <div class="w-1/4 mx-4">
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

        <div class="w-1/4 mx-4">
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
                <stat :value="costCount(3)" text="Cost 3+" positio="bottom"></stat>
            </ol>
        </div>

        <div class="w-1/4 mx-4">
            <h3 class="font-serif uppercase text-2xl">Offensive</h3>
            <ol class="mt-2">
                <stat :value="offenseRating" text="Rating" position="top"></stat>
                <stat :value="averageAttack" text="Average attack"></stat>
                <stat :value="attacksPerHand" text="Attacks per hand"></stat>
            </ol>

            <h3 class="font-serif uppercase text-2xl mt-8">Defensive</h3>
            <ol class="mt-2">
                <stat :value="defenseRating" text="Rating" position="top"></stat>
                <stat :value="averageBlock" text="Average block"></stat>
            </ol>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import Stat from './Stat.vue';
    import Viewable from './Viewable';

    export default {
        mixins: [Viewable],
        components: { CardImage, Stat },

        computed: {
            ...mapState('deck', ['cards']),

            offenseRating: function() {
                return (((this.totalAttackActions + this.totalAttackReactions) / this.totalCards).toFixed(2) * 100) + '%';
            },

            defenseRating: function() {
                return ((this.blocks.length / this.totalCards).toFixed(2) * 100) + '%';
            }
        }
    };
</script>
