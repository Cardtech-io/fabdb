<template>
    <div v-masonry destroy-delay="2000" :containerId="groupId" class="pb-2 mx-2" transition-duration="0.3s">
        <div v-for="grouped in groupedCards" v-masonry-tile :class="cardClasses">
            <div class="relative my-4 mx-2">
                <img :src="grouped[0].image" class="block w-full invisible" :style="margin(grouped.length)">
                <div v-for="(card, i) in grouped" class="relative rounded-card w-full" :style="styles(i)">
                    <card-image :card="card" :width="350" :clickHandler="action || false" class="w-full" :class="{'shadow-error': !card.totalOwned || card.totalOwned < i+1 && deck.limitToCollection === 2}"></card-image>
                    <banned v-if="card.banned"></banned>
                </div>
            </div>
        </div>
        <slot v-bind:classes="cardClasses"></slot>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    import Banned from '../CardDatabase/Banned';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import Redrawable from './Redrawable';
    import Viewable from './Viewable';

    export default {
        props: ['action', 'cards', 'groupId', 'width'],
        mixins: [Cardable, Redrawable, Viewable],
        components: {Banned, CardImage},

        computed: {
            ...mapState('deck', ['deck', 'fullScreen', 'grouping', 'mode', 'sections', 'zoom']),
            ...mapGetters('session', ['user']),

            cardClasses: function() {
                return [
                    this.width || 'w-1/2 sm:w-1/' + (this.cardWidth - 2) + ' sm:w-1/' + (this.cardWidth - 1) + '  md:w-1/' + this.cardWidth,
                    'rounded-card'
                ];
            },

            cardWidth: function() {
                let widths = [3, 4, 5, 6, 7, 8];

                return widths[this.zoom];
            },

            groupedCards: function() {
                if (this.grouping === 'name') {
                    return this.cards.group('name');
                }

                let stat = this.grouping === 'cost' ? 'cost' : 'resource';

                return this.cards.filter(card => {
                    return card.stats[stat] !== ''}
                ).group(card => {
                    return card.stats[stat];
                });
            },

            offset: function() {
                return this.user.view === 'borderless' ? 10 : 12;
            },

            pad: function() {
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
            cards: function() {
                this.redraw(this.groupId);
            },

            fullScreen: function() {
                this.redraw(this.groupId);
            },

            mode: function() {
                this.redraw(this.groupId);
            },

            zoom: function() {
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
