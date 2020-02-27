<template>
    <div>
        <header-title title="Articles"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4 py-8">
                <ol>
                    <li v-for="article in articles.data" class="w-1/3 bg-white rounded-xl">
                        <router-link :to="'/articles/' + kebabCase(article.title) + '/' + article.slug">
                            <img :src="thumbUrl(article.image, 400, 150)" class="w-full rounded-t-xl">
                            <div class="p-6">
                                <h3 class="font-serif uppercase text-2xl mb-2">{{ article.title }}</h3>
                                <p>{{ article.excerpt }}</p>
                            </div>
                        </router-link>
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

        extends: LazyLoader((to, callback) => {
            axios.get('/articles/').then(response => {
                callback(function() {
                    this.articles = response.data;
                });
            });
        })
    };
</script>
