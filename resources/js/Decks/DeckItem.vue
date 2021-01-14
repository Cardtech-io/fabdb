<template>
    <div class="md:float-left md:px-2 w-full lg:w-1/2 my-2">
        <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block flex items-center rounded-full overflow-hidden" :class="themeClasses()">
            <div class="flex-none">
                <hero-avatar :hero="hero" :name="deck.name"></hero-avatar>
            </div>
            <div class="flex-auto ml-4">
                <h2 class="font-serif uppercase text-2xl overflow-hidden" style="max-height: 30px">{{ deck.name }}</h2>
                <span class="block font-italic text-blue-600" v-if="deck.totalPrice">${{ deck.totalPrice }}</span>
                <span v-if="deck.user.name">by {{ deck.user.name }}</span>
                <span v-else>Anonymous</span>
            </div>
            <div class="flex-none mx-10 font-serif text-center">
                <div class="text-4xl">{{ deck.totalCards }}</div>
                <div class="text-gray-500 ml-1">cards</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import Imagery from '../Utilities/Imagery';
    import HeroAvatar from "../Components/HeroAvatar";
    import Viewable from '../DeckBuilder/Viewable';

    export default {
        props: ['deck', 'theme'],
        mixins: [Imagery, Viewable],
        components: {HeroAvatar},

        computed: {
            cards: function() {
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
