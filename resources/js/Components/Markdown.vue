<template>
    <div :is="dynamicComponent"></div>
</template>
<script>
    export default {
        props: {
            content: {
                type: String,
                required: true
            }
        },

        computed: {
            dynamicComponent() {
                return {
                    template: this.content
                }
            }
        }
    };
</script>
