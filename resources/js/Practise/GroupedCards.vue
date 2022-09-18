<template>
    <div v-masonry destroy-delay="2000" :containerId="groupId" class="pb-2 mx-2" transition-duration="0.3s">
        <div v-for="grouped in groupedCards" v-masonry-tile :class="cardClasses">
            <div class="relative my-4 mx-2">
                <img :src="grouped[0].image" class="block w-full invisible" :style="margin(grouped.length)">
                <div v-for="(card, i) in grouped" class="relative rounded-card w-full" :style="styles(i)">
                    <card-image :card="card" :width="350" class="w-full"></card-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore';
    import { mapGetters, mapState } from 'vuex';

    import Cardable from '../CardDatabase/Cardable.js';
    import CardImage from '../CardDatabase/CardImage.vue';
    import Redrawable from "../DeckBuilder/Redrawable.js";
    import Viewable from "../DeckBuilder/Viewable.js";

    export default {
        props: ['cards', 'groupId', 'width'],
        mixins: [Cardable, Redrawable, Viewable],
        components: {CardImage},

        computed: {
            ...mapState('draft', ['fullScreen', 'grouping', 'zoom']),
            ...mapGetters('session', ['user']),

            cardClasses() {
                return [
                    this.width || 'w-1/2 sm:w-1/' + (this.cardWidth - 2) + ' sm:w-1/' + (this.cardWidth - 1) + '  md:w-1/' + this.cardWidth,
                    'rounded-card'
                ];
            },

            cardWidth() {
                let widths = [3, 4, 5, 6, 7, 8];

                return widths[this.zoom];
            },

            groupedCards() {
                if (this.grouping === 'class') {
                    let classes = this.$settings.game.classes;

                    return this.cards.filter(card => {
                        return _.intersection(card.keywords, Object.keys(classes)).length;
                    }).group(card => {
                        return Object.keys(classes).indexOf(card.keywords[0]) !== -1 ? card.keywords[0] : card.keywords[1];
                    });
                }

                if (this.grouping === 'talent') {
                    let talents = this.$settings.game.talents;

                    return this.cards.filter(card => {
                        return Object.keys(talents).indexOf(card.keywords[0]) !== -1;
                    }).group(card => {
                        return card.keywords[0];
                    });
                }

                // Default grouping
                return this.cards.group('name');
            },

            offset() {
                return this.user.view === 'borderless' ? 10 : 12;
            },

            pad() {
                return this.user.view === 'borderless' ? 17 : 18;
            },

            rounded: function() {
                let fsRounded = ['rounded-xl', 'rounded-lg', 'rounded-lg', 'rounded'];
                let nsRounded = ['rounded-lg', 'rounded-lg', 'rounded', 'rounded'];

                return this.fullScreen ? fsRounded[this.zoom] : nsRounded[this.zoom];
            },
        },

        methods: {
            margin: function(total) {
                let items = total - 1;

                if (items > 0) {
                    return 'margin-bottom: ' + items * this.pad + '%';
                }
            },

            styles: function(i) {
                let styles = [];
                let zIndex = i;

                styles.push('z-index: ' + zIndex);
                styles.push('position: absolute');
                styles.push('top: ' + (i * this.offset)  + '%');
                styles.push('left: 0');

                return styles.join('; ');
            }
        },

        watch: {
            cards() {
                this.redraw(this.groupId);
            },

            fullScreen() {
                this.redraw(this.groupId);
            },

            zoom() {
                this.redraw(this.groupId);
            },

            sections: {
                handler() {
                    this.redraw(this.groupId);
                },
                deep: true
            }
        }
    };
</script>
