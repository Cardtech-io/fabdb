<template>
    <div>
        <header-title title="Articles"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8 px-4">
                <ol class="clearfix sm:-mx-4">
                    <li v-for="article in articles.data" class="w-full sm:w-1/2 lg:w-1/3 sm:px-4 float-left mb-8">
                        <div class="bg-white rounded-lg">
                            <router-link :to="'/articles/' + kebabCase(article.title) + '/' + article.slug">
                                <img :src="thumbUrl(article.image, 400, 150)" class="w-full rounded-t-lg">
                                <div class="p-6">
                                    <h3 class="font-serif uppercase text-2xl mb-2">{{ article.title }}</h3>
                                    <p>{{ article.excerpt }}</p>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from '../Utilities/Imagery';
    import LazyLoader from '../Components/LazyLoader';
    import Strings from '../Utilities/Strings';

    export default {
        components: { Breadcrumbs, HeaderTitle },
        mixins: [ Imagery, Strings ],

        data() {
            return {
                articles: {},
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Articles' }
                ]
            }
        },

        metaInfo() {
            let title = 'Flesh & Blood articles';
            let description = 'Articles, content, analysis and more for Flesh & Blood TCG.';

            return {
                title: title,
                meta: [
                    { vmid: 'description', name: 'description', content: description },
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: description }
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
