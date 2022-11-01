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
                    <router-link :to="{name: 'user.profile.wants', params: {user: user.slug }}" class="font-serif uppercase hover:opacity-50">
                        <span class="hidden sm:inline">My want/trade list</span>
                        <icon :size="8" class="sm:hidden -mt-1">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                        </icon>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 pt-4 border-b-4 border-gray-300 dark:border-gray-600">
            <div class="container sm:mx-auto sm:px-4">
                <card-search use-case="collection" @search-completed="refreshResults" :external="{ per_page: 15, ...search }"></card-search>
            </div>
        </div>

        <div class="main-body pb-8 text-sm sm:text-base">
            <div class="container sm:mx-auto">
                <div v-if="results && results.data" class="sm:px-4">
                    <div class="mx-auto py-4">
                        <paginator :results="results" @page-selected="updatePage"/>
                    </div>

                    <table class="w-full bg-white dark:bg-gray-800 space-x-4 p-1 border-b-2 border-gray-300 dark:border-gray-600">
                        <thead>
                            <tr>
                                <td class="">
                                    <div style="width: 50px;"></div>
                                </td>
                                <td class="py-1">
                                    <div class="flex space-x-2">
                                        <sorter field="name" text="Name" :order="search.order" :direction="search.direction" :clicked="sort"></sorter>
                                        <span>\</span>
                                        <sorter field="sku" text="Sku" :order="search.order" :direction="search.direction" :clicked="sort"></sorter>
                                    </div>
                                </td>
                                <td class="hidden md:table-cell w-1/10">Set/Release</td>
                                <td class="hidden sm:table-cell w-1/20">
                                    <sorter field="rarity" text="Rarity" :order="search.order" :direction="search.direction" :clicked="sort" class="justify-center"/>
                                </td>
                                <td class="w-1/4 md:w-1/10 text-center">Total</td>
                                <td class="w-1/10 md:w-1/20 text-center">Trade</td>
                                <td class="w-1/10 md:w-1/20 text-center">Want</td>
                            </tr>
                        </thead>
                        <tbody>
                            <printing v-for="printing in results.data" :printing="printing" :key="printing.sku.sku"/>
                        </tbody>
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
    import CardSearch from '../CardDatabase/CardSearch.vue';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Icon from "../Components/Icon.vue";
    import Query from "../Utilities/Query.js";
    import Paginator from '../Components/Paginator.vue';
    import Printing from "./Printing.vue";
    import Sorter from "../Components/Sorter.vue";

    export default {
        components: {
            Printing,
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
                return tab === this.search.view ? 'bg-white text-gray-700' : 'button-primary hover:button-secondary';
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
