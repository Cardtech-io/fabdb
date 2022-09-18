<template>
    <div class="container px-4 sm:mx-auto sm:px-0 text-white">
        <header-title title="Monarch Spoilers" class="text-center"></header-title>

        <div v-for="article in upcoming" class="bg-semi-black rounded-xl mx-4 p-4 mt-8 sm:mt-0 text-center font-serif text-4xl" v-if="upcoming">
            <countdown :end-time="localTime(article.publishAt)">
                <span slot="process" slot-scope="{ timeObj }">
                    <span v-if="timeObj.d > 0">{{ timeObj.d }} :</span>
                    <span v-if="timeObj.h">{{ timeObj.h }} :</span>
                    <span v-if="timeObj.m">{{ timeObj.m }} :</span>
                    <span v-if="timeObj.s">{{ timeObj.s }}</span>
                </span>
            </countdown>
        </div>

        <div v-if="articles.data.length" class="my-8 mx-4">
            <div v-for="article in articles.data" class="flex bg-semi-black rounded-xl p-4">
                <div class="spoiler">
                    <h1 class="font-serif uppercase text-4xl sm:text-6xl">{{ article.title }}</h1>
                    <div>{{ article.excerpt }}</div>
                    <img :src="thumbUrl(article.image, 450)" class="relative rounded-lg float-right m-8 mr-0 z-50 max-w-full">
                    <div class="mt-8" v-html="prettyText(article.content)"></div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="my-8 text-center">Ah-ah! Not yet! Maybe come back tomorrow? ;)</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Imagery from "../Utilities/Imagery.js";
    import LazyLoader from '../Components/LazyLoader.js';
    import Strings from '../Utilities/Strings.js';
    import Models from "../Utilities/Models.js";
    import Article from "./Article.vue";

    export default {
        mixins: [Imagery, Strings],
        components: {HeaderTitle},

        data() {
            return {
                articles: {},
                upcoming: [],
            }
        },

        methods: {
            localTime(time) {
                return moment.utc(time).local();
            }
        },

        metaInfo() {
            return {
                title: 'Flesh & Blood - Monarch Spoilers',
                meta: [
                    { vmid: 'description', name: 'description', content: 'Upcoming and recent spoilers for Flesh and Blood\'s next set, Monarch.' },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: 'Flesh & Blood - Monarch Spoilers' },
                    { vmid: 'og:description', property: 'og:description', content: 'Upcoming and recent spoilers for Flesh and Blood\'s next set, Monarch.' }
                ]
            };
        },

        extends: LazyLoader((to, callback) => {
            let urls = [
                axios.get('/articles?type=spoiler'),
                axios.get('/articles/upcoming?type=spoiler')
            ];

            Promise.all(urls).then(responses => {
                callback(function() {
                    this.articles = Models.hydratePaginated(responses[0].data, Article);
                    this.upcoming = responses[1].data;
                });
            });
        })
    }
</script>
