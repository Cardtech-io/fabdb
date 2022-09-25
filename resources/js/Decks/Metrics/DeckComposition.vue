<template>
    <div>
        <Doughnut/>
    </div>
</template>

<script>
    import { Doughnut } from 'vue-chartjs/legacy';

    export default {
        props: {
            cards: {
                required: true
            }
        },

        components: {Doughnut},
    }
</script>
