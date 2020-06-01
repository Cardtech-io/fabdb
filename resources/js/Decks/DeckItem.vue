<template>
    <div class="float-left px-2 w-full lg:w-1/2 my-2">
        <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block flex items-center bg-gray-100 hover:bg-white rounded-full overflow-hidden">
            <div class="flex-0">
                <img :src="heroProfile(hero.name, 100)" :alt="deck.name" class="rounded-full">
            </div>
            <div class="flex-auto ml-4">
                <h2 class="font-serif uppercase text-2xl -mb-1">{{ deck.name }}</h2>
                <span v-if="deck.user.name">by {{ deck.user.name }}</span>
                <soan v-else>Anonymous</soan>
            </div>
            <div class="flex-0 mx-10 font-serif">
                <span class="text-4xl">{{ deck.totalCards }}</span>
                <span class="text-gray-500 ml-1">cards</span>
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