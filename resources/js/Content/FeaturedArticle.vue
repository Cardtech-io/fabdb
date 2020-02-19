<template>
    <router-link :to="'/articles/' + this.kebabCase(article.title) + '/' + article.slug">
        <div class="sm:flex lg:block">
            <img :src="imageUrl(article.image, 350)" :alt="article.name" :title="article.title" class="w-full rounded-lg sm:rounded-xl cursor-pointer">
            <div class="mt-4 sm:mt-0 lg:mt-4 sm:w-1/2 sm:ml-4 lg:ml-0 lg:w-full">
                <h2 class="font-serif uppercase text-2xl mb-2">{{ article.title }}</h2>
                <p class="text-gray-400">{{ article.excerpt }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    import Imagery from '../Utilities/Imagery';
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [ Imagery, Strings ],
        props: [ 'feature' ],

        computed: {
            article: function() {
                return this.feature.featureable;
            }
        }
    };
</script>