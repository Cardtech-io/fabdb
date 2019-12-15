<template>
    <div class="clearfix text-sm" v-if="results">
        <ul>
            <li class="float-left">
                <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-orange-700 hover:text-white" @click.prevent="previous">&lt;</a>
            </li>
            <li v-for="n in pageRange" class="float-left">
                <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-orange-700 hover:text-white" :class="active(n)">{{ n }}</a>
            </li>
            <li class="float-left">
                <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-orange-700 hover:text-white" @click.prevent="next">&gt;</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['results'],

        computed: {
            pageRange: function() {
                const rangeLimit = 7;
                const current = this.results.current_page;

                let first = current - 3;

                if (first + rangeLimit > this.results.last_page) {
                    first = this.results.last_page - rangeLimit;
                }

                if (first < 1) {
                    first = 1;
                }

                var range = [];

                for (var i = first; i < first + rangeLimit; i++) {
                    range.push(i);
                }

                return range;
            }
        },

        methods: {
            active: function(n) {
                return {
                    'bg-orange-700': this.results.current_page == n,
                    'text-white': this.results.current_page == n
                }
            },

            next: function() {
                this.$emit('page-selected', this.results.current_page + 1);
            },

            previous: function() {
                this.$emit('page-selected', this.results.current_page - 1);
            }
        }
    };
</script>