<template>
    <div class="clearfix text-sm text-center" v-if="results">
        <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1" @click.prevent="previous" :class="disabled(results.current_page == 1)">&lt;</a>
        <a v-for="n in pageRange" href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-red-700 hover:text-white" :class="active(n)" @click.prevent="select(n)">{{ n }}</a>
        <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1" @click.prevent="next" :class="disabled(results.current_page >= results.last_page)">&gt;</a>
    </div>
</template>

<script>
    export default {
        props: ['results'],

        computed: {
            pageRange: function() {
                const rangeLimit = 6;
                const currentPage = this.results.current_page;
                const lastPage = this.results.last_page;

                let first = currentPage - 3;

                if (first + rangeLimit > lastPage) {
                    first = lastPage - rangeLimit;
                }

                if (first < 1) {
                    first = 1;
                }

                let last = first + rangeLimit;

                if (last > lastPage) {
                    last = lastPage;
                }

                var range = [];

                for (var i = first; i <= last; i++) {
                    range.push(i);
                }

                return range;
            }
        },

        methods: {
            active: function(n) {
                return {
                    'bg-red-700': this.results.current_page == n,
                    'text-white': this.results.current_page == n
                }
            },

            disabled: function(disabled) {
                if (disabled) {
                    return 'text-gray-500 cursor-not-allowed';
                } else {
                    return 'hover:bg-red-700 hover:text-white';
                }
            },

            select: function(page) {
                this.selectPage(page);
            },

            next: function() {
                if (this.results.current_page >= this.results.last_page) return;

                this.selectPage(this.results.current_page + 1);
            },

            previous: function() {
                if (this.results.current_page <= 1) return;

                this.selectPage(this.results.current_page - 1);
            },

            selectPage: function(page) {
                this.$emit('page-selected', page);
            }
        }
    };
</script>
