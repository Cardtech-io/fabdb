<template>
    <button class="py-2 w-1/3 rounded sm:hover:bg-secondary active:bg-primary sm:hover:text-white" @click="add">+</button>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['sku', 'count'],

        data() {
            return {
                save: null,
                total: 0
            }
        },

        methods: {
            add: function() {
                this.$emit('card-added', this.type);
                this.total += 1;

                if (this.save) {
                    clearTimeout(this.save);
                }

                this.save = setTimeout(() => {
                    axios.post('/collection/', {sku: this.sku, total: this.total});

                    this.total = 0;
                }, 1000);
            }
        }
    };
</script>
