<template>
    <div>
        <header-title title="Draft mode"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-auto">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="text-right flex-auto">
                    <router-link to="/events/start" class="rounded-full py-2 px-4 bg-white text-orange-700 hover:bg-orange-700 hover:text-white">Register event</router-link>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-gray-100 hover:bg-gray-200 hidden sm:table-row" v-for="event in events">
                            <td class="border border-gray-300"><router-link :to="'/events/' + event.slug" class="block py-2 px-4 w-full link">{{ event.slug}}</router-link></td>
                            <td class="border border-gray-300"><router-link :to="'/events/' + event.slug" class="block py-2 px-4 w-fullm link">{{ event.name }}</router-link></td>
                            <td class="border border-gray-300 py-2 px-4 text-center">{{ event.type }}</td>
                            <td class="border border-gray-300 py-2 px-4 text-center">{{ event.startsAt }}</td>
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
    import Crumbs from '../Components/Crumbs.vue';
    import Button from '../Components/Form/Button.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';

    export default {
        components: { Button, Crumbs, HeaderTitle },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Events' }
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
