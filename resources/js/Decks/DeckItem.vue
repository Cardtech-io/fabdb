<template>
    <div class="md:float-left md:px-2 w-full lg:w-1/2 my-2">
        <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block flex items-center bg-gray-100 hover:bg-white rounded-full overflow-hidden">
            <div class="flex-none">
                <img :src="heroProfile(hero.name, 100)" :alt="deck.name" class="rounded-full">
            </div>
            <div class="flex-auto ml-4">
                <h2 class="font-serif uppercase text-2xl overflow-hidden" style="max-height: 30px">{{ deck.name }}</h2>
                <span v-if="deck.user.name">by {{ deck.user.name }}</span>
                <span v-else>Anonymous</span>
            </div>
            <div class="flex-1 mx-10 font-serif text-center">
                <div class="text-4xl">{{ deck.totalCards }}</div>
                <div class="text-gray-500 ml-1">cards</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import Viewable from '../DeckBuilder/Viewable';
    import Imagery from '../Utilities/Imagery';

    export default {
        props: ['deck'],
        mixins: [Imagery, Viewable],

        computed: {
            cards: function() {
                return this.deck.cards;
            }
        }
    };
</script>