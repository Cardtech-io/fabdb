<template>
    <div class="crumbs font-serif uppercase">
        <div class="container sm:mx-auto p-4 py-2 sm:flex items-center justify-between">
            <crumbs :crumbs="crumbs"/>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Collapser from "./Collapser.vue";
    import Crumbs from './Crumbs.vue';

    export default {
        props: ['crumbs'],

        components: {Collapser, Crumbs}
    };
</script>
