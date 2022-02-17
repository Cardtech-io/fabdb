<template>
    <div class="w-full flex items-stretch mb-1px rounded-lg overflow-hidden" :class="{'opacity-50 text-black': applySoftLimit && (!card.ownedTotal || card.ownedTotal < total) && deck.limitToCollection === 2}">
        <card-buttons :card="card" :total="total" :class="{
            'block sm:hidden': mode === 'all',
            'block': mode !== 'all',
            'w-1/10': layout === 'vertical',
            'w-1/5': layout === 'horizontal'
        }"/>
        <div class="pl-4 p-2 ml-1px bg-white cursor-default" :class="{
            'w-3/5 sm:w-4/5': mode === 'all',
            'w-3/5': mode !== 'all',
            'w-7/10': layout === 'vertical',
            'w-3/5': layout === 'horizontal'
        }">
            <div class="flex items-center">
                <colour :resource="card.stats.resource" class="mr-2"/>
                <span v-preview-card="{stack: [card], index: 0}" class="cursor-help help-underline whitespace-nowrap overflow-hidden">{{ card.name }}</span>
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
        props: {
            card: {
                type: Object,
                required: true
            },
            applySoftLimit: {
                type: Boolean,
                required: false,
                default: true
            },
            layout: {
                type: String,
                required: false,
                default: 'horizontal'
            }
        },

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
