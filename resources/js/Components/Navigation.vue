<template>
    <header class="sm:flex container sm:mx-auto items-center sm:px-4">
        <div class="flex items-center justify-between py-2 sm:border-0">
            <div class="relative overflow-visible logo ml-4 sm:ml-0">
                <div class="font-serif text-xs font-bold text-gray-200 uppercase logo-text absolute">Card Database</div>
                <router-link to="/"><img src="/img/fab-logo.png" class="h-14"></router-link>
            </div>
            <button type="button" class="block text-white sm:hidden mr-4" @click="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6 w-6 focus:text-orange-300 hover:text-orange-300 focus:outline-none">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" v-if="isOpen"/>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" v-if="!isOpen"/>
                </svg>
            </button>
        </div>
        <div :class="isOpen ? 'block' : 'hidden'" class="nav-items sm:flex sm:bg-transparent">
            <router-link to="/" class="block px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black sm:hover:bg-transparent sm:hover:text-orange-700" @click.native="toggle">Home</router-link>
            <router-link to="/browse/" class="block px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black sm:hover:bg-transparent sm:hover:text-orange-700" @click.native="toggle">Browse</router-link>
            <router-link to="/collection/" class="block px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black sm:hover:bg-transparent sm:hover:text-orange-700" @click.native="toggle">My collection</router-link>
            <router-link to="/deck-builder/" class="block px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black sm:hover:bg-transparent sm:hover:text-orange-700" @click.native="toggle">Deck builder</router-link>
            <router-link to="/support/" class="block px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black sm:hover:bg-transparent sm:hover:text-orange-700" @click.native="toggle">Support</router-link>
        </div>

        <!--<router-link to="/support/" class="text-center text-white font-serif uppercase px-3 hover:text-orange-700">Support</router-link>-->
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false
            }
        },

        methods: {
            toggle: function() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>