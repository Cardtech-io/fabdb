<template>
    <div class="container sm:mx-auto py-8 px-4">
        <h1 class="mb-4 font-serif uppercase text-4xl text-white">{{ title }}</h1>

        <ol class="flow-root text-lg">
            <li v-for="article in articles.data" class="flow-root bg-semi-black p-4 w-full mb-8 rounded-xl hover:bg-nearly-black">
                <article-item :article="article"></article-item>
            </li>
        </ol>

        <paginator :results="articles" @page-selected="search"></paginator>
    </div>
</template>

<script>
    import Article from "./Article.vue";
    import ArticleItem from "./ArticleItem.vue";
    import Imagery from "../Utilities/Imagery.js";
    import LazyLoader from "../Components/LazyLoader.js";
    import Models from "../Utilities/Models.js";
    import Paginator from "../Components/Paginator.vue";
    import Strings from "../Utilities/Strings.js";

    function buildQuery(args) {
        let params = {};

        if (args.tag) {
            params.tag = args.tag.replace('-', ' ');
        }

        if (args.author) {
            params.author = args.author;
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
                    return this.ucfirst(params.tag) + ' Articles';
                }

                if (params.author) {
                    return 'Articles authored by ' + this.author.name;
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
            let title = 'Flesh & Blood ' + this.title;
            let image = this.$route.params.author ? this.imageUrl('/heroes/' + this.author.avatar + '.jpg', 200) : 'https://' + this.imageDomain() + '/assets/fab-facebook-logo.png?w=210&h=202';

            return {
                title: title,
                meta: [
                    { vmid: 'og:type', property: 'og:type', content: 'website' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:image', property: 'og:image', content: image },
                    { vmid: 'og:width', property: 'og:width', content: 210 },
                    { vmid: 'og:height', property: 'og:height', content: 202 }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            let query = buildQuery(to.params);
            let requests = [axios.get('/articles?'+query)];

            if (to.params.author) {
                requests.push(axios.get('/users/'+to.params.author));
            }

            axios.all(requests).then(responses => {
                callback(function() {
                    this.articles = Models.hydratePaginated(responses[0].data, Article);

                    if (to.params.author) {
                        this.author = responses[1].data;
                    }
                });
            });
        })
    };
</script>
