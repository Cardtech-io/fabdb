<template>
    <h1 class="text-8xl text-center font-bold leading-none my-4 md:-mt-4">{{ winRate }}%</h1>
</template>

<script>
import Stats from "./Stats";

export default {
    props: {
        slug: {
            required: true,
            type: String
        }
    },

    mixins: [Stats],

    data: () => ({
        winRate: 0
    }),

    methods: {
        endpoint() {
            return '/games/win-rate';
        },

        update(response) {
            if (response.total) {
                this.winRate = ((response.won / response.total) * 100).toFixed(1);
            }
            else {
                this.winRate = response.total;
            }
        }
    }
}
</script>

<style scoped>

</style>
