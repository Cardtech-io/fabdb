<template>
    <div class="flex">
        <button class="text-sm text-white bg-blue-600 rounded-lg flex items-center overflow-hidden mr-2 hover:bg-blue-400 cursor-pointer my-1" v-if="filtersEnabled" @click="clearFilters">
            <span class="block py-1 pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6">
                    <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/>
                </svg>
            </span>
            <span class="block px-2">
                Filters are on
            </span>
            <span class="block border-l border-white p-2 pr-3 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-5">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                </svg>
            </span>
        </button>

        <div class="relative font-serif mr-4">
            <button class="relative text-left border border-gray-200 text-base font-serif rounded-lg px-4 py-2 uppercase z-75 hover:bg-white hover:border-gray-500 flex" @click="isOpen = !isOpen" :class="{ 'border-gray-500': isOpen, 'bg-white': isOpen, 'bg-gray-200': !isOpen }" style="width: 200px">
                <span class="inline-block mr-1 flex-1">Filters</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block h-6 fill-current">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </button>

            <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default" @click="isOpen = false" v-if="isOpen"></button>

            <div class="w-full absolute right-0 rounded-lg bg-white z-100 overflow-hidden mt-2 border border-gray-500" v-if="isOpen">
                <button v-for="(text, filter) in availableFilters" class="group w-full text-base text-left p-2 hover:bg-blue-400 hover:text-white uppercase flex items-center" @click="select(filter)">
                    <span class="inline-block h-4 w-4 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-green-500 group-hover:text-white" v-if="hasFilter(filter)">
                            <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/>
                        </svg>
                    </span>
                    <span class="flex-1">
                        {{ text }}
                    </span>
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
                isOpen: false,

                availableFilters: {
                    actions: 'Actions',
                    attacks: 'Attacks',
                    attackReactions: 'Attack reactions',
                    defenseReactions: 'Defense reactions',
                    instants: 'Instants',
                }
            };
        },

        computed: {
            ...mapState('deck', ['filters']),

            filtersEnabled: function() {
                return this.filters.length;
            }
        },

        methods: {
            ...mapActions('deck', ['clearFilters', 'toggleFilter']),

            hasFilter: function(filter) {
                return this.filters.indexOf(filter) > -1;
            },

            select: function(filter) {
                this.toggleFilter({ filter });
            }
        }
    };
</script>
