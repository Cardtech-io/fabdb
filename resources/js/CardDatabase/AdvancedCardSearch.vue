<template>
    <div>
        <header-title title="Advanced search"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-white pt-4 border-b-4 border-gray-300">
            <div class="container mx-auto px-4">
                <form @submit.prevent="newSearch" class="block">
                    <div class="md:flex mb-4">
                        <div class="md:w-1/5 py-2">Keyword search</div>
                        <div class="md:w-4/5">
                            <div class="flex bg-gray-200 focus:bg-white focus:border-gray-500 rounded-lg">
                                <input type="text" v-model="params.keywords" class="flex-1 bg-transparent outline-none py-2 px-2 sm:px-4" :class="active('keywords')">
                                <button type="button" class="flex-initial mr-2 link-alternate" @click.prevent="$modal.show('search-help')">
                                    <icon :size="6">
                                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                    </icon>
                                </button>
                            </div>
                            <div class="mt-2 text-gray-500 font-italic text-base">Click the icon on the right for search syntax.</div>
                        </div>
                    </div>

                    <div class="md:flex mb-4">
                        <div class="md:w-1/5 py-2">Class</div>
                        <div class="md:w-4/5">
                            <select v-model="params.class" size="6" multiple="multiple" class="input focus:bg-white focus:border-gray-500 py-3 px-2 sm:px-4 rounded-lg" :class="active('class')">
                                <option value="none">None</option>
                                <option :value="klass" v-for="(name, klass) in $settings.game.classes">{{ name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="md:flex mb-4">
                        <div class="md:w-1/5 py-2">Talent</div>
                        <div class="md:w-4/5">
                            <select v-model="params.talent" class="input focus:bg-white focus:border-gray-500 py-3 px-2 sm:px-4 rounded-lg" :class="active('talent')">
                                <option value=""></option>
                                <option value="none">None</option>
                                <option :value="talent" v-for="(name, talent) in $settings.game.talents">{{ name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="md:flex mb-4">
                        <div class="md:w-1/5 py-2">Set</div>
                        <div class="md:w-4/5">
                            <select v-model="params.set" class="input focus:bg-white focus:border-gray-500 py-3 px-2 md:px-4 rounded-lg" :class="active('set')">
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

                    <div class="mb-8 text-center flex md:block">
                        <input type="submit" value="Search" class="w-1/2 md:w-auto button-primary py-2 px-4 rounded-l-lg md:rounded-r-lg mx-auto">
                        <input type="button" value="Reset" class="w-1/2 md:w-auto button-secondary py-2 px-4 rounded-r-lg md:rounded-l-lg mx-auto" @click="reset()">
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
        let base = {
            cost: '',
            cardType: [],
            keywords: '',
            pitch: '',
            set: 'all',
            class: [],
            rarity: []
        };

        let params = {...base, ...this.fromQuery(this.onlyParams('keywords', 'cost', 'cardType', 'set', 'pitch', 'class', 'rarity'))};

        let previous = this.$route.path.indexOf('collection') !== -1 ? ['My collection', 'collection'] : ['Browse cards', 'cards/browse'];

        return {
            crumbs: [
                { text: previous[0], link: '/'+previous[1] },
                { text: 'Advanced search' }
            ],
            openTray: false,
            params: params,
            base: base,
            sets: this.filterSets()
        };
    },

    methods: {
        active(field) {
            if (this.query(field)) {
                return 'shadow-active'
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

        reset() {
            this.params = this.base;
        },

        newSearch() {
            let params = new URLSearchParams(this.buildQuery(this.params));
            let path = this.$route.path.replace('/advanced', '');

            this.$router.push(path+'?'+params.toString());
        }
    }
};
</script>
