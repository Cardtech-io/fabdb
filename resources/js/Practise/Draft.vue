<template>
    <div>
        <header-title title="Limited practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white dark:bg-gray-800 border-b-4 border-gray-300 dark:border-gray-600">
                <div class="flex p-4 w-full items-center" :class="containers">
                    <div class="flex rounded-lg overflow-hidden text-sm xl:text-base mr-2">
                        <button type="button" class="flex-grow block px-4 py-2" @click="setMode('packs')" :class="classes('packs')">Packs</button>
                        <button type="button" class="flex-grow block px-4 py-2" @click="setMode('cards')" :class="classes('cards')" :disabled="!opened">Cards</button>
                    </div>

                    <add-deck :name="'Sealed practise'" :params="{practise: practise.slug}" :enabled="craftable">
                        Craft deck
                    </add-deck>

                    <filter-selector class="mx-2" v-if="mode === 'cards'"/>
                    <grouping-selector v-if="mode === 'cards'" class="hidden xl:block" :grouping="grouping" @selected="updateGrouping" :options="{'none': 'None', 'class': 'Class', talent: 'Talent'}"/>
                    <fullscreen :full-screen="fullScreen" :toggle="toggleFullScreen" class="ml-auto" v-if="mode === 'cards' || fullScreen"/>
                </div>
            </div>
            <div class="main-body h-full pt-4 pb-16 px-4">
                <div class="flex flex-wrap justify-center h-full" :class="containers">
                    <div v-for="(pack, i) in practise.packs" class="w-1/6" v-if="mode === 'packs'">
                        <pack :pack="pack" :index="i" @pack-opened="increment" class="w-full"></pack>
                    </div>
                    <div v-if="mode === 'cards'" class="h-full w-full overflow-y-auto">
                        <cards :packs="practise.packs"></cards>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
    import axios from 'axios';
    import AddDeck from "../Decks/AddDeck.vue";
    import Cards from "./Cards.vue";
    import FilterSelector from "../Components/FilterSelector.vue";
    import Fullscreen from "../Components/Fullscreen.vue";
    import GroupingSelector from "../DeckBuilder/GroupingSelector.vue";
    import Imagery from "../Utilities/Imagery.js";
    import Pack from "./Pack.vue";
    import Strings from "../Utilities/Strings.js";
    import LazyLoader from "../Components/LazyLoader.js";

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
            ...mapState('draft', ['fullScreen', 'format', 'grouping', 'practise']),
            ...mapGetters('session', ['majestic', 'user']),

            craftable(){
                return this.majestic && (this.format === 'team-sealed' || this.practise.userSlug === this.user.slug);
            },

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

