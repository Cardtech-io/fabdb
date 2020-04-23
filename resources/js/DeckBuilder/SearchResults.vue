<template>
    <div class="mb-40 clearfix -mx-4">
        <div class="clearfix">
            <div v-for="card in results.data" class="w-1/2 float-left rounded-lg mb-8 px-4" style="max-width: 300px">
                <card-image :card="card" :clickHandler="addToDeck"></card-image>
            </div>
        </div>

        <paginator :results="results" @page-selected="updatePage" v-if="results.total"></paginator>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import CardImage from '../CardDatabase/CardImage.vue';
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';

    export default {
        props: ['results'],
        mixins: [ManagesDecks],
        components: {CardImage, Paginator},

        methods: {
            ...mapActions('deck', ['addCard']),
            ...mapActions('messages', ['addMessage']),
            ...mapActions('search', ['setPage']),

            addToDeck: function(card) {
                this.addRemote(card, response => { this.addCard({ card }); });
            },

            updatePage: function(page) {
                this.setPage({ page });
            }
        }
    };
</script>
