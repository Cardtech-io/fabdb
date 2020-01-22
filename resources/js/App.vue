<template>
    <div id="app">
        <!-- Header -->
        <div class="navigation">
            <navigation></navigation>
        </div>

        <!-- Content -->
        <div class="clearfix">
            <router-view></router-view>
        </div>

        <!-- Footer -->
        <footer class="footer p-8">
            <div class="container sm:mx-auto sm:text-center text-sm text-gray-400">
                <p class="my-2"><router-link to="/support" class="link">Support</router-link> | <router-link to="/privacy" class="link">Privacy policy</router-link></p>
                <p><a href="/" class="link">fabdb.net</a> is a free online resource for the Flesh &amp; Blood™ TCG by <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p><a href="/" class="link">fabdb.net</a> is in no way affiliated with <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p>All intellectual IP belongs to <a href="https://legendstory.com" class="link">Legend Story Studios®</a>, Flesh &amp; Blood™, and set names are trademarks of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>. Flesh and Blood™ characters, cards, logos, and art are property of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p><a href="/" class="link">fabdb.net</a> is not a digital gaming product.</p>
            </div>
        </footer>

        <messages></messages>
    </div>
</template>

<script>
    import axios from 'axios';
    import Navigation from './Components/Navigation.vue';
    import Messages from './Components/Messages.vue';

    import { mapActions } from 'vuex';

    export default {
        components: { Messages, Navigation },

        metaInfo: {
            title: 'Flesh & Blood TCG Card Manager, Deck Builder and more!',
            titleTemplate: '%s | fabdb.net',
            meta: [
                { vmid: 'description', name: 'description', content: 'fabdb.net is a free card management and deck builder for the fantastic TCG, Flesh & Blood.' }
            ]
        },

        methods: {
            ...mapActions('session', ['setSession']),
        },

        created() {
            if (window.session) {
                this.setSession({ session: window.session });
            }
        }
    };
</script>