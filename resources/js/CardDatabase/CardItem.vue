<template>
    <li class="float-left p-2 sm:p-4 w-1/2 md:w-1/3 lg:w-1/4">
        <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }" v-if="path"><card-image :card="card" :width="350"></card-image></router-link>
        <card-image :card="card" :width="300" v-else />
    </li>
</template>

<script>
    import CardImage from './CardImage.vue';

    export default {
        components: { CardImage },

        props: {
            card: Object,
            path: String
        },

        methods: {
            viewUrl: function() {
                return this.path + '/' + this.card.identifier;
            }
        }
    }
</script>
