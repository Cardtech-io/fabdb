<template>
    <div>
        <header-title title="My Collection"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container mx-auto">

                <form @submit.prevent="newSearch" class="block">
                    <div class="flex w-full px-4 md:px-0">
                        <div class="w-2/4 pr-1 flex bg-gray-200 focus:bg-white focus:border-gray-500 rounded-lg">
                            <input type="text" v-model="params.keywords" class="flex-1 bg-transparent outline-none py-2 px-2 sm:px-4" placeholder="Keywords..." :class="active('keywords')">
                            <button type="button" class="flex-initial mr-2 link-alternate" @click.prevent="$modal.show('search-help')">
                                <icon :size="6">
                                    <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                </icon>
                            </button>
                        </div>

                        <div class="w-1/4 px-1">
                            <select v-model="params.class" multiple="multiple" class="input focus:bg-white focus:border-gray-500 py-3 px-2 sm:px-4 rounded-lg" :class="active('class')">
                                <option value="">Class</option>
                                <option :value="v" v-for="(k, v) in this.$settings.game.classes">{{k}}</option>
                            </select>
                        </div>

                        <div class="w-1/4">
                            <input type="submit" value="Search" class="appearance-none block w-full button-primary rounded-lg py-3 px-2 sm:px-4 leading-tight focus:outline-none">
                        </div>
                    </div>

                    <div class="w-full flex flex-wrap pt-1 px-4 md:px-0">
                        <div class="w-3/5 md:w-1/5 pr-1">
                            <select v-model="params.set" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('set')">
                                <option :value="set.id" v-for="set in sets">{{ set.name }}</option>
                            </select>
                        </div>

                        <div class="w-2/5 md:w-1/5 md:pr-1">
                            <select v-model="params.pitch" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('pitch')">
                                <option value="">Pitch</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        <div class="w-1/3 md:w-1/5 mt-1 md:mt-0 md:pl-1">
                            <select v-model="params.cost" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('cost')">
                                <option value="">Cost</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                        </div>

                        <div class="w-1/3 md:w-1/5 mt-1 md:mt-0 px-1">
                            <select v-model="params.cardType" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('cardType')">
                                <option value="">Card type</option>
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

                        <div class="w-1/3 md:w-1/5 mt-1 md:mt-0">
                            <select v-model="params.rarity" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('rarity')">
                                <option value="">Rarity</option>
                                <option :value="key" v-for="(rarity, key) in $settings.game.rarities">{{ rarity }}</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import Icon from '../Components/Icon';
import Query from "../Utilities/Query";

export default {
    components: {Icon},
    mixins: [Query],

    data() {
        let params = {
            cost: '',
            cardType: '',
            keywords: '',
            pitch: '',
            set: 'all',
            class: '',
            rarity: '',
            ...this.onlyParams('keywords', 'cost', 'cardType', 'set', 'pitch', 'class', 'rarity')
        };

        return {
            crumbs: [
                { text: 'Collection', link: '/collection' },
                { text: 'Advanced search' }
            ],
            openTray: false,
            params: params,
            sets: this.filterSets()
        };
    },

    methods: {
        active(field) {
            if (this.query(field)) {
                return 'shadow-activeNumber'
            }
        },

        filterSets() {
            let sets = _.sortBy(this.$settings.game.sets, 'name');

            sets.unshift({ id: 'all', name: 'All sets'});

            return sets;
        },

        query(field) {
            if (field) {
                return this.$route.query[field];
            }

            return this.$route.query;
        },

        search() {
            let params = this.combineParams({ 'use-case': this.useCase, ...this.$route.query });

            axios.get('/cards/', { params }).then(response => {
                this.$emit('search-completed', response.data);
            }).catch(error => {});
        },
    }
};
</script>

<style>
    select > option:first-child {
        @apply text-gray-400;
    }
</style>
