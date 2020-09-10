<template>
    <div class="mb-40 clearfix -mx-4">
        <div class="clearfix">
            <div v-for="card in results.data" class="w-full sm:w-1/2 float-left mb-4 sm:mb-8 px-2 sm:px-4" style="max-width: 350px" :class="classes">
                <div class="overflow-hidden">
                    <card-image :card="card" :width="300" :clickHandler="addToDeck"></card-image>
                    <card-buttons :card="card"></card-buttons>
                </div>
            </div>
        </div>

        <paginator :results="results" @page-selected="updatePage" v-if="results.total"></paginator>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import CardButtons from "./CardButtons";
    import CardImage from '../CardDatabase/CardImage.vue';
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';

    export default {
        props: ['results'],
        mixins: [ManagesDecks],
        components: {CardButtons, CardImage, Paginator},

        computed: {
            ...mapState('deck', ['cards', 'fullScreen']),

            classes() {
                return {
                    'lg:w-1/3': this.fullScreen
                }
            }
        },

        methods: {
            ...mapActions('deck', ['addCard', 'setCardTotal']),
            ...mapActions('messages', ['addMessage']),
            ...mapActions('cardSearch', ['setPage']),

            addToDeck: function(card) {
                this.addRemote(card, response => { this.addCard({ card }); });
            },

            updatePage: function(page) {
                this.setPage({ page });
            }
        }
    };
</script>
