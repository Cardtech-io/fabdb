<template>
    <div :class="{ 'flex': layout != 'vertical' }">
        <div class="text-xl mr-2 mt-1" v-if="layout != 'vertical'">
            <span v-if="total && total > 0">{{ actualTotal }}</span>
        </div>
        <div class="mt-1" :class="{ 'flex': layout != 'vertical' }">
            <div>
                <vote :size="size" direction="up" :voteable="voteable" :foreign="foreign" :class="{ 'text-gray-800': voteState == 1 }" @voted="handleVote"></vote>
            </div>
            <div v-if="layout == 'vertical'" class="text-center">
                <span v-if="total && total > 0">{{ actualTotal }}</span>
            </div>
            <div>
                <vote :size="size" direction="down" :voteable="voteable" :foreign="foreign" :class="{ 'ml-2': layout != 'vertical', 'text-gray-800': voteState == -1 }" @voted="handleVote"></vote>
            </div>
        </div>
    </div>
</template>

<script>
    import Vote from './Vote.vue';

    export default {
        components: { Vote },

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
                voteState: this.voted
            };
        },

        computed: {
            actualTotal() {
                return this.total < 0 ? 0 : this.total;
            }
        },

        methods: {
            handleVote(payload) {
                let vote = payload.direction == 'down' ? -1 : 1;

                if (this.voteState == vote) {
                    this.voteState = 0;
                } else {
                    this.voteState = vote;
                }
            }
        }
    };
</script>