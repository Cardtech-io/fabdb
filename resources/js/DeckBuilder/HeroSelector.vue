<template>
    <div>
        <ol class="clearfix my-4">
            <li v-for="hero in heroes" class="float-left w-full sm:w-1/3 md:w-1/4 lg:w-1/6 mb-8">
                <button class="block cursor-pointer mx-auto" @click.prevent="addToDeck(hero)">
                    <hero-avatar :hero="hero" :name="hero.name" :width="150"></hero-avatar>
                </button>
                <div class="mt-2 text-center font-serif uppercase text-lg overflow-hidden" style="max-height: 20px">{{ hero.name }}</div>
                <div class="mt-2 text-center">{{ type(hero) }}</div>
            </li>
        </ol>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapActions } from 'vuex';
    import HeroAvatar from "../Components/HeroAvatar";
    import ManagesDecks from "./ManagesDecks";

    export default {
        components: {HeroAvatar},
        mixins: [ManagesDecks],

        data() {
            return {
                heroes: []
            }
        },

        methods: {
            ...mapActions('deck', ['addCard', 'setMode']),
            ...mapActions('messages', ['addMessage']),

            addToDeck(card) {
                this.addRemote(card, response => {
                    this.addCard({card});
                    this.setMode({mode: 'search'});
                });
            },

            type(hero) {
                return hero.keywords[2] == 'young' ? 'Blitz' : 'Constructed'
            }
        },

        mounted() {
            axios.get('/cards/heroes').then(response => {
                this.heroes = response.data;
            });
        }
    }
</script>
