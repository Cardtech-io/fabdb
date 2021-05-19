<template>
    <div>
        <header-title title="Limited practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white">
                <div class="flex p-4 w-full" :class="containers">
                    <div class="flex rounded-lg overflow-hidden text-sm xl:text-base mr-2">
                        <button type="button" class="flex-grow block px-4 py-3"  @click="setMode('packs')" :class="classes('packs')">Packs</button>
                        <button type="button" class="flex-grow block px-4 py-3"  @click="setMode('cards')" :class="classes('cards')" :disabled="!opened">Cards</button>
                    </div>

                    <add-deck label="Craft deck" :name="'Sealed practise'" :params="{practise: practise.slug}"></add-deck>
                    <filter-selector class="mx-2" v-if="mode === 'cards'"></filter-selector>
                    <grouping-selector v-if="mode === 'cards'" class="hidden xl:block" :grouping="grouping" @selected="updateGrouping" :options="{'none': 'None', 'class': 'Class', talent: 'Talent'}"></grouping-selector>
                    <fullscreen :full-screen="fullScreen" :toggle="toggleFullScreen" class="ml-auto"></fullscreen>
                </div>
            </div>
            <div class="bg-gray-200 h-full pt-4 pb-16 px-4">
                <div class="flex flex-wrap justify-center h-full overflow-y-auto" :class="containers">
                    <div v-for="(pack, i) in practise.packs" class="w-1/6" v-if="mode === 'packs'">
                        <pack :pack="pack" :index="i" @pack-opened="increment"></pack>
                    </div>
                    <div v-if="mode === 'cards'" class="h-full w-full">
                        <cards :packs="practise.packs"></cards>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex';
    import axios from 'axios';
    import AddDeck from "../Decks/AddDeck";
    import Cards from "./Cards";
    import FilterSelector from "../Components/FilterSelector";
    import Fullscreen from "../Components/Fullscreen";
    import GroupingSelector from "../DeckBuilder/GroupingSelector";
    import Imagery from "../Utilities/Imagery";
    import Pack from "./Pack";
    import Strings from "../Utilities/Strings";
    import LazyLoader from "../Components/LazyLoader";

    export default {
        components: {AddDeck, Cards, FilterSelector, Fullscreen, GroupingSelector, Pack},
        mixins: [Imagery, Strings],

        data() {
            return {
                mode: 'packs',
                modes: {
                    packs: 'Packs',
                    cards: 'Cards'
                },
                opened: 0
            }
        },

        computed: {
            ...mapState('draft', ['fullScreen', 'grouping', 'practise']),

            crumbs() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Limited practise', link: '/practise' },
                    { text: this.practise.format === 'sealed' ? 'Sealed deck run' : 'Team sealed run' }
                ];
            },

            containers() {
                if (!this.fullScreen) {
                    return 'container lg:mx-auto';
                }
            },

            fullScreenClasses() {
                if (this.fullScreen) {
                    return 'fixed top-0 bottom-0 left-0 right-0 z-75';
                }
            }
        },

        methods: {
            ...mapActions('draft', ['selectSet', 'reset', 'setPractise']),
            ...mapMutations('draft', ['setGrouping', 'toggleFullScreen']),

            classes(view) {
                return {
                    'button-disabled': this.mode === view,
                    'button-secondary': this.mode !== view
                };
            },

            craftDeck() {

            },

            setMode(mode) {
                this.mode = mode;
            },

            increment() {
                this.opened++;
            },

            updateGrouping(grouping) {
                this.setGrouping({grouping});
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/practise/' + to.params.practise).then(response => {
                callback(function() {
                    this.setPractise({practise: response.data });
                    this.opened = this.practise.packs.filter(pack => {
                        return pack.length;
                    }).length;
                });
            });
        })
    };
</script>

