<template>
    <div>
        <card-price-chart :card="card" style="height: 200px"></card-price-chart>
    </div>
</template>

<script>
    import CardPriceChart from "./CardPriceChart";

    export default {
        props: ['card'],
        components: { CardPriceChart },
    }
</script>
