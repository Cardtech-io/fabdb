<template>
    <div>
        <div v-if="decks">
            <deck-item v-for="deck in decks.data" :deck="deck" :key="deck.slug" theme="dark"></deck-item>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import DeckItem from "./DeckItem";
    import LazyLoader from "../Components/LazyLoader";

    export default {
        components: {DeckItem},

        props: ['user'],

        data() {
            return {
                decks: {}
            }
        },

        metaInfo() {
            let title = this.user.name + '\'s decks for Flesh & Blood TCG';

            return {
                title: title,
                meta: [
                    { vmid: 'description', name: 'description', content: title },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: title }
                ]
            };
        },

        mounted() {
            axios.get('/decks/latest?user='+this.user.slug).then(response => {
                this.decks = response.data;
            });
        }
    }
</script>
