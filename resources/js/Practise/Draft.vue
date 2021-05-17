<template>
    <div>
        <header-title title="Limited practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-gray-200">
                <div>
                    <div class="w-auto flex justify-center items-start py-8" v-if="!practise" :class="containers">
                        <div v-for="set in sets" class="booster mx-4 hover:bg-white p-4 rounded-lg">
                            <button class="block link-alternate" @click="setup(set.id)">
                                <img :src="imageUrl('/boosters/'+kebabCase(set.name)+'.png', 180)" :alt="set.name" :title="set.name">
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="bg-white">
                            <div class="flex items-center p-4 w-full" :class="containers">
                                lakjsdf
                            </div>
                        </div>
                        <div class="flex flex-wrap py-8 justify-center" :class="containers">
                            <div v-for="pack in packs" class="w-1/6">
                                <pack :pack="pack"></pack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import axios from 'axios';
    import Imagery from "../Utilities/Imagery";
    import Pack from "./Pack";
    import Strings from "../Utilities/Strings";

    export default {
        components: {Pack},
        mixins: [Imagery, Strings],

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Limited practise', link: '/practise' },
                    { text: this.$route.query.format === 'sealed' ? 'Sealed deck run' : 'Team sealed run' }
                ],
            }
        },

        computed: {
            ...mapState('draft', ['fullScreen', 'packs', 'set', 'practise']),

            containers() {
                if (!this.fullScreen) {
                    return 'container lg:mx-auto';
                }
            },

            fullScreenClasses() {
                if (this.fullScreen) {
                    return 'fixed top-0 bottom-0 left-0 right-0 z-75';
                }
            },

            selectedSet() {
                if (!this.set) return;

                return this.sets.filter(set => {
                    return set.id === this.set;
                })[0];
            },

            sets() {
                return _.sortBy(_.filter(this.$settings.game.sets,set => {
                    return set.draftable;
                }), set => {
                    return set.released;
                }).reverse();
            }
        },

        methods: {
            ...mapActions('draft', ['selectSet', 'reset', 'setPractise']),

            setup(set) {
                axios.post('practise', {format: this.$route.query.format, set}).then(response => {
                    this.setPractise({practise: response.data});
                });
            }
        },

        mounted() {
            this.reset({format: this.$route.query.format});
        }
    };
</script>

