<template>
    <img :src="cardUrl(card.identifier, 450)" :alt="card.name" :title="card.name" class="w-full rounded-lg sm:rounded-xl cursor-pointer" @click="clicked">
</template>

<script>
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],
        props: ['card', 'clickHandler'],

        methods: {
            clicked: function() {
                this.$emit('clicked', this.card);
            }
        }
    };
</script>
