<template>
    <li class="float-left p-2 sm:p-4 w-1/2 md:w-1/3 lg:w-1/4">
        <card-image :card="card" :clickHandler="action"></card-image>
    </li>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';

    export default {
        mixins: [Cardable],
        props: ['action', 'card'],
        components: { CardImage },

        computed: {
            ...mapGetters('session', ['user'])
        }
    }
</script>