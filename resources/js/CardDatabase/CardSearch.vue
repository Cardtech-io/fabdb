<template>
    <div class="text-base">
        <form @submit.prevent="newSearch" class="block">
            <div class="flex w-full px-4 md:px-0">
                <div class="w-3/4 pr-1 flex bg-gray-200 focus:bg-white focus:border-gray-500 rounded-lg mr-2">
                    <input type="text" v-model="params.keywords" class="flex-1 bg-transparent outline-none py-2 px-2 sm:px-4" placeholder="Keywords..." :class="active('keywords')">
                    <button type="button" class="flex-initial mr-2 link-alternate" @click.prevent="$modal.show('search-help')">
                        <icon :size="6">
                            <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </icon>
                    </button>
                </div>

                <div class="w-1/4">
                    <input type="submit" value="Search" class="appearance-none block w-full button-primary rounded-lg py-3 px-2 sm:px-4 leading-tight focus:outline-none">
                </div>
            </div>

            <div class="w-full text-center mt-2">
                <router-link :to="advancedSearchLink" class="inline-block rounded-t-lg bg-gray-300 hover:bg-gray-200 text-gray-500 uppercase font-serif text-sm pt-2 px-4 mx-auto">Advanced</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Icon from '../Components/Icon';
    import Query from "../Utilities/Query";

    export default {
        props: {
            external: {
                type: Object,
                default: () => { return {}; }
            },
            page: Number,
            limit: {
                type: Number,
                default: 12
            },
            useCase: String,
            refreshable: {
                type: Boolean,
                default: true
            },
            wait: Boolean
        },

        components: {Icon},
        mixins: [Query],

        data() {
            let params = {
                cost: '',
                cardType: '',
                keywords: '',
                pitch: '',
                set: 'all',
                class: '',
                rarity: '',
                ...this.onlyParams('keywords', 'cost', 'cardType', 'set', 'pitch', 'class', 'rarity')
            };

            return {
                openTray: false,
                params: params,
                sets: this.filterSets()
            };
        },

        computed: {
            advancedSearchLink() {
                let query = new URLSearchParams(this.onlyParams('keywords', 'cost', 'cardType', 'set', 'pitch', 'class', 'rarity'));

                return this.$route.path + '/advanced?' + query.toString();
            }
        },

        methods: {
            active(field) {
                if (this.query(field)) {
                    return 'shadow-activeNumber'
                }
            },

            newSearch: function() {
                this.params.page = 1;
                this.updateQuery(this.params);
            },

            filterSets() {
                let sets = _.sortBy(this.$settings.game.sets, 'name');

                sets.unshift({ id: 'all', name: 'All sets'});

                return sets;
            },

            query(field) {
                if (field) {
                    return this.$route.query[field];
                }

                return this.$route.query;
            },

            search() {
                let params = this.combineParams({ 'use-case': this.useCase, ...this.$route.query });

                axios.get('/cards/', { params }).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },
        },

        mounted() {
            if (this.wait) return;

            this.search();
        },

        watch: {
            '$route.query': function() {
                this.search();
            }
        },

        // created: function() {
        //     this.debouncedFilterCards = _.debounce(this.search, 750);
        // }
    };
</script>

<style>
    select > option:first-child {
        @apply text-gray-500;
    }
</style>
