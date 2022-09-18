<template>
    <div class="bg-hardly-black backdrop-blur-2 z-25">
        <header class="block relative sm:flex container sm:mx-auto items-center sm:px-4 z-25" v-if="show">
            <div class="flex items-center justify-between sm:border-0 sm:h-full">
                <div class="relative overflow-visible ml-4 sm:ml-0 py-1">
                    <router-link to="/">
                        <img src="/img/fabdb-symbol.png" width="27">
                    </router-link>
                </div>
                <light-switch class="sm:hidden mr-4"/>
                <button type="button" class="block text-white sm:hidden mr-4" @click="toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6 w-6 focus:text-red-300 hover:text-red-300 focus:outline-none">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" v-if="isOpen"/>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" v-if="!isOpen"/>
                    </svg>
                </button>
            </div>
            <div :class="isOpen ? 'block' : 'hidden'" class="nav-items sm:flex sm:bg-transparent sm:ml-2 sm:h-full">
                <nav-item :item="item" v-for="item in items" :key="item.link" :active="activeItem" :opened="openedItem" @clicked="clicked" @opened="opened"></nav-item>
            </div>
            <div class="hidden sm:block ml-auto">
                <light-switch/>
            </div>
        </header>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import LightSwitch from './LightSwitch.vue';
    import NavItem from './NavItem.vue';
    import RouteHide from "./RouteHide.js";

    export default {
        mixins: [RouteHide],
        components: {LightSwitch, NavItem},

        data() {
            return {
                activeItem: null,
                openedItem: null,
                isOpen: false
            }
        },

        computed: {
            ...mapGetters('session', ['user']),

            items: function() {
                let items = [
                    { link: '/', text: 'Home' },

                    { text: 'Cards', children: [
                        { link: '/cards/browse', text: 'Browse' },
                        { link: '/cards/fabled', text: 'Fabled cards' },
                    ]},

                    { text: 'Decks', children: [
                        { link: '/decks', text: 'Featured' },
                        { link: '/decks/browse', text: 'Browse' },
                        { link: '/decks/starters', text: 'Starter decks' },
                        { link: '/decks/mine', text: 'My decks' },
                    ]},

                    { text: 'Tools', children: [
                        { link: '/collection', text: 'Collection manager' },
                        { link: '/decks/build', text: 'Deck builder' },
                        { link: '/practise', text: 'Limited practise' },
                        { link: '/tools/life-counter', text: 'Life counter' },
                        { link: '/packs/generate', text: 'Booster generator' },
                        { link: '/resources/api', text: 'API' },
                    ]},

                    { link: '/support', text: 'Subscription' },
                ];

                if (this.user) {
                    items.push({
                        text: 'Account',
                        children: [
                            { link: '/events/mine', text: 'My events' },
                            { link: '/profile', text: 'Profile' },
                            { link: '/logout', text: 'Logout' },
                        ]
                    });
                } else {
                    items.push({ link: '/login', text: 'Login / Register' });
                }

                return items;
            }
        },

        methods: {
            clicked(item) {
                this.activeItem = item;
                this.toggle();
            },

            opened(item) {
                this.openedItem = item;
            },

            toggle() {
                this.isOpen = !this.isOpen;
            },

            routeName() {
                return 'tools.life-counter';
            },
        }
    }
</script>
