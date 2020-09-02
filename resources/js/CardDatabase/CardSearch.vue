`<template>
    <div class="text-base">
        <form @submit.prevent="newSearch" class="block">
            <div class="flex w-full px-4 md:px-0">
                <div class="w-full md:w-3/5 pr-1">
                    <input type="text" v-model="params.keywords" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" placeholder="Enter search terms..." :class="active('keywords')">
                </div>

                <div class="w-full md:w-1/5 px-1">
                    <select v-model="params.class" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('class')">
                        <option value="">Class</option>
                        <option :value="klass" v-for="(name, klass) in $settings.game.classes">{{ name }}</option>
                    </select>
                </div>

                <div class="w-full md:w-1/5 pl-1">
                    <input type="submit" value="Search" class="appearance-none block w-full button-primary rounded-lg py-3 px-4 leading-tight focus:outline-none">
                </div>
            </div>

            <div class="w-full flex pt-2 px-4 md:px-0" v-if="advanced">
                <div class="w-full md:w-1/4 pr-1">
                    <select v-model="params.pitch" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('pitch')">
                        <option value="">Pitch</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div class="w-full md:w-1/4 px-1">
                    <select v-model="params.cost" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('cost')">
                        <option value="">Cost</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                </div>

                <div class="w-full md:w-1/4 px-1">
                    <select v-model="params.cardType" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('cardType')">
                        <option value="">Card type</option>
                        <option value="action">Action</option>
                        <option value="attack">Attack</option>
                        <option value="attack reaction">Attack reaction</option>
                        <option value="defense reaction">Defense reaction</option>
                        <option value="equipment">Equipment</option>
                        <option value="hero">Hero</option>
                        <option value="instant">Instant</option>
                        <option value="item">Item</option>
                    </select>
                </div>

                <div class="w-full md:w-1/4 pl-1">
                    <select v-model="params.rarity" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('rarity')">
                        <option value="">Rarity</option>
                        <option :value="key" v-for="(rarity, key) in $settings.game.rarities">{{ rarity }}</option>
                    </select>
                </div>
            </div>

            <div class="w-full mt-2" v-if="useCase != 'build' && useCase != 'build-open'">
                <button type="button" class="block rounded-t-lg bg-gray-300 hover:bg-gray-200 text-gray-500 uppercase font-serif text-sm pt-2 px-4 mx-auto" @click="openTray = !openTray">Advanced</button>
            </div>
        </form>
    </div>
</template>

<script>
    import _ from 'lodash';
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

        mixins: [Query],

        computed: {
            advanced() {
                return this.openTray || this.hasAdvancedSearchParams;
            },

            hasAdvancedSearchParams() {
                return this.params.pitch || this.params.rarity || this.params.cardType || this.params.cost;
            }
        },

        data() {
            let params = {
                cost: '',
                cardType: '',
                keywords: '',
                pitch: '',
                class: '',
                rarity: '',
                ...this.onlyParams('cost', 'cardType', 'pitch', 'class'),
            };

            return {
                openTray: false,
                params: params
            }
        },

        methods: {
            active(field) {
                if (this.query(field)) {
                    return 'shadow-active'
                }
            },

            newSearch: function() {
                this.params.page = 1;
                this.updateQuery(this.params);
            },

            query(field) {
                if (field) {
                    return this.$route.query[field];
                }

                return this.$route.query;
            },

            search: function() {
                let params = this.combineParams({ 'use-case': this.useCase });

                axios.get('/cards/', {params: params}).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },
        },

        mounted() {
            if (this.wait) return;

            this.search();
        },

        watch: {
            '$route.query': {
                handler(query) {
                    this.search();
                }
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
