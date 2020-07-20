<template>
    <div class="container sm:mx-auto bg-white py-8 px-4 md:flex">
        <div class="md:w-1/2 md:pr-8">
            <form @submit.prevent="saveDeckSettings" class="block">
                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
                    <input type="text" v-model="deck.name" class="input focus:border-gray-500 py-3 px-4 rounded-lg" maxlength="25" required>
                </div>

                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Deck format</label>
                    <select v-model="deck.format" class="input focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="blitz">Blitz</option>
                        <option value="constructed">Constructed</option>
                        <option value="open">Open</option>
                    </select>
                </div>

                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Deck visibility</label>
                    <select v-model="deck.visibility" class="input focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </select>
                </div>

                <div class="w-full">
                    <label class="block font-serif uppercase tracking-wide mb-1">Card back</label>
                    <select v-model="deck.cardBack" class="input focus:border-gray-500 py-3 px-4 rounded-lg" :disabled="!user.subscription">
                        <option value="1">Original</option>
                        <option value="2">Worn</option>
                        <option value="3">Light</option>
                        <option value="4">Old fashioned</option>
                        <option value="5">Parchment Gold</option>
                        <option value="6">Parchment Classic</option>
                        <option value="7">Reds</option>
                        <option value="8">White Cream</option>
                    </select>
                    <div class="border border-t-0 border-gray-300 text-sm rounded-lg p-3" v-if="!user.subscription">
                        Card backs are a premium feature. If you'd like to use card backs in your games of TTS,
                        <router-link to="/support" class="link">support us!</router-link>
                        <a href="https://patreon.com/fabdb" class="link" target="_blank">Memberships start as low as $3/month.</a>
                    </div>
                </div>

                <input type="submit" value="Save" class="appearance-none block w-full bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 mt-8" :class="saving ? 'disabled' : ''">
            </form>
        </div>

        <div class="mt-8 md:w-1/2 md:mt-0">
            <h2 class="text-xl font-serif uppercase mb-2">Deck settings</h2>

            <p class="my-4">With the various deck settings you can change two values:</p>

            <ul class="list-disc ml-8">
                <li>Change your deck's visibility. This is whether or not the deck is available in the public directory. If not, you can still share the deck as normal for those that have the link.</li>
                <li>The card back: When exporting the deck for use in Tabletop Simulator, you can select from one of 8 card backs. This is a premium feature available to supporters only.</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        props: ['deck'],

        data() {
            return {
                saving: false
            }
        },

        computed: {
            ...mapGetters('session', ['user'])
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            saveDeckSettings: function() {
                this.saving = true;

                let cardBack = this.deck.cardBack || 1;

                axios.put('/decks/' + this.$route.params.deck + '/settings', { name: this.deck.name, format: this.deck.format, visibility: this.deck.visibility, cardBack: cardBack }).then(response => {
                    this.addMessage({ status: 'success', message: 'Settings saved.' });
                    this.saving = false;
                });
            }
        }
    };
</script>
