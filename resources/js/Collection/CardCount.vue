<template>
    <div class="flex items-center mx-auto">
        <remove :sku="printing.sku.sku" :count="total" @card-removed="decrement"></remove>
        <div class="w-1/3">
            <input type="text" v-model="total" class="w-full bg-white dark:bg-gray-900 text-center outline-none focus:bg-white p-2" :tabindex="index">
        </div>
        <add :sku="printing.sku.sku" :count="total" @card-added="increment"></add>
    </div>
</template>

<script>
    import Add from './AddToCollection.vue';
    import Remove from './RemoveFromCollection.vue';
    import axios from "axios";

    export default {
        props: ['printing'],
        components: {Add, Remove},

        data() {
            return {
                index: this.$root.collectionTabIndex
            };
        },

        computed: {
            total: {
                get() {
                    return this.printing.total;
                },

                set(newValue) {
                    this.printing.total = newValue;
                    setTimeout(this.save, 2000);
                }
            },
        },

        methods: {
            decrement: function(type) {
                if (this.printing.total - 1 < 0) return;

                this.printing.total -= 1;
            },

            increment: function(type) {
                this.printing.total += 1;
            },

            save() {
                let payload = {
                    sku: this.printing.sku.sku,
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
