<template>
    <h1 class="text-12xl text-center font-bold leading-none my-4 md:-mt-4">{{ winRate }}%</h1>
</template>

<script>
export default {
    props: {
        slug: {
            required: true,
            type: String
        }
    },

    data: () => ({
        winRate: 0
    }),

    methods: {
        getData(deck) {
            axios
                .get("/games/win-rate?deck=" + deck)
                .then((response) => {
                    this.update(response.data);
                });
        },

        update(response) {
            this.winRate = (response.won / response.total) * 100;
        }
    },

    mounted() {
        this.getData(this.slug);
    }
}
</script>

<style scoped>

</style>
