<template>
    <div>
        <header-title title="Booster pack generator"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4 py-8 sm:flow-root">
                <div class="sm:w-1/2 sm:pl-8 sm:float-right">
                    <p>This tool is just for a little bit of fun. Generate a pack, check your cards, see if you can find
                    a Heart of Fyendal! I've tried to make this as close and accurate as possible to a real booster pack
                    in terms of rarities and chances. Let me know if you think something is off.</p>

                    <form @submit.prevent="generatePack" class="block mt-4">
                        <label class="block font-serif uppercase tracking-wide mb-1">Set</label>
                        <select v-model="set" class="input-white focus:border-gray-500 py-3 px-4 rounded-lg">
                            <option value="arc">Arcane Rising</option>
                            <option value="wtr">Welcome to Rathe</option>
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
    import Cardable from './Cardable';
    import CardImage from "./CardImage";
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
            generatePack: function() {
                this.disabled = true;

                axios.get('/packs/generate', { params: { set: this.set } }).then(response => {
                    this.cards = response.data
                });

                setTimeout(() => {
                    this.disabled = false;
                }, 1000);
            },

            height: function(card) {
                return {
                    'h-12': this.viewing != card,
                    'h-50': this.viewing == card
                }
            },

            toggle: function(card) {
                if (this.viewing != card) {
                    this.viewing = card;
                } else {
                    this.viewing = null;
                }
            }
        }
    };
</script>
