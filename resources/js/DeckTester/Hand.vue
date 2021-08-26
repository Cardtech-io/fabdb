<template>
    <div class="relative w-full flex justify-center items-start -space-x-10 my-8 min-h-96">
        <div v-for="(card, i) in hand" class="relative z-0 w-200 hover:z-25 cursor-pointer" :style="transform(i)" @mouseover="setFocused(i)" @mouseout="setFocused(null)" @click="sendToDiscard(i)">
            <card-image :card="card"></card-image>
            <div class="transition absolute top-0 bottom-0 w-full bg-gray-200 rounded-card" :class="classes(i)"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            hand: {
                type: Array,
                required: true
            }
        },

        data: () => ({
            focused: null
        }),

        methods: {
            setFocused(i) {
                this.focused = i;
            },

            classes(i) {
                return {
                    'opacity-50': this.focused !== null && this.focused !== i,
                    'opacity-0': this.focused === null || this.focused === i,
                };
            },

            sendToDiscard(i) {
                let card = this.$parent.hand.splice(i, 1)[0];
                this.$parent.discard.push(card);
                this.setFocused(null);
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
        }
    }
</script>
