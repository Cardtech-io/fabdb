<template>
    <div class="mt-4">
        <a href="" class="block clearfix p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white" @click.prevent="copy">
            <div class="float-left mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-20">
                    <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"/>
                </svg>
            </div>
            <h2 class="font-serif uppercase text-xl">Copy text</h2>
            <p class="text-base">Looking to share your deck build as text? Click here.</p>
        </a>

        <a href="" class="block clearfix p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white mt-4" @click.prevent="exportToTTS">
            <div class="float-left mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-20">
                    <path d="M4 4l12 6-12 6z"/>
                </svg>
            </div>
            <h2 class="font-serif uppercase text-xl">Table Top Simulator</h2>
            <p class="text-base" v-if="!exporting">Want to use your deck inside Table Top Simulator?</p>
            <p class="text-base" v-else>Please wait while we generate the files...</p>
        </a>

        <router-link :to="'/decks/export/' + deck.slug" class="block clearfix p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white mt-4">
            <div class="float-left mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-20">
                    <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2z"/>
                </svg>
            </div>
            <h2 class="font-serif uppercase text-xl">Tournament Pack</h2>
            <p class="text-base">For tournaments and leagues. All-in-one ZIP file.</p>
        </router-link>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Cardable from '../CardDatabase/Cardable';
    import Strings from '../Utilities/Strings';
    import Viewable from '../DeckBuilder/Viewable';

    export default {
        mixins: [ Cardable, Strings, Viewable ],
        props: ['deck'],

        computed: {
            cards: function() {
                return this.deck.cards;
            },

            shareText: function() {
                const weapons = this.weapons.map(weapon => weapon.name).join(', ');
                const equipment = this.equipment.map(item => item.name).join(', ');

                var text = this.shareLine('Deck build - via https://fabdb.net :') +
                    this.shareLine('') +
                    this.shareLine(this.deck.name) +
                    this.shareLine('') +
                    this.shareLine('Class: ' + this.ucfirst(this.hero.keywords[0])) +
                    this.shareLine('Hero: ' + this.hero.name) +
                    this.shareLine('Weapons: ' + weapons) +
                    this.shareLine('Equipment: ' + equipment) +
                    this.shareLine('');

                for (var i in this.other) {
                    var card = this.other[i];

                    text = text + this.shareLine('(' + card.total + ') ' + card.name + ' (' + this.colourToText(card.stats.resource) + ')');
                }

                text = text + this.shareLine('');
                text = text + this.shareLine('See the full deck at: https://fabdb.net/decks/' + this.deck.slug + '/');

                return text;
            }
        },

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

            shareLine: function(line) {
                return line + '\n';
            }
        }
    };
</script>
