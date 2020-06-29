<template>
    <div>
        <span>{{ symbol }}</span><span><slot></slot></span>
    </div>
</template>

<script>
    export default {
        props: ['amount', 'currency', 'showCurrency'],

        computed: {
            symbol() {
                return '$';
            }
        }
    };
</script>