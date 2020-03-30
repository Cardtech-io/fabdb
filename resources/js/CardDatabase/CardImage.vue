<template>
    <img :src="cardUrl(card.identifier, 450, wantsBorders())" :alt="card.name" :title="card.name" class="w-full rounded-lg sm:rounded-xl" @click="clicked" :class="clickClass">
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],
        props: ['card', 'clickHandler'],

        computed: {
            ...mapGetters('session', ['user']),

            clickClass: function() {
                return this.handlerProvided() ? 'cursor-pointer' : '';
            }
        },

        methods: {
            clicked: function() {
                if (this.handlerProvided()) {
                    this.clickHandler(this.card);
                }
            },

            handlerProvided: function() {
                return !!this.clickHandler;
            },

            wantsBorders: function() {
                return this.user && this.user.view == 'bordered';
            }
        }
    };
</script>
