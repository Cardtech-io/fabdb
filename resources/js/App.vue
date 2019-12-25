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
    import Navigation from './Components/Navigation.vue';
    import Messages from './Components/Messages.vue';

    import { mapActions } from 'vuex';

    export default {
        components: { Messages, Navigation },

        metaInfo: {
            title: 'Home, Browse Cards',
            titleTemplate: '%s | fabdb.net',
            meta: [
                { vmid: 'description', name: 'description', content: 'fabdb.net is a free card management and deck building solution for the fantastic TCG, Flesh & Blood.' }
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