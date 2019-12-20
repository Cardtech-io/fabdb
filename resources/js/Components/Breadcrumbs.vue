<template>
    <div class="bg-orange-900 text-white font-serif uppercase">
        <div class="container sm:mx-auto p-4">
            <crumbs :crumbs="crumbs"></crumbs>
        </div>
    </div>
</template>

<script>
    import Crumbs from './Crumbs.vue';

    export default {
        props: ['crumbs'],

        components: {
            Crumbs
        }
    };
</script>