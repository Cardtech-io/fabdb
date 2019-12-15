<template>
    <tr>
        <td class="border border-gray-300 py-2 px-4">{{ card.identifier }}</td>
        <td class="border border-gray-300 py-2 px-4">{{ card.name }}</td>
        <td class="border border-gray-300 py-2 px-4 text-center">{{ card.standard }}</td>
        <td class="border border-gray-300 py-2 px-4 text-center">{{ card.foil }}</td>
        <td class="border border-gray-300 py-2 px-4 text-center">{{ card.promo }}</td>
    </tr>
</template>

<script>
    import Cardable from './Cardable.js';
    import ManageCard from './ManageCard.vue';

    export default {
        components: {ManageCard},

        mixins: [Cardable],

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