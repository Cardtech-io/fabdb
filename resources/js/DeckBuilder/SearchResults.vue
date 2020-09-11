<template>
    <div class="mb-40 clearfix">
        <div class="clearfix">
            <div v-for="card in results.data">
                <div class="w-full xl:w-1/2 float-left mt-4 px-2 sm:px-4 overflow-hidden" style="max-width: 350px" :class="classes" v-if="galleryView">
                    <card-image :card="card" :width="300" :clickHandler="addToDeck"></card-image>
                    <card-buttons :card="card" class="w-1/2 mx-auto rounded sm:rounded-lg mt-1"></card-buttons>
                </div>
                <card-item :card="card" v-else></card-item>
            </div>
        </div>

        <paginator :results="results" @page-selected="updatePage" v-if="results.total" class="mt-4"></paginator>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    import CardButtons from "./CardButtons";
    import CardImage from '../CardDatabase/CardImage.vue';
    import CardItem from "./CardItem";
    import ManagesDecks from './ManagesDecks';
    import Paginator from '../Components/Paginator.vue';

    export default {
        props: ['results'],
        mixins: [ManagesDecks],
        components: {CardButtons, CardImage, CardItem, Paginator},

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
        }
    };
</script>
