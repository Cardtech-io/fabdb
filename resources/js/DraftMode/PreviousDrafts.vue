<template>
    <div>
        <header-title title="Draft mode"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 md:flex">
                List of previous drafts.

                <router-link to="/cards/draft/start" class="link">Start a new draft</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Button from '../Components/Form/Button.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';

    export default {
        components: { Button, Breadcrumbs, HeaderTitle },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Draft mode' }
                ]
            }
        }
    };
</script>
