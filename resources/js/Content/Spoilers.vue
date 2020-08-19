<template>
    <div class="container px-4 sm:mx-auto sm:px-0 text-white">
        <header-title title="Crucible of War Spoilers" class="text-center"></header-title>

        <div v-for="article in upcoming" class="bg-semi-black rounded-xl mx-4 p-4 mt-8 sm:mt-0 text-center font-serif text-4xl" v-if="upcoming">
            <countdown :end-time="article.publishAt">
                <span slot="process" slot-scope="{ timeObj }">
                    <span v-if="timeObj.d > 0">{{ timeObj.d }} :</span>
                    <span v-if="timeObj.h > 0">{{ timeObj.h }} :</span>
                    <span v-if="timeObj.m > 0">{{ timeObj.m }} :</span>
                    <span v-if="timeObj.s > 0">{{ timeObj.s }}</span>
                </span>
            </countdown>
        </div>

        <div v-if="articles.data.length" class="my-8 mx-4">
            <div v-for="article in articles.data" class="flex bg-semi-black rounded-xl p-4">
                <div class="spoiler">
                    <h1 class="font-serif uppercase text-4xl sm:text-6xl">{{ article.title }}</h1>
                    <div>{{ article.excerpt }}</div>
                    <img :src="thumbUrl('/cards/cru/181.png', 450)" class="relative rounded-lg float-right m-8 mr-0 z-50 max-w-full">
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
    import Imagery from "../Utilities/Imagery";
    import LazyLoader from '../Components/LazyLoader';
    import Strings from '../Utilities/Strings';
    import Models from "../Utilities/Models";
    import Article from "./Article";

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

        },

        metaInfo() {
            return {
                title: 'Flesh & Blood - Crucible of War Spoilers',
                meta: [
                    { vmid: 'description', name: 'description', content: 'Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell.' },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: 'Flesh & Blood - Crucible of War Spoilers' },
                    { vmid: 'og:description', property: 'og:description', content: 'Each set of Flesh & Blood comes with a rare fabled card. And each one has a story to tell.' }
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
