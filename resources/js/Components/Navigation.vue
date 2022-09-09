<template>
    <div class="bg-hardly-black backdrop-blur-2 z-25">
        <header class="block relative sm:flex container sm:mx-auto items-center sm:px-4 z-25" v-if="show">
            <div class="flex items-center justify-between sm:border-0 sm:h-full">
                <div class="relative overflow-visible ml-4 sm:ml-0 py-1">
                    <router-link to="/">
                        <img src="/img/fabdb-symbol.png" width="27">
                    </router-link>
                </div>
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
            <!-- Light switch -->
            <button class="flex ml-auto bg-black rounded-full p-1 space-x-4" @click="toggleDarkMode">
                <div class="p-1 rounded-full" :class="{'bg-gray-600': darkMode}">
                    <icon :size="4">
                        <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
                    </icon>
                </div> 
                
                <div class="p-1 rounded-full" :class="{'bg-gray-600': !darkMode}">
                    <icon :size="4">
                        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </icon>
                </div>
            </button>
        </header>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Icon from '../Components/Icon';
    import NavItem from './NavItem';
    import RouteHide from "./RouteHide";

    export default {
        mixins: [RouteHide],
        components: {Icon, NavItem},

        data() {
            return {
                activeItem: null,
                openedItem: null,
                isOpen: false,
                darkMode: localStorage.getItem('darkMode') === 'true',
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

            setDarkMode() {
                console.log(typeof this.darkMode);
                if (this.darkMode == true) {
                    document.body.classList.add("dark");
                } else {
                    document.body.classList.remove("dark");
                }
            },

            toggleDarkMode() {
                this.darkMode = !this.darkMode;

                localStorage.setItem('darkMode', this.darkMode);

                this.setDarkMode();
            },
            
            routeName() {
                return 'tools.life-counter';
            },
        },

        mounted() {
            this.setDarkMode();
        }
    }
</script>
