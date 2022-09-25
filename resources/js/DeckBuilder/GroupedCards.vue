<template>
    <masonry-container class="pb-2 mx-2" :containerId="groupId">
        <card-container v-for="group in groupedCards" v-masonry-tile class="rounded-card" :key="group[0].identifier" :width="width">
            <div class="relative my-4 mx-2">
                <img :src="group[0].image" class="block w-full invisible" :style="margin(group.length)">
                <div v-for="(card, i) in group" class="relative rounded-card w-full" :style="styles(i)">
                    <card-image :card="card" :width="350" :clickHandler="action || false" class="z-0"/>
                    <div class=" absolute top-0 bottom-0 w-full opacity-50 rounded-card bg-gray-200 z-25" v-if="showOverlay(card)"></div>
                    <banned v-if="card.banned"/>
                </div>
            </div>
            <slot></slot>
        </card-container>
    </masonry-container>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    import Banned from '../CardDatabase/Banned.vue';
    import Cardable from '../CardDatabase/Cardable.js';
    import CardContainer from "./CardContainer.vue";
    import CardImage from '../CardDatabase/CardImage.vue';
    import MasonryContainer from "./MasonryContainer.vue";
    import Redrawable from './Redrawable.js';
    import Viewable from './Viewable.js';

    let state = {
        x: 0,
        previous: null
    };

    export default {
        props: ['action', 'cards', 'groupId', 'width'],
        mixins: [Cardable, Redrawable, Viewable],
        components: {Banned, CardContainer, CardImage, MasonryContainer},

        computed: {
            ...mapState('deck', ['deck', 'fullScreen', 'grouping', 'mode', 'sections', 'zoom']),
            ...mapGetters('session', ['user']),

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
            margin(total) {
                let items = total - 1;

                if (items > 0) {
                    return 'margin-bottom: ' + items * this.pad + '%';
                }
            },

            styles(i) {
                let styles = [];
                let zIndex = i;

                styles.push('z-index: ' + zIndex);
                styles.push('position: absolute');
                styles.push('top: ' + (i * this.offset)  + '%');
                styles.push('left: 0');

                return styles.join('; ');
            },

            // This is rather complex. It needs to figure out exactly how many iterations of the current card we're at,
            // to better understand whether or not the overlay should be shown. Depending purely on i means that the
            // calculation will be wrong.
            showOverlay(card) {
                if (!state.previous || card.identifier !== state.previous) {
                    state.x = 0;
                } else {
                    state.x++;
                }

                // For some reason, this results in a render loop.
                state.previous = card.identifier;

                return this.deck.limitToCollection === 2 && this.mode !== 'sideboard' && (!card.ownedTotal || card.ownedTotal < state.x + 1)
            }
        },

        watch: {
            cards() {
                this.redraw(this.groupId);
            }
        }
    };
</script>
