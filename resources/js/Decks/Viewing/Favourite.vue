<template>
    <button @click="vote" class="flex items-center justify-center button-primary px-4 pb-2 pt-10 space-x-2" title="Copy deck to my decks">
        <icon :size="size">
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </icon>
        <span v-if="!voteState">Add</span>
        <span v-else>Remove</span>
    </button>
</template>

<script>
import Votes from "../../Voting/Votes.vue";
import Icon from "../../Components/Icon.vue";

export default {
    extends: Votes,
    components: {Icon}
}
</script>
