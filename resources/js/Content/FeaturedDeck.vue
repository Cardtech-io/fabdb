<template>
    <div class="sm:flex lg:block">
        <card-image :card="feature.featureable.hero" class="sm:w-1/2 lg:w-full"></card-image>
        <div class="mt-4 sm:w-1/2 sm:ml-2 lg:w-full font-serif">{{ feature.title }}</div>
    </div>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';

    export default {
        components: { CardImage },
        mixins: [ Cardable ],
        props: [ 'feature' ],
    };
</script>