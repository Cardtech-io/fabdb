<template>
    <button @click.prevent="cancel" type="button" class="appearance-none inline-block bg-red-700 text-white rounded-full py-3 px-4 leading-tight focus:outline-none hover:bg-red-500 disabled:opacity-50">
        Cancel my event
    </button>
</template>

<script>
    import axios from 'axios';
    import { mapActions } from 'vuex';

    export default {
        props: ['event'],

        methods: {
            ...mapActions('messages', ['addMessage']),

            cancel: function() {
                axios.delete('/events/' + this.event.slug).then(response => {
                    this.addMessage({ status: 'info', message: 'Event cancelled.' });
                    this.$router.push({ name: 'events' });
                });
            }
        }
    };
</script>
