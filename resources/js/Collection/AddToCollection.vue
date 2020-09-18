<template>
    <button class="py-2 w-1/3 hover:bg-primary hover:text-white" @click="add">+</button>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['identifier', 'type', 'count'],

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
                    axios.post('/collection/', {identifier: this.identifier, type: this.type, total: this.total});

                    this.total = 0;
                }, 1000);
            }
        }
    };
</script>
