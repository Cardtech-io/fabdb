<template>
    <li @mouseenter="toggleDetails" @mouseleave="toggleDetails">
        <div class="relative overflow-hidden rounded-card">
            <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }" v-if="path"><card-image :card="card" :width="350"/></router-link>
            <card-image :card="card" :width="300" v-else />
            <card-legality :card="card" v-if="card.legality"/>
            <transition
                name="card-details"
                enter-active-class="transition-all duration-150 ease-out-quad"
                leave-active-class="transition-all duration-100 ease-in-quad"
            >
                <div v-if="viewDetails" class="hidden sm:block bg-nearly-black absolute bottom-0 h-card-drawer z-100 w-full">
                    <div class="relative p-2 text-gray-400 text-sm h-full" :class="{'cursor-pointer': !!path}" @click="go">
                        <header>
                            <div class="font-serif uppercase text-center overflow-hidden -mb-1 text-gray-300">{{ card.name }}</div>
                            <div class="font-serif uppercase text-gray-400 text-center mt-1" v-if="card.currentPrice">${{ card.currentPrice.price / 100 }}</div>
                        </header>
                        <footer class="absolute bottom-0 flex items-center text-sm w-full py-1 bg-black">
                            <div title="Printings available" class="flex pl-2 w-1/4">
                                <icon :size="5" class="mr-2"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></icon>
                                {{ card.printings.length }}
                            </div>
                            <rarity-text :rarity="card.rarity" class="block bg-black w-1/2 text-xs text-center"/>
                            <div title="Cards in collection" class="flex pr-2 w-1/4" v-if="user">
                                <div class="ml-2">{{ card.ownedTotal }}</div>
                                <icon :size="5" class="inline-block ml-2"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/></icon>
                            </div>
                        </footer>
                    </div>
                </div>
            </transition>
        </div>
    </li>
</template>

<script>
    import {mapGetters} from 'vuex';
    import CardImage from './CardImage.vue';
    import CardLegality from './CardLegality.vue';
    import Icon from "../Components/Icon.vue";
    import RarityText from "./RarityText.vue";

    export default {
        components: {CardImage, CardLegality, Icon, RarityText},

        props: {
            card: Object,
            path: String
        },

        data() {
            return {
                viewDetails: false
            }
        },

        computed: {
            ...mapGetters('session', ['user'])
        },

        methods: {
            go() {
                if (this.path) {
                    this.$router.push({ name: 'cards.view', params: {identifier: this.card.identifier }});
                }
            },

            toggleDetails() {
                this.viewDetails = !this.viewDetails;
            },

            totalOwned(printings) {
                return printings.reduce((carry, card) => {
                    return carry + card.total;
                }, 0);
            },

            viewUrl: function() {
                return this.path + '/' + this.card.identifier;
            }
        }
    }
</script>
