<template>
    <div class="clearfix text-sm text-center" v-if="results">
        <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-orange-700 hover:text-white" @click.prevent="previous">&lt;</a>
        <a v-for="n in pageRange" href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-orange-700 hover:text-white" :class="active(n)" @click.prevent="select(n)">{{ n }}</a>
        <a href="" class="inline-block rounded px-2 py-1 bg-white mr-1 hover:bg-orange-700 hover:text-white" @click.prevent="next">&gt;</a>
    </div>
</template>

<script>
    export default {
        props: ['results'],

        computed: {
            pageRange: function() {
                const rangeLimit = 7;
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
                    'bg-orange-700': this.results.current_page == n,
                    'text-white': this.results.current_page == n
                }
            },

            select: function(page) {
                this.selectPage(page);
            },

            next: function() {
                this.selectPage(this.results.current_page + 1);
            },

            previous: function() {
                this.selectPage(this.results.current_page - 1);
            },

            selectPage: function(page) {
                this.$emit('page-selected', page);
            }
        }
    };
</script>