<template>
    <li  class="float-left p-4 pb-0 w-1/2 sm:w-1/3 lg:w-1/4">
        <router-link :to="viewUrl()">
            <img :src="cardUrl(card.identifier, 250)" :alt="card.name" class="w-full">
        </router-link>
        <button>Add to collection</button>
    </li>
</template>

<script>
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],
        props: ['card'],

        methods: {
            viewUrl: function() {
                return '/card/' + this.card.identifier + '/';
            }
        }
    }
</script>