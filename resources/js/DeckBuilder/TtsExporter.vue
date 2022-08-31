<template>
    <div class="space-y-4">
        <a href="" class="block flow-root p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white" @click.prevent="copyShareURL">
            <div class="float-left mr-4">
                <icon :size="14">
                    <path d="M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"/>
                </icon>
            </div>
            <h2 class="font-serif uppercase text-xl">Link to deck</h2>
            <p class="text-base">Copies your publicly-accessible deck URL to the clipboard.</p>
        </a>

        <a href="" class="block flow-root p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white" @click.prevent="shareDeckViaText(shareDeck)">
            <div class="float-left mr-4">
                <icon :size="14">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                </icon>
            </div>
            <h2 class="font-serif uppercase text-xl">Copy text</h2>
            <p class="text-base">Looking to share your deck build as text? Click here.</p>
        </a>

        <div class="flow-root p-4 bg-white rounded-lg">
            <div class="float-left mr-4">
                <icon :size="14">
                    <path d="M4 4l12 6-12 6z"/>
                </icon>
            </div>
            <h2 class="font-serif uppercase text-xl">Table Top Simulator</h2>
            <p class="text-base">
                Want to use your deck inside Table Top Simulator? Use the
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2191845555" target="_blank" class="link-alternate">OSC mod</a>
                and import your deck directly :)</p>
        </div>

        <router-link :to="{name: 'decks.export', params: {deck: deck.slug}}" class="block flow-root p-4 bg-white rounded-lg hover:bg-blue-700 hover:text-white">
            <div class="float-left mr-4">
                <icon :size="14">
                    <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2z"/>
                </icon>
            </div>
            <h2 class="font-serif uppercase text-xl">Tournament Pack</h2>
            <p class="text-base">For tournaments and leagues. All-in-one ZIP file.</p>
        </router-link>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Cardable from '../CardDatabase/Cardable';
    import Deck from "../Decks/Deck";
    import Strings from '../Utilities/Strings';
    import Viewable from '../DeckBuilder/Viewable';
    import ManagesDecks from "./ManagesDecks";
    import Shareable from "../Components/Shareable";

    export default {
        mixins: [Cardable, ManagesDecks, Shareable, Strings, Viewable],
        props: ['deck'],

        computed: {
            cards() {
                return this.deck.cards;
            },

            shareDeck() {
                return new Deck(this.deck);
            }
        },

        data: () => ({ exporting: false }),

        methods: {
            ...mapActions('messages', ['addMessage']),

            exportToTTS() {
                this.exporting = true;

                axios.get('/export/' + this.deck.slug + '/tts-images').then(response => {
                    this.exporting = false;
                    window.open('/export/' + this.deck.slug + '/tts-json');
                });
            }
        }
    };
</script>
