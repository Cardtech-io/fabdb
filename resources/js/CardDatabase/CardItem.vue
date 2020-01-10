<template>
    <li  class="float-left p-6 sm:p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div class="bg-white rounded-xl">
            <router-link :to="viewUrl()"><img :src="cardUrl(card.identifier, 350)" :alt="card.name" :title="card.name" class="w-full rounded-xl"></router-link>
        </div>
    </li>
</template>

<script>
    import Cardable from './Cardable.js';

    export default {
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