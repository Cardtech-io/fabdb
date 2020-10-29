<template>
    <div v-if="card" class="inline-block bg-black rounded-card overflow-hidden m-2" style="width: 300px">
        <card-image :card="card" :width="300"></card-image>
        <div class="text-white pb-2" :class="{ '-mt-2': wantsBorders }" v-if="card.ad">
            <a :href="listingUrl(card.ad.domain, card.ad.path, card.ad.id)" class="link text-sm" target="_blank">Buy from <price :amount="card.ad.price" :currency="card.ad.currency" class="inline"/> at {{ card.ad.name }}</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapGetters} from 'vuex';
    import Price from "../Components/Price";
    import Carding from "../Utilities/Carding";

    export default {
        props: {
            identifier: {
                type: String,
                required: true
            }
        },

        components: {Price},

        data() {
            return {
                card: null
            }
        },

        computed: {
            ...mapGetters('session', ['wantsBorders'])
        },

        methods: {
            listingUrl(domain, path, id) {
                return Carding.listingUrl(domain, path, id, 'article');
            }
        },

        created() {
            axios.get('/cards/ads/'+this.identifier).then(response => {
                this.card = response.data;
            });
        }
    };
</script>
