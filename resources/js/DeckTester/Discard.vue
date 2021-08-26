<template>
    <div class="w-full h-full relative" v-if="pile.length">
        <img :src="card.image" alt="" v-for="(card, i) in top4" class="absolute rounded-card border border-gray-200 z-25" :style="position(i)">
        <div class="absolute z-50 w-full flex justify-center text-white text-center font-serif uppercase text-2xl top-2/3">
            <div class="flex justify-center items-center inline-block bg-semi-black rounded-full relative h-16 w-16" style="left: 4px">
                <span>
                    {{pile.length}}
                </span>
            </div>
        </div>
    </div>
    <div class="bg-gray-300 font-serif text-xl uppercase rounded-card h-full pt-32 text-center" v-else>Discard</div>
</template>

<script>
    export default {
        props: {
            pile: {
                type: Array,
                required: true
            }
        },

        computed: {
            top4() {
                return this.pile.slice(-4);
            },
        },

        methods: {
            position(n) {
                return {
                    left: (n*2)+'px',
                    top: (n*2)+'px',
                };
            }
        }
    }
</script>
