<template>
    <div>
        <header-title title="Profile Update"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto bg-white py-8 px-8 md:flex">
                <div class="md:w-1/2 md:pr-8">
                    <form @submit.prevent="save">
                        <div class="w-full flex items-center">
                            <div class="mr-4">
                                <div class="rounded-xl overflow-hidden">
                                    <avatar :user="user" :width="75"></avatar>
                                </div>
                            </div>

                            <div class="flex-auto">
                                <label class="block font-serif uppercase tracking-wide mb-1">Avatar</label>
                                <select v-model="avatar" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto">
                                    <option value="bauble">Bauble</option>
                                    <option value="rhinar-young">Rhinar (Young)</option>
                                    <option value="rhinar-adult">Rhinar (Adult)</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Email address</label>
                            <input type="email" v-model="email" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
                            <input type="text" v-model="name" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">GEM player ID</label>
                            <input type="text" v-model="gemId" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        </div>

                        <h2 class="font-serif text-xl uppercase mt-8 mb-4">Cards</h2>

                        <div class="w-full mb-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Card view</label>
                            <select v-model="view" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                                <option value="borderless">Borderless</option>
                                <option value="bordered">Bordered</option>
                            </select>
                        </div>

                        <h2 class="font-serif text-xl uppercase mt-8 mb-4">Collection management</h2>

                        <div class="w-full mb-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Cards required until no longer needed</label>
                            <select v-model="need" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div class="text-sm mt-2">
                                When managing your collection, the default minimum cards required to satisfy the "need"
                                metric, is 1. For example, setting this to 2, means the manager will continue to show
                                those cards until you have 2 in your collection.
                            </div>
                        </div>

                        <input type="submit" value="Save" class="appearance-none block w-full mt-8 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50" :disabled="saving">
                    </form>
                </div>

                <div class="mt-8 md:w-1/2 md:mt-0">
                    <h2 class="text-xl font-serif uppercase mb-2">Your membership level</h2>

                    <div class="mb-8">
                        <div v-if="user.subscription">
                            <badge :subscription-level="user.subscription"></badge>
                        </div>
                        <p v-else>If you love what you're doing, please <a href="https://www.patreon.com/fabdb" class="link">support us on Patreon.</a></p>
                    </div>

                    <h2 class="text-xl font-serif uppercase">What data do we collect?</h2>

                    <p class="my-4">At fabdb.net, we endeavour to collect as little information about you as possible.</p>
                    <p class="my-4">Some details, such as email address, are absolutely essential. Not for marketing, but
                        purely for identification purposes and application notifications.</p>
                    <p>Other details, like name, gem id.etc. are only required if you use certain features. You will be
                        prompted for these if and when that occurs.</p>
                    <p class="my-4">Name for example, is only needed if you participate within the community, providing feedback and
                        starting threads.etc. Your gem ID is only needed when you export your decks to PDF format, which
                        can be handed in at tournaments. If you like, your gem ID does not need to be saved, and instead
                        will be asked when generating a PDF. When asked for in this manner, your gem ID is not saved in
                        our database.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapGetters, mapActions } from 'vuex';

    import Avatar from './Avatar.vue';
    import Badge from './Badge.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Breadcrumbs from '../Components/Breadcrumbs.vue';

    export default {
        components: { Avatar, Badge, Breadcrumbs, HeaderTitle },

        computed: {
            ...mapGetters('session', ['user']),

            email: {
                get() {
                    return this.user.email;
                },

                set(email) {
                    this.setUserParam({ param: 'email', value: email });
                }
            },

            name: {
                get() {
                    return this.user.name;
                },

                set(name) {
                    this.setUserParam({ param: 'name', value: name });
                }
            },

            gemId: {
                get() {
                    return this.user.gemId;
                },

                set(gemId) {
                    this.setUserParam({ param: 'gemId', value: gemId });
                }
            },

            need: {
                get() {
                    return this.user.need;
                },

                set(need) {
                    this.setUserParam({ param: 'need', value: need });
                }
            },

            view: {
                get() {
                    return this.user.view;
                },

                set(view) {
                    this.setUserParam({ param: 'view', value: view });
                }
            },

            avatar: {
                get() {
                    return this.user.avatar;
                },

                set(avatar) {
                    this.setUserParam({ param: 'avatar', value: avatar });
                }
            },
        },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Profile Update' }
                ],

                saving: false
            }
        },

        methods: {
            ...mapActions('session', ['setUserParam']),
            ...mapActions('messages', ['addMessage']),

            save: function() {
                this.saving = true;

                const data = {
                    email: this.email,
                    name: this.name,
                    gemId: this.gemId,
                    need: this.need,
                    view: this.view,
                    avatar: this.avatar,
                };

                axios.put('/profile', data).then(response => {
                    this.addMessage({ status: 'success', message: 'Profile updated' });
                    this.saving = false;
                });
            }
        },
    };
</script>