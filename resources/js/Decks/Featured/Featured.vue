<template>
    <div class="container mx-auto p-4 md:py-8">
        <div class="lg:flex">
            <div class="lg:w-2/3 bg-nearly-black rounded-lg sm:pr-4 mb-8">
                <deck-of-the-week></deck-of-the-week>
            </div>
            <div class="lg:w-1/3 lg:ml-4 mb-8">
                <latest-decks title="Latest decks" color="bg-yellow-500"></latest-decks>
            </div>
        </div>
        <div class="bg-semi-black p-4 rounded-lg">
            <h3 class="font-serif text-2xl uppercase text-white mb-2">Explore...</h3>
            <div class="lg:flex">
                <div class="w-full lg:w-1/3 lg:mr-4 mb-4 ">
                    <latest-decks title="Competitive" color="bg-gray-800" query="label=competitive"></latest-decks>
                </div>
                <div class="w-full lg:w-1/3 mb-4">
                    <latest-decks title="Casual" color="bg-blue-300" query="label=casual"></latest-decks>
                </div>
                <div class="w-full lg:w-1/3 lg:ml-4">
                    <latest-decks title="Meme" color="bg-pink-600" query="label=meme" ></latest-decks>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DeckOfTheWeek from "./DeckOfTheWeek";
    import LatestDecks from "./LatestDecks";
    import Imagery from "../../Utilities/Imagery";

    export default {
        mixins: [Imagery],
        components: {DeckOfTheWeek, LatestDecks},

        metaInfo() {
            let title = 'Featured decks';

            let meta = [
                { vmid: 'og:type', property: 'og:type', content: 'website' },
                { vmid: 'og:title', property: 'og:title', content: title },
                { vmid: 'og:description', property: 'og:description', content: 'Featured decks on FaB DB.'  },
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
