<template>
    <div class="border-b-4 border-gray-300 mb-24">
        <h2 class="relative font-serif uppercase bg-secondary text-white px-4 py-2">
            Advanced search
            <button class="absolute top-0 right-0 mr-2 mt-2" @click="$modal.hideAll()">
                <icon :size="6">
                    <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/>
                </icon>
            </button>
        </h2>
        <form @submit.prevent="newSearch" class="block p-4">
            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Keyword search</div>
                <div class="md:w-4/5">
                    <div class="flex bg-gray-200 focus:bg-white focus:border-gray-500 rounded-lg" :class="active('keywords')">
                        <button type="button" class="flex-initial ml-2 link-alternate" @click.prevent="$modal.show('search-help')">
                            <icon :size="6">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </icon>
                        </button>
                        <input type="text" v-model="params.keywords" class="flex-1 bg-transparent border-none ring-none outline-none py-2 px-2 sm:px-4">
                    </div>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Class</div>
                <div class="md:w-4/5">
                    <label class="block">
                        <input type="checkbox" v-model="params.class" value="none"> Not classed
                    </label>
                    <label class="block" v-for="(name, klass) in $settings.game.classes">
                        <input type="checkbox" v-model="params.class" :value="klass"> {{name}}
                    </label>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Talent</div>
                <div class="md:w-4/5">
                    <select v-model="params.talent" multiple="multiple" class="input focus:bg-white focus:border-gray-500 py-3 px-2 sm:px-4 rounded-lg" :class="active('talent')">
                        <option value="none">Not talented</option>
                        <option :value="talent" v-for="(name, talent) in $settings.game.talents">{{ name }}</option>
                    </select>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Set</div>
                <div class="md:w-4/5">
                    <select v-model="params.set" multiple="multiple" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('set')">
                        <option :value="set.id" v-for="set in sets">{{ set.name }}</option>
                    </select>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Pitch</div>
                <div class="md:w-4/5">
                    <select v-model="params.pitch" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('pitch')">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Card cost</div>
                <div class="md:w-4/5">
                    <select v-model="params.cost" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('cost')">
                        <option value=""></option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Card type(s)</div>
                <div class="md:w-4/5">
                    <select v-model="params.cardType" multiple="multiple" size="6" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('cardType')">
                        <option value="non-attack action">'Non-attack' action</option>
                        <option value="attack action">Attack action</option>
                        <option value="attack reaction">Attack reaction</option>
                        <option value="defense reaction">Defense reaction</option>
                        <option value="equipment">Equipment</option>
                        <option value="hero">Hero</option>
                        <option value="instant">Instant</option>
                        <option value="item">Item</option>
                        <option value="weapon">Weapon</option>
                    </select>
                </div>
            </div>

            <div class="md:flex mb-4">
                <div class="md:w-1/5 py-2">Rarity</div>
                <div class="md:w-4/5">
                    <select v-model="params.rarity" multiple="multiple" size="6" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('rarity')">
                        <option :value="key" v-for="(rarity, key) in $settings.game.rarities">{{ rarity }}</option>
                    </select>
                </div>
            </div>

            <div class="text-center flex md:block">
                <input type="submit" value="Search" class="w-1/2 md:w-auto button-primary py-2 px-4 rounded-l-lg md:rounded-r-lg mx-auto">
                <input type="button" value="Reset" class="w-1/2 md:w-auto button-secondary py-2 px-4 rounded-r-lg md:rounded-l-lg mx-auto" @click="reset()">
            </div>
        </form>
    </div>
</template>

<script>
import _ from 'lodash';
import Icon from '../Components/Icon';
import Query from "../Utilities/Query";

export default {
    components: {Icon},
    mixins: [Query],

    props: {
        query: {
            required: true
        }
    },

    data() {
        let base = {
            cost: '',
            cardType: [],
            keywords: '',
            pitch: '',
            set: [],
            class: [],
            rarity: [],
            talent: [],
        };

        return {
            base: base,
            params: {...base, ...this.query},
            sets: this.filterSets()
        };
    },

    methods: {
        active(field) {
            if (this.params[field] && this.params[field].length > 0) {
                return 'shadow-active'
            }
        },

        filterSets() {
            return _.sortBy(this.$settings.game.sets, 'name');
        },

        reset() {
            for (let i in this.base) {
                this.params[i] = this.base[i];
            }
        },

        newSearch() {
            this.$eventHub.$emit('advanced-search', this.params);
            this.$modal.hideAll();
        }
    }
};
</script>
