<template>
    <div class="w-full flex items-stretch mb-1px rounded-lg overflow-hidden" :class="{'opacity-50 text-black': applySoftLimit && (!card.totalOwned || card.totalOwned < total) && deck.limitToCollection === 2}">
        <card-buttons :card="card" :total="total" class="w-1/5" v-if="mode !== 'all'"></card-buttons>
        <div class="w-3/5 pl-4 p-2 ml-1px bg-white cursor-default" :class="mode !== 'all' ? 'w-3/5' : 'w-4/5'">
            <div class="flex items-center">
                <colour :resource="card.stats.resource" class="mr-2"></colour>
                <span @mouseover="setHover(card)" @mouseleave="setHover(false)" @click="setHover(card)" class="cursor-help whitespace-nowrap overflow-hidden">{{ card.name }}</span>
            </div>
        </div>
        <div class="w-1/5 text-center bg-white py-2 ml-1px">
            {{ total }}
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import CardButtons from "./CardButtons";
    import Colour from "./Colour";

    export default {
        props: ['action', 'card', 'applySoftLimit'],
        components: {CardButtons, Colour},

        computed: {
            ...mapState('deck', ['cards', 'deck', 'mode']),

            total() {
                if (this.card.total !== undefined) {
                    return this.card.total;
                }

                let cards = this.cards.filter(card => {
                    return card.identifier === this.card.identifier;
                });

                return cards[0] ? cards[0].total : 0;
            }
        },

        methods: {
            setHover(card) {
                this.$eventHub.$emit('hover-card', card);
            }
        }
    }
</script>
