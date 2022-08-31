<template>
    <form class="px-4 md:px-0 block flex w-full" @submit.prevent="newSearch">
        <div class="sm:w-2/6 pr-1">
            <select v-model="hero" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg" :class="active('hero')">
                <option value="">Select hero</option>
                <option :value="hero.name" v-for="hero in heroes">{{ hero.name }}</option>
            </select>
        </div>

        <div class="sm:w-1/6 pr-1">
            <select v-model="format" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg" :class="active('format')">
                <option value="">Format</option>
                <option v-for="(name, format) in $settings.game.decks.formats" :value="format">{{name}}</option>
            </select>
        </div>

        <div class="sm:w-1/6 pr-1">
            <select v-model="label" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg" :class="active('label')">
                <option value="">Label</option>
                <option value="tournament">Tournament</option>
                <option v-for="(name, label) in $settings.game.decks.labels" :value="label">{{name}}</option>
            </select>
        </div>

        <div class="sm:w-1/6 pr-1">
            <select v-model="order" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg" :class="active('order')">
                <option value="">Order</option>
                <option value="newest">Newest</option>
                <option value="popular-all">Popular (All time)</option>
                <option value="popular-7">Popular (Last 7 days)</option>
            </select>
        </div>

        <div class="sm:w-1/6">
            <submit text="Search" class="w-full"></submit>
        </div>
    </form>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapState } from 'vuex';

    import Submit from "../Components/Form/Submit";

    export default {
        components: {Submit},

        props: {
            mine: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                heroes: []
            }
        },

        computed: {
            ...mapState('deckSearch', ['params']),

            format: {
                get() {
                    return this.params.format || 'constructed';
                },

                set(value) {
                    this.updateParam({ key: 'format', value: value });
                }
            },

            hero: {
                get() {
                    return this.params.hero || '';
                },

                set(value) {
                    this.updateParam({ key: 'hero', value: value });
                }
            },

            label: {
                get() {
                    return this.params.label || '';
                },

                set(value) {
                    this.updateParam({ key: 'label', value: value });
                }
            },

            order: {
                get() {
                    return this.params.order || 'newest';
                },

                set(value) {
                    this.updateParam({ key: 'order', value: value });
                }
            },
        },

        methods: {
            ...mapActions('deckSearch', ['setCursor', 'updateParam']),

            active(field) {
                if (this.params[field]) {
                    return 'shadow-activeNumber'
                }
            },

            search: function() {
                const params = {
                    hero: this.hero,
                    order: this.order,
                    label: this.label,
                    format: this.format
                };

                if (this.params.cursor) {
                    params.cursor = this.params.cursor;
                }
                if (this.params.page) {
                    params.page = this.params.page;
                }

                let url = this.mine ? '/decks/mine' : '/decks';

                if (!this.mine) {
                    params.include = 'weapons';
                }

                axios.get(url, { params: params }).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },

            newSearch() {
                this.setCursor({ cursor: null });
                this.search();
            },
        },

        watch: {
            'params.cursor': function(value) {
                this.search();
            }
        },

        created() {
            axios.get('/cards/heroes').then(response => {
                this.heroes = response.data;
            });

            this.search();

            this.$on('refresh', this.search);
        }
    };
</script>
