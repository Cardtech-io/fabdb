<template>
    <div class="pb-24 text-base">
        <div v-if="!cards.hero()">
            <hero-selector @hero-selected="addToDeck" :deck="deck"></hero-selector>
        </div>
        <div v-else>
            <div v-if="view === 'gallery'">
                <div v-if="user.subscription" class="md:flex m-4">
                    <div class="md:mr-4 md:w-auto md:max-w-250 flow-root">
                        <div class="w-1/2 md:w-auto pr-4 md:p-0 float-left md:float-none">
                            <card-image :card="cards.hero()" class="mb-4"></card-image>
                        </div>
                        <div class="w-1/2 md:w-auto float-left md:float-none">
                            <div class="bg-white rounded-lg pl-2 pr-4 pt-4">
                                <deck-curves :cards="cards.other().withCost()" stat="cost" strategy="total" class="mb-4 h-140 sm:h-160"></deck-curves>
                            </div>
                            <div class="bg-white rounded-lg pl-2 pr-4 pt-4 mt-4">
                                <deck-curves :cards="cards.other().withResource()" stat="resource" strategy="total" class="mb-4 h-140 sm:h-160"></deck-curves>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="mx-2 my-4">
                                <h3 class="font-serif uppercase text-lg">Totals</h3>
                                <totals class="mt-2"></totals>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="mx-2">
                                <h3 class="font-serif uppercase text-lg">General</h3>
                                <general class="mt-2"></general>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div v-for="section in availableSections" v-if="section.cards.count()">
                            <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: section.title })" :class="{ 'mb-4': !sectionOpen(section.title) }">
                                <chevron :open="sectionOpen(section.title)" class="mr-2"></chevron>
                                {{ section.title }} ({{section.cards.total()}})
                            </h2>
                            <grouped-cards :cards="section.cards.hydrate()" :group-id="kebabCase(section.title)" :key="kebabCase(section.title)" :action="mode === 'search' ? removeFromDeck : false" v-show="sectionOpen(section.title)"></grouped-cards>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center my-20 mx-10">
                    Gallery mode is available only to FaB DB patrons.<br>
                    <br>
                    <router-link to="/support" class="link-alternate">Upgrade to access the gallery mode feature.</router-link>
                </div>
            </div>

            <div v-else class="lg:flex m-4">
                <!-- Text-based deck view -->
                <div class="hidden lg:block md:mr-8 max-w-250">
                    <card-image :card="cards.hero()" class="mb-4"></card-image>
                    <div>
                        <div class="bg-white rounded-lg pl-2 pr-4 pt-4 pb-2">
                            <deck-curves :cards="cards.other().withCost()" stat="cost" strategy="total" class="mb-4 h-140 sm:h-160"></deck-curves>
                        </div>
                        <div class="bg-white rounded-lg pl-2 pr-4 pt-4 pb-2 mt-4">
                            <deck-curves :cards="cards.other().withResource()" stat="resource" strategy="total" class="mb-4 h-140 sm:h-160"></deck-curves>
                        </div>
                    </div>
                </div>
                <div class="sm:flex-grow sm:mr-4">
                    <masonry-container container-id="text-sections" class="sm:flex sm:flex-wrap">
                        <div v-for="section in availableSections" v-if="section.cards.count()" class="w-full sm:w-1/2 lg:w-1/3 sm:pr-8">
                            <card-item-section :cards="section.cards" :title="section.title"></card-item-section>
                        </div>
                    </masonry-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    import FormButton from '../Components/Form/Button.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage';
    import CardItemSection from "./CardItemSection";
    import Cards from './Cards';
    import Chevron from "./Buttons/Chevron";
    import DeckCurves from "./DeckCurves";
    import General from "./Metrics/General";
    import Groupable from "./Groupable";
    import GroupedCards from './GroupedCards.vue';
    import HeroSelector from "../Components/HeroSelector";
    import ManagesDecks from './ManagesDecks';
    import MasonryContainer from "./MasonryContainer";
    import Totals from "./Metrics/Totals";
    import Viewable from './Viewable';
    import Redrawable from "./Redrawable";
    import Strings from "../Utilities/Strings";

    export default {
        props: ['collection'],
        mixins: [Cardable, Groupable, ManagesDecks, Redrawable, Strings, Viewable],

        components: {
            CardImage,
            CardItemSection,
            Chevron,
            DeckCurves,
            FormButton,
            General,
            GroupedCards,
            HeroSelector,
            MasonryContainer,
            Totals
        },

        computed: {
            ...mapState('deck', ['deck', 'filters', 'grouping', 'mode', 'sections', 'view', 'zoom']),
            ...mapGetters('session', ['user']),
            ...mapGetters('deck', ['sectionOpen']),

            other() {
                return this.cards.other();
            }
        },

        methods: {
            ...mapActions('deck', ['addCard', 'setMode', 'removeCard', 'toggleSection']),

            addToDeck(card) {
                this.addRemote(card, response => {
                    this.addCard({card});
                    this.setMode({mode: 'search'});
                    this.$eventHub.$emit('hero-selected', card, this.type(card));
                });
            },

            filter(cards) {
                return cards.applyFilters(this.filters);
            },

            removeFromDeck(card) {
                this.removeRemote(card);
                this.removeCard({ card });
            }
        }
    };
</script>
