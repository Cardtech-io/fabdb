<template>
    <div class="container px-4 sm:mx-auto sm:px-0 text-white">
        <header-title title="The fabled cards of Flesh & Blood" class="text-center"></header-title>
        <div class="sm:mx-4 mt-4 sm:mt-0">
            <div v-for="card in cards" class="w-full mb-8 p-4 sm:pr-0 bg-semi-black rounded-xl sm:flex">
                <div class="sm:w-1/4">
                    <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }">
                        <card-image :card="card"></card-image>
                    </router-link>
                </div>
                <div class="mt-4 sm:mt-0 sm:w-3/4">
                    <h1 class="font-serif uppercase text-4xl sm:text-6xl sm:pl-8">{{ card.name }}</h1>

                    <p class="bg-semi-black font-serif text-gray-300 -mx-4 sm:mx-0 italic p-4 sm:px-8 mb-4">'{{ card.flavour }}</p>

                    <p v-html="prettyText(card.text)" class="sm:px-8"></p>

                    <p v-html="prettyText(card.comments)" class="sm:mt-8 sm:mb-4 sm:px-8 pl-4 sm:pl-12 text-gray-400 text-base"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import Cardable from './Cardable.js';
    import CardImage from './CardImage.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Pricing from './Pricing.vue';
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [ Cardable, Strings ],

        components: {
            CardImage,
            HeaderTitle,
            Pricing
        },

        data() {
            return {
                cards: []
            }
        },

        methods: {

        },

        metaInfo() {
            return {
                title: 'The fabled cards of Flesh & Blood.',
                meta: [
                    { vmid: 'description', name: 'description', content: 'Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell.' },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: 'The fabled cards of Flesh & Blood.' },
                    { vmid: 'og:description', property: 'og:description', content: 'Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell.' }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/cards/fabled').then(response => {
                callback(function() {
                    this.cards = response.data;
                })
            });
        })
    }
</script>