<template>
    <div>
        <header-title title="My Collection"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <crumbs :crumbs="crumbs"></crumbs>
            </div>
        </div>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto px-4">
                <card-search use-case="collection" @search-completed="refreshResults" :external="{ per_page: 15, view: search.view }"></card-search>
            </div>
        </div>

        <div class="bg-gray-200 pb-8 text-base">
            <div class="container sm:mx-auto">
                <div v-if="results && results.data" class="px-4">
                    <div class="flex items-center">
                        <div class="hidden sm:block sm:w-1/4 px-4 md:px-0"></div>
                        <div class="w-3/4 sm:w-2/4 p-4">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
                        </div>
<!--                        <div class="w-1/4 text-right">-->
<!--                            <button @click="toggleDisplay()" class="text-red-700 hover:text-gray-500">-->
<!--                                <icon :size="5">-->
<!--                                    <path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z" v-if="display === 'list'"/>-->
<!--                                    <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z" v-else/>-->
<!--                                </icon>-->
<!--                            </button>-->
<!--                        </div>-->
                    </div>

<!--                    <ul class="clearfix -mx-4" v-if="display == 'gallery'">-->
<!--                        <card-item v-for="card in results.data" :card="card" :key="card.identifier" path="/cards"></card-item>-->
<!--                    </ul>-->

                    <table v-if="display == 'list'" class="w-full table-auto border-collapse bg-white">
                        <thead>
                            <tr class="hidden sm:table-row">
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left" width="170">Sku</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left">Finish</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left">Set/Release</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase" width="150">Total</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase">Trade</th>
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase">Want</th>
                            </tr>

                            <tr class="table-row sm:hidden">
                                <th class="border border-gray-300 py-1 px-2 font-serif uppercase text-left" colspan="5">Card details</th>
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
    import CardItem from '../CardDatabase/CardItem.vue';
    import CardListItem from '../CardDatabase/CardListItem.vue';
    import CardSearch from '../CardDatabase/CardSearch.vue';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Icon from "../Components/Icon";
    import Query from "../Utilities/Query";
    import Paginator from '../Components/Paginator.vue';

    export default {
        components: {
            CardItem,
            CardListItem,
            CardSearch,
            Crumbs,
            Icon,
            HeaderTitle,
            Paginator
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
                search: { view: this.$route.query.view || 'mine' },
                title: 'My collection',
                display: 'list'
            }
        },

        methods: {
            activeFilter(view) {
                return this.search.view === view ? 'opacity-50' : '';
            },

            filter(view) {
                this.search.view = view;
                this.updateQuery({ view });
                this.updateQuery({ page: 1 });
            },

            refreshResults(results) {
                this.results = results;
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

        // watch: {
        //     'search': {
        //         handler() {
        //
        //         },
        //         deep: true
        //     }
        // }

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
