<template>
    <div class="py-8 my-8 w-auto mx-auto rounded-xl">
        <h1 class="font-serif uppercase text-4xl text-center mb-8 text-white mx-4">Select set</h1>
        <div class="w-auto flex justify-center items-start">
            <div v-for="set in sets" class="booster bg-semi-black mx-4 hover:bg-black p-4 rounded-lg">
                <router-link :to="{name: 'practise.draft-set', params: {set: set.id}}" class="block link">
                    <img :src="imageUrl('/boosters/'+kebabCase(set.name)+'.png', 200)" alt="Arcane Rising">
                    <h2 class="font-serif uppercase text-xl text-center mt-4">{{set.name}}</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Imagery from "../Utilities/Imagery";
    import Strings from "../Utilities/Strings";

    export default {
        mixins: [Imagery, Strings],

        computed: {
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
        transform: scale(1.1);
    }
</style>
