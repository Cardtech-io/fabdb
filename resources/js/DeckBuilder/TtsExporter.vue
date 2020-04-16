<template>
    <div class="p-4 bg-white rounded-xl mt-4">
        <div>
            <h2 class="font-serif uppercase text-xl">Copy text</h2>
            <p class="text-base">Need to share your deck build as text to a private message, discord or otherwise? Click the button below.</p>
            <button @click.prevent="copy" class="appearance-none block w-full md:w-1/2 mt-2 bg-blue-700 text-white rounded-lg py-2 px-2 leading-tight focus:outline-none hover:bg-blue-500 border-r border-gray-200">Copy text</button>
        </div>

        <div class="mt-4">
            <h2 class="font-serif uppercase text-xl">Table Top Simulator</h2>
            <p class="text-base">Want to use your deck inside Table Top Simulator? The button below is your jam.</p>
            <button @click.prevent="exportToTTS" class="appearance  -none block w-full md:w-1/2 mt-2 bg-blue-700 text-center text-white rounded-lg py-2 px-2 leading-tight focus:outline-none hover:bg-blue-500 border-r border-gray-200" :class="exporting ? 'disabled' : ''">
                {{ exporting ? 'Wait...' : 'Table Top Simulator' }}
            </button>
        </div>

        <div class="mt-4">
            <h2 class="font-serif uppercase text-xl">Tournament Pack</h2>
            <p class="text-base">Need to submit your deck and in various formats to a Tournament or League Organiser? Click below.</p>
            <router-link :to="'/decks/export/' + deck.slug" class="appearance-none block w-full md:w-1/2 mt-2 bg-blue-700 text-center text-white rounded-lg py-2 px-2 leading-tight focus:outline-none hover:bg-blue-500">Tourney</router-link>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['deck'],

        data() {
            return {
                exporting: false
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            copy: function() {
                this.$copyText(this.shareText);
                this.addMessage({ status: 'success', message: 'Deck share text copied to clipboard.' });
            },

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