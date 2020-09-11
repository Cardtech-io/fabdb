<template>
    <div>
        <div class="mb-8" v-if="cards && cards.length">
            <h3 class="pb-2 font-serif uppercase text-xl">{{ title }} ({{ total }})</h3>
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

        computed: {
            total() {
                return this.cards.reduce((carry, card) => {
                    return carry + card.total;
                }, 0);
            }
        }
    };
</script>
