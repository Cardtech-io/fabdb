<template>
    <div class="z-0">
        <span v-for="crumb in crumbs">
            <span v-if="crumb.name" class="inline-block pr-1">
                <router-link :to="{ name: crumb.name }" class="inline-block pr-1">{{ crumb.text }}</router-link><span class="opacity-25 inline-block">&gt;</span>
            </span>
            <span v-else-if="crumb.link" class="inline-block pr-1">
                <router-link :to="crumb.link" class="hover:opacity-75 underline inline-block pr-1">{{ crumb.text }}</router-link><span class="opacity-25 inline-block">&gt;</span>
            </span>
            <span v-else class="opacity-75 inline-block">
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
