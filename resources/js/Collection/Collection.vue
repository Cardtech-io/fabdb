<template>
    <div>
        <header-title title="My Collection"></header-title>

        <div class="crumbs">
            <div class="container sm:mx-auto p-4 pb-0 flex items-center">
                <div class="flex text-base">
                    <button class="p-2 px-4 rounded-t-lg mr-1" @click="filter('all')" :class="tabClasses('all')">All</button>
                    <button class="p-2 px-4 rounded-t-lg mr-1" @click="filter('have')" :class="tabClasses('have')">Have</button>
                    <button class="p-2 px-4 rounded-t-lg mr-1" @click="filter('need')" :class="tabClasses('need')">Need</button>
                </div>
                <div class="ml-auto">
                    <router-link :to="{name: 'user.profile.wants', params: {user: user.slug }}" class="font-serif uppercase hover:opacity-50">My want/trade list</router-link>
                </div>
            </div>
        </div>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto sm:px-4">
                <card-search use-case="collection" @search-completed="refreshResults" :external="{ per_page: 15, ...search }"></card-search>
            </div>
        </div>

        <div class="bg-gray-200 pb-8 text-base">
            <div class="container sm:mx-auto">
                <div v-if="results && results.data" class="sm:px-4">
                    <div class="mx-auto py-4">
                        <paginator :results="results" @page-selected="updatePage"></paginator>
                    </div>

                    <table class="w-full table-auto border-collapse bg-white">
                        <thead>
                            <tr>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left" width="170">
                                    <sorter field="name" text="Name \ Sku" :order="search.order" :direction="search.direction" :clicked="sort"></sorter>
                                </th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left hidden sm:table-cell">Finish</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left hidden sm:table-cell">Set/Release</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase hidden sm:table-cell">
                                    <sorter field="rarity" text="Rarity" :order="search.order" :direction="search.direction" :clicked="sort"></sorter>
                                </th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase" width="150">Total</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase">Trade</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase">Want</th>
                            </tr>
                        </thead>

                        <card-list-item v-for="card in results.data" :card="card" :key="card.identifier" path="/cards"></card-list-item>
                    </table>

                    <div class="py-4">
                        <paginator :results="results" @page-selected="updatePage"></paginator>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import CardItem from '../CardDatabase/CardItem.vue';
    import CardListItem from '../CardDatabase/CardListItem.vue';
    import CardSearch from '../CardDatabase/CardSearch.vue';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Icon from "../Components/Icon";
    import Query from "../Utilities/Query";
    import Paginator from '../Components/Paginator.vue';
    import Sorter from "../Components/Sorter";

    export default {
        components: {
            CardItem,
            CardListItem,
            CardSearch,
            Crumbs,
            Icon,
            HeaderTitle,
            Paginator,
            Sorter
        },

        mixins: [Query],

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'My Collection'}
                ],

                page: 1,
                results: {},
                search: {
                    view: this.$route.query.view || 'all',
                    order: this.$route.query.order || 'sku',
                    direction:  this.$route.query.direction || 'asc'
                },
                title: 'My collection',
                display: 'list'
            }
        },

        computed: {
            ...mapGetters('session', ['user'])
        },

        methods: {
            activeFilter(view) {
                return this.search.view === view ? 'bg-white' : '';
            },

            filter(view) {
                this.search.view = view;
                this.updateQuery({ page: 1, view: this.search.view });
            },

            refreshResults(results) {
                this.results = results;
            },

            sort(column) {
                // If this column is already ordered, then we flip the direction
                if (column === this.search.order) {
                    this.search.direction = this.search.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    this.search.direction = 'asc';
                }

                this.search.order = column;

                this.updateQuery({ direction: this.search.direction, order: this.search.order });
            },

            tabClasses(tab) {
                return tab === this.search.view ? 'bg-white text-gray-700' : 'bg-orange-700 hover:bg-orange-600';
            },

            toggleDisplay() {
                this.display = this.display === 'list' ? 'gallery' : 'list';
            },

            updatePage(page) {
                this.updateQuery({ page });
            }
        },

        mounted() {
            this.$root.collectionTabIndex = 0;
        },

        metaInfo() {
            return {
                title: this.title,
                meta: [
                    { vmid: 'description', name: 'description', content: 'Manage your Flesh & Blood card collection.' }
                ]
            }
        }
    };
</script>
