<template>
    <div class="my-4 flex items-center" :class="view == 'list' ? 'justify-center' : ''">
        <button class="flex p-2 px-4 h-10 items-center" @click="add('standard')">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"/></svg>
            <span class="ml-2" v-if="view != 'list'">Add</span>
        </button>
        <button class="flex p-2 px-4 ml-4 h-10 items-center" @click="remove('standard')" v-if="standard">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"/></svg>
            <span class="ml-2" v-if="view != 'list'">Remove</span>
            <span class="ml-2">({{standard}})</span>
        </button>

        <button class="flex p-2 px-4 ml-4 h-10 items-center" @click="add('foil')" v-if="view != 'list'">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 110-20 10 10 0 010 20z"/></svg>
            <span class="ml-2" v-if="view != 'list'">Add foil</span>
        </button>
        <button class="flex p-2 px-4 ml-4 h-10 items-center" @click="remove('foil')" v-if="foil && view != 'list'">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zm5-11H5v2h10V9z"/></svg>
            <span class="ml-2" v-if="view != 'list'">Remove</span>
            <span class="ml-2">({{foil}})</span>
        </button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['card', 'view'],

        data() {
            return {
                foil: this.card.foil,
                standard: this.card.standard
            }
        },

        methods: {
            add: function(type) {
                this[type] += 1;

                axios.post('/collection/', {identifier: this.card.identifier, type: type});
            },

            remove: function(type) {
                this[type] -= 1;

                axios.delete('/collection/' + this.card.identifier + '/?type=' + type);
            }
        }
    };
</script>