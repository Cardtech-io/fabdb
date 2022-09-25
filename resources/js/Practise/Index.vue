<template>
    <div>
        <header-title title="Limited practise"/>
        <breadcrumbs :crumbs="crumbs"/>

        <div class="main-body">
            <div class="container flex sm:mx-auto px-4 py-8">
                <div :class="{'w-1/2': practises.length}">
                    <p class="bg-white dark:bg-gray-800 p-4">
                        Each Limited Practise run will generate a number of packs, that can then be viewed
                        and saved for future reference. This will allow you to test with and build decks
                        based on the random nature of the booster packs, and even be able to practise
                        over and over with especially bad Limited drafts.
                    </p>
                    <div class="my-4 text-center">
                        <router-link :to="{ name: 'practise.setup', query: {format: 'draft'} }" class="inline-block mx-auto button-primary px-4 py-3 rounded-lg" tag="button">Draft practise</router-link>
                        <router-link :to="{ name: 'practise.setup', query: {format: 'sealed'} }" class="inline-block mx-auto button-primary px-4 py-3 rounded-lg" :class="{'button-disabled': !majestic}" :disabled="!majestic" tag="button">Sealed practise (Solo)</router-link>
                        <router-link :to="{ name: 'practise.setup', query: {format: 'team-sealed'} }" class="inline-block mx-auto button-secondary px-4 py-3 rounded-lg" :class="{'button-disabled': !legendary}" :disabled="!legendary" tag="button">Sealed practise (Team)</router-link>
                    </div>
                    <p class="p-4 italic">
                        Draft practise is open to all, whereas sealed practise is available to Majestic and Legendary supporters only.
                    </p>
                </div>
                <div class="w-1/2 pl-4" v-if="practises.length">
                    <h2 class="font-serif uppercase text-xl mb-2">Previous practise runs</h2>
                    <ul>
                        <li v-for="practise in practises" class="flex odd:bg-white dark:odd:bg-gray-800 p-4">
                            <div class="w-4/5">
                                <router-link :to="{name: 'practise.view', params: {practise: practise.slug}}" class="link-alternate">{{when(practise.createdAt)}}</router-link> ({{practise.set.name}})
                            </div>
                            <div class="w-1/5 text-right">
                                <format :format="practise.format"></format>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import moment from 'moment';
    import {mapGetters} from 'vuex';
    import Format from "./Format.vue";
    import LazyLoader from "../Components/LazyLoader.js";

    export default {
        components: {Format},

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Limited practise' }
                ],
                practises: {}
            }
        },

        computed: {
            ...mapGetters('session', ['majestic', 'legendary'])
        },

        methods: {
            when(date) {
                return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/practise').then(response => {
                callback(function() {
                    this.practises = response.data.data;
                });
            });
        })
    }
</script>
