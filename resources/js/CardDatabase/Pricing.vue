<template>
    <div>
        <h2 class="flex mt-4 px-4 py-2 bg-blue-700 rounded-t-lg">
            <div class="flex-1 uppercase font-serif text-white">
                Pricing
            </div>

            <div class="flex">
                <div class="text-white mr-2">Currency</div>
                <select v-model="currency" class="rounded p-1 text-sm">
                    <option value="all">All</option>
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