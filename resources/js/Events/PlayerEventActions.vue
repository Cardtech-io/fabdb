<template>
    <div>
        <div v-if="user">
            <button @click.prevent="register()" type="button" class="appearance-none bg-blue-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50" v-if="!registered">
                Register for event
            </button>

            <button @click.prevent="unregister()" type="button" class="appearance-none bg-red-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-red-500 disabled:opacity-50" v-if="registered">
                Unregister from event
            </button>

            <button @click.prevent="showModal()" class="appearance-none bg-blue-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50" v-if="registered">
                Submit a deck
            </button>

            <modal name="submit-deck" classes="bg-gray-100">
                <h2 class="bg-orange-900 text-white font-serif text-2xl uppercase py-3 px-8">Submit your deck</h2>

                <ul v-if="decks">
                    <li v-for="deck in decks" class="even:bg-gray-200 hover:bg-white hover:cursor-pointer">
                        <a href="" class="block w-full px-8 py-2" @click.prevent="selectDeck(deck)">
                            {{ deck.hero.name }} ({{ deck.name }})
                        </a>
                    </li>
                </ul>

                <div class="px-8 py-4" v-else>
                    You have not yet created any decks. In order to participate in the event you must <router-link :to="{ name: 'decks.build' }" class="link">build a deck</router-link> then
                    submit it via the event page.
                </div>
            </modal>
        </div>
        <div v-else>
            Please <router-link :to="'/login?from=' + $route.path" class="link">login</router-link> to register for this event.
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        props: ['event'],

        computed: {
            ...mapGetters('session', ['user'])
        },

        data() {
            return {
                decks: [],
                registered: this.event.registered
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            selectDeck: function(deck) {
                axios.post('/events/' + this.event.slug + '/deck', { deck: deck.slug }).then(response => {
                    this.$modal.hide('submit-deck');
                    this.addMessage({ status: 'success', message: 'Your deck has been submitted.' });
                });
            },

            showModal: function() {
                this.$modal.show('submit-deck')
            },

            register: function() {
                axios.post('/events/' + this.event.slug + '/register').then(response => {
                    this.registered = true;
                    this.addMessage({ status: 'success', message: 'You are now registered for this event.' });
                });
            },

            unregister: function() {
                axios.delete('/events/' + this.event.slug + '/registration').then(response => {
                    this.registered = false;
                    this.addMessage({ status: 'success', message: 'You are no longer registered for this event.' });
                });
            }
        },

        mounted() {
            if (this.user) {
                axios.get('/decks/mine').then(response => {
                    this.decks = response.data;
                });
            }
        }
    };
</script>