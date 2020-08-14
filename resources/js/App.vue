<template>
    <div id="app" class="flex flex-col theme-bg relative h-full" :class="theme">
        <!-- Header -->
        <div class="navigation">
            <navigation></navigation>
        </div>

        <!-- Content -->
        <div class="clearfix flex-grow">
            <router-view></router-view>
        </div>

        <!-- Footer -->
        <footer class="footer p-8">
            <div class="container sm:mx-auto sm:text-center text-sm text-gray-400">
                <p class="my-2"><router-link to="/support" class="link">Support</router-link> |  <a href="https://facebook.com/fleshandblooddb" class="link" target="_blank">Facebook</a> |  <router-link to="/privacy" class="link">Privacy policy</router-link></p>
                <p><a href="/" class="link">fabdb.net</a> is a free online resource for the Flesh &amp; Blood™ TCG by <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p><a href="/" class="link">fabdb.net</a> is in no way affiliated with <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p>All intellectual IP belongs to <a href="https://legendstory.com" class="link">Legend Story Studios®</a>, Flesh &amp; Blood™, and set names are trademarks of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>. Flesh and Blood™ characters, cards, logos, and art are property of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p><a href="/" class="link">fabdb.net</a> is not a digital gaming product.</p>
            </div>
        </footer>

        <messages></messages>
        <complete-profile></complete-profile>
        <version-handler></version-handler>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';
    import Navigation from './Components/Navigation.vue';
    import Messages from './Components/Messages.vue';
    import CompleteProfile from './Identity/CompleteProfile.vue';
    import VersionHandler from './Components/VersionHandler.vue';

    import { mapActions } from 'vuex';

    export default {
        components: {
            CompleteProfile,
            Messages,
            Navigation,
            VersionHandler
        },

        computed: {
            ...mapGetters('session', ['user']),

            theme() {
                let theme = 'default';

                if (this.user && this.user.theme) {
                    theme = this.user.theme;
                }

                return 'theme-'+theme;
            }
        },

        metaInfo: {
            title: 'Flesh and Blood TCG, deck builder, collection manager and more!',
            titleTemplate: '%s',
            meta: [
                { vmid: 'og:url', property: 'og:url', content: window.location.href },
                { vmid: 'description', name: 'description', content: 'fabdb.net is a free card management and deck builder for the fantastic TCG, Flesh & Blood.' },
                { vmid: 'fb:app_id', property: 'fb:app_id', content: 269161470718107 }
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
