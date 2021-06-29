<template>
    <img :src="image" :alt="card.name" :title="card.name" class="w-full rounded-card" @click="clicked" :class="classes" ref="image" :width="requiredWidth" :height="requiredHeight">
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from './Cardable.js';
    import Imagery from "../Utilities/Imagery";

    export default {
        mixins: [Cardable, Imagery],
        props: ['card', 'clickHandler', 'width', 'sku'],

        data() {
            return {
                requiredWidth: 0,
                requiredHeight: 0,
            }
        },

        computed: {
            ...mapGetters('session', ['wantsBorders']),

            classes() {
                return [
                    this.handlerProvided() ? 'cursor-pointer' : ''
                ];
            },

            styles() {
                console.log(this.requiredWidth, this.requiredHeight);

                return {
                    width: this.requiredWidth+'px',
                    height: this.requiredHeight+'px',
                }
            },

            image() {
                let width = this.width || 300;

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

        // This is for determining the size that the image needs to be to help address CLS issues :)
        mounted() {
            this.requiredWidth = this.$refs.image.getBoundingClientRect().width;
            let ratio = this.requiredWidth / 546;
            this.requiredHeight = 762 * ratio;
            console.log(this.requiredWidth, this.requiredHeight);
        }
    };
</script>
