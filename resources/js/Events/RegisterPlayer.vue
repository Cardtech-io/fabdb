<template>
    <div>
        <button @click.prevent="register()" type="button" class="appearance-none inline-block bg-blue-700 text-white rounded-full py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50" v-if="!registered">
            Register for event
        </button>

        <button @click.prevent="unregister()" type="button" class="appearance-none inline-block bg-blue-700 text-white rounded-full py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50" v-if="registered">
            Unregister from event
        </button>
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
                registered: this.event.registered
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

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
        }
    };
</script>