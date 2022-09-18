<template>
    <div>
        <header-title :title="title"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

<!--        <div class="bg-white border-b-4 border-gray-300">-->
<!--            <div class="container sm:mx-auto px-4 flex items-center">-->
<!--                <ul class="flex-auto">-->
<!--                    <li class="inline-block text-center font-serif uppercase">-->
<!--                        <a href="" class="block p-4 mr-8" @click.prevent="setType('constructed')" :class="activeType('constructed')">-->
<!--                            <svg class="fill-current h-10 w-10 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                <path d="M6 4H5a1 1 0 110-2h11V1a1 1 0 00-1-1H4a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V5a1 1 0 00-1-1h-7v8l-2-2-2 2V4z"/>-->
<!--                            </svg>-->
<!--                            <div class="pt-1">Constructed</div>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li class="inline-block text-center font-serif uppercase">-->
<!--                        <a href="" class="block p-4 mr-8" @click.prevent="setType('draft')" :class="activeType('draft')" :disabled="typeAvailable('draft')">-->
<!--                            <svg class="fill-current h-10 w-10 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/>-->
<!--                            </svg>-->
<!--                            <div class="pt-1">Draft</div>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li class="inline-block text-center font-serif uppercase">-->
<!--                        <a href="" class="block p-4 mr-8" @click.prevent="setType('sealed')" :class="activeType('sealed')" :disabled="typeAvailable('sealed')">-->
<!--                            <svg class="fill-current h-10 w-10 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                <path d="M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/>-->
<!--                            </svg>-->
<!--                            <div class="pt-1">Sealed</div>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 py-8 md:flex">
                <div class="md:w-1/2 md:pr-8">
                    <form @submit.prevent="saveEvent">
                        <div class="w-full mb-2">
                            <label class="block font-serif uppercase tracking-wide mb-1">Event name</label>
                            <input v-model="event.name" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg mb-2" required>
                        </div>

                        <div class="w-full mb-2">
                            <label class="block font-serif uppercase tracking-wide mb-1">Event fee</label>
                            <input type="number" v-model="event.fee" step=".01" min="0" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg mb-2">
                        </div>

                        <div class="w-full mb-2">
                            <label class="block font-serif uppercase tracking-wide mb-1">When</label>
                            <datetime v-model="event.startsAt" input-class="input-white focus:border-gray-500 py-3 px-4 rounded-lg mb-2" format="yyyy-MM-dd HH:mm:ss" type="datetime" :use12-hour="true" :minute-step="15"></datetime>
                        </div>

                        <div class="w-full mb-2">
                            <label class="block font-serif uppercase tracking-wide mb-1">Description</label>
                            <markdown-editor v-model="event.description" ref="markdownEditor"></markdown-editor>
                        </div>

                        <div class="py-8">
                            <submit text="Save"></submit>
                        </div>
                    </form>
                </div>

                <div class="md:w-1/2 mt-8 md:mt-0">
                    <p class="mb-4">
                        Events allow you to setup and invite players to register, and submit their decks, thereby providing
                        a seamless solution. Furthermore, if you run one or more Local Game Stores, you will also be
                        able to run online draft/sealed events, thereby allowing you to support remote play of these
                        events with your local customers, by integrating Legend Story's GEM system, with fabdb.net's
                        deck export utility, and Tabletop Simulator.
                    </p>

                    <div class="text-right mt-8" v-if="event.slug">
                        <cancel-event :event="event"></cancel-event>
                    </div>

                    <div class="mt-8">
                        <manage-players :event="event"></manage-players>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import '~simplemde/dist/simplemde.min.css';
</style>

<script>
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import CancelEvent from './CancelEvent.vue';
    import { Datetime } from 'vue-datetime';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader.js';
    import ManagePlayers from './ManagePlayers.vue';
    import Submit from '../Components/Form/Submit.vue';
    import MarkdownEditor from 'vue-simplemde';

    export default {
        components: {
            Breadcrumbs,
            CancelEvent,
            Datetime,
            HeaderTitle,
            ManagePlayers,
            Submit,
            MarkdownEditor
        },

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
            }
        },

        data() {
            return {
                event: { type: 'constructed' }
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            activeType: function(type) {
                if (this.typeAvailable(type)) {
                    return {
                        'border-b-2': this.event.type == type,
                        'border-gray-800': this.event.type == type,
                        'text-gray-800': this.event.type == type,
                        'text-red-400': this.event.type != type,
                        'hover:text-gray-800': this.event.type != type,
                    }
                } else {
                    return 'text-gray-300';
                }
            },

            saveEvent: function() {
                let payload = {
                    slug: this.event.slug,
                    type: this.event.type,
                    fee: this.event.fee,
                    name: this.event.name,
                    description: this.event.description,
                    startsAt: this.event.startsAt
                };

                let request = this.event.slug ?
                    axios.put('/events/' + this.event.slug, payload) :
                    axios.post('/events', payload);

                request.then(response => {
                    let message = 'Event updated.';

                    if (!this.event.slug) {
                        message  = 'Event successfully registered.';

                        this.event.slug = response.data.slug;
                        this.$router.push({ name: 'events.mine' });
                    }

                    this.addMessage({ status: 'success', message: message });
                });
            },

            setType: function(type) {
                this.event.type = type;
            },

            typeAvailable: function(type) {
                return type == 'constructed' || this.user.role == 'editor' || this.user.role == 'owner';
            }
        },

        extends: LazyLoader((to, callback) => {
            if (to.params.event) {
                axios.get('/events/' + to.params.event + '?include=players').then(response => {
                    callback(function() {
                        this.event = response.data;
                        this.event.startsAt = moment.utc(this.event.startsAt).local().toISOString();
                    });
                });
            } else {
                callback(function(){});
            }
        })
    };
</script>
