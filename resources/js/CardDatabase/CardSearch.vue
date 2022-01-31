<template>
    <div class="text-base pb-4">
        <form @submit.prevent="newSearch">
            <div class="flex w-full px-4 md:px-0">
                <div class="w-3/4 relative pr-1 flex bg-gray-200 focus:bg-white focus:border-gray-500 rounded-lg mr-2 items-center">
                    <button type="button" class="flex-initial ml-2 bg-primary hover:bg-secondary text-white rounded p-1 px-2 text-xs uppercase" @click.prevent="$modal.show('search-help')">
                        <span class="hidden sm:inline">SYNTAX</span> HELP
                    </button>
                    <button type="button" class="flex-initial ml-1 text-red-500" @click.prevent="params.keywords = ''; newSearch()" v-if="params.keywords">
                        <icon :size="6">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </icon>
                    </button>
                    <input type="text" v-model="params.keywords" class="flex-1 bg-transparent outline-none py-2" placeholder="Search..." :class="keywordClasses">
                    <button type="button" class="absolute right-0 text-black hover:text-gray-600 mr-1" @click.prevent="showAdvancedSearch">
                        <icon :size="7">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </icon>
                    </button>
                </div>

                <div class="w-1/4">
                    <input type="submit" value="Search" class="w-full button-primary rounded-lg py-3 px-2 sm:px-4 leading-tight focus:outline-none">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import _ from 'lodash';
    import AdvancedCardSearch from "./AdvancedCardSearch";
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
                ...this.external,
                keywords: ''
            };

            let params = {...base, ...this.fromQuery(this.exceptParams('per_page', 'page'))};

            return {
                params,
                sets: this.filterSets()
            };
        },

        computed: {
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
                let params = this.combineParams({...this.params, 'use-case': this.useCase, ...this.$route.query });
                let path = this.useCase === 'collection' ? 'collection' : 'cards';

                axios.get('/'+path, { params }).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },

            showAdvancedSearch() {
                this.$modal.show(
                    AdvancedCardSearch,
                    {
                        query: this.params
                    },
                    {
                        adaptive: true,
                        classes: ['rounded-lg'],
                        scrollable: true,
                        height: 'auto',
                        maxHeight: 300
                    }
                )
            }
        },

        mounted() {
            if (this.wait) return;

            this.$eventHub.$on('advanced-search', params => {
                this.updateQuery(params);
            });

            this.search();
        },

        watch: {
            '$route.query': function() {
                this.search();
            }
        }
    };
</script>
