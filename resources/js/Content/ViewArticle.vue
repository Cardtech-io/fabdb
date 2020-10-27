<template>
    <div>
        <header-title title="Articles"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="article container sm:mx-auto py-8 clearfix p-4">
                <div>
                    <h1 class="text-4xl uppercase font-serif">{{ article.title }}</h1>
                    <div v-if="article.tags">
                        <tag :tag="tag" v-for="tag in article.tags.split(',')" :key="tag" v-if="article.tags" class="bg-gray-400 text-gray-600 text-sm"></tag>
                    </div>
                    <div><span>Written by {{ article.author.name }}</span> on <span>{{ article.published }}</span></div>
                    <div v-html="parseMarkdown(article.content)"></div>
                </div>

                <div class="clearfix border-t border-gray-400 pt-4 mt-8" v-if="article.author.blurb">
                    <avatar :user="article.author" :width="100" class="float-left mr-4 mb-4"/>
                    <div class="mb-4">
                        {{ article.author.blurb }}
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
    import moment from 'moment';
    import { mapGetters } from 'vuex';

    import Article from './Article';
    import Avatar from "../Identity/Avatar";
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import Discussion from "../Discussion/Discussion";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from '../Utilities/Imagery';
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
            Tag
        },

        mixins: [ Cardable, Strings, Imagery ],

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
