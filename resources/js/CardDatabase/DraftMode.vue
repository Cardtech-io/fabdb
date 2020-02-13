<template>
    <div>
        <header-title title="Draft"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <router-view></router-view>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Submit from '../Components/Form/Submit.vue';

    export default {
        components: { Breadcrumbs, HeaderTitle, Submit },

        data() {
            return {
                mode: 'draft',

                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Draft' }
                ]
            }
        }
    };
</script>