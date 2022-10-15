<template>
    <div>
        <header class="bg-secondary flex items-center text-white">
            <div class="m-4 mr-2">
                <icon :size="6">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </icon>
            </div>
            <h2 class="flex-grow relative font-serif text-xl uppercase">
                Search syntax help
                <button class="absolute top-0 right-0 mr-2 -mt-1" @click="hide()">
                    <icon :size="6">
                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/>
                    </icon>
                </button>
            </h2>
        </header>
        <div class="p-4 border-b space-y-4">
            <p>FaB DB card search can be very powerful. Using the various parameters together with raw keyword search, you can string together conditions to find exactly the cards you want - fast!</p>
            <p>Feel free to click any of the <span class="example">examples</span> to be taken to a live card search result.</p>
        </div>
        <div v-html="params" class="p-4"></div>
    </div>
</template>

<script>
    import Icon from "../Components/Icon.vue";

    export default {
        components: {Icon},

        data: () => ({
            params: ''
        }),

        methods: {
            hide() {
                this.$modal.hide('search-help');
            }
        },

        mounted() {
            axios.get('/cards/syntax').then(response => this.params = response.data);
        }
    };
</script>
