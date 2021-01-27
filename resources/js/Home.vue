<template>
    <div class="sm:max-w-3/4 px-4 sm:mx-auto sm:px-0 text-white flex flex-col">
        <div class="mt-12 mb-6">
            <router-link to="/">
                <img src="/img/fabdb-logo.png" alt="FaB DB Logo" width="270" class="mx-auto">
            </router-link>
        </div>
        <div class="sm:mx-8 px-8 pt-4 pb-8 bg-semi-black mb-8 rounded-xl text-center">
            <p class="my-4">
                FaB DB is an unofficial <a href="https://fabtcg.com" target="_blank" class="link">Flesh and Blood TCG</a> community project, with various features such as
                <router-link :to="{ name: 'decks.mine' }" class="link">deck builder</router-link>,
                <router-link :to="{ name: 'collection' }" class="link">collection manager</router-link> and more.
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
    import LazyLoader from './Components/LazyLoader';
    import FeaturedArticle from './Content/FeaturedArticle.vue';
    import FeaturedCard from './Content/FeaturedCard.vue';
    import FeaturedDeck from './Content/FeaturedDeck.vue';
    import Strings from './Utilities/Strings';

    export default {
        mixins: [Strings],
        components: {Advertisement},

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
