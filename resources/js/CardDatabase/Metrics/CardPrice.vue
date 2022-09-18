<template>
    <div>
        <card-price-chart :card="card" style="height: 200px"/>
    </div>
</template>

<script>
    import CardPriceChart from "./CardPriceChart.js";

    export default {
        props: ['card'],
        components: { CardPriceChart },
    }
</script>
