<template>
    <div>
        <header-title title="Price list"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto px-4 flex h-full items-center">
                <ul class="flex">
                    <li class="float-left" v-for="set in sets" :class="isActive(set.id)">
                        <a href="" class="block border-b-4 border-white p-4" @click.prevent="switchSet(set.id)" :class="isActive(set.id)">{{ set.name }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4">
                <div v-if="results && results.data">
                    <div class="flow-root">
                        <div class="py-4 flex">
                            <div class="w-1/4"></div>
                            <div class="w-1/2">
                                <paginator :results="results" @page-selected="updatePage"></paginator>
                            </div>
                            <div class="w-1/4">
                                <currency-selector @currency-selected="changeCurrency"></currency-selector>
                            </div>
                        </div>

                        <table class="w-full table-auto border-collapse bg-white">
                            <thead>
                                <tr class="text-base">
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Sku</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left flex items-center">
                                        <sorter field="name" text="Name" :order="order" :direction="direction" :clicked="sort"></sorter>
                                    </th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Rarity</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">
                                        <sorter field="low" text="Low" :order="order" :direction="direction" :clicked="sort"></sorter>
                                    </th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">
                                        <sorter field="mean" text="Mean" :order="order" :direction="direction" :clicked="sort"></sorter>
                                    </th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">
                                        <sorter field="high" text="High" :order="order" :direction="direction" :clicked="sort"></sorter>
                                    </th>
                                </tr>
                            </thead>

                            <price-list-item v-for="card in results.data" :key="card.sku.sku" :card="card"></price-list-item>
                        </table>

                        <div class="py-4">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapGetters } from 'vuex';

    import CurrencySelector from '../Components/CurrencySelector.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Icon from "../Components/Icon.vue";
    import Paginator from '../Components/Paginator.vue';
    import PriceListItem from './PriceListItem.vue';
    import SearchTips from './SearchTips.vue';
    import Sorter from "../Components/Sorter.vue";
    import _ from "lodash";

    export default {
        components: {
            CurrencySelector,
            HeaderTitle,
            Icon,
            Paginator,
            PriceListItem,
            SearchTips,
            Sorter
        },

        computed: {
            ...mapGetters('session', ['user']),

            setDescription: function() {
                return 'Flesh & Blood card prices for the set, "' + this.sets[this.set] + '".';
            }
        },

        data() {
            return {
                results: {},
                order: 'name',
                page: 1,
                direction: 'asc',
                sets: this.filterSets(),
                selectedCurrency: null,
                set: this.$route.query.set || 'wtr'
            }
        },

        metaInfo() {
            let description = this.setDescription;

            return {
                title: 'Flesh and Blood TCG Price List',
                meta: [
                    { vmid: 'description', name: 'description', content: this.setDescription }
                ]
            };
        },

        created() {
            this.search();
        },

        methods: {
            currency() {
                if (this.selectedCurrency) return this.selectedCurrency;
                if (this.user) return this.user.currency;

                return 'USD';
            },

            isActive: function(set) {
                return {
                    'border-white': this.set == set,
                    'border-crumbs': this.set != set
                }
            },

            changeCurrency(currency) {
                this.selectedCurrency = currency;
                this.search();
            },

            filterSets() {
                let sets = _.sortBy(_.filter(this.$settings.game.sets, setting => {
                    return setting.browseable;
                }), 'released');

                sets.unshift({ id: 'all', name: 'All cards'});

                return sets;
            },

            refreshResults: function(results) {
                this.results = results;
            },

            updatePage: function(page) {
                this.page = page;
                this.search();
            },

            sort(column) {
                // If this column is already ordered, then we flip the direction
                if (column === this.order) {
                    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    this.direction = 'asc';
                }

                this.order = column;

                this.search();
            },

            search() {
                let params = {
                    currency: this.currency(),
                    set: this.set,
                    page: this.page,
                    order: this.order,
                    direction: this.direction,
                };

                axios.get('/market/prices', { params }).then(response => {
                    this.refreshResults(response.data);
                });
            },

            switchSet: function(set) {
                this.set = set;
                this.updatePage(1);
            }
        }
    };
</script>
