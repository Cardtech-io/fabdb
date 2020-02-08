<template>
    <div class="container sm:mx-auto text-white lg:flex lg:my-20">
        <div class="px-4 py-8 lg:w-2/3">
            <h1 class="font-serif text-4xl lg:text-6xl uppercase">Welcome</h1>
            <p class="my-4">FaB DB is an unofficial Flesh & Blood TCG community project, with various features such as <router-link to="/decks/build/" class="underline hover:text-orange-300">deck builder</router-link>, <router-link to="/collection/" class="underline hover:text-orange-300">collection manager</router-link> and more.</p>
            <p class="my-4">FaB DB is run off community support through financial donations and subscriptions for various services. To find out more, visit our <router-link to="/support/" class="underline hover:text-orange-300">Support page</router-link>.</p>
        </div>

        <div class="mx-4 mb-8 bg-semi-black rounded-lg p-4" v-if="featured">
            <router-link :to="'/featured/' + featured.slug">
                <featured-deck :feature="featured" v-if="featured.isDeck"></featured-deck>
            </router-link>
        </div>
    </div>
</template>

<script>
    import LazyLoader from './Components/LazyLoader';
    import FeaturedDeck from './Content/FeaturedDeck.vue';

    export default {
        components: { FeaturedDeck },

        data() {
            return {
                featured: null
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