<template>
    <div class="relative font-serif mr-2 sm:mr-4">
        <button class="relative text-left border border-gray-200 text-base font-serif rounded-lg px-4 py-2 uppercase hover:bg-white hover:border-gray-500 flex" @click="isOpen = !isOpen" :class="{ 'border-gray-500': isOpen, 'bg-white': isOpen, 'bg-gray-200': !isOpen, 'z-75': isOpen }" style="width: 150px">
            <span class="inline-block mr-1 flex-1">{{ modes[mode] }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block h-6 fill-current">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </button>

        <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default" @click="isOpen = false" v-if="isOpen"></button>

        <div class="w-full absolute right-0 rounded-lg bg-white z-100 overflow-hidden mt-2 border border-gray-500" v-if="isOpen">
            <button v-for="(text, mode) in modes" class="w-full text-base text-left px-4 py-2 hover:bg-blue-400 hover:text-white uppercase" @click="select({ mode })">{{ text }}</button>
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
            ...mapGetters('deck', ['requiresSideboard']),

            modes() {
                return {
                    all: 'Deck',
                    search: 'Search',
                    sideboard: 'Sideboard',
                    details: 'Settings'
                };
            }
        },

        methods: {
            ...mapActions('deck', ['setMode']),

            select: function(mode) {
                this.setMode(mode);
                this.isOpen = false;
            }
        }
    };
</script>
