<template>
    <div class="flex justify-center">
        <add :identifier="card.identifier" :type="type" @card-added="increment"></add>
        <div class="self-center">{{ total }}</div>
        <remove :identifier="card.identifier" :type="type" @card-removed="decrement"></remove>
    </div>
</template>

<script>
    import Add from './AddToCollection.vue';
    import Remove from './RemoveFromCollection.vue';

    export default {
        props: ['card', 'type'],

        components: { Add, Remove },

        computed: {
            total: function() {
                return this.card[this.type];
            }
        },

        methods: {
            decrement: function(type) {
                if (this.card[type] - 1 < 0) return;

                this.card[type] -= 1;
            },

            increment: function(type) {
                this.card[type] += 1;
            }
        }
    };
</script>