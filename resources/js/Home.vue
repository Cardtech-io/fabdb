<template>
    <div class="container sm:mx-auto text-white lg:flex lg:py-20">
        <div class="px-4 py-8 lg:w-2/3" :class="featured ? 'w-full' : ''">
            <h1 class="font-serif text-4xl lg:text-6xl uppercase">Welcome</h1>
            <p class="my-4">FaB DB is an unofficial Flesh and Blood TCG community project, with various features such as <router-link to="/decks/build/" class="underline hover:text-orange-300">deck builder</router-link>, <router-link to="/collection/" class="underline hover:text-orange-300">collection manager</router-link> and more.</p>
            <p class="my-4">FaB DB is run off community support through financial donations and subscriptions for various services. To find out more, visit our <router-link to="/support/" class="underline hover:text-orange-300">Support page</router-link>.</p>
        </div>

        <div class="mx-4 lg:w-1/3" v-if="featured">
            <div class="mb-8 bg-semi-black rounded-lg p-4">
                <featured-deck :feature="featured" v-if="featured.isDeck"></featured-deck>
                <featured-card :feature="featured" v-if="featured.isCard"></featured-card>
                <featured-article :feature="featured" v-if="featured.isArticle"></featured-article>
            </div>
        </div>

        <div class="px-4 w-full lg:w-3/4 lg-my-10" v-else>
            <div class="bg-semi-black rounded-lg p-4">
                <h1 class="font-serif text-white text-4xl uppercase px-4">Features</h1>
                <ol class="text-white">
                    <li>
                        <router-link to="/cards/browse/">
                        <span class="inline-block hover:bg-black hover:text-orange-300 rounded-lg p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="block float-left fill-current w-10 h-10 mt-1 mr-4">
                                <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"/>
                            </svg>

                            Browse the entire Flesh & Blood card collection right here, using it as a basis to manage your own card collection,
                            or add to that tournament-winning deck!
                        </span>
                        </router-link>
                    </li>

                    <li class="mt-4">
                        <router-link to="/collection/">
                        <span class="inline-block hover:bg-black hover:text-orange-300  rounded-lg p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="block float-left fill-current w-10 h-10 mt-1 mr-4">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                            </svg>

                            Manage your collection by adding and removing cards, recording the foils and promos you own, and share what you are
                            looking for, or willing to trade!
                        </span>
                        </router-link>
                    </li>

                    <li class="mt-4">
                        <router-link to="/decks/build/">
                        <span class="inline-block hover:bg-black hover:text-orange-300  rounded-lg p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="block float-left fill-current w-10 h-10 mt-1 mr-4">
                                <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/>
                            </svg>

                            Craft decks by selecting your hero, weapons & equipment and the cards they'll
                            need in battle. Finally, when you're ready, export the deck to an officially supported PDF format for tournaments!
                        </span>
                        </router-link>
                    </li>
                </ol>
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
        components: { FeaturedArticle, FeaturedCard, FeaturedDeck },

        data() {
            return {
                featured: null
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
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/featured/top').then(response => {
                callback(function() {
                    this.featured = response.data;
                })
            });
        })
    };
</script>
