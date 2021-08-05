<template>
    <img src="/img/card-loading.png" alt="Loader image" title="Loader image" class="w-full rounded-card" ref="image" :width="requiredWidth" :height="requiredHeight">
</template>

<script>
    import DetermineWidth from "../Components/DetermineWidth";

    export default {
        mixins: [DetermineWidth]
    }
</script>
