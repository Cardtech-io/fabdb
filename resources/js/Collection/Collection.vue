<template>
    <div>
        <header-title title="My Collection"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="flex-1 text-right">
                    <p>
                        <a href="" class="hover:opacity-75 underline" @click.prevent="filter('all')" :class="activeFilter('all')">All</a> <span class="opacity-25">|</span>
                        <a href="" class="hover:opacity-75 underline" @click.prevent="filter('mine')" :class="activeFilter('mine')">Mine</a> <span class="opacity-25">|</span>
                        <a href="" class="hover:opacity-75 underline" @click.prevent="filter('need')" :class="activeFilter('need')">Need</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto px-4">
                <card-search use-case="collection" @search-completed="refreshResults"></card-search>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto">
                <div v-if="results && results.data" class="px-4">
                    <div class="clearfix p-4">
                        <div class="float-left w-1/4 px-4 md:px-0">
                            <a href="" @click.prevent="setDisplay('gallery')" class="text-gray-800" :class="{ 'text-red-700 hover:text-gray-500': display != 'gallery' }">
                                <svg class="inline-block fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" displayBox="0 0 20 20">
                                    <path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/>
                                </svg>
                            </a>

                            <a href="" @click.prevent="setDisplay('list')" class="text-gray-800" :class="{ 'text-red-700 hover:text-gray-500': display != 'list' }">
                                <svg class="inline-block fill-current h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/>
                                </svg>
                            </a>
                        </div>
                        <div class="float-left w-3/4 sm:w-2/4">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
                        </div>

                        <div class="float-left hidden sm:w-1/4">&nbsp;</div>
                    </div>

                    <ul class="clearfix -mx-4" v-if="display == 'gallery'">
                        <card-item v-for="card in results.data" :card="card" :key="card.identifier" path="/cards"></card-item>
                    </ul>

                    <table v-if="display == 'list'" class="w-full table-auto border-collapse bg-white">
                        <thead>
                            <tr class="hidden sm:table-row">
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">ID</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">Name</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Standard</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Foil</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Promo</th>
                            </tr>

                            <tr class="table-row sm:hidden">
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left" colspan="5">Card details</th>
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
    import Query from "../Utilities/Query";
    import Paginator from '../Components/Paginator.vue';

    export default {
        components: {
            CardItem,
            CardListItem,
            CardSearch,
            Crumbs,
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
                search: { view: 'mine' },
                title: 'My collection',
                display: 'list'
            }
        },

        methods: {
            activeFilter: function(view) {
                return this.search.view == view ? 'opacity-50' : '';
            },

            filter: function(view) {
                this.search.view = view;
                this.updateQuery({ view });
                this.updateQuery({ page: 1 });
            },

            refreshResults: function(results) {
                this.results = results;
            },

            setDisplay: function(display) {
                this.display = display;
            },

            updatePage(page) {
                this.updateQuery({ page });
            }
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
