<template>
    <div class="bg-gray-200">
        <div class="container sm:mx-auto p-4 md:flex">
            List of previous drafts.

            <router-link to="/cards/draft/configuration" class="link">Start a new draft</router-link>
        </div>
    </div>
</template>

<script>
    import Button from '../Components/Form/Button.vue';

    export default {
        components: { Button }
    };
</script>