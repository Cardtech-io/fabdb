<template>
    <masonry-container class="pb-2 mx-2" :containerId="groupId">
        <card-container v-for="grouped in groupedCards" v-masonry-tile class="rounded-card" :key="grouped[0].identifier">
            <div class="relative my-4 mx-2">
                <img :src="grouped[0].image" class="block w-full invisible" :style="margin(grouped.length)">
                <div v-for="(card, i) in grouped" class="relative rounded-card w-full" :style="styles(i)">
                    <card-image :card="card" :width="350" :clickHandler="action || false" class="z-0"></card-image>
                    <div class=" absolute top-0 bottom-0 w-full opacity-50 rounded-card bg-gray-200 z-25" v-if="(!card.totalOwned || card.totalOwned < i+1) && deck.limitToCollection === 2 && mode !== 'sideboard'"></div>
                    <banned v-if="card.banned"></banned>
                </div>
            </div>
            <slot></slot>
        </card-container>
    </masonry-container>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    import Banned from '../CardDatabase/Banned';
    import Cardable from '../CardDatabase/Cardable';
    import CardContainer from "./CardContainer";
    import CardImage from '../CardDatabase/CardImage.vue';
    import MasonryContainer from "./MasonryContainer";
    import Redrawable from './Redrawable';
    import Viewable from './Viewable';

    export default {
        props: ['action', 'cards', 'groupId', 'width'],
        mixins: [Cardable, Redrawable, Viewable],
        components: {Banned, CardContainer, CardImage, MasonryContainer},

        computed: {
            ...mapState('deck', ['deck', 'fullScreen', 'grouping', 'mode', 'sections', 'zoom']),
            ...mapGetters('session', ['user']),

            cardClasses() {
                return this.width || 'w-1/2 sm:w-1/' + (this.cardWidth - 2) + ' sm:w-1/' + (this.cardWidth - 1) + '  md:w-1/' + this.cardWidth
            },

            cardWidth() {
                let widths = [3, 4, 5, 6, 7, 8];

                return widths[this.zoom];
            },

            groupedCards() {
                return this.cards.group('name');
            },

            offset() {
                return this.user.view === 'borderless' ? 10 : 12;
            },

            pad() {
                return this.user.view === 'borderless' ? 17 : 18;
            }
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
            }
        }
    };
</script>
