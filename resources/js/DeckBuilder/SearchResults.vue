<template>
    <div class="mb-40 clearfix -mx-4">
        <div v-for="card in results.data" class="w-1/2 float-left rounded-lg mb-8 px-4" style="max-width: 300px">
            <card-image :card="card" :clickHandler="addToDeck"></card-image>
        </div>

        <paginator :results="results"></paginator>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import CardImage from '../CardDatabase/CardImage.vue';
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';

    export default {
        props: ['keywords', 'results'],
        mixins: [ManagesDecks],
        components: {CardImage, Paginator},

        methods: {
            ...mapActions('deck', ['addCard']),
            ...mapActions('messages', ['addMessage']),

            addToDeck: function(card) {
                this.addRemote(card).then(() => { this.addCard({ card }); });
            }
        }
    };
</script>
