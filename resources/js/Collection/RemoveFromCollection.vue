<template>
    <button class="py-2 w-1/3 rounded" :class="{ 'sm:hover:bg-secondary active:bg-primary sm:hover:text-white': count > 0, 'text-gray-400': count === 0 }" @click="remove" :disabled="disabled">-</button>
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

        computed: {
            classes: function() {
                return {
                    'link-alternate': !this.disabled,
                    'text-gray-400': this.disabled,
                    'cursor-not-allowed': this.disabled
                }
            },

            disabled: function() {
                return this.count === 0;
            }
        },

        methods: {
            remove: function() {
                if (this.disabled) return;

                this.$emit('card-removed', this.type);
                this.total += 1;

                if (this.save) {
                    clearTimeout(this.save);
                }

                this.save = setTimeout(() => {
                    axios.delete('/collection/' + this.sku + '?total=' + this.total);

                    this.total = 0;
                }, 1000);
            }
        }
    };
</script>
