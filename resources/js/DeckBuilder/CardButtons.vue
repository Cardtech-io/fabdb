<template>
    <div class="flex overflow-hidden">
        <button class="py-2 ml-1px w-1/2" :class="{ 'bg-gray-300 hover:bg-gray-200': total > 0, 'text-gray-400': total === 0 }" @click="removeCardFromDeck" :disabled="total === 0">-</button>
        <button class="py-2 ml-1px w-1/2" :class="{ 'bg-gray-300 hover:bg-gray-200': total < max, 'text-gray-400': total === max }" @click="addCardToDeck" :disabled="total === max">+</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";

    import ManagesDecks from "./ManagesDecks";

    export default {
        props: {
            card: {
                type: Object,
                required: true
            },
            total: {
                type: Number,
                required: true
            }
        },

        mixins: [ManagesDecks],

        computed: {
            ...mapState('deck', ['deck', 'cards', 'fullScreen', 'view']),
            ...mapGetters('session', ['user']),

            max() {
                if (this.card.keywords.includes('hero')) {
                    return 1;
                }

                if (this.card.keywords.includes('equipment')) {
                    return 1;
                }

                if (this.card.keywords.includes('weapon')) {
                    return this.card.keywords.includes('2h') ? 1 : 2;
                }

                if (this.card.text.toLowerCase().includes('legendary')) {
                    return 1;
                }

                return this.deck.format === 'blitz' ? 2 : 3;
            }
        },

        methods: {
            ...mapActions('deck', ['addCard', 'removeCard', 'setCardTotal']),
            ...mapActions('messages', ['addMessage']),

            addCardToDeck() {
                this.addRemote(this.card, () => {
                    this.addCard({ card: this.card });
                });
            },

            removeCardFromDeck() {
                this.removeRemote(this.card, () => {
                    this.removeCard({ card: this.card });
                })
            },

            setTotal(total) {
                this.setRemote(this.card, total, () => {
                    this.setCardTotal({ card: this.card, total });
                });
                this.$eventHub.$emit('card-selected');
            }
        }
    }
</script>
