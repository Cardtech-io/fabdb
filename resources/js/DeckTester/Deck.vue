<template>
    <button class="w-full h-full relative" @click.prevent="draw" @keyup.prevent="drawNumber" @mouseenter.prevent="capture = true" @mouseleave.prevent="capture = false">
        <img :src="cardBack" class="z-0 invisible">
        <img :src="cardBack" alt="" v-for="(n, i) in total" class="absolute rounded-card border border-gray-200 z-25" :style="position(i)">
        <div class="absolute z-50 w-full flex justify-center text-white text-center font-serif uppercase text-2xl top-2/3">
            <div class="flex justify-center items-center inline-block bg-semi-black rounded-full relative h-16 w-16" style="left: 4px">
                <span>
                    {{deck.length}}
                </span>
            </div>
        </div>
    </button>
</template>

<script>
    import Historian from "./Historian";

    export default {
        props: {
            deck: {
                type: Array,
                required: true
            },

            cardBack: {
                type: String,
                required: true
            }
        },

        data: () => ({
            capture: false
        }),

        computed: {
            total() {
                let total = Math.ceil(this.deck.length / 20);

                return total > 4 ? 4 : total;
            }
        },

        methods: {
            draw() {
                let card = this.deck.pop();

                this.$parent.hand.push(card);

                Historian.write('draw', 'Drew "'+card.name+'"');
            },

            drawMany(number) {
                for (let i = 0; i < number; i++) {
                    this.draw();
                }
            },

            drawNumber($event) {
                $event.stopPropagation();

                if (isNaN($event.key) || !this.capture) return;

                this.drawMany($event.key);
            },

            position(n) {
                return {
                    left: (n*2)+'px',
                    top: (n*2)+'px',
                };
            }
        },

        mounted() {
            document.addEventListener('keyup', this.drawNumber);

            this.$eventHub.$on('end-turn', () => {
                let intellect = this.$parent.hero.stats.intellect;
                let numberOfCardsInHand = this.$parent.hand.length;

                let cardsToDraw = intellect - numberOfCardsInHand;

                if (cardsToDraw > 0) {
                    this.drawMany(cardsToDraw);
                }
            });
        }
    }
</script>
