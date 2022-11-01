<template>
    <router-link :to="'/cards/' + feature.featureable.identifier">
        <div class="sm:flex lg:block">
            <card-image :card="feature.featureable" class="sm:w-1/2 lg:w-full"></card-image>
            <div class="mt-4 sm:mt-0 lg:mt-4 sm:w-1/2 sm:ml-4 lg:ml-0 lg:w-full">
                <h2 class="font-serif uppercase text-2xl mb-2">{{ feature.title }}</h2>
                <p class="text-gray-400">{{ feature.excerpt }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable.js';
    import CardImage from '../CardDatabase/CardImage.vue';

    export default {
        components: { CardImage },
        mixins: [ Cardable ],
        props: [ 'feature' ],
    };
</script>
