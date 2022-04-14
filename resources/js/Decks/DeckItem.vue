<template>
    <div class="md:px-2 w-full my-2 text-sm">
        <div class="rounded-full overflow-hidden">
            <router-link :to="{ name: route, params: { deck: deck.slug } }" class="block flex items-center" :class="themeClasses()">
                <div class="relative flex-none">
                    <hero-avatar :hero="deck.hero" :name="deck.name" class="block sm:hidden" :width="80"/>
                    <hero-avatar :hero="deck.hero" :name="deck.name" class="hidden sm:block" :width="80"/>
                    <div class="absolute bottom-0 left-0 ml-2 mb-2" v-if="deck.notes">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                </div>
                <div class="flex-auto ml-4">
                    <h2 class="font-serif uppercase text-lg md:text-2xl overflow-hidden md:mb-1" style="max-height: 30px">{{ deck.name }}</h2>
                    <div>
                        <span class="font-italic text-blue-600 mb-1" v-if="deck.totalPrice">${{ deck.totalPrice }}</span>
                        <span class="md:hidden italic">({{ deck.totalCards }} cards)</span>
                    </div>
                    <div>
                        {{ deck.updatedAt }}
                    </div>
                    <div class="inline-block flex">
                        <div class="space-x-1 mr-2">
                            <format-label :format="deck.format" class="text-xs rounded-full px-2 sm:py-1"/>
                            <deck-label :label="deck.label" class="text-xs px-2 sm:py-1 rounded-full"/>
                        </div>
                        <span>by {{deck.authorName}}</span>
                    </div>
                </div>
                <div class="flex-none mx-10 font-serif text-center hidden md:block">
                    <div class="text-4xl">{{ deck.totalCards }}</div>
                    <div class="text-gray-500 ml-1">cards</div>
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
