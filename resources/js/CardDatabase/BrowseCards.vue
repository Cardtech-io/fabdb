<template>
    <div>
        <div class="border-gray-800 rounded-b-lg border p-4">
            <card-search view="all" @search-completed="refreshResults" :page="page" refreshable="true"></card-search>
        </div>

        <div v-if="results && results.data">
            <div class="border-gray-800 rounded-lg border my-8 clearfix mh-10 p-4">
                <paginator :results="results" @page-selected="updatePage"></paginator>
                <ul class="clearfix">
                    <card-item v-for="card in results.data" v-bind:card="card" v-bind:key="card.identifier" path="/cards"></card-item>
                </ul>
                <paginator :results="results" @page-selected="updatePage"></paginator>
            </div>
        </div>

        <div class="border-gray-800 rounded-lg border p-4 my-8">
            <h1 class="font-serif text-xl">Search tips</h1>
            <p class="my-4">The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to search for cards
                based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon, sword.etc.</p>
            <ul class="list-disc
            ml-4">
                <li><strong>hero</strong>: list all cards that have the keyword 'hero'. This applies to any keyword you search for.</li>
                <li><strong>WTR011</strong>: Look for card #11 within the Welcome to Rathe set</li>
                <li><strong>1</strong>: Load card #1 in any set (can also be formatted as 01 or 001</li>
                <li><strong>guardian action</strong>: Find all cards that have the keywords "guardian" and "action"</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CardSearch from './CardSearch.vue';
    import CardItem from './CardItem.vue';
    import Paginator from './Paginator.vue';

    export default {
        components: {
            CardItem,
            CardSearch,
            Paginator
        },

        data() {
            return {
                page: 1,
                results: {}
            }
        },

        methods: {
            refreshResults: function(results) {
                this.results = results;
            },

            updatePage: function(page) {
                this.page = page;
            }
        }
    };
</script>
