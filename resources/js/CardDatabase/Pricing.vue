<template>
    <div>
        <h2 class="flex mt-4 bg-gray-500 sm:rounded-t-lg overflow-hidden">
            <div class="flex-1 px-4 py-2 uppercase font-serif text-white">
                Pricing
            </div>

            <div class="flex relative items-center w-1/3 sm:w-1/4">
                <select v-model="currency" dir="rtl" class="w-full appearance-none outline-none leading-tight h-full p-2 px-4 bg-gray-800 text-white text-sm">
                    <option value="all">Currency - All</option>
                    <option v-bind:value="c" v-for="c in currencies">{{ c }}</option>
                </select>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current ml-2 h-6 absolute z-100 text-white">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </h2>
        <ul v-if="filtered.length">
            <li v-for="listing in filtered" class="flex odd:bg-white">
                <div class="w-1/3 p-2 px-4">{{ variant(listing.variant) }}</div>
                <div class="w-1/3 p-2 px-4 text-center">
                    <price :amount="listing.price" :currency="useCurrency(listing)" :showCurrency="currency == 'all'"></price>
                </div>
                <div class="w-1/3 p-2 px-4 text-right">
                    <a :href="listingUrl(listing)" class="link" target="_blank" v-if="listing.available">{{ listing.store.name }}</a>
                    <span class="text-gray-500" v-else>{{ listing.store.name }}</span>
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
    import Price from '../Components/Price.vue';
    import Strings from '../Utilities/Strings';

    export default {
        props: ['listings'],
        mixins: [Strings],
        components: {Price},

        data() {
            return {
                currency: 'all'
            }
        },

        computed: {
            ...mapGetters('session', ['user']),

            currencies() {
                let reduced = this.listings.reduce((carry, listing) => {
                    carry.push(listing.store.currency);
                    return carry;
                }, []);

                return [...new Set(reduced)];
            },

            filtered() {
                return _.sortBy(this.listings.filter(listing => {
                    return this.currency == 'all' || listing.store.currency == this.currency;
                }), 'price');
            }
        },

        methods: {
            useCurrency(listing) {
                return this.currency == 'all' ? listing.store.currency : this.currency;
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
                let payload = {
                    url: 'https://'+listing.store.domain+listing.path,
                    type: 'listing',
                    id: listing.id
                };

                let to = btoa(JSON.stringify(payload));

                return '/click?to='+to;
            },
        },

        mounted() {
            if (this.user && this.user.currency && this.currencies.indexOf(this.user.currency) !== -1) {
                this.currency = this.user.currency;
            }
        }
    };
</script>