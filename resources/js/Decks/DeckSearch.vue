<template>
    <form class="px-4 md:px-0 block flex flex-wrap w-full" @submit.prevent="requestSearch">
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
    import Submit from "../Components/Form/Submit.vue";
    import Search from "../Components/Search";

    export default {
        components: {Submit},
        extends: Search,

        props: {
            mine: {
                type: Boolean,
                default: false
            }
        },

        data: () => ({
            heroes: []
        }),

        created() {
            axios.get('/cards/heroes').then(response => {
                this.heroes = response.data;
            });
        }
    };
</script>
