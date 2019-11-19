<template>
    <div class="clearfix p-4 text-sm" v-if="results">
        <ul class="w-full">
            <li class="float-left w-1/3"><button @click="previous()" v-if="results.current_page > 1" class="text-orange-700 hover:text-gray-300">&lt; Previous</button>&nbsp;</li>
            <li class="float-left w-1/3 text-center">Found {{ results.total }} results</li>
            <li class="float-right w-1/3 text-right">&nbsp;<button @click="next()" v-if="results.current_page < results.last_page" class="text-orange-700 hover:text-gray-300">Next &gt;</button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['results'],

        methods: {
            next: function() {
                this.$emit('page-selected', this.results.current_page + 1);
            },

            previous: function() {
                this.$emit('page-selected', this.results.current_page - 1);
            }
        }
    };
</script>