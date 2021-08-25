<template>
    <div class="text-base">
        <form @submit.prevent="newSearch">
            <div class="flex w-full px-4 md:px-0">
                <div class="w-3/4 pr-1 flex bg-gray-200 focus:bg-white focus:border-gray-500 rounded-lg mr-2">
                    <button type="button" class="flex-initial ml-2 sm:ml-4 text-red-500" @click.prevent="params.keywords = ''; newSearch()" v-if="params.keywords">
                        <icon :size="6">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </icon>
                    </button>
                    <input type="text" v-model="params.keywords" class="flex-1 bg-transparent outline-none py-2" placeholder="Keywords..." :class="keywordClasses">
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
                <router-link :to="advancedSearchLink" class="inline-block rounded-t-lg bg-gray-300 hover:bg-gray-200 text-gray-500 uppercase font-serif text-sm pt-2 pb-1 px-4 mx-auto">Advanced</router-link>
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
            let base = {
                keywords: ''
            };

            let params = {...base, ...this.fromQuery(this.onlyParams('keywords'))};

            return {
                params,
                sets: this.filterSets()
            };
        },

        computed: {
            advancedSearchLink() {
                let query = new URLSearchParams(this.onlyParams('keywords', 'cost', 'cardType', 'set', 'pitch', 'class', 'rarity'));

                return this.$route.path + '/advanced?' + query.toString();
            },

            keywordClasses() {
                let classes = '';

                if (this.params.keywords) {
                    classes += ' px-2';
                } else {
                    classes += ' px-2 sm:px-4';
                }

                return classes;
            }
        },

        methods: {
            newSearch() {
                this.params.page = 1;
                this.updateQuery(this.params);
            },

            filterSets() {
                return _.sortBy(this.$settings.game.sets, 'name');
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
        }
    };
</script>
