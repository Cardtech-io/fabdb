<template>
    <div class="flex overflow-hidden">
        <button class="py-2 ml-1px w-1/2 bg-gray-300" :class="{ 'hover:bg-white': total > 0, 'text-gray-400': total === 0 }" @click="removeCardFromDeck" :disabled="total === 0">-</button>
        <button class="py-2 ml-1px w-1/2 bg-gray-300" :class="{ 'hover:bg-white': total < maxAvailable, 'text-gray-400': total >= maxAvailable }" @click="addCardToDeck" :disabled="total >= maxAvailable">+</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";

    import ManagesDecks from "./ManagesDecks";
    import Cardable from "../CardDatabase/Cardable";

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

        mixins: [Cardable, ManagesDecks],

        computed: {
            ...mapState('deck', ['deck', 'cards', 'fullScreen', 'view']),
            ...mapGetters('session', ['user']),
        },

        methods: {
            ...mapActions('deck', ['addCard', 'removeCard', 'setCardTotal']),
            ...mapActions('messages', ['addMessage']),

            addCardToDeck() {
                this.addRemote(this.card, () => {
                    this.addCard({ card: this.card });
                    this.$eventHub.$emit('card-selected');
                });
            },

            removeCardFromDeck() {
                this.removeRemote(this.card, () => {
                    this.removeCard({ card: this.card });
                    this.$eventHub.$emit('card-selected');
                })
            }
        }
    }
</script>
