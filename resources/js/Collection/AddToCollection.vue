<template>
    <div class="self-center pr-2">
        <a href="" @click.prevent="add" class="link">
            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
            </svg>
        </a>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['identifier', 'type'],

        methods: {
            add: function() {
                axios.post('/collection/', {identifier: this.identifier, type: this.type});

                this.$emit('card-added', this.type);
            }
        }
    };
</script>
