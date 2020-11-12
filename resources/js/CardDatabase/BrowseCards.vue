<template>
    <div>
        <header-title title="Browse cards"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto px-4">
                <ul class="flex">
                    <li class="float-left" v-for="set in sets" :class="isActive(set.id)">
                        <a href="" class="block border-b-4 border-white p-2 sm:p-4 text-center" @click.prevent="switchSet(set.id)" :class="isActive(set.id)">
                            {{ set.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto md:px-4">
                <card-search useCase="browse" @search-completed="refreshResults" :page="page" :refreshable="true" :external="{ set: set }"></card-search>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4">
                <div v-if="results && results.data">
                    <div class="clearfix">
                        <div class="clearfix py-4">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
                        </div>

                        <ul class="clearfix sm:-mx-4">
                            <card-item v-for="card in results.data" :card="card" :key="card.identifier" :view="view" path="/cards"></card-item>
                        </ul>

                        <div class="py-4">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
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

    import CardSearch from './CardSearch.vue';
    import CardItem from './CardItem.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Paginator from '../Components/Paginator.vue';
    import Query from "../Utilities/Query";
    import SearchTips from './SearchTips.vue';

    export default {
        components: {
            CardItem,
            CardSearch,
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
                page: Number(this.$route.query.page) || 1,
                results: {},
                sets: this.filterSets(),
                set: this.$route.query.set || 'all',
                view: 'gallery'
            }
        },

        metaInfo() {
            let description = this.setDescription;

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
                    'border-white': this.set == set,
                    'border-crumbs': this.set != set
                }
            },

            refreshResults(results) {
                this.results = results;
            },

            filterSets() {
                let sets = _.sortBy(_.filter(this.$settings.game.sets, setting => {
                    return setting.browseable;
                }), 'released');

                sets.unshift({ id: 'all', name: 'All cards'});

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
