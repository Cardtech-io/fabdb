<template>
    <div class="my-4 flex items-center" :class="view == 'list' ? 'justify-center' : ''">
        <button class="flex bg-gray-900 p-2 px-4 h-10 items-center rounded-lg hover:bg-gray-800" @click="add()">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 110-20 10 10 0 010 20z"/></svg>
            <span class="ml-2" v-if="view != 'list'">Add</span>
        </button>
        <button class="flex bg-gray-900 p-2 px-4 ml-4 h-10 items-center rounded-lg hover:bg-gray-800" @click="remove()" v-if="owned">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zm5-11H5v2h10V9z"/></svg>
            <span class="ml-2" v-if="view != 'list'">Remove</span>
            <span class="ml-2">({{owned}})</span>
        </button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['card', 'view'],

        data() {
            return {
                owned: this.card.owned
            }
        },

        methods: {
            add: function() {
                this.owned += 1;
                axios.post('/collection/', {identifier: this.card.identifier});
            },

            remove: function() {
                this.owned -= 1;
                axios.delete('/collection/' + this.card.identifier + '/');
            }
        }
    };
</script>