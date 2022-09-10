<template>
    <div class="crumbs font-serif uppercase">
        <div class="container sm:mx-auto p-4 py-2 sm:flex justify-items-center">
            <crumbs :crumbs="crumbs"></crumbs>
            <collapser></collapser>
        </div>
    </div>
</template>

<script>
    import Collapser from "./Collapser";
    import Crumbs from './Crumbs.vue';

    export default {
        props: ['crumbs'],

        components: {Collapser, Crumbs}
    };
</script>
