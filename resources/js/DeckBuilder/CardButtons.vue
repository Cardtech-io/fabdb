<template>
    <div class="flex overflow-hidden items-stretch" :class="$parent.layout === 'horizontal' ? 'space-x-px' : 'flex-col flex-col-reverse'">
        <button class="bg-white dark:bg-gray-800" :class="{
                'hover:bg-secondary hover:text-white dark:hover:bg-gray-600': total > 0,
                'bg-gray-100 text-gray-300 dark:bg-gray-800 dark:text-gray-600': total === 0,
                'w-full h-1/2': $parent.layout === 'vertical',
                'w-1/2': $parent.layout === 'horizontal'
            }"
            @click="removeCardFromDeck" :disabled="total === 0">
            <icon :size="4" class="mx-auto">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
            </icon>
        </button>
        <button class="bg-white dark:bg-gray-800" :class="{
                'hover:bg-secondary hover:text-white dark:hover:bg-gray-600': total < maxAvailable,
                'bg-gray-100 text-gray-300 dark:bg-gray-800 dark:text-gray-600': total >= maxAvailable,
                'w-full h-1/2': $parent.layout === 'vertical',
                'w-1/2': $parent.layout === 'horizontal'
            }" @click="addCardToDeck" :disabled="total >= maxAvailable">
            <icon :size="4" class="mx-auto">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </icon>
        </button>
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
                this.removeCard({ card: this.card });

                this.removeRemote(this.card, () => {
                    this.$eventHub.$emit('card-selected');
                })
            }
        }
    }
</script>
