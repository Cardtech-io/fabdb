<template>
    <div>
        <header-title title="Browse cards"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto px-4 flex">
                <ul class="flex">
                    <li class="mr-8 border-b-4 border-white" v-for="set in sets" :class="isActive(set.id)">
                        <a href="" class="block text-center py-4" @click.prevent="switchSet(set.id)">
                            <span class="md:hidden">{{set.id}}</span>
                            <span class="hidden md:inline">{{set.name}}</span>
                        </a>
                    </li>
                </ul>
                <collapser></collapser>
            </div>
        </div>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto md:px-4">
                <card-search useCase="browse" @search-completed="refreshResults" :page="page" :refreshable="true" :external="{ per_page: per_page }"></card-search>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4">
                <div v-if="firstLoad">
                    <ul class="flow-root -mx-2 pt-16">
                        <li class="float-left p-2 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6" v-for="n in 30">
                            <card-loader></card-loader>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <div v-if="results && results.data">
                        <div class="flow-root">
                            <div class="flow-root py-4">
                                <paginator :results="results" @page-selected="updatePage"></paginator>
                            </div>

                            <ul class="flow-root -mx-2">
                                <card-item v-for="card in results.data" :card="card" :key="card.identifier" :view="view" path="/cards" class="float-left p-2 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6"/>
                            </ul>

                            <div class="py-4">
                                <paginator :results="results" @page-selected="updatePage"></paginator>
                            </div>
                        </div>
                    </div>
                </div>

                <search-tips></search-tips>
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
    import Paginator from '../Components/Paginator.vue';
    import Query from "../Utilities/Query";
    import SearchTips from './SearchTips.vue';

    export default {
        components: {
            CardItem,
            CardLoader,
            CardSearch,
            Collapser,
            HeaderTitle,
            Paginator,
            SearchTips
        },

        mixins: [Query],

        computed: {
            setDescription: function() {
                return 'Browse the Flesh & Blood card list for the set, "' + this.sets[this.set] + '".';
            }
        },

        data() {
            return {
                firstLoad: true,
                page: Number(this.$route.query.page) || 1,
                per_page: 20,
                results: {},
                sets: this.filterSets(),
                set: this.$route.query.set,
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
            isActive(set) {
                return {
                    'border-white': this.set === set,
                    'border-crumbs': this.set !== set
                }
            },

            refreshResults(results) {
                this.results = results;
                this.firstLoad = false;
            },

            filterSets() {
                let sets = _.sortBy(_.filter(this.$settings.game.sets, setting => {
                    return setting.browseable;
                }), 'released');

                sets.unshift({ id: '', name: 'All cards'});

                return sets;
            },

            updatePage(page) {
                this.updateQuery({page});
            },

            switchSet(set) {
                this.set = set;
                this.updateQuery({page: 1, set});
            }
        }
    };
</script>
