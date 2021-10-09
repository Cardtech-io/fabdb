<template>
    <div class="mb-40">
        <grouped-cards :cards="sideboard" group-id="sideboard" :action="remove" :width="fullScreen ? 'sm:w-1/3' : 'sm:w-1/2'"></grouped-cards>
        <div v-if="!sideboard.cards.length" class="text-center my-20 mx-10">
            You have not yet added<br>any cards<br>to your sideboard.
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapActions, mapGetters, mapState} from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, Viewable],
        components: {GroupedCards},

        computed: {
            ...mapState('deck', ['deck', 'fullScreen']),
            ...mapGetters('session', ['user']),

            sideboard: function() {
                return (new Cards(this.collection)).hydrate();
            }
        },

        methods: {
            ...mapActions('deck', ['removeFromSideBoard']),

            remove(card) {
                console.log(card);
                this.removeFromSideBoard({ card });
                this.removeRemote(card);
            },

            removeRemote(card) {
                axios.delete('/decks/' + this.deck.slug + '/sideboard/' + card.identifier);
            }
        }
    };
</script>
