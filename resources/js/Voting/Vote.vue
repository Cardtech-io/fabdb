<template>
    <button class="flex space-x-1" @click="vote()" :class="classes">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current" :class="sizes">
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </svg>
        <span v-if="canVote">Add to favourites</span>
        <span v-else>In favourites</span>
        {{canVote}}
    </button>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            size: {
                type: Number,
                required: true
            },
            voted: {
                type: Number
            }
        },

        data: () => ({
            canVote: !this.voted || this.voted === 0
        }),

        computed: {
            classes() {
                return this.canVote ? 'text-gray-400 hover:text-gray-800 dark:hover:text-white' : 'text-red-500';
            },

            sizes() {
                return ['h-' + this.size];
            }
        },

        methods: {
            vote() {
                let payload = {
                    type: this.$parent.voteable,
                    foreign: this.$parent.foreign
                };

                this.canVote = false;

                axios.post('/vote', payload).then(response => {
                    this.$emit('voted', payload);
                });
            }
        }
    };
</script>
