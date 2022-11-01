<template>
    <div class="flex items-center">
        <div class="text-4xl uppercase">
            <div v-if="!editing" class="font-serif cursor-pointer text-gray-600 hover:text-white">
                <h1 class="bg-transparent outline-none inline w-auto text-white" @click="edit()">{{ name }}<span class="text-white" v-if="hero"> ({{ hero.name }})</span></h1>
                <button @click="edit()">
                    <icon :size="6" class="-mt-1 ml-2">
                        <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                    </icon>
                </button>
            </div>
            <form v-else @keyup.escape="cancel()" @submit.prevent="save()" class="block flex items-center">
                <input class="bg-transparent font-serif uppercase outline-none border border-gray-700 border-r-none rounded-l-lg inline w-auto text-2xl text-white px-4 py-1" ref="name" v-model="name" size="40" @blur="possibleCancel()">
                <button type="submit" class="button-primary text-2xl px-4 py-3 rounded-r-lg">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapState} from 'vuex';
    import Icon from '../Components/Icon.vue';
    import Viewable from "./Viewable.js";

    export default {
        components: {Icon},
        mixins: [Viewable],

        data() {
            return {
                editing: false,
                original: null
            }
        },

        computed: {
            ...mapState('deck', ['deck']),

            name: {
                get() {
                    return this.deck.name;
                },

                set(name) {
                    this.deck.name = name;
                }
            }
        },

        methods: {
            edit() {
                this.editing = true;
                setTimeout(() => {
                    this.$refs.name.focus();
                }, 50);
            },

            cancel() {
                this.editing = false;
                this.name = this.original;
            },

            possibleCancel() {
                setTimeout(() => {
                    this.name = this.original;
                }, 100);
            },

            save() {
                axios.put('/decks/'+this.deck.slug+'/settings', {name: this.name});
                this.editing = false;
                this.original = this.name;
            }
        },

        mounted() {
            this.original = this.name;
        }
    }
</script>
