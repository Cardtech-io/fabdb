<template>
    <div v-show="active">
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
    }
}
</script>
