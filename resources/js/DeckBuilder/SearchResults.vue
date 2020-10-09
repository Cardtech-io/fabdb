<template>
    <div class="mb-40 clearfix">
        <div class="clearfix">
            <div class="text-base pr-0 bg-gray-100">
                <div class="w-full flex -mt-1px">
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'all'" :class="cardType === 'all' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        All
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'weapon'" :class="cardType === 'weapon' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Weapons
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'equipment'" :class="cardType === 'equipment' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Equipment
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'instant'" :class="cardType === 'instant' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Instants
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'item'" :class="cardType === 'item' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Items
                    </button>
                </div>
                <div class="w-full flex">
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'non-attack action'" :class="cardType === 'non-attack action' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        'Non-attack'<br/>actions
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'attack action'" :class="cardType === 'attack action' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Attack<br/>actions
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'attack reaction'" :class="cardType === 'attack reaction' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Attack<br/>reactions
                    </button>
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = 'defense reaction'" :class="cardType === 'defense reaction' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
                        Defense<br/>reactions
                    </button>
                </div>
            </div>

            <div>
                <div v-for="card in results.data">
                    <div class="w-full xl:w-1/2 float-left mt-4 overflow-hidden px-2 sm:px-4" style="max-width: 350px" :class="classes" v-if="galleryView">
                        <card-image :card="card" :width="300" :clickHandler="addToDeck"></card-image>
                        <numbered-card-buttons :card="card" class="w-1/2 mx-auto rounded sm:rounded-lg mt-1"></numbered-card-buttons>
                    </div>
                    <card-item :card="card" v-else></card-item>
                </div>
            </div>
        </div>

        <paginator :results="results" @page-selected="updatePage" v-if="results.total" class="mt-4"></paginator>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import CardItem from "./CardItem";
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';
    import NumberedCardButtons from "./NumberedCardButtons";

    export default {
        props: ['results'],
        mixins: [ManagesDecks],
        components: {NumberedCardButtons, CardImage, CardItem, Paginator},

        computed: {
            ...mapState('deck', ['cards', 'fullScreen', 'view']),
            ...mapGetters('session', ['user']),

            classes() {
                return {
                    'xl:w-1/3': this.fullScreen
                }
            },

            galleryView() {
                return this.view === 'gallery' && this.user.subscription;
            }
        },

        data() {
            return {
                cardType: 'all'
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
        },

        watch: {
            cardType(value) {
                this.$emit('card-type-selected', value);
            }
        }
    };
</script>
