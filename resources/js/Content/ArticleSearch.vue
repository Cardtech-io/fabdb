<template>
    <div class="container sm:mx-auto py-8 px-4">
        <h1 class="mb-4 font-serif uppercase text-4xl text-white">{{ title }} Articles</h1>

        <ol class="clearfix text-lg">
            <li v-for="article in articles.data" class="clearfix bg-semi-black p-4 w-full mb-8 rounded-xl hover:bg-nearly-black">
                <article-item :article="article"></article-item>
            </li>
        </ol>

        <paginator :results="articles" @page-selected="search"></paginator>
    </div>
</template>

<script>
    import Article from "./Article";
    import ArticleItem from "./ArticleItem";
    import Imagery from "../Utilities/Imagery";
    import LazyLoader from "../Components/LazyLoader";
    import Models from "../Utilities/Models";
    import Paginator from "../Components/Paginator";
    import Strings from "../Utilities/Strings";

    function buildQuery(args) {
        let params = {};

        if (args.tag) {
            params.tag = args.tag.replace('-', ' ');
        }

        return Strings.methods.buildQuery(params);
    };

    export default {
        components: {ArticleItem, Paginator},
        mixins: [Imagery, Strings],

        data() {
            return {
                articles: {}
            }
        },

        computed: {
            title() {
                let params = this.$route.params;

                if (params.tag) {
                    return this.ucfirst(params.tag);
                }
            }
        },

        methods: {
            search(page) {
                let query = buildQuery(this.$route.params) + '&page=' + page;

                axios.get('/articles?'+query).then(response => {
                    this.articles = Models.hydratePaginated(response.data, Article);
                });
            }
        },

        metaInfo() {
            let title = 'Flesh & Blood ' + this.title + ' articles';

            return {
                title: title,
                meta: [
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:image', property: 'og:image', content: 'https://' + this.imageDomain() + '/assets/fab-facebook-logo.png?w=210&h=202' },
                    { vmid: 'og:width', property: 'og:width', content: 210 },
                    { vmid: 'og:height', property: 'og:height', content: 202 }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            let query = buildQuery(to.params);

            axios.get('/articles?'+query).then(response => {
                callback(function() {
                    this.articles = Models.hydratePaginated(response.data, Article);
                });
            });
        })
    };
</script>
