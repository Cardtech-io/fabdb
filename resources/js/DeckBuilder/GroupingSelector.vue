<template>
    <div class="relative font-serif">
        <button class="relative text-left border border-gray-200 text-base font-serif rounded-lg px-4 py-1 uppercase hover:bg-white hover:border-gray-500 flex" @click="isOpen = !isOpen" :class="{ 'border-gray-500': isOpen, 'bg-white': isOpen, 'bg-gray-200': !isOpen, 'z-75': isOpen }" style="width: 150px">
            <span class="inline-block mr-1 flex-1">{{ options[grouping] || 'Grouping' }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block h-6 fill-current">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </button>

        <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default" @click="isOpen = false" v-if="isOpen"></button>

        <div class="w-full absolute right-0 rounded-lg bg-white z-100 overflow-hidden mt-2 border border-gray-500" v-if="isOpen">
            <button v-for="(text, grouping) in options" class="w-full text-base text-left px-4 py-1 hover:bg-blue-400 hover:text-white uppercase" @click="select(grouping)">{{ text }}</button>
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
