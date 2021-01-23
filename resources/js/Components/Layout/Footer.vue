<template>
    <footer class="footer p-8 bg-semi-black" v-if="show">
        <div class="container sm:mx-auto sm:text-center text-sm text-gray-400">
            <p class="my-2"><router-link to="/support" class="link">Support</router-link> |  <a href="https://facebook.com/fleshandblooddb" class="link" target="_blank">Facebook</a> |  <router-link to="/privacy" class="link">Privacy policy</router-link></p>
            <p><a href="/" class="link">fabdb.net</a> is a free online resource for the Flesh &amp; Blood™ TCG by <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
            <p><a href="/" class="link">fabdb.net</a> is in no way affiliated with <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
            <p>All intellectual IP belongs to <a href="https://legendstory.com" class="link">Legend Story Studios®</a>, Flesh &amp; Blood™, and set names are trademarks of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>. Flesh and Blood™ characters, cards, logos, and art are property of <a href="https://legendstory.com" class="link">Legend Story Studios®</a>.</p>
            <p><a href="/" class="link">fabdb.net</a> is not a digital gaming product.</p>
        </div>
    </footer>
</template>

<script>
    import RouteHide from "../RouteHide";

    export default {
        mixins: [RouteHide],

        methods: {
            routeName() {
                return 'tools.life-counter';
            }
        }
    }
</script>
