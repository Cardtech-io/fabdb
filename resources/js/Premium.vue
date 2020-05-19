<template>
    <div>
        <header-title title="Premium features"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8 px-4">
                <h2 class="text-4xl font-serif mb-4 uppercase sm:hidden">Premium features</h2>
                <p class="my-4">
                    Some features on FaB DB are available only to our patrons, supporters who have helped FaB DB
                    grow and be built upon day after day. These features are a reward to our loyal supporters, whom
                    without their support, FaB DB couldn't be what it is today.
                </p>

                <p class="my-4">
                    If you'd like access to the feature requested, you can <router-link to="/support" class="link">become a supporter</router-link> from just $3/month.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Crumbs from './Components/Crumbs.vue';
    import HeaderTitle from './Components/HeaderTitle.vue';

    export default {
        components: { Crumbs, HeaderTitle },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Premium features' }
                ]
            }
        }
    };
</script>