<template>
    <div>
        <header-title title="My events"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-auto">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="text-right flex-auto">
                    <router-link :to="{ name: 'events.start' }" class="rounded-full py-2 px-4 bg-white text-orange-700 hover:bg-orange-700 hover:text-white">Register event</router-link>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 py-8">
                <ol v-if="events.length">
                    <event-item :event="event" v-for="event in events" :key="event.slug"></event-item>
                </ol>
                <div v-else>
                    You have not yet registered any events. To register one, click the button top-right.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import { mapActions } from 'vuex';

    import Crumbs from '../Components/Crumbs.vue';
    import Button from '../Components/Form/Button.vue';
    import EventTypeIcon from './EventTypeIcon.vue';
    import EventItem from './EventItem.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';

    export default {
        components: {
            Button,
            Crumbs,
            EventItem,
            EventTypeIcon,
            HeaderTitle
        },

        data() {
            return {
                crumbs: [
                    { text: 'Home', name: 'home' },
                    { text: 'My Events' }
                ],

                events: []
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/events').then(response => {
                callback(function() {
                    this.events = response.data;
                });
            });
        })
    };
</script>
