<template>
    <div class="flex items-center">
        <div class="text-4xl uppercase">
            <div v-if="!editing" class="font-serif hover:text-white cursor-pointer">
                <h1 class="bg-transparent outline-none inline w-auto text-white" @click="edit()">{{ name }}<span class="text-white" v-if="hero"> ({{ hero.name }})</span></h1>
                <button @click="edit()">
                    <icon :size="6" class="-mt-1 ml-2 text-gray-600">
                        <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                    </icon>
                </button>
            </div>
            <div v-else class="flex items-center">
                <form @keyup.escape="cancel()" @submit.prevent="save()">
                    <input class="bg-transparent font-serif uppercase outline-none border border-gray-700 rounded-lg inline w-auto text-3xl text-white px-4 py-1" ref="name" v-model="name" size="40">
                    <button type="submit" class="button-primary text-xl px-4 py-3 rounded-lg ml-2">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapState} from 'vuex';
    import Icon from '../Components/Icon';
    import Viewable from "./Viewable";

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
            },

            inputWidth() {
                return (this.name.length * 18) + 'px'
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

            save() {
                axios.put('/decks/'+this.deck.slug+'/settings', {name: this.deck.name});
                this.editing = false;
            }
        },

        mounted() {
            this.original = this.deck.name;
        }
    }
</script>
