<template>
    <div class="self-center pr-2">
        <a href="" @click.prevent="add" class="text-orange-300 hover:text-gray-800">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
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
