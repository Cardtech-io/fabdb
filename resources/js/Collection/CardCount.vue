<template>
    <div class="flex items-center text-lg">
        <remove :identifier="card.identifier" :type="type" :count="total" @card-removed="decrement"></remove>
        <div class="w-1/3">
            <input type="text" v-model="total" class="w-full bg-transparent text-center outline-none focus:bg-white" :tabindex="index">
        </div>
        <add :identifier="card.identifier" :type="type" :count="total" @card-added="increment"></add>
    </div>
</template>

<script>
    import Add from './AddToCollection.vue';
    import Remove from './RemoveFromCollection.vue';
    import axios from "axios";

    export default {
        props: ['card', 'type'],
        components: {Add, Remove},

        data() {
            return {
                index: this.$root.collectionTabIndex
            };
        },

        computed: {
            total: {
                get() {
                    return this.card[this.type] || 0;
                },

                set(newValue) {
                    this.card[this.type] = newValue;
                    setTimeout(this.save, 2000);
                }
            }
        },

        methods: {
            decrement: function(type) {
                if (this.card[type] - 1 < 0) return;

                this.card[type] -= 1;
            },

            increment: function(type) {
                this.card[type] += 1;
            },

            save() {
                let payload = {
                    identifier: this.card.identifier,
                    type: this.type,
                    total: this.total
                };

                axios.put('/collection/', payload);
            }
        },

        beforeCreate() {
            this.$root.collectionTabIndex += 1;
        }
    };
</script>
