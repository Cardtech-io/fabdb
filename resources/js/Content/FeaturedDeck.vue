<template>
    <router-link :to="'/featured/' + featured.slug">
        <div class="sm:flex lg:block">
            <card-image :card="feature.featureable.hero" class="sm:w-1/2 lg:w-full"></card-image>
            <div class="mt-4 sm:w-1/2 sm:ml-2 lg:w-full">
                <h2 class="font-serif uppercase text-lg mb-2">Winning the Calling $10k</h2>
                <p class="text-gray-400">{{ feature.title }}</p>
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
