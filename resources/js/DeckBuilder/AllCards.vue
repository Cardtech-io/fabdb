<template>
    <grouped-cards :cards="all" :action="removeFromDeck"></grouped-cards>
</template>

<script>
    import { mapActions } from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import ManagesDecks from './ManagesDecks';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, ManagesDecks, Viewable],
        components: {GroupedCards},

        computed: {
            all: function() {
                let collection = new Cards(this.collection);
                let cards = new Cards([collection.hero()]);

                let reducer = (carry, card) => {
                    for (let i = 0; i < card.total; i++) {
                        carry.push(card);
                    }

                    return carry;
                };

                cards = cards.concat(collection.weapons().reduce(reducer, []));
                cards = cards.concat(collection.equipment().reduce(reducer, []));
                cards = cards.concat(collection.other().reduce(reducer, []));
                cards = cards.group('name');

                return cards;
            },
        },

        methods: {
            ...mapActions('deck', ['removeCard']),

            removeFromDeck: function(card) {
                //this.removeRemote(card);
                this.removeCard({ card });
            },
        }
    };
</script>