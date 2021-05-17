<template>
    <div>
        <div v-if="cards.length" class="relative p-4" :style="{'height': cards.length * 36 + 300 + 'px'}">
            <div v-for="(card, i) in cards" class="absolute overflow-hidden cursor-pointer mx-auto sm:mx-0" @click="toggle(card)" :style="styles(i)">
                <card-image :card="card" :width="350" style="max-width: 350px"></card-image>
            </div>
        </div>
        <div class="inline-block booster hover:bg-white p-4 rounded-lg" v-else>
            <button class="block link-alternate" @click="openPack(practise.id)">
                <img :src="imageUrl('/boosters/'+kebabCase(practise.set.name)+'.png', 180)" alt="Open pack" title="Open pack">
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import axios from "axios";
    import CardImage from "../CardDatabase/CardImage";
    import Imagery from "../Utilities/Imagery";
    import Strings from "../Utilities/Strings";

    export default {
        components: {CardImage},
        mixins: [Imagery, Strings],

        props: {
            pack: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                cards: this.pack
            };
        },

        computed: {
            ...mapState('draft', ['practise'])
        },

        methods: {
            openPack() {
                axios.post('practise/open-pack', {practise: this.practise.slug}).then(response => {
                    this.cards = response.data;
                });
            },

            styles(i) {
                let styles = {};

                if (i > 0) {
                    styles.marginTop = i * 36 + 'px';
                }

                return styles;
            },

            toggle(card) {
                if (this.viewing !== card) {
                    this.viewing = card;
                } else {
                    this.viewing = null;
                }
            }
        }
    }
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
