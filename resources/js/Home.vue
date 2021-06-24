<template>
    <div class="container px-4 sm:px-0 sm:mx-auto text-white flex flex-col">
        <div class="mt-12 mb-6">
            <router-link to="/">
                <img src="/img/fabdb-logo.png" alt="FaB DB Logo" width="270" height="113" class="mx-auto">
            </router-link>
        </div>
        <div class="sm:mx-8 px-8 pt-4 pb-8 bg-semi-black rounded-xl text-center text-gray-100">
            <p class="my-4">
                FaB DB is an unofficial <a href="https://fabtcg.com" target="_blank" class="link">Flesh and Blood TCG</a> community project, with various features such as
                <router-link :to="{ name: 'decks.mine' }" class="link">{{lang.terms.deck_builder}}</router-link>,
                <router-link :to="{ name: 'collection' }" class="link">{{lang.terms.collection_manager}}</router-link> and more.
            </p>

            <div class="my-8">
                <input type="text" ref="search" v-model="keywords" class="input rounded-lg p-4" placeholder="Search for a card..." @keyup.enter="search()">
            </div>

            <p class="my-4 text-center">
                FaB DB is powered by community support through financial donations and subscriptions for various
                services.<br>
                To find out more, visit our <router-link :to="{ name: 'support' }" class="link">Support page</router-link>.
            </p>
        </div>
        <div class="my-4 bg-nearly-black text-gray-300 sm:mx-auto p-2 px-4 rounded-lg flex items-center">
            <icon :size="6" class="mr-4 text-orange-500">
                <path d="M10 0s8 7.58 8 12a8 8 0 11-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0010 6V0zM8 0a3 3 0 100 6V0z"/>
            </icon>
            <div v-html="lang.home.rathe_times"></div>
        </div>

        <div class="my-4">
            <mq-layout mq="sm">
                <advertisement :width="340" :height="340" :zone="107317"></advertisement>
            </mq-layout>
            <mq-layout mq="md+">
                <advertisement :width="728" :height="90" :zone="107209" class="mx-auto"></advertisement>
            </mq-layout>
        </div>
    </div>
</template>

<script>
    import Advertisement from "./Components/Advertisement";
    import Icon from "./Components/Icon";
    import Strings from './Utilities/Strings';

    export default {
        mixins: [Strings],
        components: {Advertisement, Icon},

        data() {
            return {
                keywords: ''
            }
        },

        methods: {
            search: function() {
                this.$router.push({ name: 'cards.browse', query: { keywords: this.keywords }});
            }
        },

        mounted() {
            this.$refs.search.focus();
        },

        metaInfo() {
            return {
                meta: [
                    { keywords: 'Flesh and Blood TCG,TCG,deck builder,Flesh & Blood TCG,Flesh and Blood,Flesh and blood cards,Cards' },
                    { vmid: 'og:title', property: 'og:title', content: 'Flesh and Blood TCG, deck builder, collection manager and more!' },
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:description', property: 'og:description', content: 'Browse your Flesh and Blood cards, manage your decks, test your latest builds and more - all within a gorgeous user experience. By players, for players.' },
                    { vmid: 'og:image', property: 'og:image', content: 'https://' + this.imageDomain() + '/assets/fab-facebook-logo.png?w=210&h=202' },
                    { vmid: 'og:width', property: 'og:width', content: 210 },
                    { vmid: 'og:height', property: 'og:height', content: 202 }
                ]
            }
        }
    };
</script>
