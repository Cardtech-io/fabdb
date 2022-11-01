<template>
    <div class="relative text-sm">
        <button class="relative flex items-center overflow-hidden rounded-lg hover:bg-white dark:hover:bg-gray-600 leading-none px-2" @click="isOpen = !isOpen" :class="{ 'bg-white dark:bg-gray-600': isOpen, 'bg-gray-200 dark:bg-black': !isOpen, 'z-75': isOpen }" style="width: 150px">
            <span class="py-2">Grouping</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-6 fill-current ml-auto" :class="{'transform rotate-180': isOpen}">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </button>

        <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2" @click="isOpen = false" v-if="isOpen"></button>

        <div class="w-full absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden mt-2 shadow-lg" v-if="isOpen">
            <button v-for="(text, option) in options" class="w-full text-left px-4 py-1" :class="option === grouping ? 'bg-blue-400 text-white' : 'hover:bg-blue-400 hover:text-white'" @click="select(option)">{{ text }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            grouping: {
                type: String,
                required: true,
            },

            options: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                isOpen: false
            };
        },

        methods: {
            select(grouping) {
                this.$emit('selected', grouping);
                this.isOpen = false;
            }
        }
    };
</script>
