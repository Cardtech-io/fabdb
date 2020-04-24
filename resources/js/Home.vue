<template>
    <div class="container px-4 sm:mx-auto sm:px-0 text-white flex flex-col">
        <div class="px-8 my-10 rounded-xl sm:mt-20">
            <h1 class="font-serif text-4xl lg:text-6xl uppercase">Welcome</h1>
        </div>
        <div class="px-8 pt-4 pb-8 bg-semi-black mb-8 rounded-xl">
            <p class="my-4">
                FaB DB is an unofficial Flesh and Blood TCG community project, with various features such as
                <router-link to="/decks/build/" class="link-white">deck builder</router-link>,
                <router-link to="/collection/" class="link-white">collection manager</router-link> and more.
            </p>

            <p class="my-4">
                FaB DB is run off community support through financial donations and subscriptions for various
                services. To find out more, visit our <router-link to="/support/" class="link-white">Support page</router-link>.
            </p>

            <div class="mt-8">
                <input type="text" v-model="keywords" class="input rounded-lg p-4" placeholder="Search for a card..." @keyup.enter="search()">
            </div>
        </div>
    </div>
</template>

<script>
    import LazyLoader from './Components/LazyLoader';
    import FeaturedArticle from './Content/FeaturedArticle.vue';
    import FeaturedCard from './Content/FeaturedCard.vue';
    import FeaturedDeck from './Content/FeaturedDeck.vue';
    import Strings from './Utilities/Strings';

    export default {
        mixins: [ Strings ],

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

        metaInfo() {
            return {
                meta: [
                    { keywords: 'Flesh and Blood TCG,TCG,deck builder,Flesh & Blood TCG,Flesh and Blood,Flesh and blood cards,Cards' },
                    { vmid: 'og:title', property: 'og:title', content: 'Flesh and Blood TCG deck builder, collection manager, and more!' },
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
