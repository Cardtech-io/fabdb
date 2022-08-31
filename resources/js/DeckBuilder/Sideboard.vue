<template>
    <div class="mb-40">
        <div class="hidden md:block">
            <grouped-cards :cards="sideboard" group-id="sideboard" :action="remove" :width="fullScreen ? 'md:w-1/3' : 'md:w-1/2'"></grouped-cards>
            <div v-if="!sideboard.cards.length" class="text-center my-20 mx-10">
                You have not yet added<br>any cards<br>to your sideboard.
            </div>
        </div>
        <!-- Mobile view -->
        <div class="md:hidden">
            <table class="w-full border-collapse border border-gray-200">
                <thead>
                    <tr class="text-white">
                        <th class="w-1/5 sm:w-1/10 p-2 bg-gray-800">Deck</th>
                        <th class="p-2 bg-gray-800 text-left">Card</th>
                        <th class="w-1/5 sm:w-1/10 p-2 bg-gray-800">Sideboard</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="card in cards">
                        <td>
                            <button class="w-full flex items-center justify-center bg-white hover:bg-primary hover:text-white p-2" @click="add(card)">
                                <span>
                                    {{card.total - sideboardCardTotal(card)}}
                                </span>
                                <icon :size="5">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </icon>
                            </button>
                        </td>
                        <td>
                            <div class="flex bg-white items-center p-2">
                                <colour :resource="card.stats.resource" class="mr-2"/>
                                <span @click="setHover(card)" class="cursor-help whitespace-nowrap overflow-hidden">{{ card.name }}</span>
                            </div>
                        </td>
                        <td>
                            <button class="w-full flex items-center justify-center bg-white hover:bg-primary hover:text-white p-2" @click="remove(card)">
                                <icon :size="5">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </icon>
                                <span>
                                    {{sideboardCardTotal(card)}}
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapActions, mapGetters, mapState} from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import Cards from './Cards';
    import Colour from "./Colour";
    import GroupedCards from './GroupedCards.vue';
    import Viewable from './Viewable';

    export default {
        props: ['collection'],
        mixins: [Cardable, Viewable],
        components: {Colour, GroupedCards},

        computed: {
            ...mapState('deck', ['cards', 'deck', 'fullScreen']),
            ...mapGetters('session', ['user']),

            sideboard() {
                return (new Cards(this.collection)).hydrate();
            }
        },

        methods: {
            ...mapActions('deck', ['addToSideboard', 'removeFromSideBoard']),

            add(card) {
                if (card.total - this.sideboardCardTotal(card) <= 0) return;

                this.addToSideboard({ card });
                this.addRemote(card);
            },

            addRemote(card) {
                axios.post('/decks/' + this.deck.slug + '/sideboard', { card: card.identifier });
            },

            remove(card) {
                this.removeFromSideBoard({ card });
                this.removeRemote(card);
            },

            removeRemote(card) {
                axios.delete('/decks/' + this.deck.slug + '/sideboard/' + card.identifier);
            },

            setHover(card) {
                this.$eventHub.$emit('hover-card', card);
            },

            sideboardCardTotal(card) {
                let sideboardCard = this.collection.filter(sideboardCard => sideboardCard.identifier === card.identifier)[0];

                return sideboardCard ? sideboardCard.total : 0;
            }
        }
    };
</script>
