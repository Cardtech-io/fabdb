<template>
    <div class="deck-test-card relative rounded-lg sm:rounded-xl" :class="state" @click="toggleButtons">
        <card-image :card="card"></card-image>
        <div class="buttons w-full" :class="{ visible: showButtons, invisible: !showButtons }">
            <button class="appearance-none block w-1/3 bg-red-700 text-white text-sm rounded-lg py-2 px-3 mx-auto mb-1 leading-tight focus:outline-none hover:bg-red-500 shadow-lg" @click="play">Play</button>
            <button class="appearance-none block w-1/3 bg-red-700 text-white text-sm rounded-lg py-2 px-3 mx-auto mb-1 leading-tight focus:outline-none hover:bg-red-500 shadow-lg" @click="pitch">Pitch</button>
            <button class="appearance-none block w-1/3 bg-red-700 text-white text-sm rounded-lg py-2 px-3 mx-auto mb-1 leading-tight focus:outline-none hover:bg-red-500 shadow-lg" @click="arsenal">Arsenal</button>
        </div>
    </div>
</template>

<script>
    import CardImage from '../CardDatabase/CardImage.vue';

    export default {
        components: { CardImage },
        props: ['card'],

        computed: {
            state: function() {
                return {
                    'shadow-played' : this.card.played,
                    'shadow-pitched' : this.card.pitched,
                    'hover:shadow-black': !this.card.played && !this.card.pitched,
                    'shadow-black': this.showButtons,
                };
            }
        },

        data() {
            return {
                showButtons: false
            }
        },

        methods: {
            arsenal() {
                this.$emit('arsenaled', this.card, true);
                this.card.arsenaled = !this.card.arsenaled;
                this.card.played = false;
                this.card.pitched = false;
            },

            pitch() {
                this.card.played = false;
                this.card.pitched = !this.card.pitched;
            },

            play() {
                this.card.pitched = false;
                this.card.played = !this.card.played;
            },

            toggleButtons() {
                this.showButtons = !this.showButtons;
            }
        }
    };
</script>
