<template>
    <div v-show="active" class="w-full">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            active: true
        }
    },

    created() {
        this.$parent.tabs.push(this);
    }
}
</script>
