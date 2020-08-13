<template>
    <div>
        <span v-for="crumb in crumbs">
            <span v-if="crumb.name" class="inline-block pr-1">
                <router-link :to="{ name: crumb.name }" class="text-white hover:text-red-300 inline-block pr-1">{{ crumb.text }}</router-link><span class="text-red-500 inline-block">&gt;</span>
            </span>
            <span v-else-if="crumb.link" class="inline-block pr-1">
                <router-link :to="crumb.link" class="text-white hover:text-red-300 inline-block pr-1">{{ crumb.text }}</router-link><span class="text-red-500 inline-block">&gt;</span>
            </span>
            <span v-else class="text-red-300 inline-block">
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
