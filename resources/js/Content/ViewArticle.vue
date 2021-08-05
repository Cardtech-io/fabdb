<template>
    <div>
        <header-title title="Articles"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="article container sm:mx-auto py-8 flow-root p-4">
                <div>
                    <h1 class="text-4xl uppercase font-serif">{{ article.title }}</h1>
                    <div v-if="article.tags" class="mb-4">
                        <tag :tag="tag" v-for="tag in article.tags.split(',')" :key="tag" v-if="article.tags" class="bg-gray-400 text-gray-600 text-sm"></tag>
                    </div>
                    <div class="mb-8">
                        <span class="text-gray-600">Written by <router-link :to="{ name: 'articles.author', params: { author: article.author.slug } }" class="link">{{ article.author.name }}</router-link></span> <span class="text-gray-500">on</span> <span class="text-gray-600">{{ article.published }}</span>
                    </div>
                    <markdown :content="parseMarkdown(article.content)"></markdown>
                </div>

                <div class="pt-4 my-8 flow-root" v-if="article.author.blurb">
                    <div class="float-left rounded-r-full bg-gray-200 mr-4 mb-4">
                        <router-link :to="{name: 'articles.author', params: {author: article.author.slug}}"><avatar :user="article.author" :width="150"/></router-link>
                    </div>
                    <div class="mb-4 mt-2 border-t border-gray-400 pt-4">
                        <div class="font-serif uppercase text-2xl"><router-link :to="{name: 'articles.author', params: {author: article.author.slug}}">{{ article.author.name }}</router-link></div>
                        <div>{{ article.author.blurb }}</div>
                    </div>
                </div>

                <div class="flex w-full py-4 border-t border-gray-400">
                    <div class="flex-1">
                        <router-link :to="prev.link" class="link" v-if="prev.valid()">Previously: {{ prev.title }}</router-link>
                    </div>
                    <div class="flex-1 text-right">
                        <router-link :to="next.link" class="link" v-if="next.valid()">Next up: {{ next.title }}</router-link>
                    </div>
                </div>

                <div class="border-t border-gray-400">
                    <discussion type="article" :id="article.slug"></discussion>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import Article from './Article';
    import Avatar from "../Identity/Avatar";
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import Discussion from "../Discussion/Discussion";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from '../Utilities/Imagery';
    import Markdown from "../Components/Markdown";
    import LazyLoader from '../Components/LazyLoader';
    import Models from '../Utilities/Models';
    import Strings from '../Utilities/Strings';
    import Tag from './Tag';

    export default {
        components: {
            Avatar,
            Breadcrumbs,
            Discussion,
            HeaderTitle,
            Markdown,
            Tag
        },

        mixins: [Cardable, Strings, Imagery],

        computed: {
            ...mapGetters('session', ['user']),

            crumbs: function () {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Articles', link: '/articles' },
                    { text: this.article.title }
                ];
            },
        },

        data() {
            return {
                article: null
            };
        },

        metaInfo() {
            return {
                title: this.article.title,
                meta: [
                    { vmid: 'description', name: 'description', content: this.article.excerpt },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: this.article.title },
                    { vmid: 'og:description', property: 'og:description', content: this.article.excerpt },
                    { vmid: 'og:image', property: 'og:image', content: this.imageUrl(this.article.image, 350) },
                    { vmid: 'og:image:width', property: 'og:image:width', content: '450' },
                    { vmid: 'og:image:height', property: 'og:image:height', content: '628' }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/articles/' + to.params.article).then(response => {
                callback(function(){
                    this.article = Models.hydrate(response.data.article, Article);
                    this.next = Models.hydrate(response.data.next, Article);
                    this.prev = Models.hydrate(response.data.prev, Article);
                })
            });
        })
    };
</script>
