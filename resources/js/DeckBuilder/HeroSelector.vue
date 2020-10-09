<template>
    <div>
        <ol class="clearfix my-8">
            <li v-for="hero in heroes" class="float-left w-full sm:w-1/3 md:w-1/4 lg:w-1/6 mb-8">
                <button class="block cursor-pointer mx-auto" @click.prevent="addToDeck(hero)">
                    <hero-avatar :hero="hero" :name="hero.name" :width="150"></hero-avatar>
                    <div class="flex -mt-5">
                        <div class="w-1/2 flex justify-end mr-2">
                            <span class="text-lg">{{ hero.stats.intellect }}</span>
                            <img src="/img/intellect.png" class="block h-10 ml-1 border-2 border-gray-200 rounded-full">
                        </div>
                        <div class="w-1/2 flex ml-2 ">
                            <img src="/img/life.png" class="block h-10 mr-1 border-2 border-gray-200 rounded-full">
                            <span class="text-lg">{{ hero.stats.life }}</span>
                        </div>
                    </div>
                </button>
                <div class="mt-4 text-center font-serif uppercase text-lg overflow-hidden" style="max-height: 20px">{{ hero.name }}</div>
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
    import Strings from '../Utilities/Strings';

    export default {
        components: {HeroAvatar},
        mixins: [ManagesDecks, Strings],

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
