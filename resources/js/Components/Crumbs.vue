<template>
    <div>
        <span v-for="crumb in crumbs">
            <span v-if="crumb.link">
                <router-link :to="crumb.link" class="text-white hover:text-orange-300">{{ crumb.text }}</router-link> <span class="text-orange-500">&gt;</span>
            </span>
            <span v-else class="text-orange-300">
                {{ crumb.text }}
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            crumbs: {
                type: Array,
                required: true
            }
        }
    };
</script>
