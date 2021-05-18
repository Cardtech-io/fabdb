<template>
    <div>
        <header-title title="Limited practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-gray-200">
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
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import axios from 'axios';
    import Imagery from "../Utilities/Imagery";
    import Pack from "./Pack";
    import Strings from "../Utilities/Strings";
    import LazyLoader from "../Components/LazyLoader";

    export default {
        components: {Pack},
        mixins: [Imagery, Strings],

        computed: {
            ...mapState('draft', ['fullScreen', 'packs', 'set', 'practise']),

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
            },

            packsRequired() {
                return this.practise.format === 'sealed' ? 6 : 9;
            },

            packs() {
                let total = this.packsRequired - this.practise.packs.length;

                return this.practise.packs.concat(Array.from({length: total}, i => []));
            }
        },

        methods: {
            ...mapActions('draft', ['selectSet', 'reset', 'setPractise'])
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/practise/' + to.params.practise).then(response => {
                callback(function() {
                    this.setPractise({practise: response.data });
                });
            });
        })
    };
</script>

