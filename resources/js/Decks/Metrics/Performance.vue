<template>
    <div>
        <header class="mb-2">
            <select class="p-2 bg-black text-white rounded mr-2" name="player">
                <option value="myself">MySelf</option>
                <option value="community">Community</option>
                <option value="author">Author</option>
            </select>
            <select class="p-2 bg-black text-white rounded mr-2" name="games">
                <option value="30">Last 30 Games</option>
                <option value="100">All Time</option>
            </select>
        </header>
        <div class="md:flex md:space-x-4">
            <div class="space-y-4 md:w-2/3 mb-4">
                <div class="md:flex md:space-x-4 space-y-4 md:space-y-0">
                    <tile class="w-full md:w-1/2" title="Win rate">
                        <win-rate :slug="deck.slug"/>
                    </tile>
                    <tile class="w-full md:w-1/2" title="First/second turn win rate">
                        <overall-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
                    </tile>
                </div>

                <tile class="w-full" title="Win rate by class">
                    <class-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
                </tile>

                <tile class="w-full" title="Win rate by hero">
                    <hero-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
                </tile>
            </div>
            <div class="md:w-1/3">
                <tile title="Card stats">
                    <card-stats :slug="deck.slug"/>
                </tile>
            </div>
        </div>
    </div>
</template>
<script>
// import WinRate from "../../DeckBuilder/Metrics/WinRate.js";
import Tile from "../../DeckBuilder/Metrics/Tile.vue";
import CardStats from "../../DeckBuilder/Metrics/CardStats.vue";
import ClassWinRate from "../../DeckBuilder/Metrics/ClassWinRate.js";
import HeroWinRate from "../../DeckBuilder/Metrics/HeroWinRate.js";
import OverallWinRate from "../../DeckBuilder/Metrics/OverallWinRate.js";
import WinRate from "../../DeckBuilder/Metrics/WinRate.vue";

export default {
    components: {CardStats, ClassWinRate, HeroWinRate, OverallWinRate, Tile, WinRate},

    props: {
        deck: {
            required: true,
            type: Object,
        },
    },
};
</script>
