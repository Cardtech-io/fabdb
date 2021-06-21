<template>
    <div class="md:float-left md:px-2 w-full lg:w-1/2 my-2 odd:bg-gray-100 rounded-full overflow-hidden">
        <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block flex items-center" :class="themeClasses()">
            <div class="flex-none">
                <hero-avatar :hero="hero" :name="deck.name" class="block sm:hidden" :width="80"></hero-avatar>
                <hero-avatar :hero="hero" :name="deck.name" class="hidden sm:block"></hero-avatar>
            </div>
            <div class="flex-auto ml-4">
                <h2 class="font-serif uppercase text-lg md:text-2xl overflow-hidden md:mb-1" style="max-height: 30px">{{ deck.name }}</h2>
                <div>
                    <span class="font-italic text-blue-600 mb-1" v-if="deck.totalPrice">${{ deck.totalPrice }}</span>
                    <span class="md:hidden italic">({{ deck.totalCards }} cards)</span>
                </div>
                <span class="inline-block flex">
                    <div>
                        <deck-label :label="deck.label" class="mr-2 text-xs px-2 sm:py-1 rounded-full"></deck-label>
                    </div>
                    <span v-if="deck.user.name">by {{ deck.user.name }}</span>
                    <span v-else>Anonymous</span>
                </span>
            </div>
            <div class="flex-none mx-10 font-serif text-center hidden md:block">
                <div class="text-4xl">{{ deck.totalCards }}</div>
                <div class="text-gray-500 ml-1">cards</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import Imagery from '../Utilities/Imagery';
    import DeckLabel from "./Viewing/Label";
    import HeroAvatar from "../Components/HeroAvatar";
    import Viewable from '../DeckBuilder/Viewable';

    export default {
        props: ['deck', 'theme'],
        mixins: [Imagery, Viewable],
        components: {HeroAvatar, DeckLabel},

        computed: {
            cards: function() {
                return this.deck.cards;
            }
        },

        methods: {
            themeClasses() {
                return this.theme === 'light' ? 'bg-bar hover:bg-bar-hover' : 'bg-semi-black hover:bg-black';
            }
        }
    };
</script>
