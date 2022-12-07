<template>
    <div class="text-sm">
        <!-- Desktop view -->
        <div class="hidden xl:flex rounded-lg overflow-hidden">
            <button type="button" class="flex-grow flex items-center space-x-2 px-2" v-for="(mode, view) in modes" @click="select(view)" :class="classes(view)">
                <icon :size="5" v-html="mode.icon"/>
                <span class="py-2">{{ mode.name }}</span>
            </button>
        </div>

        <!-- Mobile view -->
        <div class="block xl:hidden relative">
            <button class="relative flex items-center text-left rounded-lg px-4 py-1 hover:bg-white dark:hover:bg-gray-600" @click="isOpen = !isOpen" :class="{ 'bg-white dark:bg-gray-600': isOpen, 'bg-white': isOpen, 'bg-gray-200 dark:bg-black': !isOpen, 'z-75': isOpen }" style="width: 150px">
                <span class="inline-block mr-1 flex-1">{{modes[mode].name}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block h-5 w-5 fill-current ml-auto">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </button>

            <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2" @click="isOpen = false" v-if="isOpen"></button>

            <div class="w-full absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden mt-2 shadow-lg" v-if="isOpen">
                <button v-for="(mode, option) in modes" class="flex items-center space-x-2 w-full text-left px-4 py-1" :class="option === mode ? 'bg-blue-400 text-white' : 'hover:bg-blue-400 hover:text-white'" @click="select(option)">
                    <icon :size="5" v-html="mode.icon"/>
                    <span>{{ mode.name }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        data() {
            return {
                isOpen: false
            };
        },

        computed: {
            ...mapState('deck', ['mode']),

            modes() {
                return {
                    all: {
                        name: 'Deck',
                        icon: '<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>'
                    },
                    search: {
                        name: 'Edit',
                        icon: '<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />'
                    },
                    sideboard: {
                        name: 'Sideboard',
                        icon: '<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>'
                    },
                    metrics: {
                        name: 'Metrics',
                        icon: '<path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 6a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM8.584 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.58-1.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clip-rule="evenodd" />'
                    },
                    details: {
                        name: 'Settings',
                        icon: '<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />'
                    },
                };
            }
        },

        methods: {
            ...mapActions('deck', ['setMode']),

            classes(view) {
                return {
                    'button-disabled': this.mode === view,
                    'button-secondary': this.mode !== view
                };
            },

            select(mode) {
                if (mode !== this.mode) {
                    this.setMode({ mode });
                    this.isOpen = false;
                }
            }
        }
    };
</script>
