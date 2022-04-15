<template>
    <button type="submit" ref="submit" class="appearance-none block rounded-lg py-2 px-4" :class="classes" :disabled="!enabled">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: ['disabled', 'text'],

        data() {
            return {
                clickable: true,
                handler: null,
            };
        },

        computed: {
            classes() {
                return {
                    'button-primary': this.enabled,
                    'button-disabled': !this.enabled,
                }
            },

            enabled() {
                return !this.disabled && this.clickable;
            }
        },

        mounted() {
            this.handler = () => {
                this.clickable = false;
                setTimeout(() => {
                    this.clickable = true;
                }, 3000);
            };

            this.$refs.submit.form.addEventListener('submit', this.handler);
        }
    };
</script>
