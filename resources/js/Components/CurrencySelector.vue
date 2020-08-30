<template>
    <select v-model="thisCurrency" dir="rtl" class="input-white focus:border-gray-500 py-2 px-4 rounded-lg" @change="currencySelected">
        <option value="all" v-if="showAll">Currency - All</option>
        <option v-bind:value="c" v-for="c in currencies">{{ c }}</option>
    </select>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: ['currency', 'showAll'],

        data() {
            return {
                thisCurrency: this.currency,
                currencies: ['AUD', 'CAD', 'NZD', 'USD']
            };
        },

        computed: {
            ...mapGetters('session', ['user']),
        },

        methods: {
            currencySelected() {
                this.$emit('currency-selected', this.thisCurrency);
            }
        },

        mounted() {
            if (!this.currency) {
                this.thisCurrency = this.user ? this.user.currency : 'USD';
            }
        }
    };
</script>
