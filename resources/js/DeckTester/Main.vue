<template>
    <div v-if="deck">
        <header-title title="Test Deck"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="main-body">
            <div class="container py-8 sm:mx-auto">
                <component :is="step" :tester="tester"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import Breadcrumbs from "../Components/Breadcrumbs.vue";
    import Decks from "../Decks/DeckRepository.vue";
    import HeaderTitle from "../Components/HeaderTitle.vue";
    import Play from "./Play.vue";
    import Prepare from "./Prepare.vue";
    import Strings from "../Utilities/Strings.js";
    import Tester from "./Tester.vue";

    export default {
        components: {Breadcrumbs, HeaderTitle, Play, Prepare},
        mixins: [Strings],

        data() {
            return {
                deck: null,
                step: 'prepare',
            }
        },

        computed: {
            ...mapGetters('session', ['premium']),

            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Deck Builder', link: '/decks/mine' },
                    { text: 'Test ' + this.deck.name },
                ]
            },

            tester() {
                return new Tester(this.deck);
            }
        },

        methods: {
            async load() {
                let deck = await Decks.findWithWidth(this.$route.params.deck, 200);

                deck.cards.each(card => {
                    let sideboarded = deck.sideboard.find(card);

                    if (sideboarded) {
                        card.total = card.total - sideboarded.total;
                    }
                });

                this.deck = deck;
            }
        },

        mounted() {
            this.load();
        }
    };
</script>
