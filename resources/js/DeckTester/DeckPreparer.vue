<template>
    <div class="rounded-xl border border-gray-400 p-4 pb-3">
        <div v-if="stack.total()">
            <div v-for="card in stack" @click="handler(card)" class="group flex items-center bg-gray-300 hover:bg-gray-100 overflow-auto rounded-lg text-base mb-1 cursor-pointer">
                <div class="pl-4" v-if="$slots.left">
                    <icon :size="5" class="group-hover:text-gray-500">
                        <slot name="left"></slot>
                    </icon>
                </div>
                <div class="pl-4"><colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource"></colour></div>
                <div class="px-2 py-1">{{ card.name }} ({{ card.total }})</div>
                <div class="px-4 ml-auto" v-if="$slots.right">
                    <icon :size="5" class="group-hover:text-gray-500">
                        <slot name="right"></slot>
                    </icon>
                </div>
            </div>
        </div>
        <div v-else class="text-base pb-1">
            There are no cards in this stack.
        </div>
    </div>
</template>

<script>
    import Colour from "../DeckBuilder/Colour";

    export default {
        props: {
            stack: {
                required: true,
                type: Object
            },

            handler: {
                required: true,
                type: Function
            }
        },

        components: {Colour},
    }
</script>

<style scoped>

</style>
