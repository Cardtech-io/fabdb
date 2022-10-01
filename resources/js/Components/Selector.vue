<template>
    <div class="relative text-sm xl:text-base">
        <button class="relative flex items-center overflow-hidden rounded-lg hover:bg-white dark:hover:bg-gray-600 leading-none px-2" @click="isOpen = !isOpen" :class="{ 'bg-white dark:bg-gray-600': isOpen, 'bg-gray-200 dark:bg-black': !isOpen, 'z-75': isOpen }" :style="{width}" v-if="layout === 'text'">
            <slot name="title">
                <span class="py-2">{{title}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-6 fill-current ml-auto" :class="{'transition-all transform rotate-180': isOpen}">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </slot>
        </button>

        <button v-else @click="isOpen = !isOpen" class="relative flex items-center" :class="{ 'z-75': isOpen }">
            <slot name="title"></slot>
        </button>

        <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-50 w-full h-full cursor-default backdrop-blur-2" @click="isOpen = false" v-if="isOpen"></button>

        <div class="absolute right-0 rounded-lg bg-white dark:bg-gray-800 z-100 overflow-hidden shadow-lg" v-if="isOpen" :style="{width: width + 'px'}">
            <slot name="items" v-bind:selected="selected"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            default: {

            },

            layout: {
                type: String,
                default: 'text'
            },

            title: {
                type: String,
            },

            width: {
                type: Number
            }
        },

        data() {
            return {
                isOpen: false,
                options: [],
                selected: this.default,
            };
        },

        methods: {
            close() {
                this.isOpen = false;
            },

            select(value) {
                this.selected = value;
                this.close();
            }
        }
    };
</script>
