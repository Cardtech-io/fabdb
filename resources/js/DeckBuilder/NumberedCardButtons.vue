<template>
    <div class="flex overflow-hidden">
        <button class="py-2 ml-1px" :class="classes(i)" @click="setTotal(i)" v-for="(n, i) in maxAvailable + 1">{{ i }}</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";

    import Cardable from "../CardDatabase/Cardable";
    import ManagesDecks from "./ManagesDecks";

    export default {
        props: {
            card: {
                type: Object,
                required: true
            }
        },

        mixins: [Cardable, ManagesDecks],

        computed: {
            ...mapState('deck', ['deck', 'cards', 'fullScreen', 'view']),
            ...mapGetters('session', ['user']),

            background() {
                return 'bg-gray-300 hover:bg-gray-200';
            },

            cardCount() {
                let cards = this.cards.filter(card => {
                    return card.identifier === this.card.identifier;
                });

                return cards[0] ? cards[0].total : 0;
            }
        },

        methods: {
            ...mapActions('deck', ['setCardTotal']),
            ...mapActions('messages', ['addMessage']),

            active(count) {
                if (this.cardCount === count) {
                    return 'bg-gray-400 text-black';
                }

                return this.background;
            },

            classes(count) {
                let buttons = this.maxAvailable + 1;

                return [
                    this.active(count),
                    'w-1/' + buttons
                ];
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
