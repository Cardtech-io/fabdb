<template>
    <div>
        <header-title title="Sealed practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-gray-200">
                <div :class="containers">
                    <div class="w-auto flex justify-center items-start py-8">
                        <div v-for="set in sets" class="booster mx-4 hover:bg-white p-4 rounded-lg">
                            <button class="block link-alternate">
                                <img :src="imageUrl('/boosters/'+kebabCase(set.name)+'.png', 180)" :alt="set.name" :title="set.name">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Imagery from "../Utilities/Imagery";
    import Strings from "../Utilities/Strings";

    export default {
        mixins: [Imagery, Strings],

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Practise mode', link: '/practise' },
                    { text: 'Select set' }
                ],
                fullScreen: false
            }
        },

        computed: {
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

            sets() {
                return _.sortBy(_.filter(this.$settings.game.sets,set => {
                    return set.draftable;
                }), set => {
                    return set.released;
                }).reverse();
            }
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
</style>
