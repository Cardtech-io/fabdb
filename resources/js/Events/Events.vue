<template>
    <div>
        <header-title title="My events"/>

        <div class="crumbs font-serif uppercase">
            <div class="container px-4 py-2 sm:mx-auto flex">
                <div class="flex-auto">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="text-right flex-auto">
                    <router-link :to="{ name: 'events.start' }" class="rounded-full py-2 px-4 button-primary" v-if="user.subscription">Schedule an event</router-link>
                </div>
            </div>
        </div>

        <div class="main-body">
            <div class="container sm:mx-auto p-4 py-8">
                <ol v-if="events.length">
                    <event-item :event="event" v-for="event in events" :key="event.slug"/>
                </ol>
                <div v-else>
                    You have not yet registered any events. To register one, click the button top-right.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import Crumbs from '../Components/Crumbs.vue';
    import Button from '../Components/Form/Button.vue';
    import EventTypeIcon from './EventTypeIcon.vue';
    import EventItem from './EventItem.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader.js';

    export default {
        components: {
            Button,
            Crumbs,
            EventItem,
            EventTypeIcon,
            HeaderTitle
        },

        computed: {
            ...mapGetters('session', ['user'])
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
