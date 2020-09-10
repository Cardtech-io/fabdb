<template>
    <div class="w-full sm:w-3/4 flex mt-1 mx-auto rounded sm:rounded-lg overflow-hidden">
        <button class="flex-1 py-1" :class="active(i)" @click="setTotal(i)" v-for="(n, i) in available + 1">{{ i }}</button>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    import ManagesDecks from "./ManagesDecks";

    export default {
        props: {
            card: {
                type: Object,
                required: true
            }
        },

        mixins: [ManagesDecks],

        computed: {
            ...mapState('deck', ['deck', 'cards']),

            available() {
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
            },

            cardCount() {
                let cards = this.cards.filter(card => {
                    return card.identifier === this.card.identifier;
                });

                return cards[0] ? cards[0].total : 0;
            },
        },

        methods: {
            ...mapActions('deck', ['addCard', 'setCardTotal']),

            active(count) {
                return this.cardCount === count ? 'bg-black text-white' : 'bg-gray-300';
            },

            setTotal(total) {
                this.setCardTotal({ card: this.card, total });
                this.setRemote(this.card, total);
            }
        }
    }
</script>
