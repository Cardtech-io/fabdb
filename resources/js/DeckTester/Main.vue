<template>
    <div>
        <header-title title="Test Deck"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div v-if="true" class="container py-8 sm:mx-auto">
                <router-view :tester="tester"></router-view>
            </div>
            <div v-else>
                <div class="container px-4 py-8 sm:mx-auto">
                    <h2 class="font-serif uppercase text-xl mb-4">Membership required</h2>

                    <p>
                        Testing your deck's draw capabilities is a premium access feature. In order to use this feature,
                        you must be a Patreon supporter. Check out <router-link :to="{name: 'support'}" class="link">our support page</router-link> or
                        go directly to our <a href="https://www.patreon.com/fabdb" class="link">Patreon page</a>. Memberships start as
                        low as $3/month!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import Breadcrumbs from "../Components/Breadcrumbs";
    import Decks from "../Decks/DeckRepository";
    import HeaderTitle from "../Components/HeaderTitle";
    import LazyLoader from "../Components/LazyLoader";
    import Tester from "./Tester";

    export default {
        components: {Breadcrumbs, HeaderTitle},

        data() {
            return {
                deck: null
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

        extends: LazyLoader(async (to, callback) => {
            let deck = await Decks.find(to.params.deck);

            callback(function() {
                this.deck = deck;
            });
        })
    };
</script>
