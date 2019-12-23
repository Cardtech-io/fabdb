<template>
    <div>
        <header-title title="Profile Update"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto bg-white py-8 px-8 md:flex">
                <div class="md:w-1/2 pr-8">
                    <form @submit.prevent="submit">
                        <div class="w-full">
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
                    </form>
                </div>

                <div class="mt-8 md:w-1/2 md:mt-0">
                    <h2 class="text-xl font-serif uppercase">What data do we collect?</h2>
                    <p class="my-4">At fabdb.net, we endeavour to collect as little information about you as possible.</p>
                    <p class="my-4">Some details, such as email address, are absolutely essential. Not for marketing, but
                        purely for identification purposes, and application notifications.</p>
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
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Breadcrumbs from '../Components/Breadcrumbs.vue';

    export default {
        components: { Breadcrumbs, HeaderTitle },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Profile Update' }
                ],

                email: null,
                gemId: null,
                name: null,
            }
        },

        methods: {
            submit: function() {
                const data = {
                    email: this.email,
                    gemId: this.gemId,
                    name: this.name
                };

                axios.put('profile', data).then(response => {

                });
            }
        }
    };
</script>