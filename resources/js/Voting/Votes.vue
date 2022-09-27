<template>
    <button :class="{ 'flex items-center space-x-2': layout !== 'vertical' }" @click="vote()">
        <div class="text-lg mt-1" v-if="layout !== 'vertical'">
            <span v-if="total && total > 0">{{ actualTotal }}</span>
        </div>
        <div class="mt-1" :class="{ 'flex': layout !== 'vertical' }">
            <div class="flex space-x-1" :class="classes">
                <icon :size="size">
                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                </icon>
            </div>
            <div v-if="layout === 'vertical'" class="text-center -mt-1">
                <span v-if="total && total > 0">{{ actualTotal }}</span>
            </div>
        </div>
    </button>
</template>

<script>
    import axios from "axios";

    export default {
        props: {
            layout: {
                type: String,
                validator: function (value) {
                    return ['vertical', 'horizontal'].indexOf(value) !== -1;
                }
            },
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
            },
            voted: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                actualTotal: this.total,
                count: this.total,
                voteState: this.voted
            };
        },

        computed: {
            classes() {
                return !this.voteState ? 'text-gray-400 hover:text-gray-800 dark:hover:text-white' : 'text-red-500';
            },

            sizes() {
                return ['h-' + this.size];
            }
        },

        methods: {
            vote() {
                this.voteState = !this.voteState;

                let payload = {
                    type: this.voteable,
                    foreign: this.foreign
                };

                axios.post('/vote', payload);
            }
        }
    };
</script>
