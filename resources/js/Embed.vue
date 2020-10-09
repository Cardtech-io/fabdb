<template>
    <div v-if="deck" style="max-width: 320px" class="m-4">
        <card-image :card="hero" class="mb-4"></card-image>

        <div v-if="weapons" class="mb-8">
            <h3 class="py-2 px-4 font-serif uppercase text-2xl">Weapons</h3>
            <ol>
                <li v-for="card in weapons" class="p-2 pl-4">
                    <deck-card :card="card" :collapse="true" :use-router="false"></deck-card>
                </li>
            </ol>
        </div>

        <div v-if="equipment.length" class="mb-8">
            <h3 class="py-2 px-4 font-serif uppercase text-2xl">Equipment</h3>
            <ol>
                <li v-for="card in equipment" class="p-2 pl-4">
                    <deck-card :card="card" :collapse="true" :use-router="false"></deck-card>
                </li>
            </ol>
        </div>

        <div v-if="other.length">
            <h3 class="py-2 px-4 font-serif uppercase text-2xl">Other</h3>
            <ol>
                <li v-for="card in other" class="p-2 pl-4">
                    <deck-card :card="card" :use-router="false"></deck-card>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import CardImage from "./CardDatabase/CardImage";
    import Cardable from "./CardDatabase/Cardable";
    import DeckCard from "./Decks/DeckCard";
    import Viewable from "./DeckBuilder/Viewable";

    export default {
        components: {CardImage, DeckCard},
        mixins: [Cardable, Viewable],

        data() {
            return {
                deck: null
            }
        },

        mounted() {
            let deckSlug = window.location.href.split('/').pop();

            axios.get('decks/' + deckSlug).then(response => {
                this.deck = response.data;
                this.cards = this.deck.cards;
            });
        }
    };
</script>
