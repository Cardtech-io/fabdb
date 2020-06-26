<template>
    <div>
        <h2 class="flex mt-4 bg-gray-500 sm:rounded-t-lg overflow-hidden">
            <div class="flex-1 px-4 py-2 uppercase font-serif text-white">
                Pricing
            </div>

            <div class="flex items-center w-1/4">
                <select v-model="currency" dir="rtl" class="w-full appearance-none outline-none leading-tight h-full p-2 px-4 bg-gray-800 text-white text-sm">
                    <option value="all">Currency - All</option>
                    <option v-bind:value="c" v-for="c in currencies">{{ c }}</option>
                </select>
            </div>
        </h2>
        <ul v-if="filtered.length">
            <li v-for="listing in filtered" class="flex odd:bg-white">
                <div class="w-1/3 p-2 px-4">{{ variant(listing.variant) }}</div>
                <div class="w-1/3 p-2 px-4 text-center">{{ price(listing) }}</div>
                <div class="w-1/3 p-2 px-4 text-right">
                    <a :href="listingUrl(listing)" class="link" target="_blank">{{ listing.store.name }}</a>
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
    import Strings from '../Utilities/Strings';

    export default {
        props: ['listings'],
        mixins: [Strings],

        data() {
            return {
                currency: 'all'
            }
        },

        computed: {
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
                }), 'variant');
            }
        },

        methods: {
            price(listing) {
                let value = '$';

                if (this.currency == 'all') {
                    value += listing.store.currency;
                }
                return value + listing.price;
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
                return 'https://'+listing.store.domain+listing.path;
            }
        }
    };
</script>