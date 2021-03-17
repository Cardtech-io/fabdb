<template>
    <div>
        <div class="mb-8" v-if="cards && cards.total()">
            <h3 class="pb-2 font-serif uppercase text-xl">{{ title }} ({{ cards.total() }})</h3>
            <card-item v-for="card in cards" :key="card.identifier" :card="card"></card-item>
        </div>
        <div class="mb-8" v-if="card">
            <h3 class="pb-2 font-serif uppercase text-xl">{{ title }}</h3>
            <card-item :card="card"></card-item>
        </div>
    </div>
</template>

<script>
    import CardItem from "./CardItem";

    export default {
        props: ['cards', 'card', 'title'],
        components: {CardItem},
    };
</script>
