<template>
    <div class="flex">
        <div class="text-xl mr-2 mt-1">
            <span v-if="total">{{ total }}</span>
        </div>
        <div class="mt-1 flex">
            <vote :size="size" direction="up" :voteable="voteable" :foreign="foreign"></vote>
            <vote :size="size" direction="down" :voteable="voteable" :foreign="foreign" class="ml-2"></vote>
        </div>
    </div>
</template>

<script>
    import Vote from './Vote.vue';

    export default {
        components: { Vote },

        props: {
            size: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            voteable: {
                type: String,
                required: true
            },
            foreign: {
                type: String,
                required: true
            }
        }
    };
</script>