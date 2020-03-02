<template>
    <div>
        <header-title title="Articles"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8 clearfix p-4">
                <div>
                    <h1 class="text-4xl uppercase font-serif">{{ article.title }}</h1>
                    <div>Written by {{ article.author.name }}</div>
                    <div v-html="parseMarkdown(article.content)"></div>
                </div>

                <div class="border-t border-gray-400 py-4" v-if="article.author.blurb">{{ article.author.blurb }}</div>

                <div class="border-t border-gray-400">
                    <comment-count :comments="comments"></comment-count>

                    <div v-if="comments">
                        <comment v-for="comment in comments" :key="comment.slug" :comment="comment"></comment>
                    </div>

                    <!-- post a comment -->
                    <respond type="article" :foreign="article.slug" @comment-posted="addComment"></respond>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import Comment from '../Discussion/Comment.vue';
    import CommentCount from '../Discussion/CommentCount.vue';
    import Content from '../Utilities/Content';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from '../Utilities/Imagery';
    import LazyLoader from '../Components/LazyLoader';
    import Respond from '../Discussion/Respond.vue';

    export default {
        components: {
            Breadcrumbs,
            Comment,
            CommentCount,
            HeaderTitle,
            Respond
        },

        mixins: [ Cardable, Content, Imagery ],

        computed: {
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
                article: null,
                comments: null
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

        methods: {
            addComment: function(comment) {
                this.comments.push(comment);
            }
        },

        extends: LazyLoader((to, callback) => {
            let article = axios.get('/articles/' + to.params.article);
            let comments = axios.get('/comments/article/' + to.params.article);

            axios.all([article, comments]).then(axios.spread((...responses) => {
                callback(function() {
                    this.article = responses[0].data;
                    this.comments = responses[1].data;
                })
            }));
        })
    };
</script>