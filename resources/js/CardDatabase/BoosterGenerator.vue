<template>
    <div>
        <header-title title="Booster pack generator"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4 py-8 sm:clearfix">
                <div class="sm:w-1/2 sm:pl-8 sm:float-right">
                    <p>This tool is just for a little bit of fun. Generate a pack, check your cards, see if you can find
                    a Heart of Fyendal! I've tried to make this as close and accurate as possible to a real booster pack
                    in terms of rarities and chances. Let me know if you think something is off.</p>

                    <div class="py-4">
                        <label class="block font-serif uppercase tracking-wide mb-1 text-sm">&nbsp;</label>
                        <input type="button" value="Generate pack" class="appearance-none block w-full bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50" @click="generatePack" :disabled="disabled">
                    </div>
                </div>

                <div class="sm:w-1/2 sm:float-left">
                    <div v-for="card in cards" class="overflow-hidden rounded-xl cursor-pointer mb-1 mx-auto sm:mx-0" @click="toggle(card)" :class="height(card)" style="max-width: 350px">
                        <img :src="cardUrl(card.identifier, 350)" :alt="card.name" :title="card.name" class="w-full rounded-xl" style="max-width: 350px">
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
    import HeaderTitle from '../Components/HeaderTitle.vue';

    export default {
        components: { Breadcrumbs, HeaderTitle },
        mixins: [ Cardable ],

        data() {
            return {
                cards: null,
                disabled: false,
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Booster pack generator' }
                ],
                viewing: null
            }
        },

        methods: {
            generatePack: function() {
                this.disabled = true;

                axios.get('/packs/generate').then(response => {
                    this.cards = response.data
                });

                setTimeout(() => {
                    this.disabled = false;
                }, 5000);
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