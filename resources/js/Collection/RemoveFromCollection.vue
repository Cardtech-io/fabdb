<template>
    <div class="self-center pl-2">
        <a href="" @click.prevent="remove" :class="classes">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"/>
            </svg>
        </a>
    </div>
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

        computed: {
            classes: function() {
                return {
                    'text-orange-300': !this.disabled,
                    'hover:text-gray-800': !this.disabled,
                    'text-gray-400': this.disabled,
                    'cursor-not-allowed': this.disabled
                }
            },

            disabled: function() {
                return this.count == 0;
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
                    axios.delete('/collection/' + this.identifier + '/?type=' + this.type + '&total=' + this.total);

                    this.total = 0;
                }, 1000);
            }
        }
    };
</script>
