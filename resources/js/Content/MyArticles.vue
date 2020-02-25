<template>
    <div>
        <header-title title="My articles"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="flex-1 text-right">
                    <p>
                        <router-link to="/articles/write" class="text-white hover:text-orange-300">Write article</router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4">
                <div v-if="articles.total">
                    <div class="py-4">
                        <paginator :results="articles" @page-selected="updatePage"></paginator>
                    </div>

                    <table class="w-full table-auto border-collapse bg-white">
                        <thead>
                            <tr class="hidden sm:table-row">
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">ID</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">Title</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Status</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Actions</th>
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Published</th>
                            </tr>

                            <tr class="odd:bg-gray-100 hover:bg-gray-200 sm:hidden table-row">
                                <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left" colspan="5">Card details</th>
                            </tr>

                            <tr v-for="article in articles.data" class="odd:bg-gray-100 hover:bg-gray-200 hidden sm:table-row">
                                <td class="border border-gray-300 py-2 px-4"><router-link :to="'/articles/' + article.slug + '/edit'" class="link">{{ article.slug }}</router-link></td>
                                <td class="border border-gray-300 py-2 px-4"><router-link :to="'/articles/' + article.slug + '/edit'" class="link">{{ article.title }}</router-link></td>
                                <td class="border border-gray-300 py-2 px-4 text-center">{{ article.status }}</td>
                                <td class="border border-gray-300 py-2 px-4">actions</td>
                                <td class="border border-gray-300 py-2 px-4 text-right">{{ article.publishAt }}</td>
                            </tr>
                        </thead>
                    </table>

                    <div class="py-4">
                        <paginator :results="articles" @page-selected="updatePage"></paginator>
                    </div>
                </div>

                <div v-else>
                    You have not yet written any articles. <router-link to="/articles/write" class="link">Write an article</router-link>.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Paginator from '../Components/Paginator.vue';

    export default {
        components: { Crumbs, HeaderTitle, Paginator },

        data() {
            return {
                articles: null,
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'My articles' },
                ],
                page: 1
            };
        },

        methods: {
            search: function() {
                axios.get('/articles/mine?page=' + this.page).then(response => {
                    this.articles = response.data;
                });
            },

            updatePage: function(page) {
                this.page = page;
                this.search();
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/articles/mine').then(response => {
                callback(function() {
                    this.articles = response.data;
                });
            });
        })
    };
</script>