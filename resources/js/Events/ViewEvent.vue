<template>
    <div>
        <header-title :title="title"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 py-8 md:flex">
                <div class="md:w-1/2 md:pr-8">
                    <h2 class="font-serif uppercase text-4xl -mt-1 mb-4">Event details</h2>
                    <ul>
                        <li class="bg-gray-100 p-2 px-4">
                            <h3 class="font-serif uppercase text-xl">{{ event.name }} <span class="text-gray-500">({{ ucfirst(event.type) }})</span></h3>
                        </li>
                        <li class="p-2 px-4">
                            <span class="font-serif uppercase">Event fee</span>:
                            <span v-if="event.fee">${{ event.fee }}</span>
                            <span v-else>None (FREE)</span>
                        </li>
                        <li class="bg-gray-100 p-2 px-4">
                            <span class="font-serif uppercase">When</span>:
                            {{ time.calendar(event.startsAt) }}
                        </li>
                        <li class="pt-8">
                            <player-event-actions :event="event"></player-event-actions>
                        </li>
                    </ul>
                </div>

                <div class="mt-8 md:mt-0 md:w-1/2">
                    <div class="flow-root mb-8" v-if="event.description">
                        <div class="float-left mr-6 mb-2">
                            <event-type-icon :type="event.type" size="24"></event-type-icon>
                        </div>

                        <p v-html="parseMarkdown(event.description)"></p>
                    </div>

                    <div>
                        <registered-players :event="event"></registered-players>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapActions, mapGetters} from 'vuex';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import EventTypeIcon from './EventTypeIcon.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import PlayerEventActions from './PlayerEventActions.vue';
    import RegisteredPlayers from './RegisteredPlayers.vue';
    import Time from '../Utilities/Time';
    import Strings from '../Utilities/Strings';

    export default {
        components: {
            Breadcrumbs,
            EventTypeIcon,
            HeaderTitle,
            PlayerEventActions,
            RegisteredPlayers,
        },

        mixins: [ Strings ],

        computed: {
            ...mapGetters('session', ['user']),

            crumbs: function() {
                return [
                    {text: 'Home', name: 'home'},
                    {text: 'My Events', name: 'events.mine'},
                    {text: this.title}
                ];
            },

            title: function() {
                return this.event.name || 'Register event';
            },

            registered: function() {
                return !!this.event.registered;
            }
        },

        data() {
            return {
                event: null,
                time: Time
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/events/' + to.params.event).then(response => {
                callback(function() {
                    this.event = response.data;
                });
            });
        })
    };
</script>
