<template>
    <div>
        <header-title title="Browse cards"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto px-4">
                <ul class="flex">
                    <li class="float-left">
                        <a href="" class="block border-b-4 border-white p-4" @click.prevent="switchSet('wtr')" :class="isActive('wtr')">Welcome to Rathe</a>
                    </li>
                    <li class="float-left">
                        <a href="" class="block border-b-4 border-white p-4" @click.prevent="switchSet('arc')" :class="isActive('arc')">Arcane Rising</a>
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

                <div class="border-t border-gray-300 p-4 py-8">
                    <h1 class="font-serif text-xl uppercase">Search tips</h1>
                    <p class="my-4">The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to search for cards
                        based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon, sword.etc. using the keywords search field.</p>
                    <ul class="list-disc ml-4">
                        <li><strong>hero</strong>: list all cards that have the keyword 'hero'. This applies to any keyword you search for.</li>
                        <li><strong>WTR011</strong>: Look for card #11 within the Welcome to Rathe set</li>
                        <li><strong>1</strong>: Load card #1 in any set (can also be formatted as 01 or 001</li>
                        <li><strong>guardian action</strong>: Find all cards that have the keywords "guardian" and "action"</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardSearch from './CardSearch.vue';
    import CardItem from './CardItem.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Paginator from '../Components/Paginator.vue';

    export default {
        components: {
            CardItem,
            CardSearch,
            HeaderTitle,
            Paginator
        },

        data() {
            return {
                page: 1,
                results: {},
                set: this.$route.query.set || 'wtr',
                view: 'gallery'
            }
        },

        metaInfo() {
            return {
                title: 'Flesh and Blood Card Database',
                meta: [
                    { vmid: 'description', name: 'description', content: 'Browse Flesh and Blood TCG cards, their rules, and more.' }
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
            }
        }
    };
</script>
