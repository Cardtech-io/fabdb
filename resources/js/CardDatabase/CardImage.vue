<template>
    <img :src="cardUrl(card.identifier, 450, wantsBorders())" :alt="card.name" :title="card.name" class="w-full" @click="clicked" :class="classes">
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],
        props: ['card', 'clickHandler', 'rounded'],

        computed: {
            ...mapGetters('session', ['user']),

            classes: function() {
                return [
                    this.handlerProvided() ? 'cursor-pointer' : '',
                    this.rounded || 'rounded-lg sm:rounded-xl'
                ];
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
