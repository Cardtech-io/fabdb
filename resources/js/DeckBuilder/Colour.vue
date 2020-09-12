<template>
    <div class="inline-block rounded-lg h-2 w-2" :class="resourceColour(resource)" v-if="resource"></div>
    <div class="inline-block h-2 w-2" v-else></div>
</template>

<script>
    import Cardable from "../CardDatabase/Cardable";

    export default {
        props: ['resource'],
        mixins: [Cardable]
    }
</script>
