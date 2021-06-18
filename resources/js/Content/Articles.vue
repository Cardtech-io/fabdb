<template>
    <div>
        <div class="container sm:mx-auto py-8 px-4">
            <div v-if="articles.current_page == 1">
                <h1 class="mb-4 font-serif uppercase text-4xl text-white">Featured</h1>

                <div class="md:flex">
                    <div class="w-full md:w-2/3 md:mr-8 mb-4 rounded-xl overflow-hidden">
                        <router-link :to="firstThree[0].link" class="block w-full relative" :style="{ ...background(firstThree[0].image), 'height': '500px' }">
                            <div class="flex absolute bottom-0 p-8 w-full bg-semi-black">
                                <div class="mr-8 hidden sm:block">
                                    <avatar :user="firstThree[0].author" :width="110" class="flex-0 rounded-bl-none"/>
                                </div>
                                <div>
                                    <h2 class="text-white font-serif uppercase text-4xl">{{ firstThree[0].title }}</h2>
                                    <div class="text-gray-600 mb-2 -mt-1">by <span class="text-white">{{ firstThree[0].author.name }}</span></div>
                                    <p class="text-lg text-gray-500">{{ firstThree[0].excerpt }}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="w-full md:w-1/3 md:flex md:flex-col">
                        <router-link :to="article.link" v-for="article in firstThree.slice(1)" :key="article.slug" :style="{ ...background(article.image) }" class="block md:h-1/2 relative rounded-xl mb-4 md:odd:mb-4 md:even:mt-4 overflow-hidden">
                            <div class="md:absolute md:bottom-0 p-8 py-4 bg-semi-black">
                                <h2 class="text-white font-serif uppercase text-2xl">{{ article.title }}</h2>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="flex mt-16">
                <div class="w-full md:w-3/4">
                    <h1 class="mb-4 font-serif uppercase text-4xl text-white" v-if="articles.current_page == 1">What's new</h1>

                    <ol class="clearfix text-lg">
                        <li v-for="article in remainder" class="clearfix bg-semi-black p-4 w-full mb-8 rounded-xl hover:bg-nearly-black">
                            <article-item :article="article"></article-item>
                        </li>
                    </ol>

                    <paginator :results="articles" @page-selected="search"></paginator>
                </div>

                <div class="hidden md:block md:w-1/4 ml-16">
                    <div class="mb-8">
                        <mailchimp/>
                    </div>

                    <div class="mb-8">
                        <h1 class="mb-4 font-serif uppercase text-4xl text-white">Tags</h1>

                        <tag :tag="tag" v-for="tag in tags" :key="tag" class="bg-black text-gray-500 font-bold mb-2 hover:bg-semi-black"></tag>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Article from './Article';
    import ArticleItem from "./ArticleItem";
    import Avatar from "../Identity/Avatar";
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from '../Utilities/Imagery';
    import LazyLoader from '../Components/LazyLoader';
    import Mailchimp from "../Components/Mailchimp";
    import Models from '../Utilities/Models';
    import Paginator from '../Components/Paginator.vue';
    import Strings from '../Utilities/Strings';
    import Tag from './Tag';

    export default {
        components: {ArticleItem, Avatar, Breadcrumbs, HeaderTitle, Mailchimp, Paginator, Tag},
        mixins: [Imagery, Strings],

        computed: {
            firstThree: function() {
                if (this.articles.current_page === 1) {
                    return this.articles.data.slice(0, 3);
                }

                return [];
            },

            remainder: function() {
                if (this.articles.current_page == 1) {
                    return this.articles.data.slice(3, 10);
                }

                return this.articles.data;
            }
        },

        data() {
            return {
                articles: {},
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Articles' }
                ]
            }
        },

        methods: {
            background(image) {
                return {
                    'background-image': 'linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0,0,0,0.8) 100%), url('+this.thumbUrl(image, 1000, 500)+')',
                    'background-size': 'cover'
                }
            },

            search(page) {
                axios.get('/articles?page='+page).then(response => {
                    this.articles = Models.hydratePaginated(response.data, Article);
                    window.scrollTo(0,0);
                });
            }
        },

        metaInfo() {
            let title = 'Flesh & Blood articles';
            let description = 'Articles, content, analysis and more for the Flesh & Blood TCG.';

            return {
                title: title,
                meta: [
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: description },
                    { vmid: 'og:image', property: 'og:image', content: 'https://' + this.imageDomain() + '/assets/fab-facebook-logo.png?w=210&h=202' },
                    { vmid: 'og:width', property: 'og:width', content: 210 },
                    { vmid: 'og:height', property: 'og:height', content: 202 }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            axios.all([
                axios.get('/articles'),
                axios.get('/articles/tags')
            ]).then(responses => {
                callback(function() {
                    this.articles = Models.hydratePaginated(responses[0].data, Article);
                    this.tags = responses[1].data;
                });
            });
        })
    };
</script>
