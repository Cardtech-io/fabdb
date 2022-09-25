<template>
    <div>
        <header-title title="Booster pack generator"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="main-body">
            <div class="container sm:mx-auto px-4 py-8 sm:flow-root">
                <div class="sm:w-1/2 sm:pl-8 sm:float-right">
                    <p>This tool is just for a little bit of fun. Generate a pack, check your cards, see if you can find
                    a Heart of Fyendal! I've tried to make this as close and accurate as possible to a real booster pack
                    in terms of rarities and chances. Let me know if you think something is off.</p>

                    <form @submit.prevent="generatePack" class="block mt-4">
                        <label class="block font-serif uppercase tracking-wide mb-1">Set</label>
                        <select v-model="set" class="input py-3 px-4 rounded-lg">
                            <option :value="set.id" v-for="set in sets()">{{set.name}}</option>
                        </select>

                        <div class="mb-4">
                            <label class="block font-serif uppercase tracking-wide mb-1 text-sm">&nbsp;</label>
                            <input type="submit" value="Generate pack" class="appearance-none block w-full button-primary rounded-lg py-3 px-4 disabled:opacity-50" :disabled="disabled">
                        </div>
                    </form>
                </div>

                <div class="sm:w-1/2 sm:float-left">
                    <div v-for="card in cards" class="overflow-hidden rounded-xl cursor-pointer mb-1 mx-auto sm:mx-0" @click="toggle(card)" :class="height(card)" style="max-width: 350px">
                        <card-image :card="card" :width="350" style="max-width: 350px"></card-image>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from './Cardable.js';
    import CardImage from "./CardImage.vue";
    import HeaderTitle from '../Components/HeaderTitle.vue';

    export default {
        components: {Breadcrumbs, CardImage, HeaderTitle},
        mixins: [Cardable],

        data() {
            return {
                cards: null,
                disabled: false,
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Booster pack generator' }
                ],
                set: 'arc',
                viewing: null
            }
        },

        methods: {
            generatePack() {
                this.disabled = true;

                axios.get('/packs/generate', { params: { set: this.set } }).then(response => {
                    this.cards = response.data
                });

                setTimeout(() => {
                    this.disabled = false;
                }, 1000);
            },

            height(card) {
                return {
                    'h-12': this.viewing != card,
                    'h-50': this.viewing == card
                }
            },

            sets() {
                return Object.values(this.$settings.game.sets).filter(set => set.draftable === true);
            },

            toggle(card) {
                if (this.viewing != card) {
                    this.viewing = card;
                } else {
                    this.viewing = null;
                }
            }
        }
    };
</script>
