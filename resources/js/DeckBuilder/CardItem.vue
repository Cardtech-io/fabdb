<template>
    <div class="w-full flex items-center pr-8 mb-1px">
        <card-buttons :card="card" class="w-1/4"></card-buttons>
        <div class="w-3/4 pl-4 p-2 ml-1px bg-gray-300 cursor-default" @mouseover="setHover(card)" @mouseleave="setHover(false)">
            <div class="whitespace-no-wrap">
                {{ card.name }}
                <colour :resource="card.stats.resource" class="ml-2"></colour>
            </div>
        </div>
    </div>
</template>

<script>
    import CardButtons from "./CardButtons";
    import Colour from "./Colour";

    export default {
        props: ['action', 'card'],
        components: {CardButtons, Colour},

        methods: {
            setHover(card) {
                this.$eventHub.$emit('hover-card', card);
            }
        }
    }
</script>
