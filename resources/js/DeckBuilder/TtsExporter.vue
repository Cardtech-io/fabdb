<template>
    <div class="mt-4 mb-8">
        <form @submit.prevent="exportToTTS" class="block flex">
            <select v-model="cardBack" class="input-white focus:border-gray-500 py-2 px-3 rounded-l-lg rounded-r-none">
                <option>Card back</option>
                <option value="1">Original</option>
                <option value="2">Worn</option>
                <option value="3">Light</option>
                <option value="4">Old fashioned</option>
            </select>

            <input type="submit" :value="exporting ? 'Wait...' : 'Export'" class="appearance-none block w-full bg-orange-700 text-white rounded-r-lg py-2 px-3 leading-tight focus:outline-none hover:bg-orange-500" :class="exporting ? 'disabled' : ''">
        </form>
    </div>
</template>

<script>
    export default {
        props: ['deck'],

        data() {
            return {
                cardBack: 1,
                exporting: false
            }
        },

        methods: {
            exportToTTS: function() {
                this.exporting = true;
                axios.get('/export/' + this.deck.slug + '/tts-images').then(response => {
                    this.exporting = false;
                    window.open('/export/' + this.deck.slug + '/tts-json?card-back=' + this.cardBack);
                });
            },
        }
    };
</script>