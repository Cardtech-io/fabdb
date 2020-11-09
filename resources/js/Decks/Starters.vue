<template>
    <div>
        <header-title title="Starter decks"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 py-8">
                <div v-for="deck in decks"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "../Components/Breadcrumbs";
    import HeaderTitle from "../Components/HeaderTitle";
    import LazyLoader from "../Components/LazyLoader";
    import Models from "../Utilities/Models";
    import Deck from "./Deck";

    export default {
        components: {Breadcrumbs, HeaderTitle},

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Starter decks' }
                ],

                decks: []
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/starters').then(response => {
                callback(function(){
                    this.decks = Models.hydrate(response.data, Deck);
                })
            });
        })
    };
</script>
