<template>
    <button class="flex text-gray-300 ml-auto bg-black rounded-full space-x-4" @click="toggleDarkMode">
        <div class="p-1 rounded-full" :class="{'bg-gray-600 text-purple-400': darkMode}">
            <icon :size="4">
                <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
            </icon>
        </div>

        <div class="p-1 rounded-full" :class="{'bg-gray-600 text-yellow-300': !darkMode}">
            <icon :size="4">
                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
            </icon>
        </div>
    </button>
</template>

<script>
    import Icon from './Icon';

    export default {
        components: {Icon},

        data() {
            return {
                darkMode: localStorage.getItem('darkMode') === 'true',
            }
        },

        methods: {
            setDarkMode() {
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
        },

        mounted() {
            this.setDarkMode();
        }
    }
</script>
