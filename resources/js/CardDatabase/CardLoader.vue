<template>
    <img src="@/images/card-loading.png" alt="Loader image" title="Loader image" class="w-full rounded-card animate-pulse" ref="image" :width="requiredWidth" :height="requiredHeight">
</template>

<script>
    import DetermineWidth from "../Components/DetermineWidth.js";

    export default {
        mixins: [DetermineWidth]
    }
</script>
