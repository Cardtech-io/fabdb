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
                                    <avatar :user="user" :width="100"></avatar>
                                </div>
                            </div>

                            <div class="flex-auto">
                                <label class="block font-serif uppercase tracking-wide mb-1">Avatar</label>
                                <select v-model="avatar" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto">
                                    <option value="bauble">Bauble</option>
                                    <option :value="hero.avatar()" v-for="hero in heroes">{{ hero.name() }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Email address</label>
                            <input type="email" v-model="email" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                        </div>
                        <button v-if="!changePassword" class="button-secondary text-sm py-3 px-4 mt-4 rounded-lg" @click="changePassword = true">I'd like to add or change my password</button>
                        <div v-if="changePassword" class="p-4 bg-gray-100 rounded-lg mt-4">
                            <div class="w-full mb-4" v-if="user.hasPassword">
                                <label class="block font-serif uppercase tracking-wide mb-1">Old password</label>
                                <input type="password" v-model="oldPassword" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                            </div>
                            <div class="w-full">
                                <label class="block font-serif uppercase tracking-wide mb-1">New password</label>
                                <input type="password" v-model="newPassword" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                            </div>
                            <div class="w-full mt-4" v-if="newPassword">
                                <label class="block font-serif uppercase tracking-wide mb-1">Confirm password</label>
                                <input type="password" v-model="newPasswordConfirmation" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                            </div>
                            <p class="border border-blue-500 text-blue-500 p-2 rounded-lg text-sm mt-4">At FaB DB we take security seriously. Your password must be at least 8 characters long, and consist of at least 1 non-alpha character (!?<>.,)</p>
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
                            <input type="text" v-model="name" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">GEM player ID</label>
                            <input type="text" v-model="gemId" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        </div>
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Preferred currency</label>
                            <select v-model="currency" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                                <option value="AUD">AUD</option>
                                <option value="CAD">CAD</option>
                                <option value="NZD">NZD</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>

                        <h2 class="font-serif text-xl uppercase mt-8 mb-4">Interface</h2>

                        <div class="w-full mt-4 mb-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Width</label>
                            <select v-model="width" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                                <option value="narrow">Narrow</option>
                                <option value="wide">Wide</option>
                            </select>
                        </div>

                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Theme</label>
                            <select v-model="theme" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                                <option value="default">Default</option>
                                <option value="aria">Aria</option>
                                <option value="demonastery">Demonastery</option>
                                <option value="savage-lands">Savage Lands</option>
                                <option value="the-pits">The Pits</option>
                            </select>
                        </div>

                        <div class="w-full mt-4 mb-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Card borders</label>
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

                        <submit text="Save" class="mt-8" :disabled="saving"></submit>
                    </form>
                </div>

                <div class="mt-8 md:w-1/2 md:mt-0">
                    <router-link :to="{ name: 'user.profile.decks', params: { user: user.slug } }" class="inline-block button-primary mb-4 rounded-full p-4">View your public profile</router-link>

                    <h2 class="text-xl font-serif uppercase mb-2">Your membership level</h2>

                    <div class="mb-8">
                        <div v-if="user.subscription">
                            <badge :subscription-level="user.subscription"></badge>
                        </div>
                        <p v-else>If you love what we're doing, please <a href="https://www.patreon.com/fabdb" class="link">support us on Patreon.</a></p>
                    </div>

                    <h2 class="text-xl font-serif uppercase">What data do we collect?</h2>

                    <p class="my-4">At fabdb.net, we endeavour to collect as little information about you as possible.</p>
                    <p class="my-4">Some details, such as email address, are absolutely essential. Not for marketing, but
                        purely for identification purposes and application notifications.</p>
                    <p>Other details, like name, gem id.etc. are only required if you use certain features. You will be
                        prompted for these if and when that occurs.</p>
                    <p>Currency will preferentially display stores and item listings that sell products in your preferred currency.</p>
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
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Card from "../CardDatabase/Card";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from "../Components/LazyLoader";
    import Models from "../Utilities/Models";
    import Submit from "../Components/Form/Submit";

    export default {
        components: { Avatar, Badge, Breadcrumbs, HeaderTitle, Submit },

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

            width: {
                get() {
                    return this.user.width;
                },

                set(width) {
                    this.setUserParam({ param: 'width', value: width });
                }
            },

            currency: {
                get() {
                    return this.user.currency;
                },

                set(currency) {
                    this.setUserParam({ param: 'currency', value: currency });
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

            theme: {
                get() {
                    return this.user.theme || 'default';
                },

                set(theme) {
                    this.setUserParam({ param: 'theme', value: theme });
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
                changePassword: false,
                oldPassword: '',
                newPassword: '',
                newPasswordConfirmation: '',
                saving: false
            }
        },

        methods: {
            ...mapActions('session', ['setUserParam']),
            ...mapActions('messages', ['addMessage', 'addValidationMessages']),

            save: function() {
                this.saving = true;

                const data = {
                    email: this.email,
                    name: this.name,
                    gemId: this.gemId,
                    currency: this.currency,
                    need: this.need,
                    view: this.view,
                    oldPassword: this.oldPassword,
                    newPassword: this.newPassword,
                    newPassword_confirmation: this.newPasswordConfirmation,
                    avatar: this.avatar,
                    theme: this.theme,
                    width: this.width,
                };

                axios.put('/profile', data).then(response => {
                    this.addMessage({ status: 'success', message: 'Profile updated' });
                    this.saving = false;
                }).catch(error => {
                    if (error.response.status === 422) {
                        this.addValidationMessages({messages: error.response.data.errors});
                    }
                    this.saving = false;
                });
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/cards/heroes').then(response => {
                callback(function() {
                    this.heroes = Models.hydrateMany(response.data, Card);
                });
            });
        })
    };
</script>
