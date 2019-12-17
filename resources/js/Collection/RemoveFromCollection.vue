<template>
    <div class="self-center pl-2">
        <a href="" @click.prevent="remove" class="link">
            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"/>
            </svg>
        </a>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['identifier', 'type'],

        data() {
            return {
                save: null,
                total: 0
            }
        },

        methods: {
            remove: function() {
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
