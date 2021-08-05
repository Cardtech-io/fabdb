<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="classes()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <title>{{format}}</title>
        <path v-if="format === 'blitz'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
</template>

<script>
    export default {
        props: {
            format: {
                required: true,
                type: String
            },

            size: {
                default: 5,
                type: Number
            }
        },

        methods: {
            classes() {
                return 'h-'+this.size+' w-'+this.size;
            }
        }
    }
</script>
