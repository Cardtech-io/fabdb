<template>
    <div>
        <price :amount="current" :currency="currency"></price>
        <span v-if="current != previous && previous" class="text-sm">
            <price :amount="difference" :currency="currency" :class="textDifference"></price>
        </span>
    </div>
</template>

<script>
    import Price from './Price.vue';

    export default {
        props: ['currency', 'current', 'previous'],
        components: { Price },

        computed: {
            difference() {
                return (Math.ceil((this.current - this.previous) * 100) / 100).toFixed(2);
            },

            textDifference() {
                if (this.current < this.previous) {
                    return 'text-red-500';
                }

                if (this.current > this.previous) {
                    return 'text-green-500';
                }
            }
        }
    };
</script>
