<template>
    <span :class="sku.finish" class="inline-block text-xs sm:text-sm text-white px-1 mr-1 rounded-sm" :title="sku.finish">{{ sku.sku }}</span>
</template>

<script>
    export default {
        props: {
            sku: {
                required: true,
                type: Object
            }
        }
    }
</script>
