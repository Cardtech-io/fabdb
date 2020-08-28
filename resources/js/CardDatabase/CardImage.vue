<template>
    <img :src="cardUrl(card.identifier, imageWidth, wantsBorders)" :alt="card.name" :title="card.name" class="w-full rounded-card" @click="clicked" :class="classes">
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],
        props: ['card', 'clickHandler', 'width'],

        computed: {
            ...mapGetters('session', ['user']),

            classes: function() {
                return [
                    this.handlerProvided() ? 'cursor-pointer' : ''
                ];
            },

            imageWidth() {
                return this.width || 450;
            },

            wantsBorders() {
                return !this.user || this.user.view == 'bordered';
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
            }
        }
    };
</script>
