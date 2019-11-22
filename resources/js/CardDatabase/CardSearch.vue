<template>
    <div class="border-gray-800 rounded-b-lg border p-4">
        <input type="text" v-model="searchText" placeholder="Search" class="rounded p-4 bg-black focus:outline-none w-full">
    </div>
</template>

<script>
    export default {
        props: ['page', 'view', 'refreshable'],

        data() {
            return {
                searchText: this.$route.query.search
            }
        },
        methods: {
            filterCards: function() {
                if (this.refreshable) {
                    this.$router.push({path: this.$route.path, query: {search: this.searchText, page: this.page}});
                }

                this.search();
            },

            search: function() {
                const params = this.buildSearchParams();

                axios.get('/cards/', {params: params}).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },

            buildSearchParams: function() {
                var params = this.$route.query;

                params.view = this.view;
                params.search = this.searchText;
                params.page = this.page;

                return params;
            }
        },

        mounted() {
            this.search();
        },

        watch: {
            page: function(page) {
                this.filterCards();
            },

            searchText: function() {
                this.$emit('page-selected', 1);
                this.debouncedFilterCards();
            }
        },

        created: function() {
            this.debouncedFilterCards = _.debounce(this.filterCards, 750);
        }
    };
</script>
