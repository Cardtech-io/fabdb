<template>
    <div class="mb-40 clearfix">
        <card-search class="md:hidden flex"></card-search>
        <div class="clearfix">
            <div class="text-base pr-0 bg-gray-100">
                <div class="w-full flex -mt-1px">
                    <button class="flex-1 border border-gray-200 p-1" @click="cardType = ''" :class="cardType === '' ? 'bg-gray-600 text-white' : 'hover:bg-white'">
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
                    <div class="w-1/2 float-left mt-4 overflow-hidden px-2 sm:px-4" style="max-width: 350px" :class="classes" v-if="galleryView">
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
    import CardSearch from "./CardSearch";
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';
    import NumberedCardButtons from "./NumberedCardButtons";
    import Viewable from './Viewable';

    export default {
        mixins: [ManagesDecks, Viewable],

        components: {
            NumberedCardButtons,
            CardImage,
            CardItem,
            CardSearch,
            Paginator
        },

        computed: {
            ...mapState('deck', ['cards', 'deck', 'fullScreen', 'view']),
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
                cardType: '',
                keywords: '',
                results: {},
                page: 1,
            }
        },

        methods: {
            ...mapActions('deck', ['addCard', 'setCardTotal']),
            ...mapActions('messages', ['addMessage']),

            addToDeck: function(card) {
                this.addRemote(card, response => { this.addCard({ card }); });
            },

            updatePage: function(page) {
                this.page = page;
                this.search(page);
            },

            search(page) {
                this.page = page;

                let params = {
                    deck: this.deck.slug,
                    cardType: this.cardType,
                    class: this.hero ? this.hero.keywords[0] : '',
                    keywords: this.keywords,
                    page: page
                };

                axios.get('/cards/build', { params: params }).then(response => {
                    this.results = response.data;
                    this.$emit('search-completed');
                }).catch(error => {});
            },

            updateCardType(value) {
                if (value === 'all') {
                    value = '';
                }

                this.cardType = value;
                this.search();
            }
        },

        mounted() {
            this.$eventHub.$on('search-requested', keywords => {
                this.keywords = keywords;
                this.search(1);
            });

            this.search(1);
        },

        watch: {
            cardType(value) {
                this.search(1);
            }
        }
    };
</script>
