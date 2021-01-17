<template>
    <li class="float-left p-2 sm:p-4 w-1/2 md:w-1/4 lg:w-1/5" @mouseenter="toggleDetails" @mouseleave="toggleDetails">
        <div class="relative overflow-hidden rounded-card">
            <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }" v-if="path"><card-image :card="card" :width="350"></card-image></router-link>
            <card-image :card="card" :width="300" v-else />
            <transition
                name="card-details"
                enter-active-class="transition-all duration-200 ease-out-quad"
                leave-active-class="transition-all duration-100 ease-in-quad"
            >
                <div v-if="viewDetails" class="p-2 bg-nearly-black absolute bottom-0 h-1/4 z-100 w-full text-gray-400 text-sm" :class="{'cursor-pointer': !!path}" @click="go">
                    <header class="mb-4">
                        <h3 class="block font-serif uppercase text-center text-sm overflow-x-auto -mb-1 text-gray-300">{{ card.name }}</h3>
                        <div class="font-serif uppercase text-gray-500 text-center">{{ card.printings[0].sku.number }}</div>
                    </header>
                    <footer class="flex items-center">
                        <div title="Printings available" class="flex pl-4 mr-auto">
                            <icon :size="5" class="mr-2"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></icon>
                            {{ card.printings.length }}
                        </div>
                        <rarity-text :rarity="card.rarity" class="block mx-auto"></rarity-text>
                        <div title="Cards in collection" class="flex pr-4 ml-auto">
                            {{ totalOwned(card.printings)}}
                            <icon :size="5" class="inline-block ml-2"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/></icon>
                        </div>
                    </footer>
                </div>
            </transition>
        </div>
    </li>
</template>

<script>
    import CardImage from './CardImage.vue';
    import Icon from "../Components/Icon";
    import RarityText from "./RarityText";

    export default {
        components: {CardImage, Icon, RarityText},

        props: {
            card: Object,
            path: String
        },

        data() {
            return {
                viewDetails: false
            }
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
