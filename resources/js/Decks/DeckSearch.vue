<template>
    <form class="px-4 md:px-0 block flex flex-wrap w-full" @submit.prevent="newSearch">
        <div class="w-full sm:w-1/2 md:w-2/6 sm:pb-1 md:pb-0 sm:pr-1">
            <select v-model="params.hero" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg">
                <option value="">Select hero</option>
                <option :value="hero.name" v-for="hero in heroes">{{ hero.name }}</option>
            </select>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/6 sm:pb-1 md:pb-0 md:pr-1">
            <select v-model="params.format" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg">
                <option value="">Format</option>
                <option v-for="(name, format) in $settings.game.decks.formats" :value="format">{{name}}</option>
            </select>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/6 sm:pb-1 md:pb-0 sm:pr-1">
            <select v-model="params.label" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg">
                <option value="">Label</option>
                <option value="tournament">Tournament</option>
                <option v-for="(name, label) in $settings.game.decks.labels" :value="label">{{name}}</option>
            </select>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/6 sm:pb-1 md:pb-0 md:pr-1">
            <select v-model="params.order" class="input appearance-none outline-none focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg">
                <option value="">Order</option>
                <option value="newest">Newest</option>
                <option value="popular-all">Popular (All time)</option>
                <option value="popular-7">Popular (Last 7 days)</option>
            </select>
        </div>

        <div class="w-full md:w-1/6">
            <submit text="Search" class="w-full"/>
        </div>
    </form>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapState } from 'vuex';
    import deckSearch from "../Store/DeckSearch";
    import Submit from "../Components/Form/Submit.vue";
    import Query from "../Utilities/Query";

    export default {
        components: {Submit},
        mixins: [Query],

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

        setup() {
            const store = deckSearch()

            return {
                params: store.params,
            }
        },

        methods: {
            ...mapActions('deckSearch', ['setCursor', 'updateParam']),

            search() {
                this.updateQuery(this.params);
                // const params = {
                //     hero: this.hero,
                //     order: this.order,
                //     label: this.label,
                //     format: this.format
                // };
                //
                // if (this.params.cursor) {
                //     params.cursor = this.params.cursor;
                // }
                // if (this.params.page) {
                //     params.page = this.params.page;
                // }
                //
                // let url = this.mine ? '/decks/mine' : '/decks';
                //
                // if (!this.mine) {
                //     params.include = 'weapons';
                // }
                //
                // axios.get(url, { params: params }).then(response => {
                //     this.$emit('search-completed', response.data);
                // }).catch(error => {});
            },

            newSearch() {
                // this.setCursor({ cursor: null });
                this.search();
            },
        },

        created() {
            this.params = this.$route.query;

            axios.get('/cards/heroes').then(response => {
                this.heroes = response.data;
            });
        },
    };
</script>
