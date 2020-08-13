<template>
    <div>
        <header-title title="Price list"></header-title>

        <div class="bg-red-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto px-4 flex h-full items-center">
                <ul class="flex">
                    <li class="float-left" v-for="(name, set) in sets" :class="isActive(set)">
                        <a href="" class="block border-b-4 border-white p-4" @click.prevent="switchSet(set)" :class="isActive(set)">{{ name }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4">
                <div v-if="results && results.data">
                    <div class="clearfix">
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
                                <tr class="hidden sm:table-row text-base">
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">Name</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Rarity</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">High</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Mean</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Low</th>
                                </tr>

                                <tr class="table-row sm:hidden">
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">High</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Mean</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Low</th>
                                </tr>
                            </thead>

                            <price-list-item v-for="card in results.data" :key="card.identifier + card.variant" :card="card"></price-list-item>
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
    import Paginator from '../Components/Paginator.vue';
    import PriceListItem from './PriceListItem.vue';
    import SearchTips from './SearchTips.vue';

    export default {
        components: {
            CurrencySelector,
            HeaderTitle,
            Paginator,
            PriceListItem,
            SearchTips
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
                sets: {
                    wtr: 'Welcome to Rathe',
                    arc: 'Arcane Rising'
                },
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
                    'border-red-900': this.set != set
                }
            },

            changeCurrency(currency) {
                this.selectedCurrency = currency;
                this.search();
            },

            refreshResults: function(results) {
                this.results = results;
            },

            updatePage: function(page) {
                this.page = page;
                this.search();
            },

            search() {
                axios.get('/cards/prices?currency='+this.currency()+'&set='+this.set+'&page='+this.page).then(response => {
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
