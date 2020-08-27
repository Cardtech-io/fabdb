`<template>
    <div>
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
                        <option value="t">Token</option>
                        <option value="c">Common</option>
                        <option value="r">Rare</option>
                        <option value="s">Super rare</option>
                        <option value="m">Majestic</option>
                        <option value="l">Legendary</option>
                        <option value="f">Fabled</option>
                    </select>
                </div>
            </div>

            <div class="w-full mt-2" v-if="useCase == 'browse'">
                <button type="button" class="block rounded-t-lg bg-gray-300 hover:bg-gray-200 text-gray-500 uppercase font-serif text-sm pt-2 px-4 mx-auto" @click="openTray = !openTray">Advanced</button>
            </div>
        </form>
    </div>
</template>

<script>
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

        computed: {
            advanced() {
                return this.openTray || this.hasAdvancedSearchParams;
            },

            hasAdvancedSearchParams() {
                return this.params.pitch || this.params.rarity || this.params.cardType || this.params.cost;
            }
        },

        data() {
            return {
                openTray: false,
                params: {
                    cost: '',
                    class: '',
                    keywords: this.$route.query.keywords,
                    page: this.page,
                    pitch: '',
                    rarity: '',
                    cardType: ''
                }
            }
        },

        methods: {
            active(field) {
                if (this.params[field]) {
                    return 'shadow-active'
                }
            },

            filterCards: function() {
                if (this.refreshable) {
                    let params = this.params;

                    params.set = this.external.set;

                    this.$router.push({
                        path: this.$route.path,
                        query: params
                    });
                } else {
                    if (this.emptySearch()) {
                        this.$emit('search-completed', null);
                        return;
                    }
                }

                this.search();
            },

            newSearch: function() {
                this.params.page = 1;
                this.filterCards();
            },

            emptySearch: function() {
                return !this.params.keywords && !this.params.type && !this.params['class'];
            },

            search: function() {
                const params = this.buildSearchParams();

                axios.get('/cards/', {params: params}).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },

            buildSearchParams: function() {
                var params = this.$route.query;

                params.per_page = this.limit;

                return {...this.external, ...params, ...this.params};
            }
        },

        mounted() {
            if (this.wait) return;

            this.params.keywords = this.$route.query.keywords;
            this.params['class'] = this.$route.query['class'];
            this.params.cardType = this.$route.query.cardType;
            this.params.rarity = this.$route.query.rarity;

            this.search();
        },

        watch: {
            'external.set': function(external) {
                this.params.page = 1;
                this.filterCards();
            },

            'external.view': function(external) {
                this.params.page = 1;
                this.filterCards();
            },

            page: function(page) {
                this.params.page = page;
                this.filterCards();
            }
        },

        created: function() {
            this.debouncedFilterCards = _.debounce(this.filterCards, 750);
        }
    };
</script>
