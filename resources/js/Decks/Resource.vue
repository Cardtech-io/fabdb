<template>
    <button @click="pitch()" class="flex flex-col text-center items-center my-1 focus-none mr-3">
        <img src="/img/resource.png" width="55" class="rounded-full" :class="resourceClass">
        <span class="font-serif font-bold mt-1 text-xl" :class="player.resource === resource ? 'text-blue-500' : 'text-gray-300'">{{ resource }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            player: {
                required: true,
                type: Object
            },

            resource: {
                required: true,
                type: Number
            }
        },

        computed: {
            resourceClass() {
                return this.resource > 0 && this.resource <= this.player.resource ? 'shadow-highlight' : 'opacity-50';
            }
        },

        methods: {
            pitch() {
                this.player.resource = this.resource;
            },
        }
    }
</script>
