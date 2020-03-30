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
                            <span class="font-serif uppercase">Cost</span>:
                            <span v-if="event.cost">{{ event.cost }}</span>
                            <span v-else>FREE</span>
                        </li>
                        <li class="bg-gray-100 p-2 px-4">
                            <span class="font-serif uppercase">When</span>:
                            {{ time.calendar(event.startsAt) }}
                        </li>
                        <li class="pt-8">
                            <button @click.prevent="register()" type="button" class="appearance-none inline-block bg-blue-700 text-white rounded-full py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50" v-if="!registered">
                                Register for event
                            </button>
                            <button @click.prevent="unregister()" type="button" class="appearance-none inline-block bg-blue-700 text-white rounded-full py-3 px-4 leading-tight focus:outline-none hover:bg-blue-500 disabled:opacity-50" v-else="registered">
                                Unregister
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="mt-8 md:mt-0 md:w-1/2">
                    <div class="float-left mr-6 mb-2">
                        <event-type-icon :type="event.type" size="24"></event-type-icon>
                    </div>

                    <p>{{ event.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import { mapActions, mapGetters } from 'vuex';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import EventTypeIcon from './EventTypeIcon.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Time from '../Utilities/Time';
    import Strings from '../Utilities/Strings';

    export default {
        components: {
            Breadcrumbs,
            EventTypeIcon,
            HeaderTitle,
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

        methods: {
            ...mapActions('messages', ['addMessage']),

            register: function() {
                axios.post('/events/' + this.event.slug + '/register').then(response => {
                    this.event.registered = this.user.slug;
                    this.addMessage({ status: 'success', message: 'Successfully registered for event.' });
                });
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