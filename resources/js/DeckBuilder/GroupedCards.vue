<template>
    <div v-masonry class="pb-24" transition-duration="0.3s">
        <div v-for="grouped in cards" v-masonry-tile :class="cardClasses">
            <div class="relative m-4">
                <img :src="cardUrl(grouped[0].identifier, 450)" class="block w-full invisible" :style="margin(grouped.length)">
                <div v-for="(card, i) in grouped" :style="styles(i)" :class="rounded">
                    <card-image :card="card" :rounded="rounded" :clickHandler="action"></card-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import Viewable from './Viewable';

    export default {
        props: ['action', 'cards'],
        mixins: [Cardable, Viewable],
        components: {CardImage},

        data() {
            return {
                offset: 10,
                pad: 17,
            }
        },

        computed: {
            ...mapState('deck', ['fullScreen', 'zoom']),

            cardClasses: function() {
                return [
                    'w-1/' + this.cardWidth,
                    this.rounded
                ];
            },

            cardWidth: function() {
                let widths = [3, 4, 5, 6];

                return widths[this.zoom];
            },

            rounded: function() {
                let rounded = ['rounded-xl', 'rounded-lg', 'rounded', 'rounded'];

                return this.fullScreen ? rounded[this.zoom] : 'rounded';
            },
        },

        methods: {
            margin: function(total) {
                let items = total - 1;

                if (items > 0) {
                    return 'margin-bottom: ' + items * this.pad + '%';
                }
            },

            redraw: function() {
                setTimeout(() => {
                    this.$redrawVueMasonry();
                }, 10);
            },

            styles: function(i) {
                let styles = [];
                let zIndex = i * 10;

                styles.push('z-index: ' + zIndex);
                styles.push('position: absolute');
                styles.push('top: ' + (i * this.offset)  + '%');
                styles.push('left: 0');

                return styles.join('; ');
            }
        },

        watch: {
            cards: function() {
                this.redraw();
            },

            zoom: function() {
                this.redraw();
            }
        }
    };
</script>