<template>
    <img :src="image" :alt="card.name" :title="card.name" class="w-full rounded-card" @click="clicked" :class="classes" ref="image" :width="requiredWidth" :height="requiredHeight">
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from './Cardable.js';
    import DetermineWidth from "../Components/DetermineWidth.js";
    import Imagery from "../Utilities/Imagery.js";

    export default {
        mixins: [Cardable, Imagery, DetermineWidth],
        props: ['card', 'clickHandler', 'width', 'sku'],

        computed: {
            ...mapGetters('session', ['wantsBorders']),

            classes() {
                return [
                    this.handlerProvided() ? 'cursor-pointer' : ''
                ];
            },

            image() {
                let width = this.width || 450;

                if (this.sku) {
                    return this.cardImageFromSku(this.sku, width);
                }

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
            clicked(event) {
                if (this.handlerProvided()) {
                    this.clickHandler(this.card);
                    event.preventDefault();
                }
            },

            handlerProvided() {
                return !!this.clickHandler;
            }
        },

        mounted() {
            this.mount(this.$refs.image);
        }
    };
</script>
