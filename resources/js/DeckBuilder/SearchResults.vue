<template>
    <div class="mb-40 flow-root">
        <card-search class="md:hidden flex"></card-search>
        <div class="flow-root">
            <div class="text-base pr-0 bg-white">
                <div class="w-full flex -mt-1px text-center border border-l-0 border-r-0 border-gray-200">
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = ''" :class="cardType === '' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="All">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path fill="currentColor" d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z" />
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'weapon'" :class="cardType === 'weapon' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Weapons">
                        <icon :size="5" :box="24"  class="mx-auto">
                            <path d="M12 2l10 6c0 4-2 6-6 7l-3-5-4-4 3-4M4.11 19.84l-1.99-1.51L9.19 9 11 10.81l-6.89 9.03z"/>
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'equipment'" :class="cardType === 'equipment' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Equipment">
                        <icon :size="5" :box="24"  class="mx-auto">
                            <path d="M12 4a3.5 3.5 0 00-3.5 3.5h2A1.5 1.5 0 0112 6a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 9c-.55 0-1 .45-1 1v1.75L2.4 18.2A1 1 0 003 20h18a1 1 0 00.6-1.8L13 11.75v-.9a3.5 3.5 0 002.5-3.35A3.5 3.5 0 0012 4m0 9.5l6 4.5H6z"/>
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'instant'" :class="cardType === 'instant' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Instants">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path d="M11 15H6l7-14v8h5l-7 14v-8z"/>
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'item'" :class="cardType === 'item' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Items">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path fill="currentColor" d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12A0.5,0.5 0 0,1 13,12.5A0.5,0.5 0 0,1 12.5,13A0.5,0.5 0 0,1 12,12.5A0.5,0.5 0 0,1 12.5,12Z" />
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'non-attack action'" :class="cardType === 'non-attack action' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Non-attack actions">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path fill="currentColor" d="M12,2.5L8.42,8.06L2,9.74L6.2,14.88L5.82,21.5L12,19.09L18.18,21.5L17.8,14.88L22,9.74L15.58,8.06L12,2.5M9.38,10.5C10,10.5 10.5,11 10.5,11.63A1.12,1.12 0 0,1 9.38,12.75C8.75,12.75 8.25,12.25 8.25,11.63C8.25,11 8.75,10.5 9.38,10.5M14.63,10.5C15.25,10.5 15.75,11 15.75,11.63A1.12,1.12 0 0,1 14.63,12.75C14,12.75 13.5,12.25 13.5,11.63C13.5,11 14,10.5 14.63,10.5M9,15H15C14.5,16.21 13.31,17 12,17C10.69,17 9.5,16.21 9,15Z" />
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'attack action'" :class="cardType === 'attack action' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Attack actions">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path fill="currentColor" d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z" />
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'attack reaction'" :class="cardType === 'attack reaction' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Attack reactions">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path d="M6.2 2.44l11.9 11.9 2.12-2.12 1.41 1.41-2.47 2.47 3.18 3.18c.39.39.39 1.02 0 1.41l-.71.71a.996.996 0 01-1.41 0L17 18.23l-2.44 2.47-1.41-1.41 2.12-2.12-11.9-11.9V2.44H6.2M15.89 10l4.74-4.74V2.44H17.8l-4.74 4.74L15.89 10m-4.95 5l-2.83-2.87-2.21 2.21-2.12-2.12-1.41 1.41 2.47 2.47-3.18 3.19a.996.996 0 000 1.41l.71.71c.39.39 1.02.39 1.41 0L7 18.23l2.44 2.47 1.41-1.41-2.12-2.12L10.94 15z"/>
                        </icon>
                    </button>
                    <button class="flex-1 border-r border-gray-200 p-2" @click="cardType = 'defense reaction'" :class="cardType === 'defense reaction' ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="Defense reactions">
                        <icon :size="6" :box="24"  class="mx-auto">
                            <path fill="currentColor" d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />
                        </icon>
                    </button>
                </div>
            </div>

            <div>
                <div v-for="card in results.data">
                    <div class="w-1/2 float-left mt-4 overflow-hidden px-2 sm:px-4" style="max-width: 350px" :class="classes" v-if="galleryView">
                        <card-image :card="card" :width="300" :clickHandler="addToDeck"></card-image>
                        <numbered-card-buttons :card="card" class="w-full mx-auto rounded sm:rounded-lg mt-1"></numbered-card-buttons>
                    </div>
                    <card-item :card="card" v-else></card-item>
                </div>
            </div>
        </div>

        <paginator :results="results" @page-selected="updatePage" class="mt-4"></paginator>
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
                    hero: this.hero ? this.hero.identifier : '',
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
