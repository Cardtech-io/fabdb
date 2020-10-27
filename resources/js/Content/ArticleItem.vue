<template>
    <router-link :to="article.link">
        <img :src="thumbUrl(article.image, 250, 250)" class="float-left mr-8 rounded-xl">
        <div>
            <tag :tag="tag" v-for="tag in article.tags.split(',')" :key="tag" v-if="article.tags" class="bg-black text-gray-500 font-bold"></tag>
            <h3 class="text-white font-serif uppercase text-3xl">{{ article.title }}</h3>
            <p class="mt-2 text-gray-400">{{ article.excerpt }}</p>
            <div class="mt-8 flex">
                <avatar :user="article.author" :width="50" class="flex-0 rounded-bl-none"/>
                <div class="ml-4">
                    <div class="text-lg text-white font-bold">{{ article.author.name }}</div>
                    <div class="text-lg text-gray-400">{{ article.publishedRelative }}</div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    import Avatar from "../Identity/Avatar";
    import Tag from './Tag';
    import Imagery from "../Utilities/Imagery";
    import Article from "./Article";

    export default {
        props: {
            article: {
                type: Article,
                required: true,
            }
        },

        components: {Avatar, Tag},
        mixins: [Imagery],
    }
</script>
