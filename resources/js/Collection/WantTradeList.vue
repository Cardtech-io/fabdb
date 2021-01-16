<template>
    <div v-if="cards.meta && cards.meta.total">
        <div class="-mx-2 md:-mx-4 flex flex-wrap">
            <div v-for="card in cards.data" class="w-1/3 sm:w-1/4 md:w-1/6 px-2 md:px-4 text-center pb-4">
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
    import CardImage from "../CardDatabase/CardImage";
    import Paginator from "../Components/Paginator";
    import SkuFinish from "../CardDatabase/SkuFinish";
    import LazyLoader from "../Components/LazyLoader";

    export default {
        props: ['user'],
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
                axios.get('/collection/lists?user='+this.$route.params.user+'&view='+this.$route.meta.view+'&page='+this.page).then(response => {
                    this.cards = response.data;
                });
            },

            updatePage(page) {
                this.page = page;
                this.search();
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/collection/lists?user=' + to.params.user + '&view='+to.meta.view).then(response => {
                callback(function () {
                    this.cards = response.data;
                });
            })
        })
    };
</script>
