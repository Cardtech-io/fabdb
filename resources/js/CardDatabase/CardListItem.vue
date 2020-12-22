<template>
    <tbody>
        <tr class="odd:bg-gray-200 hidden sm:table-row">
            <td class="border border-gray-300 font-serif uppercase text-lg py-1" colspan="6"><router-link :to="'/collection/' + card.identifier" class="block py-1 px-2 w-full">{{ card.name }} <span v-if="hasResource(card)">({{ colourToText(card.stats.resource) }})</span></router-link></td>
        </tr>
        <tr class="odd:bg-gray-100 hover:bg-white hidden sm:table-row" v-for="printing in card.printings">
            <td class="border border-gray-300 px-2 pl-8 text-right"><span :class="printing.sku.finish" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.sku.finish">{{ printing.sku.sku }}</span></td>
            <td class="border border-gray-300 px-2">{{ englishFinish(printing.sku.finish) }}</td>
            <td class="border border-gray-300 px-2">{{ printing.set }}</td>
            <td class="border border-gray-300 text-center"><card-count :printing="printing" type="total"></card-count></td>
            <td class="border border-gray-300 text-center">
                <div class="inline-block">
                    <icon :size="5" class="text-green-500">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                    </icon>
                </div>
            </td>
            <td class="border border-gray-300 text-center">want?</td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-white sm:hidden">
            <td class="border border-gray-300 py-1 px-2" colspan="5">{{ card.identifier }} {{ card.name }} <span v-if="hasResource(card)">({{ colourToText(card.stats.resource) }})</span></td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-white sm:hidden">
            <td class="border border-gray-300 text-center" colspan="5">
                <div class="flex">
<!--                    <card-count :card="card" type="total"></card-count>-->
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import Cardable from './Cardable.js';
    import CardCount from '../Collection/CardCount.vue';
    import Icon from "../Components/Icon";

    export default {
        components: {
            CardCount,
            Icon
        },

        mixins: [Cardable],

        props: {
            card: Object,
            path: String
        },

        methods: {
            viewUrl: function() {
                return this.path + '/' + this.card.identifier + '/';
            }
        }
    }
</script>
