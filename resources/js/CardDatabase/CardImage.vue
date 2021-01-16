<template>
    <img :src="imageUrl" :alt="card.name" :title="card.name" class="w-full rounded-card" @click="clicked" :class="classes">
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from './Cardable.js';

    export default {
        mixins: [Cardable],
        props: ['card', 'clickHandler', 'width'],

        computed: {
            ...mapGetters('session', ['wantsBorders']),

            classes: function() {
                return [
                    this.handlerProvided() ? 'cursor-pointer' : ''
                ];
            },

            imageUrl() {
                if (this.card.image) {
                    return this.cardImage(this.card.image, this.wantsBorders);
                }

                return this.cardUrl(this.card.identifier, this.imageWidth, this.wantsBorders);
            },

            imageWidth() {
                return this.width || 450;
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
