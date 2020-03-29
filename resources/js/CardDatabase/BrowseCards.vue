<template>
    <div>
        <header-title title="Browse cards"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto px-4">
                <ul class="flex">
                    <li class="float-left" v-for="(name, set) in sets" :class="isActive(set)">
                        <a href="" class="block border-b-4 border-white p-4" @click.prevent="switchSet(set)" :class="isActive(set)">{{ name }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white py-4 border-b-4 border-gray-300">
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
    import CardSearch from './CardSearch.vue';
    import CardItem from './CardItem.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Paginator from '../Components/Paginator.vue';
    import SearchTips from './SearchTips.vue';

    export default {
        components: {
            CardItem,
            CardSearch,
            HeaderTitle,
            Paginator,
            SearchTips
        },

        computed: {
            setDescription: function() {
                return 'Browse the Flesh & Blood card list for the set, "' + this.sets[this.set] + '".';
            }
        },

        data() {
            return {
                page: Number(this.$route.query.page) || 1,
                results: {},
                sets: {
                    all: 'All cards',
                    wtr: 'Welcome to Rathe',
                    arc: 'Arcane Rising'
                },
                set: this.$route.query.set || 'all',
                view: 'gallery'
            }
        },

        metaInfo() {
            let description = this.setDescription;

            return {
                title: 'Flesh and Blood Card List',
                meta: [
                    { vmid: 'description', name: 'description', content: this.setDescription }
                ]
            };
        },

        methods: {
            isActive: function(set) {
                return {
                    'border-white': this.set == set,
                    'border-orange-900': this.set != set
                }
            },
            refreshResults: function(results) {
                this.results = results;
            },

            updatePage: function(page) {
                this.page = page;
            },

            switchSet: function(set) {
                this.set = set;
                this.updatePage(1);
            }
        }
    };
</script>
