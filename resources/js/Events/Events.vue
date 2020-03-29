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
            <div class="container sm:mx-auto p-4 py-8 md:flex">
                <table v-if="events.length" class="w-full table-auto border-collapse bg-white">
                    <thead>
                        <tr class="hidden sm:table-row">
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">ID</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">Name</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Type</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase">When</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase">When</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-gray-100 hover:bg-gray-200 hidden sm:table-row" v-for="event in events">
                            <td class="border border-gray-300"><router-link :to="{ name: 'events.edit', params: { event: event.slug } }" class="block py-2 px-4 w-full link">{{ event.slug}}</router-link></td>
                            <td class="border border-gray-300"><router-link :to="{ name: 'events.edit', params: { event: event.slug } }" class="block py-2 px-4 w-full link">{{ event.name }}</router-link></td>
                            <td class="border border-gray-300 py-2 px-4 text-center">{{ event.type }}</td>
                            <td class="border border-gray-300 py-2 px-4 text-center">{{ time.calendar(event.startsAt) }}</td>
                            <td class="border border-gray-300 py-1 px-4" align="center">
                                <a href="" class="link" @click.prevent="copyShareURL(event)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-6 h-6 fill-current">
                                        <path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

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
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Time from '../Utilities/Time';

    export default {
        components: { Button, Crumbs, HeaderTitle },

        data() {
            return {
                crumbs: [
                    { text: 'Home', name: 'home' },
                    { text: 'My Events' }
                ],

                events: [],
                time: Time
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            copyShareURL: function(event) {
                let url = this.$router.resolve({
                    name: 'events.view',
                    params: { event: event.slug },
                });

                this.$copyText(location.protocol + '//' + location.host + url.href);

                this.addMessage({ status: 'success', message: 'Event URL copied to clipboard.' });
            },
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
