<template>
    <div>
        <table class="text-sm">
            <thead class="bg-gray-100 dark:bg-gray-600">
                <tr>
                    <th class="text-left p-1">Name</th>
                    <th class="text-right p-1">Seen</th>
                    <th class="text-right p-1">Blocked</th>
                    <th class="text-right p-1">Pitched</th>
                    <th class="text-right p-1">Played</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="card in stats" class="even:bg-gray-100 dark:even:bg-gray-800">
                    <td class="p-1">{{card.name}}</td>
                    <td class="text-right p-1">{{card.seen}}</td>
                    <td class="text-right p-1">{{card.blocked}}</td>
                    <td class="text-right p-1">{{card.pitched}}</td>
                    <td class="text-right p-1">{{card.played}}</td>
                </tr>
            </tbody>
        </table>
    </div>
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
        stats: []
    }),

    methods: {
        getData(deck) {
            axios
                .get("/games/card-stats?deck=" + deck)
                .then((response) => {
                    this.stats = response.data;
                });
        }
    },

    mounted() {
        this.getData(this.slug);
    }
}
</script>
