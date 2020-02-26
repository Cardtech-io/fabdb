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
            <div class="container sm:mx-auto px-4 py-8 bg-white">
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

                    <div class="flex">
                        <input type="submit" value="Save" class="appearance-none block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:mx-auto mt-8 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50 mr-2" :disabled="saving">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
    @import '~simplemde/dist/simplemde.min.css';
</style>

<script>
    import axios from 'axios';

    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import VueSimplemde from 'vue-simplemde';

    export default {
        components: { Crumbs, HeaderTitle, VueSimplemde },

        data() {
            return {
                title: null,
                excerpt: null,
                content: null,
                saving: false,
                slug: null,
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
            },

            save: function() {
                this.saving = true;

                let payload = {
                    title: this.title,
                    excerpt: this.excerpt,
                    content: this.content
                };

                if (this.slug) {
                    let request = axios.put('/articles/' + this.slug, payload);
                } else {
                    let request = axios.post('/articles', payload);
                }

                request.then(response => {
                    this.saving = false;
                    this.slug = response.data.slug;
                });
            }
        },

        extends: LazyLoader((to, callback) => {
            if (to.params.article) {
                axios.get('/articles/' + to.params.article).then(response => {
                    callback(function() {
                        this.article = response.data;
                    });
                });
            } else {
                callback();
            }
        })
    };
</script>