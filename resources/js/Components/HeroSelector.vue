<template>
    <ol class="flex flex-wrap my-8">
        <li v-for="hero in heroes" class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-8">
            <button class="block cursor-pointer mx-auto" @click.prevent="selectHero(hero)">
                <hero-avatar :hero="hero" :name="hero.name" :width="150"/>
                <div class="flex -mt-5">
                    <div class="w-1/2 flex justify-end mr-2">
                        <span class="text-lg">{{ hero.stats.intellect }}</span>
                        <img src="@/images/intellect.png" class="block h-10 ml-1 border-2 border-gray-200 rounded-full">
                    </div>
                    <div class="w-1/2 flex ml-2 ">
                        <img src="@/images/life.png" class="block h-10 mr-1 border-2 border-gray-200 rounded-full">
                        <span class="text-lg">{{ hero.stats.life }}</span>
                    </div>
                </div>
            </button>
            <div class="mt-4 text-center font-serif uppercase text-lg overflow-hidden" style="max-height: 20px">{{ hero.name }}</div>
            <div class="mt-2 text-center">{{ type(hero) }}</div>
        </li>
    </ol>
</template>

<script>
    import axios from 'axios';
    import HeroAvatar from "./HeroAvatar.vue";
    import Strings from '../Utilities/Strings.js';
    import Models from "../Utilities/Models.js";
    import Card from "../CardDatabase/Card.js";

    export default {
        props: ['deck'],
        components: {HeroAvatar},
        mixins: [Strings],

        data() {
            return {
                availableHeroes: []
            }
        },

        computed: {
            heroes() {
                if (this.deck && this.deck.practise) {
                    return this.availableHeroes.filter(hero => {
                        return hero.young() && hero.sku.set.id === this.deck.practise.set.id;
                    })
                }

                return this.availableHeroes;
            }
        },

        methods: {
            selectHero(hero) {
                let card = hero.fields;

                this.$emit('hero-selected', card, this.type(card));
                this.$eventHub.$emit('hero-selected', card, this.type(card));
            },

            type(hero) {
                return hero.keywords.indexOf('young') !== -1 ? 'Blitz' : 'Constructed';
            }
        },

        mounted() {
            axios.get('/cards/heroes').then(response => {
                this.availableHeroes = Models.hydrateMany(response.data, Card);
            });
        }
    }
</script>
