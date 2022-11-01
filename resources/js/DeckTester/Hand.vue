<template>
    <div class="w-full">
        <div class="relative w-full flex justify-center items-start -space-x-10 my-8 min-h-96" @drop.prevent="drop($event, 'hand')" @dragover.prevent @dragenter.prevent>
            <div v-for="(card, i) in hand"
                 class="relative z-0 w-200 hover:z-25 cursor-pointer"
                 :style="transform(i)"
                 @mouseover="setFocused(i)"
                 @mouseout="setFocused(null)"
            >
                <card-image
                    :card="card"
                    draggable
                    @dragstart.native="drag($event, 'hand', i)"
                    @dragend.native="setFocused(null)"
                    @click.native="send(i, 'hand', 'graveyard')"
                    class="relative z-25"
                />
                <div class="transition duration-300 absolute top-0 bottom-0 w-full bg-gray-200 dark:bg-gray-900 rounded-card" :class="classes(i)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Interactive from "./Interactive.js";

    export default {
        props: {
            hand: {
                type: Array,
                required: true
            }
        },

        mixins: [Interactive],

        data: () => ({
            focused: null,
            images: [],
        }),

        methods: {
            setFocused(i) {
                this.focused = i;
            },

            classes(i) {
                return {
                    'opacity-30 z-50': this.focused !== null && this.focused !== i,
                    'opacity-0 z-0': this.focused === null || this.focused === i,
                };
            },

            transform(i) {
                let total = this.hand.length;

                if (total === 1) return;

                // Division value is 10 unless that becomes too much (more than 60 degrees of separation)
                let division = total * 10 > 60 ? 60 / total : 10;

                let start = -(((total - 1) * division) / 2);
                let degree = start + (i * division);
                let top = Math.abs(degree) * (Math.abs(degree) * 0.22);

                return {
                    transform: 'rotate('+degree+'deg)',
                    marginTop: top+'px',
                }
            }
        },

        mounted() {
            this.$eventHub.$on('end-turn', () => {
                this.focused = null;
            });
        }
    }
</script>
