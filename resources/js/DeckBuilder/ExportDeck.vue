<template>
    <div>
        <header-title title="Export deck"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto bg-white py-8 px-8">
                <div class="container sm:mx-auto border-b border-gray-400 mb-8">
                    <h1 class="inline-block font-serif text-4xl" v-if="hero">{{ hero.name }} ({{ deck.name }})</h1>
                </div>

                <div class="md:flex">
                    <div class="md:w-2/3 md:pr-8">
                        <div v-if="!exportRequested">
                            <p class="mb-4 p-4 bg-blue-500 rounded-lg text-white">
                                The information collected below is not saved, but is required for PDF export.
                            </p>

                            <form @submit.prevent="exportToPdf">
                                <div class="w-full mt-4">
                                    <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
                                    <input type="text" v-model="name" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                                </div>
                                <div class="w-full mt-4">
                                    <label class="block font-serif uppercase tracking-wide mb-1">GEM player ID</label>
                                    <input type="text" v-model="gemId" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                                </div>
                                <div class="w-full mt-4">
                                    <label class="block font-serif uppercase tracking-wide mb-1">Event</label>
                                    <input type="text" v-model="event" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                                </div>

                                <input type="submit" value="Export" class="appearance-none block w-full mt-8 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50">
                            </form>
                        </div>
                        <div v-else>
                            <p>Your deck export has been requested, and shall arrived at your email inbox in a few moments.</p>
                        </div>
                    </div>

                    <div class="hidden md:block md:w-1/3">
                        <img :src="cardUrl(hero.identifier, 350)" :alt="hero.name" class="w-full max-w-md rounded-xl" style="max-width: 350px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapGetters, mapActions } from 'vuex';

    import CardSelector from './CardSelector.vue';
    import Cardable from '../CardDatabase/Cardable.js';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from './Viewable';

    export default {
        components: {
            CardSelector,
            Crumbs,
            HeaderTitle
        },

        mixins: [ Cardable, Viewable ],

        computed: {
            ...mapGetters('session', ['user']),

            name: {
                get() {
                    return this.user.name;
                },

                set(name) {
                    this.setUserParam({ param: 'name', value: name });
                }
            },

            gemId: {
                get() {
                    return this.user.gemId;
                },

                set(gemId) {
                    this.setUserParam({ param: 'gemId', value: gemId });
                }
            },

            cards: function() {
                return this.deck.cards;
            },

            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Deck Builder', link: '/deck-builder/' + this.deck.slug },
                    { text: 'Export deck' },
                ]
            },
         },

        data() {
            return {
                deck: null,
                event: null,
                exportRequested: false
            }
        },

        methods: {
            ...mapActions('session', ['setUserParam']),

            exportToPdf: function() {
                const payload = {
                    name: this.name,
                    gemId: this.gemId,
                    event: this.event
                };

                axios.post('/export/' + this.deck.slug + '.pdf', payload).then(response => {
                    this.exportRequested = true;
                });
            }
        },

        metaInfo() {
            return {
                title: 'Deck builder - Export deck'
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.deck = response.data;
                })
            });
        })
    };
</script>
