<template>
    <div>
        <header-title title="Articles"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8 px-4">
                <ol class="clearfix sm:-mx-4" v-if="articles.current_page == 1">
                    <li class="border-t-2 border-gray-400 mx-4 mb-8">
                        <span class="font-serif uppercase bg-gray-200 p-4 absolute -mt-8 ml-8">Latest news</span>
                    </li>
                    <li v-for="article in firstThree" class="w-full sm:w-1/2 lg:w-1/3 sm:px-4 float-left mb-8">
                        <div class="bg-white" style="height: 350px">
                            <router-link :to="'/articles/' + kebabCase(article.title) + '/' + article.slug">
                                <img :src="thumbUrl(article.image, 400, 150)" class="w-full">
                                <div class="p-6">
                                    <h3 class="font-serif uppercase text-2xl mb-2">{{ article.title }}</h3>
                                    <p>{{ article.excerpt }}</p>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ol>

                <ol class="clearfix sm:-mx-4">
                    <li class="border-t-2 border-gray-400 mx-4 mb-8" v-if="articles.current_page == 1">
                        <span class="font-serif uppercase bg-gray-200 p-4 absolute -mt-8 ml-8">Recent news</span>
                    </li>
                    <li v-for="article in remainder" class="clearfix w-full mx-4 mb-4">
                        <router-link :to="'/articles/' + kebabCase(article.title) + '/' + article.slug">
                            <img :src="thumbUrl(article.image, 150, 150)" class="float-left mr-4">
                            <div>
                                <h3 class="font-serif uppercase text-xl mb-2">{{ article.title }}</h3>
                                <p>{{ article.excerpt }}</p>
                            </div>
                        </router-link>
                    </li>
                </ol>

                <paginator :results="articles" @page-selected="search"></paginator>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from '../Utilities/Imagery';
    import LazyLoader from '../Components/LazyLoader';
    import Paginator from '../Components/Paginator.vue';
    import Strings from '../Utilities/Strings';

    export default {
        components: { Breadcrumbs, HeaderTitle, Paginator },
        mixins: [ Imagery, Strings ],

        computed: {
            firstThree: function() {
                if (this.articles.current_page == 1) {
                    return this.articles.data.slice(0, 3);
                }

                return [];
            },

            remainder: function() {
                if (this.articles.current_page == 1) {
                    return this.articles.data.slice(3, 7);
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
            search(page) {
                axios.get('/articles?page='+page).then(response => {
                    this.articles = response.data;
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
            axios.get('/articles/').then(response => {
                callback(function() {
                    this.articles = response.data;
                });
            });
        })
    };
</script>
