<template>
    <div class="absolute bottom-0 right-0">
        <div class="transition flex flex-col h-96 -mt-96 -ml-40 mb-4 overflow-hidden w-56 bg-gray-100 rounded-lg shadow-lg z-100" v-if="open" :class="{'opacity-100': open, 'opacity-0': !open}">
            <header class="relative bg-primary px-4 py-2 text-center font-serif uppercase text-white z-50">
                History
            </header>
            <div class="relative flex-grow py-2">
                <div class="absolute bottom-0 w-full space-y-1 z-25">
                    <div v-for="record in history" class="px-4 odd:bg-black">
                        {{record.message}}
                    </div>
                </div>
            </div>
        </div>
        <button class="transition duration-300 transform bg-primary hover:bg-secondary rounded-full h-16 w-16 flex justify-center items-center text-white shadow-lg hover:scale-110" @click="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        </button>
    </div>
</template>

<script>
    import Historian from "./Historian.js";

    export default {
        data: () => ({
            history: Historian.history,
            open: false
        }),

        methods: {
            toggle() {
                this.open = !this.open;
            }
        }
    }
</script>
