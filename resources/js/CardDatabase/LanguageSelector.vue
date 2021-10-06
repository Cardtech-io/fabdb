<template>
    <div class="relative font-serif">
        <button class="w-full relative flex items-center text-left bg-white border border-gray-200 text-base font-serif rounded-lg px-4 py-1 uppercase hover:border-gray-500" @click="isOpen = !isOpen" :class="{ 'border-gray-500 z-75': isOpen }">
            <span class="inline-block mr-1 flex-1">Language ({{languages[selected].name}})</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block h-5 w-5 fill-current ml-auto">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </button>

        <button type="button" class="fixed top-0 right-0 bottom-0 left-0 bg-red z-50 bg-black opacity-25 w-full h-full cursor-default backdrop-blur-2" @click="isOpen = false" v-if="isOpen"></button>

        <div class="w-full absolute left-0 rounded-lg bg-white z-100 overflow-hidden mt-1 border border-gray-500" v-if="isOpen">
            <button v-for="(language, code) in languages" class="w-full flex items-center space-x-2 text-base text-left px-4 py-1 uppercase" :class="code === selected ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'" @click="select(code)">
                <icon :size="5" :box="128" v-html="language.icon"/>
                <span>
                    {{language.name}}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            languages: {
                required: true,
                type: Object
            }
        },

        data() {
            return {
                selected: 'en',
                isOpen: false
            };
        },

        methods: {
            select(code) {
                if (code !== this.code) {
                    this.isOpen = false;
                    this.selected = code;
                    this.$emit('language-selected', code);
                }
            }
        }
    };
</script>
