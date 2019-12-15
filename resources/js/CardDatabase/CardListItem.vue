<template>
    <tr>
        <td class="border border-gray-400 p-2">{{ card.identifier }}</td>
        <td class="border border-gray-400 p-2">{{ card.name }}</td>
        <td class="border border-gray-400 p-2">{{ card.standard }}</td>
        <td class="border border-gray-400 p-2">{{ card.foil }}</td>
        <td class="border border-gray-400 p-2">{{ card.promo }}</td>
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