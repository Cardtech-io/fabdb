<template>
    <div>
        <h2 class="flex bg-gray-500 sm:rounded-t-lg overflow-hidden">
            <div class="flex-1 px-4 py-2 uppercase font-serif text-white text-base">
                Pricing
            </div>

            <div class="flex relative items-center w-2/5 sm:w-1/3">
                <select v-model="currency" dir="rtl" class="w-full appearance-none outline-none leading-tight h-full p-2 px-4 bg-gray-800 text-white text-sm">
                    <option value="all">Currency - All</option>
                    <option v-bind:value="c" v-for="c in currencies">{{ c }}</option>
                </select>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current ml-2 h-6 absolute z-100 text-white">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </h2>
        <ul v-if="filtered.length" class="text-base">
            <li v-for="listing in filtered" class="flex odd:bg-white">
                <div class="w-1/3 p-2 px-4"><sku-finish :sku="listing.sku"></sku-finish></div>
                <div class="w-1/3 p-2 px-4 text-center">
                    <price :amount="listing.price" :currency="useCurrency(listing)" :showCurrency="currency == 'all'"></price>
                </div>
                <div class="w-1/3 p-2 px-4 text-right">
                    <a :href="listingUrl(listing)" class="link-alternate" target="_blank" v-if="listing.available">{{ listing.name }}</a>
                    <span class="text-gray-500" v-else>{{ listing.name }}</span>
                </div>
            </li>
        </ul>
        <div class="bg-white p-4 rounded-b-lg" v-else>
            There are currently no listings or none that match the selected criteria.
        </div>
    </div>
</template>

<script>
    import _ from 'underscore';
    import { mapGetters } from 'vuex';
    import Carding from "../Utilities/Carding.js";
    import Price from '../Components/Price.vue';
    import SkuFinish from "./SkuFinish.vue";
    import Strings from '../Utilities/Strings.js';

    export default {
        props: {
            card: {
                required: true,
                type: Object
            }
        },

        mixins: [Strings],
        components: {Price, SkuFinish},

        data() {
            return {
                currency: 'all',
                listings: []
            }
        },

        computed: {
            ...mapGetters('session', ['user']),

            currencies() {
                let reduced = this.listings.reduce((carry, listing) => {
                    carry.push(listing.currency);
                    return carry;
                }, []);

                return [...new Set(reduced)];
            },

            filtered() {
                return _.sortBy(this.listings.filter(listing => {
                    return this.currency == 'all' || listing.currency == this.currency;
                }), 'price');
            }
        },

        methods: {
            useCurrency(listing) {
                return this.currency == 'all' ? listing.currency : this.currency;
            },

            variant(variant) {
                switch (variant) {
                    case 'regular':
                        return 'Regular';
                    case 'rainbow':
                        return 'Rainbow foil';
                    case 'cold':
                        return 'Cold foil';
                }
            },

            listingUrl(listing) {
                return Carding.listingUrl(listing.domain, listing.path, listing.id, 'listing');
            },
        },

        mounted() {
            axios.get('/market/listings?card='+this.card.identifier).then(response => this.listings = response.data);

            if (this.user && this.user.currency && this.currencies.indexOf(this.user.currency) !== -1) {
                this.currency = this.user.currency;
            }
        }
    };
</script>
