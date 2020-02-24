<template>
    <div>
        <header-title title="Write article"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="flex-1 text-right">
                    <p>
                        <a href="" class="text-white hover:text-orange-300" @click.prevent="view = 'edit'" :class="activeView('edit')">Edit</a> <span class="text-orange-500">|</span>
                        <a href="" class="text-white hover:text-orange-300" @click.prevent="view = 'preview'" :class="activeView('preview')">Preview</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 bg-white">
                <form @submit.prevent="save" v-if="view == 'edit'">
                    <div class="w-full">
                        <label class="block font-serif uppercase tracking-wide mb-1">Title</label>
                        <input type="text" v-model="title" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                    </div>

                    <div class="w-full mt-4">
                        <label class="block font-serif uppercase tracking-wide mb-1">Excerpt</label>
                        <textarea type="text" v-model="excerpt" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg"></textarea>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block font-serif uppercase tracking-wide mb-1">Content</label>
                        <vue-simplemde v-model="content" ref="markdownEditor"></vue-simplemde>
                    </div>

                    <input type="submit" value="Save" class="appearance-none block w-full mt-8 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50" :disabled="saving">
                </form>
            </div>
        </div>
    </div>
</template>

<style>
    @import '~simplemde/dist/simplemde.min.css';
</style>

<script>
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import VueSimplemde from 'vue-simplemde';

    export default {
        components: { Crumbs, HeaderTitle, VueSimplemde },

        data() {
            return {
                title: null,
                excerpt: null,
                content: null,
                saving: false,
                view: 'edit'
            }
        },

        computed: {
            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'My articles', link: '/articles/mine' },
                    { text: 'Write' }
                ];
            }
        },

        methods: {
            activeView: function(view) {
                return this.view == view ? 'text-orange-300' : '';
            }
        },

        mounted() {

        }
    };
</script>