<template>
    <button @click.prevent="exportToTTS" class="w-1/4 appearance-none block w-full mt-2 bg-orange-700 text-center text-white  py-2 px-2 leading-tight focus:outline-none hover:bg-orange-500 border-r border-gray-200" :class="exporting ? 'disabled' : ''">
        {{ exporting ? 'Wait...' : 'TTS' }}
    </button>
</template>

<script>
    export default {
        props: ['deck'],

        data() {
            return {
                exporting: false
            }
        },

        methods: {
            exportToTTS: function() {
                this.exporting = true;
                axios.get('/export/' + this.deck.slug + '/tts-images').then(response => {
                    this.exporting = false;
                    window.open('/export/' + this.deck.slug + '/tts-json');
                });
            },
        }
    };
</script>