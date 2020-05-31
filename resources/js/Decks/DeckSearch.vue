<template>
    <form class="block flex" @submit.prevent="newSearch">
        <div class="w-2/3">
            <select v-model="hero" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-r-none">
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
            <input type="submit" value="Search" class="appearance-none block w-full bg-blue-700 text-white rounded-r-lg py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500">
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
        }
    };
</script>