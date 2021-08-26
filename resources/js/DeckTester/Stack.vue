<template>
    <div class="w-full h-full relative" v-if="stack.length">
        <img :src="card.image" alt="" v-for="(card, i) in top4" class="absolute rounded-card border border-gray-200 z-25" :style="position(i)">
        <div class="absolute z-50 w-full flex justify-center text-white text-center font-serif uppercase text-2xl top-2/3">
            <div class="flex justify-center items-center inline-block bg-semi-black rounded-full relative h-16 w-16" style="left: 4px">
                <span>
                    {{stack.length}}
                </span>
            </div>
        </div>
    </div>
    <div class="bg-gray-300 font-serif text-xl uppercase rounded-card h-full pt-32 text-center" v-else>{{name}}</div>
</template>

<script>
    export default {
        props: {
            pile: {
                type: String,
                required: true
            },

            name: {
                type: String,
                required: true,
            }
        },

        computed: {
            top4() {
                return this.stack.slice(-4);
            },

            stack() {
                return this.$parent[this.pile]
            }
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
