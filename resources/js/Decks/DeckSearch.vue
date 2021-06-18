<template>
    <form class="px-4 md:px-0 block flex w-full" @submit.prevent="newSearch">
        <div class="sm:w-2/6 pr-2">
            <select v-model="hero" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('hero')">
                <option value="">Select hero</option>
                <option :value="hero.name" v-for="hero in heroes">{{ hero.name }}</option>
            </select>
        </div>

        <div class="sm:w-1/6 pr-2">
            <select v-model="format" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('format')">
                <option value="">Format</option>
                <option value="blitz">Blitz</option>
                <option value="constructed">Constructed</option>
                <option value="open">Open</option>
            </select>
        </div>

        <div class="sm:w-1/6 pr-2">
            <select v-model="label" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('label')">
                <option value="">Label</option>
                <option v-for="(name, label) in $settings.game.decks.labels" :value="label">{{name}}</option>
            </select>
        </div>

        <div class="sm:w-1/6 pr-2">
            <select v-model="order" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('order')">
                <option value="">Order</option>
                <option value="newest">Newest</option>
                <option value="popular">Popular</option>
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

        data() {
            return {
                heroes: []
            }
        },

        computed: {
            ...mapState('deckSearch', ['params']),

            format: {
                get() {
                    return this.params.format || '';
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
            ...mapActions('deckSearch', ['setPage', 'updateParam']),

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
                    format: this.format,
                    page: this.params.page
                };

                axios.get('/decks/', { params: params }).then(response => {
                    this.$emit('search-completed', response.data);
                }).catch(error => {});
            },

            newSearch: function() {
                this.setPage({ page: 1 });
                this.search();
            },
        },

        watch: {
            'params.page': function() {
                this.search();
            }
        },

        created() {
            axios.get('/cards/heroes').then(response => {
                this.heroes = response.data;
            });

            this.search();
        }
    };
</script>
