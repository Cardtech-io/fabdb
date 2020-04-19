<template>
    <div>
        <div v-for="card in results" class="rounded-lg mb-8 mx-auto" style="max-width: 300px">
            <card-image :card="card" :clickHandler="addToDeck"></card-image>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import CardImage from '../CardDatabase/CardImage.vue';
    import ManagesDecks from './ManagesDecks';

    export default {
        props: ['keywords', 'results'],
        mixins: [ManagesDecks],
        components: {CardImage},

        methods: {
            ...mapActions('deck', ['addCard']),
            ...mapActions('messages', ['addMessage']),

            addToDeck: function(card) {
                this.addRemote(card).then(() => { this.addCard({ card }); });
            }
        }
    };
</script>
