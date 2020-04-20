<template>
    <div>
        <grouped-cards :cards="sideboard" group-id="sideboard" :action="remove" width="w-1/2"></grouped-cards>
        <div v-if="!sideboard.cards.length" class="text-center my-20 mx-10">
            You have not yet added<br>any cards<br>to your sideboard.
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import Viewable from './Viewable';
    
    export default {
        props: ['collection'],
        mixins: [Cardable, Viewable],
        components: {GroupedCards},

        computed: {
            sideboard: function() {
                return (new Cards(this.collection)).hydrate().group('name');
            }
        },

        methods: {
            ...mapActions('deck', ['removeFromSideBoard']),

            remove: function(card) {
                this.removeFromSideBoard({ card });
            },
        }
    };
</script>
