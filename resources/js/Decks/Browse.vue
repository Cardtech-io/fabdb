<template>
    <div>
        <header-title title="Browse decks"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-white dark:bg-gray-700 py-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto md:px-4">
                <deck-search @search-completed="refreshResults"></deck-search>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4">
                <div v-if="results && results.data" class="pb-8">
                    <div class="flow-root py-4">
                        <ul class="flow-root sm:-mx-4">
                            <div v-if="results.data.length">
                                <deck-item v-for="deck in results.data" :deck="deck" :key="deck.slug" theme="light"></deck-item>
                            </div>
                            <div class="text-center py-8" v-else>
                                There are no decks that match your search criteria.
                            </div>
                        </ul>

                        <div class="flow-root py-4" v-if="results.data.length">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
                        </div>
                    </div>
                    <div class="md:w-2/3 rounded-lg p-2 bg-blue-200 text-center text-base mx-auto">
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
    import DeckItem from './DeckItem.vue';
    import DeckSearch from './DeckSearch.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Paginator from '../Components/Paginator.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Models from "../Utilities/Models";
    import Deck from "./Deck";

    export default {
        components: {
            Breadcrumbs,
            DeckItem,
            DeckSearch,
            HeaderTitle,
            Paginator
        },

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

            updatePage(page) {
                this.updateParam({ key: 'page', value: page });
            }
        }
    };
</script>
