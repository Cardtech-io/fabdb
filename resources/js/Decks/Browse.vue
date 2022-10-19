<template>
    <div>
        <header-title title="Browse decks"/>
        <breadcrumbs :crumbs="crumbs"/>

        <div class="bg-white dark:bg-gray-800 py-4 border-b-4 border-gray-300 dark:border-gray-600">
            <div class="container sm:mx-auto md:px-4">
                <deck-search @search-completed="refreshResults"/>
            </div>
        </div>

        <div class="main-body">
            <div class="container sm:mx-auto px-4">
                <div v-if="results && results.data" class="pb-8">
                    <div class="flow-root py-4">
                        <ul class="flow-root sm:-mx-4">
                            <div v-if="results.data.length" class="flex flex-wrap">
                                <div class="w-full md:w-1/3 lg:w-1/5 md:px-2" v-for="deck in results.data">
                                    <deck-item :deck="deck" :key="deck.slug" theme="light"/>
                                </div>
                            </div>
                            <div class="text-center py-8" v-else>
                                There are no decks that match your search criteria.
                            </div>
                        </ul>

                        <div class="flow-root py-4" v-if="results.data.length">
                            <simple-paginator :results="results" @cursor-selected="updateCursor"/>
                        </div>
                    </div>
                    <div class="md:w-2/3 rounded-lg p-2 bg-blue-200 dark:bg-blue-800 text-center text-base mx-auto">
                        Don't see your deck in the list above? Be sure to set your deck's visibility to <span class="font-bold">public</span>.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Deck from "./Deck.js";
    import DeckItem from './DeckItem.vue';
    import DeckSearch from './DeckSearch.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Paginator from '../Components/Paginator.vue';
    import Models from "../Utilities/Models.js";
    import Query from "../Utilities/Query";
    import SimplePaginator from "../Components/SimplePaginator.vue";

    export default {
        components: {
            SimplePaginator,
            Breadcrumbs,
            DeckItem,
            DeckSearch,
            HeaderTitle,
            Paginator
        },

        mixins: [Query],

        computed: {
            decks() {
                return results.decks;
            }
        },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Decks' }
                ],

                results: {},
            };
        },

        metaInfo() {
            return {
                title: 'Flesh and Blood Deck lists',
                meta: [
                    { vmid: 'description', name: 'description', content: 'Browse Flesh & Blood deck lists, their cards, and various metrics for each.' }
                ]
            };
        },

        methods: {
            ...mapActions('deckSearch', ['updateParam']),

            refreshResults(results) {
                this.results = results;
                this.results.data = Models.hydrateMany(results.data, Deck);
            },

            updateCursor(cursor) {
                this.updateParam({ key: 'cursor', value: cursor });
            }
        }
    };
</script>
