<template>
    <div>
        <header-title title="Browse decks"/>
        <breadcrumbs :crumbs="crumbs"/>

        <div class="bg-white dark:bg-gray-800 py-4 border-b-4 border-gray-300 dark:border-gray-600">
            <div class="container sm:mx-auto md:px-4">
                <deck-search @search-requested="searchRequested"/>
            </div>
        </div>

        <div class="main-body">
            <div class="container sm:mx-auto px-4">
                <div class="flex items-center space-x-1 pt-4">
                    <button class="flex rounded-t-lg px-4 py-2 text-sm md:text-base" @click="" :class="classes('all')">All decks</button>
                    <button class="flex rounded-t-lg px-4 py-2 text-sm md:text-base" @click="" :class="classes('tournament')">Tournament decks</button>
                    <button class="flex rounded-t-lg px-4 py-2 text-sm md:text-base" @click="" :class="classes('mine')">My decks</button>
                    <button class="flex rounded-t-lg px-4 py-2 text-sm md:text-base" @click="" :class="classes('mine')">Favourites</button>
                </div>
                <div v-if="results && results.data" class="pb-8">
                    <div class="flow-root py-4">
                        <ul class="flow-root sm:-mx-2">
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
                            <simple-paginator :results="results" @search-requested="searchRequested"/>
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
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Deck from "./Deck.js";
    import DeckItem from './DeckItem.vue';
    import DeckSearch from './DeckSearch.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Query from "../Utilities/Query";
    import Paginator from '../Components/Paginator.vue';
    import Models from "../Utilities/Models.js";
    import Search from "../Components/Search";
    import SimplePaginator from "../Components/SimplePaginator.vue";
    import TabItem from "../Components/TabItem.vue";
    import Tabs from "../Components/Tabs.vue";

    export default {
        components: {
            SimplePaginator,
            Breadcrumbs,
            DeckItem,
            DeckSearch,
            HeaderTitle,
            Paginator,
            TabItem,
            Tabs,
        },

        extends: Search,
        mixins: [Query],

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
                title: 'Flesh & Blood deck lists',
                meta: [
                    { vmid: 'description', name: 'description', content: 'Browse Flesh & Blood deck lists, their cards, and various metrics for each.' }
                ]
            };
        },

        methods: {
            classes(index) {
                if (this.active === index) {
                    return 'relative bg-gray-300 dark:bg-gray-800 -bottom-1px text-gray-800 dark:text-gray-300';
                }

                return 'bg-gray-200 dark:bg-black hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300';
            },

            refreshResults(results) {
                this.results = results;
                this.results.data = Models.hydrateMany(results.data, Deck);
            },

            search(params) {
                axios.get('/decks', { params }).then(response => {
                    this.refreshResults(response.data);
                });
            },

            searchRequested() {
                let params = {...this.params, cursor: this.cursor};

                this.updateQuery(params);
                this.search(this.params);
            }
        },

        created() {
            this.store.reset();
            this.params = {...this.params, ...this.clone(this.$route.query)};
            this.search(this.params);
        }
    };
</script>
