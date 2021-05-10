<template>
    <div>
        <header-title title="Limited practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-gray-200">
                <div>
                    <div class="w-auto flex justify-center items-start py-8" v-if="!set" :class="containers">
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
                        <div class="flex flex-wrap my-8 justify-center" :class="containers">
                            <div v-for="pack in packs">
                                <div class="inline-block booster hover:bg-white p-4 rounded-lg">
                                    <button class="block link-alternate" @click="openPack({set: set.id})">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-front">
                                                    <img :src="imageUrl('/boosters/'+kebabCase(selectedSet.name)+'.png', 180)" alt="Open pack" title="Open pack">
                                                </div>
                                                <div class="flip-back">

                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
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
    import Strings from "../Utilities/Strings";

    export default {
        mixins: [Imagery, Strings],

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Limited practise', link: '/practise' },
                    { text: this.$route.query.format === 'sealed' ? 'Sealed deck run' : 'Team sealed run' }
                ],

                practise: {}
            }
        },

        computed: {
            ...mapState('draft', ['fullScreen', 'packs', 'set']),

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
            ...mapActions('draft', ['selectSet', 'reset']),

            openPack() {
                axios.post('practise/open-pack', {practise: this.practise.slug, format: this.format, set: this.set})
            },

            setup(set) {
                axios.post('practise', {format: this.$route.query.format, set}).then(response => {
                    this.setPractise(response.data.data);
                });
            }
        },

        mounted() {
            this.reset({format: this.$route.query.format});
        }
    };
</script>

<style scoped>
    .booster {
        transition: background-color 0.2s, transform 0.2s;
        transform: scale(1);
    }
    .booster:hover {
        transition: background-color 0.2s, transform 0.2s;
        transform: scale(1.05);
    }

    /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 200px;
        border: 1px solid #f1f1f1;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        background-color: #bbb;
        color: black;
    }

    /* Style the back side */
    .flip-card-back {
        background-color: dodgerblue;
        color: white;
        transform: rotateY(180deg);
    }
</style>
