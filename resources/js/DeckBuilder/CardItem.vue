<template>
    <div class="w-full flex items-center mb-1px">
        <card-buttons :card="card" :total="total" class="w-1/5"></card-buttons>
        <div class="w-3/5 pl-4 p-2 ml-1px bg-gray-300 cursor-default">
            <div class="whitespace-no-wrap overflow-hidden">
                <span @mouseover="setHover(card)" @mouseleave="setHover(false)" class="cursor-help">{{ card.name }}</span>
                <colour :resource="card.stats.resource" class="ml-2"></colour>
            </div>
        </div>
        <div class="w-1/5 text-center bg-gray-300 py-2 ml-1px">
            {{ total }}
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import CardButtons from "./CardButtons";
    import Colour from "./Colour";

    export default {
        props: ['action', 'card'],
        components: {CardButtons, Colour},

        computed: {
            ...mapState('deck', ['cards']),

            total() {
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
