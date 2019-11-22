<template>
    <div>
        <div class="border-gray-800 border-b-0 rounded-t-lg border p-4">
            <p class=""><router-link to="/" class="link">Home</router-link> <span class="text-gray-600">&gt;</span> My Collection</p>
        </div>

        <card-search view="mine" @search-completed="refreshResults" :page="page" refreshable="true"></card-search>

        <div>
            <div class="border-gray-800 rounded-lg border my-8 clearfix mh-10 p-4">
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
                <ul class="clearfix">
                    <card-item v-for="card in results.data" v-bind:card="card" v-bind:key="card.identifier"></card-item>
                </ul>
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
            </div>
        </div>
    </div>
</template>

<script>
    import CardItem from './CardItem.vue';
    import CardSearch from './CardSearch.vue';
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
