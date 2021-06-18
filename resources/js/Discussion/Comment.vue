<template>
    <div class="m-4 sm:mx-0">
        <div class="flex mb-4">
            <div class="mr-4">
                <avatar :user="comment.author" :width="80" class="rounded-br-none"/>
            </div>
            <div class="mr-4">
                <votes :size="4" :total="comment.totalVotes" :voted="comment.myVote" voteable="comment" :foreign="comment.slug" layout="vertical"></votes>
            </div>
            <div class="flex-1">
                <header class="flex w-full">
                    <div class="flex items-center">
                        <span class="mr-4 font-bold">{{ comment.name }}</span>
                        <badge :subscription-level="comment.subscription" size="small" v-if="comment.subscription"></badge>
                    </div>
                    <div class="text-gray-500 text-sm text-right">{{ comment.createdAt }}</div>
                </header>
                <div class="mt-2">{{ comment.content }}</div>
            </div>
        </div>
        <hr class="text-gray-500">
    </div>
</template>

<script>
    import Avatar from "../Identity/Avatar";
    import Badge from '../Identity/Badge.vue';
    import Votes from '../Voting/Votes.vue';

    export default {
        props: ['comment'],
        components: {Avatar, Badge, Votes}
    };
</script>
