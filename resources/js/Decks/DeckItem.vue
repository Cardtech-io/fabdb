<template>
    <div class="my-2 text-sm">
        <div class="rounded-lg overflow-hidden">
            <router-link :to="{ name: route, params: { deck: deck.slug } }" class="block" :class="themeClasses()">
                <div class="relative flex-none">
                    <div class="h-140 md:h-200" :style="{background: 'radial-gradient(transparent, rgba(0, 0, 0, 0.5)), url('+heroProfile(deck.hero, 250)+') top center', backgroundSize: 'cover'}"></div>
                    <div class="absolute top-0 w-full p-2">
                        <h3 class="text-white font-serif uppercase text-lg md:text-xl overflow-hidden" style="max-height: 30px">{{ deck.name }}</h3>
                        <div class="text-xs space-y-1">
                            <div><deck-label :label="deck.label" class="text-xs px-2 rounded-full"/></div>
                        </div>
                    </div>
                    <div class="absolute top-0 right-0 mt-2 mr-2" v-if="deck.notes" title="Deck has notes for play.">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div class="flex absolute bottom-0 w-full justify-between p-2">
                        <div v-if="deck.weapons.count()" class="flex items-center bg-nearly-white dark:bg-gray-300 rounded-lg p-0.5 space-x-1">
                            <img :src="squareThumbUrl(weapon.image, 55)" v-for="weapon in deck.weapons.all()" width="40" height="40" class="rounded">
                        </div>
                        <div class="flex space-x-2 font-serif items-end text-white pr-1">
                            <span v-if="deck.version > 1" class="mb-0.5 text-gray-400">[V.{{deck.version}}]</span>
                            <span class="text-2xl">${{ (deck.price / 100).toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
                <div class="p-2 space-y-2">
                    <div class="flex justify-between">
                        <div>by {{deck.authorName}}</div>
                        <div>{{ deck.updatedAt }}</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Imagery from '../Utilities/Imagery.js';
    import DeckLabel from "./Viewing/DeckLabel.vue";
    import FormatLabel from "./Viewing/FormatLabel.vue";
    import HeroAvatar from "../Components/HeroAvatar.vue";
    import Viewable from '../DeckBuilder/Viewable.js';
    import Deck from "./Deck.js";

    export default {
        props: {
            deck: {
                required: true,
                type: Deck
            },
            route: {
                type: String,
                default: 'decks.view'
            },
            theme: {
                type: String
            }
        },

        mixins: [Imagery, Viewable],
        components: {HeroAvatar, DeckLabel, FormatLabel},

        computed: {
            cards() {
                return this.deck.cards;
            }
        },

        methods: {
            themeClasses() {
                return this.theme === 'light' ? 'bg-gray-100 hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600' : 'bg-semi-black hover:bg-black';
            }
        }
    };
</script>
