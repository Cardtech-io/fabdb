<template>
    <div>
        <header-title title="Write article"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="flex-1 text-right">
                    <p>
                        <a href="" class="hover:opacity-75" @click.prevent="view = 'edit'" :class="activeView('edit')">Edit</a> <span class="opacity-25">|</span>
                        <a href="" class="hover:opacity-75" @click.prevent="view = 'preview'" :class="activeView('preview')">Preview</a> <span class="opacity-25" v-if="article.slug">|</span>
                        <router-link :to="{ name: 'articles.view', params: { title: kebabCase(article.title), article: article.slug } }" class="hover:opacity-75" target="_blank" v-if="article.slug">View</router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4 py-8 bg-white">
                <form @submit.prevent="save" v-if="view == 'edit'">
                    <div class="w-full">
                        <label class="block font-serif uppercase tracking-wide mb-1">Title</label>
                        <input type="text" v-model="article.title" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                    </div>

                    <div class="w-full mt-4">
                        <label class="block font-serif uppercase tracking-wide mb-1">Excerpt</label>
                        <textarea type="text" v-model="article.excerpt" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" rows="4" maxlength="200"></textarea>
                    </div>

                    <div v-if="user.role == 'editor'">
                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Image</label>
                            <input type="text" v-model="article.image" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        </div>

                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Publish at</label>
                            <input type="text" v-model="article.publishAt" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        </div>

                        <div class="w-full mt-4">
                            <label class="block font-serif uppercase tracking-wide mb-1">Status</label>
                            <select v-model="article.status" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg" required="required">
                                <option value="draft">Draft</option>
                                <option value="approved">Approved</option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block font-serif uppercase tracking-wide mb-1">Content</label>
                        <markdown-editor v-model="article.content" ref="markdownEditor"></markdown-editor>
                    </div>

                    <div class="flex">
                        <input type="submit" value="Save" class="appearance-none block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:mx-auto mt-8 rounded-lg py-3 px-4 button-primary disabled:opacity-50 mr-2" :disabled="saving">
                    </div>
                </form>

                <div v-else>
                    <div>
                        <h1 class="text-4xl uppercase font-serif">{{ article.title }}</h1>
                        <div v-html="parseMarkdown(article.content)" v-if="article.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import '~simplemde/dist/simplemde.min.css';
</style>

<script>
    import axios from 'axios';
    import { mapGetters } from 'vuex';

    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import MarkdownEditor from 'vue-simplemde';
    import Strings from '../Utilities/Strings';
    import Cardable from '../CardDatabase/Cardable';

    export default {
        components: { Crumbs, HeaderTitle, MarkdownEditor },
        mixins: [ Cardable, Strings ],

        data() {
            return {
                article: {},
                saving: false,
                view: 'edit'
            }
        },

        computed: {
            ...mapGetters('session', ['user']),

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
                return this.view == view ? 'opacity-75' : '';
            },

            save: function() {
                this.saving = true;

                let payload = {
                    slug: this.article.slug,
                    title: this.article.title,
                    excerpt: this.article.excerpt,
                    image: this.article.image,
                    publishAt: this.article.publishAt,
                    status: this.article.status,
                    content: this.article.content
                };

                let request = this.article.slug ?
                    axios.put('/articles/' + this.article.slug, payload) :
                    axios.post('/articles', payload);

                request.then(response => {
                    this.saving = false;
                    if (!this.article.slug) {
                        this.article.slug = response.data.slug;
                    }
                });
            }
        },

        extends: LazyLoader((to, callback) => {
            if (to.params.article) {
                axios.get('/articles/' + to.params.article).then(response => {
                    callback(function() {
                        this.article = response.data.article;
                    });
                });
            } else {
                callback(function(){});
            }
        })
    };
</script>
