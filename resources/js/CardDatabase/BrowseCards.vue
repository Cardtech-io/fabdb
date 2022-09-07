<template>
    <div>
        <header-title title="Browse cards"/>
        <breadcrumbs :crumbs="crumbs"/>

        <div class="bg-white dark:bg-gray-800 pt-4 border-b-4 border-gray-300 dark:border-gray-600">
            <div class="container sm:mx-auto md:px-4">
                <card-search useCase="browse" @search-completed="refreshResults" :page="page" :refreshable="true" :external="{ per_page: per_page, order: order }"/>
            </div>
        </div>

        <div class="main-body">
            <div class="container sm:mx-auto px-4">
                <div v-if="firstLoad">
                    <ul class="flow-root -mx-2 pt-16">
                        <li class="float-left p-2 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6" v-for="n in 30">
                            <card-loader/>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <div v-if="results && results.data">
                        <div class="flow-root">
                            <div class="py-4">
                                <div class="flex justify-between">
                                    <div class="flex-grow">
                                        <paginator :results="results" @page-selected="updatePage"/>
                                    </div>
                                    <ordering @order-changed="updateOrder"/>
                                </div>
                            </div>

                            <ul class="flow-root -mx-2">
                                <card-item v-for="card in results.data" :card="card" :key="card.identifier" :view="view" path="/cards" class="float-left p-2 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6"/>
                            </ul>

                            <div class="py-4">
                                <paginator :results="results" @page-selected="updatePage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    import CardItem from './CardItem.vue';
    import CardLoader from "./CardLoader";
    import CardSearch from './CardSearch.vue';
    import Collapser from "../Components/Collapser";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Ordering from "./Ordering";
    import Paginator from '../Components/Paginator.vue';
    import Query from "../Utilities/Query";

    export default {
        components: {
            CardItem,
            CardLoader,
            CardSearch,
            Collapser,
            HeaderTitle,
            Ordering,
            Paginator
        },

        mixins: [Query],

        computed: {
            setDescription: function() {
                return 'Browse the entire Flesh & Blood card catalogue at FaB DB.';
            }
        },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Cards' }
                ],
                firstLoad: true,
                order: 'sku',
                page: Number(this.$route.query.page) || 1,
                per_page: 30,
                results: {},
                set: this.$route.query.set || '',
                view: 'gallery'
            }
        },

        metaInfo() {
            return {
                title: 'Flesh and Blood TCG Card List',
                meta: [
                    { vmid: 'description', name: 'description', content: this.setDescription }
                ]
            };
        },

        methods: {
            refreshResults(results) {
                this.results = results;
                this.firstLoad = false;
            },

            updateOrder(order) {
                this.updateQuery({page: 1, order});
            },

            updatePage(page) {
                this.updateQuery({page});
            }
        }
    };
</script>
