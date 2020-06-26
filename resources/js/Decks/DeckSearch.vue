<template>
    <form class="px-4 md:px-0 block flex" @submit.prevent="newSearch">
        <div class="w-2/3 pr-4">
            <select v-model="hero" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" :class="active('hero')">
                <option value="">Select hero</option>
                <option value="ARC038">Azalea</option>
                <option value="WTR038">Bravo</option>
                <option value="ARC001">Dash</option>
                <option value="WTR113">Dorinthea</option>
                <option value="ARC113">Kano</option>
                <option value="WTR076">Katsu</option>
                <option value="WTR001">Rhinar</option>
                <option value="ARC075">Viserai</option>
            </select>
        </div>

        <div class="w-1/3">
            <input type="submit" value="Search" class="appearance-none block w-full bg-blue-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500">
        </div>
    </form>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapState } from 'vuex';

    export default {
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
        },

        methods: {
            ...mapActions('deckSearch', ['setPage', 'updateParam']),

            active(field) {
                if (this.params[field]) {
                    return 'shadow-active'
                }
            },

            search: function() {
                const params = {
                    hero: this.hero,
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
        }
    };
</script>