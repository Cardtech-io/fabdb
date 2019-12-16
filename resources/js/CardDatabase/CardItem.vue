<template>
    <li  class="float-left p-4 pb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div class="bg-white rounded-xl">
            <router-link :to="viewUrl()"><img :src="cardUrl(card.identifier, 250)" :alt="card.name" :title="card.name" class="w-full rounded-xl"></router-link>
            <manage-card :card="card" view="list"></manage-card>
        </div>
    </li>
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