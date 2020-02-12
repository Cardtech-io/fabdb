<template>
    <div>
        <div class="m-4">
            <div><span class="font-serif uppercase mr-2">{{ comment.user.name }}</span> <badge :subscription-level="comment.user.subscription" size="small"></badge></div>
            <div class="text-gray-500 text-sm">2 days ago</div>
            <div class="mt-2">{{ comment.content }}</div>
        </div>
        <hr class="text-gray-500">
    </div>
</template>

<script>
    import Badge from '../Identity/Badge.vue';

    export default {
        props: ['comment'],

        components: { Badge },

        methods: {

        }
    };
</script>