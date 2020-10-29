<template>
    <div v-if="card" class="inline-block bg-black rounded-card overflow-hidden m-2" style="width: 300px">
        <card-image :card="card" :width="300"></card-image>
        <div class="text-white pb-2" :class="{ '-mt-2': wantsBorders }" v-if="card.ad">
            <a :href="'https://'+card.ad.domain+card.ad.path" class="link text-sm" target="_blank">Buy from <price :amount="card.ad.price" :currency="card.ad.currency" class="inline"/> at {{ card.ad.name }}</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapGetters} from 'vuex';
    import Price from "../Components/Price";

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

        created() {
            axios.get('/cards/ads/'+this.identifier).then(response => {
                this.card = response.data;
            });
        }
    };
</script>
