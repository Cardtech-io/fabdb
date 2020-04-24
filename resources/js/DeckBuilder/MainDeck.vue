<template>
    <div>
        <grouped-cards :cards="mainDeck" group-id="maindeck" :action="add" v-if="mainDeck.cards.length"></grouped-cards>
        <div v-else class="text-center my-20">
            There are no cards available yet in your main deck. Go to search, and then add cards to your deck from there.
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import axios from 'axios';
    import { mapActions, mapState } from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import GroupedCards from './GroupedCards.vue';
    import Redrawable from './Redrawable';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, Redrawable, Viewable],
        components: {GroupedCards},

        data() {
            return {
                mainDeck: new Cards([])
            }
        },

        mounted() {
            this.updateMainDeck();
        },

        computed: {
            ...mapState('deck', ['deck', 'filters', 'sideboard']),
        },

        methods: {
            ...mapActions('deck', ['addToSideboard']),

            add: function(card) {
                this.addToSideboard({ card });
                this.updateMainDeck();
                this.addRemote(card);
            },

            addRemote: function(card) {
                axios.post('/decks/' + this.deck.slug + '/sideboard', { card: card.identifier });
            },

            updateMainDeck: function() {
                let cards = new Cards(_.cloneDeep(this.collection));

                this.sideboard.forEach(card => {
                    for (let i = 0; i < card.total; i++) {
                        cards.remove(card);
                    }
                });

                let mainDeck = null;

                // If filters are applied, we don't want to go with the default ordering
                if (this.filters.length) {
                    mainDeck = (new Cards(cards.all())).applyFilters(this.filters);
                } else {
                    mainDeck = new Cards([cards.hero()]);

                    mainDeck = mainDeck.concat(cards.weapons());
                    mainDeck = mainDeck.concat(cards.equipment());
                    mainDeck = mainDeck.concat(cards.other());
                }

                this.mainDeck = mainDeck.hydrate();
                this.redraw('maindeck');
            }
        },

        watch: {
            sideboard: {
                handler: function() {
                    this.updateMainDeck();
                },
                deep: true
            },

            filters: function() {
                this.updateMainDeck();
            }
        }
    };
</script>
