<template>
    <div class="mt-1">
<!--        <span class="text-lg text-xxs px-2 bg-white rounded" :class="{'text-red-500': total < lastTotal, 'text-green-500': total > lastTotal}">-->
<!--            {{totalValue}}-->
<!--        </span>-->
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        lastTotal: 0,
        total: 0
    }),

    computed: {
        totalValue() {
            const format = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            return format.format(this.total / 100);
        }
    },

    mounted() {
        // axios.get('/collection/total').then(response => {
        //     this.total = response.data.total;
        //     this.lastTotal = response.data.lastTotal;
        // });
    }
}
</script>

<style scoped>

</style>
