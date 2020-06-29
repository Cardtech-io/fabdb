<template>
    <tbody>
        <tr class="odd:bg-gray-100 hover:bg-gray-200 hidden sm:table-row">
            <td class="border border-gray-300">
                <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }" class="block py-2 px-4 w-full">
                    <span class="text-gray-200 text-xs p-1 rounded mr-2" :class="card.variant">{{ card.identifier }}</span>
                    {{ card.name }} <span v-if="hasResource(card) && card.rarity != 'M'">({{ colourToText(card.stats.resource) }})</span>
                </router-link>
            </td>
            <td class="border border-gray-300 py-2 px-4 text-center">{{ card.rarity }}</td>
            <td class="border border-gray-300 py-2 px-4 text-center"><price :currency="card.currency">{{ card.high }}</price></td>
            <td class="border border-gray-300 py-2 px-4 text-center"><price :currency="card.currency">{{ card.mean }}</price></td>
            <td class="border border-gray-300 py-2 px-4 text-center"><price :currency="card.currency">{{ card.low }}</price></td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200 sm:hidden">
            <td class="border border-gray-300 py-2 px-4" colspan="5">
                <span class="text-gray-200 text-xs p-1 rounded mr-2" :class="card.variant">{{ card.identifier }}</span>
                {{ card.name }}
                <span v-if="hasResource(card) && card.rarity != 'M'">({{ colourToText(card.stats.resource) }})</span>
            </td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200 sm:hidden">
            <td class="border border-gray-300 text-center" colspan="5">
                <div class="flex">
                    <div class="flex-1 p-2"><price :currency="card.currency">{{ card.high }}</price></div>
                    <div class="flex-1 p-2 border-l border-r border-gray-300"><price :currency="card.currency">{{ card.mean }}</price></div>
                    <div class="flex-1 p-2"><price :currency="card.currency">{{ card.low }}</price></div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import Cardable from './Cardable.js';
    import Price from '../Components/Price.vue';

    export default {
        mixins: [Cardable],
        components: { Price },

        props: {
            card: Object,
            view: String,
            path: String
        },

        methods: {
            viewUrl: function() {
                return this.path + '/' + this.card.identifier + '/';
            }
        }
    }
</script>