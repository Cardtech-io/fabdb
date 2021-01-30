<template>
    <div class="flex">
        <div class="w-1/5">
            <card-image :card="tester.hero" class="pr-4"></card-image>
        </div>

        <div class="w-1/3 mx-4">
            <h2 class="uppercase font-serif text-xl mb-2">Deck</h2>
            <div class="rounded-xl border border-gray-400 p-4">
                <div v-for="card in tester.cards" class="group flex items-center bg-gray-300 hover:bg-gray-100 overflow-auto rounded-lg text-base mb-1 cursor-pointer">
                    <div class="pl-4"><colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource"></colour></div>
                    <div class="p-2">{{ card.name }} ({{ card.total }})</div>
                    <div class="px-4 ml-auto">
                        <icon :size="5" class="group-hover:text-gray-500">
                            <path d="M10 7H2v6h8v5l8-8-8-8v5z"/>
                        </icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-1/3 mx-4">
            <h2 class="uppercase font-serif text-xl mb-2">Sideboard</h2>

            <div class="rounded-xl border border-gray-400 p-4">
                <div v-for="card in tester.sideboard" class="group flex items-center bg-gray-300 hover:bg-gray-100 overflow-auto rounded-lg text-base mb-1 cursor-pointer">
                    <div class="px-4">
                        <icon :size="5" class="group-hover:text-gray-500">
                            <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/>
                        </icon>
                    </div>
                    <colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource"></colour>
                    <div class="p-2">{{ card.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardImage from "../CardDatabase/CardImage";
    import Colour from "../DeckBuilder/Colour";
    import Icon from "../Components/Icon";

    export default {
        props: ['tester'],
        components: {CardImage, Colour, Icon},
    };
</script>
