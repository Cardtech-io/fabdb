<template>
    <div class="">
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
        <div class="flex">
            <tile class="w-full md:w-1/3" title="Win Rate">
                <overall-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
            </tile>
            <tile class="w-full md:w-2/3" title="Win Rate">
                <class-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
            </tile>
        </div>
        <div>
            <div>Card Stats</div>
            <div>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            </div>
        </div>
            <div>Win Rate vs Hero</div>
            <div>Win Rate vs Class</div>
        </div>
    </div>
</template>
<script>
// import WinRate from "../../DeckBuilder/Metrics/WinRate.js";
import Tile from "../../DeckBuilder/Metrics/Tile.vue";
import OverallWinRate from "../../DeckBuilder/Metrics/OverallWinRate.js";
import ClassWinRate from "../../DeckBuilder/Metrics/ClassWinRate.js";

export default {
    components: {ClassWinRate, OverallWinRate, Tile},

    props: {
        deck: {
        required: true,
        type: Object,
        },
    },
};
</script>
