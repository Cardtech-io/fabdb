<template>
    <div class="px-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 my-2 text-sm">
        <div class="rounded-deck overflow-hidden">
            <router-link :to="{ name: route, params: { deck: deck.slug } }" class="block min-h-345px" :class="themeClasses()">
                <div class="relative flex-none">
                    <hero-avatar :hero="deck.hero" :name="deck.name" :width="250" class="w-full"/>
                    <div class="absolute bottom-0 left-0 ml-2 mb-2" v-if="deck.notes" title="Deck has notes for play.">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div class="absolute bottom-0 right-0 mr-2 mb-2">
                        <span class="font-serif text-4xl white-stroke">{{ deck.totalCards }}</span>
                    </div>
                </div>
                <div class="mx-4 mb-4 mt-2 space-y-2">
                    <h2 class="font-serif uppercase text-lg md:text-xl overflow-hidden" style="max-height: 30px">{{ deck.name }}</h2>
                    <div>
                        <div>by {{deck.authorName}}</div>
                        <div class="font-italic text-blue-600" v-if="deck.totalPrice">${{ deck.totalPrice }}</div>
                        <div>{{ deck.updatedAt }}</div>
                    </div>
                    <div class="inline-block">
                        <div class="space-y-1">
                            <format-label :format="deck.format" class="text-xs rounded-full px-2"/>
                            <deck-label :label="deck.label" class="text-xs px-2 rounded-full"/>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Imagery from '../Utilities/Imagery';
    import DeckLabel from "./Viewing/DeckLabel";
    import FormatLabel from "./Viewing/FormatLabel";
    import HeroAvatar from "../Components/HeroAvatar";
    import Viewable from '../DeckBuilder/Viewable';
    import Deck from "./Deck";

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
                return this.theme === 'light' ? 'bg-gray-100 hover:bg-white' : 'bg-semi-black hover:bg-black';
            }
        }
    };
</script>
