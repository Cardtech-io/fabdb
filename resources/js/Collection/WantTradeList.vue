<template>
    <div v-if="cards.meta && cards.meta.total">
        <div class="-mx-2 md:-mx-4 flex flex-wrap">
            <div v-for="card in cards.data" class="w-1/3 sm:w-1/4 lg:w-1/6 px-2 md:px-4 text-center pb-4">
                <card-image :card="card"></card-image>
                <sku-finish :sku="card.sku"></sku-finish>
            </div>
        </div>

        <paginator :results="cards" @page-selected="updatePage"></paginator>
    </div>
    <div v-else class="bg-semi-black rounded-xl p-4">
        {{ user.name }} has not listed any cards they {{ phrase() }}.
    </div>
</template>

<script>
    import axios from "axios";
    import CardImage from "../CardDatabase/CardImage.vue";
    import Paginator from "../Components/Paginator.vue";
    import SkuFinish from "../CardDatabase/SkuFinish.vue";
    import LazyLoader from "../Components/LazyLoader.js";
    import Imagery from "../Utilities/Imagery.js";

    export default {
        props: ['user'],
        mixins: [Imagery],
        components: {CardImage, Paginator, SkuFinish},

        data() {
            return {
                cards: {},
                page: 1
            }
        },

        methods: {
            phrase() {
                return this.$route.meta.view === 'want' ? 'want' : 'would like to trade';
            },

            search() {
                axios.get('/collection/lists?user='+this.user.slug+'&view='+this.$route.meta.view+'&page='+this.page).then(response => {
                    this.cards = response.data;
                });
            },

            updatePage(page) {
                this.page = page;
                this.search();
            }
        },

        mounted() {
            this.search();
        },

        metaInfo() {
            let title = this.user.name + '\'s ' + this.$route.meta.view + ' list for Flesh & Blood TCG';

            return {
                title: title,
                meta: [
                    { vmid: 'description', name: 'description', content: title },
                    { vmid: 'og:type', property: 'og:type', content: 'article' },
                    { vmid: 'og:title', property: 'og:title', content: title },
                    { vmid: 'og:description', property: 'og:description', content: title }
                ]
            };
        }
    };
</script>
