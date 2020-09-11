<template>
    <div class="inline-block rounded-lg h-2 w-2" :class="resourceColour(resource)" v-if="resource"></div>
</template>

<script>
    import Cardable from "../CardDatabase/Cardable";

    export default {
        props: ['resource'],
        mixins: [Cardable]
    }
</script>
