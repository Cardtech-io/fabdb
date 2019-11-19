<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <input type="text" v-model="searchText" placeholder="Search" class="rounded p-4 bg-black focus:outline-none w-full">
        </div>

        <div v-if="searchText">
            <div class="border-gray-800 rounded-lg border my-8 clearfix mh-10 p-4">
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
                <ul class="clearfix">
                    <card-item v-for="card in cards" v-bind:card="card" v-bind:key="card.identifier"></card-item>
                </ul>
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
            </div>
        </div>

        <div class="border-gray-800 rounded-lg border p-4 my-8">
            <h1 class="font-serif text-xl">Search tips</h1>
            <p class="my-4">The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to search for cards
                based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon, sword.etc.</p>
            <ul class="list-disc ml-4">
                <li><strong>hero</strong>: list all cards that have the keyword 'hero'. This applies to any keyword you search for.</li>
                <li><strong>WTR011</strong>: Look for card #11 within the Welcome to Rathe set</li>
                <li><strong>1</strong>: Load card #1 in any set (can also be formatted as 01 or 001</li>
                <li><strong>guardian action</strong>: Find all cards that have the keywords "guardian" and "action"</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CardItem from './CardItem.vue';
    import Paginator from './Paginator.vue';

    export default {
        components: {
            CardItem,
            Paginator
        },

        data() {
            return {
                cards: null,
                results: null,
                page: 1,
                searchText: this.$route.query.search
            }
        },
        mounted() {
            this.search();
        },
        methods: {
            filterCards: function() {
                this.$router.push({path: '/', query: {search: this.searchText, page: this.page}});

                this.cards = [];

                if (!this.searchText) {
                    return;
                }

                this.search();
            },
            search: function() {
                const terms = this.$route.query.search;

                if (!terms) return;

                axios.get('/cards', {params: this.$route.query}).then(response => {
                    this.cards = response.data.data;
                    this.results = response.data;
                });
            },
            updatePage: function(page) {
                this.page = page;
                this.filterCards();
            }
        },
        watch: {
    //        $route: function(route) {
    //            this.page = route.params.page;
    //            this.searchText = route.params.search;
    //        },

            searchText: function() {
                this.page = 1;
                this.debouncedFilterCards();
            }
        },
        created: function() {
            this.debouncedFilterCards = _.debounce(this.filterCards, 750);
        }
    };
</script>
