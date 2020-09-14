<template>
    <form class="px-4 md:px-0 block flex" @submit.prevent="newSearch">
        <div class="w-2/4 pr-4">
            <select v-model="hero" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('hero')">
                <option value="">Select hero</option>
                <option :value="hero.identifier" v-for="hero in heroes">{{ hero.name }}</option>
            </select>
        </div>

        <div class="w-1/4 pr-4">
            <select v-model="order" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('order')">
                <option value="">Order</option>
                <option value="newest">Newest</option>
                <option value="popular">Popular</option>
            </select>
        </div>

        <div class="w-1/4">
            <submit text="Search"></submit>
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

            hero: {
                get() {
                    return this.params.hero || '';
                },

                set(value) {
                    this.updateParam({ key: 'hero', value: value });
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
