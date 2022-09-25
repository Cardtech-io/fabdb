<template>
    <div>
        <header-title title="My articles"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="flex-1 text-right">
                    <p>
                        <router-link to="/articles/write" class="text-white hover:text-red-300">Write article</router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 pt-8">
                <div v-if="articles.total">
                    <table class="w-full table-auto border-collapse">
                        <thead>
                            <tr class="hidden sm:table-row bg-gray-100">
                                <th class="font-serif uppercase text-left p-2 border-b border-gray-300">ID</th>
                                <th class="font-serif uppercase text-left p-2 border-b border-gray-300" v-if="user.role == 'editor'">Author</th>
                                <th class="font-serif uppercase text-left p-2 border-b border-gray-300">Title</th>
                                <th class="font-serif uppercase text-left p-2 border-b border-gray-300">Status</th>
                                <th class="font-serif uppercase text-left p-2 border-b border-gray-300">Published</th>
                            </tr>

                            <tr v-for="article in articles.data" class="odd:bg-gray-100 hover:bg-gray-200 sm:table-row">
                                <td class="p-2"><router-link :to="'/articles/' + article.slug + '/edit'" class="link">{{ article.slug }}</router-link></td>
                                <td class="p-2" v-if="user.role == 'editor'">{{ article.author.name }}</td>
                                <td class="p-2"><router-link :to="'/articles/' + article.slug + '/edit'" class="link">{{ article.title }}</router-link></td>
                                <td class="p-2">{{ article.status }}</td>
                                <td class="p-2">{{ article.publishAt }}</td>
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
    import LazyLoader from '../Components/LazyLoader.js';
    import Paginator from '../Components/Paginator.vue';
    import { mapGetters } from 'vuex';

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

        computed: {
            ...mapGetters('session', ['user'])
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
