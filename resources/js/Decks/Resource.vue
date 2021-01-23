<template>
    <button @click="pitch()" class="flex items-center my-1 focus-none">
        <img src="/img/resource.png" width="40" class="rounded-full" :class="resourceClass">
        <span class="text-gray-300 ml-4 text-lg">{{ resource }}</span>
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
                return this.resource > 0 && this.resource <= this.player.resource ? 'shadow-outline' : 'opacity-25';
            }
        },

        methods: {
            pitch() {
                this.player.resource = this.resource;
            },
        }
    }
</script>
