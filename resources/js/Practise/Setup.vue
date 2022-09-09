<template>
    <div>
        <header-title title="Limited practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="main-body">
            <div class="w-auto flex justify-center items-start py-8">
                <div v-for="set in sets()" class="booster mx-4 hover:bg-white dark:hover:bg-gray-700 p-4 rounded-lg">
                    <button class="block link-alternate" @click="setup(set.id)">
                        <img :src="imageUrl('/boosters/'+kebabCase(set.name)+'.png', 180)" :alt="set.name" :title="set.name">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Imagery from "../Utilities/Imagery";
    import Strings from "../Utilities/Strings";
    import axios from "axios";

    export default {
        mixins: [Imagery, Strings],

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Limited practise', link: '/practise' },
                    { text: this.$route.query.format === 'sealed' ? 'Sealed deck run' : 'Team sealed run' }
                ]
            };
        },

        methods: {
            sets() {
                return _.sortBy(_.filter(this.$settings.game.sets,set => {
                    return set.draftable;
                }), set => {
                    return set.released;
                }).reverse();
            },

            setup(set) {
                axios.post('practise', {format: this.$route.query.format, set}).then(response => {
                    this.$router.push({name: 'practise.view', params: {practise: response.data.slug}});
                });
            }
        }
    }
</script>
