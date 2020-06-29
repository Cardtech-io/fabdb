<template>
    <select v-model="thisCurrency" dir="rtl" class="input focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg" @change="currencySelected">
        <option value="all" v-if="showAll">Currency - All</option>
        <option v-bind:value="c" v-for="c in currencies">{{ c }}</option>
    </select>
</template>

<script>
    export default {
        props: ['currency', 'showAll'],

        data() {
            return {
                thisCurrency: this.currency,
                currencies: ['AUD', 'NZD', 'USD']
            };
        },

        methods: {
            currencySelected() {
                this.$emit('currency-selected', this.thisCurrency);
            }
        }
    };
</script>