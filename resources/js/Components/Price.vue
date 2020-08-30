<template>
    <div>
        <span>{{ symbol }}</span><span>{{ value.toFixed(2) }}</span>
    </div>
</template>

<script>
    export default {
        props: ['amount', 'currency', 'showCurrency'],

        computed: {
            symbol() {
                let symbol = '$';

                if (this.amount < 0) {
                    symbol = '-' + symbol;
                }

                if (this.showCurrency !== 'undefined' && this.showCurrency) {
                    symbol += this.currency;
                }

                return symbol;
            },

            // Move the negative modifier outside of the currency value
            value() {
                return Math.abs(this.amount);
            }
        }
    };
</script>
