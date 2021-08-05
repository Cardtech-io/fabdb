<template>
    <div class="mb-40 flow-root">
        <card-search class="md:hidden flex"></card-search>
        <div class="flow-root">
            <div class="text-base pr-0 bg-white">
                <div class="w-full flex -mt-1px text-center border border-l-0 border-r-0 border-gray-200">
                    <card-type type="" :selected="cardType" @click.native="cardType = ''">
                        <path fill="currentColor" d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z" />
                    </card-type>
                    <card-type type="weapon" :selected="cardType" @click.native="cardType = 'weapon'">
                        <path d="M12 2l10 6c0 4-2 6-6 7l-3-5-4-4 3-4M4.11 19.84l-1.99-1.51L9.19 9 11 10.81l-6.89 9.03z"/>
                    </card-type>
                    <card-type type="equipment" :selected="cardType" @click.native="cardType = 'equipment'">
                        <path d="M12 4a3.5 3.5 0 00-3.5 3.5h2A1.5 1.5 0 0112 6a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 9c-.55 0-1 .45-1 1v1.75L2.4 18.2A1 1 0 003 20h18a1 1 0 00.6-1.8L13 11.75v-.9a3.5 3.5 0 002.5-3.35A3.5 3.5 0 0012 4m0 9.5l6 4.5H6z"/>
                    </card-type>
                    <card-type type="instant" :selected="cardType" @click.native="cardType = 'instant'">
                        <path d="M11 15H6l7-14v8h5l-7 14v-8z"/>
                    </card-type>
                    <card-type type="item" :selected="cardType" @click.native="cardType = 'item'">
                        <path fill="currentColor" d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12A0.5,0.5 0 0,1 13,12.5A0.5,0.5 0 0,1 12.5,13A0.5,0.5 0 0,1 12,12.5A0.5,0.5 0 0,1 12.5,12Z" />
                    </card-type>
                    <card-type type="non-attack action" :selected="cardType" @click.native="cardType = 'non-attack action'">
                        <path fill="currentColor" d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z" />
                    </card-type>
                    <card-type type="attack action" :selected="cardType" @click.native="cardType = 'attack action'">
                        <path fill="currentColor" d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z" />
                    </card-type>
                    <card-type type="attack reaction" :selected="cardType" @click.native="cardType = 'attack reaction'">
                        <path d="M6.2 2.44l11.9 11.9 2.12-2.12 1.41 1.41-2.47 2.47 3.18 3.18c.39.39.39 1.02 0 1.41l-.71.71a.996.996 0 01-1.41 0L17 18.23l-2.44 2.47-1.41-1.41 2.12-2.12-11.9-11.9V2.44H6.2M15.89 10l4.74-4.74V2.44H17.8l-4.74 4.74L15.89 10m-4.95 5l-2.83-2.87-2.21 2.21-2.12-2.12-1.41 1.41 2.47 2.47-3.18 3.19a.996.996 0 000 1.41l.71.71c.39.39 1.02.39 1.41 0L7 18.23l2.44 2.47 1.41-1.41-2.12-2.12L10.94 15z"/>
                    </card-type>
                    <card-type type="defense reaction" :selected="cardType" @click.native="cardType = 'defense reaction'">
                        <path fill="currentColor" d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />
                    </card-type>
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
    import CardType from "./Buttons/CardType";
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';
    import NumberedCardButtons from "./NumberedCardButtons";
    import Viewable from './Viewable';

    export default {
        mixins: [ManagesDecks, Viewable],

        components: {
            CardImage,
            CardItem,
            CardSearch,
            CardType,
            NumberedCardButtons,
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
