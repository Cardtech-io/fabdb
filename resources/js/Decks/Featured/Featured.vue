<template>
    <div class="container mx-auto p-4 md:py-8">
        <div class="lg:flex">
            <div class="lg:w-2/3 bg-nearly-black rounded-lg sm:pr-4 mb-8">
                <deck-of-the-week/>
            </div>
            <div class="lg:w-1/3 lg:ml-4 mb-8">
                <latest-decks title="Latest decks" color="bg-yellow-500"/>
            </div>
        </div>
        <div class="bg-semi-black p-4 rounded-lg">
            <h3 class="font-serif text-2xl uppercase text-white mb-2">Explore...</h3>
            <div class="lg:flex">
                <div class="w-full lg:w-1/3 mb-4">
                    <latest-decks title="Tournament" color="bg-black" query="label=tournament"/>
                </div>
                <div class="w-full lg:w-1/3 lg:ml-4 mb-4">
                    <latest-decks title="Commoner" color="bg-green-600" query="format=commoner"/>
                </div>
                <div class="w-full lg:w-1/3 lg:ml-4">
                    <latest-decks title="Casual" color="bg-blue-300" query="label=casual"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DeckOfTheWeek from "./DeckOfTheWeek.vue";
    import LatestDecks from "./LatestDecks.vue";
    import Imagery from "../../Utilities/Imagery";

    export default {
        mixins: [Imagery],
        components: {DeckOfTheWeek, LatestDecks},

        metaInfo() {
            let title = 'Flesh & Blood TCG deck lists' + ' - FaB DB';

            let meta = [
                { vmid: 'og:type', property: 'og:type', content: 'website' },
                { vmid: 'og:title', property: 'og:title', content: title },
                { vmid: 'og:description', property: 'og:description', content: 'Featured decks and deck lists for Flesh & Blood TCG.'  },
                { vmid: 'og:image', property: 'og:image', content: this.imageUrl('/assets/deck-of-the-week.jpg', 1200) },
                { vmid: 'og:image:width', property: 'og:image:width', content: '1200' },
                { vmid: 'og:image:height', property: 'og:image:height', content: '630' }
            ];

            return {
                title: title,
                meta: meta
            };
        },
    }
</script>
