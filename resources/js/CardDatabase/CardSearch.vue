<template>
    <form @submit.prevent="search" class="block flex flex-wrap -mx-3">
        <div class="flex w-full sm:w-3/4">
            <div class="w-full sm:w-3/5 px-2">
                <label class="block font-serif uppercase tracking-wide mb-1 text-sm">Search text</label>
                <input type="text" v-model="keywords" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            </div>

            <div class="w-full sm:w-1/5 px-2">
                <label class="block font-serif uppercase tracking-wide mb-1 text-sm">Class</label>
                <select v-model="heroClass" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value=""></option>
                    <option value="brute">Brute</option>
                    <option value="guardian">Guardian</option>
                    <option value="ninja">Ninja</option>
                    <option value="warrior">Warrior</option>
                    <option value="generic">Generic</option>
                </select>
            </div>

            <div class="w-full sm:w-1/5 px-2">
                <label class="block font-serif uppercase tracking-wide mb-1 text-sm">Card type</label>
                <select v-model="type" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value=""></option>
                    <option value="action">Action</option>
                    <option value="attack">Attack</option>
                    <option value="attack reaction">Attack reaction</option>
                    <option value="defense reaction">Defense reaction</option>
                    <option value="instant">Instant</option>
                </select>
            </div>
        </div>
        <div class="w-full sm:w-1/4 px-4">
            <label class="block font-serif uppercase tracking-wide mb-1 text-sm">&nbsp;</label>
            <input type="submit" value="Search" class="appearance-none block w-full bg-orange-700 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-orange-500">
        </div>
    </form>
</template>

<script>
    export default {
        props: {
            page: Number,
            limit: {
                type: Number,
                default: 15
            },
            view: String,
            refreshable: {
                type: Boolean,
                default: true
            },
            size: String,
            wait: Boolean
        },

        data() {
            return {
                heroClass: null,
                keywords: this.$route.query.search,
                type: null
            }
        },

        methods: {
            filterCards: function() {
                if (this.refreshable) {
                    this.$router.push({path: this.$route.path, query: {search: this.keywords, page: this.page}});
                } else {
                    if (! this.keywords) {
                        this.$emit('search-completed', {});
                        return;
                    }
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
                params.search = this.keywords;
                params.page = this.page;
                params.per_page = this.limit;
                params['class'] = this.heroClass;
                params.type = this.type;

                return params;
            }
        },

        mounted() {
            if (this.wait) return;

            this.search();
        },

        watch: {
            page: function(page) {
                this.filterCards();
            }
        },

        created: function() {
            this.debouncedFilterCards = _.debounce(this.filterCards, 750);
        }
    };
</script>
