<template>
    <li class="block flex odd:bg-gray-100 hover:bg-gray-200 items-center">
        <span class="block flex-initial py-4 px-8">
            <router-link :to="eventLink">
                <event-type-icon :type="event.type" :size="16" :title="event.type"></event-type-icon>
            </router-link>
        </span>

        <div class="flex-auto py-4">
            <router-link :to="eventLink">
                <h2 class="font-serif uppercase text-xl">{{ event.name }} <span class="text-gray-500">({{ ucfirst(event.type) }})</span></h2>
                <p class="text-base">
                    {{ time.calendar(event.when) }}
                    <span class="font-bold ml-2">
                        <span v-if="event.cost">$$$</span>
                        <span v-else="event.cost">FREE</span>
                    </span>
                </p>
                <p v-if="event.manager.slug == user.slug" class="text-sm text-blue-700">You are managing this event.</p>
                <p v-if="event.registered" class="text-sm text-green-700">You are participating in this event.</p>
            </router-link>
        </div>

        <a href="" class="text-center py-6 px-8 flex-initial border-l border-gray-200 link" @click.prevent="copyShareURL()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-6 h-6">
                <title>Share event</title>
                <path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z"/>
            </svg>
        </a>

        <span class="text-center py-6 px-8 flex-initial border-l border-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block fill-current w-6 h-6">
                <path d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68A19.9 19.9 0 0110 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
            </svg>
            <span class="text-2xl ml-2">8</span>
        </span>
    </li>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import EventTypeIcon from './EventTypeIcon.vue';
    import Time from '../Utilities/Time';
    import Strings from '../Utilities/Strings';

    export default {
        components: { EventTypeIcon },
        props: ['event'],

        mixins: [ Strings ],

        computed: {
            ...mapGetters('session', ['user']),

            eventLink: function() {
                let routeName = this.event.manager.slug == this.user.slug ? 'events.edit' : 'events.view';

                return { name: routeName, params: { event: this.event.slug } };
            }
        },

        data() {
            return {
                time: Time
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            copyShareURL: function() {
                let route = {
                    name: 'events.view',
                    params: { event: this.event.slug },
                };

                let url = this.$router.resolve(route);

                this.$copyText(location.protocol + '//' + location.host + url.href);
                this.addMessage({ status: 'success', message: 'Event URL copied to clipboard.' });

                this.$router.push(route)
            },
        }
    };
</script>