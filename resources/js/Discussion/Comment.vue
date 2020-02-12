<template>
    <div>
        <div class="m-4 sm:mx-0">
            <header class="flex w-full">
                <div class="w-1/2">
                    <span class="mr-2 font-bold">{{ comment.user.name }}</span>
                    <badge :subscription-level="comment.user.subscription" size="small"></badge>
                </div>
                <div class="w-1/2 text-gray-500 text-sm text-right">{{ relative(comment.createdAt) }}</div>
            </header>
            <div class="mt-2">{{ comment.content }}</div>
        </div>
        <hr class="text-gray-500">
    </div>
</template>

<script>
    import moment from 'moment';
    import Badge from '../Identity/Badge.vue';

    export default {
        props: ['comment'],

        components: { Badge },

        methods: {
            relative: function(date) {
                return moment(moment.utc(date)).local().fromNow();
            }
        }
    };
</script>