<template>
    <div id="app">
        <authenticator></authenticator>

        <!-- Header -->
        <div class="theme-bg">
            <div class="py-4 navigation">
                <div class="clearfix container sm:mx-auto">
                    <div class="sm:float-left overflow-visible">
                        <div class="mx-auto relative overflow-visible logo">
                            <div class="font-serif text-xs font-bold text-gray-200 uppercase logo-text absolute">Card Database</div>
                            <img src="/img/fab-logo.png" class="h-16">
                        </div>
                    </div>

                    <navigation></navigation>
                </div>
            </div>

            <div class="container sm:mx-auto py-20">
                <h1 class="font-serif text-white text-6xl uppercase">Welcome</h1>
                <p class="text-white">FAB DB is an unofficial, Flesh & Blood TCG website, with various features such as deck builder, collection manager and more.</p>
            </div>
        </div>

        <!-- Content -->
        <div class="clearfix">
            <router-view></router-view>
        </div>

        <!-- Footer -->
        <div class="py-8">
            <div class="text-center text-sm text-gray-600">
                <p><a href="/" class="link">fabdb.net</a> is a free online resource for the Flesh &amp; Blood™ TCG by <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p><a href="/" class="link">fabdb.net</a> is in no way affiliated with <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p>All intellectual IP belongs to <a href="https://legendstory.com" class="link">Legend Story Studios®</a>, Flesh &amp; Blood™, and set names are trademarks of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>. Flesh and Blood™ characters, cards, logos, and art are property of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
                <p><a href="/" class="link">fabdb.net</a> is not a digital gaming product.</p>
                <br>
                <p>An application and community project by <a href="https://kirkbushell.me" class="link">Kirk Bushell</a>.</p>
            </div>
        </div>

        <messages></messages>
    </div>
</template>

<script>
    import Authenticator from './Auth/Authenticator.vue';
    import Navigation from './Components/Navigation.vue';
    import Messages from './Components/Messages.vue';

    export default {
        components: { Authenticator, Messages, Navigation },

        metaInfo: {
            title: 'Home, Browse Cards',
            titleTemplate: '%s | fabdb.net'
        }
    };
</script>