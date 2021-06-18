<template>
    <div class="container sm:mx-auto py-8 md:flex">
        <div class="md:w-1/2 md:pr-8">
            <form @submit.prevent="saveDeckSettings" class="block">
                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
                    <input type="text" v-model="deck.name" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg" maxlength="25" required>
                </div>

                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Label</label>
                    <select type="text" v-model="deck.label" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="">None</option>
                        <option v-for="(name, label) in $settings.game.decks.labels" :value="label">{{name}}</option>
                    </select>
                </div>

                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Notes</label>
                    <markdown-editor :configs="{toolbar: ['heading', 'bold', 'italic', 'quote', '|', 'unordered-list', 'ordered-list']}" v-model="deck.notes" ref="markdownEditor"></markdown-editor>
                </div>

                <div class="w-full mb-4" v-if="!deck.practiseId">
                    <label class="block font-serif uppercase tracking-wide mb-1">Deck format</label>
                    <select v-model="deck.format" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="blitz">Blitz</option>
                        <option value="constructed">Constructed</option>
                        <option value="open">Open</option>
                    </select>
                </div>

                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Limit cards to collection</label>
                    <select v-model="deck.limitToCollection" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option :value="0">No</option>
                        <option :value="1">Hard limit</option>
                        <option :value="2">Soft limit</option>
                    </select>
                </div>

                <div class="w-full mb-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Deck visibility</label>
                    <select v-model="deck.visibility" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </select>
                </div>

                <div class="w-full">
                    <label class="block font-serif uppercase tracking-wide mb-1">Card back</label>
                    <select v-model="deck.cardBack" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg" :disabled="!user.subscription">
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

                <input type="submit" value="Save" class="appearance-none block w-full rounded-lg py-3 px-4 button-primary mt-8" :class="saving ? 'disabled' : ''">
            </form>
        </div>

        <div class="mt-8 md:w-1/2 md:mt-0 text-base">
            <p class="my-4">With the various deck settings you can change several values:</p>

            <ul class="list-disc ml-8">
                <li>Notes: Go into detail as to how the deck performs, combos to look for and good/bad matchups.</li>
                <li>Deck format: Whether your deck is for blitz/UPF or constructed play.</li>
                <li>Limit to collection: Select soft if you just want missing cards highlighted. Select the hard limit if you do not want missing cards to show up in search at all. The former is better for purchase planning, the latter is better for tournament preparaation.</li>
                <li>Deck visibility: This is whether or not the deck is available in the public directory. If not, you can still share the deck as normal for those that have the link.</li>
                <li>The card back: When exporting the deck for use in Tabletop Simulator, you can select from one of 8 card backs. This is a premium feature available to supporters only.</li>
            </ul>
        </div>
    </div>
</template>

<style>
    @import '~simplemde/dist/simplemde.min.css';
</style>

<script>
    import axios from 'axios';
    import {mapActions, mapGetters} from 'vuex';
    import MarkdownEditor from 'vue-simplemde';

    export default {
        props: ['deck'],
        components: {MarkdownEditor},

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

                let params = {
                    name: this.deck.name,
                    label: this.deck.label,
                    notes: this.deck.notes,
                    type: this.deck.type,
                    format: this.deck.format,
                    limitToCollection: this.deck.limitToCollection,
                    visibility: this.deck.visibility,
                    cardBack: cardBack
                };

                axios.put('/decks/' + this.$route.params.deck + '/settings', params).then(response => {
                    this.addMessage({ status: 'success', message: 'Settings saved.' });
                    this.saving = false;
                });
            }
        }
    };
</script>
