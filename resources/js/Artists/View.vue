<template>
    <div class="flex flex-col h-full pb-8">
        <div class="container sm:mx-auto hidden sm:block">
            <div class="p-4 md:py-8">
                <h1 class="font-serif text-white text-4xl uppercase">The artwork of {{ artist.name }}</h1>
            </div>
        </div>

        <div class="flex-grow container mx-auto px-4 sm:flex sm:items-stretch mt-4 sm:mt-0">
            <div class="mr-4 rounded-xl bg-nearly-black overflow-hidden w-full sm:w-300">
                <img :src="artist.image" alt="" class="w-full">
                <p class="text-white p-4">
                    {{artist.blurb}}
                </p>
            </div>
            <div class="sm:w-3/4 sm:flex-grow rounded-xl overflow-hidden mt-4 sm:-mt-2">
                <ul class="flow-root -mx-2">
                    <card-item v-for="card in artist.cards" :card="card" :key="card.identifier" path="/cards" class="float-left p-2 w-1/2 md:w-1/4 xl:w-1/5 mb-4"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import CardItem from "../CardDatabase/CardItem.vue";
    import Crumbs from "../Components/Crumbs.vue";
    import LazyLoader from "../Components/LazyLoader.js";

    export default {
        components: {CardItem, Crumbs},

        data: () => ({ artist: null }),

        computed: {
            crumbs() {
                return [
                    { text: 'Home', link: '/' },
                    { text: this.artist.name },
                ];
            }
        },

        metaInfo() {
            let title = 'The artwork of '+this.artist.name;
            let description = 'View Flesh & Blood card artwork designed by '+this.artist.name+' for Flesh & Blood TCG.';

            return {
                title: title,
                meta: [
                    { vmid: 'description', name: 'description', content: description },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: description },
                    { vmid: 'og:image', property: 'og:image', content: this.artist.image },
                    { vmid: 'og:image:width', property: 'og:image:width', content: '300' },
                    { vmid: 'og:image:height', property: 'og:image:height', content: '300' }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/artists/' + to.params.artist).then(response => {
                callback(function() {
                    this.artist = response.data;
                })
            });
        })
    }
</script>
