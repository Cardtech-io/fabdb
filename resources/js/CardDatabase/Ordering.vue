<template>
    <div class="relative font-serif">
        <button class="relative flex items-center text-left text-base font-serif rounded-lg p-1 uppercase hover:bg-white dark:hover:bg-gray-600" @click="isOpen = !isOpen" :class="{'bg-white dark:bg-gray-600': isOpen, 'bg-gray-200 dark:bg-gray-800': !isOpen, 'z-75': isOpen}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
        </button>

        <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2" @click="isOpen = false" v-if="isOpen"></button>

        <div class="w-full absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden mt-2 shadow-lg" v-if="isOpen" style="width: 150px">
            <button v-for="(order, option) in options" class="flex items-center space-x-2 w-full text-base text-left px-4 py-1 uppercase" :class="option === order ? 'bg-blue-400 text-white' : 'hover:bg-blue-400 hover:text-white'" @click="select(option)">
                <span>{{ order.name }}</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
                options: {
                    identifier: {
                        name: 'Alphabetical',
                        icon: '<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>'
                    },
                    sku: {
                        name: 'Card number',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>'
                    }
                }
            };
        },

        methods: {
            select(order) {
                this.$emit('order-changed', order);
                this.isOpen = false;
            }
        }
    };
</script>
